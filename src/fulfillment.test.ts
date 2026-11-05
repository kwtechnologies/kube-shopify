import { beforeEach, describe, expect, expectTypeOf, it, vi } from "vitest";

import {
  createFulfillment,
  getAssignedFulfillmentOrders,
  updateTrackingInfo,
} from "./fulfillment";
import type {
  CountryCode,
  LocalizedFieldKey,
  LocalizedFieldPurpose,
} from "./generated/admin.types";
import type { FulfillmentOrderOrder, ShopifyCredentials } from "./types";

const request = vi.fn();

vi.mock("@shopify/admin-api-client", () => ({
  createAdminApiClient: vi.fn(() => ({ request })),
}));

const credentials: ShopifyCredentials = {
  accessToken: "token",
  shop: "example-shop",
};

type LocalizedFields = FulfillmentOrderOrder["localizedFields"];

function assignedFieldsResponse(...fields: LocalizedFields[]) {
  return {
    data: {
      shop: {
        assignedFulfillmentOrders: {
          nodes: fields.map((localizedFields, index) => ({
            id: `gid://shopify/FulfillmentOrder/${index + 1}`,
            order: { localizedFields },
          })),
        },
      },
    },
  };
}

function remainingFieldsResponse(localizedFields: LocalizedFields) {
  return { data: { fulfillmentOrder: { order: { localizedFields } } } };
}

describe("fulfillment helpers", () => {
  beforeEach(() => {
    request.mockReset();
  });

  it("selects and returns localized fields on assigned fulfillment orders", async () => {
    const localizedFields: FulfillmentOrderOrder["localizedFields"] = {
      pageInfo: { hasNextPage: false, endCursor: null },
      nodes: [
        {
          key: "SHIPPING_CREDENTIAL_CN",
          countryCode: "CN",
          purpose: "SHIPPING",
          title: "Resident ID number",
          value: "SYNTHETIC-CN-CREDENTIAL",
        },
      ],
    };
    const expectedOrders = [
      {
        id: "gid://shopify/FulfillmentOrder/1",
        orderName: "#1001",
        requestStatus: "SUBMITTED",
        status: "OPEN",
        destination: { countryCode: "HK" },
        lineItems: { nodes: [{ id: "gid://shopify/FulfillmentOrderLineItem/1", sku: "SKU-1", totalQuantity: 2 }] },
        merchantRequests: { nodes: [] },
        order: {
          localizedFields,
          note: null,
          name: "#1001",
          email: null,
          phone: null,
          shippingAddress: null,
          totalPrice: "0.00",
          lineItems: { nodes: [] },
        },
      },
    ];
    request.mockResolvedValueOnce({
      data: {
        shop: {
          assignedFulfillmentOrders: {
            nodes: expectedOrders,
          },
        },
      },
    });
    const actualOrders = await getAssignedFulfillmentOrders({
      credentials,
      status: "FULFILLMENT_REQUESTED",
      merchantRequestKind: "FULFILLMENT_REQUEST",
    });
    expect(actualOrders).toBe(expectedOrders);
    expect(request).toHaveBeenCalledTimes(1);
    expect(actualOrders[0].order.localizedFields).toEqual(localizedFields);
    expectTypeOf<FulfillmentOrderOrder["localizedFields"]["nodes"][number]>()
      .toEqualTypeOf<{
        key: LocalizedFieldKey;
        countryCode: CountryCode;
        purpose: LocalizedFieldPurpose;
        title: string;
        value: string;
      }>();
    expect(request.mock.calls[0][0]).toMatch(/pageInfo\s*\{\s*hasNextPage\s+endCursor\s*\}/);
    expect(request.mock.calls[0][0]).toMatch(
      /order\s*\{\s*localizedFields\(first:\s*20\)\s*\{\s*nodes\s*\{\s*key\s+countryCode\s+purpose\s+title\s+value\s*\}/,
    );
    expect(request).toHaveBeenCalledWith(
      expect.stringContaining("countryCode"),
      expect.objectContaining({
        variables: {
          status: "FULFILLMENT_REQUESTED",
          requestKind: "FULFILLMENT_REQUEST",
          locationIds: undefined,
        },
      }),
    );
  });

  it("fetches remaining localized-field pages and preserves records in order", async () => {
    const firstPage: LocalizedFields["nodes"] = Array.from(
      { length: 20 },
      (_, index) => ({
        key: "SHIPPING_CREDENTIAL_CN",
        countryCode: "CN",
        purpose: "SHIPPING",
        title: "Resident ID number",
        value: ` SYNTHETIC-${index} `,
      }),
    );
    const duplicate = firstPage[0];
    const otherCountry: LocalizedFields["nodes"][number] = {
      key: "SHIPPING_CREDENTIAL_BR",
      countryCode: "BR",
      purpose: "SHIPPING",
      title: "Synthetic field <title>",
      value: " SYNTHETIC-BR ",
    };
    request
      .mockResolvedValueOnce(
        assignedFieldsResponse({
          nodes: firstPage,
          pageInfo: { hasNextPage: true, endCursor: "cursor-20" },
        }),
      )
      .mockResolvedValueOnce(
        remainingFieldsResponse({
          nodes: [duplicate],
          pageInfo: { hasNextPage: true, endCursor: "cursor-21" },
        }),
      )
      .mockResolvedValueOnce(
        remainingFieldsResponse({
          nodes: [otherCountry],
          pageInfo: { hasNextPage: false, endCursor: "cursor-22" },
        }),
      );

    const orders = await getAssignedFulfillmentOrders({
      credentials,
      status: "FULFILLMENT_REQUESTED",
      merchantRequestKind: "FULFILLMENT_REQUEST",
    });

    expect(orders[0].order.localizedFields.nodes).toEqual([
      ...firstPage,
      duplicate,
      otherCountry,
    ]);
    expect(orders[0].order.localizedFields.nodes).toHaveLength(22);
    expect(orders[0].order.localizedFields.pageInfo).toEqual({
      hasNextPage: false,
      endCursor: "cursor-22",
    });
    expect(request).toHaveBeenCalledTimes(3);
    expect(
      request.mock.calls.slice(1).map(([, options]) => options.variables),
    ).toEqual([
      { id: "gid://shopify/FulfillmentOrder/1", after: "cursor-20" },
      { id: "gid://shopify/FulfillmentOrder/1", after: "cursor-21" },
    ]);
    expect(request.mock.calls[1][0]).toMatch(
      /localizedFields\(first: 20, after: \$after\)/,
    );
    expect(request.mock.calls[1][0]).not.toMatch(
      /shippingAddress|lineItems|totalPrice/,
    );
  });

  it.each([null, "cursor-20"])(
    "rejects incomplete pagination with a missing or repeated cursor (%s)",
    async (endCursor) => {
      request
        .mockResolvedValueOnce(
          assignedFieldsResponse({
            nodes: [],
            pageInfo: { hasNextPage: true, endCursor: "cursor-20" },
          }),
        )
        .mockResolvedValueOnce(
          remainingFieldsResponse({
            nodes: [],
            pageInfo: { hasNextPage: true, endCursor },
          }),
        )
        .mockResolvedValueOnce(
          remainingFieldsResponse({
            nodes: [],
            pageInfo: { hasNextPage: false, endCursor: null },
          }),
        );

      await expect(
        getAssignedFulfillmentOrders({
          credentials,
          status: "FULFILLMENT_REQUESTED",
          merchantRequestKind: "FULFILLMENT_REQUEST",
        }),
      ).rejects.toThrow(
        "Shopify API Error: localized fields pagination cursor is missing or repeated",
      );
      expect(request).toHaveBeenCalledTimes(2);
    },
  );

  it("returns empty localized fields without a follow-up request", async () => {
    const localizedFields = {
      nodes: [],
      pageInfo: { hasNextPage: false, endCursor: null },
    };
    request.mockResolvedValueOnce(assignedFieldsResponse(localizedFields));

    const orders = await getAssignedFulfillmentOrders({
      credentials,
      status: "FULFILLMENT_REQUESTED",
      merchantRequestKind: "FULFILLMENT_REQUEST",
    });

    expect(orders[0].order.localizedFields).toEqual(localizedFields);
    expect(request).toHaveBeenCalledTimes(1);
  });

  it("keeps localized-field pagination separate for each fulfillment order", async () => {
    const field = (value: string): LocalizedFields["nodes"][number] => ({
      key: "SHIPPING_CREDENTIAL_CN",
      countryCode: "CN",
      purpose: "SHIPPING",
      title: "Synthetic field",
      value,
    });
    request.mockResolvedValueOnce(
      assignedFieldsResponse(
        ...[1, 2].map((id) => ({
          nodes: [field(`SYNTHETIC-${id}-FIRST`)],
          pageInfo: { hasNextPage: true, endCursor: "same-cursor" },
        })),
      ),
    );
    for (const id of [1, 2]) {
      request.mockResolvedValueOnce(
        remainingFieldsResponse({
          nodes: [field(`SYNTHETIC-${id}-LAST`)],
          pageInfo: { hasNextPage: false, endCursor: null },
        }),
      );
    }

    const orders = await getAssignedFulfillmentOrders({
      credentials,
      status: "FULFILLMENT_REQUESTED",
      merchantRequestKind: "FULFILLMENT_REQUEST",
    });

    expect(
      orders.map((order) =>
        order.order.localizedFields.nodes.map((node) => node.value),
      ),
    ).toEqual([
      ["SYNTHETIC-1-FIRST", "SYNTHETIC-1-LAST"],
      ["SYNTHETIC-2-FIRST", "SYNTHETIC-2-LAST"],
    ]);
    expect(
      request.mock.calls.slice(1).map(([, options]) => options.variables.id),
    ).toEqual([
      "gid://shopify/FulfillmentOrder/1",
      "gid://shopify/FulfillmentOrder/2",
    ]);
  });

  it.each([null, undefined])(
    "rejects a missing continuation payload (%s)",
    async (fulfillmentOrder) => {
      request
        .mockResolvedValueOnce(
          assignedFieldsResponse({
            nodes: [],
            pageInfo: { hasNextPage: true, endCursor: "cursor-20" },
          }),
        )
        .mockResolvedValueOnce({
          data:
            fulfillmentOrder === undefined ? undefined : { fulfillmentOrder },
        });

      await expect(
        getAssignedFulfillmentOrders({
          credentials,
          status: "FULFILLMENT_REQUESTED",
          merchantRequestKind: "FULFILLMENT_REQUEST",
        }),
      ).rejects.toThrow("Shopify API Error:");
    },
  );

  it("creates fulfillment with a Shopify fulfillment order input", async () => {
    const expectedPayload = {
      fulfillment: { id: "gid://shopify/Fulfillment/1", status: "SUCCESS", name: "#1001.1" },
      userErrors: [],
    };
    request.mockResolvedValueOnce({
      data: { fulfillmentCreateV2: expectedPayload },
    });
    const actualPayload = await createFulfillment({
      credentials,
      fulfillmentOrderId: "gid://shopify/FulfillmentOrder/1",
    });
    expect(actualPayload).toBe(expectedPayload);
    expect(request).toHaveBeenCalledWith(
      expect.stringContaining("fulfillmentCreateV2"),
      expect.objectContaining({
        variables: {
          fulfillment: {
            lineItemsByFulfillmentOrder: [
              { fulfillmentOrderId: "gid://shopify/FulfillmentOrder/1" },
            ],
          },
        },
      }),
    );
  });

  it.each([true, false])(
    "creates fulfillment with tracking and notifyCustomer=%s in one request",
    async (notifyCustomer) => {
      const expectedPayload = {
        fulfillment: { id: "gid://shopify/Fulfillment/1", status: "SUCCESS", name: "#1001.1" },
        userErrors: [],
      };
      request.mockResolvedValueOnce({
        data: { fulfillmentCreateV2: expectedPayload },
      });

      const actualPayload = await createFulfillment({
        credentials,
        fulfillmentOrderId: "gid://shopify/FulfillmentOrder/1",
        trackingInfo: {
          number: "SF123",
          url: "https://example.com/SF123",
          company: "SF Express",
        },
        notifyCustomer,
      });

      expect(actualPayload).toBe(expectedPayload);
      expect(request).toHaveBeenCalledTimes(1);
      expect(request).toHaveBeenCalledWith(
        expect.stringContaining("fulfillmentCreateV2"),
        {
          variables: {
            fulfillment: {
              lineItemsByFulfillmentOrder: [
                { fulfillmentOrderId: "gid://shopify/FulfillmentOrder/1" },
              ],
              trackingInfo: {
                number: "SF123",
                url: "https://example.com/SF123",
                company: "SF Express",
              },
              notifyCustomer,
            },
          },
        },
      );
    },
  );

  it("creates fulfillment without tracking and with notifications disabled", async () => {
    request.mockResolvedValueOnce({
      data: { fulfillmentCreateV2: { fulfillment: { id: "gid://shopify/Fulfillment/1" }, userErrors: [] } },
    });

    await createFulfillment({
      credentials,
      fulfillmentOrderId: "gid://shopify/FulfillmentOrder/1",
      notifyCustomer: false,
    });

    expect(request).toHaveBeenCalledTimes(1);
    expect(request).toHaveBeenCalledWith(
      expect.stringContaining("fulfillmentCreateV2"),
      {
        variables: {
          fulfillment: {
            lineItemsByFulfillmentOrder: [
              { fulfillmentOrderId: "gid://shopify/FulfillmentOrder/1" },
            ],
            notifyCustomer: false,
          },
        },
      },
    );
  });

  it("keeps tracking fields and notification preference optional on create", async () => {
    request.mockResolvedValueOnce({
      data: { fulfillmentCreateV2: { fulfillment: { id: "gid://shopify/Fulfillment/1" }, userErrors: [] } },
    });

    await createFulfillment({
      credentials,
      fulfillmentOrderId: "gid://shopify/FulfillmentOrder/1",
      trackingInfo: { number: "SF123" },
    });

    const fulfillment = request.mock.calls[0][1].variables.fulfillment;
    expect(fulfillment.trackingInfo).toEqual({ number: "SF123" });
    expect(fulfillment).not.toHaveProperty("notifyCustomer");
  });

  it("maps tracking info to Shopify tracking fields", async () => {
    const expectedPayload = {
      fulfillment: { id: "gid://shopify/Fulfillment/1" },
      userErrors: [],
    };
    request.mockResolvedValueOnce({
      data: { fulfillmentTrackingInfoUpdateV2: expectedPayload },
    });
    const actualPayload = await updateTrackingInfo({
      credentials,
      fulfillmentId: "gid://shopify/Fulfillment/1",
      trackingInfo: {
        number: "SF123",
        url: "https://example.com/SF123",
        company: "SF Express",
      },
    });
    expect(actualPayload).toBe(expectedPayload);
    expect(request).toHaveBeenCalledWith(
      expect.stringContaining("fulfillmentTrackingInfoUpdateV2"),
      expect.objectContaining({
        variables: expect.objectContaining({
          notifyCustomer: true,
          trackingInfoInput: {
            number: "SF123",
            url: "https://example.com/SF123",
            company: "SF Express",
          },
        }),
      }),
    );
  });

  it("allows later tracking updates without notifying the customer", async () => {
    request.mockResolvedValueOnce({
      data: { fulfillmentTrackingInfoUpdateV2: { fulfillment: { id: "gid://shopify/Fulfillment/1" }, userErrors: [] } },
    });

    await updateTrackingInfo({
      credentials,
      fulfillmentId: "gid://shopify/Fulfillment/1",
      trackingInfo: { number: "SF456", company: "SF Express", url: "https://example.com/SF456" },
      notifyCustomer: false,
    });

    expect(request).toHaveBeenCalledWith(
      expect.stringContaining("fulfillmentTrackingInfoUpdateV2"),
      {
        variables: {
          fulfillmentId: "gid://shopify/Fulfillment/1",
          trackingInfoInput: { number: "SF456", company: "SF Express", url: "https://example.com/SF456" },
          notifyCustomer: false,
        },
      },
    );
  });

  it.each(["create", "update"] as const)(
    "selects and returns %s userErrors for the caller to handle",
    async (operation) => {
      const expectedPayload = {
        fulfillment: null,
        userErrors: [{ field: ["fulfillment", "trackingInfo", "number"], message: "Invalid tracking number" }],
      };
      const payloadKey = operation === "create"
        ? "fulfillmentCreateV2"
        : "fulfillmentTrackingInfoUpdateV2";
      request.mockResolvedValueOnce({ data: { [payloadKey]: expectedPayload } });

      const actualPayload = operation === "create"
        ? await createFulfillment({
            credentials,
            fulfillmentOrderId: "gid://shopify/FulfillmentOrder/1",
            trackingInfo: { number: "invalid" },
            notifyCustomer: true,
          })
        : await updateTrackingInfo({
            credentials,
            fulfillmentId: "gid://shopify/Fulfillment/1",
            trackingInfo: { number: "invalid" },
            notifyCustomer: false,
          });

      expect(actualPayload).toBe(expectedPayload);
      expect(actualPayload.userErrors).toEqual(expectedPayload.userErrors);
      expect(request.mock.calls[0][0]).toMatch(/userErrors\s*\{\s*field\s+message\s*\}/);
    },
  );
});

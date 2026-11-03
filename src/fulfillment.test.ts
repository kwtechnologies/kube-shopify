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

describe("fulfillment helpers", () => {
  beforeEach(() => {
    request.mockReset();
  });

  it("selects and returns localized fields on assigned fulfillment orders", async () => {
    const localizedFields: FulfillmentOrderOrder["localizedFields"] = {
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
    expect(actualOrders[0].order.localizedFields).toEqual(localizedFields);
    expectTypeOf<FulfillmentOrderOrder["localizedFields"]["nodes"][number]>()
      .toEqualTypeOf<{
        key: LocalizedFieldKey;
        countryCode: CountryCode;
        purpose: LocalizedFieldPurpose;
        title: string;
        value: string;
      }>();
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
          trackingInfoInput: {
            number: "SF123",
            url: "https://example.com/SF123",
            company: "SF Express",
          },
        }),
      }),
    );
  });
});

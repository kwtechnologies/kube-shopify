import { requestShopifyAdmin } from "./client";
import type {
  AcceptCancellationRequestMutation,
  AcceptFulfillmentRequestMutation,
  CreateFulfillmentMutation,
  GetAssignedFulfillmentOrdersQuery,
  GetAssignedFulfillmentOrdersQueryVariables,
  RejectCancellationRequestMutation,
  RejectFulfillmentRequestMutation,
  UpdateTrackingInfoMutation,
} from "./generated/admin.generated";
import type {
  AssignedFulfillmentOrder,
  FulfillmentCreatePayload,
  FulfillmentOrderActionPayload,
  FulfillmentOrderAssignmentStatus,
  FulfillmentOrderMerchantRequestKind,
  FulfillmentTrackingInfo,
  FulfillmentTrackingInfoPayload,
  ShopifyCredentials,
} from "./types";

const GET_ASSIGNED_FULFILLMENT_ORDERS = `#graphql
  query GetAssignedFulfillmentOrders(
    $locationIds: [ID!]
    $status: FulfillmentOrderAssignmentStatus
    $requestKind: FulfillmentOrderMerchantRequestKind
  ) {
    shop {
      assignedFulfillmentOrders(
        first: 50
        assignmentStatus: $status
        locationIds: $locationIds
      ) {
        nodes {
          id
          orderName
          requestStatus
          status
          destination {
            firstName
            lastName
            address1
            address2
            city
            zip
            province
            countryCode
            phone
            email
          }
          lineItems(first: 50) {
            nodes {
              id
              sku
              totalQuantity
            }
          }
          order {
            note
            name
            email
            phone
            shippingAddress {
              phone
              address1
              address2
              countryCodeV2
              city
              province
              zip
              firstName
              lastName
              country
            }
            totalPrice
            lineItems(first: 150) {
              nodes {
                id
                sku
                quantity
                originalTotal
                originalUnitPrice
                discountedTotal
                discountedUnitPrice
              }
            }
          }
          merchantRequests(first: 1, kind: $requestKind) {
            nodes {
              message
            }
          }
        }
      }
    }
  }
` as const;

const ACCEPT_FULFILLMENT_REQUEST = `#graphql
  mutation AcceptFulfillmentRequest($id: ID!, $message: String) {
    fulfillmentOrderAcceptFulfillmentRequest(id: $id, message: $message) {
      fulfillmentOrder {
        id
        status
        requestStatus
      }
      userErrors {
        field
        message
      }
    }
  }
` as const;

const REJECT_FULFILLMENT_REQUEST = `#graphql
  mutation RejectFulfillmentRequest($id: ID!, $message: String) {
    fulfillmentOrderRejectFulfillmentRequest(id: $id, message: $message) {
      fulfillmentOrder {
        id
        status
        requestStatus
      }
      userErrors {
        field
        message
      }
    }
  }
` as const;

const ACCEPT_CANCELLATION_REQUEST = `#graphql
  mutation AcceptCancellationRequest($id: ID!, $message: String) {
    fulfillmentOrderAcceptCancellationRequest(id: $id, message: $message) {
      fulfillmentOrder {
        id
        status
        requestStatus
      }
      userErrors {
        field
        message
      }
    }
  }
` as const;

const REJECT_CANCELLATION_REQUEST = `#graphql
  mutation RejectCancellationRequest($id: ID!, $message: String) {
    fulfillmentOrderRejectCancellationRequest(id: $id, message: $message) {
      fulfillmentOrder {
        id
        status
        requestStatus
      }
      userErrors {
        field
        message
      }
    }
  }
` as const;

const CREATE_FULFILLMENT = `#graphql
  mutation CreateFulfillment($fulfillment: FulfillmentV2Input!) {
    fulfillmentCreateV2(fulfillment: $fulfillment) {
      fulfillment {
        id
        status
        name
      }
      userErrors {
        field
        message
      }
    }
  }
` as const;

const UPDATE_TRACKING_INFO = `#graphql
  mutation UpdateTrackingInfo(
    $fulfillmentId: ID!
    $trackingInfoInput: FulfillmentTrackingInput!
    $notifyCustomer: Boolean
  ) {
    fulfillmentTrackingInfoUpdateV2(
      fulfillmentId: $fulfillmentId
      trackingInfoInput: $trackingInfoInput
      notifyCustomer: $notifyCustomer
    ) {
      fulfillment {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
` as const;

function requirePayload<TPayload>(
  payload: TPayload | null | undefined,
  operationName: string,
): TPayload {
  if (!payload) {
    throw new Error(`Shopify API Error: ${operationName} payload is empty`);
  }
  return payload;
}

export async function getAssignedFulfillmentOrders({
  credentials,
  status,
  merchantRequestKind,
  locationIds,
}: {
  readonly credentials: ShopifyCredentials;
  readonly status: FulfillmentOrderAssignmentStatus;
  readonly merchantRequestKind: FulfillmentOrderMerchantRequestKind;
  readonly locationIds?: GetAssignedFulfillmentOrdersQueryVariables["locationIds"];
}): Promise<readonly AssignedFulfillmentOrder[]> {
  const data: GetAssignedFulfillmentOrdersQuery = await requestShopifyAdmin({
    credentials,
    query: GET_ASSIGNED_FULFILLMENT_ORDERS,
    options: { variables: { status, requestKind: merchantRequestKind, locationIds } },
  });
  return data.shop.assignedFulfillmentOrders.nodes;
}

export async function acceptFulfillmentRequest({
  credentials,
  fulfillmentOrderId,
  message,
}: {
  readonly credentials: ShopifyCredentials;
  readonly fulfillmentOrderId: string;
  readonly message?: string;
}): Promise<FulfillmentOrderActionPayload> {
  const data: AcceptFulfillmentRequestMutation = await requestShopifyAdmin({
    credentials,
    query: ACCEPT_FULFILLMENT_REQUEST,
    options: { variables: { id: fulfillmentOrderId, message } },
  });
  return requirePayload(
    data.fulfillmentOrderAcceptFulfillmentRequest,
    "fulfillmentOrderAcceptFulfillmentRequest",
  );
}

export async function rejectFulfillmentRequest({
  credentials,
  fulfillmentOrderId,
  message,
}: {
  readonly credentials: ShopifyCredentials;
  readonly fulfillmentOrderId: string;
  readonly message?: string;
}): Promise<FulfillmentOrderActionPayload> {
  const data: RejectFulfillmentRequestMutation = await requestShopifyAdmin({
    credentials,
    query: REJECT_FULFILLMENT_REQUEST,
    options: { variables: { id: fulfillmentOrderId, message } },
  });
  return requirePayload(
    data.fulfillmentOrderRejectFulfillmentRequest,
    "fulfillmentOrderRejectFulfillmentRequest",
  );
}

export async function acceptCancellationRequest({
  credentials,
  fulfillmentOrderId,
  message,
}: {
  readonly credentials: ShopifyCredentials;
  readonly fulfillmentOrderId: string;
  readonly message?: string;
}): Promise<FulfillmentOrderActionPayload> {
  const data: AcceptCancellationRequestMutation = await requestShopifyAdmin({
    credentials,
    query: ACCEPT_CANCELLATION_REQUEST,
    options: { variables: { id: fulfillmentOrderId, message } },
  });
  return requirePayload(
    data.fulfillmentOrderAcceptCancellationRequest,
    "fulfillmentOrderAcceptCancellationRequest",
  );
}

export async function rejectCancellationRequest({
  credentials,
  fulfillmentOrderId,
  message,
}: {
  readonly credentials: ShopifyCredentials;
  readonly fulfillmentOrderId: string;
  readonly message?: string;
}): Promise<FulfillmentOrderActionPayload> {
  const data: RejectCancellationRequestMutation = await requestShopifyAdmin({
    credentials,
    query: REJECT_CANCELLATION_REQUEST,
    options: { variables: { id: fulfillmentOrderId, message } },
  });
  return requirePayload(
    data.fulfillmentOrderRejectCancellationRequest,
    "fulfillmentOrderRejectCancellationRequest",
  );
}

export async function createFulfillment({
  credentials,
  fulfillmentOrderId,
}: {
  readonly credentials: ShopifyCredentials;
  readonly fulfillmentOrderId: string;
}): Promise<FulfillmentCreatePayload> {
  const data: CreateFulfillmentMutation = await requestShopifyAdmin({
    credentials,
    query: CREATE_FULFILLMENT,
    options: {
      variables: {
        fulfillment: {
          lineItemsByFulfillmentOrder: [{ fulfillmentOrderId }],
        },
      },
    },
  });
  return requirePayload(data.fulfillmentCreateV2, "fulfillmentCreateV2");
}

export async function updateTrackingInfo({
  credentials,
  fulfillmentId,
  trackingInfo,
  notifyCustomer = true,
}: {
  readonly credentials: ShopifyCredentials;
  readonly fulfillmentId: string;
  readonly trackingInfo: FulfillmentTrackingInfo;
  readonly notifyCustomer?: boolean;
}): Promise<FulfillmentTrackingInfoPayload> {
  const data: UpdateTrackingInfoMutation = await requestShopifyAdmin({
    credentials,
    query: UPDATE_TRACKING_INFO,
    options: {
      variables: {
        fulfillmentId,
        trackingInfoInput: {
          number: trackingInfo.number,
          url: trackingInfo.url,
          company: trackingInfo.company,
        },
        notifyCustomer,
      },
    },
  });
  return requirePayload(
    data.fulfillmentTrackingInfoUpdateV2,
    "fulfillmentTrackingInfoUpdateV2",
  );
}

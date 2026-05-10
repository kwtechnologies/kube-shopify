import { requestShopifyAdmin } from "./client";
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
`;

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
`;

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
`;

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
`;

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
`;

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
`;

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
`;

interface AssignedFulfillmentOrdersData {
  readonly shop: {
    readonly assignedFulfillmentOrders: {
      readonly nodes: readonly AssignedFulfillmentOrder[];
    };
  };
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
  readonly locationIds?: readonly string[];
}): Promise<readonly AssignedFulfillmentOrder[]> {
  const data = await requestShopifyAdmin<AssignedFulfillmentOrdersData>({
    credentials,
    query: GET_ASSIGNED_FULFILLMENT_ORDERS,
    variables: { status, requestKind: merchantRequestKind, locationIds },
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
  const data = await requestShopifyAdmin<{
    readonly fulfillmentOrderAcceptFulfillmentRequest: FulfillmentOrderActionPayload;
  }>({
    credentials,
    query: ACCEPT_FULFILLMENT_REQUEST,
    variables: { id: fulfillmentOrderId, message },
  });
  return data.fulfillmentOrderAcceptFulfillmentRequest;
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
  const data = await requestShopifyAdmin<{
    readonly fulfillmentOrderRejectFulfillmentRequest: FulfillmentOrderActionPayload;
  }>({
    credentials,
    query: REJECT_FULFILLMENT_REQUEST,
    variables: { id: fulfillmentOrderId, message },
  });
  return data.fulfillmentOrderRejectFulfillmentRequest;
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
  const data = await requestShopifyAdmin<{
    readonly fulfillmentOrderAcceptCancellationRequest: FulfillmentOrderActionPayload;
  }>({
    credentials,
    query: ACCEPT_CANCELLATION_REQUEST,
    variables: { id: fulfillmentOrderId, message },
  });
  return data.fulfillmentOrderAcceptCancellationRequest;
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
  const data = await requestShopifyAdmin<{
    readonly fulfillmentOrderRejectCancellationRequest: FulfillmentOrderActionPayload;
  }>({
    credentials,
    query: REJECT_CANCELLATION_REQUEST,
    variables: { id: fulfillmentOrderId, message },
  });
  return data.fulfillmentOrderRejectCancellationRequest;
}

export async function createFulfillment({
  credentials,
  fulfillmentOrderId,
}: {
  readonly credentials: ShopifyCredentials;
  readonly fulfillmentOrderId: string;
}): Promise<FulfillmentCreatePayload> {
  const data = await requestShopifyAdmin<{
    readonly fulfillmentCreateV2: FulfillmentCreatePayload;
  }>({
    credentials,
    query: CREATE_FULFILLMENT,
    variables: {
      fulfillment: {
        lineItemsByFulfillmentOrder: [{ fulfillmentOrderId }],
      },
    },
  });
  return data.fulfillmentCreateV2;
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
  const data = await requestShopifyAdmin<{
    readonly fulfillmentTrackingInfoUpdateV2: FulfillmentTrackingInfoPayload;
  }>({
    credentials,
    query: UPDATE_TRACKING_INFO,
    variables: {
      fulfillmentId,
      trackingInfoInput: {
        number: trackingInfo.number,
        url: trackingInfo.url,
        company: trackingInfo.company,
      },
      notifyCustomer,
    },
  });
  return data.fulfillmentTrackingInfoUpdateV2;
}

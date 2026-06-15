import type {
  AcceptCancellationRequestMutation,
  AcceptFulfillmentRequestMutation,
  CreateFulfillmentMutation,
  GetAssignedFulfillmentOrdersQuery,
  RejectCancellationRequestMutation,
  RejectFulfillmentRequestMutation,
  UpdateTrackingInfoMutation,
} from "./generated/admin.generated";
import type {
  FulfillmentOrderAssignmentStatus,
  FulfillmentOrderMerchantRequestKind,
  FulfillmentTrackingInput,
} from "./generated/admin.types";

export interface ShopifyCredentials {
  readonly shop: string;
  readonly accessToken: string;
}

export type AssignedFulfillmentOrder =
  GetAssignedFulfillmentOrdersQuery["shop"]["assignedFulfillmentOrders"]["nodes"][number];

export type FulfillmentOrderDestination = NonNullable<
  AssignedFulfillmentOrder["destination"]
>;

export type FulfillmentOrderLineItem =
  AssignedFulfillmentOrder["lineItems"]["nodes"][number];

export type FulfillmentOrderMerchantRequest =
  AssignedFulfillmentOrder["merchantRequests"]["nodes"][number];

export type FulfillmentOrderOrder = AssignedFulfillmentOrder["order"];

export type OrderLineItem = FulfillmentOrderOrder["lineItems"]["nodes"][number];

export type OrderShippingAddress = NonNullable<
  FulfillmentOrderOrder["shippingAddress"]
>;

export type FulfillmentOrderActionPayload = NonNullable<
  | AcceptFulfillmentRequestMutation["fulfillmentOrderAcceptFulfillmentRequest"]
  | RejectFulfillmentRequestMutation["fulfillmentOrderRejectFulfillmentRequest"]
  | AcceptCancellationRequestMutation["fulfillmentOrderAcceptCancellationRequest"]
  | RejectCancellationRequestMutation["fulfillmentOrderRejectCancellationRequest"]
>;

export type ShopifyUserError =
  FulfillmentOrderActionPayload["userErrors"][number];

export type FulfillmentCreatePayload = NonNullable<
  CreateFulfillmentMutation["fulfillmentCreateV2"]
>;

export type FulfillmentTrackingInfoPayload = NonNullable<
  UpdateTrackingInfoMutation["fulfillmentTrackingInfoUpdateV2"]
>;

export type FulfillmentTrackingInfo = Pick<
  FulfillmentTrackingInput,
  "company" | "number" | "url"
>;

export {
  FulfillmentOrderAssignmentStatus,
  FulfillmentOrderMerchantRequestKind,
};

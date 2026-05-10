//#region src/types.d.ts
interface ShopifyCredentials {
  readonly shop: string;
  readonly accessToken: string;
}
type FulfillmentOrderAssignmentStatus = "FULFILLMENT_REQUESTED" | "CANCELLATION_REQUESTED";
type FulfillmentOrderMerchantRequestKind = "FULFILLMENT_REQUEST" | "CANCELLATION_REQUEST";
interface FulfillmentOrderDestination {
  readonly firstName: string | null;
  readonly lastName: string | null;
  readonly address1: string | null;
  readonly address2: string | null;
  readonly city: string | null;
  readonly zip: string | null;
  readonly province: string | null;
  readonly countryCode: string | null;
  readonly phone: string | null;
  readonly email: string | null;
}
interface FulfillmentOrderLineItem {
  readonly id: string;
  readonly sku: string | null;
  readonly totalQuantity: number;
}
interface OrderShippingAddress {
  readonly phone: string | null;
  readonly address1: string | null;
  readonly address2: string | null;
  readonly countryCodeV2: string | null;
  readonly city: string | null;
  readonly province: string | null;
  readonly zip: string | null;
  readonly firstName: string | null;
  readonly lastName: string | null;
  readonly country: string | null;
}
interface OrderLineItem {
  readonly id: string;
  readonly sku: string | null;
  readonly quantity: number;
  readonly originalTotal: string;
  readonly originalUnitPrice: string;
  readonly discountedTotal: string;
  readonly discountedUnitPrice: string;
}
interface FulfillmentOrderOrder {
  readonly note: string | null;
  readonly name: string;
  readonly email: string | null;
  readonly phone: string | null;
  readonly shippingAddress: OrderShippingAddress | null;
  readonly totalPrice: string;
  readonly lineItems: {
    readonly nodes: readonly OrderLineItem[];
  };
}
interface FulfillmentOrderMerchantRequest {
  readonly message: string | null;
}
interface AssignedFulfillmentOrder {
  readonly id: string;
  readonly orderName: string;
  readonly requestStatus: string;
  readonly status: string;
  readonly destination: FulfillmentOrderDestination | null;
  readonly lineItems: {
    readonly nodes: readonly FulfillmentOrderLineItem[];
  };
  readonly merchantRequests: {
    readonly nodes: readonly FulfillmentOrderMerchantRequest[];
  };
  readonly order: FulfillmentOrderOrder;
}
interface ShopifyUserError {
  readonly field: readonly string[] | null;
  readonly message: string;
}
interface FulfillmentOrderActionPayload {
  readonly fulfillmentOrder: {
    readonly id: string;
    readonly status: string;
    readonly requestStatus: string;
  } | null;
  readonly userErrors: readonly ShopifyUserError[];
}
interface FulfillmentCreatePayload {
  readonly fulfillment: {
    readonly id: string;
    readonly status: string;
    readonly name: string;
  } | null;
  readonly userErrors: readonly ShopifyUserError[];
}
interface FulfillmentTrackingInfoPayload {
  readonly fulfillment: {
    readonly id: string;
  } | null;
  readonly userErrors: readonly ShopifyUserError[];
}
interface FulfillmentTrackingInfo {
  readonly number: string;
  readonly url: string;
  readonly company: string;
}
//#endregion
//#region src/fulfillment.d.ts
declare function getAssignedFulfillmentOrders({
  credentials,
  status,
  merchantRequestKind,
  locationIds
}: {
  readonly credentials: ShopifyCredentials;
  readonly status: FulfillmentOrderAssignmentStatus;
  readonly merchantRequestKind: FulfillmentOrderMerchantRequestKind;
  readonly locationIds?: readonly string[];
}): Promise<readonly AssignedFulfillmentOrder[]>;
declare function acceptFulfillmentRequest({
  credentials,
  fulfillmentOrderId,
  message
}: {
  readonly credentials: ShopifyCredentials;
  readonly fulfillmentOrderId: string;
  readonly message?: string;
}): Promise<FulfillmentOrderActionPayload>;
declare function rejectFulfillmentRequest({
  credentials,
  fulfillmentOrderId,
  message
}: {
  readonly credentials: ShopifyCredentials;
  readonly fulfillmentOrderId: string;
  readonly message?: string;
}): Promise<FulfillmentOrderActionPayload>;
declare function acceptCancellationRequest({
  credentials,
  fulfillmentOrderId,
  message
}: {
  readonly credentials: ShopifyCredentials;
  readonly fulfillmentOrderId: string;
  readonly message?: string;
}): Promise<FulfillmentOrderActionPayload>;
declare function rejectCancellationRequest({
  credentials,
  fulfillmentOrderId,
  message
}: {
  readonly credentials: ShopifyCredentials;
  readonly fulfillmentOrderId: string;
  readonly message?: string;
}): Promise<FulfillmentOrderActionPayload>;
declare function createFulfillment({
  credentials,
  fulfillmentOrderId
}: {
  readonly credentials: ShopifyCredentials;
  readonly fulfillmentOrderId: string;
}): Promise<FulfillmentCreatePayload>;
declare function updateTrackingInfo({
  credentials,
  fulfillmentId,
  trackingInfo,
  notifyCustomer
}: {
  readonly credentials: ShopifyCredentials;
  readonly fulfillmentId: string;
  readonly trackingInfo: FulfillmentTrackingInfo;
  readonly notifyCustomer?: boolean;
}): Promise<FulfillmentTrackingInfoPayload>;
//#endregion
export { type AssignedFulfillmentOrder, type FulfillmentCreatePayload, type FulfillmentOrderActionPayload, type FulfillmentOrderAssignmentStatus, type FulfillmentOrderDestination, type FulfillmentOrderLineItem, type FulfillmentOrderMerchantRequest, type FulfillmentOrderMerchantRequestKind, type FulfillmentOrderOrder, type FulfillmentTrackingInfo, type FulfillmentTrackingInfoPayload, type OrderLineItem, type OrderShippingAddress, type ShopifyCredentials, type ShopifyUserError, acceptCancellationRequest, acceptFulfillmentRequest, createFulfillment, getAssignedFulfillmentOrders, rejectCancellationRequest, rejectFulfillmentRequest, updateTrackingInfo };
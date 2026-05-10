export interface ShopifyCredentials {
  readonly shop: string;
  readonly accessToken: string;
}

export type FulfillmentOrderAssignmentStatus =
  | "FULFILLMENT_REQUESTED"
  | "CANCELLATION_REQUESTED";

export type FulfillmentOrderMerchantRequestKind =
  | "FULFILLMENT_REQUEST"
  | "CANCELLATION_REQUEST";

export interface FulfillmentOrderDestination {
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

export interface FulfillmentOrderLineItem {
  readonly id: string;
  readonly sku: string | null;
  readonly totalQuantity: number;
}

export interface OrderShippingAddress {
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

export interface OrderLineItem {
  readonly id: string;
  readonly sku: string | null;
  readonly quantity: number;
  readonly originalTotal: string;
  readonly originalUnitPrice: string;
  readonly discountedTotal: string;
  readonly discountedUnitPrice: string;
}

export interface FulfillmentOrderOrder {
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

export interface FulfillmentOrderMerchantRequest {
  readonly message: string | null;
}

export interface AssignedFulfillmentOrder {
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

export interface ShopifyUserError {
  readonly field: readonly string[] | null;
  readonly message: string;
}

export interface FulfillmentOrderActionPayload {
  readonly fulfillmentOrder: {
    readonly id: string;
    readonly status: string;
    readonly requestStatus: string;
  } | null;
  readonly userErrors: readonly ShopifyUserError[];
}

export interface FulfillmentCreatePayload {
  readonly fulfillment: {
    readonly id: string;
    readonly status: string;
    readonly name: string;
  } | null;
  readonly userErrors: readonly ShopifyUserError[];
}

export interface FulfillmentTrackingInfoPayload {
  readonly fulfillment: {
    readonly id: string;
  } | null;
  readonly userErrors: readonly ShopifyUserError[];
}

export interface FulfillmentTrackingInfo {
  readonly number: string;
  readonly url: string;
  readonly company: string;
}

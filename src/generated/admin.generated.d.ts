/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as AdminTypes from './admin.types.d.ts';

export type GetAssignedFulfillmentOrdersQueryVariables = AdminTypes.Exact<{
  locationIds?: AdminTypes.InputMaybe<Array<AdminTypes.Scalars['ID']['input']> | AdminTypes.Scalars['ID']['input']>;
  status?: AdminTypes.InputMaybe<AdminTypes.FulfillmentOrderAssignmentStatus>;
  requestKind?: AdminTypes.InputMaybe<AdminTypes.FulfillmentOrderMerchantRequestKind>;
}>;


export type GetAssignedFulfillmentOrdersQuery = { shop: { assignedFulfillmentOrders: { nodes: Array<(
        Pick<AdminTypes.FulfillmentOrder, 'id' | 'orderName' | 'requestStatus' | 'status'>
        & { destination?: AdminTypes.Maybe<Pick<AdminTypes.FulfillmentOrderDestination, 'firstName' | 'lastName' | 'address1' | 'address2' | 'city' | 'zip' | 'province' | 'countryCode' | 'phone' | 'email'>>, lineItems: { nodes: Array<Pick<AdminTypes.FulfillmentOrderLineItem, 'id' | 'sku' | 'totalQuantity'>> }, order: (
          Pick<AdminTypes.Order, 'note' | 'name' | 'email' | 'phone' | 'totalPrice'>
          & { shippingAddress?: AdminTypes.Maybe<Pick<AdminTypes.MailingAddress, 'phone' | 'address1' | 'address2' | 'countryCodeV2' | 'city' | 'province' | 'zip' | 'firstName' | 'lastName' | 'country'>>, lineItems: { nodes: Array<Pick<AdminTypes.LineItem, 'id' | 'sku' | 'quantity' | 'originalTotal' | 'originalUnitPrice' | 'discountedTotal' | 'discountedUnitPrice'>> } }
        ), merchantRequests: { nodes: Array<Pick<AdminTypes.FulfillmentOrderMerchantRequest, 'message'>> } }
      )> } } };

export type AcceptFulfillmentRequestMutationVariables = AdminTypes.Exact<{
  id: AdminTypes.Scalars['ID']['input'];
  message?: AdminTypes.InputMaybe<AdminTypes.Scalars['String']['input']>;
}>;


export type AcceptFulfillmentRequestMutation = { fulfillmentOrderAcceptFulfillmentRequest?: AdminTypes.Maybe<{ fulfillmentOrder?: AdminTypes.Maybe<Pick<AdminTypes.FulfillmentOrder, 'id' | 'status' | 'requestStatus'>>, userErrors: Array<Pick<AdminTypes.UserError, 'field' | 'message'>> }> };

export type RejectFulfillmentRequestMutationVariables = AdminTypes.Exact<{
  id: AdminTypes.Scalars['ID']['input'];
  message?: AdminTypes.InputMaybe<AdminTypes.Scalars['String']['input']>;
}>;


export type RejectFulfillmentRequestMutation = { fulfillmentOrderRejectFulfillmentRequest?: AdminTypes.Maybe<{ fulfillmentOrder?: AdminTypes.Maybe<Pick<AdminTypes.FulfillmentOrder, 'id' | 'status' | 'requestStatus'>>, userErrors: Array<Pick<AdminTypes.UserError, 'field' | 'message'>> }> };

export type AcceptCancellationRequestMutationVariables = AdminTypes.Exact<{
  id: AdminTypes.Scalars['ID']['input'];
  message?: AdminTypes.InputMaybe<AdminTypes.Scalars['String']['input']>;
}>;


export type AcceptCancellationRequestMutation = { fulfillmentOrderAcceptCancellationRequest?: AdminTypes.Maybe<{ fulfillmentOrder?: AdminTypes.Maybe<Pick<AdminTypes.FulfillmentOrder, 'id' | 'status' | 'requestStatus'>>, userErrors: Array<Pick<AdminTypes.UserError, 'field' | 'message'>> }> };

export type RejectCancellationRequestMutationVariables = AdminTypes.Exact<{
  id: AdminTypes.Scalars['ID']['input'];
  message?: AdminTypes.InputMaybe<AdminTypes.Scalars['String']['input']>;
}>;


export type RejectCancellationRequestMutation = { fulfillmentOrderRejectCancellationRequest?: AdminTypes.Maybe<{ fulfillmentOrder?: AdminTypes.Maybe<Pick<AdminTypes.FulfillmentOrder, 'id' | 'status' | 'requestStatus'>>, userErrors: Array<Pick<AdminTypes.UserError, 'field' | 'message'>> }> };

export type CreateFulfillmentMutationVariables = AdminTypes.Exact<{
  fulfillment: AdminTypes.FulfillmentV2Input;
}>;


export type CreateFulfillmentMutation = { fulfillmentCreateV2?: AdminTypes.Maybe<{ fulfillment?: AdminTypes.Maybe<Pick<AdminTypes.Fulfillment, 'id' | 'status' | 'name'>>, userErrors: Array<Pick<AdminTypes.UserError, 'field' | 'message'>> }> };

export type UpdateTrackingInfoMutationVariables = AdminTypes.Exact<{
  fulfillmentId: AdminTypes.Scalars['ID']['input'];
  trackingInfoInput: AdminTypes.FulfillmentTrackingInput;
  notifyCustomer?: AdminTypes.InputMaybe<AdminTypes.Scalars['Boolean']['input']>;
}>;


export type UpdateTrackingInfoMutation = { fulfillmentTrackingInfoUpdateV2?: AdminTypes.Maybe<{ fulfillment?: AdminTypes.Maybe<Pick<AdminTypes.Fulfillment, 'id'>>, userErrors: Array<Pick<AdminTypes.UserError, 'field' | 'message'>> }> };

interface GeneratedQueryTypes {
  "#graphql\n  query GetAssignedFulfillmentOrders(\n    $locationIds: [ID!]\n    $status: FulfillmentOrderAssignmentStatus\n    $requestKind: FulfillmentOrderMerchantRequestKind\n  ) {\n    shop {\n      assignedFulfillmentOrders(\n        first: 50\n        assignmentStatus: $status\n        locationIds: $locationIds\n      ) {\n        nodes {\n          id\n          orderName\n          requestStatus\n          status\n          destination {\n            firstName\n            lastName\n            address1\n            address2\n            city\n            zip\n            province\n            countryCode\n            phone\n            email\n          }\n          lineItems(first: 50) {\n            nodes {\n              id\n              sku\n              totalQuantity\n            }\n          }\n          order {\n            note\n            name\n            email\n            phone\n            shippingAddress {\n              phone\n              address1\n              address2\n              countryCodeV2\n              city\n              province\n              zip\n              firstName\n              lastName\n              country\n            }\n            totalPrice\n            lineItems(first: 150) {\n              nodes {\n                id\n                sku\n                quantity\n                originalTotal\n                originalUnitPrice\n                discountedTotal\n                discountedUnitPrice\n              }\n            }\n          }\n          merchantRequests(first: 1, kind: $requestKind) {\n            nodes {\n              message\n            }\n          }\n        }\n      }\n    }\n  }\n": {return: GetAssignedFulfillmentOrdersQuery, variables: GetAssignedFulfillmentOrdersQueryVariables},
}

interface GeneratedMutationTypes {
  "#graphql\n  mutation AcceptFulfillmentRequest($id: ID!, $message: String) {\n    fulfillmentOrderAcceptFulfillmentRequest(id: $id, message: $message) {\n      fulfillmentOrder {\n        id\n        status\n        requestStatus\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n": {return: AcceptFulfillmentRequestMutation, variables: AcceptFulfillmentRequestMutationVariables},
  "#graphql\n  mutation RejectFulfillmentRequest($id: ID!, $message: String) {\n    fulfillmentOrderRejectFulfillmentRequest(id: $id, message: $message) {\n      fulfillmentOrder {\n        id\n        status\n        requestStatus\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n": {return: RejectFulfillmentRequestMutation, variables: RejectFulfillmentRequestMutationVariables},
  "#graphql\n  mutation AcceptCancellationRequest($id: ID!, $message: String) {\n    fulfillmentOrderAcceptCancellationRequest(id: $id, message: $message) {\n      fulfillmentOrder {\n        id\n        status\n        requestStatus\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n": {return: AcceptCancellationRequestMutation, variables: AcceptCancellationRequestMutationVariables},
  "#graphql\n  mutation RejectCancellationRequest($id: ID!, $message: String) {\n    fulfillmentOrderRejectCancellationRequest(id: $id, message: $message) {\n      fulfillmentOrder {\n        id\n        status\n        requestStatus\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n": {return: RejectCancellationRequestMutation, variables: RejectCancellationRequestMutationVariables},
  "#graphql\n  mutation CreateFulfillment($fulfillment: FulfillmentV2Input!) {\n    fulfillmentCreateV2(fulfillment: $fulfillment) {\n      fulfillment {\n        id\n        status\n        name\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n": {return: CreateFulfillmentMutation, variables: CreateFulfillmentMutationVariables},
  "#graphql\n  mutation UpdateTrackingInfo(\n    $fulfillmentId: ID!\n    $trackingInfoInput: FulfillmentTrackingInput!\n    $notifyCustomer: Boolean\n  ) {\n    fulfillmentTrackingInfoUpdateV2(\n      fulfillmentId: $fulfillmentId\n      trackingInfoInput: $trackingInfoInput\n      notifyCustomer: $notifyCustomer\n    ) {\n      fulfillment {\n        id\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n": {return: UpdateTrackingInfoMutation, variables: UpdateTrackingInfoMutationVariables},
}
declare module '@shopify/admin-api-client' {
  type InputMaybe<T> = AdminTypes.InputMaybe<T>;
  interface AdminQueries extends GeneratedQueryTypes {}
  interface AdminMutations extends GeneratedMutationTypes {}
}

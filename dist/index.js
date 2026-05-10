Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let _shopify_admin_api_client = require("@shopify/admin-api-client");
//#region src/client.ts
const ADMIN_API_VERSION = "2025-10";
async function requestShopifyAdmin({ credentials, query, variables }) {
	const response = await (0, _shopify_admin_api_client.createAdminApiClient)({
		storeDomain: `${credentials.shop}.myshopify.com`,
		apiVersion: ADMIN_API_VERSION,
		accessToken: credentials.accessToken
	}).request(query, { variables });
	if (response.errors) throw new Error(`Shopify API Error: ${JSON.stringify(response.errors)}`);
	if (!response.data) throw new Error("Shopify API Error: response data is empty");
	return response.data;
}
//#endregion
//#region src/fulfillment.ts
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
async function getAssignedFulfillmentOrders({ credentials, status, merchantRequestKind, locationIds }) {
	return (await requestShopifyAdmin({
		credentials,
		query: GET_ASSIGNED_FULFILLMENT_ORDERS,
		variables: {
			status,
			requestKind: merchantRequestKind,
			locationIds
		}
	})).shop.assignedFulfillmentOrders.nodes;
}
async function acceptFulfillmentRequest({ credentials, fulfillmentOrderId, message }) {
	return (await requestShopifyAdmin({
		credentials,
		query: ACCEPT_FULFILLMENT_REQUEST,
		variables: {
			id: fulfillmentOrderId,
			message
		}
	})).fulfillmentOrderAcceptFulfillmentRequest;
}
async function rejectFulfillmentRequest({ credentials, fulfillmentOrderId, message }) {
	return (await requestShopifyAdmin({
		credentials,
		query: REJECT_FULFILLMENT_REQUEST,
		variables: {
			id: fulfillmentOrderId,
			message
		}
	})).fulfillmentOrderRejectFulfillmentRequest;
}
async function acceptCancellationRequest({ credentials, fulfillmentOrderId, message }) {
	return (await requestShopifyAdmin({
		credentials,
		query: ACCEPT_CANCELLATION_REQUEST,
		variables: {
			id: fulfillmentOrderId,
			message
		}
	})).fulfillmentOrderAcceptCancellationRequest;
}
async function rejectCancellationRequest({ credentials, fulfillmentOrderId, message }) {
	return (await requestShopifyAdmin({
		credentials,
		query: REJECT_CANCELLATION_REQUEST,
		variables: {
			id: fulfillmentOrderId,
			message
		}
	})).fulfillmentOrderRejectCancellationRequest;
}
async function createFulfillment({ credentials, fulfillmentOrderId }) {
	return (await requestShopifyAdmin({
		credentials,
		query: CREATE_FULFILLMENT,
		variables: { fulfillment: { lineItemsByFulfillmentOrder: [{ fulfillmentOrderId }] } }
	})).fulfillmentCreateV2;
}
async function updateTrackingInfo({ credentials, fulfillmentId, trackingInfo, notifyCustomer = true }) {
	return (await requestShopifyAdmin({
		credentials,
		query: UPDATE_TRACKING_INFO,
		variables: {
			fulfillmentId,
			trackingInfoInput: {
				number: trackingInfo.number,
				url: trackingInfo.url,
				company: trackingInfo.company
			},
			notifyCustomer
		}
	})).fulfillmentTrackingInfoUpdateV2;
}
//#endregion
exports.acceptCancellationRequest = acceptCancellationRequest;
exports.acceptFulfillmentRequest = acceptFulfillmentRequest;
exports.createFulfillment = createFulfillment;
exports.getAssignedFulfillmentOrders = getAssignedFulfillmentOrders;
exports.rejectCancellationRequest = rejectCancellationRequest;
exports.rejectFulfillmentRequest = rejectFulfillmentRequest;
exports.updateTrackingInfo = updateTrackingInfo;

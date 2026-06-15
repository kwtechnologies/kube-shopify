import {
  createAdminApiClient,
  type AdminOperations,
  type ApiClientRequestOptions,
  type ReturnData,
} from "@shopify/admin-api-client";

import type { ShopifyCredentials } from "./types";
import type {} from "./generated/admin.generated";

const ADMIN_API_VERSION = "2025-10";

export async function requestShopifyAdmin<
  Operation extends keyof AdminOperations,
>({
  credentials,
  query,
  options,
}: {
  readonly credentials: ShopifyCredentials;
  readonly query: Operation;
  readonly options?: ApiClientRequestOptions<Operation, AdminOperations>;
}): Promise<ReturnData<Operation, AdminOperations>> {
  const client = createAdminApiClient({
    storeDomain: `${credentials.shop}.myshopify.com`,
    apiVersion: ADMIN_API_VERSION,
    accessToken: credentials.accessToken,
  });
  const response = await client.request(query, options);
  if (!response.data) {
    throw new Error("Shopify API Error: response data is empty");
  }
  return response.data;
}

import { createAdminApiClient } from "@shopify/admin-api-client";

import type { ShopifyCredentials } from "./types";

const ADMIN_API_VERSION = "2025-10";

type GraphQLVariables = Record<string, unknown>;

interface ShopifyGraphQLResponse<TData> {
  readonly data?: TData;
  readonly errors?: unknown;
}

export async function requestShopifyAdmin<TData>({
  credentials,
  query,
  variables,
}: {
  readonly credentials: ShopifyCredentials;
  readonly query: string;
  readonly variables?: GraphQLVariables;
}): Promise<TData> {
  const client = createAdminApiClient({
    storeDomain: `${credentials.shop}.myshopify.com`,
    apiVersion: ADMIN_API_VERSION,
    accessToken: credentials.accessToken,
  });
  const response: ShopifyGraphQLResponse<TData> = await client.request<TData>(
    query,
    { variables },
  );
  if (response.errors) {
    throw new Error(`Shopify API Error: ${JSON.stringify(response.errors)}`);
  }
  if (!response.data) {
    throw new Error("Shopify API Error: response data is empty");
  }
  return response.data;
}

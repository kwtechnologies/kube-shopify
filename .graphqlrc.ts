import { ApiType, shopifyApiProject } from "@shopify/api-codegen-preset";

export default {
  schema: "https://shopify.dev/admin-graphql-direct-proxy",
  documents: ["src/**/*.ts", "!node_modules"],
  projects: {
    default: shopifyApiProject({
      apiType: ApiType.Admin,
      apiVersion: "2025-10",
      outputDir: "./src/generated",
      enumsAsConst: true,
      declarations: false,
    }),
  },
};

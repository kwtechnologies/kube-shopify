//#region src/generated/admin.types.d.ts
type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends {
  [key: string]: unknown;
}> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: {
    input: string;
    output: string;
  };
  String: {
    input: string;
    output: string;
  };
  Boolean: {
    input: boolean;
    output: boolean;
  };
  Int: {
    input: number;
    output: number;
  };
  Float: {
    input: number;
    output: number;
  };
  ARN: {
    input: any;
    output: any;
  };
  BigInt: {
    input: any;
    output: any;
  };
  Color: {
    input: any;
    output: any;
  };
  Date: {
    input: any;
    output: any;
  };
  DateTime: {
    input: any;
    output: any;
  };
  Decimal: {
    input: any;
    output: any;
  };
  FormattedString: {
    input: any;
    output: any;
  };
  HTML: {
    input: any;
    output: any;
  };
  JSON: {
    input: any;
    output: any;
  };
  Money: {
    input: any;
    output: any;
  };
  StorefrontID: {
    input: any;
    output: any;
  };
  URL: {
    input: any;
    output: any;
  };
  UnsignedInt64: {
    input: any;
    output: any;
  };
  UtcOffset: {
    input: any;
    output: any;
  };
};
/**
 * A permission that controls access to [GraphQL Admin API](https://shopify.dev/docs/api/usage/access-scopes#authenticated-access-scopes) or [Storefront API](https://shopify.dev/docs/api/usage/access-scopes#unauthenticated-access-scopes) types. Each scope defines what data an [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) can read or write, following the format `{action}_{resource}` where action is typically "read" or "write".
 *
 * Apps declare required and optional access scopes in their configuration. During installation, merchants review and grant these permissions, determining what shop data the app can access. The granted scopes remain active until the merchant uninstalls the app or revokes them. Apps can programmatically revoke their own dynamically granted optional scopes using [`appRevokeAccessScopes`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appRevokeAccessScopes).
 */
type AccessScope = {
  __typename?: 'AccessScope'; /** A description of the actions that the access scope allows an app to perform. */
  description: Scalars['String']['output']; /** A readable string that represents the access scope. The string usually follows the format `{action}_{resource}`. `{action}` is `read` or `write`, and `{resource}` is the resource that the action can be performed on. `{action}` and `{resource}` are separated by an underscore. For example, `read_orders` or `write_products`. */
  handle: Scalars['String']['output'];
};
/** Possible account types that a staff member can have. */
declare enum AccountType {
  /** The account of a partner who collaborates with the merchant. */
  Collaborator = 'COLLABORATOR',
  /** The account of a partner collaborator team member. */
  CollaboratorTeamMember = 'COLLABORATOR_TEAM_MEMBER',
  /** The user has not yet accepted the invitation to create an account. */
  Invited = 'INVITED',
  /** The user has not yet accepted the invitation to become the store owner. */
  InvitedStoreOwner = 'INVITED_STORE_OWNER',
  /** The account can access the Shopify admin. */
  Regular = 'REGULAR',
  /** The admin has not yet accepted the request to create a collaborator account. */
  Requested = 'REQUESTED',
  /** The account cannot access the Shopify admin. */
  Restricted = 'RESTRICTED',
  /** The account can be signed into via a SAML provider. */
  Saml = 'SAML'
}
/** Represents an operation publishing all products to a publication. */
type AddAllProductsOperation = Node & ResourceOperation & {
  __typename?: 'AddAllProductsOperation'; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The count of processed rows, summing imported, failed, and skipped rows. */
  processedRowCount?: Maybe<Scalars['Int']['output']>; /** Represents a rows objects within this background operation. */
  rowCount?: Maybe<RowCount>; /** The status of this operation. */
  status: ResourceOperationStatus;
};
/**
 * Additional fees applied to an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) beyond the standard product and shipping costs. Additional fees typically include duties, import fees, or other special handling charges that need separate tracking from regular [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects.
 *
 * Each fee includes its name, price in both shop and presentment currencies, and any applicable taxes broken down by [`TaxLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine).
 */
type AdditionalFee = Node & {
  __typename?: 'AdditionalFee'; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The name of the additional fee. */
  name: Scalars['String']['output']; /** The price of the additional fee. */
  price: MoneyBag; /** A list of taxes charged on the additional fee. */
  taxLines: Array<TaxLine>;
};
/**
 * Represents a discount configuration that applies to all items in a customer's cart without restriction. This object enables store-wide promotions that affect every product equally.
 *
 * For example, a "Sitewide 10% Off Everything" sale would target all items, ensuring that every product in the customer's cart receives the promotional discount regardless of category or collection.
 *
 * This universal targeting approach simplifies promotional campaigns and provides customers with clear, straightforward savings across the entire product catalog.
 */
type AllDiscountItems = {
  __typename?: 'AllDiscountItems'; /** Whether all items are eligible for the discount. This value always returns `true`. */
  allItems: Scalars['Boolean']['output'];
};
/**
 * A Shopify application that extends store functionality. Apps integrate with Shopify through APIs to add features, automate workflows, or connect external services.
 *
 * Provides metadata about the app including its developer information and listing details in the Shopify App Store. Use the [`installation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.installation) field to determine if the app is currently installed on the shop and access installation-specific details like granted [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects. Check [`failedRequirements`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.failedRequirements) before installation to identify any prerequisites that must be met.
 */
type App = Node & {
  __typename?: 'App'; /** A unique application API identifier. */
  apiKey: Scalars['String']['output']; /** App store page URL of the app. */
  appStoreAppUrl?: Maybe<Scalars['URL']['output']>; /** App store page URL of the developer who created the app. */
  appStoreDeveloperUrl?: Maybe<Scalars['URL']['output']>; /** All requestable access scopes available to the app. */
  availableAccessScopes: Array<AccessScope>; /** Banner image for the app. */
  banner: Image; /** Description of the app. */
  description?: Maybe<Scalars['String']['output']>; /** The name of the app developer. */
  developerName?: Maybe<Scalars['String']['output']>; /** The type of app developer. */
  developerType: AppDeveloperType;
  /**
   * Website of the developer who created the app.
   * @deprecated Use `appStoreDeveloperUrl` instead.
   */
  developerUrl: Scalars['URL']['output']; /** Whether the app uses the Embedded App SDK. */
  embedded: Scalars['Boolean']['output']; /** Requirements that must be met before the app can be installed. */
  failedRequirements: Array<FailedRequirement>; /** A list of app features that are shown in the Shopify App Store listing. */
  features: Array<Scalars['String']['output']>; /** Feedback from this app about the store. */
  feedback?: Maybe<AppFeedback>; /** Handle of the app. */
  handle?: Maybe<Scalars['String']['output']>; /** Icon that represents the app. */
  icon: Image; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** Webpage where you can install the app, if app requires explicit user permission. */
  installUrl?: Maybe<Scalars['URL']['output']>;
  /**
   * Corresponding AppInstallation for this shop and App.
   * Returns null if the App is not installed.
   */
  installation?: Maybe<AppInstallation>; /** Whether the app is the [post purchase](https://shopify.dev/apps/checkout/post-purchase) app in use. */
  isPostPurchaseAppInUse: Scalars['Boolean']['output'];
  /**
   * Webpage that the app starts in.
   * @deprecated Use AppInstallation.launchUrl instead
   */
  launchUrl: Scalars['URL']['output'];
  /**
   * Menu items for the app, which also appear as submenu items in left navigation sidebar in the Shopify admin.
   * @deprecated Use AppInstallation.navigationItems instead
   */
  navigationItems: Array<NavigationItem>; /** The optional scopes requested by the app. Lists the optional access scopes the app has declared in its configuration. These scopes are optionally requested by the app after installation. */
  optionalAccessScopes: Array<AccessScope>; /** Whether the app was previously installed on the current shop. */
  previouslyInstalled: Scalars['Boolean']['output']; /** Detailed information about the app pricing. */
  pricingDetails?: Maybe<Scalars['String']['output']>; /** Summary of the app pricing details. */
  pricingDetailsSummary: Scalars['String']['output']; /** Link to app privacy policy. */
  privacyPolicyUrl?: Maybe<Scalars['URL']['output']>; /** The public category for the app. */
  publicCategory: AppPublicCategory; /** Whether the app is published to the Shopify App Store. */
  published: Scalars['Boolean']['output']; /** The access scopes requested by the app. Lists the access scopes the app has declared in its configuration. Merchant must grant approval to these scopes for the app to be installed. */
  requestedAccessScopes: Array<AccessScope>; /** Screenshots of the app. */
  screenshots: Array<Image>; /** Whether the app was developed by Shopify. */
  shopifyDeveloped: Scalars['Boolean']['output']; /** Name of the app. */
  title: Scalars['String']['output'];
  /**
   * Message that appears when the app is uninstalled. For example:
   * By removing this app, you will no longer be able to publish products to MySocialSite or view this app in your Shopify admin. You can re-enable this channel at any time.
   */
  uninstallMessage: Scalars['String']['output'];
  /**
   * Webpage where you can uninstall the app.
   * @deprecated Use AppInstallation.uninstallUrl instead
   */
  uninstallUrl?: Maybe<Scalars['URL']['output']>; /** The webhook API version for the app. */
  webhookApiVersion: Scalars['String']['output'];
};
/** An auto-generated type for paginating through multiple Apps. */
type AppConnection = {
  __typename?: 'AppConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<AppEdge>; /** A list of nodes that are contained in AppEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<App>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/**
 * Represents monetary credits that merchants can apply toward future app purchases, subscriptions, or usage-based billing within their Shopify store. App credits provide a flexible way to offer refunds, promotional credits, or compensation without processing external payments.
 *
 * For example, if a merchant experiences service downtime, an app might issue credits equivalent to the affected billing period. These credits can apply to future charges, reducing the merchant's next invoice or extending their subscription period.
 *
 * Use the `AppCredit` object to:
 * - Issue refunds for service interruptions or billing disputes
 * - Provide promotional credits for new merchant onboarding
 * - Compensate merchants for app-related issues or downtime
 * - Create loyalty rewards or referral bonuses within your billing system
 * - Track credit balances and application history for accounting purposes
 *
 * For comprehensive billing strategies and credit management patterns, see the [subscription billing guide](https://shopify.dev/docs/apps/launch/billing/subscription-billing).
 */
type AppCredit = Node & {
  __typename?: 'AppCredit'; /** The amount that can be used towards future app purchases in Shopify. */
  amount: MoneyV2; /** The date and time when the app credit was created. */
  createdAt: Scalars['DateTime']['output']; /** The description of the app credit. */
  description: Scalars['String']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** Whether the app credit is a test transaction. */
  test: Scalars['Boolean']['output'];
};
/** An auto-generated type for paginating through multiple AppCredits. */
type AppCreditConnection = {
  __typename?: 'AppCreditConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<AppCreditEdge>; /** A list of nodes that are contained in AppCreditEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<AppCredit>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one AppCredit and a cursor during pagination. */
type AppCreditEdge = {
  __typename?: 'AppCreditEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of AppCreditEdge. */
  node: AppCredit;
};
/** Possible types of app developer. */
declare enum AppDeveloperType {
  /** Indicates the app developer works directly for a Merchant. */
  Merchant = 'MERCHANT',
  /** Indicates the app developer is a Partner. */
  Partner = 'PARTNER',
  /** Indicates the app developer is Shopify. */
  Shopify = 'SHOPIFY',
  /** Indicates the app developer is unknown. It is not categorized as any of the other developer types. */
  Unknown = 'UNKNOWN'
}
/**
 * The details about the app extension that's providing the
 * [discount type](https://help.shopify.com/manual/discounts/discount-types).
 * This information includes the app extension's name and
 * [client ID](https://shopify.dev/docs/apps/build/authentication-authorization/client-secrets),
 * [App Bridge configuration](https://shopify.dev/docs/api/app-bridge),
 * [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations),
 * [function ID](https://shopify.dev/docs/apps/build/functions/input-output/metafields-for-input-queries),
 * and other metadata about the discount type, including the discount type's name and description.
 */
type AppDiscountType = {
  __typename?: 'AppDiscountType';
  /**
   * The name of the app extension that's providing the
   * [discount type](https://help.shopify.com/manual/discounts/discount-types).
   */
  app: App;
  /**
   * The [App Bridge configuration](https://shopify.dev/docs/api/app-bridge)
   * for the [discount type](https://help.shopify.com/manual/discounts/discount-types).
   */
  appBridge: FunctionsAppBridge;
  /**
   * The [client ID](https://shopify.dev/docs/apps/build/authentication-authorization/client-secrets)
   * of the app extension that's providing the [discount type](https://help.shopify.com/manual/discounts/discount-types).
   */
  appKey: Scalars['String']['output'];
  /**
   * A description of the
   * [discount type](https://help.shopify.com/manual/discounts/discount-types)
   * provided by the app extension.
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * that's used to control how discounts can be combined.
   * @deprecated Use `discountClasses` instead.
   */
  discountClass: DiscountClass;
  /**
   * The list of [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * that this app extension supports.
   */
  discountClasses: Array<DiscountClass>;
  /**
   * The
   * [function ID](https://shopify.dev/docs/apps/build/functions/input-output/metafields-for-input-queries)
   * associated with the app extension providing the
   * [discount type](https://help.shopify.com/manual/discounts/discount-types).
   */
  functionId: Scalars['String']['output'];
  /**
   * The type of line item on an order that the
   * [discount type](https://help.shopify.com/manual/discounts/discount-types) applies to.
   * Valid values: `SHIPPING_LINE` and `LINE_ITEM`.
   * @deprecated Use `discountClasses` instead.
   */
  targetType: DiscountApplicationTargetType;
  /**
   * The name of the [discount type](https://help.shopify.com/manual/discounts/discount-types)
   * that the app extension is providing.
   */
  title: Scalars['String']['output'];
};
/** An auto-generated type which holds one App and a cursor during pagination. */
type AppEdge = {
  __typename?: 'AppEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of AppEdge. */
  node: App;
};
/**
 * Reports the status of shops and their resources and displays this information
 * within Shopify admin. AppFeedback is used to notify merchants about steps they need to take
 * to set up an app on their store.
 */
type AppFeedback = {
  __typename?: 'AppFeedback'; /** The application associated to the feedback. */
  app: App; /** The date and time when the app feedback was generated. */
  feedbackGeneratedAt: Scalars['DateTime']['output']; /** A link to where merchants can resolve errors. */
  link?: Maybe<Link>; /** The feedback message presented to the merchant. */
  messages: Array<UserError>; /** Conveys the state of the feedback and whether it requires merchant action or not. */
  state: ResourceFeedbackState;
};
/**
 * An app installed on a shop. Each installation tracks the permissions granted to the app through [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects, along with billing subscriptions and [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) objects.
 *
 * The installation provides metafields that only the owning [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) can access. These metafields store app-specific configuration that merchants and other apps can't modify. The installation also provides URLs for launching and uninstalling the app, along with any active [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) objects or [`AppPurchaseOneTime`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime) purchases.
 */
type AppInstallation = HasMetafields & Node & {
  __typename?: 'AppInstallation'; /** The access scopes granted to the application by a merchant during installation. */
  accessScopes: Array<AccessScope>; /** The active application subscriptions billed to the shop on a recurring basis. */
  activeSubscriptions: Array<AppSubscription>; /** All subscriptions created for a shop. */
  allSubscriptions: AppSubscriptionConnection; /** Application which is installed. */
  app: App;
  /**
   * Channel associated with the installed application.
   * @deprecated Use the root-level `channels` query instead.
   */
  channel?: Maybe<Channel>; /** Credits that can be used towards future app purchases. */
  credits: AppCreditConnection; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The URL to launch the application. */
  launchUrl: Scalars['URL']['output'];
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   */
  metafield?: Maybe<Metafield>;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   */
  metafields: MetafieldConnection; /** One-time purchases to a shop. */
  oneTimePurchases: AppPurchaseOneTimeConnection;
  /**
   * The publication associated with the installed application.
   * @deprecated Use the root-level `publications` query instead.
   */
  publication?: Maybe<Publication>; /** The records that track the externally-captured revenue for the app. The records are used for revenue attribution purposes. */
  revenueAttributionRecords: AppRevenueAttributionRecordConnection;
  /**
   * Subscriptions charge to a shop on a recurring basis.
   * @deprecated Use `activeSubscriptions` instead.
   */
  subscriptions: Array<AppSubscription>; /** The URL to uninstall the application. */
  uninstallUrl?: Maybe<Scalars['URL']['output']>;
};
/**
 * Contains the pricing details for the app plan that a merchant has subscribed to within their current billing arrangement.
 *
 * This simplified object focuses on the essential pricing information merchants need to understand their current subscription costs and billing structure.
 *
 * Details about subscription management and pricing strategies are available in the [app billing documentation](https://shopify.dev/docs/apps/launch/billing).
 */
type AppPlanV2 = {
  __typename?: 'AppPlanV2'; /** The plan billed to a shop on a recurring basis. */
  pricingDetails: AppPricingDetails;
};
/**
 * The information about the price that's charged to a shop every plan period.
 * The concrete type can be `AppRecurringPricing` for recurring billing or `AppUsagePricing` for usage-based billing.
 */
type AppPricingDetails = AppRecurringPricing | AppUsagePricing;
/** The frequency at which the shop is billed for an app subscription. */
declare enum AppPricingInterval {
  /** The app subscription bills the shop annually. */
  Annual = 'ANNUAL',
  /** The app subscription bills the shop every 30 days. */
  Every_30Days = 'EVERY_30_DAYS'
}
/** The public-facing category for an app. */
declare enum AppPublicCategory {
  /** The app's public category is [custom](https://shopify.dev/apps/distribution#capabilities-and-requirements). */
  Custom = 'CUSTOM',
  /** The app's public category is other. An app is in this category if it's not classified under any of the other app types (private, public, or custom). */
  Other = 'OTHER',
  /** The app's public category is [private](https://shopify.dev/apps/distribution#deprecated-app-types). */
  Private = 'PRIVATE',
  /** The app's public category is [public](https://shopify.dev/apps/distribution#capabilities-and-requirements). */
  Public = 'PUBLIC'
}
/** Services and features purchased once by the store. */
type AppPurchase = {
  /** The date and time when the app purchase occurred. */createdAt: Scalars['DateTime']['output']; /** The name of the app purchase. */
  name: Scalars['String']['output']; /** The amount to be charged to the store for the app purchase. */
  price: MoneyV2; /** The status of the app purchase. */
  status: AppPurchaseStatus; /** Whether the app purchase is a test transaction. */
  test: Scalars['Boolean']['output'];
};
/**
 * Represents a one-time purchase of app services or features by a merchant, tracking the transaction details and status throughout the billing lifecycle. This object captures essential information about non-recurring charges, including price and merchant acceptance status.
 *
 * One-time purchases are particularly valuable for apps offering premium features, professional services, or digital products that don't require ongoing subscriptions. For instance, a photography app might sell premium filters as one-time purchases, while a marketing app could charge for individual campaign setups or advanced analytics reports.
 *
 * Use the `AppPurchaseOneTime` object to:
 * - Track the status of individual feature purchases and service charges
 * - Track payment status for premium content or digital products
 * - Access purchase details to enable or disable features based on payment status
 *
 * The purchase status indicates whether the charge is pending merchant approval, has been accepted and processed, or was declined. This status tracking is crucial for apps that need to conditionally enable features based on successful payment completion.
 *
 * Purchase records include creation timestamps, pricing details, and test flags to distinguish between production charges and development testing. The test flag ensures that development and staging environments don't generate actual charges while maintaining realistic billing flow testing.
 *
 * For detailed implementation patterns and billing best practices, see the [one-time-charges page](https://shopify.dev/docs/apps/launch/billing/one-time-charges).
 */
type AppPurchaseOneTime = AppPurchase & Node & {
  __typename?: 'AppPurchaseOneTime'; /** The date and time when the app purchase occurred. */
  createdAt: Scalars['DateTime']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The name of the app purchase. */
  name: Scalars['String']['output']; /** The amount to be charged to the store for the app purchase. */
  price: MoneyV2; /** The status of the app purchase. */
  status: AppPurchaseStatus; /** Whether the app purchase is a test transaction. */
  test: Scalars['Boolean']['output'];
};
/** An auto-generated type for paginating through multiple AppPurchaseOneTimes. */
type AppPurchaseOneTimeConnection = {
  __typename?: 'AppPurchaseOneTimeConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<AppPurchaseOneTimeEdge>; /** A list of nodes that are contained in AppPurchaseOneTimeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<AppPurchaseOneTime>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one AppPurchaseOneTime and a cursor during pagination. */
type AppPurchaseOneTimeEdge = {
  __typename?: 'AppPurchaseOneTimeEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of AppPurchaseOneTimeEdge. */
  node: AppPurchaseOneTime;
};
/**
 * The approval status of the app purchase.
 *
 * The merchant is charged for the purchase immediately after approval, and the status changes to `active`.
 * If the payment fails, then the app purchase remains `pending`.
 *
 * Purchases start as `pending` and can change to: `active`, `declined`, `expired`. After a purchase changes, it
 * remains in that final state.
 */
declare enum AppPurchaseStatus {
  /**
   * The app purchase has been approved by the merchant and is ready to be activated by the app. App purchases created through the GraphQL Admin API are activated upon approval.
   * @deprecated When a merchant accepts an app purchase, the status immediately changes from `pending` to `active`.
   */
  Accepted = 'ACCEPTED',
  /** The app purchase was approved by the merchant and has been activated by the app. Active app purchases are charged to the merchant and are paid out to the partner. */
  Active = 'ACTIVE',
  /** The app purchase was declined by the merchant. */
  Declined = 'DECLINED',
  /** The app purchase was not accepted within two days of being created. */
  Expired = 'EXPIRED',
  /** The app purchase is pending approval by the merchant. */
  Pending = 'PENDING'
}
/**
 * The pricing information about a subscription app.
 * The object contains an interval (the frequency at which the shop is billed for an app subscription) and
 * a price (the amount to be charged to the subscribing shop at each interval).
 */
type AppRecurringPricing = {
  __typename?: 'AppRecurringPricing'; /** The discount applied to the subscription for a given number of billing intervals. */
  discount?: Maybe<AppSubscriptionDiscount>; /** The frequency at which the subscribing shop is billed for an app subscription. */
  interval: AppPricingInterval; /** The app store pricing plan handle. */
  planHandle?: Maybe<Scalars['String']['output']>; /** The amount and currency to be charged to the subscribing shop every billing interval. */
  price: MoneyV2;
};
/**
 * Tracks revenue that was captured outside of Shopify's billing system but needs to be attributed to the app for comprehensive revenue reporting and partner analytics. This object enables accurate revenue tracking when apps process payments through external systems while maintaining visibility into total app performance.
 *
 * External revenue attribution is essential for apps that offer multiple payment channels or process certain transactions outside Shopify's billing infrastructure. For example, an enterprise app might process large custom contracts through external payment processors, or a marketplace app could handle direct merchant-to-merchant transactions that still generate app commissions.
 *
 * Use the `AppRevenueAttributionRecord` object to:
 * - Report revenue from external payment processors and billing systems
 * - Track commission-based earnings from marketplace or referral activities
 * - Maintain comprehensive revenue analytics across multiple payment channels
 * - Ensure accurate partner revenue sharing and commission calculations
 * - Generate complete financial reports that include all app-generated revenue streams
 * - Support compliance requirements for external revenue documentation
 *
 * Each attribution record includes the captured amount, external transaction timestamp, and idempotency keys to prevent duplicate reporting. The record type field categorizes different revenue streams, enabling detailed analytics and reporting segmentation.
 *
 * Revenue attribution records are particularly important for apps participating in Shopify's partner program, as they ensure accurate revenue sharing calculations and comprehensive performance metrics. The captured timestamp reflects when the external payment was processed, not when the attribution record was created in Shopify.
 *
 * For detailed revenue attribution values, see the [AppRevenueAttributionType enum](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppRevenueAttributionType).
 */
type AppRevenueAttributionRecord = Node & {
  __typename?: 'AppRevenueAttributionRecord'; /** The financial amount captured in this attribution. */
  amount: MoneyV2; /** The timestamp when the financial amount was captured. */
  capturedAt: Scalars['DateTime']['output']; /** The timestamp at which this revenue attribution was issued. */
  createdAt: Scalars['DateTime']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /**
   * The unique value submitted during the creation of the app revenue attribution record.
   * For more information, refer to
   * [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests).
   */
  idempotencyKey: Scalars['String']['output']; /** Indicates whether this is a test submission. */
  test: Scalars['Boolean']['output']; /** The type of revenue attribution. */
  type: AppRevenueAttributionType;
};
/** An auto-generated type for paginating through multiple AppRevenueAttributionRecords. */
type AppRevenueAttributionRecordConnection = {
  __typename?: 'AppRevenueAttributionRecordConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<AppRevenueAttributionRecordEdge>; /** A list of nodes that are contained in AppRevenueAttributionRecordEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<AppRevenueAttributionRecord>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one AppRevenueAttributionRecord and a cursor during pagination. */
type AppRevenueAttributionRecordEdge = {
  __typename?: 'AppRevenueAttributionRecordEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of AppRevenueAttributionRecordEdge. */
  node: AppRevenueAttributionRecord;
};
/** Represents the billing types of revenue attribution. */
declare enum AppRevenueAttributionType {
  /** App purchase related revenue collection. */
  ApplicationPurchase = 'APPLICATION_PURCHASE',
  /** App subscription revenue collection. */
  ApplicationSubscription = 'APPLICATION_SUBSCRIPTION',
  /** App usage-based revenue collection. */
  ApplicationUsage = 'APPLICATION_USAGE',
  /** Other app revenue collection type. */
  Other = 'OTHER'
}
/**
 * A recurring billing agreement that associates an [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) with a merchant's shop. Each subscription contains one or more [`AppSubscriptionLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem) objects that define the pricing structure. The pricing structure can include recurring charges, usage-based pricing, or both.
 *
 * The subscription tracks billing details including the current period end date, trial days, and [`AppSubscriptionStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppSubscriptionStatus).
 *
 * Merchants must approve subscriptions through a [confirmation URL](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate#returns-confirmationUrl) before billing begins. Test subscriptions allow developers to verify billing flows without actual charges.
 *
 * Learn more about [subscription billing](https://shopify.dev/docs/apps/launch/billing/subscription-billing) and [testing charges](https://shopify.dev/docs/apps/launch/billing/managed-pricing#test-charges).
 */
type AppSubscription = Node & {
  __typename?: 'AppSubscription'; /** The date and time when the app subscription was created. */
  createdAt: Scalars['DateTime']['output']; /** The date and time when the current app subscription period ends. Returns `null` if the subscription isn't active. */
  currentPeriodEnd?: Maybe<Scalars['DateTime']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The plans attached to the app subscription. */
  lineItems: Array<AppSubscriptionLineItem>; /** The name of the app subscription. */
  name: Scalars['String']['output']; /** The URL that the merchant is redirected to after approving the app subscription. */
  returnUrl: Scalars['URL']['output']; /** The status of the app subscription. */
  status: AppSubscriptionStatus; /** Specifies whether the app subscription is a test transaction. */
  test: Scalars['Boolean']['output']; /** The number of free trial days, starting at the subscription's creation date, by which billing is delayed. */
  trialDays: Scalars['Int']['output'];
};
/** An auto-generated type for paginating through multiple AppSubscriptions. */
type AppSubscriptionConnection = {
  __typename?: 'AppSubscriptionConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<AppSubscriptionEdge>; /** A list of nodes that are contained in AppSubscriptionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<AppSubscription>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** Discount applied to the recurring pricing portion of a subscription. */
type AppSubscriptionDiscount = {
  __typename?: 'AppSubscriptionDiscount';
  /**
   * The total number of billing intervals to which the discount will be applied.
   * The discount will be applied to an indefinite number of billing intervals if this value is blank.
   */
  durationLimitInIntervals?: Maybe<Scalars['Int']['output']>; /** The price of the subscription after the discount is applied. */
  priceAfterDiscount: MoneyV2; /** The remaining number of billing intervals to which the discount will be applied. */
  remainingDurationInIntervals?: Maybe<Scalars['Int']['output']>; /** The value of the discount applied every billing interval. */
  value: AppSubscriptionDiscountValue;
};
/** The fixed amount value of a discount. */
type AppSubscriptionDiscountAmount = {
  __typename?: 'AppSubscriptionDiscountAmount'; /** The fixed amount value of a discount. */
  amount: MoneyV2;
};
/** The percentage value of a discount. */
type AppSubscriptionDiscountPercentage = {
  __typename?: 'AppSubscriptionDiscountPercentage'; /** The percentage value of a discount. */
  percentage: Scalars['Float']['output'];
};
/** The value of the discount. */
type AppSubscriptionDiscountValue = AppSubscriptionDiscountAmount | AppSubscriptionDiscountPercentage;
/** An auto-generated type which holds one AppSubscription and a cursor during pagination. */
type AppSubscriptionEdge = {
  __typename?: 'AppSubscriptionEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of AppSubscriptionEdge. */
  node: AppSubscription;
};
/**
 * Represents a component of an app subscription that contains pricing details for either recurring fees or usage-based charges. Each subscription has exactly 1 or 2 line items - one for recurring fees and/or one for usage fees.
 *
 * If a subscription has both recurring and usage pricing, there will be 2 line items. If it only has one type of pricing, the subscription will have a single line item for that pricing model.
 *
 * Use the `AppSubscriptionLineItem` object to:
 * - View the pricing terms a merchant has agreed to
 * - Distinguish between recurring and usage fee components
 * - Access detailed billing information for each pricing component
 *
 * This read-only object provides visibility into the subscription's pricing structure without allowing modifications.
 *
 * Read about subscription pricing models in the [billing architecture guide](https://shopify.dev/docs/apps/launch/billing/subscription-billing).
 */
type AppSubscriptionLineItem = {
  __typename?: 'AppSubscriptionLineItem'; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The pricing model for the app subscription. */
  plan: AppPlanV2; /** A list of the store's usage records for a usage pricing plan. */
  usageRecords: AppUsageRecordConnection;
};
/** The status of the app subscription. */
declare enum AppSubscriptionStatus {
  /**
   * The app subscription has been approved by the merchant and is ready to be activated by the app.
   * @deprecated When a merchant approves an app subscription, the status immediately transitions from `pending` to `active`.
   */
  Accepted = 'ACCEPTED',
  /** The app subscription has been approved by the merchant. Active app subscriptions are billed to the shop. After payment, partners receive payouts. */
  Active = 'ACTIVE',
  /** The app subscription was cancelled by the app. This could be caused by the app being uninstalled, a new app subscription being activated, or a direct cancellation by the app. This is a terminal state. */
  Cancelled = 'CANCELLED',
  /** The app subscription was declined by the merchant. This is a terminal state. */
  Declined = 'DECLINED',
  /** The app subscription wasn't approved by the merchant within two days of being created. This is a terminal state. */
  Expired = 'EXPIRED',
  /** The app subscription is on hold due to non-payment. The subscription re-activates after payments resume. */
  Frozen = 'FROZEN',
  /** The app subscription is pending approval by the merchant. */
  Pending = 'PENDING'
}
/**
 * Defines usage-based pricing terms for app subscriptions where merchants pay based on their actual consumption of app features or services. This pricing model provides flexibility for merchants who want to pay only for what they use rather than fixed monthly fees.
 *
 * For example, an email marketing app might charge variable pricing per email sent, with a monthly cap of variable pricing, allowing small merchants to pay minimal amounts while protecting larger merchants from excessive charges.
 *
 * Use the `AppUsagePricing` object to:
 * - View consumption-based billing for variable app usage
 * - See spending caps that protect merchants from unexpected charges
 *
 * The balance and capped amount fields provide apps with data about current usage costs and remaining budget within the billing period, which apps can present to merchants to promote transparency in variable pricing.
 *
 * For implementation guidance, see the [usage billing documentation](https://shopify.dev/docs/apps/launch/billing/subscription-billing/create-usage-based-subscriptions).
 */
type AppUsagePricing = {
  __typename?: 'AppUsagePricing'; /** The total usage records for interval. */
  balanceUsed: MoneyV2;
  /**
   * The capped amount prevents the merchant from being charged for any usage over that amount during a billing period.
   * This prevents billing from exceeding a maximum threshold over the duration of the billing period.
   * For the merchant to continue using the app after exceeding a capped amount, they would need to agree to a new usage charge.
   */
  cappedAmount: MoneyV2; /** The frequency with which the app usage records are billed. */
  interval: AppPricingInterval;
  /**
   * The terms and conditions for app usage pricing.
   * Must be present in order to create usage charges.
   * The terms are presented to the merchant when they approve an app's usage charges.
   */
  terms: Scalars['String']['output'];
};
/** Store usage for app subscriptions with usage pricing. */
type AppUsageRecord = Node & {
  __typename?: 'AppUsageRecord'; /** The date and time when the usage record was created. */
  createdAt: Scalars['DateTime']['output']; /** The description of the app usage record. */
  description: Scalars['String']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** A unique key generated by the client to avoid duplicate charges. */
  idempotencyKey?: Maybe<Scalars['String']['output']>; /** The price of the usage record. */
  price: MoneyV2; /** Defines the usage pricing plan the merchant is subscribed to. */
  subscriptionLineItem: AppSubscriptionLineItem;
};
/** An auto-generated type for paginating through multiple AppUsageRecords. */
type AppUsageRecordConnection = {
  __typename?: 'AppUsageRecordConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<AppUsageRecordEdge>; /** A list of nodes that are contained in AppUsageRecordEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<AppUsageRecord>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one AppUsageRecord and a cursor during pagination. */
type AppUsageRecordEdge = {
  __typename?: 'AppUsageRecordEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of AppUsageRecordEdge. */
  node: AppUsageRecord;
};
/**
 * An article that contains content, author information, and metadata. Articles belong to a [`Blog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog) and can include HTML-formatted body text, summary text, and an associated image. Merchants publish articles to share content, drive traffic, and engage customers.
 *
 * Articles can be organized with tags and published immediately or scheduled for future publication using the [`publishedAt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.publishedAt) timestamp. The API manages comments on articles when the blog's comment policy enables them.
 */
type Article = HasEvents & HasMetafieldDefinitions & HasMetafields & HasPublishedTranslations & Navigable & Node & {
  __typename?: 'Article'; /** The name of the author of the article. */
  author?: Maybe<ArticleAuthor>; /** The blog containing the article. */
  blog: Blog; /** The text of the article's body, complete with HTML markup. */
  body: Scalars['HTML']['output']; /** List of the article's comments. */
  comments: CommentConnection; /** Count of comments. Limited to a maximum of 10000 by default. */
  commentsCount?: Maybe<Count>; /** The date and time (ISO 8601 format) when the article was created. */
  createdAt: Scalars['DateTime']['output']; /** A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID. */
  defaultCursor: Scalars['String']['output']; /** The paginated list of events associated with the host subject. */
  events: EventConnection;
  /**
   * A unique, human-friendly string for the article that's automatically generated from the article's title.
   * The handle is used in the article's URL.
   */
  handle: Scalars['String']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The image associated with the article. */
  image?: Maybe<Image>; /** Whether or not the article is visible. */
  isPublished: Scalars['Boolean']['output'];
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   */
  metafield?: Maybe<Metafield>;
  /**
   * List of metafield definitions.
   * @deprecated This field will be removed in a future version. Use `QueryRoot.metafieldDefinitions` instead.
   */
  metafieldDefinitions: MetafieldDefinitionConnection;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   */
  metafields: MetafieldConnection;
  /**
   * The date and time (ISO 8601 format) when the article became or will become visible.
   * Returns null when the article isn't visible.
   */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * A summary of the article, which can include HTML markup.
   * The summary is used by the online store theme to display the article on other pages, such as the home page or the main blog page.
   */
  summary?: Maybe<Scalars['HTML']['output']>;
  /**
   * A comma-separated list of tags.
   * Tags are additional short descriptors formatted as a string of comma-separated values.
   */
  tags: Array<Scalars['String']['output']>;
  /**
   * The name of the template an article is using if it's using an alternate template.
   * If an article is using the default `article.liquid` template, then the value returned is `null`.
   */
  templateSuffix?: Maybe<Scalars['String']['output']>; /** The title of the article. */
  title: Scalars['String']['output']; /** The published translations associated with the resource. */
  translations: Array<Translation>; /** The date and time (ISO 8601 format) when the article was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};
/**
 * Represents the author of an article. This object provides the author's full name for attribution purposes.
 *
 * The `ArticleAuthor` is a simple object that contains only the author's name field. When articles are created or updated, the author information is stored and can be displayed alongside the article content.
 *
 * Use the `ArticleAuthor` object to:
 * - Retrieve the author's name for display in article bylines
 * - Show author attribution in article listings
 * - Display who wrote specific content
 *
 * Note: This object only contains the author's full name. It does not include additional author details like bio, email, or social media links.
 */
type ArticleAuthor = {
  __typename?: 'ArticleAuthor'; /** The author's full name. */
  name: Scalars['String']['output'];
};
/** An auto-generated type for paginating through multiple Articles. */
type ArticleConnection = {
  __typename?: 'ArticleConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ArticleEdge>; /** A list of nodes that are contained in ArticleEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<Article>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one Article and a cursor during pagination. */
type ArticleEdge = {
  __typename?: 'ArticleEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ArticleEdge. */
  node: Article;
};
/**
 * A custom property. Attributes are used to store additional information about a Shopify resource, such as
 * products, customers, or orders. Attributes are stored as key-value pairs.
 *
 * For example, a list of attributes might include whether a customer is a first-time buyer (`"customer_first_order": "true"`),
 * whether an order is gift-wrapped (`"gift_wrapped": "true"`), a preferred delivery date
 * (`"preferred_delivery_date": "2025-10-01"`), the discount applied (`"loyalty_discount_applied": "10%"`), and any
 * notes provided by the customer (`"customer_notes": "Please leave at the front door"`).
 */
type Attribute = {
  __typename?: 'Attribute'; /** The key or name of the attribute. For example, `"customer_first_order"`. */
  key: Scalars['String']['output']; /** The value of the attribute. For example, `"true"`. */
  value?: Maybe<Scalars['String']['output']>;
};
/** Represents an object containing all information for channels available to a shop. */
type AvailableChannelDefinitionsByChannel = {
  __typename?: 'AvailableChannelDefinitionsByChannel'; /** The channel definitions for channels installed on a shop. */
  channelDefinitions: Array<ChannelDefinition>; /** The name of the channel. */
  channelName: Scalars['String']['output'];
};
/** Generic payment details that are related to a transaction. */
type BasePaymentDetails = {
  /** The name of payment method used by the buyer. */paymentMethodName?: Maybe<Scalars['String']['output']>;
};
/**
 * A blog for publishing articles in the online store. Stores can have multiple blogs to organize content by topic or purpose.
 *
 * Each blog contains articles with their associated comments, tags, and metadata. The comment policy controls whether readers can post comments and whether moderation is required. Blogs use customizable URL handles and can apply alternate templates for specialized layouts.
 */
type Blog = HasEvents & HasMetafieldDefinitions & HasMetafields & HasPublishedTranslations & Node & {
  __typename?: 'Blog'; /** List of the blog's articles. */
  articles: ArticleConnection; /** Count of articles. Limited to a maximum of 10000 by default. */
  articlesCount?: Maybe<Count>; /** Indicates whether readers can post comments to the blog and if comments are moderated or not. */
  commentPolicy: CommentPolicy; /** The date and time when the blog was created. */
  createdAt: Scalars['DateTime']['output']; /** The paginated list of events associated with the host subject. */
  events: EventConnection; /** FeedBurner provider details. Any blogs that aren't already integrated with FeedBurner can't use the service. */
  feed?: Maybe<BlogFeed>;
  /**
   * A unique, human-friendly string for the blog. If no handle is specified, a handle will be generated automatically from the blog title.
   * The handle is customizable and is used by the Liquid templating language to refer to the blog.
   */
  handle: Scalars['String']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   */
  metafield?: Maybe<Metafield>;
  /**
   * List of metafield definitions.
   * @deprecated This field will be removed in a future version. Use `QueryRoot.metafieldDefinitions` instead.
   */
  metafieldDefinitions: MetafieldDefinitionConnection;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   */
  metafields: MetafieldConnection; /** A list of tags associated with the 200 most recent blog articles. */
  tags: Array<Scalars['String']['output']>;
  /**
   * The name of the template a blog is using if it's using an alternate template.
   * Returns `null` if a blog is using the default blog.liquid template.
   */
  templateSuffix?: Maybe<Scalars['String']['output']>; /** The title of the blog. */
  title: Scalars['String']['output']; /** The published translations associated with the resource. */
  translations: Array<Translation>; /** The date and time when the blog was update. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};
/**
 * RSS feed provider details for blog syndication. This object contains the location and path information for external feed services that were previously integrated with the blog.
 *
 * The `BlogFeed` object maintains the feed URL and path to ensure existing feed subscriptions continue working.
 *
 * Use the `BlogFeed` object to:
 * - Access RSS feed provider configuration
 * - Retrieve feed location and path information
 * - Maintain existing feed syndication settings
 *
 * > Note:
 * > This is a legacy feature. New integrations with external feed services are not supported.
 */
type BlogFeed = {
  __typename?: 'BlogFeed'; /** Blog feed provider url. */
  location: Scalars['URL']['output']; /** Blog feed provider path. */
  path: Scalars['String']['output'];
};
/** Represents the Bundles feature configuration for the shop. */
type BundlesFeature = {
  __typename?: 'BundlesFeature'; /** Whether a shop is configured properly to sell bundles. */
  eligibleForBundles: Scalars['Boolean']['output']; /** The reason why a shop is not eligible for bundles. */
  ineligibilityReason?: Maybe<Scalars['String']['output']>; /** Whether a shop has any fixed bundle products or has a cartTransform function installed. */
  sellsBundles: Scalars['Boolean']['output'];
};
/**
 * A legal entity through which a merchant operates. Each business entity contains its own [`BusinessEntityAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessEntityAddress), company information, and can be associated with its own [`ShopifyPaymentsAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount). [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) objects can be assigned to a business entity to determine payment processing and [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) attribution.
 *
 * Every shop must have one primary business entity. Additional entities enable international operations by establishing legal presence in multiple countries.
 *
 * Learn more about [managing multiple legal entities](https://shopify.dev/docs/apps/build/markets/multiple-entities).
 */
type BusinessEntity = Node & {
  __typename?: 'BusinessEntity'; /** The address of the merchant's Business Entity. */
  address: BusinessEntityAddress; /** Whether the Business Entity is archived from the shop. */
  archived: Scalars['Boolean']['output']; /** The name of the company associated with the merchant's Business Entity. */
  companyName?: Maybe<Scalars['String']['output']>; /** The display name of the merchant's Business Entity. */
  displayName: Scalars['String']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** Whether it's the merchant's primary Business Entity. */
  primary: Scalars['Boolean']['output'];
  /**
   * Returns the Shopify Payments account information for the shop. Includes current balances across all currencies, payout schedules, and bank account configurations.
   *
   * The account includes [`ShopifyPaymentsBalanceTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction) records showing charges, refunds, and adjustments that affect your balance. Also includes [`ShopifyPaymentsDispute`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDispute) records and [`ShopifyPaymentsPayout`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout) history between the account and connected [`ShopifyPaymentsBankAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount) configurations.
   */
  shopifyPaymentsAccount?: Maybe<ShopifyPaymentsAccount>;
};
/** Represents the address of a merchant's Business Entity. */
type BusinessEntityAddress = {
  __typename?: 'BusinessEntityAddress'; /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']['output']>; /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars['String']['output']>; /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']['output']>; /** The country code of the merchant's Business Entity. */
  countryCode: CountryCode; /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']['output']>; /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']['output']>;
};
/** Settings describing the behavior of checkout for a B2B buyer. */
type BuyerExperienceConfiguration = {
  __typename?: 'BuyerExperienceConfiguration'; /** Whether to checkout to draft order for merchant review. */
  checkoutToDraft: Scalars['Boolean']['output']; /** The portion required to be paid at checkout. */
  deposit?: Maybe<DepositConfiguration>; /** Whether to allow customers to use editable shipping addresses. */
  editableShippingAddress: Scalars['Boolean']['output'];
  /**
   * Whether a buyer must pay at checkout or they can also choose to pay
   * later using net terms.
   * @deprecated Please use `checkoutToDraft`(must be false) and `paymentTermsTemplate`(must be nil) to derive this instead.
   */
  payNowOnly: Scalars['Boolean']['output']; /** Represents the merchant configured payment terms. */
  paymentTermsTemplate?: Maybe<PaymentTermsTemplate>;
};
/** The calculated line item for a draft order. */
type CalculatedDraftOrderLineItem = {
  __typename?: 'CalculatedDraftOrderLineItem'; /** The custom applied discount. */
  appliedDiscount?: Maybe<DraftOrderAppliedDiscount>;
  /**
   * The `discountedTotal` divided by `quantity`,
   * equal to the average value of the line item price per unit after discounts are applied.
   * This value doesn't include discounts applied to the entire draft order.
   */
  approximateDiscountedUnitPriceSet: MoneyBag;
  /**
   * The bundle components of the draft order line item.
   * @deprecated Use `components` instead.
   */
  bundleComponents: Array<CalculatedDraftOrderLineItem>; /** The components of the draft order line item. */
  components: Array<CalculatedDraftOrderLineItem>; /** Whether the line item is custom (`true`) or contains a product variant (`false`). */
  custom: Scalars['Boolean']['output']; /** A list of attributes that represent custom features or special requests. */
  customAttributes: Array<Attribute>; /** The list of additional information (metafields) with the associated types. */
  customAttributesV2: Array<TypedAttribute>; /** The total price with discounts applied. */
  discountedTotal: MoneyV2; /** The total price with discounts applied. */
  discountedTotalSet: MoneyBag;
  /**
   * The unit price with discounts applied.
   * @deprecated Use `approximateDiscountedUnitPriceSet` instead.
   */
  discountedUnitPrice: MoneyV2;
  /**
   * The unit price with discounts applied.
   * @deprecated Use `approximateDiscountedUnitPriceSet` instead.
   */
  discountedUnitPriceSet: MoneyBag;
  /**
   * Name of the service provider who fulfilled the order.
   *
   * Valid values are either **manual** or the name of the provider.
   * For example, **amazon**, **shipwire**.
   *
   * Deleted fulfillment services will return null.
   */
  fulfillmentService?: Maybe<FulfillmentService>; /** The image associated with the draft order line item. */
  image?: Maybe<Image>; /** Whether the line item represents the purchase of a gift card. */
  isGiftCard: Scalars['Boolean']['output']; /** The name of the product. */
  name: Scalars['String']['output']; /** The total price, excluding discounts, equal to the original unit price multiplied by quantity. */
  originalTotal: MoneyV2; /** The total price excluding discounts, equal to the original unit price multiplied by quantity. */
  originalTotalSet: MoneyBag; /** The line item price without any discounts applied. */
  originalUnitPrice: MoneyV2; /** The price without any discounts applied. */
  originalUnitPriceSet: MoneyBag; /** The original custom line item input price. */
  originalUnitPriceWithCurrency?: Maybe<MoneyV2>; /** The price override for the line item. */
  priceOverride?: Maybe<MoneyV2>; /** The product for the line item. */
  product?: Maybe<Product>;
  /**
   * The quantity of items. For a bundle item, this is the quantity of bundles,
   * not the quantity of items contained in the bundles themselves.
   */
  quantity: Scalars['Int']['output']; /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars['Boolean']['output']; /** The SKU number of the product variant. */
  sku?: Maybe<Scalars['String']['output']>; /** Whether the variant is taxable. */
  taxable: Scalars['Boolean']['output']; /** The title of the product or variant. This field only applies to custom line items. */
  title: Scalars['String']['output']; /** The total value of the discount. */
  totalDiscount: MoneyV2; /** The total discount amount. */
  totalDiscountSet: MoneyBag;
  /**
   * The UUID of the draft order line item. Must be unique and consistent across requests.
   * This field is mandatory in order to manipulate drafts with bundles.
   */
  uuid: Scalars['String']['output']; /** The product variant for the line item. */
  variant?: Maybe<ProductVariant>; /** The name of the variant. */
  variantTitle?: Maybe<Scalars['String']['output']>; /** The name of the vendor who created the product variant. */
  vendor?: Maybe<Scalars['String']['output']>; /** The weight unit and value. */
  weight?: Maybe<Weight>;
};
/** Credit card payment information captured during a transaction. Includes cardholder details, card metadata, verification response codes, and the [`DigitalWallet`](https://shopify.dev/docs/api/admin-graphql/latest/enums/DigitalWallet#valid-values) when used. */
type CardPaymentDetails = BasePaymentDetails & {
  __typename?: 'CardPaymentDetails'; /** The response code from the address verification system (AVS). The code is always a single letter. */
  avsResultCode?: Maybe<Scalars['String']['output']>; /** The issuer identification number (IIN), formerly known as bank identification number (BIN) of the customer's credit card. This is made up of the first few digits of the credit card number. */
  bin?: Maybe<Scalars['String']['output']>; /** The name of the company that issued the customer's credit card. */
  company?: Maybe<Scalars['String']['output']>; /** The response code from the credit card company indicating whether the customer entered the card security code, or card verification value, correctly. The code is a single letter or empty string. */
  cvvResultCode?: Maybe<Scalars['String']['output']>; /** The month in which the used credit card expires. */
  expirationMonth?: Maybe<Scalars['Int']['output']>; /** The year in which the used credit card expires. */
  expirationYear?: Maybe<Scalars['Int']['output']>; /** The holder of the credit card. */
  name?: Maybe<Scalars['String']['output']>; /** The customer's credit card number, with most of the leading digits redacted. */
  number?: Maybe<Scalars['String']['output']>; /** The name of payment method used by the buyer. */
  paymentMethodName?: Maybe<Scalars['String']['output']>; /** Digital wallet used for the payment. */
  wallet?: Maybe<DigitalWallet>;
};
/**
 * Controls which cart transformation operations apps can perform in your store. This lets you define exactly what types of cart modifications are allowed based on your checkout setup and business needs.
 *
 * The eligible operations determine what cart transform functions can accomplish, providing a clear boundary for app capabilities within the store's ecosystem.
 *
 * Learn more about [cart transform operations](https://shopify.dev/docs/api/functions/latest/cart-transform#multiple-operations).
 */
type CartTransformEligibleOperations = {
  __typename?: 'CartTransformEligibleOperations'; /** The shop is eligible for expand operations. */
  expandOperation: Scalars['Boolean']['output']; /** The shop is eligible for merge operations. */
  mergeOperation: Scalars['Boolean']['output']; /** The shop is eligible for update operations. */
  updateOperation: Scalars['Boolean']['output'];
};
/**
 * Provides access to the cart transform feature configuration for the merchant's store. This wrapper object indicates whether cart transformation capabilities are enabled and what operations are available.
 *
 * For example, when checking if your app can deploy customized bundle features, you would query this object to confirm cart transforms are supported and review the eligible operations.
 *
 * The feature configuration helps apps determine compatibility before attempting to create transform functions.
 *
 * Learn more about [cart transformation](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransform).
 */
type CartTransformFeature = {
  __typename?: 'CartTransformFeature'; /** The cart transform operations eligible for the shop. */
  eligibleOperations: CartTransformEligibleOperations;
};
/** The rounding adjustment applied to total payment or refund received for an Order involving cash payments. */
type CashRoundingAdjustment = {
  __typename?: 'CashRoundingAdjustment'; /** The rounding adjustment that can be applied to totalReceived for an Order involving cash payments in shop and presentment currencies. Could be a positive or negative value. Value is 0 if there's no rounding, or for non-cash payments. */
  paymentSet: MoneyBag; /** The rounding adjustment that can be applied to totalRefunded for an Order involving cash payments in shop and presentment currencies. Could be a positive or negative value. Value is 0 if there's no rounding, or for non-cash refunds. */
  refundSet: MoneyBag;
};
/**
 * A list of products with publishing and pricing information.
 * A catalog can be associated with a specific context, such as a [`Market`](https://shopify.dev/api/admin-graphql/current/objects/market), [`CompanyLocation`](https://shopify.dev/api/admin-graphql/current/objects/companylocation), or [`App`](https://shopify.dev/api/admin-graphql/current/objects/app).
 *
 * Catalogs can optionally include a publication to control product visibility and a price list to customize pricing. When a publication isn't associated with a catalog, product availability is determined by the sales channel.
 */
type Catalog = {
  /** A globally-unique ID. */id: Scalars['ID']['output']; /** Most recent catalog operations. */
  operations: Array<ResourceOperation>; /** The price list associated with the catalog. */
  priceList?: Maybe<PriceList>; /** A group of products and collections that's published to a catalog. */
  publication?: Maybe<Publication>; /** The status of the catalog. */
  status: CatalogStatus; /** The name of the catalog. */
  title: Scalars['String']['output'];
};
/** An auto-generated type for paginating through multiple Catalogs. */
type CatalogConnection = {
  __typename?: 'CatalogConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<CatalogEdge>; /** A list of nodes that are contained in CatalogEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<Catalog>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** A catalog csv operation represents a CSV file import. */
type CatalogCsvOperation = Node & ResourceOperation & {
  __typename?: 'CatalogCsvOperation'; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The count of processed rows, summing imported, failed, and skipped rows. */
  processedRowCount?: Maybe<Scalars['Int']['output']>; /** Represents a rows objects within this background operation. */
  rowCount?: Maybe<RowCount>; /** The status of this operation. */
  status: ResourceOperationStatus;
};
/** An auto-generated type which holds one Catalog and a cursor during pagination. */
type CatalogEdge = {
  __typename?: 'CatalogEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of CatalogEdge. */
  node: Catalog;
};
/** The state of a catalog. */
declare enum CatalogStatus {
  /** The catalog is active. */
  Active = 'ACTIVE',
  /** The catalog is archived. */
  Archived = 'ARCHIVED',
  /** The catalog is in draft. */
  Draft = 'DRAFT'
}
/**
 * A connection between a Shopify shop and an external selling platform that supports product syndication and optionally order ingestion. Each channel binds a merchant's account on a specific platform — such as Amazon, eBay, Google, or a point-of-sale system — to the shop, establishing the publishing destination for product feeds.
 *
 * Sales Channel applications use [`channelCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelCreate) to establish channels after merchant authentication, and can manage multiple channel connections per app. Each channel is bound to a channel specification that declares the platform's regional coverage, capabilities, and requirements.
 *
 * Use channels to manage where catalog items are syndicated, track publication status across platforms, and control [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) visibility for different selling destinations.
 */
type Channel = Node & {
  __typename?: 'Channel'; /** The underlying app used by the channel. */
  app: App; /** The list of collection publications. Each record represents information about the publication of a collection. */
  collectionPublicationsV3: ResourcePublicationConnection; /** The list of collections published to the channel. */
  collections: CollectionConnection; /** A unique, human-readable identifier for the channel within the shop. Set during [`channelCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelCreate) or auto-generated from the specification handle and account ID. Use with [`channelByHandle`](https://shopify.dev/docs/api/admin-graphql/latest/queries/channelByHandle) for lookups. */
  handle: Scalars['String']['output']; /** Whether the collection is available to the channel. */
  hasCollection: Scalars['Boolean']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The name of the channel. */
  name: Scalars['String']['output'];
  /**
   * The menu items for the channel, which also appear as submenu items in the left navigation sidebar in the Shopify admin.
   * @deprecated Use [AppInstallation.navigationItems](
   *           https://shopify.dev/api/admin-graphql/current/objects/AppInstallation#field-appinstallation-navigationitems) instead.
   */
  navigationItems: Array<NavigationItem>;
  /**
   * Home page for the channel.
   * @deprecated Use [AppInstallation.launchUrl](
   *           https://shopify.dev/api/admin-graphql/current/objects/AppInstallation#field-appinstallation-launchurl) instead.
   */
  overviewPath?: Maybe<Scalars['URL']['output']>;
  /**
   * The product publications for the products published to the channel.
   * @deprecated Use `productPublicationsV3` instead.
   */
  productPublications: ProductPublicationConnection; /** The list of product publication records for products published to this channel. */
  productPublicationsV3: ResourcePublicationConnection; /** The list of products published to the channel. */
  products: ProductConnection; /** Retrieves the total count of [`products`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) published to a specific sales channel. Limited to a maximum of 10000 by default. */
  productsCount?: Maybe<Count>; /** Whether the channel supports future publishing. */
  supportsFuturePublishing: Scalars['Boolean']['output'];
};
/** An auto-generated type for paginating through multiple Channels. */
type ChannelConnection = {
  __typename?: 'ChannelConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ChannelEdge>; /** A list of nodes that are contained in ChannelEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<Channel>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/**
 * A specific selling surface within a [sales channel](https://shopify.dev/docs/apps/build/sales-channels) platform. A channel definition identifies where products can be sold. Definitions can represent entire platforms (like Facebook or TikTok) or specific sales channels within those platforms, such as Instagram Shops, Instagram Shopping, or TikTok Live.
 *
 * Each definition includes the parent [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) name and subchannel name to indicate the selling surface hierarchy. The marketplace flag identifies whether this surface represents a marketplace channel such as shops on Facebook, Instagram, or Buy on Google.
 */
type ChannelDefinition = Node & {
  __typename?: 'ChannelDefinition'; /** Name of the channel that this sub channel belongs to. */
  channelName: Scalars['String']['output']; /** Unique string used as a public identifier for the channel definition. */
  handle: Scalars['String']['output']; /** The unique ID for the channel definition. */
  id: Scalars['ID']['output']; /** Whether this channel definition represents a marketplace. */
  isMarketplace: Scalars['Boolean']['output']; /** Name of the sub channel (e.g. Online Store, Instagram Shopping, TikTok Live). */
  subChannelName: Scalars['String']['output'];
  /**
   * Icon displayed when showing the channel in admin.
   * @deprecated Use App.icon instead
   */
  svgIcon?: Maybe<Scalars['String']['output']>;
};
/** An auto-generated type which holds one Channel and a cursor during pagination. */
type ChannelEdge = {
  __typename?: 'ChannelEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ChannelEdge. */
  node: Channel;
};
/**
 * Identifies the [sales channel](https://shopify.dev/docs/apps/build/sales-channels) and [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) from which an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) originated. Provides attribution details such as the specific platform (Facebook Marketplace, Instagram Shopping) or marketplace where the order was placed.
 *
 * Links to the app that manages the channel and optional [`ChannelDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelDefinition) details that specify the exact sub-channel or selling surface.
 */
type ChannelInformation = Node & {
  __typename?: 'ChannelInformation'; /** The app associated with the channel. */
  app: App; /** The channel definition associated with the channel. */
  channelDefinition?: Maybe<ChannelDefinition>; /** The unique ID for the channel. */
  channelId: Scalars['ID']['output']; /** The publishing destination display name or channel name. */
  displayName?: Maybe<Scalars['String']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output'];
};
/**
 * The `Collection` object represents a group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
 * that merchants can organize to make their stores easier to browse and help customers find related products.
 * Collections serve as the primary way to categorize and display products across
 * [online stores](https://shopify.dev/docs/apps/build/online-store),
 * [sales channels](https://shopify.dev/docs/apps/build/sales-channels), and marketing campaigns.
 *
 * There are two types of collections:
 *
 * - **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You specify the products to include in a collection.
 * - **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You define rules, and products matching those rules are automatically included in the collection.
 *
 * The `Collection` object provides information to:
 *
 * - Organize products by category, season, or promotion.
 * - Automate product grouping using rules (for example, by tag, type, or price).
 * - Configure product sorting and display order (for example, alphabetical, best-selling, price, or manual).
 * - Manage collection visibility and publication across sales channels.
 * - Add rich descriptions, images, and metadata to enhance discovery.
 *
 * > Note:
 * > Collections are unpublished by default. To make them available to customers,
 * use the [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish)
 * mutation after creation.
 *
 * Collections can be displayed in a store with Shopify's theme system through [Liquid templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/collection)
 * and can be customized with [template suffixes](https://shopify.dev/docs/storefronts/themes/architecture/templates/alternate-templates)
 * for unique layouts. They also support advanced features like translated content, resource feedback,
 * and contextual publication for location-based catalogs.
 *
 * Learn about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).
 */
type Collection = HasEvents & HasMetafieldDefinitions & HasMetafields & HasPublishedTranslations & Node & Publishable & {
  __typename?: 'Collection';
  /**
   * The number of
   * [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)
   * that a resource is published to, without
   * [feedback errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback).
   */
  availablePublicationsCount?: Maybe<Count>; /** A single-line, text-only description of the collection, stripped of any HTML tags and formatting that were included in the description. */
  description: Scalars['String']['output']; /** The description of the collection, including any HTML tags and formatting. This content is typically displayed to customers, such as on an online store, depending on the theme. */
  descriptionHtml: Scalars['HTML']['output']; /** The paginated list of events associated with the host subject. */
  events: EventConnection; /** Information about the collection that's provided through resource feedback. */
  feedback?: Maybe<ResourceFeedback>;
  /**
   * A unique string that identifies the collection. If a handle isn't specified when a collection is created, it's automatically generated from the collection's original title, and typically includes words from the title separated by hyphens. For example, a collection that was created with the title `Summer Catalog 2022` might have the handle `summer-catalog-2022`.
   *
   * If the title is changed, the handle doesn't automatically change.
   *
   * The handle can be used in themes by the Liquid templating language to refer to the collection, but using the ID is preferred because it never changes.
   */
  handle: Scalars['String']['output']; /** Whether the collection includes the specified product. */
  hasProduct: Scalars['Boolean']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The image associated with the collection. */
  image?: Maybe<Image>; /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64']['output'];
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   */
  metafield?: Maybe<Metafield>;
  /**
   * List of metafield definitions.
   * @deprecated This field will be removed in a future version. Use `QueryRoot.metafieldDefinitions` instead.
   */
  metafieldDefinitions: MetafieldDefinitionConnection;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   */
  metafields: MetafieldConnection; /** The products that are included in the collection. */
  products: ProductConnection; /** The number of products in the collection. */
  productsCount?: Maybe<Count>;
  /**
   * The number of
   * [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)
   * that a resource is published to, without
   * [feedback errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback).
   * @deprecated Use `resourcePublicationsCount` instead.
   */
  publicationCount: Scalars['Int']['output'];
  /**
   * The channels where the collection is published.
   * @deprecated Use `resourcePublications` instead.
   */
  publications: CollectionPublicationConnection;
  /**
   * Whether the resource is published to a specific channel.
   * @deprecated Use `publishedOnPublication` instead.
   */
  publishedOnChannel: Scalars['Boolean']['output'];
  /**
   * Whether the resource is published to a
   * [channel](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel).
   * For example, the resource might be published to the online store channel.
   * @deprecated Use `publishedOnCurrentPublication` instead.
   */
  publishedOnCurrentChannel: Scalars['Boolean']['output'];
  /**
   * Whether the resource is published to the app's
   * [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).
   * For example, the resource might be published to the app's online store channel.
   * @deprecated Use `publishedOnPublication` instead.
   */
  publishedOnCurrentPublication: Scalars['Boolean']['output'];
  /**
   * Whether the resource is published to a specified
   * [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).
   */
  publishedOnPublication: Scalars['Boolean']['output'];
  /**
   * The list of resources that are published to a
   * [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).
   */
  resourcePublications: ResourcePublicationConnection;
  /**
   * The number of
   * [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)
   * that a resource is published to, without
   * [feedback errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback).
   */
  resourcePublicationsCount?: Maybe<Count>;
  /**
   * The list of resources that are either published or staged to be published to a
   * [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).
   */
  resourcePublicationsV2: ResourcePublicationV2Connection; /** For a smart (automated) collection, specifies the rules that determine whether a product is included. */
  ruleSet?: Maybe<CollectionRuleSet>; /** If the default SEO fields for page title and description have been modified, contains the modified information. */
  seo: Seo; /** The order in which the products in the collection are displayed by default in the Shopify admin and in sales channels, such as an online store. */
  sortOrder: CollectionSortOrder;
  /**
   * The Storefront GraphQL API ID of the `Collection`.
   *
   * As of the `2022-04` version release, the Storefront GraphQL API will no longer return Base64 encoded IDs to match the behavior of the Admin GraphQL API. Therefore, you can safely use the `id` field's value instead.
   * @deprecated Use `id` instead.
   */
  storefrontId: Scalars['StorefrontID']['output']; /** The suffix of the Liquid template being used to show the collection in an online store. For example, if the value is `custom`, then the collection is using the `collection.custom.liquid` template. If the value is `null`, then the collection is using the default `collection.liquid` template. */
  templateSuffix?: Maybe<Scalars['String']['output']>; /** The name of the collection. It's displayed in the Shopify admin and is typically displayed in sales channels, such as an online store. */
  title: Scalars['String']['output']; /** The published translations associated with the resource. */
  translations: Array<Translation>;
  /**
   * The list of channels that the resource is not published to.
   * @deprecated Use `unpublishedPublications` instead.
   */
  unpublishedChannels: ChannelConnection;
  /**
   * The list of [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)
   * that the resource isn't published to.
   */
  unpublishedPublications: PublicationConnection; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the collection was last modified. */
  updatedAt: Scalars['DateTime']['output'];
};
/** An auto-generated type for paginating through multiple Collections. */
type CollectionConnection = {
  __typename?: 'CollectionConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<CollectionEdge>; /** A list of nodes that are contained in CollectionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<Collection>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one Collection and a cursor during pagination. */
type CollectionEdge = {
  __typename?: 'CollectionEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of CollectionEdge. */
  node: Collection;
};
/**
 * Represents the publication status and settings for a collection across different sales channels. This tracks where collections are published, when they were published, and any channel-specific configuration.
 *
 * For example, a "Holiday Gifts" collection might be published to the online store and Facebook Shop but not to the POS channel, with different publication dates for each channel based on marketing strategy.
 *
 * Use `CollectionPublication` to:
 * - Track collection visibility across multiple sales channels
 * - Manage channel-specific collection settings and availability
 * - Monitor publication history and timing for collections
 * - Control where collections appear in customer-facing channels
 * - Implement channel-specific collection management workflows
 *
 * Each publication record includes the channel information, publication status, and timing details. This enables merchants to control collection visibility strategically across their sales channels.
 *
 * Collections can have different publication settings per channel, allowing for targeted marketing and inventory management. For instance, wholesale collections might only be published to B2B channels while retail collections appear in consumer-facing channels.
 *
 * The publication system integrates with Shopify's broader channel management, ensuring collections appear consistently across the merchant's sales ecosystem while respecting channel-specific rules and permissions.
 *
 * Learn more about [sales channel management](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).
 */
type CollectionPublication = {
  __typename?: 'CollectionPublication';
  /**
   * The channel where the collection will be published.
   * @deprecated Use `publication` instead.
   */
  channel: Channel; /** The collection to be published on the publication. */
  collection: Collection; /** Whether the publication is published or not. */
  isPublished: Scalars['Boolean']['output']; /** The publication where the collection will be published. */
  publication: Publication; /** The date that the publication was or is going to be published. */
  publishDate: Scalars['DateTime']['output'];
};
/** An auto-generated type for paginating through multiple CollectionPublications. */
type CollectionPublicationConnection = {
  __typename?: 'CollectionPublicationConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<CollectionPublicationEdge>; /** A list of nodes that are contained in CollectionPublicationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<CollectionPublication>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one CollectionPublication and a cursor during pagination. */
type CollectionPublicationEdge = {
  __typename?: 'CollectionPublicationEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of CollectionPublicationEdge. */
  node: CollectionPublication;
};
/** Represents at rule that's used to assign products to a collection. */
type CollectionRule = {
  __typename?: 'CollectionRule'; /** The attribute that the rule focuses on. For example, `title` or `product_type`. */
  column: CollectionRuleColumn; /** The value that the operator is applied to. For example, `Hats`. */
  condition: Scalars['String']['output']; /** The value that the operator is applied to. */
  conditionObject?: Maybe<CollectionRuleConditionObject>; /** The type of operator that the rule is based on. For example, `equals`, `contains`, or `not_equals`. */
  relation: CollectionRuleRelation;
};
/** Specifies the taxonomy category to used for the condition. */
type CollectionRuleCategoryCondition = {
  __typename?: 'CollectionRuleCategoryCondition'; /** The taxonomy category used as condition. */
  value: TaxonomyCategory;
};
/** Specifies the attribute of a product being used to populate the smart collection. */
declare enum CollectionRuleColumn {
  /**
   * An attribute evaluated based on the `compare_at_price` attribute of the product's variants.
   * With `is_set` relation, the rule matches products with at least one variant with `compare_at_price` set.
   * With `is_not_set` relation, the rule matches matches products with at least one variant with `compare_at_price` not set.
   */
  IsPriceReduced = 'IS_PRICE_REDUCED',
  /**
   * This rule type is designed to dynamically include products in a smart collection based on their category id.
   * When a specific product category is set as a condition, this rule will match products that are directly assigned to the specified category.
   */
  ProductCategoryId = 'PRODUCT_CATEGORY_ID',
  /**
   * This rule type is designed to dynamically include products in a smart collection based on their category id.
   * When a specific product category is set as a condition, this rule will not only match products that are
   * directly assigned to the specified category but also include any products categorized under any descendant of that category.
   */
  ProductCategoryIdWithDescendants = 'PRODUCT_CATEGORY_ID_WITH_DESCENDANTS',
  /** This category includes metafield definitions that have the `useAsCollectionCondition` flag set to true. */
  ProductMetafieldDefinition = 'PRODUCT_METAFIELD_DEFINITION',
  /** The [`product_taxonomy_node_id`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-Product.fields.productCategory) attribute. */
  ProductTaxonomyNodeId = 'PRODUCT_TAXONOMY_NODE_ID',
  /** The [`tag`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-Product.fields.tags) attribute. */
  Tag = 'TAG',
  /** The [`title`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-Product.fields.title) attribute. */
  Title = 'TITLE',
  /** The [`type`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-Product.fields.productType) attribute. */
  Type = 'TYPE',
  /** The [`variant_compare_at_price`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.compareAtPrice) attribute. */
  VariantCompareAtPrice = 'VARIANT_COMPARE_AT_PRICE',
  /** The [`variant_inventory`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.inventoryQuantity) attribute. */
  VariantInventory = 'VARIANT_INVENTORY',
  /** This category includes metafield definitions that have the `useAsCollectionCondition` flag set to true. */
  VariantMetafieldDefinition = 'VARIANT_METAFIELD_DEFINITION',
  /** The [`variant_price`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.price) attribute. */
  VariantPrice = 'VARIANT_PRICE',
  /** The [`variant_title`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.title) attribute. */
  VariantTitle = 'VARIANT_TITLE',
  /** The [`variant_weight`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.inventoryItem.measurement.weight) attribute. */
  VariantWeight = 'VARIANT_WEIGHT',
  /** The [`vendor`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-Product.fields.vendor) attribute. */
  Vendor = 'VENDOR'
}
/** Specifies object for the condition of the rule. */
type CollectionRuleConditionObject = CollectionRuleCategoryCondition | CollectionRuleMetafieldCondition | CollectionRuleProductCategoryCondition | CollectionRuleTextCondition;
/** Identifies a metafield definition used as a rule for the smart collection. */
type CollectionRuleMetafieldCondition = {
  __typename?: 'CollectionRuleMetafieldCondition'; /** The metafield definition associated with the condition. */
  metafieldDefinition: MetafieldDefinition;
};
/** Specifies the condition for a Product Category field. */
type CollectionRuleProductCategoryCondition = {
  __typename?: 'CollectionRuleProductCategoryCondition'; /** The value of the condition. */
  value: ProductTaxonomyNode;
};
/** Specifies the relationship between the `column` and the `condition`. */
declare enum CollectionRuleRelation {
  /** The attribute contains the condition. */
  Contains = 'CONTAINS',
  /** The attribute ends with the condition. */
  EndsWith = 'ENDS_WITH',
  /** The attribute is equal to the condition. */
  Equals = 'EQUALS',
  /** The attribute is greater than the condition. */
  GreaterThan = 'GREATER_THAN',
  /** The attribute is not set (equal to `null`). */
  IsNotSet = 'IS_NOT_SET',
  /** The attribute is set (not equal to `null`). */
  IsSet = 'IS_SET',
  /** The attribute is less than the condition. */
  LessThan = 'LESS_THAN',
  /** The attribute does not contain the condition. */
  NotContains = 'NOT_CONTAINS',
  /** The attribute does not equal the condition. */
  NotEquals = 'NOT_EQUALS',
  /** The attribute starts with the condition. */
  StartsWith = 'STARTS_WITH'
}
/** The set of rules that are used to determine which products are included in the collection. */
type CollectionRuleSet = {
  __typename?: 'CollectionRuleSet';
  /**
   * Whether products must match any or all of the rules to be included in the collection.
   * If true, then products must match at least one of the rules to be included in the collection.
   * If false, then products must match all of the rules to be included in the collection.
   */
  appliedDisjunctively: Scalars['Boolean']['output']; /** The rules used to assign products to the collection. */
  rules: Array<CollectionRule>;
};
/** Specifies the condition for a text field. */
type CollectionRuleTextCondition = {
  __typename?: 'CollectionRuleTextCondition'; /** The value of the condition. */
  value: Scalars['String']['output'];
};
/** Specifies the sort order for the products in the collection. */
declare enum CollectionSortOrder {
  /** Alphabetically, in ascending order (A - Z). */
  AlphaAsc = 'ALPHA_ASC',
  /** Alphabetically, in descending order (Z - A). */
  AlphaDesc = 'ALPHA_DESC',
  /** By best-selling products. */
  BestSelling = 'BEST_SELLING',
  /** By date created, in ascending order (oldest - newest). */
  Created = 'CREATED',
  /** By date created, in descending order (newest - oldest). */
  CreatedDesc = 'CREATED_DESC',
  /** In the order set manually by the merchant. */
  Manual = 'MANUAL',
  /** By price, in ascending order (lowest - highest). */
  PriceAsc = 'PRICE_ASC',
  /** By price, in descending order (highest - lowest). */
  PriceDesc = 'PRICE_DESC'
}
/** A combined listing of products. */
type CombinedListing = {
  __typename?: 'CombinedListing'; /** A list of child products in the combined listing. */
  combinedListingChildren: CombinedListingChildConnection; /** The parent product. */
  parentProduct: Product;
};
/** A child of a combined listing. */
type CombinedListingChild = {
  __typename?: 'CombinedListingChild'; /** The parent variant. */
  parentVariant: ProductVariant; /** The child product. */
  product: Product;
};
/** An auto-generated type for paginating through multiple CombinedListingChildren. */
type CombinedListingChildConnection = {
  __typename?: 'CombinedListingChildConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<CombinedListingChildEdge>; /** A list of nodes that are contained in CombinedListingChildEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<CombinedListingChild>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one CombinedListingChild and a cursor during pagination. */
type CombinedListingChildEdge = {
  __typename?: 'CombinedListingChildEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of CombinedListingChildEdge. */
  node: CombinedListingChild;
};
/** The role of the combined listing. */
declare enum CombinedListingsRole {
  /** The product is the child of a combined listing. */
  Child = 'CHILD',
  /** The product is the parent of a combined listing. */
  Parent = 'PARENT'
}
/** A comment on an article. */
type Comment = HasEvents & Node & {
  __typename?: 'Comment'; /** The article associated with the comment. */
  article?: Maybe<Article>; /** The comment’s author. */
  author: CommentAuthor; /** The content of the comment. */
  body: Scalars['String']['output']; /** The content of the comment, complete with HTML formatting. */
  bodyHtml: Scalars['HTML']['output']; /** The date and time when the comment was created. */
  createdAt: Scalars['DateTime']['output']; /** The paginated list of events associated with the host subject. */
  events: EventConnection; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The IP address of the commenter. */
  ip?: Maybe<Scalars['String']['output']>; /** Whether or not the comment is published. */
  isPublished: Scalars['Boolean']['output']; /** The date and time when the comment was published. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>; /** The status of the comment. */
  status: CommentStatus; /** The date and time when the comment was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>; /** The user agent of the commenter. */
  userAgent?: Maybe<Scalars['String']['output']>;
};
/**
 * The author of a comment on a blog article, containing the commenter's name and email address. This information helps merchants moderate comments and potentially engage with their community.
 *
 * For example, when reviewing pending comments, merchants can see the commenter's name and email to help with moderation decisions or to enable follow-up communication if needed.
 *
 * Use the `CommentAuthor` object to:
 * - Display comment attribution
 * - Support comment moderation workflows
 * - Enable merchant-to-reader communication
 */
type CommentAuthor = {
  __typename?: 'CommentAuthor'; /** The author's email. */
  email: Scalars['String']['output']; /** The author’s name. */
  name: Scalars['String']['output'];
};
/** An auto-generated type for paginating through multiple Comments. */
type CommentConnection = {
  __typename?: 'CommentConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<CommentEdge>; /** A list of nodes that are contained in CommentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<Comment>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one Comment and a cursor during pagination. */
type CommentEdge = {
  __typename?: 'CommentEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of CommentEdge. */
  node: Comment;
};
/** The subject line of a comment event. */
type CommentEventSubject = {
  /** Whether the timeline subject has a timeline comment. If true, then a timeline comment exists. */hasTimelineComment: Scalars['Boolean']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output'];
};
/** Possible comment policies for a blog. */
declare enum CommentPolicy {
  /** Readers can post comments to blog articles without moderation. */
  AutoPublished = 'AUTO_PUBLISHED',
  /** Readers cannot post comments to blog articles. */
  Closed = 'CLOSED',
  /** Readers can post comments to blog articles, but comments must be moderated before they appear. */
  Moderated = 'MODERATED'
}
/** The status of a comment. */
declare enum CommentStatus {
  /** The comment is pending approval. */
  Pending = 'PENDING',
  /** The comment is published. */
  Published = 'PUBLISHED',
  /** The comment has been removed. */
  Removed = 'REMOVED',
  /** The comment is marked as spam. */
  Spam = 'SPAM',
  /** The comment is unapproved. */
  Unapproved = 'UNAPPROVED'
}
/** A business entity that purchases from the shop as part of B2B commerce. Companies organize multiple locations and contacts who can place orders on behalf of the organization. [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects can have custom pricing through [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) and [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) configurations. */
type Company = CommentEventSubject & HasEvents & HasMetafieldDefinitions & HasMetafields & Navigable & Node & {
  __typename?: 'Company';
  /**
   * The number of contacts that belong to the company.
   * @deprecated Use `contactsCount` instead.
   */
  contactCount: Scalars['Int']['output']; /** The list of roles for the company contacts. */
  contactRoles: CompanyContactRoleConnection; /** The list of contacts in the company. */
  contacts: CompanyContactConnection; /** The number of contacts that belong to the company. */
  contactsCount?: Maybe<Count>; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company was created in Shopify. */
  createdAt: Scalars['DateTime']['output']; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company became the customer. */
  customerSince: Scalars['DateTime']['output']; /** A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID. */
  defaultCursor: Scalars['String']['output']; /** The role proposed by default for a contact at the company. */
  defaultRole?: Maybe<CompanyContactRole>; /** The list of the company's draft orders. */
  draftOrders: DraftOrderConnection; /** The paginated list of events associated with the host subject. */
  events: EventConnection; /** A unique externally-supplied ID for the company. */
  externalId?: Maybe<Scalars['String']['output']>; /** Whether the merchant added a timeline comment to the company. */
  hasTimelineComment: Scalars['Boolean']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The lifetime duration of the company, since it became a customer of the shop. Examples: `2 days`, `3 months`, `1 year`. */
  lifetimeDuration: Scalars['String']['output']; /** The list of locations in the company. */
  locations: CompanyLocationConnection; /** The number of locations that belong to the company. */
  locationsCount?: Maybe<Count>; /** The main contact for the company. */
  mainContact?: Maybe<CompanyContact>;
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   */
  metafield?: Maybe<Metafield>;
  /**
   * List of metafield definitions.
   * @deprecated This field will be removed in a future version. Use `QueryRoot.metafieldDefinitions` instead.
   */
  metafieldDefinitions: MetafieldDefinitionConnection;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   */
  metafields: MetafieldConnection; /** The name of the company. */
  name: Scalars['String']['output']; /** A note about the company. */
  note?: Maybe<Scalars['String']['output']>; /** The list of the company's orders. */
  orders: OrderConnection; /** The total number of orders placed for this company, across all its locations. */
  ordersCount?: Maybe<Count>; /** The total amount spent by this company, across all its locations. */
  totalSpent: MoneyV2; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company was last modified. */
  updatedAt: Scalars['DateTime']['output'];
};
/** Represents a billing or shipping address for a company location. */
type CompanyAddress = Node & {
  __typename?: 'CompanyAddress'; /** The first line of the address. Typically the street address or PO Box number. */
  address1: Scalars['String']['output']; /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars['String']['output']>; /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']['output']>; /** The name of the company. */
  companyName: Scalars['String']['output']; /** The name of the country. */
  country?: Maybe<Scalars['String']['output']>;
  /**
   * The two-letter code for the country of the address.
   * For example, US.
   */
  countryCode: CountryCode; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company address was created. */
  createdAt: Scalars['DateTime']['output']; /** The first name of the recipient. */
  firstName?: Maybe<Scalars['String']['output']>; /** The formatted version of the address. */
  formattedAddress: Array<Scalars['String']['output']>; /** A comma-separated list of the values for city, province, and country. */
  formattedArea?: Maybe<Scalars['String']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The last name of the recipient. */
  lastName?: Maybe<Scalars['String']['output']>;
  /**
   * A unique phone number for the customer.
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone?: Maybe<Scalars['String']['output']>; /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']['output']>; /** The identity of the recipient e.g. 'Receiving Department'. */
  recipient?: Maybe<Scalars['String']['output']>; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company address was last updated. */
  updatedAt: Scalars['DateTime']['output']; /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']['output']>;
  /**
   * The alphanumeric code for the region.
   * For example, ON.
   */
  zoneCode?: Maybe<Scalars['String']['output']>;
};
/**
 * A person who acts on behalf of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) to make B2B purchases. Company contacts are associated with [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) accounts and can place orders on behalf of their company.
 *
 * Each contact can be assigned to one or more [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects with specific roles that determine their permissions and access to catalogs, pricing, and payment terms configured for those locations.
 */
type CompanyContact = Node & {
  __typename?: 'CompanyContact'; /** The company to which the contact belongs. */
  company: Company; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company contact was created at Shopify. */
  createdAt: Scalars['DateTime']['output']; /** The customer associated to this contact. */
  customer: Customer; /** The list of draft orders for the company contact. */
  draftOrders: DraftOrderConnection; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** Whether the contact is the main contact of the company. */
  isMainContact: Scalars['Boolean']['output']; /** The lifetime duration of the company contact, since its creation date on Shopify. Examples: `1 year`, `2 months`, `3 days`. */
  lifetimeDuration: Scalars['String']['output']; /** The company contact's locale (language). */
  locale?: Maybe<Scalars['String']['output']>; /** The list of orders for the company contact. */
  orders: OrderConnection; /** The list of roles assigned to this company contact. */
  roleAssignments: CompanyContactRoleAssignmentConnection; /** The company contact's job title. */
  title?: Maybe<Scalars['String']['output']>; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company contact was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};
/** An auto-generated type for paginating through multiple CompanyContacts. */
type CompanyContactConnection = {
  __typename?: 'CompanyContactConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<CompanyContactEdge>; /** A list of nodes that are contained in CompanyContactEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<CompanyContact>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one CompanyContact and a cursor during pagination. */
type CompanyContactEdge = {
  __typename?: 'CompanyContactEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of CompanyContactEdge. */
  node: CompanyContact;
};
/** The role for a [company contact](https://shopify.dev/api/admin-graphql/latest/objects/companycontact). */
type CompanyContactRole = Node & {
  __typename?: 'CompanyContactRole'; /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /**
   * The name of a role.
   * For example, `admin` or `buyer`.
   */
  name: Scalars['String']['output']; /** A note for the role. */
  note?: Maybe<Scalars['String']['output']>;
};
/** The CompanyContactRoleAssignment describes the company and location associated to a company contact's role. */
type CompanyContactRoleAssignment = Node & {
  __typename?: 'CompanyContactRoleAssignment'; /** The company this role assignment belongs to. */
  company: Company; /** The company contact for whom this role is assigned. */
  companyContact: CompanyContact; /** The company location to which the role is assigned. */
  companyLocation: CompanyLocation; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the assignment record was created. */
  createdAt: Scalars['DateTime']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The role that's assigned to the company contact. */
  role: CompanyContactRole; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the assignment record was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};
/** An auto-generated type for paginating through multiple CompanyContactRoleAssignments. */
type CompanyContactRoleAssignmentConnection = {
  __typename?: 'CompanyContactRoleAssignmentConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<CompanyContactRoleAssignmentEdge>; /** A list of nodes that are contained in CompanyContactRoleAssignmentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<CompanyContactRoleAssignment>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one CompanyContactRoleAssignment and a cursor during pagination. */
type CompanyContactRoleAssignmentEdge = {
  __typename?: 'CompanyContactRoleAssignmentEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of CompanyContactRoleAssignmentEdge. */
  node: CompanyContactRoleAssignment;
};
/** An auto-generated type for paginating through multiple CompanyContactRoles. */
type CompanyContactRoleConnection = {
  __typename?: 'CompanyContactRoleConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<CompanyContactRoleEdge>; /** A list of nodes that are contained in CompanyContactRoleEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<CompanyContactRole>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one CompanyContactRole and a cursor during pagination. */
type CompanyContactRoleEdge = {
  __typename?: 'CompanyContactRoleEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of CompanyContactRoleEdge. */
  node: CompanyContactRole;
};
/**
 * A location or branch of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) that's a customer of the shop. Company locations enable B2B customers to manage multiple branches with distinct billing and shipping addresses, tax settings, and checkout configurations.
 *
 * Each location can have its own [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects that determine which products are published and their pricing. The [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) determines checkout behavior including [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and whether orders require merchant review. B2B customers select which location they're purchasing for, which determines the applicable catalogs, pricing, [`TaxExemption`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption) values, and checkout settings for their [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects.
 */
type CompanyLocation = CommentEventSubject & HasEvents & HasMetafieldDefinitions & HasMetafields & HasStoreCreditAccounts & Navigable & Node & {
  __typename?: 'CompanyLocation'; /** The address used as billing address for the location. */
  billingAddress?: Maybe<CompanyAddress>; /** The configuration for the buyer's B2B checkout. */
  buyerExperienceConfiguration?: Maybe<BuyerExperienceConfiguration>; /** The list of catalogs associated with the company location. */
  catalogs: CatalogConnection; /** The number of catalogs associated with the company location. Limited to a maximum of 10000 by default. */
  catalogsCount?: Maybe<Count>; /** The company that the company location belongs to. */
  company: Company; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company location was created in Shopify. */
  createdAt: Scalars['DateTime']['output']; /** The location's currency based on the shipping address. If the shipping address is empty, then the value is the shop's primary market. */
  currency: CurrencyCode; /** A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID. */
  defaultCursor: Scalars['String']['output']; /** The list of draft orders for the company location. */
  draftOrders: DraftOrderConnection; /** The paginated list of events associated with the host subject. */
  events: EventConnection; /** A unique externally-supplied ID for the company location. */
  externalId?: Maybe<Scalars['String']['output']>; /** Whether the merchant added a timeline comment to the company location. */
  hasTimelineComment: Scalars['Boolean']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** Whether the company location is assigned a specific catalog. */
  inCatalog: Scalars['Boolean']['output']; /** The preferred locale of the company location. */
  locale?: Maybe<Scalars['String']['output']>;
  /**
   * The market that includes the location's shipping address. If the shipping address is empty, then the value is the shop's primary market.
   * @deprecated This `market` field will be removed in a future version of the API.
   */
  market: Market;
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   */
  metafield?: Maybe<Metafield>;
  /**
   * List of metafield definitions.
   * @deprecated This field will be removed in a future version. Use `QueryRoot.metafieldDefinitions` instead.
   */
  metafieldDefinitions: MetafieldDefinitionConnection;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   */
  metafields: MetafieldConnection; /** The name of the company location. */
  name: Scalars['String']['output']; /** A note about the company location. */
  note?: Maybe<Scalars['String']['output']>;
  /**
   * The total number of orders placed for the location.
   * @deprecated Use `ordersCount` instead.
   */
  orderCount: Scalars['Int']['output']; /** The list of orders for the company location. */
  orders: OrderConnection; /** The total number of orders placed for the location. */
  ordersCount?: Maybe<Count>; /** The phone number of the company location. */
  phone?: Maybe<Scalars['String']['output']>; /** The list of roles assigned to the company location. */
  roleAssignments: CompanyContactRoleAssignmentConnection; /** The address used as shipping address for the location. */
  shippingAddress?: Maybe<CompanyAddress>; /** The list of staff members assigned to the company location. */
  staffMemberAssignments: CompanyLocationStaffMemberAssignmentConnection;
  /**
   * Returns a list of store credit accounts that belong to the owner resource.
   * A store credit account owner can hold multiple accounts each with a different currency.
   */
  storeCreditAccounts: StoreCreditAccountConnection;
  /**
   * The list of tax exemptions applied to the location.
   * @deprecated Use `taxSettings` instead.
   */
  taxExemptions: Array<TaxExemption>;
  /**
   * The tax registration ID for the company location.
   * @deprecated Use `taxSettings` instead.
   */
  taxRegistrationId?: Maybe<Scalars['String']['output']>; /** The tax settings for the company location. */
  taxSettings: CompanyLocationTaxSettings; /** The total amount spent by the location. */
  totalSpent: MoneyV2; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company location was last modified. */
  updatedAt: Scalars['DateTime']['output'];
};
/** An auto-generated type for paginating through multiple CompanyLocations. */
type CompanyLocationConnection = {
  __typename?: 'CompanyLocationConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<CompanyLocationEdge>; /** A list of nodes that are contained in CompanyLocationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<CompanyLocation>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one CompanyLocation and a cursor during pagination. */
type CompanyLocationEdge = {
  __typename?: 'CompanyLocationEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of CompanyLocationEdge. */
  node: CompanyLocation;
};
/** A representation of store's staff member who is assigned to a [company location](https://shopify.dev/api/admin-graphql/latest/objects/CompanyLocation) of the shop. The staff member's actions will be limited to objects associated with the assigned company location. */
type CompanyLocationStaffMemberAssignment = Node & {
  __typename?: 'CompanyLocationStaffMemberAssignment'; /** The company location the staff member is assigned to. */
  companyLocation: CompanyLocation; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** Represents the data of a staff member who's assigned to a company location. */
  staffMember: StaffMember;
};
/** An auto-generated type for paginating through multiple CompanyLocationStaffMemberAssignments. */
type CompanyLocationStaffMemberAssignmentConnection = {
  __typename?: 'CompanyLocationStaffMemberAssignmentConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<CompanyLocationStaffMemberAssignmentEdge>; /** A list of nodes that are contained in CompanyLocationStaffMemberAssignmentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<CompanyLocationStaffMemberAssignment>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one CompanyLocationStaffMemberAssignment and a cursor during pagination. */
type CompanyLocationStaffMemberAssignmentEdge = {
  __typename?: 'CompanyLocationStaffMemberAssignmentEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of CompanyLocationStaffMemberAssignmentEdge. */
  node: CompanyLocationStaffMemberAssignment;
};
/** Represents the tax settings for a company location. */
type CompanyLocationTaxSettings = {
  __typename?: 'CompanyLocationTaxSettings'; /** Whether the location is exempt from taxes. */
  taxExempt: Scalars['Boolean']['output']; /** The list of tax exemptions applied to the location. */
  taxExemptions: Array<TaxExemption>; /** The tax registration ID for the company location. */
  taxRegistrationId?: Maybe<Scalars['String']['output']>;
};
/** A condition checking the company location a visitor is purchasing for. */
type CompanyLocationsCondition = {
  __typename?: 'CompanyLocationsCondition'; /** The application level for the condition. */
  applicationLevel?: Maybe<MarketConditionApplicationType>; /** The company locations that comprise the market. */
  companyLocations: CompanyLocationConnection;
};
/** A numeric count with precision information indicating whether the count is exact or an estimate. */
type Count = {
  __typename?: 'Count'; /** The count of elements. */
  count: Scalars['Int']['output']; /** The count's precision, or the exactness of the value. */
  precision: CountPrecision;
};
/** The precision of the value returned by a count field. */
declare enum CountPrecision {
  /** The count is at least the value. A limit was imposed and reached. */
  AtLeast = 'AT_LEAST',
  /** The count is exactly the value. A write may not be reflected instantaneously. */
  Exact = 'EXACT'
}
/** The list of all the countries from the combined shipping zones for the shop. */
type CountriesInShippingZones = {
  __typename?: 'CountriesInShippingZones'; /** The list of all the countries from all the combined shipping zones. */
  countryCodes: Array<CountryCode>; /** Whether 'Rest of World' has been defined in any of the shipping zones. */
  includeRestOfWorld: Scalars['Boolean']['output'];
};
/**
 * The code designating a country/region, which generally follows ISO 3166-1 alpha-2 guidelines.
 * If a territory doesn't have a country code value in the `CountryCode` enum, then it might be considered a subdivision
 * of another country. For example, the territories associated with Spain are represented by the country code `ES`,
 * and the territories associated with the United States of America are represented by the country code `US`.
 */
declare enum CountryCode {
  /** Ascension Island. */
  Ac = 'AC',
  /** Andorra. */
  Ad = 'AD',
  /** United Arab Emirates. */
  Ae = 'AE',
  /** Afghanistan. */
  Af = 'AF',
  /** Antigua & Barbuda. */
  Ag = 'AG',
  /** Anguilla. */
  Ai = 'AI',
  /** Albania. */
  Al = 'AL',
  /** Armenia. */
  Am = 'AM',
  /** Netherlands Antilles. */
  An = 'AN',
  /** Angola. */
  Ao = 'AO',
  /** Argentina. */
  Ar = 'AR',
  /** Austria. */
  At = 'AT',
  /** Australia. */
  Au = 'AU',
  /** Aruba. */
  Aw = 'AW',
  /** Åland Islands. */
  Ax = 'AX',
  /** Azerbaijan. */
  Az = 'AZ',
  /** Bosnia & Herzegovina. */
  Ba = 'BA',
  /** Barbados. */
  Bb = 'BB',
  /** Bangladesh. */
  Bd = 'BD',
  /** Belgium. */
  Be = 'BE',
  /** Burkina Faso. */
  Bf = 'BF',
  /** Bulgaria. */
  Bg = 'BG',
  /** Bahrain. */
  Bh = 'BH',
  /** Burundi. */
  Bi = 'BI',
  /** Benin. */
  Bj = 'BJ',
  /** St. Barthélemy. */
  Bl = 'BL',
  /** Bermuda. */
  Bm = 'BM',
  /** Brunei. */
  Bn = 'BN',
  /** Bolivia. */
  Bo = 'BO',
  /** Caribbean Netherlands. */
  Bq = 'BQ',
  /** Brazil. */
  Br = 'BR',
  /** Bahamas. */
  Bs = 'BS',
  /** Bhutan. */
  Bt = 'BT',
  /** Bouvet Island. */
  Bv = 'BV',
  /** Botswana. */
  Bw = 'BW',
  /** Belarus. */
  By = 'BY',
  /** Belize. */
  Bz = 'BZ',
  /** Canada. */
  Ca = 'CA',
  /** Cocos (Keeling) Islands. */
  Cc = 'CC',
  /** Congo - Kinshasa. */
  Cd = 'CD',
  /** Central African Republic. */
  Cf = 'CF',
  /** Congo - Brazzaville. */
  Cg = 'CG',
  /** Switzerland. */
  Ch = 'CH',
  /** Côte d’Ivoire. */
  Ci = 'CI',
  /** Cook Islands. */
  Ck = 'CK',
  /** Chile. */
  Cl = 'CL',
  /** Cameroon. */
  Cm = 'CM',
  /** China. */
  Cn = 'CN',
  /** Colombia. */
  Co = 'CO',
  /** Costa Rica. */
  Cr = 'CR',
  /** Cuba. */
  Cu = 'CU',
  /** Cape Verde. */
  Cv = 'CV',
  /** Curaçao. */
  Cw = 'CW',
  /** Christmas Island. */
  Cx = 'CX',
  /** Cyprus. */
  Cy = 'CY',
  /** Czechia. */
  Cz = 'CZ',
  /** Germany. */
  De = 'DE',
  /** Djibouti. */
  Dj = 'DJ',
  /** Denmark. */
  Dk = 'DK',
  /** Dominica. */
  Dm = 'DM',
  /** Dominican Republic. */
  Do = 'DO',
  /** Algeria. */
  Dz = 'DZ',
  /** Ecuador. */
  Ec = 'EC',
  /** Estonia. */
  Ee = 'EE',
  /** Egypt. */
  Eg = 'EG',
  /** Western Sahara. */
  Eh = 'EH',
  /** Eritrea. */
  Er = 'ER',
  /** Spain. */
  Es = 'ES',
  /** Ethiopia. */
  Et = 'ET',
  /** Finland. */
  Fi = 'FI',
  /** Fiji. */
  Fj = 'FJ',
  /** Falkland Islands. */
  Fk = 'FK',
  /** Faroe Islands. */
  Fo = 'FO',
  /** France. */
  Fr = 'FR',
  /** Gabon. */
  Ga = 'GA',
  /** United Kingdom. */
  Gb = 'GB',
  /** Grenada. */
  Gd = 'GD',
  /** Georgia. */
  Ge = 'GE',
  /** French Guiana. */
  Gf = 'GF',
  /** Guernsey. */
  Gg = 'GG',
  /** Ghana. */
  Gh = 'GH',
  /** Gibraltar. */
  Gi = 'GI',
  /** Greenland. */
  Gl = 'GL',
  /** Gambia. */
  Gm = 'GM',
  /** Guinea. */
  Gn = 'GN',
  /** Guadeloupe. */
  Gp = 'GP',
  /** Equatorial Guinea. */
  Gq = 'GQ',
  /** Greece. */
  Gr = 'GR',
  /** South Georgia & South Sandwich Islands. */
  Gs = 'GS',
  /** Guatemala. */
  Gt = 'GT',
  /** Guinea-Bissau. */
  Gw = 'GW',
  /** Guyana. */
  Gy = 'GY',
  /** Hong Kong SAR. */
  Hk = 'HK',
  /** Heard & McDonald Islands. */
  Hm = 'HM',
  /** Honduras. */
  Hn = 'HN',
  /** Croatia. */
  Hr = 'HR',
  /** Haiti. */
  Ht = 'HT',
  /** Hungary. */
  Hu = 'HU',
  /** Indonesia. */
  Id = 'ID',
  /** Ireland. */
  Ie = 'IE',
  /** Israel. */
  Il = 'IL',
  /** Isle of Man. */
  Im = 'IM',
  /** India. */
  In = 'IN',
  /** British Indian Ocean Territory. */
  Io = 'IO',
  /** Iraq. */
  Iq = 'IQ',
  /** Iran. */
  Ir = 'IR',
  /** Iceland. */
  Is = 'IS',
  /** Italy. */
  It = 'IT',
  /** Jersey. */
  Je = 'JE',
  /** Jamaica. */
  Jm = 'JM',
  /** Jordan. */
  Jo = 'JO',
  /** Japan. */
  Jp = 'JP',
  /** Kenya. */
  Ke = 'KE',
  /** Kyrgyzstan. */
  Kg = 'KG',
  /** Cambodia. */
  Kh = 'KH',
  /** Kiribati. */
  Ki = 'KI',
  /** Comoros. */
  Km = 'KM',
  /** St. Kitts & Nevis. */
  Kn = 'KN',
  /** North Korea. */
  Kp = 'KP',
  /** South Korea. */
  Kr = 'KR',
  /** Kuwait. */
  Kw = 'KW',
  /** Cayman Islands. */
  Ky = 'KY',
  /** Kazakhstan. */
  Kz = 'KZ',
  /** Laos. */
  La = 'LA',
  /** Lebanon. */
  Lb = 'LB',
  /** St. Lucia. */
  Lc = 'LC',
  /** Liechtenstein. */
  Li = 'LI',
  /** Sri Lanka. */
  Lk = 'LK',
  /** Liberia. */
  Lr = 'LR',
  /** Lesotho. */
  Ls = 'LS',
  /** Lithuania. */
  Lt = 'LT',
  /** Luxembourg. */
  Lu = 'LU',
  /** Latvia. */
  Lv = 'LV',
  /** Libya. */
  Ly = 'LY',
  /** Morocco. */
  Ma = 'MA',
  /** Monaco. */
  Mc = 'MC',
  /** Moldova. */
  Md = 'MD',
  /** Montenegro. */
  Me = 'ME',
  /** St. Martin. */
  Mf = 'MF',
  /** Madagascar. */
  Mg = 'MG',
  /** North Macedonia. */
  Mk = 'MK',
  /** Mali. */
  Ml = 'ML',
  /** Myanmar (Burma). */
  Mm = 'MM',
  /** Mongolia. */
  Mn = 'MN',
  /** Macao SAR. */
  Mo = 'MO',
  /** Martinique. */
  Mq = 'MQ',
  /** Mauritania. */
  Mr = 'MR',
  /** Montserrat. */
  Ms = 'MS',
  /** Malta. */
  Mt = 'MT',
  /** Mauritius. */
  Mu = 'MU',
  /** Maldives. */
  Mv = 'MV',
  /** Malawi. */
  Mw = 'MW',
  /** Mexico. */
  Mx = 'MX',
  /** Malaysia. */
  My = 'MY',
  /** Mozambique. */
  Mz = 'MZ',
  /** Namibia. */
  Na = 'NA',
  /** New Caledonia. */
  Nc = 'NC',
  /** Niger. */
  Ne = 'NE',
  /** Norfolk Island. */
  Nf = 'NF',
  /** Nigeria. */
  Ng = 'NG',
  /** Nicaragua. */
  Ni = 'NI',
  /** Netherlands. */
  Nl = 'NL',
  /** Norway. */
  No = 'NO',
  /** Nepal. */
  Np = 'NP',
  /** Nauru. */
  Nr = 'NR',
  /** Niue. */
  Nu = 'NU',
  /** New Zealand. */
  Nz = 'NZ',
  /** Oman. */
  Om = 'OM',
  /** Panama. */
  Pa = 'PA',
  /** Peru. */
  Pe = 'PE',
  /** French Polynesia. */
  Pf = 'PF',
  /** Papua New Guinea. */
  Pg = 'PG',
  /** Philippines. */
  Ph = 'PH',
  /** Pakistan. */
  Pk = 'PK',
  /** Poland. */
  Pl = 'PL',
  /** St. Pierre & Miquelon. */
  Pm = 'PM',
  /** Pitcairn Islands. */
  Pn = 'PN',
  /** Palestinian Territories. */
  Ps = 'PS',
  /** Portugal. */
  Pt = 'PT',
  /** Paraguay. */
  Py = 'PY',
  /** Qatar. */
  Qa = 'QA',
  /** Réunion. */
  Re = 'RE',
  /** Romania. */
  Ro = 'RO',
  /** Serbia. */
  Rs = 'RS',
  /** Russia. */
  Ru = 'RU',
  /** Rwanda. */
  Rw = 'RW',
  /** Saudi Arabia. */
  Sa = 'SA',
  /** Solomon Islands. */
  Sb = 'SB',
  /** Seychelles. */
  Sc = 'SC',
  /** Sudan. */
  Sd = 'SD',
  /** Sweden. */
  Se = 'SE',
  /** Singapore. */
  Sg = 'SG',
  /** St. Helena. */
  Sh = 'SH',
  /** Slovenia. */
  Si = 'SI',
  /** Svalbard & Jan Mayen. */
  Sj = 'SJ',
  /** Slovakia. */
  Sk = 'SK',
  /** Sierra Leone. */
  Sl = 'SL',
  /** San Marino. */
  Sm = 'SM',
  /** Senegal. */
  Sn = 'SN',
  /** Somalia. */
  So = 'SO',
  /** Suriname. */
  Sr = 'SR',
  /** South Sudan. */
  Ss = 'SS',
  /** São Tomé & Príncipe. */
  St = 'ST',
  /** El Salvador. */
  Sv = 'SV',
  /** Sint Maarten. */
  Sx = 'SX',
  /** Syria. */
  Sy = 'SY',
  /** Eswatini. */
  Sz = 'SZ',
  /** Tristan da Cunha. */
  Ta = 'TA',
  /** Turks & Caicos Islands. */
  Tc = 'TC',
  /** Chad. */
  Td = 'TD',
  /** French Southern Territories. */
  Tf = 'TF',
  /** Togo. */
  Tg = 'TG',
  /** Thailand. */
  Th = 'TH',
  /** Tajikistan. */
  Tj = 'TJ',
  /** Tokelau. */
  Tk = 'TK',
  /** Timor-Leste. */
  Tl = 'TL',
  /** Turkmenistan. */
  Tm = 'TM',
  /** Tunisia. */
  Tn = 'TN',
  /** Tonga. */
  To = 'TO',
  /** Türkiye. */
  Tr = 'TR',
  /** Trinidad & Tobago. */
  Tt = 'TT',
  /** Tuvalu. */
  Tv = 'TV',
  /** Taiwan. */
  Tw = 'TW',
  /** Tanzania. */
  Tz = 'TZ',
  /** Ukraine. */
  Ua = 'UA',
  /** Uganda. */
  Ug = 'UG',
  /** U.S. Outlying Islands. */
  Um = 'UM',
  /** United States. */
  Us = 'US',
  /** Uruguay. */
  Uy = 'UY',
  /** Uzbekistan. */
  Uz = 'UZ',
  /** Vatican City. */
  Va = 'VA',
  /** St. Vincent & Grenadines. */
  Vc = 'VC',
  /** Venezuela. */
  Ve = 'VE',
  /** British Virgin Islands. */
  Vg = 'VG',
  /** Vietnam. */
  Vn = 'VN',
  /** Vanuatu. */
  Vu = 'VU',
  /** Wallis & Futuna. */
  Wf = 'WF',
  /** Samoa. */
  Ws = 'WS',
  /** Kosovo. */
  Xk = 'XK',
  /** Yemen. */
  Ye = 'YE',
  /** Mayotte. */
  Yt = 'YT',
  /** South Africa. */
  Za = 'ZA',
  /** Zambia. */
  Zm = 'ZM',
  /** Zimbabwe. */
  Zw = 'ZW',
  /** Unknown Region. */
  Zz = 'ZZ'
}
/** The country-specific harmonized system code and ISO country code for an inventory item. */
type CountryHarmonizedSystemCode = {
  __typename?: 'CountryHarmonizedSystemCode'; /** The ISO 3166-1 alpha-2 country code for the country that issued the specified harmonized system code. */
  countryCode: CountryCode; /** The country-specific harmonized system code. These are usually longer than 6 digits. */
  harmonizedSystemCode: Scalars['String']['output'];
};
/** An auto-generated type for paginating through multiple CountryHarmonizedSystemCodes. */
type CountryHarmonizedSystemCodeConnection = {
  __typename?: 'CountryHarmonizedSystemCodeConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<CountryHarmonizedSystemCodeEdge>; /** A list of nodes that are contained in CountryHarmonizedSystemCodeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<CountryHarmonizedSystemCode>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one CountryHarmonizedSystemCode and a cursor during pagination. */
type CountryHarmonizedSystemCodeEdge = {
  __typename?: 'CountryHarmonizedSystemCodeEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of CountryHarmonizedSystemCodeEdge. */
  node: CountryHarmonizedSystemCode;
};
/**
 * The currency codes that represent the world currencies throughout the Admin API. Currency codes include
 * [standard ISO 4217 codes](https://en.wikipedia.org/wiki/ISO_4217), legacy codes, non-standard codes,
 * digital currency codes.
 */
declare enum CurrencyCode {
  /** United Arab Emirates Dirham (AED). */
  Aed = 'AED',
  /** Afghan Afghani (AFN). */
  Afn = 'AFN',
  /** Albanian Lek (ALL). */
  All = 'ALL',
  /** Armenian Dram (AMD). */
  Amd = 'AMD',
  /** Netherlands Antillean Guilder. */
  Ang = 'ANG',
  /** Angolan Kwanza (AOA). */
  Aoa = 'AOA',
  /** Argentine Pesos (ARS). */
  Ars = 'ARS',
  /** Australian Dollars (AUD). */
  Aud = 'AUD',
  /** Aruban Florin (AWG). */
  Awg = 'AWG',
  /** Azerbaijani Manat (AZN). */
  Azn = 'AZN',
  /** Bosnia and Herzegovina Convertible Mark (BAM). */
  Bam = 'BAM',
  /** Barbadian Dollar (BBD). */
  Bbd = 'BBD',
  /** Bangladesh Taka (BDT). */
  Bdt = 'BDT',
  /** Bulgarian Lev (BGN). */
  Bgn = 'BGN',
  /** Bahraini Dinar (BHD). */
  Bhd = 'BHD',
  /** Burundian Franc (BIF). */
  Bif = 'BIF',
  /** Bermudian Dollar (BMD). */
  Bmd = 'BMD',
  /** Brunei Dollar (BND). */
  Bnd = 'BND',
  /** Bolivian Boliviano (BOB). */
  Bob = 'BOB',
  /** Brazilian Real (BRL). */
  Brl = 'BRL',
  /** Bahamian Dollar (BSD). */
  Bsd = 'BSD',
  /** Bhutanese Ngultrum (BTN). */
  Btn = 'BTN',
  /** Botswana Pula (BWP). */
  Bwp = 'BWP',
  /** Belarusian Ruble (BYN). */
  Byn = 'BYN',
  /**
   * Belarusian Ruble (BYR).
   * @deprecated Use `BYN` instead.
   */
  Byr = 'BYR',
  /** Belize Dollar (BZD). */
  Bzd = 'BZD',
  /** Canadian Dollars (CAD). */
  Cad = 'CAD',
  /** Congolese franc (CDF). */
  Cdf = 'CDF',
  /** Swiss Francs (CHF). */
  Chf = 'CHF',
  /** Chilean Peso (CLP). */
  Clp = 'CLP',
  /** Chinese Yuan Renminbi (CNY). */
  Cny = 'CNY',
  /** Colombian Peso (COP). */
  Cop = 'COP',
  /** Costa Rican Colones (CRC). */
  Crc = 'CRC',
  /** Cape Verdean escudo (CVE). */
  Cve = 'CVE',
  /** Czech Koruny (CZK). */
  Czk = 'CZK',
  /** Djiboutian Franc (DJF). */
  Djf = 'DJF',
  /** Danish Kroner (DKK). */
  Dkk = 'DKK',
  /** Dominican Peso (DOP). */
  Dop = 'DOP',
  /** Algerian Dinar (DZD). */
  Dzd = 'DZD',
  /** Egyptian Pound (EGP). */
  Egp = 'EGP',
  /** Eritrean Nakfa (ERN). */
  Ern = 'ERN',
  /** Ethiopian Birr (ETB). */
  Etb = 'ETB',
  /** Euro (EUR). */
  Eur = 'EUR',
  /** Fijian Dollars (FJD). */
  Fjd = 'FJD',
  /** Falkland Islands Pounds (FKP). */
  Fkp = 'FKP',
  /** United Kingdom Pounds (GBP). */
  Gbp = 'GBP',
  /** Georgian Lari (GEL). */
  Gel = 'GEL',
  /** Ghanaian Cedi (GHS). */
  Ghs = 'GHS',
  /** Gibraltar Pounds (GIP). */
  Gip = 'GIP',
  /** Gambian Dalasi (GMD). */
  Gmd = 'GMD',
  /** Guinean Franc (GNF). */
  Gnf = 'GNF',
  /** Guatemalan Quetzal (GTQ). */
  Gtq = 'GTQ',
  /** Guyanese Dollar (GYD). */
  Gyd = 'GYD',
  /** Hong Kong Dollars (HKD). */
  Hkd = 'HKD',
  /** Honduran Lempira (HNL). */
  Hnl = 'HNL',
  /** Croatian Kuna (HRK). */
  Hrk = 'HRK',
  /** Haitian Gourde (HTG). */
  Htg = 'HTG',
  /** Hungarian Forint (HUF). */
  Huf = 'HUF',
  /** Indonesian Rupiah (IDR). */
  Idr = 'IDR',
  /** Israeli New Shekel (NIS). */
  Ils = 'ILS',
  /** Indian Rupees (INR). */
  Inr = 'INR',
  /** Iraqi Dinar (IQD). */
  Iqd = 'IQD',
  /** Iranian Rial (IRR). */
  Irr = 'IRR',
  /** Icelandic Kronur (ISK). */
  Isk = 'ISK',
  /** Jersey Pound. */
  Jep = 'JEP',
  /** Jamaican Dollars (JMD). */
  Jmd = 'JMD',
  /** Jordanian Dinar (JOD). */
  Jod = 'JOD',
  /** Japanese Yen (JPY). */
  Jpy = 'JPY',
  /** Kenyan Shilling (KES). */
  Kes = 'KES',
  /** Kyrgyzstani Som (KGS). */
  Kgs = 'KGS',
  /** Cambodian Riel. */
  Khr = 'KHR',
  /** Kiribati Dollar (KID). */
  Kid = 'KID',
  /** Comorian Franc (KMF). */
  Kmf = 'KMF',
  /** South Korean Won (KRW). */
  Krw = 'KRW',
  /** Kuwaiti Dinar (KWD). */
  Kwd = 'KWD',
  /** Cayman Dollars (KYD). */
  Kyd = 'KYD',
  /** Kazakhstani Tenge (KZT). */
  Kzt = 'KZT',
  /** Laotian Kip (LAK). */
  Lak = 'LAK',
  /** Lebanese Pounds (LBP). */
  Lbp = 'LBP',
  /** Sri Lankan Rupees (LKR). */
  Lkr = 'LKR',
  /** Liberian Dollar (LRD). */
  Lrd = 'LRD',
  /** Lesotho Loti (LSL). */
  Lsl = 'LSL',
  /** Lithuanian Litai (LTL). */
  Ltl = 'LTL',
  /** Latvian Lati (LVL). */
  Lvl = 'LVL',
  /** Libyan Dinar (LYD). */
  Lyd = 'LYD',
  /** Moroccan Dirham. */
  Mad = 'MAD',
  /** Moldovan Leu (MDL). */
  Mdl = 'MDL',
  /** Malagasy Ariary (MGA). */
  Mga = 'MGA',
  /** Macedonia Denar (MKD). */
  Mkd = 'MKD',
  /** Burmese Kyat (MMK). */
  Mmk = 'MMK',
  /** Mongolian Tugrik. */
  Mnt = 'MNT',
  /** Macanese Pataca (MOP). */
  Mop = 'MOP',
  /** Mauritanian Ouguiya (MRU). */
  Mru = 'MRU',
  /** Mauritian Rupee (MUR). */
  Mur = 'MUR',
  /** Maldivian Rufiyaa (MVR). */
  Mvr = 'MVR',
  /** Malawian Kwacha (MWK). */
  Mwk = 'MWK',
  /** Mexican Pesos (MXN). */
  Mxn = 'MXN',
  /** Malaysian Ringgits (MYR). */
  Myr = 'MYR',
  /** Mozambican Metical. */
  Mzn = 'MZN',
  /** Namibian Dollar. */
  Nad = 'NAD',
  /** Nigerian Naira (NGN). */
  Ngn = 'NGN',
  /** Nicaraguan Córdoba (NIO). */
  Nio = 'NIO',
  /** Norwegian Kroner (NOK). */
  Nok = 'NOK',
  /** Nepalese Rupee (NPR). */
  Npr = 'NPR',
  /** New Zealand Dollars (NZD). */
  Nzd = 'NZD',
  /** Omani Rial (OMR). */
  Omr = 'OMR',
  /** Panamian Balboa (PAB). */
  Pab = 'PAB',
  /** Peruvian Nuevo Sol (PEN). */
  Pen = 'PEN',
  /** Papua New Guinean Kina (PGK). */
  Pgk = 'PGK',
  /** Philippine Peso (PHP). */
  Php = 'PHP',
  /** Pakistani Rupee (PKR). */
  Pkr = 'PKR',
  /** Polish Zlotych (PLN). */
  Pln = 'PLN',
  /** Paraguayan Guarani (PYG). */
  Pyg = 'PYG',
  /** Qatari Rial (QAR). */
  Qar = 'QAR',
  /** Romanian Lei (RON). */
  Ron = 'RON',
  /** Serbian dinar (RSD). */
  Rsd = 'RSD',
  /** Russian Rubles (RUB). */
  Rub = 'RUB',
  /** Rwandan Franc (RWF). */
  Rwf = 'RWF',
  /** Saudi Riyal (SAR). */
  Sar = 'SAR',
  /** Solomon Islands Dollar (SBD). */
  Sbd = 'SBD',
  /** Seychellois Rupee (SCR). */
  Scr = 'SCR',
  /** Sudanese Pound (SDG). */
  Sdg = 'SDG',
  /** Swedish Kronor (SEK). */
  Sek = 'SEK',
  /** Singapore Dollars (SGD). */
  Sgd = 'SGD',
  /** Saint Helena Pounds (SHP). */
  Shp = 'SHP',
  /** Sierra Leonean Leone (SLL). */
  Sll = 'SLL',
  /** Somali Shilling (SOS). */
  Sos = 'SOS',
  /** Surinamese Dollar (SRD). */
  Srd = 'SRD',
  /** South Sudanese Pound (SSP). */
  Ssp = 'SSP',
  /**
   * Sao Tome And Principe Dobra (STD).
   * @deprecated Use `STN` instead.
   */
  Std = 'STD',
  /** Sao Tome And Principe Dobra (STN). */
  Stn = 'STN',
  /** Syrian Pound (SYP). */
  Syp = 'SYP',
  /** Swazi Lilangeni (SZL). */
  Szl = 'SZL',
  /** Thai baht (THB). */
  Thb = 'THB',
  /** Tajikistani Somoni (TJS). */
  Tjs = 'TJS',
  /** Turkmenistani Manat (TMT). */
  Tmt = 'TMT',
  /** Tunisian Dinar (TND). */
  Tnd = 'TND',
  /** Tongan Pa'anga (TOP). */
  Top = 'TOP',
  /** Turkish Lira (TRY). */
  Try = 'TRY',
  /** Trinidad and Tobago Dollars (TTD). */
  Ttd = 'TTD',
  /** Taiwan Dollars (TWD). */
  Twd = 'TWD',
  /** Tanzanian Shilling (TZS). */
  Tzs = 'TZS',
  /** Ukrainian Hryvnia (UAH). */
  Uah = 'UAH',
  /** Ugandan Shilling (UGX). */
  Ugx = 'UGX',
  /** United States Dollars (USD). */
  Usd = 'USD',
  /** United States Dollars Coin (USDC). */
  Usdc = 'USDC',
  /** Uruguayan Pesos (UYU). */
  Uyu = 'UYU',
  /** Uzbekistan som (UZS). */
  Uzs = 'UZS',
  /** Venezuelan Bolivares (VED). */
  Ved = 'VED',
  /**
   * Venezuelan Bolivares (VEF).
   * @deprecated Use `VES` instead.
   */
  Vef = 'VEF',
  /** Venezuelan Bolivares Soberanos (VES). */
  Ves = 'VES',
  /** Vietnamese đồng (VND). */
  Vnd = 'VND',
  /** Vanuatu Vatu (VUV). */
  Vuv = 'VUV',
  /** Samoan Tala (WST). */
  Wst = 'WST',
  /** Central African CFA Franc (XAF). */
  Xaf = 'XAF',
  /** East Caribbean Dollar (XCD). */
  Xcd = 'XCD',
  /** West African CFA franc (XOF). */
  Xof = 'XOF',
  /** CFP Franc (XPF). */
  Xpf = 'XPF',
  /** Unrecognized currency. */
  Xxx = 'XXX',
  /** Yemeni Rial (YER). */
  Yer = 'YER',
  /** South African Rand (ZAR). */
  Zar = 'ZAR',
  /** Zambian Kwacha (ZMW). */
  Zmw = 'ZMW'
}
/** Represents a currency exchange adjustment applied to an order transaction. */
type CurrencyExchangeAdjustment = Node & {
  __typename?: 'CurrencyExchangeAdjustment'; /** The adjustment amount in both shop and presentment currencies. */
  adjustment: MoneyV2; /** The final amount in both shop and presentment currencies after the adjustment. */
  finalAmountSet: MoneyV2; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The original amount in both shop and presentment currencies before the adjustment. */
  originalAmountSet: MoneyV2;
};
/** Currency formats configured for the merchant. These formats are available to use within Liquid. */
type CurrencyFormats = {
  __typename?: 'CurrencyFormats'; /** Money without currency in HTML. */
  moneyFormat: Scalars['FormattedString']['output']; /** Money without currency in emails. */
  moneyInEmailsFormat: Scalars['String']['output']; /** Money with currency in HTML. */
  moneyWithCurrencyFormat: Scalars['FormattedString']['output']; /** Money with currency in emails. */
  moneyWithCurrencyInEmailsFormat: Scalars['String']['output'];
};
/** A setting for a presentment currency. */
type CurrencySetting = {
  __typename?: 'CurrencySetting'; /** The currency's ISO code. */
  currencyCode: CurrencyCode; /** The full name of the currency. */
  currencyName: Scalars['String']['output']; /** Whether the currency is enabled or not. An enabled currency setting is visible to buyers and allows orders to be generated with that currency as presentment. */
  enabled: Scalars['Boolean']['output']; /** The manual rate, if enabled, that applies to this currency when converting from shop currency. This rate is specific to the associated market's currency setting. */
  manualRate?: Maybe<Scalars['Decimal']['output']>; /** The date and time when the active exchange rate for the currency was last modified. It can be the automatic rate's creation date, or the manual rate's last updated at date if active. */
  rateUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
};
/** An auto-generated type for paginating through multiple CurrencySettings. */
type CurrencySettingConnection = {
  __typename?: 'CurrencySettingConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<CurrencySettingEdge>; /** A list of nodes that are contained in CurrencySettingEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<CurrencySetting>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one CurrencySetting and a cursor during pagination. */
type CurrencySettingEdge = {
  __typename?: 'CurrencySettingEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of CurrencySettingEdge. */
  node: CurrencySetting;
};
/**
 * Information about a customer of the shop, such as the customer's contact details, purchase history, and marketing preferences.
 *
 * Tracks the customer's total spending through the [`amountSpent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-amountSpent) field and provides access to associated data such as payment methods and subscription contracts.
 *
 * > Caution:
 * > Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 */
type Customer = CommentEventSubject & HasEvents & HasMetafieldDefinitions & HasMetafields & HasStoreCreditAccounts & LegacyInteroperability & Node & {
  __typename?: 'Customer';
  /**
   * A list of addresses associated with the customer. Limited to 250 addresses. Use `addressesV2` for paginated access to all addresses.
   * @deprecated Limited to 250 addresses. Use `addressesV2` for paginated access to all addresses.
   */
  addresses: Array<MailingAddress>; /** The addresses associated with the customer. */
  addressesV2: MailingAddressConnection; /** The total amount that the customer has spent on orders in their lifetime. */
  amountSpent: MoneyV2;
  /**
   * Whether the merchant can delete the customer from their store.
   *
   * A customer can be deleted from a store only if they haven't yet made an order. After a customer makes an
   * order, they can't be deleted from a store.
   */
  canDelete: Scalars['Boolean']['output']; /** A list of the customer's company contact profiles. */
  companyContactProfiles: Array<CompanyContact>; /** The date and time when the customer was added to the store. */
  createdAt: Scalars['DateTime']['output']; /** Whether the customer has opted out of having their data sold. */
  dataSaleOptOut: Scalars['Boolean']['output']; /** The default address associated with the customer. */
  defaultAddress?: Maybe<MailingAddress>; /** The customer's default email address. */
  defaultEmailAddress?: Maybe<CustomerEmailAddress>; /** The customer's default phone number. */
  defaultPhoneNumber?: Maybe<CustomerPhoneNumber>;
  /**
   * The full name of the customer, based on the values for first_name and last_name. If the first_name and
   * last_name are not available, then this falls back to the customer's email address, and if that is not available, the customer's phone number.
   */
  displayName: Scalars['String']['output'];
  /**
   * The customer's email address.
   * @deprecated Use `defaultEmailAddress.emailAddress` instead.
   */
  email?: Maybe<Scalars['String']['output']>;
  /**
   * The current email marketing state for the customer.
   * If the customer doesn't have an email address, then this property is `null`.
   * @deprecated Use `defaultEmailAddress.marketingState`, `defaultEmailAddress.marketingOptInLevel`, `defaultEmailAddress.marketingUpdatedAt`, and `defaultEmailAddress.sourceLocation` instead.
   */
  emailMarketingConsent?: Maybe<CustomerEmailMarketingConsentState>; /** A list of events associated with the customer. */
  events: EventConnection; /** The customer's first name. */
  firstName?: Maybe<Scalars['String']['output']>;
  /**
   * Whether the merchant has added timeline comments about the customer on the customer's page.
   * @deprecated To query for comments on the timeline, use the `events` connection and a 'query' argument containing `verb:comment`, or look for a 'CommentEvent' in the `__typename` of `events`.
   */
  hasTimelineComment: Scalars['Boolean']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The image associated with the customer. */
  image: Image; /** The customer's last name. */
  lastName?: Maybe<Scalars['String']['output']>; /** The customer's last order. */
  lastOrder?: Maybe<Order>; /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64']['output'];
  /**
   * The amount of time since the customer was first added to the store.
   *
   * Example: 'about 12 years'.
   */
  lifetimeDuration: Scalars['String']['output']; /** The customer's locale. */
  locale: Scalars['String']['output'];
  /**
   * The market that includes the customer’s default address.
   * @deprecated This `market` field will be removed in a future version of the API.
   */
  market?: Maybe<Market>; /** Whether the customer can be merged with another customer. */
  mergeable: CustomerMergeable;
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   */
  metafield?: Maybe<Metafield>;
  /**
   * List of metafield definitions.
   * @deprecated This field will be removed in a future version. Use `QueryRoot.metafieldDefinitions` instead.
   */
  metafieldDefinitions: MetafieldDefinitionConnection;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   */
  metafields: MetafieldConnection; /** A unique identifier for the customer that's used with Multipass login. */
  multipassIdentifier?: Maybe<Scalars['String']['output']>; /** A note about the customer. */
  note?: Maybe<Scalars['String']['output']>; /** The number of orders that the customer has made at the store in their lifetime. */
  numberOfOrders: Scalars['UnsignedInt64']['output']; /** A list of the customer's orders. */
  orders: OrderConnection; /** A list of the customer's payment methods. */
  paymentMethods: CustomerPaymentMethodConnection;
  /**
   * The customer's phone number.
   * @deprecated Use `defaultPhoneNumber.phoneNumber` instead.
   */
  phone?: Maybe<Scalars['String']['output']>; /** Possible subscriber states of a customer defined by their subscription contracts. */
  productSubscriberStatus: CustomerProductSubscriberStatus;
  /**
   * The current SMS marketing state for the customer's phone number.
   *
   * If the customer does not have a phone number, then this property is `null`.
   * @deprecated Use `defaultPhoneNumber.marketingState`, `defaultPhoneNumber.marketingOptInLevel`, `defaultPhoneNumber.marketingUpdatedAt`, `defaultPhoneNumber.marketingCollectedFrom`, and `defaultPhoneNumber.sourceLocation` instead.
   */
  smsMarketingConsent?: Maybe<CustomerSmsMarketingConsentState>;
  /**
   * The state of the customer's account with the shop.
   *
   * Please note that this only meaningful when Classic Customer Accounts is active.
   */
  state: CustomerState; /** The statistics for a given customer. */
  statistics: CustomerStatistics;
  /**
   * Returns a list of store credit accounts that belong to the owner resource.
   * A store credit account owner can hold multiple accounts each with a different currency.
   */
  storeCreditAccounts: StoreCreditAccountConnection; /** A list of the customer's subscription contracts. */
  subscriptionContracts: SubscriptionContractConnection; /** A comma separated list of tags that have been added to the customer. */
  tags: Array<Scalars['String']['output']>; /** Whether the customer is exempt from being charged taxes on their orders. */
  taxExempt: Scalars['Boolean']['output']; /** The list of tax exemptions applied to the customer. */
  taxExemptions: Array<TaxExemption>;
  /**
   * The URL to unsubscribe the customer from the mailing list.
   * @deprecated Use `defaultEmailAddress.marketingUnsubscribeUrl` instead.
   */
  unsubscribeUrl: Scalars['URL']['output']; /** The date and time when the customer was last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /**
   * Whether the email address is formatted correctly.
   *
   * Returns `true` when the email is formatted correctly and
   * belongs to an existing domain. This doesn't guarantee that
   * the email address actually exists.
   * @deprecated Use `defaultEmailAddress.validFormat` instead.
   */
  validEmailAddress: Scalars['Boolean']['output']; /** Whether the customer has verified their email address. Defaults to `true` if the customer is created through the Shopify admin or API. */
  verifiedEmail: Scalars['Boolean']['output'];
};
/** Information about the shop's customer account-related settings. Includes the [customer account version](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerAccountsV2#field-CustomerAccountsV2.fields.customerAccountsVersion) which indicates whether the merchant is using new customer accounts or legacy customer accounts, along with other account configuration such as login requirements. */
type CustomerAccountsV2 = {
  __typename?: 'CustomerAccountsV2'; /** Indicates which version of customer accounts the merchant is using in online store and checkout. */
  customerAccountsVersion: CustomerAccountsVersion; /** Login links are shown in online store and checkout. */
  loginLinksVisibleOnStorefrontAndCheckout: Scalars['Boolean']['output']; /** Customers are required to log in to their account before checkout. */
  loginRequiredAtCheckout: Scalars['Boolean']['output']; /** The root url for the customer accounts pages. */
  url?: Maybe<Scalars['URL']['output']>;
};
/** The login redirection target for customer accounts. */
declare enum CustomerAccountsVersion {
  /** The customer is redirected to the classic customer accounts login page. */
  Classic = 'CLASSIC',
  /** The customer is redirected to the new customer accounts login page. */
  NewCustomerAccounts = 'NEW_CUSTOMER_ACCOUNTS'
}
/** An auto-generated type for paginating through multiple Customers. */
type CustomerConnection = {
  __typename?: 'CustomerConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<CustomerEdge>; /** A list of nodes that are contained in CustomerEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<Customer>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** The source that collected the customer's consent to receive marketing materials. */
declare enum CustomerConsentCollectedFrom {
  /** The customer consent was collected outside of Shopify. */
  Other = 'OTHER',
  /** The customer consent was collected by Shopify. */
  Shopify = 'SHOPIFY'
}
/** Represents a card instrument for customer payment method. */
type CustomerCreditCard = {
  __typename?: 'CustomerCreditCard'; /** The billing address of the card. */
  billingAddress?: Maybe<CustomerCreditCardBillingAddress>; /** The brand of the card. */
  brand: Scalars['String']['output']; /** Whether the card is about to expire. */
  expiresSoon: Scalars['Boolean']['output']; /** The expiry month of the card. */
  expiryMonth: Scalars['Int']['output']; /** The expiry year of the card. */
  expiryYear: Scalars['Int']['output']; /** The card's BIN number. */
  firstDigits?: Maybe<Scalars['String']['output']>; /** The payment method can be revoked if there are no active subscription contracts. */
  isRevocable: Scalars['Boolean']['output']; /** The last 4 digits of the card. */
  lastDigits: Scalars['String']['output']; /** The masked card number with only the last 4 digits displayed. */
  maskedNumber: Scalars['String']['output']; /** The name of the card holder. */
  name: Scalars['String']['output']; /** The source of the card if coming from a wallet such as Apple Pay. */
  source?: Maybe<Scalars['String']['output']>; /** The last 4 digits of the Device Account Number. */
  virtualLastDigits?: Maybe<Scalars['String']['output']>;
};
/** The billing address of a credit card payment instrument. */
type CustomerCreditCardBillingAddress = {
  __typename?: 'CustomerCreditCardBillingAddress'; /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']['output']>; /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']['output']>; /** The name of the country. */
  country?: Maybe<Scalars['String']['output']>;
  /**
   * The two-letter code for the country of the address.
   * For example, US.
   */
  countryCode?: Maybe<CountryCode>; /** The first name in the billing address. */
  firstName?: Maybe<Scalars['String']['output']>; /** The last name in the billing address. */
  lastName?: Maybe<Scalars['String']['output']>; /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']['output']>;
  /**
   * The alphanumeric code for the region.
   * For example, ON.
   */
  provinceCode?: Maybe<Scalars['String']['output']>; /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']['output']>;
};
/** An auto-generated type which holds one Customer and a cursor during pagination. */
type CustomerEdge = {
  __typename?: 'CustomerEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of CustomerEdge. */
  node: Customer;
};
/**
 * A customer's email address with marketing consent. This includes the email address, marketing subscription status, and opt-in level according to [M3AAWG best practices guidelines](https://www.m3aawg.org/news/updated-m3aawg-best-practices-for-senders-urge-opt-in-only-mailings-address-sender-transparency).
 *
 * It also provides the timestamp of when customers last updated marketing consent and URLs for unsubscribing from marketing emails or opting in or out of email open tracking. The [`sourceLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-CustomerEmailAddress.fields.sourceLocation) field indicates where the customer consented to receive marketing material.
 */
type CustomerEmailAddress = {
  __typename?: 'CustomerEmailAddress'; /** The customer's default email address. */
  emailAddress: Scalars['String']['output'];
  /**
   * The marketing subscription opt-in level, as described by the M3AAWG best practices guidelines,
   * received when the marketing consent was updated.
   */
  marketingOptInLevel?: Maybe<CustomerMarketingOptInLevel>; /** Whether the customer has subscribed to email marketing. */
  marketingState: CustomerEmailAddressMarketingState; /** The URL to unsubscribe a member from all mailing lists. */
  marketingUnsubscribeUrl: Scalars['URL']['output'];
  /**
   * The date and time at which the marketing consent was updated.
   *
   * No date is provided if the email address never updated its marketing consent.
   */
  marketingUpdatedAt?: Maybe<Scalars['DateTime']['output']>; /** Whether the customer has opted in to having their opened emails tracked. */
  openTrackingLevel: CustomerEmailAddressOpenTrackingLevel; /** The URL that can be used to opt a customer in or out of email open tracking. */
  openTrackingUrl: Scalars['URL']['output']; /** The location where the customer consented to receive marketing material by email. */
  sourceLocation?: Maybe<Location>;
  /**
   * Whether the email address is formatted correctly.
   *
   * Returns `true` when the email is formatted correctly. This doesn't guarantee that the email address
   * actually exists.
   */
  validFormat: Scalars['Boolean']['output'];
};
/** Possible marketing states for the customer’s email address. */
declare enum CustomerEmailAddressMarketingState {
  /** The customer’s email address marketing state is invalid. */
  Invalid = 'INVALID',
  /** The customer is not subscribed to email marketing. */
  NotSubscribed = 'NOT_SUBSCRIBED',
  /** The customer is in the process of subscribing to email marketing. */
  Pending = 'PENDING',
  /** The customer is subscribed to email marketing. */
  Subscribed = 'SUBSCRIBED',
  /** The customer is not subscribed to email marketing but was previously subscribed. */
  Unsubscribed = 'UNSUBSCRIBED'
}
/** The different levels related to whether a customer has opted in to having their opened emails tracked. */
declare enum CustomerEmailAddressOpenTrackingLevel {
  /** The customer has opted in to having their open emails tracked. */
  OptedIn = 'OPTED_IN',
  /** The customer has opted out of having their open emails tracked. */
  OptedOut = 'OPTED_OUT',
  /** The customer has not specified whether they want to opt in or out of having their open emails tracked. */
  Unknown = 'UNKNOWN'
}
/** The record of when a customer consented to receive marketing material by email. */
type CustomerEmailMarketingConsentState = {
  __typename?: 'CustomerEmailMarketingConsentState';
  /**
   * The date and time at which the customer consented to receive marketing material by email.
   * The customer's consent state reflects the consent record with the most recent `consent_updated_at` date.
   * If no date is provided, then the date and time at which the consent information was sent is used.
   */
  consentUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The marketing subscription opt-in level, as described by the M3AAWG best practices guidelines,
   * that the customer gave when they consented to receive marketing material by email.
   */
  marketingOptInLevel?: Maybe<CustomerMarketingOptInLevel>; /** The current email marketing state for the customer. */
  marketingState: CustomerEmailMarketingState; /** The location where the customer consented to receive marketing material by email. */
  sourceLocation?: Maybe<Location>;
};
/** The possible email marketing states for a customer. */
declare enum CustomerEmailMarketingState {
  /** This value is internally-set and read-only. */
  Invalid = 'INVALID',
  /**
   * Default state for customers who have never subscribed to email marketing.
   * This value cannot be set via the mutation; use UNSUBSCRIBED instead to indicate
   * a customer has opted out.
   */
  NotSubscribed = 'NOT_SUBSCRIBED',
  /** The customer is in the process of subscribing to email marketing. */
  Pending = 'PENDING',
  /** The customer's personal data is erased. This value is internally-set and read-only. */
  Redacted = 'REDACTED',
  /** The customer is subscribed to email marketing. */
  Subscribed = 'SUBSCRIBED',
  /** The customer isn't currently subscribed to email marketing but was previously subscribed. */
  Unsubscribed = 'UNSUBSCRIBED'
}
/** Tracks a customer's path to purchase through their online store visits. The journey captures key moments like shop sessions that led to the order, helping merchants understand customer behavior and marketing attribution within a 30-day window. Includes the first and last sessions before an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), the time between initial visit and conversion, and the customer's order position in their purchase history. */
type CustomerJourney = {
  __typename?: 'CustomerJourney'; /** The position of the current order within the customer's order history. */
  customerOrderIndex: Scalars['Int']['output']; /** The amount of days between first session and order creation date. First session represents first session since the last order, or first session within the 30 day attribution window, if more than 30 days has passed since the last order. */
  daysToConversion: Scalars['Int']['output']; /** The customer's first session going into the shop. */
  firstVisit: CustomerVisit; /** The last session before an order is made. */
  lastVisit?: Maybe<CustomerVisit>; /** Events preceding a customer order, such as shop sessions. */
  moments: Array<CustomerMoment>;
};
/**
 * A [`CustomerJourney`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourney) through the online store leading up to an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Tracks session data, attribution sources, and the timeline from first visit to purchase conversion.
 *
 * The summary includes the customer's position in their order history, days between first visit and order creation, and details about their first and last sessions. Use the [`moments`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourneySummary#field-moments) connection to access the complete timeline of customer interactions before the purchase.
 */
type CustomerJourneySummary = {
  __typename?: 'CustomerJourneySummary'; /** The position of the current order within the customer's order history. Test orders aren't included. */
  customerOrderIndex?: Maybe<Scalars['Int']['output']>; /** The number of days between the first session and the order creation date. The first session represents the first session since the last order, or the first session within the 30 day attribution window, if more than 30 days have passed since the last order. */
  daysToConversion?: Maybe<Scalars['Int']['output']>; /** The customer's first session going into the shop. */
  firstVisit?: Maybe<CustomerVisit>; /** The last session before an order is made. */
  lastVisit?: Maybe<CustomerVisit>; /** The events preceding a customer's order, such as shop sessions. */
  moments?: Maybe<CustomerMomentConnection>; /** The total number of customer moments associated with this order. Returns null if the order is still in the process of being attributed. */
  momentsCount?: Maybe<Count>; /** Whether the attributed sessions for the order have been created yet. */
  ready: Scalars['Boolean']['output'];
};
/**
 * The possible values for the marketing subscription opt-in level enabled at the time the customer consented to receive marketing information.
 *
 * The levels are defined by [the M3AAWG best practices guideline
 *   document](https://www.m3aawg.org/sites/maawg/files/news/M3AAWG_Senders_BCP_Ver3-2015-02.pdf).
 */
declare enum CustomerMarketingOptInLevel {
  /**
   * After providing their information, the customer receives a confirmation and is required to
   * perform a intermediate step before receiving marketing information.
   */
  ConfirmedOptIn = 'CONFIRMED_OPT_IN',
  /**
   * After providing their information, the customer receives marketing information without any
   * intermediate steps.
   */
  SingleOptIn = 'SINGLE_OPT_IN',
  /** The customer receives marketing information but how they were opted in is unknown. */
  Unknown = 'UNKNOWN'
}
/** The error blocking a customer merge. */
type CustomerMergeError = {
  __typename?: 'CustomerMergeError'; /** The list of fields preventing the customer from being merged. */
  errorFields: Array<CustomerMergeErrorFieldType>; /** The customer merge error message. */
  message: Scalars['String']['output'];
};
/** The types of the hard blockers preventing a customer from being merged to another customer. */
declare enum CustomerMergeErrorFieldType {
  /** The customer is a company contact. */
  CompanyContact = 'COMPANY_CONTACT',
  /** The customer has payment methods. */
  CustomerPaymentMethods = 'CUSTOMER_PAYMENT_METHODS',
  /** The customer does not exist. */
  DeletedAt = 'DELETED_AT',
  /** The customer has gift cards. */
  GiftCards = 'GIFT_CARDS',
  /** The customer has a merge in progress. */
  MergeInProgress = 'MERGE_IN_PROGRESS',
  /** The customer has a multipass identifier. */
  MultipassIdentifier = 'MULTIPASS_IDENTIFIER',
  /** The override fields are invalid. */
  OverrideFields = 'OVERRIDE_FIELDS',
  /** The customer has a pending data request. */
  PendingDataRequest = 'PENDING_DATA_REQUEST',
  /** The customer has a pending or completed redaction. */
  RedactedAt = 'REDACTED_AT',
  /** The customer has store credit. */
  StoreCredit = 'STORE_CREDIT',
  /** The customer has a subscription history. */
  Subscriptions = 'SUBSCRIPTIONS'
}
/** A merge request for merging two customers. */
type CustomerMergeRequest = {
  __typename?: 'CustomerMergeRequest'; /** The merge errors that occurred during the customer merge request. */
  customerMergeErrors: Array<CustomerMergeError>; /** The UUID of the merge job. */
  jobId?: Maybe<Scalars['ID']['output']>; /** The ID of the customer resulting from the merge. */
  resultingCustomerId: Scalars['ID']['output']; /** The status of the customer merge request. */
  status: CustomerMergeRequestStatus;
};
/** The status of the customer merge request. */
declare enum CustomerMergeRequestStatus {
  /** The customer merge request has been completed. */
  Completed = 'COMPLETED',
  /** The customer merge request has failed. */
  Failed = 'FAILED',
  /** The customer merge request is currently in progress. */
  InProgress = 'IN_PROGRESS',
  /** The customer merge request has been requested. */
  Requested = 'REQUESTED'
}
/** An object that represents whether a customer can be merged with another customer. */
type CustomerMergeable = {
  __typename?: 'CustomerMergeable'; /** The list of fields preventing the customer from being merged. */
  errorFields: Array<CustomerMergeErrorFieldType>; /** Whether the customer can be merged with another customer. */
  isMergeable: Scalars['Boolean']['output']; /** The merge request if one is currently in progress. */
  mergeInProgress?: Maybe<CustomerMergeRequest>; /** The reason why the customer can't be merged with another customer. */
  reason?: Maybe<Scalars['String']['output']>;
};
/** Represents a session preceding an order, often used for building a timeline of events leading to an order. */
type CustomerMoment = {
  /** The date and time when the customer's session occurred. */occurredAt: Scalars['DateTime']['output'];
};
/** An auto-generated type for paginating through multiple CustomerMoments. */
type CustomerMomentConnection = {
  __typename?: 'CustomerMomentConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<CustomerMomentEdge>; /** A list of nodes that are contained in CustomerMomentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<CustomerMoment>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one CustomerMoment and a cursor during pagination. */
type CustomerMomentEdge = {
  __typename?: 'CustomerMomentEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of CustomerMomentEdge. */
  node: CustomerMoment;
};
/** All possible instruments for CustomerPaymentMethods. */
type CustomerPaymentInstrument = CustomerCreditCard | CustomerPaypalBillingAgreement | CustomerShopPayAgreement;
/** The billing address of a payment instrument. */
type CustomerPaymentInstrumentBillingAddress = {
  __typename?: 'CustomerPaymentInstrumentBillingAddress'; /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']['output']>; /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']['output']>; /** The name of the country. */
  country?: Maybe<Scalars['String']['output']>;
  /**
   * The two-letter code for the country of the address.
   * For example, US.
   */
  countryCode?: Maybe<CountryCode>; /** The name of the buyer of the address. */
  name?: Maybe<Scalars['String']['output']>; /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']['output']>;
  /**
   * The alphanumeric code for the region.
   * For example, ON.
   */
  provinceCode?: Maybe<Scalars['String']['output']>; /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']['output']>;
};
/**
 * A customer's saved payment method. Stores the payment instrument details and billing information for recurring charges.
 *
 * The payment method supports types included in the [`CustomerPaymentInstrument`](https://shopify.dev/docs/api/admin-graphql/latest/unions/CustomerPaymentInstrument) union.
 */
type CustomerPaymentMethod = Node & {
  __typename?: 'CustomerPaymentMethod'; /** The customer to whom the payment method belongs. */
  customer?: Maybe<Customer>; /** The ID of this payment method. */
  id: Scalars['ID']['output']; /** The instrument for this payment method. */
  instrument?: Maybe<CustomerPaymentInstrument>; /** The mandates associated with the payment method. */
  mandates: PaymentMandateResourceConnection; /** The time that the payment method was revoked. */
  revokedAt?: Maybe<Scalars['DateTime']['output']>; /** The revocation reason for this payment method. */
  revokedReason?: Maybe<CustomerPaymentMethodRevocationReason>; /** List Subscription Contracts. */
  subscriptionContracts: SubscriptionContractConnection;
};
/** An auto-generated type for paginating through multiple CustomerPaymentMethods. */
type CustomerPaymentMethodConnection = {
  __typename?: 'CustomerPaymentMethodConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<CustomerPaymentMethodEdge>; /** A list of nodes that are contained in CustomerPaymentMethodEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<CustomerPaymentMethod>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one CustomerPaymentMethod and a cursor during pagination. */
type CustomerPaymentMethodEdge = {
  __typename?: 'CustomerPaymentMethodEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of CustomerPaymentMethodEdge. */
  node: CustomerPaymentMethod;
};
/** The revocation reason types for a customer payment method. */
declare enum CustomerPaymentMethodRevocationReason {
  /** The Authorize.net payment gateway is not enabled. */
  AuthorizeNetGatewayNotEnabled = 'AUTHORIZE_NET_GATEWAY_NOT_ENABLED',
  /** Authorize.net did not return any payment methods. Make sure that the correct Authorize.net account is linked. */
  AuthorizeNetReturnedNoPaymentMethod = 'AUTHORIZE_NET_RETURNED_NO_PAYMENT_METHOD',
  /** Failed to contact Braintree API. */
  BraintreeApiAuthenticationError = 'BRAINTREE_API_AUTHENTICATION_ERROR',
  /** The Braintree payment gateway is not enabled. */
  BraintreeGatewayNotEnabled = 'BRAINTREE_GATEWAY_NOT_ENABLED',
  /** The Braintree payment method type should be a credit card or Apple Pay card. */
  BraintreePaymentMethodNotCard = 'BRAINTREE_PAYMENT_METHOD_NOT_CARD',
  /** Braintree returned no payment methods. Make sure the correct Braintree account is linked. */
  BraintreeReturnedNoPaymentMethod = 'BRAINTREE_RETURNED_NO_PAYMENT_METHOD',
  /** The customer redacted their payment method. */
  CustomerRedacted = 'CUSTOMER_REDACTED',
  /** CVV attempts limit exceeded. */
  CvvAttemptsLimitExceeded = 'CVV_ATTEMPTS_LIMIT_EXCEEDED',
  /** The billing address failed to retrieve. */
  FailedToRetrieveBillingAddress = 'FAILED_TO_RETRIEVE_BILLING_ADDRESS',
  /** The credit card failed to update. */
  FailedToUpdateCreditCard = 'FAILED_TO_UPDATE_CREDIT_CARD',
  /** The payment method was manually revoked. */
  ManuallyRevoked = 'MANUALLY_REVOKED',
  /** The payment method was replaced with an existing payment method. The associated contracts have been migrated to the other payment method. */
  Merged = 'MERGED',
  /** Verification of payment method failed. */
  PaymentMethodVerificationFailed = 'PAYMENT_METHOD_VERIFICATION_FAILED',
  /** Failed to contact the Stripe API. */
  StripeApiAuthenticationError = 'STRIPE_API_AUTHENTICATION_ERROR',
  /** Invalid request. Failed to retrieve payment method from Stripe. */
  StripeApiInvalidRequestError = 'STRIPE_API_INVALID_REQUEST_ERROR',
  /** The Stripe payment gateway is not enabled. */
  StripeGatewayNotEnabled = 'STRIPE_GATEWAY_NOT_ENABLED',
  /** The Stripe payment method type should be card. */
  StripePaymentMethodNotCard = 'STRIPE_PAYMENT_METHOD_NOT_CARD',
  /** Stripe did not return any payment methods. Make sure that the correct Stripe account is linked. */
  StripeReturnedNoPaymentMethod = 'STRIPE_RETURNED_NO_PAYMENT_METHOD',
  /** Verification of the payment method failed due to 3DS not being supported. */
  ThreeDSecureFlowInVerificationNotImplemented = 'THREE_D_SECURE_FLOW_IN_VERIFICATION_NOT_IMPLEMENTED',
  /** Too many consecutive failed attempts. */
  TooManyConsecutiveFailures = 'TOO_MANY_CONSECUTIVE_FAILURES'
}
/** Represents a PayPal instrument for customer payment method. */
type CustomerPaypalBillingAgreement = {
  __typename?: 'CustomerPaypalBillingAgreement'; /** The billing address of this payment method. */
  billingAddress?: Maybe<CustomerPaymentInstrumentBillingAddress>; /** Whether the PayPal billing agreement is inactive. */
  inactive: Scalars['Boolean']['output']; /** Whether the payment method can be revoked.The payment method can be revoked if there are no active subscription contracts. */
  isRevocable: Scalars['Boolean']['output']; /** The customers's PayPal account email address. */
  paypalAccountEmail?: Maybe<Scalars['String']['output']>;
};
/** A phone number. */
type CustomerPhoneNumber = {
  __typename?: 'CustomerPhoneNumber'; /** The source from which the SMS marketing information for the customer was collected. */
  marketingCollectedFrom?: Maybe<CustomerConsentCollectedFrom>;
  /**
   * The marketing subscription opt-in level, as described by the M3AAWG best practices guidelines,
   * received when the marketing consent was updated.
   */
  marketingOptInLevel?: Maybe<CustomerMarketingOptInLevel>; /** Whether the customer has subscribed to SMS marketing material. */
  marketingState: CustomerSmsMarketingState;
  /**
   * The date and time at which the marketing consent was updated.
   *
   * No date is provided if the email address never updated its marketing consent.
   */
  marketingUpdatedAt?: Maybe<Scalars['DateTime']['output']>; /** A customer's phone number. */
  phoneNumber: Scalars['String']['output']; /** The location where the customer consented to receive marketing material by SMS. */
  sourceLocation?: Maybe<Location>;
};
/** The valid tiers for the predicted spend of a customer with a shop. */
declare enum CustomerPredictedSpendTier {
  /** The customer's spending is predicted to be in the top spending range for the shop in the following year. */
  High = 'HIGH',
  /** The customer's spending is predicted to be zero, or in the lowest spending range for the shop in the following year. */
  Low = 'LOW',
  /** The customer's spending is predicted to be in the normal spending range for the shop in the following year. */
  Medium = 'MEDIUM'
}
/** The possible product subscription states for a customer, as defined by the customer's subscription contracts. */
declare enum CustomerProductSubscriberStatus {
  /** The customer has at least one active subscription contract. */
  Active = 'ACTIVE',
  /**
   * The customer's last subscription contract was cancelled and there are no other active or paused
   * subscription contracts.
   */
  Cancelled = 'CANCELLED',
  /**
   * The customer's last subscription contract expired and there are no other active or paused
   * subscription contracts.
   */
  Expired = 'EXPIRED',
  /**
   * The customer's last subscription contract failed and there are no other active or paused
   * subscription contracts.
   */
  Failed = 'FAILED',
  /** The customer has never had a subscription contract. */
  NeverSubscribed = 'NEVER_SUBSCRIBED',
  /**
   * The customer has at least one paused subscription contract and there are no other active
   * subscription contracts.
   */
  Paused = 'PAUSED'
}
/** The RFM (Recency, Frequency, Monetary) group for a customer. */
declare enum CustomerRfmGroup {
  /** Customers with recent purchases, some orders, and moderate spend. */
  Active = 'ACTIVE',
  /** Customers without recent purchases, fewer orders, and with lower spend. */
  AlmostLost = 'ALMOST_LOST',
  /** Customers without recent purchases, but with a strong history of orders and spend. */
  AtRisk = 'AT_RISK',
  /** Customers with very recent purchases, many orders, and the most spend. */
  Champions = 'CHAMPIONS',
  /** Customers without recent orders, with infrequent orders, and with low spend. */
  Dormant = 'DORMANT',
  /** Customers with recent purchases, many orders, and the most spend. */
  Loyal = 'LOYAL',
  /** Customers with recent purchases, some orders, and moderate spend. */
  NeedsAttention = 'NEEDS_ATTENTION',
  /** Customers with very recent purchases, few orders, and low spend. */
  New = 'NEW',
  /** Customers without recent purchases, but with a very strong history of orders and spend. */
  PreviouslyLoyal = 'PREVIOUSLY_LOYAL',
  /** Customers with recent purchases, few orders, and low spend. */
  Promising = 'PROMISING',
  /** Customers with no orders yet. */
  Prospects = 'PROSPECTS'
}
/** Represents a Shop Pay card instrument for customer payment method. */
type CustomerShopPayAgreement = {
  __typename?: 'CustomerShopPayAgreement'; /** The billing address of the card. */
  billingAddress?: Maybe<CustomerCreditCardBillingAddress>; /** Whether the card is about to expire. */
  expiresSoon: Scalars['Boolean']['output']; /** The expiry month of the card. */
  expiryMonth: Scalars['Int']['output']; /** The expiry year of the card. */
  expiryYear: Scalars['Int']['output']; /** Whether the Shop Pay billing agreement is inactive. */
  inactive: Scalars['Boolean']['output']; /** The payment method can be revoked if there are no active subscription contracts. */
  isRevocable: Scalars['Boolean']['output']; /** The last 4 digits of the card. */
  lastDigits: Scalars['String']['output']; /** The masked card number with only the last 4 digits displayed. */
  maskedNumber: Scalars['String']['output']; /** The name of the card holder. */
  name: Scalars['String']['output'];
};
/**
 * The record of when a customer consented to receive marketing material by SMS.
 *
 * The customer's consent state reflects the record with the most recent date when consent was updated.
 */
type CustomerSmsMarketingConsentState = {
  __typename?: 'CustomerSmsMarketingConsentState'; /** The source from which the SMS marketing information for the customer was collected. */
  consentCollectedFrom?: Maybe<CustomerConsentCollectedFrom>;
  /**
   * The date and time when the customer consented to receive marketing material by SMS.
   * If no date is provided, then the date and time when the consent information was sent is used.
   */
  consentUpdatedAt?: Maybe<Scalars['DateTime']['output']>; /** The marketing subscription opt-in level that was set when the customer consented to receive marketing information. */
  marketingOptInLevel: CustomerMarketingOptInLevel; /** The current SMS marketing state for the customer. */
  marketingState: CustomerSmsMarketingState; /** The location where the customer consented to receive marketing material by SMS. */
  sourceLocation?: Maybe<Location>;
};
/** The valid SMS marketing states for a customer’s phone number. */
declare enum CustomerSmsMarketingState {
  /** The customer hasn't subscribed to SMS marketing. */
  NotSubscribed = 'NOT_SUBSCRIBED',
  /** The customer is in the process of subscribing to SMS marketing. */
  Pending = 'PENDING',
  /** The customer's personal data is erased. This value is internally-set and read-only. */
  Redacted = 'REDACTED',
  /** The customer is subscribed to SMS marketing. */
  Subscribed = 'SUBSCRIBED',
  /** The customer isn't currently subscribed to SMS marketing but was previously subscribed. */
  Unsubscribed = 'UNSUBSCRIBED'
}
/** The valid values for the state of a customer's account with a shop. */
declare enum CustomerState {
  /** The customer declined the email invite to create an account. */
  Declined = 'DECLINED',
  /** The customer doesn't have an active account. Customer accounts can be disabled from the Shopify admin at any time. */
  Disabled = 'DISABLED',
  /** The customer has created an account. */
  Enabled = 'ENABLED',
  /** The customer has received an email invite to create an account. */
  Invited = 'INVITED'
}
/** A customer's computed statistics. */
type CustomerStatistics = {
  __typename?: 'CustomerStatistics'; /** The predicted spend tier of a customer with a shop. */
  predictedSpendTier?: Maybe<CustomerPredictedSpendTier>; /** The RFM (Recency, Frequency, Monetary) group of the customer. */
  rfmGroup?: Maybe<CustomerRfmGroup>;
};
/**
 * A customer's session on the online store. Tracks how the [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) arrived at the store, including the landing page, referral source, and any associated marketing campaigns.
 *
 * The visit captures attribution data such as [`UTMParameters`](https://shopify.dev/docs/api/admin-graphql/latest/objects/UTMParameters), referral codes, and the [`MarketingEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEvent) that drove the session. This information helps merchants understand which marketing efforts successfully bring customers to their store.
 */
type CustomerVisit = CustomerMoment & Node & {
  __typename?: 'CustomerVisit'; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** URL of the first page the customer landed on for the session. */
  landingPage?: Maybe<Scalars['URL']['output']>; /** Landing page information with URL linked in HTML. For example, the first page the customer visited was store.myshopify.com/products/1. */
  landingPageHtml?: Maybe<Scalars['HTML']['output']>;
  /**
   * Represent actions taken by an app, on behalf of a merchant,
   * to market Shopify resources such as products, collections, and discounts.
   */
  marketingEvent?: Maybe<MarketingEvent>; /** The date and time when the customer's session occurred. */
  occurredAt: Scalars['DateTime']['output'];
  /**
   * Marketing referral code from the link that the customer clicked to visit the store.
   * Supports the following URL attributes: _ref_, _source_, or _r_.
   * For example, if the URL is myshopifystore.com/products/slide?ref=j2tj1tn2, then this value is j2tj1tn2.
   */
  referralCode?: Maybe<Scalars['String']['output']>; /** Referral information with URLs linked in HTML. */
  referralInfoHtml: Scalars['FormattedString']['output'];
  /**
   * Webpage where the customer clicked a link that sent them to the online store.
   * For example, _https://randomblog.com/page1_ or _android-app://com.google.android.gm_.
   */
  referrerUrl?: Maybe<Scalars['URL']['output']>;
  /**
   * Source from which the customer visited the store, such as a platform (Facebook, Google), email, direct,
   * a website domain, QR code, or unknown.
   */
  source: Scalars['String']['output']; /** Describes the source explicitly for first or last session. */
  sourceDescription?: Maybe<Scalars['String']['output']>; /** Type of marketing tactic. */
  sourceType?: Maybe<MarketingTactic>; /** A set of UTM parameters gathered from the URL parameters of the referrer. */
  utmParameters?: Maybe<UtmParameters>;
};
/** Days of the week from Monday to Sunday. */
declare enum DayOfTheWeek {
  /** Friday. */
  Friday = 'FRIDAY',
  /** Monday. */
  Monday = 'MONDAY',
  /** Saturday. */
  Saturday = 'SATURDAY',
  /** Sunday. */
  Sunday = 'SUNDAY',
  /** Thursday. */
  Thursday = 'THURSDAY',
  /** Tuesday. */
  Tuesday = 'TUESDAY',
  /** Wednesday. */
  Wednesday = 'WEDNESDAY'
}
/** A shipping service and a list of countries that the service is available for. */
type DeliveryAvailableService = {
  __typename?: 'DeliveryAvailableService'; /** The countries the service provider ships to. */
  countries: DeliveryCountryCodesOrRestOfWorld; /** The name of the service. */
  name: Scalars['String']['output'];
};
/** Represents a branded promise presented to buyers. */
type DeliveryBrandedPromise = {
  __typename?: 'DeliveryBrandedPromise'; /** The handle of the branded promise.  For example: `shop_promise`. */
  handle: Scalars['String']['output']; /** The name of the branded promise.  For example: `Shop Promise`. */
  name: Scalars['String']['output'];
};
/**
 * A carrier service (also known as a carrier calculated service or shipping service) provides real-time shipping rates to Shopify. Some common carrier services include Canada Post, FedEx, UPS, and USPS. The term **carrier** is often used interchangeably with the terms **shipping company** and **rate provider**.
 *
 * Using the CarrierService resource, you can add a carrier service to a shop and then provide a list of applicable shipping rates at checkout. You can even use the cart data to adjust shipping rates and offer shipping discounts based on what is in the customer's cart.
 *
 * ## Requirements for accessing the CarrierService resource
 * To access the CarrierService resource, add the `write_shipping` permission to your app's requested scopes. For more information, see [API access scopes](https://shopify.dev/docs/admin-api/access-scopes).
 *
 * Your app's request to create a carrier service will fail unless the store installing your carrier service meets one of the following requirements:
 * * It's on the Advanced Shopify plan or higher.
 * * It's on the Shopify plan with yearly billing, or the carrier service feature has been added to the store for a monthly fee. For more information, contact [Shopify Support](https://help.shopify.com/questions).
 * * It's a development store.
 *
 * > Note:
 * > If a store changes its Shopify plan, then the store's association with a carrier service is deactivated if the store no long meets one of the requirements above.
 *
 * ## Providing shipping rates to Shopify
 * When adding a carrier service to a store, you need to provide a POST endpoint rooted in the `callbackUrl` property where Shopify can retrieve applicable shipping rates. The callback URL should be a public endpoint that expects these requests from Shopify.
 *
 * ### Example shipping rate request sent to a carrier service
 *
 * ```json
 * {
 *   "rate": {
 *     "origin": {
 *       "country": "CA",
 *       "postal_code": "K2P1L4",
 *       "province": "ON",
 *       "city": "Ottawa",
 *       "name": null,
 *       "address1": "150 Elgin St.",
 *       "address2": "",
 *       "address3": null,
 *       "phone": null,
 *       "fax": null,
 *       "email": null,
 *       "address_type": null,
 *       "company_name": "Jamie D's Emporium"
 *     },
 *     "destination": {
 *       "country": "CA",
 *       "postal_code": "K1M1M4",
 *       "province": "ON",
 *       "city": "Ottawa",
 *       "name": "Bob Norman",
 *       "address1": "24 Sussex Dr.",
 *       "address2": "",
 *       "address3": null,
 *       "phone": null,
 *       "fax": null,
 *       "email": null,
 *       "address_type": null,
 *       "company_name": null
 *     },
 *     "items": [{
 *       "name": "Short Sleeve T-Shirt",
 *       "sku": "",
 *       "quantity": 1,
 *       "grams": 1000,
 *       "price": 1999,
 *       "vendor": "Jamie D's Emporium",
 *       "requires_shipping": true,
 *       "taxable": true,
 *       "fulfillment_service": "manual",
 *       "properties": null,
 *       "product_id": 48447225880,
 *       "variant_id": 258644705304
 *     }],
 *     "currency": "USD",
 *     "locale": "en",
 *     "order_totals": {
 *       "subtotal_price": "1999",
 *       "total_price": "2199",
 *       "discount_amount": "150"
 *     },
 *     "customer": {
 *       "id": 207119551,
 *       "tags": ["VIP", "wholesale"]
 *     }
 *   }
 * }
 * ```
 *
 * ### Example response
 * ```json
 * {
 *    "rates": [
 *        {
 *            "service_name": "canadapost-overnight",
 *            "service_code": "ON",
 *            "total_price": "1295",
 *            "description": "This is the fastest option by far",
 *            "currency": "CAD",
 *            "min_delivery_date": "2013-04-12 14:48:45 -0400",
 *            "max_delivery_date": "2013-04-12 14:48:45 -0400"
 *        },
 *        {
 *            "service_name": "fedex-2dayground",
 *            "service_code": "2D",
 *            "total_price": "2934",
 *            "currency": "USD",
 *            "min_delivery_date": "2013-04-12 14:48:45 -0400",
 *            "max_delivery_date": "2013-04-12 14:48:45 -0400"
 *        },
 *        {
 *            "service_name": "fedex-priorityovernight",
 *            "service_code": "1D",
 *            "total_price": "3587",
 *            "currency": "USD",
 *            "min_delivery_date": "2013-04-12 14:48:45 -0400",
 *            "max_delivery_date": "2013-04-12 14:48:45 -0400",
 *            "metafields": [
 *                {
 *                    "key": "tracking_url",
 *                    "value": "abc123",
 *                    "namespace": "carrier_service_metadata",
 *                    "type": "single_line_text_field"
 *                }
 *            ]
 *        }
 *    ]
 * }
 * ```
 *
 * The `address3`, `fax`, `address_type`, and `company_name` fields are returned by specific [ActiveShipping](https://github.com/Shopify/active_shipping) providers. For API-created carrier services, you should use only the following shipping address fields:
 * * `address1`
 * * `address2`
 * * `city`
 * * `zip`
 * * `province`
 * * `country`
 *
 * Other values remain as `null` and are not sent to the callback URL.
 *
 * ### Response fields
 *
 * When Shopify requests shipping rates using your callback URL, the response object `rates` must be a JSON array of objects with the following fields.  Required fields must be included in the response for the carrier service integration to work properly.
 *
 * | Field                   | Required | Description                                                                                                                                                                                                  |
 * | ----------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
 * | `service_name`          | Yes      | The name of the rate, which customers see at checkout. For example: `Expedited Mail`.                                                                                                                        |
 * | `description`           | Yes      | A description of the rate, which customers see at checkout. For example: `Includes tracking and insurance`.                                                                                                  |
 * | `service_code`          | Yes      | A unique code associated with the rate that must be consistent across requests. For example: `expedited_mail`.                                                                                               |
 * | `currency`              | Yes      | The currency of the shipping rate.                                                                                                                                                                           |
 * | `total_price`           | Yes      | The total price expressed in subunits. If the currency doesn't use subunits, then the value must be multiplied by 100. For example: `"total_price": 500` for 5.00 CAD, `"total_price": 100000` for 1000 JPY. |
 * | `phone_required`        | No       | Whether the customer must provide a phone number at checkout.                                                                                                                                                |
 * | `min_delivery_date`     | No       | The earliest delivery date for the displayed rate.                                                                                                                                                           |
 * | `max_delivery_date`     | No       | The latest delivery date for the displayed rate to still be valid.                                                                                                                                           |
 * | `metafields`            | No       | An array of metafield objects to attach custom metadata to the shipping rate.                                                                                                                                |
 *
 * ### Special conditions
 *
 * * To indicate that this carrier service cannot handle this shipping request, return an empty array and any successful (20x) HTTP code.
 * * To force backup rates instead, return a 40x or 50x HTTP code with any content. A good choice is the regular 404 Not Found code.
 * * Redirects (30x codes) will only be followed for the same domain as the original callback URL. Attempting to redirect to a different domain will trigger backup rates.
 * * There is no retry mechanism. The response must be successful on the first try, within the time budget listed below. Timeouts or errors will trigger backup rates.
 * * The `service_code` must be stable and consistent across requests for the same shipping option. It should not contain dynamic values like session IDs, timestamps, or request-specific identifiers. Use metafields for passing dynamic or session-specific data.
 *
 * ## Response Timeouts
 *
 * The read timeout for rate requests are dynamic, based on the number of requests per minute (RPM). These limits are applied to each shop-app pair. The timeout values are as follows.
 *
 * | RPM Range     | Timeout    |
 * | ------------- | ---------- |
 * | Under 1500    | 10s        |
 * | 1500 to 3000  | 5s         |
 * | Over 3000     | 3s         |
 *
 * > Note:
 * > These values are upper limits and should not be interpretted as a goal to develop towards. Shopify is constantly evaluating the performance of the platform and working towards improving resilience as well as app capabilities. As such, these numbers may be adjusted outside of our normal versioning timelines.
 *
 * ## Server-side caching of requests
 * Shopify provides server-side caching to reduce the number of requests it makes. Any shipping rate request that identically matches the following fields will be retrieved from Shopify's cache of the initial response:
 * * variant IDs
 * * default shipping box weight and dimensions
 * * variant quantities
 * * carrier service ID
 * * origin address
 * * destination address
 * * item weights and signatures
 *
 * If any of these fields differ, or if the cache has expired since the original request, then new shipping rates are requested. The cache expires 15 minutes after rates are successfully returned. If an error occurs, then the cache expires after 30 seconds.
 */
type DeliveryCarrierService = Node & {
  __typename?: 'DeliveryCarrierService'; /** Whether the carrier service is active. */
  active: Scalars['Boolean']['output']; /** The list of services offered for given destinations. */
  availableServicesForCountries: Array<DeliveryAvailableService>; /** The URL endpoint that Shopify needs to retrieve shipping rates. */
  callbackUrl?: Maybe<Scalars['URL']['output']>; /** The properly formatted name of the shipping service provider, ready to display. */
  formattedName?: Maybe<Scalars['String']['output']>; /** The logo of the service provider. */
  icon: Image; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The name of the shipping service provider. */
  name?: Maybe<Scalars['String']['output']>; /** Whether merchants are able to send dummy data to your service through the Shopify admin to see shipping rate examples. */
  supportsServiceDiscovery: Scalars['Boolean']['output'];
};
/** A condition that must pass for a delivery method definition to be applied to an order. */
type DeliveryCondition = Node & {
  __typename?: 'DeliveryCondition'; /** The value (weight or price) that the condition field is compared to. */
  conditionCriteria: DeliveryConditionCriteria; /** The field to compare the criterion value against, using the operator. */
  field: DeliveryConditionField; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The operator to compare the field and criterion value. */
  operator: DeliveryConditionOperator;
};
/** The value (weight or price) that the condition field is compared to. */
type DeliveryConditionCriteria = MoneyV2 | Weight;
/** The field type that the condition will be applied to. */
declare enum DeliveryConditionField {
  /** The condition will check against the total price of the order. */
  TotalPrice = 'TOTAL_PRICE',
  /** The condition will check against the total weight of the order. */
  TotalWeight = 'TOTAL_WEIGHT'
}
/** The operator to use to determine if the condition passes. */
declare enum DeliveryConditionOperator {
  /** The condition will check whether the field is greater than or equal to the criterion. */
  GreaterThanOrEqualTo = 'GREATER_THAN_OR_EQUAL_TO',
  /** The condition will check if the field is less than or equal to the criterion. */
  LessThanOrEqualTo = 'LESS_THAN_OR_EQUAL_TO'
}
/** A country that is used to define a shipping zone. */
type DeliveryCountry = Node & {
  __typename?: 'DeliveryCountry';
  /**
   * A two-letter country code in ISO 3166-1 alpha-2 standard.
   * It also includes a flag indicating whether the country should be
   * a part of the 'Rest Of World' shipping zone.
   */
  code: DeliveryCountryCodeOrRestOfWorld; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The full name of the country. */
  name: Scalars['String']['output']; /** The list of regions associated with this country. */
  provinces: Array<DeliveryProvince>; /** The translated name of the country. The translation returned is based on the system's locale. */
  translatedName: Scalars['String']['output'];
};
/** The country details and the associated shipping zone. */
type DeliveryCountryAndZone = {
  __typename?: 'DeliveryCountryAndZone'; /** The country details. */
  country: DeliveryCountry; /** The name of the shipping zone. */
  zone: Scalars['String']['output'];
};
/** The country code and whether the country is a part of the 'Rest Of World' shipping zone. */
type DeliveryCountryCodeOrRestOfWorld = {
  __typename?: 'DeliveryCountryCodeOrRestOfWorld'; /** The country code in the ISO 3166-1 alpha-2 format. */
  countryCode?: Maybe<CountryCode>; /** Whether the country is a part of the 'Rest of World' shipping zone. */
  restOfWorld: Scalars['Boolean']['output'];
};
/**
 * The list of country codes and information whether the countries
 * are a part of the 'Rest Of World' shipping zone.
 */
type DeliveryCountryCodesOrRestOfWorld = {
  __typename?: 'DeliveryCountryCodesOrRestOfWorld'; /** List of applicable country codes in the ISO 3166-1 alpha-2 format. */
  countryCodes: Array<CountryCode>; /** Whether the countries are a part of the 'Rest of World' shipping zone. */
  restOfWorld: Scalars['Boolean']['output'];
};
/** A delivery customization. */
type DeliveryCustomization = HasMetafieldDefinitions & HasMetafields & Node & {
  __typename?: 'DeliveryCustomization'; /** The enabled status of the delivery customization. */
  enabled: Scalars['Boolean']['output']; /** The error history on the most recent version of the delivery customization. */
  errorHistory?: Maybe<FunctionsErrorHistory>; /** The ID of the Shopify Function implementing the delivery customization. */
  functionId: Scalars['String']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   */
  metafield?: Maybe<Metafield>;
  /**
   * List of metafield definitions.
   * @deprecated This field will be removed in a future version. Use `QueryRoot.metafieldDefinitions` instead.
   */
  metafieldDefinitions: MetafieldDefinitionConnection;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   */
  metafields: MetafieldConnection; /** The Shopify Function implementing the delivery customization. */
  shopifyFunction: ShopifyFunction; /** The title of the delivery customization. */
  title: Scalars['String']['output'];
};
/** Local pickup settings associated with a location. */
type DeliveryLocalPickupSettings = {
  __typename?: 'DeliveryLocalPickupSettings'; /** Additional instructions or information related to the local pickup. */
  instructions: Scalars['String']['output']; /** The estimated pickup time to show customers at checkout. */
  pickupTime: DeliveryLocalPickupTime;
};
/** Possible pickup time values that a location enabled for local pickup can have. */
declare enum DeliveryLocalPickupTime {
  /**
   * Custom pickup time. Unrecognized pickup time enum value.
   * @deprecated Custom pickup time is no longer supported.
   */
  Custom = 'CUSTOM',
  /** Usually ready in 5+ days. */
  FiveOrMoreDays = 'FIVE_OR_MORE_DAYS',
  /** Usually ready in 4 hours. */
  FourHours = 'FOUR_HOURS',
  /** Usually ready in 1 hour. */
  OneHour = 'ONE_HOUR',
  /** Usually ready in 24 hours. */
  TwentyFourHours = 'TWENTY_FOUR_HOURS',
  /** Usually ready in 2 hours. */
  TwoHours = 'TWO_HOURS',
  /** Usually ready in 2-4 days. */
  TwoToFourDays = 'TWO_TO_FOUR_DAYS'
}
/**
 * A location group is a collection of locations. They share zones and delivery methods across delivery
 * profiles.
 */
type DeliveryLocationGroup = Node & {
  __typename?: 'DeliveryLocationGroup'; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** A list of all locations that are part of this location group. */
  locations: LocationConnection; /** A count of all locations that are part of this location group. */
  locationsCount?: Maybe<Count>;
};
/** Links a location group with a zone and the associated method definitions. */
type DeliveryLocationGroupZone = {
  __typename?: 'DeliveryLocationGroupZone'; /** The number of method definitions for the zone. */
  methodDefinitionCounts: DeliveryMethodDefinitionCounts; /** The method definitions associated to a zone and location group. */
  methodDefinitions: DeliveryMethodDefinitionConnection; /** The zone associated to a location group. */
  zone: DeliveryZone;
};
/** An auto-generated type for paginating through multiple DeliveryLocationGroupZones. */
type DeliveryLocationGroupZoneConnection = {
  __typename?: 'DeliveryLocationGroupZoneConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<DeliveryLocationGroupZoneEdge>; /** A list of nodes that are contained in DeliveryLocationGroupZoneEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<DeliveryLocationGroupZone>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one DeliveryLocationGroupZone and a cursor during pagination. */
type DeliveryLocationGroupZoneEdge = {
  __typename?: 'DeliveryLocationGroupZoneEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of DeliveryLocationGroupZoneEdge. */
  node: DeliveryLocationGroupZone;
};
/**
 * Information about the delivery method selected for a [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder). Includes the method type, expected delivery timeframe, and any additional information needed for delivery.
 *
 * The delivery method stores details from checkout such as the carrier, branded promises like Shop Promise, and the delivery option name shown to the buyer. Additional information like delivery instructions or contact phone numbers helps fulfill the [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) correctly.
 */
type DeliveryMethod = Node & {
  __typename?: 'DeliveryMethod'; /** The Additional information to consider when performing the delivery. */
  additionalInformation?: Maybe<DeliveryMethodAdditionalInformation>; /** The branded promise that was presented to the buyer during checkout.  For example: Shop Promise. */
  brandedPromise?: Maybe<DeliveryBrandedPromise>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The latest delivery date and time when the fulfillment is expected to arrive at the buyer's location. */
  maxDeliveryDateTime?: Maybe<Scalars['DateTime']['output']>; /** The type of the delivery method. */
  methodType: DeliveryMethodType; /** The earliest delivery date and time when the fulfillment is expected to arrive at the buyer's location. */
  minDeliveryDateTime?: Maybe<Scalars['DateTime']['output']>; /** The name of the delivery option that was presented to the buyer during checkout. */
  presentedName?: Maybe<Scalars['String']['output']>; /** A reference to the shipping method. */
  serviceCode?: Maybe<Scalars['String']['output']>; /** Source reference is promise provider specific data associated with delivery promise. */
  sourceReference?: Maybe<Scalars['String']['output']>;
};
/** Additional information included on a delivery method that will help during the delivery process. */
type DeliveryMethodAdditionalInformation = {
  __typename?: 'DeliveryMethodAdditionalInformation'; /** The delivery instructions to follow when performing the delivery. */
  instructions?: Maybe<Scalars['String']['output']>; /** The phone number to contact when performing the delivery. */
  phone?: Maybe<Scalars['String']['output']>;
};
/**
 * A method definition contains the delivery rate and the conditions that must be met for the method to be
 * applied.
 */
type DeliveryMethodDefinition = Node & {
  __typename?: 'DeliveryMethodDefinition'; /** Whether this method definition is active. */
  active: Scalars['Boolean']['output']; /** The description of the method definition. Only available on shipping rates that are custom. */
  description?: Maybe<Scalars['String']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The method conditions that must pass for this method definition to be applied to an order. */
  methodConditions: Array<DeliveryCondition>; /** The name of the method definition. */
  name: Scalars['String']['output']; /** The provided rate for this method definition, from a rate definition or participant. */
  rateProvider: DeliveryRateProvider;
};
/** An auto-generated type for paginating through multiple DeliveryMethodDefinitions. */
type DeliveryMethodDefinitionConnection = {
  __typename?: 'DeliveryMethodDefinitionConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<DeliveryMethodDefinitionEdge>; /** A list of nodes that are contained in DeliveryMethodDefinitionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<DeliveryMethodDefinition>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** The number of method definitions for a zone, separated into merchant-owned and participant definitions. */
type DeliveryMethodDefinitionCounts = {
  __typename?: 'DeliveryMethodDefinitionCounts'; /** The number of participant method definitions for the specified zone. */
  participantDefinitionsCount: Scalars['Int']['output']; /** The number of merchant-defined method definitions for the specified zone. */
  rateDefinitionsCount: Scalars['Int']['output'];
};
/** An auto-generated type which holds one DeliveryMethodDefinition and a cursor during pagination. */
type DeliveryMethodDefinitionEdge = {
  __typename?: 'DeliveryMethodDefinitionEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of DeliveryMethodDefinitionEdge. */
  node: DeliveryMethodDefinition;
};
/** Possible method types that a delivery method can have. */
declare enum DeliveryMethodType {
  /** The order is delivered using a local delivery service. */
  Local = 'LOCAL',
  /** Non-physical items, no delivery needed. */
  None = 'NONE',
  /** The order is delivered to a pickup point. */
  PickupPoint = 'PICKUP_POINT',
  /** The order is picked up by the customer. */
  PickUp = 'PICK_UP',
  /** In-store sale, no delivery needed. */
  Retail = 'RETAIL',
  /** The order is shipped. */
  Shipping = 'SHIPPING'
}
/**
 * A participant defines carrier-calculated rates for shipping services
 * with a possible merchant-defined fixed fee or a percentage-of-rate fee.
 */
type DeliveryParticipant = Node & {
  __typename?: 'DeliveryParticipant'; /** Whether to display new shipping services automatically to the customer when the service becomes available. */
  adaptToNewServicesFlag: Scalars['Boolean']['output']; /** The carrier used for this participant. */
  carrierService: DeliveryCarrierService; /** The merchant-defined fixed fee for this participant. */
  fixedFee?: Maybe<MoneyV2>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The carrier-specific services offered by the participant, and whether each service is active. */
  participantServices: Array<DeliveryParticipantService>; /** The merchant-defined percentage-of-rate fee for this participant. */
  percentageOfRateFee: Scalars['Float']['output'];
};
/** A mail service provided by the participant. */
type DeliveryParticipantService = {
  __typename?: 'DeliveryParticipantService'; /** Whether the service is active. */
  active: Scalars['Boolean']['output']; /** The name of the service. */
  name: Scalars['String']['output'];
};
/** How many product variants are in a profile. This count is capped at 500. */
type DeliveryProductVariantsCount = {
  __typename?: 'DeliveryProductVariantsCount'; /** Whether the count has reached the cap of 500. */
  capped: Scalars['Boolean']['output']; /** The product variant count. */
  count: Scalars['Int']['output'];
};
/**
 * A shipping profile that defines shipping rates for specific [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects. Delivery profiles determine which products can ship from which [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects to which zones, and at what rates.
 *
 * Profiles can associate with [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects to provide custom shipping rules for subscriptions, such as free shipping or restricted delivery zones. The default profile applies to all products that aren't assigned to other profiles.
 *
 * Learn more about [building delivery profiles](https://shopify.dev/apps/build/purchase-options/deferred/delivery-and-deferment/build-delivery-profiles).
 */
type DeliveryProfile = Node & {
  __typename?: 'DeliveryProfile'; /** The number of active shipping rates for the profile. */
  activeMethodDefinitionsCount: Scalars['Int']['output']; /** Whether this is the default profile. */
  default: Scalars['Boolean']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /**
   * Whether this shop has enabled legacy compatibility mode for delivery profiles.
   * @deprecated Legacy mode profiles are no longer supported. This will be removed in 2026-04.
   */
  legacyMode: Scalars['Boolean']['output']; /** The number of locations without rates defined. */
  locationsWithoutRatesCount: Scalars['Int']['output']; /** The name of the delivery profile. */
  name: Scalars['String']['output']; /** The number of active origin locations for the profile. */
  originLocationCount: Scalars['Int']['output']; /** How many product variants are in this profile. */
  productVariantsCount?: Maybe<Count>;
  /**
   * How many product variants are in this profile.
   * @deprecated Use `productVariantsCount` instead.
   */
  productVariantsCountV2: DeliveryProductVariantsCount; /** The products and variants associated with this profile. */
  profileItems: DeliveryProfileItemConnection; /** The location groups and associated zones using this profile. */
  profileLocationGroups: Array<DeliveryProfileLocationGroup>; /** Selling plan groups associated with the specified delivery profile. */
  sellingPlanGroups: SellingPlanGroupConnection; /** List of locations that haven't been assigned to a location group for this profile. */
  unassignedLocations: Array<Location>; /** List of locations that have not been assigned to a location group for this profile. */
  unassignedLocationsPaginated: LocationConnection; /** The version of the delivery profile. */
  version: Scalars['Int']['output']; /** The number of countries with active rates to deliver to. */
  zoneCountryCount: Scalars['Int']['output'];
};
/** A product and the subset of associated variants that are part of this delivery profile. */
type DeliveryProfileItem = Node & {
  __typename?: 'DeliveryProfileItem'; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** A product associated with this profile. */
  product: Product; /** The product variants associated with this delivery profile. */
  variants: ProductVariantConnection;
};
/** An auto-generated type for paginating through multiple DeliveryProfileItems. */
type DeliveryProfileItemConnection = {
  __typename?: 'DeliveryProfileItemConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<DeliveryProfileItemEdge>; /** A list of nodes that are contained in DeliveryProfileItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<DeliveryProfileItem>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one DeliveryProfileItem and a cursor during pagination. */
type DeliveryProfileItemEdge = {
  __typename?: 'DeliveryProfileItemEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of DeliveryProfileItemEdge. */
  node: DeliveryProfileItem;
};
/** Links a location group with zones. Both are associated to a delivery profile. */
type DeliveryProfileLocationGroup = {
  __typename?: 'DeliveryProfileLocationGroup'; /** The countries already selected in any zone for the specified location group. */
  countriesInAnyZone: Array<DeliveryCountryAndZone>; /** The collection of locations that make up the specified location group. */
  locationGroup: DeliveryLocationGroup; /** The applicable zones associated to the specified location group. */
  locationGroupZones: DeliveryLocationGroupZoneConnection;
};
/** A region that is used to define a shipping zone. */
type DeliveryProvince = Node & {
  __typename?: 'DeliveryProvince'; /** The code of the region. */
  code: Scalars['String']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The full name of the region. */
  name: Scalars['String']['output']; /** The translated name of the region. The translation returned is based on the system's locale. */
  translatedName: Scalars['String']['output'];
};
/** The merchant-defined rate of the [DeliveryMethodDefinition](https://shopify.dev/api/admin-graphql/latest/objects/DeliveryMethodDefinition). */
type DeliveryRateDefinition = Node & {
  __typename?: 'DeliveryRateDefinition'; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The price of this rate. */
  price: MoneyV2;
};
/** A rate provided by a merchant-defined rate or a participant. */
type DeliveryRateProvider = DeliveryParticipant | DeliveryRateDefinition;
/** A zone is a group of countries that have the same shipping rates. Customers can order products from a store only if they choose a shipping destination that's included in one of the store's zones. */
type DeliveryZone = Node & {
  __typename?: 'DeliveryZone'; /** The list of countries within the zone. */
  countries: Array<DeliveryCountry>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The name of the zone. */
  name: Scalars['String']['output'];
};
/** Configuration of the deposit. */
type DepositConfiguration = DepositPercentage;
/** A percentage deposit. */
type DepositPercentage = {
  __typename?: 'DepositPercentage'; /** The percentage value of the deposit. */
  percentage: Scalars['Float']['output'];
};
/** Digital wallet, such as Apple Pay, which can be used for accelerated checkouts. */
declare enum DigitalWallet {
  /** Amazon Pay. */
  AmazonPay = 'AMAZON_PAY',
  /** Android Pay. */
  AndroidPay = 'ANDROID_PAY',
  /** Apple Pay. */
  ApplePay = 'APPLE_PAY',
  /** Facebook Pay. */
  FacebookPay = 'FACEBOOK_PAY',
  /** Google Pay. */
  GooglePay = 'GOOGLE_PAY',
  /** Shopify Pay. */
  ShopifyPay = 'SHOPIFY_PAY'
}
/** A discount offers promotional value and can be applied by entering a code or automatically when conditions are met. Discounts can provide fixed amounts, percentage reductions, free shipping, or Buy X Get Y (BXGY) benefits on specific products or the entire order. For more complex scenarios, developers can use Function-backed discounts to create custom discount configurations. */
type Discount = DiscountAutomaticApp | DiscountAutomaticBasic | DiscountAutomaticBxgy | DiscountAutomaticFreeShipping | DiscountCodeApp | DiscountCodeBasic | DiscountCodeBxgy | DiscountCodeFreeShipping;
/**
 * The actual amount discounted on a line item or shipping line. While [`DiscountApplication`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DiscountApplication) captures the discount's intentions and rules, The `DiscountAllocation` object shows the final calculated discount amount applied to each line.
 *
 * The allocation includes the discounted amount in both shop and presentment currencies, with a reference to the originating discount application.
 */
type DiscountAllocation = {
  __typename?: 'DiscountAllocation';
  /**
   * The money amount that's allocated to a line based on the associated discount application.
   * @deprecated Use `allocatedAmountSet` instead.
   */
  allocatedAmount: MoneyV2; /** The money amount that's allocated to a line based on the associated discount application in shop and presentment currencies. */
  allocatedAmountSet: MoneyBag; /** The discount application that the allocated amount originated from. */
  discountApplication: DiscountApplication;
};
/** The fixed amount value of a discount, and whether the amount is applied to each entitled item or spread evenly across the entitled items. */
type DiscountAmount = {
  __typename?: 'DiscountAmount'; /** The value of the discount. */
  amount: MoneyV2; /** If true, then the discount is applied to each of the entitled items. If false, then the amount is split across all of the entitled items. */
  appliesOnEachItem: Scalars['Boolean']['output'];
};
/**
 * Discount applications capture the intentions of a discount source at
 * the time of application on an order's line items or shipping lines.
 *
 * Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.
 */
type DiscountApplication = {
  /** The method by which the discount's value is applied to its entitled items. */allocationMethod: DiscountApplicationAllocationMethod;
  /**
   * An ordered index that can be used to identify the discount application and indicate the precedence
   * of the discount application for calculations.
   */
  index: Scalars['Int']['output']; /** How the discount amount is distributed on the discounted lines. */
  targetSelection: DiscountApplicationTargetSelection; /** Whether the discount is applied on line items or shipping lines. */
  targetType: DiscountApplicationTargetType; /** The value of the discount application. */
  value: PricingValue;
};
/** The method by which the discount's value is allocated onto its entitled lines. */
declare enum DiscountApplicationAllocationMethod {
  /** The value is spread across all entitled lines. */
  Across = 'ACROSS',
  /** The value is applied onto every entitled line. */
  Each = 'EACH',
  /**
   * The value is specifically applied onto a particular line.
   * @deprecated Use ACROSS instead.
   */
  One = 'ONE'
}
/** An auto-generated type for paginating through multiple DiscountApplications. */
type DiscountApplicationConnection = {
  __typename?: 'DiscountApplicationConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<DiscountApplicationEdge>; /** A list of nodes that are contained in DiscountApplicationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<DiscountApplication>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one DiscountApplication and a cursor during pagination. */
type DiscountApplicationEdge = {
  __typename?: 'DiscountApplicationEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of DiscountApplicationEdge. */
  node: DiscountApplication;
};
/**
 * The lines on the order to which the discount is applied, of the type defined by
 * the discount application's `targetType`. For example, the value `ENTITLED`, combined with a `targetType` of
 * `LINE_ITEM`, applies the discount on all line items that are entitled to the discount.
 * The value `ALL`, combined with a `targetType` of `SHIPPING_LINE`, applies the discount on all shipping lines.
 */
declare enum DiscountApplicationTargetSelection {
  /** The discount is allocated onto all the lines. */
  All = 'ALL',
  /** The discount is allocated onto only the lines that it's entitled for. */
  Entitled = 'ENTITLED',
  /** The discount is allocated onto explicitly chosen lines. */
  Explicit = 'EXPLICIT'
}
/** The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards. */
declare enum DiscountApplicationTargetType {
  /** The discount applies onto line items. */
  LineItem = 'LINE_ITEM',
  /** The discount applies onto shipping lines. */
  ShippingLine = 'SHIPPING_LINE'
}
/**
 * The types of automatic discounts applied in the cart and at checkout when an order meets specific criteria.
 *
 * Includes [`DiscountAutomaticApp`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp) for custom logic using the [Discount Function API](https://shopify.dev/docs/api/functions/latest/discount), [`DiscountAutomaticBasic`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic) for percentage or fixed amount reductions, [`DiscountAutomaticBxgy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy) for Buy X Get Y promotions, and [`DiscountAutomaticFreeShipping`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping) for delivery incentives.
 */
type DiscountAutomatic = DiscountAutomaticApp | DiscountAutomaticBasic | DiscountAutomaticBxgy | DiscountAutomaticFreeShipping;
/**
 * The `DiscountAutomaticApp` object stores information about automatic discounts
 * that are managed by an app using
 * [Shopify Functions](https://shopify.dev/docs/apps/build/functions).
 * Use `DiscountAutomaticApp`when you need advanced, custom, or
 * dynamic discount capabilities that aren't supported by
 * [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).
 *
 * Learn more about creating
 * [custom discount functionality](https://shopify.dev/docs/apps/build/discounts/build-discount-function).
 *
 * > Note:
 * > The [`DiscountCodeApp`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp)
 * object has similar functionality to the `DiscountAutomaticApp` object, with the exception that `DiscountCodeApp`
 * stores information about discount codes that are managed by an app using Shopify Functions.
 * >
 * > API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.
 */
type DiscountAutomaticApp = {
  __typename?: 'DiscountAutomaticApp';
  /**
   * The details about the app extension that's providing the
   * [discount type](https://help.shopify.com/manual/discounts/discount-types).
   * This information includes the app extension's name and
   * [client ID](https://shopify.dev/docs/apps/build/authentication-authorization/client-secrets),
   * [App Bridge configuration](https://shopify.dev/docs/api/app-bridge),
   * [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations),
   * [function ID](https://shopify.dev/docs/apps/build/functions/input-output/metafields-for-input-queries),
   * and other metadata about the discount type, including the discount type's name and description.
   */
  appDiscountType: AppDiscountType; /** Whether the discount applies on one-time purchases. */
  appliesOnOneTimePurchase: Scalars['Boolean']['output'];
  /**
   * Whether the discount applies on subscription items.
   * [Subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/offer-subscription-discounts)
   * enable customers to purchase products
   * on a recurring basis.
   */
  appliesOnSubscription: Scalars['Boolean']['output'];
  /**
   * The number of times that the discount has been used.
   * For example, if a "Buy 3, Get 1 Free" t-shirt discount
   * is automatically applied in 200 transactions, then the
   * discount has been used 200 times.
   * This value is updated asynchronously. As a result,
   * it might be lower than the actual usage count until the
   * asynchronous process is completed.
   */
  asyncUsageCount: Scalars['Int']['output'];
  /**
   * The
   * [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * that you can use in combination with
   * [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).
   */
  combinesWith: DiscountCombinesWith; /** The context defining which buyers can use the discount. */
  context: DiscountContext; /** The date and time when the discount was created. */
  createdAt: Scalars['DateTime']['output'];
  /**
   * The
   * [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * that's used to control how discounts can be combined.
   * @deprecated Use `discountClasses` instead.
   */
  discountClass: DiscountClass; /** The classes of the discount. */
  discountClasses: Array<DiscountClass>;
  /**
   * The [globally-unique ID](https://shopify.dev/docs/api/usage/gids)
   * for the discount.
   */
  discountId: Scalars['ID']['output'];
  /**
   * The date and time when the discount expires and is no longer available to customers.
   * For discounts without a fixed expiration date, specify `null`.
   */
  endsAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The [error history](https://shopify.dev/docs/apps/build/functions/monitoring-and-errors)
   * for the latest version of the discount type that the app provides.
   */
  errorHistory?: Maybe<FunctionsErrorHistory>;
  /**
   * The number of billing cycles for which the discount can be applied,
   * which is useful for subscription-based discounts. For example, if you set this field
   * to `3`, then the discount only applies to the first three billing cycles of a
   * subscription. If you specify `0`, then the discount applies indefinitely.
   */
  recurringCycleLimit: Scalars['Int']['output']; /** The date and time when the discount becomes active and is available to customers. */
  startsAt: Scalars['DateTime']['output'];
  /**
   * The status of the discount that describes its availability,
   * expiration, or pending activation.
   */
  status: DiscountStatus; /** The discount's name that displays to merchants in the Shopify admin and to customers. */
  title: Scalars['String']['output']; /** The date and time when the discount was updated. */
  updatedAt: Scalars['DateTime']['output'];
};
/**
 * The `DiscountAutomaticBasic` object lets you manage
 * [amount off discounts](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount)
 * that are automatically applied on a cart and at checkout. Amount off discounts give customers a
 * fixed value or a percentage off the products in an order, but don't apply to shipping costs.
 *
 * The `DiscountAutomaticBasic` object stores information about automatic amount off discounts that apply to
 * specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts),
 * [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections),
 * or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).
 *
 * Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts),
 * including limitations and considerations.
 *
 * > Note:
 * > The [`DiscountCodeBasic`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic)
 * object has similar functionality to the `DiscountAutomaticBasic` object, but customers need to enter a code to
 * receive a discount.
 * >
 * > API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.
 */
type DiscountAutomaticBasic = {
  __typename?: 'DiscountAutomaticBasic';
  /**
   * The number of times that the discount has been used.
   * For example, if a "Buy 3, Get 1 Free" t-shirt discount
   * is automatically applied in 200 transactions, then the
   * discount has been used 200 times.
   * This value is updated asynchronously. As a result,
   * it might be lower than the actual usage count until the
   * asynchronous process is completed.
   */
  asyncUsageCount: Scalars['Int']['output'];
  /**
   * The
   * [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * that you can use in combination with
   * [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).
   */
  combinesWith: DiscountCombinesWith; /** The context defining which buyers can use the discount. */
  context: DiscountContext; /** The date and time when the discount was created. */
  createdAt: Scalars['DateTime']['output']; /** The items in the order that qualify for the discount, their quantities, and the total value of the discount. */
  customerGets: DiscountCustomerGets;
  /**
   * The [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * that's used to control how discounts can be combined.
   * @deprecated Use `discountClasses` instead.
   */
  discountClass: MerchandiseDiscountClass; /** The classes of the discount. */
  discountClasses: Array<DiscountClass>;
  /**
   * The date and time when the discount expires and is no longer available to customers.
   * For discounts without a fixed expiration date, specify `null`.
   */
  endsAt?: Maybe<Scalars['DateTime']['output']>; /** The minimum subtotal or quantity of items that are required for the discount to be applied. */
  minimumRequirement?: Maybe<DiscountMinimumRequirement>;
  /**
   * The number of billing cycles for which the discount can be applied,
   * which is useful for subscription-based discounts. For example, if you set this field
   * to `3`, then the discount only applies to the first three billing cycles of a
   * subscription. If you specify `0`, then the discount applies indefinitely.
   */
  recurringCycleLimit: Scalars['Int']['output'];
  /**
   * An abbreviated version of the discount
   * [`summary`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic#field-summary)
   * field.
   */
  shortSummary: Scalars['String']['output']; /** The date and time when the discount becomes active and is available to customers. */
  startsAt: Scalars['DateTime']['output'];
  /**
   * The status of the discount that describes its availability,
   * expiration, or pending activation.
   */
  status: DiscountStatus;
  /**
   * A detailed explanation of what the discount is,
   * who can use it, when and where it applies, and any associated
   * rules or limitations.
   */
  summary: Scalars['String']['output']; /** The discount's name that displays to merchants in the Shopify admin and to customers. */
  title: Scalars['String']['output']; /** The date and time when the discount was updated. */
  updatedAt: Scalars['DateTime']['output'];
  /**
   * The number of times that the discount has been used.
   * @deprecated Use `asyncUsageCount` instead.
   */
  usageCount: Scalars['Int']['output'];
};
/**
 * The `DiscountAutomaticBxgy` object lets you manage
 * [buy X get Y discounts (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y)
 * that are automatically applied on a cart and at checkout. BXGY discounts incentivize customers by offering
 * them additional items at a discounted price or for free when they purchase a specified quantity of items.
 *
 * The `DiscountAutomaticBxgy` object stores information about automatic BXGY discounts that apply to
 * specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts),
 * [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections),
 * or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).
 *
 * Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts),
 * including limitations and considerations.
 *
 * > Note:
 * > The [`DiscountCodeBxgy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy)
 * object has similar functionality to the `DiscountAutomaticBxgy` object, but customers need to enter a code to
 * receive a discount.
 * >
 * > API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.
 */
type DiscountAutomaticBxgy = HasEvents & Node & {
  __typename?: 'DiscountAutomaticBxgy';
  /**
   * The number of times that the discount has been used.
   * For example, if a "Buy 3, Get 1 Free" t-shirt discount
   * is automatically applied in 200 transactions, then the
   * discount has been used 200 times.
   * This value is updated asynchronously. As a result,
   * it might be lower than the actual usage count until the
   * asynchronous process is completed.
   */
  asyncUsageCount: Scalars['Int']['output'];
  /**
   * The
   * [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * that you can use in combination with
   * [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).
   */
  combinesWith: DiscountCombinesWith; /** The context defining which buyers can use the discount. */
  context: DiscountContext; /** The date and time when the discount was created. */
  createdAt: Scalars['DateTime']['output']; /** The items eligible for the discount and the required quantity of each to receive the discount. */
  customerBuys: DiscountCustomerBuys; /** The items in the order that qualify for the discount, their quantities, and the total value of the discount. */
  customerGets: DiscountCustomerGets;
  /**
   * The [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * that's used to control how discounts can be combined.
   * @deprecated Use `discountClasses` instead.
   */
  discountClass: MerchandiseDiscountClass; /** The classes of the discount. */
  discountClasses: Array<DiscountClass>;
  /**
   * The date and time when the discount expires and is no longer available to customers.
   * For discounts without a fixed expiration date, specify `null`.
   */
  endsAt?: Maybe<Scalars['DateTime']['output']>; /** The paginated list of events associated with the host subject. */
  events: EventConnection;
  /**
   * A legacy unique ID for the discount.
   * @deprecated Use DiscountAutomaticNode.id instead.
   */
  id: Scalars['ID']['output']; /** The date and time when the discount becomes active and is available to customers. */
  startsAt: Scalars['DateTime']['output'];
  /**
   * The status of the discount that describes its availability,
   * expiration, or pending activation.
   */
  status: DiscountStatus;
  /**
   * A detailed explanation of what the discount is,
   * who can use it, when and where it applies, and any associated
   * rules or limitations.
   */
  summary: Scalars['String']['output']; /** The discount's name that displays to merchants in the Shopify admin and to customers. */
  title: Scalars['String']['output']; /** The date and time when the discount was updated. */
  updatedAt: Scalars['DateTime']['output'];
  /**
   * The number of times that the discount has been used.
   * @deprecated Use `asyncUsageCount` instead.
   */
  usageCount: Scalars['Int']['output']; /** The maximum number of times that the discount can be applied to an order. */
  usesPerOrderLimit?: Maybe<Scalars['Int']['output']>;
};
/**
 * The `DiscountAutomaticFreeShipping` object lets you manage
 * [free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping)
 * that are automatically applied on a cart and at checkout. Free shipping discounts are promotional deals that
 * merchants offer to customers to waive shipping costs and encourage online purchases.
 *
 * The `DiscountAutomaticFreeShipping` object stores information about automatic free shipping discounts that apply to
 * specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts),
 * [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections),
 * or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).
 *
 * Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts),
 * including limitations and considerations.
 *
 * > Note:
 * > The [`DiscountCodeFreeShipping`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping)
 * object has similar functionality to the `DiscountAutomaticFreeShipping` object, but customers need to enter a code to
 * receive a discount.
 * >
 * > API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.
 */
type DiscountAutomaticFreeShipping = {
  __typename?: 'DiscountAutomaticFreeShipping';
  /**
   * Whether the discount applies on one-time purchases.
   * A one-time purchase is a transaction where you pay a
   * single time for a product, without any ongoing
   * commitments or recurring charges.
   */
  appliesOnOneTimePurchase: Scalars['Boolean']['output'];
  /**
   * Whether the discount applies on subscription items.
   * [Subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/offer-subscription-discounts)
   * enable customers to purchase products
   * on a recurring basis.
   */
  appliesOnSubscription: Scalars['Boolean']['output'];
  /**
   * The number of times that the discount has been used.
   * For example, if a "Buy 3, Get 1 Free" t-shirt discount
   * is automatically applied in 200 transactions, then the
   * discount has been used 200 times.
   * This value is updated asynchronously. As a result,
   * it might be lower than the actual usage count until the
   * asynchronous process is completed.
   */
  asyncUsageCount: Scalars['Int']['output'];
  /**
   * The
   * [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * that you can use in combination with
   * [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).
   */
  combinesWith: DiscountCombinesWith; /** The context defining which buyers can use the discount. */
  context: DiscountContext; /** The date and time when the discount was created. */
  createdAt: Scalars['DateTime']['output'];
  /**
   * The countries that qualify for the discount.
   * You can define
   * [a list of countries](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCountries)
   * or specify [all countries](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCountryAll)
   * to be eligible for the discount.
   */
  destinationSelection: DiscountShippingDestinationSelection;
  /**
   * The [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * that's used to control how discounts can be combined.
   * @deprecated Use `discountClasses` instead.
   */
  discountClass: ShippingDiscountClass; /** The classes of the discount. */
  discountClasses: Array<DiscountClass>;
  /**
   * The date and time when the discount expires and is no longer available to customers.
   * For discounts without a fixed expiration date, specify `null`.
   */
  endsAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Whether there are
   * [timeline comments](https://help.shopify.com/manual/discounts/managing-discount-codes#use-the-discount-timeline)
   * associated with the discount.
   */
  hasTimelineComment: Scalars['Boolean']['output']; /** The maximum shipping price amount accepted to qualify for the discount. */
  maximumShippingPrice?: Maybe<MoneyV2>; /** The minimum subtotal or quantity of items that are required for the discount to be applied. */
  minimumRequirement?: Maybe<DiscountMinimumRequirement>;
  /**
   * The number of billing cycles for which the discount can be applied,
   * which is useful for subscription-based discounts. For example, if you set this field
   * to `3`, then the discount only applies to the first three billing cycles of a
   * subscription. If you specify `0`, then the discount applies indefinitely.
   */
  recurringCycleLimit: Scalars['Int']['output'];
  /**
   * An abbreviated version of the discount
   * [`summary`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping#field-summary)
   * field.
   */
  shortSummary: Scalars['String']['output']; /** The date and time when the discount becomes active and is available to customers. */
  startsAt: Scalars['DateTime']['output'];
  /**
   * The status of the discount that describes its availability,
   * expiration, or pending activation.
   */
  status: DiscountStatus;
  /**
   * A detailed explanation of what the discount is,
   * who can use it, when and where it applies, and any associated
   * rules or limitations.
   */
  summary: Scalars['String']['output']; /** The discount's name that displays to merchants in the Shopify admin and to customers. */
  title: Scalars['String']['output']; /** The total sales from orders where the discount was used. */
  totalSales?: Maybe<MoneyV2>; /** The date and time when the discount was updated. */
  updatedAt: Scalars['DateTime']['output'];
};
/**
 * The `DiscountAutomaticNode` object enables you to manage [automatic discounts](https://help.shopify.com/manual/discounts/discount-types#automatic-discounts) that are applied when an order meets specific criteria. You can create amount off, free shipping, or buy X get Y automatic discounts. For example, you can offer customers a free shipping discount that applies when conditions are met. Or you can offer customers a buy X get Y discount that's automatically applied when customers spend a specified amount of money, or a specified quantity of products.
 *
 * Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts),
 * including related queries, mutations, limitations, and considerations.
 */
type DiscountAutomaticNode = HasEvents & HasMetafieldDefinitions & HasMetafields & Node & {
  __typename?: 'DiscountAutomaticNode'; /** A discount that's applied automatically when an order meets specific criteria. Learn more about [automatic discounts](https://help.shopify.com/manual/discounts/discount-types#automatic-discounts). */
  automaticDiscount: DiscountAutomatic; /** The paginated list of events associated with the host subject. */
  events: EventConnection; /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   */
  metafield?: Maybe<Metafield>;
  /**
   * List of metafield definitions.
   * @deprecated This field will be removed in a future version. Use `QueryRoot.metafieldDefinitions` instead.
   */
  metafieldDefinitions: MetafieldDefinitionConnection;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   */
  metafields: MetafieldConnection;
};
/** All buyers are eligible for the discount. */
declare enum DiscountBuyerSelection {
  /** All buyers are eligible for the discount. */
  All = 'ALL'
}
/**
 * Indicates that a discount applies to all buyers without restrictions, enabling universal promotions that reach every customer. This selection removes buyer-specific limitations from discount eligibility.
 *
 * For example, a flash sale or grand opening promotion would target all buyers to maximize participation and store visibility.
 *
 * Learn more about [discount targeting](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountApplication).
 */
type DiscountBuyerSelectionAll = {
  __typename?: 'DiscountBuyerSelectionAll'; /** All buyers are eligible for the discount. */
  all: DiscountBuyerSelection;
};
/**
 * The [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
 * that's used to control how discounts can be combined.
 */
declare enum DiscountClass {
  /**
   * The discount is combined with an
   * [order discount](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * class.
   */
  Order = 'ORDER',
  /**
   * The discount is combined with a
   * [product discount](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * class.
   */
  Product = 'PRODUCT',
  /**
   * The discount is combined with a
   * [shipping discount](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * class.
   */
  Shipping = 'SHIPPING'
}
/** The type of discount associated with the discount code. For example, the discount code might offer a basic discount of a fixed percentage, or a fixed amount, on specific products or the order. Alternatively, the discount might offer the customer free shipping on their order. A third option is a Buy X, Get Y (BXGY) discount, which offers a customer discounts on select products if they add a specific product to their order. */
type DiscountCode = DiscountCodeApp | DiscountCodeBasic | DiscountCodeBxgy | DiscountCodeFreeShipping;
/**
 * The `DiscountCodeApp` object stores information about code discounts
 * that are managed by an app using
 * [Shopify Functions](https://shopify.dev/docs/apps/build/functions).
 * Use `DiscountCodeApp` when you need advanced, custom, or
 * dynamic discount capabilities that aren't supported by
 * [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).
 *
 * Learn more about creating
 * [custom discount functionality](https://shopify.dev/docs/apps/build/discounts/build-discount-function).
 *
 * > Note:
 * > The [`DiscountAutomaticApp`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp)
 * object has similar functionality to the `DiscountCodeApp` object, with the exception that `DiscountAutomaticApp`
 * stores information about automatic discounts that are managed by an app using Shopify Functions.
 */
type DiscountCodeApp = {
  __typename?: 'DiscountCodeApp';
  /**
   * The details about the app extension that's providing the
   * [discount type](https://help.shopify.com/manual/discounts/discount-types).
   * This information includes the app extension's name and
   * [client ID](https://shopify.dev/docs/apps/build/authentication-authorization/client-secrets),
   * [App Bridge configuration](https://shopify.dev/docs/api/app-bridge),
   * [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations),
   * [function ID](https://shopify.dev/docs/apps/build/functions/input-output/metafields-for-input-queries),
   * and other metadata about the discount type, including the discount type's name and description.
   */
  appDiscountType: AppDiscountType; /** Whether the discount applies on regular one-time-purchase items. */
  appliesOnOneTimePurchase: Scalars['Boolean']['output']; /** Whether the discount applies to subscriptions items. */
  appliesOnSubscription: Scalars['Boolean']['output']; /** Whether a customer can only use the discount once. */
  appliesOncePerCustomer: Scalars['Boolean']['output'];
  /**
   * The number of times that the discount has been used.
   * For example, if a "Buy 3, Get 1 Free" t-shirt discount
   * is automatically applied in 200 transactions, then the
   * discount has been used 200 times.
   * This value is updated asynchronously. As a result,
   * it might be lower than the actual usage count until the
   * asynchronous process is completed.
   */
  asyncUsageCount: Scalars['Int']['output']; /** A list codes that customers can use to redeem the discount. */
  codes: DiscountRedeemCodeConnection; /** The number of codes that a customer can use to redeem the discount. */
  codesCount?: Maybe<Count>;
  /**
   * The
   * [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * that you can use in combination with
   * [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).
   */
  combinesWith: DiscountCombinesWith; /** The context defining which buyers can use the discount. */
  context: DiscountContext; /** The date and time when the discount was created. */
  createdAt: Scalars['DateTime']['output'];
  /**
   * The customers that can use the discount.
   * @deprecated Use `context` instead.
   */
  customerSelection: DiscountCustomerSelection;
  /**
   * The
   * [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * that's used to control how discounts can be combined.
   * @deprecated Use `discountClasses` instead.
   */
  discountClass: DiscountClass; /** The classes of the discount. */
  discountClasses: Array<DiscountClass>;
  /**
   * The [globally-unique ID](https://shopify.dev/docs/api/usage/gids)
   * for the discount.
   */
  discountId: Scalars['ID']['output'];
  /**
   * The date and time when the discount expires and is no longer available to customers.
   * For discounts without a fixed expiration date, specify `null`.
   */
  endsAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The [error history](https://shopify.dev/docs/apps/build/functions/monitoring-and-errors)
   * for the latest version of the discount type that the app provides.
   */
  errorHistory?: Maybe<FunctionsErrorHistory>;
  /**
   * Whether there are
   * [timeline comments](https://help.shopify.com/manual/discounts/managing-discount-codes#use-the-discount-timeline)
   * associated with the discount.
   */
  hasTimelineComment: Scalars['Boolean']['output'];
  /**
   * The number of billing cycles for which the discount can be applied,
   * which is useful for subscription-based discounts. For example, if you set this field
   * to `3`, then the discount only applies to the first three billing cycles of a
   * subscription. If you specify `0`, then the discount applies indefinitely.
   */
  recurringCycleLimit?: Maybe<Scalars['Int']['output']>; /** A list of URLs that the app can use to share the discount. */
  shareableUrls: Array<DiscountShareableUrl>; /** The date and time when the discount becomes active and is available to customers. */
  startsAt: Scalars['DateTime']['output'];
  /**
   * The status of the discount that describes its availability,
   * expiration, or pending activation.
   */
  status: DiscountStatus; /** The discount's name that displays to merchants in the Shopify admin and to customers. */
  title: Scalars['String']['output']; /** The total sales from orders where the discount was used. */
  totalSales?: Maybe<MoneyV2>; /** The date and time when the discount was updated. */
  updatedAt: Scalars['DateTime']['output'];
  /**
   * The maximum number of times the discount can be redeemed.
   * For unlimited usage, specify `null`.
   */
  usageLimit?: Maybe<Scalars['Int']['output']>;
};
/**
 * The `DiscountCodeBasic` object lets you manage
 * [amount off discounts](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount)
 * that are applied on a cart and at checkout when a customer enters a code. Amount off discounts give customers a
 * fixed value or a percentage off the products in an order, but don't apply to shipping costs.
 *
 * The `DiscountCodeBasic` object stores information about amount off code discounts that apply to
 * specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts),
 * [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections),
 * or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).
 *
 * Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts),
 * including limitations and considerations.
 *
 * > Note:
 * > The [`DiscountAutomaticBasic`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic)
 * object has similar functionality to the `DiscountCodeBasic` object, but discounts are automatically applied,
 * without the need for customers to enter a code.
 */
type DiscountCodeBasic = {
  __typename?: 'DiscountCodeBasic'; /** Whether a customer can only use the discount once. */
  appliesOncePerCustomer: Scalars['Boolean']['output'];
  /**
   * The number of times that the discount has been used.
   * For example, if a "Buy 3, Get 1 Free" t-shirt discount
   * is automatically applied in 200 transactions, then the
   * discount has been used 200 times.
   * This value is updated asynchronously. As a result,
   * it might be lower than the actual usage count until the
   * asynchronous process is completed.
   */
  asyncUsageCount: Scalars['Int']['output']; /** A list codes that customers can use to redeem the discount. */
  codes: DiscountRedeemCodeConnection; /** The number of codes that a customer can use to redeem the discount. */
  codesCount?: Maybe<Count>;
  /**
   * The
   * [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * that you can use in combination with
   * [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).
   */
  combinesWith: DiscountCombinesWith; /** The context defining which buyers can use the discount. */
  context: DiscountContext; /** The date and time when the discount was created. */
  createdAt: Scalars['DateTime']['output']; /** The items in the order that qualify for the discount, their quantities, and the total value of the discount. */
  customerGets: DiscountCustomerGets;
  /**
   * The customers that can use the discount.
   * @deprecated Use `context` instead.
   */
  customerSelection: DiscountCustomerSelection;
  /**
   * The [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * that's used to control how discounts can be combined.
   * @deprecated Use `discountClasses` instead.
   */
  discountClass: MerchandiseDiscountClass; /** The classes of the discount. */
  discountClasses: Array<DiscountClass>;
  /**
   * The date and time when the discount expires and is no longer available to customers.
   * For discounts without a fixed expiration date, specify `null`.
   */
  endsAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Whether there are
   * [timeline comments](https://help.shopify.com/manual/discounts/managing-discount-codes#use-the-discount-timeline)
   * associated with the discount.
   */
  hasTimelineComment: Scalars['Boolean']['output']; /** The minimum subtotal or quantity of items that are required for the discount to be applied. */
  minimumRequirement?: Maybe<DiscountMinimumRequirement>;
  /**
   * The number of billing cycles for which the discount can be applied,
   * which is useful for subscription-based discounts. For example, if you set this field
   * to `3`, then the discount only applies to the first three billing cycles of a
   * subscription. If you specify `0`, then the discount applies indefinitely.
   */
  recurringCycleLimit?: Maybe<Scalars['Int']['output']>; /** A list of URLs that the app can use to share the discount. */
  shareableUrls: Array<DiscountShareableUrl>;
  /**
   * An abbreviated version of the discount
   * [`summary`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-summary)
   * field.
   */
  shortSummary: Scalars['String']['output']; /** The date and time when the discount becomes active and is available to customers. */
  startsAt: Scalars['DateTime']['output'];
  /**
   * The status of the discount that describes its availability,
   * expiration, or pending activation.
   */
  status: DiscountStatus;
  /**
   * A detailed explanation of what the discount is,
   * who can use it, when and where it applies, and any associated
   * rules or limitations.
   */
  summary: Scalars['String']['output']; /** The discount's name that displays to merchants in the Shopify admin and to customers. */
  title: Scalars['String']['output']; /** The total sales from orders where the discount was used. */
  totalSales?: Maybe<MoneyV2>; /** The date and time when the discount was updated. */
  updatedAt: Scalars['DateTime']['output'];
  /**
   * The maximum number of times the discount can be redeemed.
   * For unlimited usage, specify `null`.
   */
  usageLimit?: Maybe<Scalars['Int']['output']>;
};
/**
 * The `DiscountCodeBxgy` object lets you manage
 * [buy X get Y discounts (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y)
 * that are applied on a cart and at checkout when a customer enters a code. BXGY discounts incentivize customers
 * by offering them additional items at a discounted price or for free when they purchase a specified quantity
 * of items.
 *
 * The `DiscountCodeBxgy` object stores information about BXGY code discounts that apply to
 * specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts),
 * [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections),
 * or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).
 *
 * Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts),
 * including limitations and considerations.
 *
 * > Note:
 * > The [`DiscountAutomaticBxgy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy)
 * object has similar functionality to the `DiscountCodeBxgy` object, but discounts are automatically applied,
 * without the need for customers to enter a code.
 */
type DiscountCodeBxgy = {
  __typename?: 'DiscountCodeBxgy'; /** Whether a customer can only use the discount once. */
  appliesOncePerCustomer: Scalars['Boolean']['output'];
  /**
   * The number of times that the discount has been used.
   * For example, if a "Buy 3, Get 1 Free" t-shirt discount
   * is automatically applied in 200 transactions, then the
   * discount has been used 200 times.
   * This value is updated asynchronously. As a result,
   * it might be lower than the actual usage count until the
   * asynchronous process is completed.
   */
  asyncUsageCount: Scalars['Int']['output']; /** A list codes that customers can use to redeem the discount. */
  codes: DiscountRedeemCodeConnection; /** The number of codes that a customer can use to redeem the discount. */
  codesCount?: Maybe<Count>;
  /**
   * The
   * [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * that you can use in combination with
   * [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).
   */
  combinesWith: DiscountCombinesWith; /** The context defining which buyers can use the discount. */
  context: DiscountContext; /** The date and time when the discount was created. */
  createdAt: Scalars['DateTime']['output']; /** The items eligible for the discount and the required quantity of each to receive the discount. */
  customerBuys: DiscountCustomerBuys; /** The items in the order that qualify for the discount, their quantities, and the total value of the discount. */
  customerGets: DiscountCustomerGets;
  /**
   * The customers that can use the discount.
   * @deprecated Use `context` instead.
   */
  customerSelection: DiscountCustomerSelection;
  /**
   * The [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * that's used to control how discounts can be combined.
   * @deprecated Use `discountClasses` instead.
   */
  discountClass: MerchandiseDiscountClass; /** The classes of the discount. */
  discountClasses: Array<DiscountClass>;
  /**
   * The date and time when the discount expires and is no longer available to customers.
   * For discounts without a fixed expiration date, specify `null`.
   */
  endsAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Whether there are
   * [timeline comments](https://help.shopify.com/manual/discounts/managing-discount-codes#use-the-discount-timeline)
   * associated with the discount.
   */
  hasTimelineComment: Scalars['Boolean']['output']; /** A list of URLs that the app can use to share the discount. */
  shareableUrls: Array<DiscountShareableUrl>; /** The date and time when the discount becomes active and is available to customers. */
  startsAt: Scalars['DateTime']['output'];
  /**
   * The status of the discount that describes its availability,
   * expiration, or pending activation.
   */
  status: DiscountStatus;
  /**
   * A detailed explanation of what the discount is,
   * who can use it, when and where it applies, and any associated
   * rules or limitations.
   */
  summary: Scalars['String']['output']; /** The discount's name that displays to merchants in the Shopify admin and to customers. */
  title: Scalars['String']['output']; /** The total sales from orders where the discount was used. */
  totalSales?: Maybe<MoneyV2>; /** The date and time when the discount was updated. */
  updatedAt: Scalars['DateTime']['output'];
  /**
   * The maximum number of times the discount can be redeemed.
   * For unlimited usage, specify `null`.
   */
  usageLimit?: Maybe<Scalars['Int']['output']>; /** The maximum number of times that the discount can be applied to an order. */
  usesPerOrderLimit?: Maybe<Scalars['Int']['output']>;
};
/**
 * The `DiscountCodeFreeShipping` object lets you manage
 * [free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping)
 * that are applied on a cart and at checkout when a customer enters a code. Free shipping discounts are
 * promotional deals that merchants offer to customers to waive shipping costs and encourage online purchases.
 *
 * The `DiscountCodeFreeShipping` object stores information about free shipping code discounts that apply to
 * specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts),
 * [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections),
 * or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).
 *
 * Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts),
 * including limitations and considerations.
 *
 * > Note:
 * > The
 * [`DiscountAutomaticFreeShipping`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping)
 * object has similar functionality to the `DiscountCodeFreeShipping` object, but discounts are automatically applied,
 * without the need for customers to enter a code.
 */
type DiscountCodeFreeShipping = {
  __typename?: 'DiscountCodeFreeShipping';
  /**
   * Whether the discount applies on one-time purchases.
   * A one-time purchase is a transaction where you pay a
   * single time for a product, without any ongoing
   * commitments or recurring charges.
   */
  appliesOnOneTimePurchase: Scalars['Boolean']['output'];
  /**
   * Whether the discount applies on subscription items.
   * [Subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/offer-subscription-discounts)
   * enable customers to purchase products
   * on a recurring basis.
   */
  appliesOnSubscription: Scalars['Boolean']['output']; /** Whether a customer can only use the discount once. */
  appliesOncePerCustomer: Scalars['Boolean']['output'];
  /**
   * The number of times that the discount has been used.
   * For example, if a "Buy 3, Get 1 Free" t-shirt discount
   * is automatically applied in 200 transactions, then the
   * discount has been used 200 times.
   * This value is updated asynchronously. As a result,
   * it might be lower than the actual usage count until the
   * asynchronous process is completed.
   */
  asyncUsageCount: Scalars['Int']['output']; /** A list codes that customers can use to redeem the discount. */
  codes: DiscountRedeemCodeConnection; /** The number of codes that a customer can use to redeem the discount. */
  codesCount?: Maybe<Count>;
  /**
   * The
   * [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * that you can use in combination with
   * [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).
   */
  combinesWith: DiscountCombinesWith; /** The context defining which buyers can use the discount. */
  context: DiscountContext; /** The date and time when the discount was created. */
  createdAt: Scalars['DateTime']['output'];
  /**
   * The customers that can use the discount.
   * @deprecated Use `context` instead.
   */
  customerSelection: DiscountCustomerSelection;
  /**
   * The countries that qualify for the discount.
   * You can define
   * [a list of countries](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCountries)
   * or specify [all countries](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCountryAll)
   * to be eligible for the discount.
   */
  destinationSelection: DiscountShippingDestinationSelection;
  /**
   * The [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * that's used to control how discounts can be combined.
   * @deprecated Use `discountClasses` instead.
   */
  discountClass: ShippingDiscountClass; /** The classes of the discount. */
  discountClasses: Array<DiscountClass>;
  /**
   * The date and time when the discount expires and is no longer available to customers.
   * For discounts without a fixed expiration date, specify `null`.
   */
  endsAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Whether there are
   * [timeline comments](https://help.shopify.com/manual/discounts/managing-discount-codes#use-the-discount-timeline)
   * associated with the discount.
   */
  hasTimelineComment: Scalars['Boolean']['output']; /** The maximum shipping price amount accepted to qualify for the discount. */
  maximumShippingPrice?: Maybe<MoneyV2>; /** The minimum subtotal or quantity of items that are required for the discount to be applied. */
  minimumRequirement?: Maybe<DiscountMinimumRequirement>;
  /**
   * The number of billing cycles for which the discount can be applied,
   * which is useful for subscription-based discounts. For example, if you set this field
   * to `3`, then the discount only applies to the first three billing cycles of a
   * subscription. If you specify `0`, then the discount applies indefinitely.
   */
  recurringCycleLimit?: Maybe<Scalars['Int']['output']>; /** A list of URLs that the app can use to share the discount. */
  shareableUrls: Array<DiscountShareableUrl>;
  /**
   * An abbreviated version of the discount
   * [`summary`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-summary)
   * field.
   */
  shortSummary: Scalars['String']['output']; /** The date and time when the discount becomes active and is available to customers. */
  startsAt: Scalars['DateTime']['output'];
  /**
   * The status of the discount that describes its availability,
   * expiration, or pending activation.
   */
  status: DiscountStatus;
  /**
   * A detailed explanation of what the discount is,
   * who can use it, when and where it applies, and any associated
   * rules or limitations.
   */
  summary: Scalars['String']['output']; /** The discount's name that displays to merchants in the Shopify admin and to customers. */
  title: Scalars['String']['output']; /** The total sales from orders where the discount was used. */
  totalSales?: Maybe<MoneyV2>; /** The date and time when the discount was updated. */
  updatedAt: Scalars['DateTime']['output'];
  /**
   * The maximum number of times the discount can be redeemed.
   * For unlimited usage, specify `null`.
   */
  usageLimit?: Maybe<Scalars['Int']['output']>;
};
/**
 * The `DiscountCodeNode` object enables you to manage [code discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) that are applied when customers enter a code at checkout. For example, you can offer discounts where customers have to enter a code to redeem an amount off discount on products, variants, or collections in a store. Or, you can offer discounts where customers have to enter a code to get free shipping. Merchants can create and share discount codes individually with customers.
 *
 * Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts),
 * including related queries, mutations, limitations, and considerations.
 */
type DiscountCodeNode = HasEvents & HasMetafieldDefinitions & HasMetafields & Node & {
  __typename?: 'DiscountCodeNode'; /** The underlying code discount object. */
  codeDiscount: DiscountCode; /** The paginated list of events associated with the host subject. */
  events: EventConnection; /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   */
  metafield?: Maybe<Metafield>;
  /**
   * List of metafield definitions.
   * @deprecated This field will be removed in a future version. Use `QueryRoot.metafieldDefinitions` instead.
   */
  metafieldDefinitions: MetafieldDefinitionConnection;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   */
  metafields: MetafieldConnection;
};
/** A list of collections that the discount can have as a prerequisite or a list of collections to which the discount can be applied. */
type DiscountCollections = {
  __typename?: 'DiscountCollections'; /** The list of collections that the discount can have as a prerequisite or the list of collections to which the discount can be applied. */
  collections: CollectionConnection;
};
/**
 * The [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
 * that you can use in combination with
 * [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).
 */
type DiscountCombinesWith = {
  __typename?: 'DiscountCombinesWith';
  /**
   * Whether the discount combines with the
   * [order discount](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * class.
   */
  orderDiscounts: Scalars['Boolean']['output'];
  /**
   * Whether the discount combines with the
   * [product discount](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * class.
   */
  productDiscounts: Scalars['Boolean']['output'];
  /**
   * Whether the discount combines with the
   * [shipping discount](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * class.
   */
  shippingDiscounts: Scalars['Boolean']['output'];
};
/** The type used to define which buyers can use the discount. */
type DiscountContext = DiscountBuyerSelectionAll | DiscountCustomerSegments | DiscountCustomers;
/**
 * Defines the geographic scope where a shipping discount can be applied based on customer shipping destinations. This configuration determines which countries are eligible for the promotional offer.
 *
 * For example, a "Free Shipping to EU" promotion would specify European Union countries, while a domestic-only sale might target just the store's home country.
 *
 * The object includes both specific country selections and an option to include all remaining countries not explicitly listed, providing flexible geographic targeting for international merchants.
 */
type DiscountCountries = {
  __typename?: 'DiscountCountries'; /** The codes for the countries where the discount can be applied. */
  countries: Array<CountryCode>; /** Whether the discount is applicable to countries that haven't been defined in the shop's shipping zones. */
  includeRestOfWorld: Scalars['Boolean']['output'];
};
/**
 * Indicates that a shipping discount applies to all countries without restriction, enabling merchants to create truly global promotions. This object represents universal geographic eligibility for shipping discount offers.
 *
 * For example, an online store launching a "Worldwide Free Shipping" campaign would use this configuration to ensure customers from any country can benefit from the promotion.
 *
 * This setting simplifies international discount management by eliminating the need to manually select individual countries or regions, making it ideal for digital products or stores with comprehensive global shipping capabilities.
 */
type DiscountCountryAll = {
  __typename?: 'DiscountCountryAll'; /** Whether the discount can be applied to all countries as shipping destination. This value is always `true`. */
  allCountries: Scalars['Boolean']['output'];
};
/**
 * Creates the broadest possible discount reach by targeting all customers, regardless of their purchase history or segment membership. This gives merchants maximum flexibility to run store-wide promotions without worrying about customer eligibility restrictions.
 *
 * For example, a flash sale or grand opening promotion would target all customers to maximize participation and store visibility.
 *
 * Learn more about [customer targeting](https://help.shopify.com/manual/discounts/).
 */
type DiscountCustomerAll = {
  __typename?: 'DiscountCustomerAll'; /** Whether the discount can be applied by all customers. This value is always `true`. */
  allCustomers: Scalars['Boolean']['output'];
};
/** The prerequisite items and prerequisite value that a customer must have on the order for the discount to be applicable. */
type DiscountCustomerBuys = {
  __typename?: 'DiscountCustomerBuys'; /** If the discount is applicable when a customer buys a one-time purchase. */
  isOneTimePurchase: Scalars['Boolean']['output']; /** If the discount is applicable when a customer buys a subscription purchase. */
  isSubscription: Scalars['Boolean']['output']; /** The items required for the discount to be applicable. */
  items: DiscountItems; /** The prerequisite value. */
  value: DiscountCustomerBuysValue;
};
/** The prerequisite for the discount to be applicable. For example, the discount might require a customer to buy a minimum quantity of select items. Alternatively, the discount might require a customer to spend a minimum amount on select items. */
type DiscountCustomerBuysValue = DiscountPurchaseAmount | DiscountQuantity;
/** The items in the order that qualify for the discount, their quantities, and the total value of the discount. */
type DiscountCustomerGets = {
  __typename?: 'DiscountCustomerGets'; /** Whether the discount applies on regular one-time-purchase items. */
  appliesOnOneTimePurchase: Scalars['Boolean']['output'];
  /**
   * Whether the discount applies on subscription items.
   * [Subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/offer-subscription-discounts)
   * enable customers to purchase products
   * on a recurring basis.
   */
  appliesOnSubscription: Scalars['Boolean']['output']; /** The items to which the discount applies. */
  items: DiscountItems; /** Entitled quantity and the discount value. */
  value: DiscountCustomerGetsValue;
};
/** The type of the discount value and how it will be applied. For example, it might be a percentage discount on a fixed number of items. Alternatively, it might be a fixed amount evenly distributed across all items or on each individual item. A third example is a percentage discount on all items. */
type DiscountCustomerGetsValue = DiscountAmount | DiscountOnQuantity | DiscountPercentage;
/**
 * Represents customer segments that are eligible to receive a specific discount, allowing merchants to target promotions to defined groups of customers. This enables personalized marketing campaigns based on customer behavior and characteristics.
 *
 * For example, a "VIP Customer 15% Off" promotion might target a segment of high-value repeat customers, while a "New Customer Welcome" discount could focus on first-time buyers.
 *
 * Segment-based discounts help merchants create more relevant promotional experiences and improve conversion rates by showing the right offers to the right customers at the right time.
 */
type DiscountCustomerSegments = {
  __typename?: 'DiscountCustomerSegments'; /** The list of customer segments who are eligible for the discount. */
  segments: Array<Segment>;
};
/** The type used for targeting a set of customers who are eligible for the discount. For example, the discount might be available to all customers or it might only be available to a specific set of customers. You can define the set of customers by targeting a list of customer segments, or by targeting a list of specific customers. */
type DiscountCustomerSelection = DiscountCustomerAll | DiscountCustomerSegments | DiscountCustomers;
/**
 * Defines customer targeting for discounts through specific individual customers. This object allows merchants to create exclusive discounts that are only available to explicitly selected customers.
 *
 * For example, a VIP customer appreciation discount might target specific high-value customers by individually selecting them, or a beta program discount could be offered to selected early adopters.
 *
 * Use `DiscountCustomers` to:
 * - Target specific individual customers for exclusive promotions
 * - Create personalized discount experiences for selected customers
 * - Offer special discounts to VIP or loyal customers
 * - Provide exclusive access to promotions for specific individuals
 *
 * This targeting method requires you to add each customer who should be eligible for the discount. For broader targeting based on customer attributes or segments, use [`DiscountCustomerSegments`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerSegments) instead.
 *
 * Learn more about creating customer-specific discounts using [`discountCodeBasicCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicCreate) and [`discountCodeBasicUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicUpdate).
 */
type DiscountCustomers = {
  __typename?: 'DiscountCustomers'; /** The list of individual customers eligible for the discount. */
  customers: Array<Customer>;
};
/** The type of discount that will be applied. Currently, only a percentage discount is supported. */
type DiscountEffect = DiscountAmount | DiscountPercentage;
/** The type used to target the items required for discount eligibility, or the items to which the application of a discount might apply. For example, for a customer to be eligible for a discount, they're required to add an item from a specified collection to their order. Alternatively, a customer might be required to add a specific product or product variant. When using this type to target which items the discount will apply to, the discount might apply to all items on the order, or to specific products and product variants, or items in a given collection. */
type DiscountItems = AllDiscountItems | DiscountCollections | DiscountProducts;
/**
 * Specifies the minimum item quantity required for discount eligibility, helping merchants create volume-based promotions that encourage larger purchases. This threshold applies to qualifying items in the customer's cart.
 *
 * For example, a "Buy 3, Get 10% Off" promotion would set the minimum quantity to 3 items.
 *
 * Learn more about [discount requirements](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountApplication).
 */
type DiscountMinimumQuantity = {
  __typename?: 'DiscountMinimumQuantity'; /** The minimum quantity of items that's required for the discount to be applied. */
  greaterThanOrEqualToQuantity: Scalars['UnsignedInt64']['output'];
};
/** The type of minimum requirement that must be met for the discount to be applied. For example, a customer must spend a minimum subtotal to be eligible for the discount. Alternatively, a customer must purchase a minimum quantity of items to be eligible for the discount. */
type DiscountMinimumRequirement = DiscountMinimumQuantity | DiscountMinimumSubtotal;
/** The minimum subtotal required for the discount to apply. */
type DiscountMinimumSubtotal = {
  __typename?: 'DiscountMinimumSubtotal'; /** The minimum subtotal that's required for the discount to be applied. */
  greaterThanOrEqualToSubtotal: MoneyV2;
};
/**
 * The `DiscountNode` object enables you to manage [discounts](https://help.shopify.com/manual/discounts), which are applied at checkout or on a cart.
 *
 *
 * Discounts are a way for merchants to promote sales and special offers, or as customer loyalty rewards. Discounts can apply to [orders, products, or shipping](https://shopify.dev/docs/apps/build/discounts#discount-classes), and can be either automatic or code-based. For example, you can offer customers a buy X get Y discount that's automatically applied when purchases meet specific criteria. Or, you can offer discounts where customers have to enter a code to redeem an amount off discount on products, variants, or collections in a store.
 *
 * Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts),
 * including related mutations, limitations, and considerations.
 */
type DiscountNode = HasEvents & HasMetafieldDefinitions & HasMetafields & Node & {
  __typename?: 'DiscountNode';
  /**
   * A discount that's applied at checkout or on cart.
   *
   *
   * Discounts can be [automatic or code-based](https://shopify.dev/docs/apps/build/discounts#discount-methods).
   */
  discount: Discount; /** The paginated list of events associated with the host subject. */
  events: EventConnection; /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   */
  metafield?: Maybe<Metafield>;
  /**
   * List of metafield definitions.
   * @deprecated This field will be removed in a future version. Use `QueryRoot.metafieldDefinitions` instead.
   */
  metafieldDefinitions: MetafieldDefinitionConnection;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   */
  metafields: MetafieldConnection;
};
/**
 * Defines quantity-based discount rules that specify how many items are eligible for a discount effect. This object enables bulk purchase incentives and tiered pricing strategies.
 *
 * For example, a "Buy 4 candles, get 2 candles 50% off (mix and match)" promotion would specify a quantity threshold of 2 items that will receive a percentage discount effect, encouraging customers to purchase more items to unlock savings.
 *
 * The configuration combines quantity requirements with discount effects, allowing merchants to create sophisticated pricing rules that reward larger purchases and increase average order values.
 */
type DiscountOnQuantity = {
  __typename?: 'DiscountOnQuantity'; /** The discount's effect on qualifying items. */
  effect: DiscountEffect; /** The number of items being discounted. The customer must have at least this many items of specified products or product variants in their order to be eligible for the discount. */
  quantity: DiscountQuantity;
};
/**
 * Creates percentage-based discounts that reduce item prices by a specified percentage amount. This gives merchants a flexible way to offer proportional savings that automatically scale with order value.
 *
 * For example, a "20% off all winter clothing" promotion would use this object to apply consistent percentage savings across different price points.
 *
 * Learn more about [discount types](https://help.shopify.com/manual/discounts/).
 */
type DiscountPercentage = {
  __typename?: 'DiscountPercentage'; /** The percentage value of the discount. */
  percentage: Scalars['Float']['output'];
};
/** A list of products and product variants that the discount can have as a prerequisite or a list of products and product variants to which the discount can be applied. */
type DiscountProducts = {
  __typename?: 'DiscountProducts'; /** The list of product variants that the discount can have as a prerequisite or the list of product variants to which the discount can be applied. */
  productVariants: ProductVariantConnection; /** The list of products that the discount can have as a prerequisite or the list of products to which the discount can be applied. */
  products: ProductConnection;
};
/** A purchase amount in the context of a discount. This object can be used to define the minimum purchase amount required for a discount to be applicable. */
type DiscountPurchaseAmount = {
  __typename?: 'DiscountPurchaseAmount'; /** The purchase amount in decimal format. */
  amount: Scalars['Decimal']['output'];
};
/**
 * Defines a quantity threshold for discount eligibility or application. This simple object specifies the number of items required to trigger or calculate discount benefits.
 *
 * For example, a "Buy 3, Get 1 Free" promotion would use DiscountQuantity to define the minimum purchase quantity of 3 items, or a bulk discount might specify quantity tiers like 10+ items for wholesale pricing.
 *
 * The quantity value determines how discounts interact with cart contents, whether setting minimum purchase requirements or defining quantity-based discount calculations.
 */
type DiscountQuantity = {
  __typename?: 'DiscountQuantity'; /** The quantity of items. */
  quantity: Scalars['UnsignedInt64']['output'];
};
/** A code that a customer can use at checkout to receive a discount. For example, a customer can use the redeem code 'SUMMER20' at checkout to receive a 20% discount on their entire order. */
type DiscountRedeemCode = {
  __typename?: 'DiscountRedeemCode'; /** The number of times that the discount redeem code has been used. This value is updated asynchronously and can be different than the actual usage count. */
  asyncUsageCount: Scalars['Int']['output']; /** The code that a customer can use at checkout to receive a discount. */
  code: Scalars['String']['output']; /** The application that created the discount redeem code. */
  createdBy?: Maybe<App>; /** A globally-unique ID of the discount redeem code. */
  id: Scalars['ID']['output'];
};
/** An auto-generated type for paginating through multiple DiscountRedeemCodes. */
type DiscountRedeemCodeConnection = {
  __typename?: 'DiscountRedeemCodeConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<DiscountRedeemCodeEdge>; /** A list of nodes that are contained in DiscountRedeemCodeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<DiscountRedeemCode>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one DiscountRedeemCode and a cursor during pagination. */
type DiscountRedeemCodeEdge = {
  __typename?: 'DiscountRedeemCodeEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of DiscountRedeemCodeEdge. */
  node: DiscountRedeemCode;
};
/** A shareable URL for a discount code. */
type DiscountShareableUrl = {
  __typename?: 'DiscountShareableUrl'; /** The image URL of the item (product or collection) to which the discount applies. */
  targetItemImage?: Maybe<Image>; /** The type of page that's associated with the URL. */
  targetType: DiscountShareableUrlTargetType; /** The title of the page that's associated with the URL. */
  title: Scalars['String']['output']; /** The URL for the discount code. */
  url: Scalars['URL']['output'];
};
/** The type of page where a shareable discount URL lands. */
declare enum DiscountShareableUrlTargetType {
  /** The URL lands on a collection page. */
  Collection = 'COLLECTION',
  /** The URL lands on a home page. */
  Home = 'HOME',
  /** The URL lands on a product page. */
  Product = 'PRODUCT'
}
/** The type used to target the eligible countries of an order's shipping destination for which the discount applies. For example, the discount might be applicable when shipping to all countries, or only to a set of countries. */
type DiscountShippingDestinationSelection = DiscountCountries | DiscountCountryAll;
/**
 * The status of the discount that describes its availability,
 * expiration, or pending activation.
 */
declare enum DiscountStatus {
  /** The discount is currently available for use. */
  Active = 'ACTIVE',
  /** The discount has reached its end date and is no longer valid. */
  Expired = 'EXPIRED',
  /** The discount is set to become active at a future date. */
  Scheduled = 'SCHEDULED'
}
/** The type of line (line item or shipping line) on an order that the subscription discount is applicable towards. */
declare enum DiscountTargetType {
  /** The discount applies onto line items. */
  LineItem = 'LINE_ITEM',
  /** The discount applies onto shipping lines. */
  ShippingLine = 'SHIPPING_LINE'
}
/** The type of the subscription discount. */
declare enum DiscountType {
  /** Automatic discount type. */
  AutomaticDiscount = 'AUTOMATIC_DISCOUNT',
  /** Code discount type. */
  CodeDiscount = 'CODE_DISCOUNT',
  /** Manual discount type. */
  Manual = 'MANUAL'
}
/** Represents an error in the input of a mutation. */
type DisplayableError = {
  /** The path to the input field that caused the error. */field?: Maybe<Array<Scalars['String']['output']>>; /** The error message. */
  message: Scalars['String']['output'];
};
/** The possible statuses of a dispute. */
declare enum DisputeStatus {
  Accepted = 'ACCEPTED',
  /**
   * Status previously used by Stripe to indicate that a dispute led to a refund.
   * @deprecated CHARGE_REFUNDED is no longer supported.
   */
  ChargeRefunded = 'CHARGE_REFUNDED',
  Lost = 'LOST',
  NeedsResponse = 'NEEDS_RESPONSE',
  UnderReview = 'UNDER_REVIEW',
  Won = 'WON'
}
/** The possible types for a dispute. */
declare enum DisputeType {
  /** The dispute has turned into a chargeback. */
  Chargeback = 'CHARGEBACK',
  /** The dispute is in the inquiry phase. */
  Inquiry = 'INQUIRY'
}
/** A unique string that represents the address of a Shopify store on the Internet. */
type Domain = Node & {
  __typename?: 'Domain'; /** The host name of the domain. For example, `example.com`. */
  host: Scalars['String']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The localization of the domain, if the domain doesn't redirect. */
  localization?: Maybe<DomainLocalization>; /** The web presence of the domain. */
  marketWebPresence?: Maybe<MarketWebPresence>; /** Whether SSL is enabled. */
  sslEnabled: Scalars['Boolean']['output']; /** The URL of the domain (for example, `https://example.com`). */
  url: Scalars['URL']['output'];
};
/** The country and language settings assigned to a domain. */
type DomainLocalization = {
  __typename?: 'DomainLocalization'; /** The ISO codes for the domain’s alternate locales. For example, `["en"]`. */
  alternateLocales: Array<Scalars['String']['output']>; /** The ISO code for the country assigned to the domain. For example, `"CA"` or "*" for a domain set to "Rest of world". */
  country?: Maybe<Scalars['String']['output']>; /** The ISO code for the domain’s default locale. For example, `"en"`. */
  defaultLocale: Scalars['String']['output'];
};
/**
 * An order that a merchant creates on behalf of a customer. Draft orders are useful for merchants that need to do the following tasks:
 *
 * - Create new orders for sales made by phone, in person, by chat, or elsewhere. When a merchant accepts payment for a draft order, an order is created.
 * - Send invoices to customers to pay with a secure checkout link.
 * - Use custom items to represent additional costs or products that aren't displayed in a shop's inventory.
 * - Re-create orders manually from active sales channels.
 * - Sell products at discount or wholesale rates.
 * - Take pre-orders.
 *
 * For draft orders in multiple currencies `presentment_money` is the source of truth for what a customer is going to be charged and `shop_money` is an estimate of what the merchant might receive in their shop currency.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 *
 * Draft orders created on or after April 1, 2025 will be automatically purged after one year of inactivity.
 */
type DraftOrder = CommentEventSubject & HasEvents & HasLocalizationExtensions & HasLocalizedFields & HasMetafields & LegacyInteroperability & Navigable & Node & {
  __typename?: 'DraftOrder';
  /**
   * Whether or not to accept automatic discounts on the draft order during calculation.
   * If false, only discount codes and custom draft order discounts (see `appliedDiscount`) will be applied.
   * If true, eligible automatic discounts will be applied in addition to discount codes and custom draft order discounts.
   */
  acceptAutomaticDiscounts?: Maybe<Scalars['Boolean']['output']>; /** Whether all variant prices have been overridden. */
  allVariantPricesOverridden: Scalars['Boolean']['output']; /** Whether discount codes are allowed during checkout of this draft order. */
  allowDiscountCodesInCheckout: Scalars['Boolean']['output']; /** Whether any variant prices have been overridden. */
  anyVariantPricesOverridden: Scalars['Boolean']['output']; /** The custom order-level discount applied. */
  appliedDiscount?: Maybe<DraftOrderAppliedDiscount>; /** The billing address of the customer. */
  billingAddress?: Maybe<MailingAddress>; /** Whether the billing address matches the shipping address. */
  billingAddressMatchesShippingAddress: Scalars['Boolean']['output'];
  /**
   * The date and time when the draft order was converted to a new order,
   * and had it's status changed to **Completed**.
   */
  completedAt?: Maybe<Scalars['DateTime']['output']>; /** The date and time when the draft order was created in Shopify. */
  createdAt: Scalars['DateTime']['output']; /** The shop currency used for calculation. */
  currencyCode: CurrencyCode; /** The custom information added to the draft order on behalf of the customer. */
  customAttributes: Array<Attribute>; /** The customer who will be sent an invoice. */
  customer?: Maybe<Customer>; /** A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID. */
  defaultCursor: Scalars['String']['output']; /** All discount codes applied. */
  discountCodes: Array<Scalars['String']['output']>; /** The email address of the customer, which is used to send notifications. */
  email?: Maybe<Scalars['String']['output']>; /** The list of events associated with the draft order. */
  events: EventConnection; /** Whether the merchant has added timeline comments to the draft order. */
  hasTimelineComment: Scalars['Boolean']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The subject defined for the draft invoice email template. */
  invoiceEmailTemplateSubject: Scalars['String']['output']; /** The date and time when the invoice was last emailed to the customer. */
  invoiceSentAt?: Maybe<Scalars['DateTime']['output']>; /** The link to the checkout, which is sent to the customer in the invoice email. */
  invoiceUrl?: Maybe<Scalars['URL']['output']>; /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64']['output']; /** The list of the line items in the draft order. */
  lineItems: DraftOrderLineItemConnection;
  /**
   * A subtotal of the line items and corresponding discounts,
   * excluding shipping charges, shipping discounts, taxes, or order discounts.
   */
  lineItemsSubtotalPrice: MoneyBag;
  /**
   * List of localization extensions for the resource.
   * @deprecated This connection will be removed in a future version. Use `localizedFields` instead.
   */
  localizationExtensions: LocalizationExtensionConnection; /** List of localized fields for the resource. */
  localizedFields: LocalizedFieldConnection;
  /**
   * The name of the selected market.
   * @deprecated This field is now incompatible with Markets.
   */
  marketName: Scalars['String']['output'];
  /**
   * The selected country code that determines the pricing.
   * @deprecated This field is now incompatible with Markets.
   */
  marketRegionCountryCode: CountryCode;
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   */
  metafield?: Maybe<Metafield>;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   */
  metafields: MetafieldConnection; /** The identifier for the draft order, which is unique within the store. For example, _#D1223_. */
  name: Scalars['String']['output']; /** The text from an optional note attached to the draft order. */
  note2?: Maybe<Scalars['String']['output']>; /** The order that was created from the draft order. */
  order?: Maybe<Order>; /** The associated payment terms for this draft order. */
  paymentTerms?: Maybe<PaymentTerms>; /** The assigned phone number. */
  phone?: Maybe<Scalars['String']['output']>; /** The list of platform discounts applied. */
  platformDiscounts: Array<DraftOrderPlatformDiscount>; /** The purchase order number. */
  poNumber?: Maybe<Scalars['String']['output']>; /** The payment currency used for calculation. */
  presentmentCurrencyCode: CurrencyCode; /** The purchasing entity. */
  purchasingEntity?: Maybe<PurchasingEntity>;
  /**
   * Whether the draft order is ready and can be completed.
   * Draft orders might have asynchronous operations that can take time to finish.
   */
  ready: Scalars['Boolean']['output']; /** The time after which inventory will automatically be restocked. */
  reserveInventoryUntil?: Maybe<Scalars['DateTime']['output']>; /** The shipping address of the customer. */
  shippingAddress?: Maybe<MailingAddress>; /** The line item containing the shipping information and costs. */
  shippingLine?: Maybe<ShippingLine>; /** The status of the draft order. */
  status: DraftOrderStatus;
  /**
   * The subtotal, in shop currency, of the line items and their discounts, excluding shipping charges, shipping discounts, and taxes.
   * @deprecated Use `subtotalPriceSet` instead.
   */
  subtotalPrice: Scalars['Money']['output']; /** The subtotal, of the line items and their discounts, excluding shipping charges, shipping discounts, and taxes. */
  subtotalPriceSet: MoneyBag;
  /**
   * The comma separated list of tags associated with the draft order.
   * Updating `tags` overwrites any existing tags that were previously added to the draft order.
   * To add new tags without overwriting existing tags, use the [tagsAdd](https://shopify.dev/api/admin-graphql/latest/mutations/tagsadd) mutation.
   */
  tags: Array<Scalars['String']['output']>; /** Whether the draft order is tax exempt. */
  taxExempt: Scalars['Boolean']['output']; /** The list of of taxes lines charged for each line item and shipping line. */
  taxLines: Array<TaxLine>; /** Whether the line item prices include taxes. */
  taxesIncluded: Scalars['Boolean']['output']; /** Total discounts. */
  totalDiscountsSet: MoneyBag; /** Total price of line items, excluding discounts. */
  totalLineItemsPriceSet: MoneyBag;
  /**
   * The total price, in shop currency, includes taxes, shipping charges, and discounts.
   * @deprecated Use `totalPriceSet` instead.
   */
  totalPrice: Scalars['Money']['output']; /** The total price, includes taxes, shipping charges, and discounts. */
  totalPriceSet: MoneyBag;
  /**
   * The sum of individual line item quantities.
   * If the draft order has bundle items, this is the sum containing the quantities of individual items in the bundle.
   */
  totalQuantityOfLineItems: Scalars['Int']['output'];
  /**
   * The total shipping price in shop currency.
   * @deprecated Use `totalShippingPriceSet` instead.
   */
  totalShippingPrice: Scalars['Money']['output']; /** The total shipping price. */
  totalShippingPriceSet: MoneyBag;
  /**
   * The total tax in shop currency.
   * @deprecated Use `totalTaxSet` instead.
   */
  totalTax: Scalars['Money']['output']; /** The total tax. */
  totalTaxSet: MoneyBag; /** The total weight in grams of the draft order. */
  totalWeight: Scalars['UnsignedInt64']['output'];
  /**
   * Fingerprint of the current cart.
   * In order to have bundles work, the fingerprint must be passed to
   * each request as it was previously returned, unmodified.
   */
  transformerFingerprint?: Maybe<Scalars['String']['output']>;
  /**
   * The date and time when the draft order was last changed.
   * The format is YYYY-MM-DD HH:mm:ss. For example, 2016-02-05 17:04:01.
   */
  updatedAt: Scalars['DateTime']['output']; /** Whether the draft order will be visible to the customer on the self-serve portal. */
  visibleToCustomer: Scalars['Boolean']['output']; /** The list of warnings raised while calculating. */
  warnings: Array<DraftOrderWarning>;
};
/** The order-level discount applied to a draft order. */
type DraftOrderAppliedDiscount = {
  __typename?: 'DraftOrderAppliedDiscount';
  /**
   * Amount of the order-level discount that's applied to the draft order in shop currency.
   * @deprecated Use `amountSet` instead.
   */
  amount: Scalars['Money']['output']; /** The amount of money discounted, with values shown in both shop currency and presentment currency. */
  amountSet: MoneyBag;
  /**
   * Amount of money discounted.
   * @deprecated Use `amountSet` instead.
   */
  amountV2: MoneyV2; /** Description of the order-level discount. */
  description: Scalars['String']['output']; /** Name of the order-level discount. */
  title?: Maybe<Scalars['String']['output']>;
  /**
   * The order level discount amount. If `valueType` is `"percentage"`,
   * then `value` is the percentage discount.
   */
  value: Scalars['Float']['output']; /** Type of the order-level discount. */
  valueType: DraftOrderAppliedDiscountType;
};
/** The valid discount types that can be applied to a draft order. */
declare enum DraftOrderAppliedDiscountType {
  /** A fixed amount in the store's currency. */
  FixedAmount = 'FIXED_AMOUNT',
  /** A percentage of the order subtotal. */
  Percentage = 'PERCENTAGE'
}
/** An auto-generated type for paginating through multiple DraftOrders. */
type DraftOrderConnection = {
  __typename?: 'DraftOrderConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<DraftOrderEdge>; /** A list of nodes that are contained in DraftOrderEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<DraftOrder>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one DraftOrder and a cursor during pagination. */
type DraftOrderEdge = {
  __typename?: 'DraftOrderEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of DraftOrderEdge. */
  node: DraftOrder;
};
/**
 * A line item in a draft order. Line items are either [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects or custom items created manually with specific pricing and attributes.
 *
 * Each line item includes [quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.quantity), [pricing](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.originalUnitPrice), [discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.discountedTotal), [tax information](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.taxLines), and [custom attributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.customAttributes). For [bundle products](https://shopify.dev/docs/apps/build/products/bundles), the line item includes components that define the individual products within the bundle.
 */
type DraftOrderLineItem = Node & {
  __typename?: 'DraftOrderLineItem'; /** The custom applied discount. */
  appliedDiscount?: Maybe<DraftOrderAppliedDiscount>;
  /**
   * The `discountedTotal` divided by `quantity`,
   * equal to the average value of the line item price per unit after discounts are applied.
   * This value doesn't include discounts applied to the entire draft order.
   */
  approximateDiscountedUnitPriceSet: MoneyBag;
  /**
   * The list of bundle components if applicable.
   * @deprecated Use `components` instead.
   */
  bundleComponents: Array<DraftOrderLineItem>; /** The components of the draft order line item. */
  components: Array<DraftOrderLineItem>; /** Whether the line item is custom (`true`) or contains a product variant (`false`). */
  custom: Scalars['Boolean']['output']; /** A list of attributes that represent custom features or special requests. */
  customAttributes: Array<Attribute>; /** The list of additional information (metafields) with the associated types. */
  customAttributesV2: Array<TypedAttribute>;
  /**
   * The line item price, in shop currency, after discounts are applied.
   * @deprecated Use `discountedTotalSet` instead.
   */
  discountedTotal: Scalars['Money']['output']; /** The total price with discounts applied. */
  discountedTotalSet: MoneyBag;
  /**
   * The `discountedTotal` divided by `quantity`, equal to the value of the discount per unit in the shop currency.
   * @deprecated Use `approximateDiscountedUnitPriceSet` instead.
   */
  discountedUnitPrice: Scalars['Money']['output'];
  /**
   * The unit price with discounts applied.
   * @deprecated Use `approximateDiscountedUnitPriceSet` instead.
   */
  discountedUnitPriceSet: MoneyBag;
  /**
   * Name of the service provider who fulfilled the order.
   *
   * Valid values are either **manual** or the name of the provider.
   * For example, **amazon**, **shipwire**.
   *
   * Deleted fulfillment services will return null.
   */
  fulfillmentService?: Maybe<FulfillmentService>;
  /**
   * The weight of the line item in grams.
   * @deprecated Use `weight` instead.
   */
  grams?: Maybe<Scalars['Int']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The image of the product variant. */
  image?: Maybe<Image>; /** Whether the line item represents the purchase of a gift card. */
  isGiftCard: Scalars['Boolean']['output']; /** The name of the product. */
  name: Scalars['String']['output'];
  /**
   * The total price, in shop currency, excluding discounts, equal to the original unit price multiplied by quantity.
   * @deprecated Use `originalTotalSet` instead.
   */
  originalTotal: Scalars['Money']['output']; /** The total price excluding discounts, equal to the original unit price multiplied by quantity. */
  originalTotalSet: MoneyBag;
  /**
   * The price, in shop currency, without any discounts applied.
   * @deprecated Use `originalUnitPriceWithCurrency` instead.
   */
  originalUnitPrice: Scalars['Money']['output']; /** The price without any discounts applied. */
  originalUnitPriceSet: MoneyBag; /** The original custom line item input price. */
  originalUnitPriceWithCurrency?: Maybe<MoneyV2>; /** The price override for the line item. */
  priceOverride?: Maybe<MoneyV2>; /** The product for the line item. */
  product?: Maybe<Product>;
  /**
   * The quantity of items. For a bundle item, this is the quantity of bundles,
   * not the quantity of items contained in the bundles themselves.
   */
  quantity: Scalars['Int']['output']; /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars['Boolean']['output']; /** The SKU number of the product variant. */
  sku?: Maybe<Scalars['String']['output']>; /** A list of tax lines. */
  taxLines: Array<TaxLine>; /** Whether the variant is taxable. */
  taxable: Scalars['Boolean']['output']; /** The title of the product or variant. This field only applies to custom line items. */
  title: Scalars['String']['output'];
  /**
   * The total discount applied in shop currency.
   * @deprecated Use `totalDiscountSet` instead.
   */
  totalDiscount: Scalars['Money']['output']; /** The total discount amount. */
  totalDiscountSet: MoneyBag;
  /**
   * The UUID of the draft order line item. Must be unique and consistent across requests.
   * This field is mandatory in order to manipulate drafts with bundles.
   */
  uuid: Scalars['String']['output']; /** The product variant for the line item. */
  variant?: Maybe<ProductVariant>; /** The name of the variant. */
  variantTitle?: Maybe<Scalars['String']['output']>; /** The name of the vendor who created the product variant. */
  vendor?: Maybe<Scalars['String']['output']>; /** The weight unit and value. */
  weight?: Maybe<Weight>;
};
/** An auto-generated type for paginating through multiple DraftOrderLineItems. */
type DraftOrderLineItemConnection = {
  __typename?: 'DraftOrderLineItemConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<DraftOrderLineItemEdge>; /** A list of nodes that are contained in DraftOrderLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<DraftOrderLineItem>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one DraftOrderLineItem and a cursor during pagination. */
type DraftOrderLineItemEdge = {
  __typename?: 'DraftOrderLineItemEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of DraftOrderLineItemEdge. */
  node: DraftOrderLineItem;
};
/** The platform discounts applied to the draft order. */
type DraftOrderPlatformDiscount = {
  __typename?: 'DraftOrderPlatformDiscount'; /** Price reduction allocations across the draft order's lines. */
  allocations: Array<DraftOrderPlatformDiscountAllocation>; /** Whether the discount is an automatic discount. */
  automaticDiscount: Scalars['Boolean']['output']; /** Whether the discount is a buy x get y discount. */
  bxgyDiscount: Scalars['Boolean']['output']; /** If a code-based discount, the code used to add the discount. */
  code?: Maybe<Scalars['String']['output']>;
  /**
   * The discount class.
   * @deprecated Use `discountClasses` instead.
   */
  discountClass: DiscountClass; /** The discount classes. */
  discountClasses: Array<DiscountClass>; /** The discount node for the platform discount. */
  discountNode?: Maybe<DiscountNode>; /** The ID of the discount. */
  id?: Maybe<Scalars['ID']['output']>; /** Whether the discount is line, order or shipping level. */
  presentationLevel: Scalars['String']['output']; /** The short summary of the discount. */
  shortSummary: Scalars['String']['output']; /** The summary of the discount. */
  summary: Scalars['String']['output']; /** The name of the discount. */
  title: Scalars['String']['output']; /** The discount total amount in shop currency. */
  totalAmount: MoneyV2; /** The amount of money discounted, with values shown in both shop currency and presentment currency. */
  totalAmountPriceSet: MoneyBag;
};
/** Price reduction allocations across the draft order's lines. */
type DraftOrderPlatformDiscountAllocation = {
  __typename?: 'DraftOrderPlatformDiscountAllocation'; /** The ID of the allocation. */
  id?: Maybe<Scalars['ID']['output']>; /** The quantity of the target being discounted. */
  quantity?: Maybe<Scalars['Int']['output']>; /** Amount of the discount allocated to the target. */
  reductionAmount: MoneyV2; /** Amount of the discount allocated to the target in both shop currency and presentment currency. */
  reductionAmountSet: MoneyBag; /** The element of the draft being discounted. */
  target?: Maybe<DraftOrderPlatformDiscountAllocationTarget>;
};
/** The element of the draft being discounted. */
type DraftOrderPlatformDiscountAllocationTarget = CalculatedDraftOrderLineItem | DraftOrderLineItem | ShippingLine;
/** The valid statuses for a draft order. */
declare enum DraftOrderStatus {
  /** The draft order has been paid. */
  Completed = 'COMPLETED',
  /** An invoice for the draft order has been sent to the customer. */
  InvoiceSent = 'INVOICE_SENT',
  /** The draft order is open. It has not been paid, and an invoice hasn't been sent. */
  Open = 'OPEN'
}
/** A warning that is displayed to the merchant when a change is made to a draft order. */
type DraftOrderWarning = {
  /** The error code. */errorCode: Scalars['String']['output']; /** The input field that the warning applies to. */
  field: Scalars['String']['output']; /** The warning message. */
  message: Scalars['String']['output'];
};
/** The duty details for a line item. */
type Duty = Node & {
  __typename?: 'Duty'; /** The ISO 3166-1 alpha-2 country code of the country of origin used in calculating the duty. */
  countryCodeOfOrigin?: Maybe<CountryCode>; /** The harmonized system code of the item used in calculating the duty. */
  harmonizedSystemCode?: Maybe<Scalars['String']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The amount of the duty. */
  price: MoneyBag; /** A list of taxes charged on the duty. */
  taxLines: Array<TaxLine>;
};
/** The attribute editable information. */
type EditableProperty = {
  __typename?: 'EditableProperty'; /** Whether the attribute is locked for editing. */
  locked: Scalars['Boolean']['output']; /** The reason the attribute is locked for editing. */
  reason?: Maybe<Scalars['FormattedString']['output']>;
};
/** The shop's entitlements. */
type EntitlementsType = {
  __typename?: 'EntitlementsType'; /** Represents the markets for the shop. */
  markets: MarketsType;
};
/**
 * Events chronicle resource activities such as the creation of an article, the fulfillment of an order, or the
 * addition of a product.
 */
type Event = {
  /** The action that occured. */action: Scalars['String']['output']; /** The name of the app that created the event. */
  appTitle?: Maybe<Scalars['String']['output']>; /** Whether the event was created by an app. */
  attributeToApp: Scalars['Boolean']['output']; /** Whether the event was caused by an admin user. */
  attributeToUser: Scalars['Boolean']['output']; /** The date and time when the event was created. */
  createdAt: Scalars['DateTime']['output']; /** Whether the event is critical. */
  criticalAlert: Scalars['Boolean']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** Human readable text that describes the event. */
  message: Scalars['FormattedString']['output'];
};
/** An auto-generated type for paginating through multiple Events. */
type EventConnection = {
  __typename?: 'EventConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<EventEdge>; /** A list of nodes that are contained in EventEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<Event>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one Event and a cursor during pagination. */
type EventEdge = {
  __typename?: 'EventEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of EventEdge. */
  node: Event;
};
/** An item for exchange. */
type ExchangeLineItem = Node & {
  __typename?: 'ExchangeLineItem'; /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /**
   * The order line item for the exchange. If the exchange line has been processed multiple times, this will be the first associated line item and won't reflect all processed values.
   * @deprecated Use `lineItems` instead.
   */
  lineItem?: Maybe<LineItem>; /** The order line items for the exchange. */
  lineItems?: Maybe<Array<LineItem>>; /** The quantity of the exchange item that can be processed. */
  processableQuantity: Scalars['Int']['output']; /** The quantity of the exchange item that have been processed. */
  processedQuantity: Scalars['Int']['output']; /** The number of units ordered, including refunded and removed units. */
  quantity: Scalars['Int']['output']; /** The quantity of the exchange item that haven't been processed. */
  unprocessedQuantity: Scalars['Int']['output']; /** The ID of the variant at time of return creation. */
  variantId?: Maybe<Scalars['ID']['output']>;
};
/** An auto-generated type for paginating through multiple ExchangeLineItems. */
type ExchangeLineItemConnection = {
  __typename?: 'ExchangeLineItemConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ExchangeLineItemEdge>; /** A list of nodes that are contained in ExchangeLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<ExchangeLineItem>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one ExchangeLineItem and a cursor during pagination. */
type ExchangeLineItemEdge = {
  __typename?: 'ExchangeLineItemEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ExchangeLineItemEdge. */
  node: ExchangeLineItem;
};
/** An exchange where existing items on an order are returned and new items are added to the order. */
type ExchangeV2 = Node & {
  __typename?: 'ExchangeV2'; /** The details of the new items in the exchange. */
  additions: ExchangeV2Additions; /** The date and time when the exchange was completed. */
  completedAt?: Maybe<Scalars['DateTime']['output']>; /** The date and time when the exchange was created. */
  createdAt: Scalars['DateTime']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The location where the exchange happened. */
  location?: Maybe<Location>; /** Mirrored from Admin Exchanges. */
  mirrored: Scalars['Boolean']['output']; /** The text of an optional note that a shop owner can attach to the exchange. */
  note?: Maybe<Scalars['String']['output']>; /** The refunds processed during the exchange. */
  refunds: Array<Refund>; /** The details of the returned items in the exchange. */
  returns: ExchangeV2Returns; /** The staff member associated with the exchange. */
  staffMember?: Maybe<StaffMember>; /** The amount of money that was paid or refunded as part of the exchange. */
  totalAmountProcessedSet: MoneyBag; /** The difference in values of the items that were exchanged. */
  totalPriceSet: MoneyBag; /** The order transactions related to the exchange. */
  transactions: Array<OrderTransaction>;
};
/** New items associated to the exchange. */
type ExchangeV2Additions = {
  __typename?: 'ExchangeV2Additions'; /** The list of new items for the exchange. */
  lineItems: Array<ExchangeV2LineItem>; /** The subtotal of the items being added, including discounts. */
  subtotalPriceSet: MoneyBag; /** The summary of all taxes of the items being added. */
  taxLines: Array<TaxLine>; /** The total price of the items being added, including discounts and taxes. */
  totalPriceSet: MoneyBag;
};
/** An auto-generated type for paginating through multiple ExchangeV2s. */
type ExchangeV2Connection = {
  __typename?: 'ExchangeV2Connection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ExchangeV2Edge>; /** A list of nodes that are contained in ExchangeV2Edge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<ExchangeV2>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one ExchangeV2 and a cursor during pagination. */
type ExchangeV2Edge = {
  __typename?: 'ExchangeV2Edge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ExchangeV2Edge. */
  node: ExchangeV2;
};
/** Contains information about an item in the exchange. */
type ExchangeV2LineItem = {
  __typename?: 'ExchangeV2LineItem'; /** A list of attributes that represent custom features or special requests. */
  customAttributes: Array<Attribute>; /** The total line price, in shop and presentment currencies, after discounts are applied. */
  discountedTotalSet: MoneyBag;
  /**
   * The price, in shop and presentment currencies,
   * of a single variant unit after line item discounts are applied.
   */
  discountedUnitPriceSet: MoneyBag;
  /**
   * Name of the service provider who fulfilled the order.
   *
   * Valid values are either **manual** or the name of the provider.
   * For example, **amazon**, **shipwire**.
   *
   * Deleted fulfillment services will return null.
   */
  fulfillmentService?: Maybe<FulfillmentService>; /** Indiciates if this line item is a gift card. */
  giftCard: Scalars['Boolean']['output']; /** The gift cards associated with the line item. */
  giftCards: Array<GiftCard>; /** Whether the line item represents the purchase of a gift card. */
  isGiftCard: Scalars['Boolean']['output']; /** The line item associated with this object. */
  lineItem?: Maybe<LineItem>; /** The name of the product. */
  name: Scalars['String']['output']; /** The total price, in shop and presentment currencies, before discounts are applied. */
  originalTotalSet: MoneyBag;
  /**
   * The price, in shop and presentment currencies,
   * of a single variant unit before line item discounts are applied.
   */
  originalUnitPriceSet: MoneyBag; /** The number of products that were purchased. */
  quantity: Scalars['Int']['output']; /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars['Boolean']['output']; /** The SKU number of the product variant. */
  sku?: Maybe<Scalars['String']['output']>; /** The TaxLine object connected to this line item. */
  taxLines: Array<TaxLine>; /** Whether the variant is taxable. */
  taxable: Scalars['Boolean']['output']; /** The title of the product or variant. This field only applies to custom line items. */
  title: Scalars['String']['output']; /** The product variant of the line item. */
  variant?: Maybe<ProductVariant>; /** The name of the variant. */
  variantTitle?: Maybe<Scalars['String']['output']>; /** The name of the vendor who created the product variant. */
  vendor?: Maybe<Scalars['String']['output']>;
};
/** Return items associated to the exchange. */
type ExchangeV2Returns = {
  __typename?: 'ExchangeV2Returns'; /** The list of return items for the exchange. */
  lineItems: Array<ExchangeV2LineItem>; /** The amount of the order-level discount for the items and shipping being returned, which doesn't contain any line item discounts. */
  orderDiscountAmountSet: MoneyBag; /** The amount of money to be refunded for shipping. */
  shippingRefundAmountSet: MoneyBag; /** The subtotal of the items being returned. */
  subtotalPriceSet: MoneyBag; /** The summary of all taxes of the items being returned. */
  taxLines: Array<TaxLine>; /** The amount of money to be refunded for tip. */
  tipRefundAmountSet: MoneyBag; /** The total value of the items being returned. */
  totalPriceSet: MoneyBag;
};
/** Requirements that must be met before an app can be installed. */
type FailedRequirement = {
  __typename?: 'FailedRequirement'; /** Action to be taken to resolve a failed requirement, including URL link. */
  action?: Maybe<NavigationItem>;
  /**
   * A concise set of copy strings to be displayed to merchants, to guide them in resolving problems your app
   * encounters when trying to make use of their Shop and its resources.
   */
  message: Scalars['String']['output'];
};
/** A additional cost, charged by the merchant, on an order. Examples include return shipping fees and restocking fees. */
type Fee = {
  /** The unique ID for the Fee. */id: Scalars['ID']['output'];
};
/** A file interface. */
type File = {
  /** A word or phrase to describe the contents or the function of a file. */alt?: Maybe<Scalars['String']['output']>; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was created. */
  createdAt: Scalars['DateTime']['output']; /** Any errors that have occurred on the file. */
  fileErrors: Array<FileError>; /** The status of the file. */
  fileStatus: FileStatus; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The preview image for the media. */
  preview?: Maybe<MediaPreviewImage>; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};
/**
 * A file error. This typically occurs when there is an issue with the file itself causing it to fail validation.
 * Check the file before attempting to upload again.
 */
type FileError = {
  __typename?: 'FileError'; /** Code representing the type of error. */
  code: FileErrorCode; /** Additional details regarding the error. */
  details?: Maybe<Scalars['String']['output']>; /** Translated error message. */
  message: Scalars['String']['output'];
};
/** The error types for a file. */
declare enum FileErrorCode {
  /** File could not be created because a file with the same name already exists. */
  DuplicateFilenameError = 'DUPLICATE_FILENAME_ERROR',
  /** File could not be created because embed permissions are disabled for this video. */
  ExternalVideoEmbedDisabled = 'EXTERNAL_VIDEO_EMBED_DISABLED',
  /** File could not be created because video is either not found or still transcoding. */
  ExternalVideoEmbedNotFoundOrTranscoding = 'EXTERNAL_VIDEO_EMBED_NOT_FOUND_OR_TRANSCODING',
  /** File could not be created because the external video has an invalid aspect ratio. */
  ExternalVideoInvalidAspectRatio = 'EXTERNAL_VIDEO_INVALID_ASPECT_RATIO',
  /** File could not be created because the external video could not be found. */
  ExternalVideoNotFound = 'EXTERNAL_VIDEO_NOT_FOUND',
  /** File could not be created because the external video is not listed or is private. */
  ExternalVideoUnlisted = 'EXTERNAL_VIDEO_UNLISTED',
  /** File could not be created because the cumulative file storage limit would be exceeded. */
  FileStorageLimitExceeded = 'FILE_STORAGE_LIMIT_EXCEEDED',
  /** File could not be processed because the source could not be downloaded. */
  GenericFileDownloadFailure = 'GENERIC_FILE_DOWNLOAD_FAILURE',
  /** File could not be created because the size is too large. */
  GenericFileInvalidSize = 'GENERIC_FILE_INVALID_SIZE',
  /** File could not be processed because the image could not be downloaded. */
  ImageDownloadFailure = 'IMAGE_DOWNLOAD_FAILURE',
  /** File could not be processed because the image could not be processed. */
  ImageProcessingFailure = 'IMAGE_PROCESSING_FAILURE',
  /** File could not be created because the image has an invalid aspect ratio. */
  InvalidImageAspectRatio = 'INVALID_IMAGE_ASPECT_RATIO',
  /** File could not be created because the image size is too large. */
  InvalidImageFileSize = 'INVALID_IMAGE_FILE_SIZE',
  /** File could not be created because the image's resolution exceeds the max limit. */
  InvalidImageResolution = 'INVALID_IMAGE_RESOLUTION',
  /** File could not be processed because the signed URL was invalid. */
  InvalidSignedUrl = 'INVALID_SIGNED_URL',
  /** File timed out because it is currently being modified by another operation. */
  MediaTimeoutError = 'MEDIA_TIMEOUT_ERROR',
  /** File could not be created because the model file failed processing. */
  Model3DGlbOutputCreationError = 'MODEL3D_GLB_OUTPUT_CREATION_ERROR',
  /** File could not be created because the model can't be converted to USDZ format. */
  Model3DGlbToUsdzConversionError = 'MODEL3D_GLB_TO_USDZ_CONVERSION_ERROR',
  /** File could not be created because the model file failed processing. */
  Model3DProcessingFailure = 'MODEL3D_PROCESSING_FAILURE',
  /** File could not be created because the model's thumbnail generation failed. */
  Model3DThumbnailGenerationError = 'MODEL3D_THUMBNAIL_GENERATION_ERROR',
  /** There was an issue while trying to generate a new thumbnail. */
  Model3DThumbnailRegenerationError = 'MODEL3D_THUMBNAIL_REGENERATION_ERROR',
  /** Model failed validation. */
  Model3DValidationError = 'MODEL3D_VALIDATION_ERROR',
  /** File error has occurred for an unknown reason. */
  Unknown = 'UNKNOWN',
  /** File could not be created because the image is an unsupported file type. */
  UnsupportedImageFileType = 'UNSUPPORTED_IMAGE_FILE_TYPE',
  /** File could not be created because it has an invalid file type. */
  VideoInvalidFiletypeError = 'VIDEO_INVALID_FILETYPE_ERROR',
  /** File could not be created because it does not meet the maximum duration requirement. */
  VideoMaxDurationError = 'VIDEO_MAX_DURATION_ERROR',
  /** File could not be created because it does not meet the maximum height requirement. */
  VideoMaxHeightError = 'VIDEO_MAX_HEIGHT_ERROR',
  /** File could not be created because it does not meet the maximum width requirement. */
  VideoMaxWidthError = 'VIDEO_MAX_WIDTH_ERROR',
  /** File could not be created because the metadata could not be read. */
  VideoMetadataReadError = 'VIDEO_METADATA_READ_ERROR',
  /** File could not be created because it does not meet the minimum duration requirement. */
  VideoMinDurationError = 'VIDEO_MIN_DURATION_ERROR',
  /** File could not be created because it does not meet the minimum height requirement. */
  VideoMinHeightError = 'VIDEO_MIN_HEIGHT_ERROR',
  /** File could not be created because it does not meet the minimum width requirement. */
  VideoMinWidthError = 'VIDEO_MIN_WIDTH_ERROR',
  /** Video failed validation. */
  VideoValidationError = 'VIDEO_VALIDATION_ERROR'
}
/** The possible statuses for a file object. */
declare enum FileStatus {
  /** File processing has failed. */
  Failed = 'FAILED',
  /** File is being processed. */
  Processing = 'PROCESSING',
  /** File is ready to be displayed. */
  Ready = 'READY',
  /** File has been uploaded but hasn't been processed. */
  Uploaded = 'UPLOADED'
}
/** A filter option is one possible value in a search filter. */
type FilterOption = {
  __typename?: 'FilterOption'; /** The filter option's label for display purposes. */
  label: Scalars['String']['output']; /** The filter option's value. */
  value: Scalars['String']['output'];
};
/** An amount that's allocated to a line item based on an associated discount application. */
type FinancialSummaryDiscountAllocation = {
  __typename?: 'FinancialSummaryDiscountAllocation'; /** The money amount that's allocated per unit on the associated line based on the discount application in shop and presentment currencies. If the allocated amount for the line cannot be evenly divided by the quantity, then this amount will be an approximate amount, avoiding fractional pennies. For example, if the associated line had a quantity of 3 with a discount of 4 cents, then the discount distribution would be [0.01, 0.01, 0.02]. This field returns the highest number of the distribution. In this example, this would be 0.02. */
  approximateAllocatedAmountPerItem: MoneyBag; /** The discount application that the allocated amount originated from. */
  discountApplication: FinancialSummaryDiscountApplication;
};
/**
 * Discount applications capture the intentions of a discount source at
 * the time of application on an order's line items or shipping lines.
 */
type FinancialSummaryDiscountApplication = {
  __typename?: 'FinancialSummaryDiscountApplication'; /** The method by which the discount's value is applied to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod; /** How the discount amount is distributed on the discounted lines. */
  targetSelection: DiscountApplicationTargetSelection; /** Whether the discount is applied on line items or shipping lines. */
  targetType: DiscountApplicationTargetType;
};
/**
 * A shipment of one or more items from an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Tracks which [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects ship, their quantities, and the shipment's tracking information.
 *
 * Includes tracking details such as the carrier, tracking numbers, and URLs. The fulfillment connects to both the original order and any associated [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. [`FulfillmentEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent) objects record milestones throughout the shipment lifecycle, from creation through delivery.
 *
 * Multiple fulfillments can exist for a single order when items either ship separately or from different locations.
 */
type Fulfillment = LegacyInteroperability & Node & {
  __typename?: 'Fulfillment'; /** The date and time when the fulfillment was created. */
  createdAt: Scalars['DateTime']['output']; /** The date that this fulfillment was delivered. */
  deliveredAt?: Maybe<Scalars['DateTime']['output']>; /** Human readable display status for this fulfillment. */
  displayStatus?: Maybe<FulfillmentDisplayStatus>; /** The estimated date that this fulfillment will arrive. */
  estimatedDeliveryAt?: Maybe<Scalars['DateTime']['output']>; /** The history of events associated with this fulfillment. */
  events: FulfillmentEventConnection; /** List of the fulfillment's line items. */
  fulfillmentLineItems: FulfillmentLineItemConnection; /** A paginated list of fulfillment orders for the fulfillment. */
  fulfillmentOrders: FulfillmentOrderConnection; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The date and time when the fulfillment went into transit. */
  inTransitAt?: Maybe<Scalars['DateTime']['output']>; /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64']['output']; /** The location that the fulfillment was processed at. */
  location?: Maybe<Location>; /** Human readable reference identifier for this fulfillment. */
  name: Scalars['String']['output']; /** The order for which the fulfillment was created. */
  order: Order; /** The address at which the fulfillment occurred. This field is intended for tax purposes, as a full address is required for tax providers to accurately calculate taxes. Typically this is the address of the warehouse or fulfillment center. To retrieve a fulfillment location's address, use the `assignedLocation` field on the [`FulfillmentOrder`](/docs/api/admin-graphql/latest/objects/FulfillmentOrder) object instead. */
  originAddress?: Maybe<FulfillmentOriginAddress>; /** Whether any of the line items in the fulfillment require shipping. */
  requiresShipping: Scalars['Boolean']['output']; /** Fulfillment service associated with the fulfillment. */
  service?: Maybe<FulfillmentService>; /** The status of the fulfillment. */
  status: FulfillmentStatus; /** Sum of all line item quantities for the fulfillment. */
  totalQuantity: Scalars['Int']['output'];
  /**
   * Tracking information associated with the fulfillment,
   * such as the tracking company, tracking number, and tracking URL.
   */
  trackingInfo: Array<FulfillmentTrackingInfo$1>; /** The date and time when the fulfillment was last modified. */
  updatedAt: Scalars['DateTime']['output'];
};
/** An auto-generated type for paginating through multiple Fulfillments. */
type FulfillmentConnection = {
  __typename?: 'FulfillmentConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<FulfillmentEdge>; /** A list of nodes that are contained in FulfillmentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<Fulfillment>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** The display status of a fulfillment. */
declare enum FulfillmentDisplayStatus {
  /** Displayed as **Attempted delivery**. */
  AttemptedDelivery = 'ATTEMPTED_DELIVERY',
  /** Displayed as **Canceled**. */
  Canceled = 'CANCELED',
  /** Displayed as **Picked up by carrier**. */
  CarrierPickedUp = 'CARRIER_PICKED_UP',
  /** Displayed as **Confirmed**. */
  Confirmed = 'CONFIRMED',
  /** Displayed as **Delayed**. */
  Delayed = 'DELAYED',
  /** Displayed as **Delivered**. */
  Delivered = 'DELIVERED',
  /** Displayed as **Failure**. */
  Failure = 'FAILURE',
  /** Displayed as **Fulfilled**. */
  Fulfilled = 'FULFILLED',
  /** Displayed as **In transit**. */
  InTransit = 'IN_TRANSIT',
  /** Displayed as **Label printed**. */
  LabelPrinted = 'LABEL_PRINTED',
  /** Displayed as **Label purchased**. */
  LabelPurchased = 'LABEL_PURCHASED',
  /** Displayed as **Label voided**. */
  LabelVoided = 'LABEL_VOIDED',
  /** Displayed as **Marked as fulfilled**. */
  MarkedAsFulfilled = 'MARKED_AS_FULFILLED',
  /** Displayed as **Not delivered**. */
  NotDelivered = 'NOT_DELIVERED',
  /** Displayed as **Out for delivery**. */
  OutForDelivery = 'OUT_FOR_DELIVERY',
  /** Displayed as **Picked up**. */
  PickedUp = 'PICKED_UP',
  /** Displayed as **Ready for pickup**. */
  ReadyForPickup = 'READY_FOR_PICKUP',
  /** Displayed as **Submitted**. */
  Submitted = 'SUBMITTED'
}
/** An auto-generated type which holds one Fulfillment and a cursor during pagination. */
type FulfillmentEdge = {
  __typename?: 'FulfillmentEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of FulfillmentEdge. */
  node: Fulfillment;
};
/**
 * A tracking event that records the status and location of a fulfillment at a specific point in time. Each event captures details such as the [status](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent#field-FulfillmentEvent.fields.status) (for example, in transit, out for delivery, delivered) and any [messages](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent#field-FulfillmentEvent.fields.message) associated with the event.
 *
 * Fulfillment events provide a chronological history of a package's journey from shipment to delivery. They include timestamps, geographic coordinates, and estimated delivery dates to track fulfillment progress.
 */
type FulfillmentEvent = Node & {
  __typename?: 'FulfillmentEvent'; /** The street address where this fulfillment event occurred. */
  address1?: Maybe<Scalars['String']['output']>; /** The city where this fulfillment event occurred. */
  city?: Maybe<Scalars['String']['output']>; /** The country where this fulfillment event occurred. */
  country?: Maybe<Scalars['String']['output']>; /** The date and time when the fulfillment event was created. */
  createdAt: Scalars['DateTime']['output']; /** The estimated delivery date and time of the fulfillment. */
  estimatedDeliveryAt?: Maybe<Scalars['DateTime']['output']>; /** The time at which this fulfillment event happened. */
  happenedAt: Scalars['DateTime']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The latitude where this fulfillment event occurred. */
  latitude?: Maybe<Scalars['Float']['output']>; /** The longitude where this fulfillment event occurred. */
  longitude?: Maybe<Scalars['Float']['output']>; /** A message associated with this fulfillment event. */
  message?: Maybe<Scalars['String']['output']>; /** The province where this fulfillment event occurred. */
  province?: Maybe<Scalars['String']['output']>; /** The status of this fulfillment event. */
  status: FulfillmentEventStatus; /** The zip code of the location where this fulfillment event occurred. */
  zip?: Maybe<Scalars['String']['output']>;
};
/** An auto-generated type for paginating through multiple FulfillmentEvents. */
type FulfillmentEventConnection = {
  __typename?: 'FulfillmentEventConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<FulfillmentEventEdge>; /** A list of nodes that are contained in FulfillmentEventEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<FulfillmentEvent>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one FulfillmentEvent and a cursor during pagination. */
type FulfillmentEventEdge = {
  __typename?: 'FulfillmentEventEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of FulfillmentEventEdge. */
  node: FulfillmentEvent;
};
/** The status that describes a fulfillment or delivery event. */
declare enum FulfillmentEventStatus {
  /** A delivery was attempted. */
  AttemptedDelivery = 'ATTEMPTED_DELIVERY',
  /** The fulfillment has been picked up by the carrier. */
  CarrierPickedUp = 'CARRIER_PICKED_UP',
  /** The fulfillment is confirmed. This is the default value when no other information is available. */
  Confirmed = 'CONFIRMED',
  /** The fulfillment is delayed. */
  Delayed = 'DELAYED',
  /** The fulfillment was successfully delivered. */
  Delivered = 'DELIVERED',
  /** The fulfillment request failed. */
  Failure = 'FAILURE',
  /** The fulfillment is in transit. */
  InTransit = 'IN_TRANSIT',
  /** A purchased shipping label has been printed. */
  LabelPrinted = 'LABEL_PRINTED',
  /** A shipping label has been purchased. */
  LabelPurchased = 'LABEL_PURCHASED',
  /** The fulfillment is out for delivery. */
  OutForDelivery = 'OUT_FOR_DELIVERY',
  /** The fulfillment is ready to be picked up. */
  ReadyForPickup = 'READY_FOR_PICKUP'
}
/** A fulfillment hold currently applied on a fulfillment order. */
type FulfillmentHold = Node & {
  __typename?: 'FulfillmentHold'; /** The localized reason for the fulfillment hold for display purposes. */
  displayReason: Scalars['String']['output'];
  /**
   * An identifier an app can use to reference one of many holds it applied to a fulfillment order.
   * This field must be unique among the holds that a single app applies to a single fulfillment order.
   */
  handle?: Maybe<Scalars['String']['output']>; /** The app that created the fulfillment hold. */
  heldByApp?: Maybe<App>; /** A boolean value that indicates whether the requesting app created the fulfillment hold. */
  heldByRequestingApp: Scalars['Boolean']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The reason for the fulfillment hold. */
  reason: FulfillmentHoldReason; /** Additional information about the fulfillment hold reason. */
  reasonNotes?: Maybe<Scalars['String']['output']>;
};
/** The reason for a fulfillment hold. */
declare enum FulfillmentHoldReason {
  /** The fulfillment hold is applied because payment is pending. */
  AwaitingPayment = 'AWAITING_PAYMENT',
  /** The fulfillment hold is applied because of return items not yet received during an exchange. */
  AwaitingReturnItems = 'AWAITING_RETURN_ITEMS',
  /** The fulfillment hold is applied because of a high risk of fraud. */
  HighRiskOfFraud = 'HIGH_RISK_OF_FRAUD',
  /** The fulfillment hold is applied because of an incorrect address. */
  IncorrectAddress = 'INCORRECT_ADDRESS',
  /** The fulfillment hold is applied because inventory is out of stock. */
  InventoryOutOfStock = 'INVENTORY_OUT_OF_STOCK',
  /** The fulfillment hold is applied because of a post purchase upsell offer. */
  OnlineStorePostPurchaseCrossSell = 'ONLINE_STORE_POST_PURCHASE_CROSS_SELL',
  /** The fulfillment hold is applied for another reason. */
  Other = 'OTHER',
  /** The fulfillment hold is applied because of an unknown delivery date. */
  UnknownDeliveryDate = 'UNKNOWN_DELIVERY_DATE'
}
/**
 * A line item from an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) that's included in a [`Fulfillment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment). Links the fulfillment to specific items from the original order, tracking how many units were fulfilled.
 *
 * > Note: The discounted total excludes order-level discounts, showing only line-item specific discount amounts.
 */
type FulfillmentLineItem = Node & {
  __typename?: 'FulfillmentLineItem';
  /**
   * The total price after discounts are applied.
   * @deprecated Use `discountedTotalSet` instead.
   */
  discountedTotal: Scalars['Money']['output']; /** The total price after discounts are applied in shop and presentment currencies. This value doesn't include order-level discounts. */
  discountedTotalSet: MoneyBag; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The associated order's line item. */
  lineItem: LineItem;
  /**
   * The total price before discounts are applied.
   * @deprecated Use `originalTotalSet` instead.
   */
  originalTotal: Scalars['Money']['output']; /** The total price before discounts are applied in shop and presentment currencies. */
  originalTotalSet: MoneyBag; /** Number of line items in the fulfillment. */
  quantity?: Maybe<Scalars['Int']['output']>;
};
/** An auto-generated type for paginating through multiple FulfillmentLineItems. */
type FulfillmentLineItemConnection = {
  __typename?: 'FulfillmentLineItemConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<FulfillmentLineItemEdge>; /** A list of nodes that are contained in FulfillmentLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<FulfillmentLineItem>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one FulfillmentLineItem and a cursor during pagination. */
type FulfillmentLineItemEdge = {
  __typename?: 'FulfillmentLineItemEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of FulfillmentLineItemEdge. */
  node: FulfillmentLineItem;
};
/**
 * The FulfillmentOrder object represents either an item or a group of items in an
 * [Order](https://shopify.dev/api/admin-graphql/latest/objects/Order)
 * that are expected to be fulfilled from the same location.
 * There can be more than one fulfillment order for an
 * [order](https://shopify.dev/api/admin-graphql/latest/objects/Order)
 * at a given location.
 *
 * {{ '/api/reference/fulfillment_order_relationships.png' | image }}
 *
 * Fulfillment orders represent the work which is intended to be done in relation to an order.
 * When fulfillment has started for one or more line items, a
 * [Fulfillment](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment)
 * is created by a merchant or third party to represent the ongoing or completed work of fulfillment.
 *
 * [See below for more details on creating fulfillments](#the-lifecycle-of-a-fulfillment-order-at-a-location-which-is-managed-by-a-fulfillment-service).
 *
 * > Note:
 * > Shopify creates fulfillment orders automatically when an order is created.
 * > It is not possible to manually create fulfillment orders.
 * >
 * > [See below for more details on the lifecycle of a fulfillment order](#the-lifecycle-of-a-fulfillment-order).
 *
 * ## Retrieving fulfillment orders
 *
 * ### Fulfillment orders from an order
 *
 * All fulfillment orders related to a given order can be retrieved with the
 * [Order.fulfillmentOrders](https://shopify.dev/api/admin-graphql/latest/objects/Order#connection-order-fulfillmentorders)
 * connection.
 *
 * [API access scopes](#api-access-scopes)
 * govern which fulfillments orders are returned to clients.
 * An API client will only receive a subset of the fulfillment orders which belong to an order
 * if they don't have the necessary access scopes to view all of the fulfillment orders.
 *
 * ### Fulfillment orders assigned to the app for fulfillment
 *
 * Fulfillment service apps can retrieve the fulfillment orders which have been assigned to their locations with the
 * [assignedFulfillmentOrders](https://shopify.dev/api/admin-graphql/2024-07/objects/queryroot#connection-assignedfulfillmentorders)
 * connection.
 * Use the `assignmentStatus` argument to control whether all assigned fulfillment orders
 * should be returned or only those where a merchant has sent a
 * [fulfillment request](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrderMerchantRequest)
 * and it has yet to be responded to.
 *
 * The API client must be granted the `read_assigned_fulfillment_orders` access scope to access
 * the assigned fulfillment orders.
 *
 * ### All fulfillment orders
 *
 * Apps can retrieve all fulfillment orders with the
 * [fulfillmentOrders](https://shopify.dev/api/admin-graphql/latest/queries/fulfillmentOrders)
 * query. This query returns all assigned, merchant-managed, and third-party fulfillment orders on the shop,
 * which are accessible to the app according to the
 * [fulfillment order access scopes](#api-access-scopes) it was granted with.
 *
 * ## The lifecycle of a fulfillment order
 *
 * ### Fulfillment Order Creation
 *
 * After an order is created, a background worker performs the order routing process which determines
 * which locations will be responsible for fulfilling the purchased items.
 * Once the order routing process is complete, one or more fulfillment orders will be created
 * and assigned to these locations. It is not possible to manually create fulfillment orders.
 *
 * Once a fulfillment order has been created, it will have one of two different lifecycles depending on
 * the type of location which the fulfillment order is assigned to.
 *
 * ### The lifecycle of a fulfillment order at a merchant managed location
 *
 * Fulfillment orders are completed by creating
 * [fulfillments](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment).
 * Fulfillments represents the work done.
 *
 * For digital products a merchant or an order management app would create a fulfilment once the digital asset
 * has been provisioned.
 * For example, in the case of a digital gift card, a merchant would to do this once
 * the gift card has been activated - before the email has been shipped.
 *
 * On the other hand, for a traditional shipped order,
 * a merchant or an order management app would create a fulfillment after picking and packing the items relating
 * to a fulfillment order, but before the courier has collected the goods.
 *
 * [Learn about managing fulfillment orders as an order management app](https://shopify.dev/apps/fulfillment/order-management-apps/manage-fulfillments).
 *
 * ### The lifecycle of a fulfillment order at a location which is managed by a fulfillment service
 *
 * For fulfillment orders which are assigned to a location that is managed by a fulfillment service,
 * a merchant or an Order Management App can
 * [send a fulfillment request](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitFulfillmentRequest)
 * to the fulfillment service which operates the location to request that they fulfill the associated items.
 * A fulfillment service has the option to
 * [accept](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderAcceptFulfillmentRequest)
 * or [reject](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderRejectFulfillmentRequest)
 * this fulfillment request.
 *
 * Once the fulfillment service has accepted the request, the request can no longer be cancelled by the merchant
 * or order management app and instead a
 * [cancellation request must be submitted](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitCancellationRequest)
 * to the fulfillment service.
 *
 * Once a fulfillment service accepts a fulfillment request,
 * then after they are ready to pack items and send them for delivery, they create fulfillments with the
 * [fulfillmentCreate](https://shopify.dev/api/admin-graphql/unstable/mutations/fulfillmentCreate)
 * mutation.
 * They can provide tracking information right away or create fulfillments without it and then
 * update the tracking information for fulfillments with the
 * [fulfillmentTrackingInfoUpdate](https://shopify.dev/api/admin-graphql/unstable/mutations/fulfillmentTrackingInfoUpdate)
 * mutation.
 *
 * [Learn about managing fulfillment orders as a fulfillment service](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments).
 *
 * ## API access scopes
 *
 * Fulfillment orders are governed by the following API access scopes:
 *
 * * The `read_merchant_managed_fulfillment_orders` and
 *   `write_merchant_managed_fulfillment_orders` access scopes
 *   grant access to fulfillment orders assigned to merchant-managed locations.
 * * The `read_assigned_fulfillment_orders` and `write_assigned_fulfillment_orders`
 *   access scopes are intended for fulfillment services.
 *   These scopes grant access to fulfillment orders assigned to locations that are being managed
 *   by fulfillment services.
 * * The `read_third_party_fulfillment_orders` and `write_third_party_fulfillment_orders`
 *   access scopes grant access to fulfillment orders
 *   assigned to locations managed by other fulfillment services.
 *
 * ### Fulfillment service app access scopes
 *
 * Usually, **fulfillment services** have the `write_assigned_fulfillment_orders` access scope
 * and don't have the `*_third_party_fulfillment_orders`
 * or `*_merchant_managed_fulfillment_orders` access scopes.
 * The app will only have access to the fulfillment orders assigned to their location
 * (or multiple locations if the app registers multiple fulfillment services on the shop).
 * The app will not have access to fulfillment orders assigned to merchant-managed locations
 * or locations owned by other fulfillment service apps.
 *
 * ### Order management app access scopes
 *
 * **Order management apps** will usually request `write_merchant_managed_fulfillment_orders` and
 * `write_third_party_fulfillment_orders` access scopes. This will allow them to manage all fulfillment orders
 * on behalf of a merchant.
 *
 * If an app combines the functions of an order management app and a fulfillment service,
 * then the app should request all
 * access scopes to manage all assigned and all unassigned fulfillment orders.
 *
 * ## Notifications about fulfillment orders
 *
 * Fulfillment services are required to
 * [register](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentService)
 * a self-hosted callback URL which has a number of uses. One of these uses is that this callback URL will be notified
 * whenever a merchant submits a fulfillment or cancellation request.
 *
 * Both merchants and apps can
 * [subscribe](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#webhooks)
 * to the
 * [fulfillment order webhooks](https://shopify.dev/api/admin-graphql/latest/enums/WebhookSubscriptionTopic#value-fulfillmentorderscancellationrequestaccepted)
 * to be notified whenever fulfillment order related domain events occur.
 *
 * [Learn about fulfillment workflows](https://shopify.dev/apps/fulfillment).
 */
type FulfillmentOrder = Node & {
  __typename?: 'FulfillmentOrder';
  /**
   * The fulfillment order's assigned location. This is the location where the fulfillment is expected to happen.
   *
   * The fulfillment order's assigned location might change in the following cases:
   *
   * - The fulfillment order has been entirely moved to a new location. For example, the [fulfillmentOrderMove](
   *   https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderMove
   *   ) mutation has been called, and you see the original fulfillment order in the [movedFulfillmentOrder](
   *   https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderMove#field-fulfillmentordermovepayload-movedfulfillmentorder
   *   ) field within the mutation's response.
   * - Work on the fulfillment order hasn't yet begun, which means that the fulfillment order has the
   *     [OPEN](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-open),
   *     [SCHEDULED](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-scheduled), or
   *     [ON_HOLD](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-onhold)
   *     status, and the shop's location properties might be undergoing edits (for example, in the Shopify admin).
   */
  assignedLocation: FulfillmentOrderAssignedLocation; /** ID of the channel that created the order. */
  channelId?: Maybe<Scalars['ID']['output']>; /** Date and time when the fulfillment order was created. */
  createdAt: Scalars['DateTime']['output']; /** Delivery method of this fulfillment order. */
  deliveryMethod?: Maybe<DeliveryMethod>; /** The destination where the items should be sent. */
  destination?: Maybe<FulfillmentOrderDestination$1>; /** The date and time at which the fulfillment order will be fulfillable. When this date and time is reached, the scheduled fulfillment order is automatically transitioned to open. For example, the `fulfill_at` date for a subscription order might be the 1st of each month, a pre-order `fulfill_at` date would be `nil`, and a standard order `fulfill_at` date would be the order creation date. */
  fulfillAt?: Maybe<Scalars['DateTime']['output']>; /** The latest date and time by which all items in the fulfillment order need to be fulfilled. */
  fulfillBy?: Maybe<Scalars['DateTime']['output']>; /** The fulfillment holds applied on the fulfillment order. */
  fulfillmentHolds: Array<FulfillmentHold>; /** Fulfillment orders eligible for merging with the given fulfillment order. */
  fulfillmentOrdersForMerge: FulfillmentOrderConnection; /** A list of fulfillments for the fulfillment order. */
  fulfillments: FulfillmentConnection; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The duties delivery method of this fulfillment order. */
  internationalDuties?: Maybe<FulfillmentOrderInternationalDuties>; /** A list of the fulfillment order's line items. */
  lineItems: FulfillmentOrderLineItemConnection; /** A list of locations that the fulfillment order can potentially move to. */
  locationsForMove: FulfillmentOrderLocationForMoveConnection; /** A list of requests sent by the merchant or an order management app to the fulfillment service for the fulfillment order. */
  merchantRequests: FulfillmentOrderMerchantRequestConnection; /** The order that's associated with the fulfillment order. */
  order: Order; /** ID of the order that's associated with the fulfillment order. */
  orderId: Scalars['ID']['output'];
  /**
   * The unique identifier for the order that appears on the order page in the Shopify admin and the <b>Order status</b> page.
   * For example, "#1001", "EN1001", or "1001-A".
   * This value isn't unique across multiple stores.
   */
  orderName: Scalars['String']['output'];
  /**
   * The date and time when the order was processed.
   * This date and time might not match the date and time when the order was created.
   */
  orderProcessedAt: Scalars['DateTime']['output']; /** The request status of the fulfillment order. */
  requestStatus: FulfillmentOrderRequestStatus; /** The status of the fulfillment order. */
  status: FulfillmentOrderStatus; /** The actions that can be performed on this fulfillment order. */
  supportedActions: Array<FulfillmentOrderSupportedAction>; /** The date and time when the fulfillment order was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};
/** The actions that can be taken on a fulfillment order. */
declare enum FulfillmentOrderAction {
  /** Cancels a fulfillment order. The corresponding mutation for this action is `fulfillmentOrderCancel`. */
  CancelFulfillmentOrder = 'CANCEL_FULFILLMENT_ORDER',
  /** Creates a fulfillment for selected line items in the fulfillment order. The corresponding mutation for this action is `fulfillmentCreateV2`. */
  CreateFulfillment = 'CREATE_FULFILLMENT',
  /** Opens an external URL to initiate the fulfillment process outside Shopify. This action should be paired with `FulfillmentOrderSupportedAction.externalUrl`. */
  External = 'EXTERNAL',
  /** Applies a fulfillment hold on the fulfillment order. The corresponding mutation for this action is `fulfillmentOrderHold`. */
  Hold = 'HOLD',
  /** Marks the fulfillment order as open. The corresponding mutation for this action is `fulfillmentOrderOpen`. */
  MarkAsOpen = 'MARK_AS_OPEN',
  /** Merges a fulfillment order. The corresponding mutation for this action is `fulfillmentOrderMerge`. */
  Merge = 'MERGE',
  /** Moves a fulfillment order. The corresponding mutation for this action is `fulfillmentOrderMove`. */
  Move = 'MOVE',
  /** Releases the fulfillment hold on the fulfillment order. The corresponding mutation for this action is `fulfillmentOrderReleaseHold`. */
  ReleaseHold = 'RELEASE_HOLD',
  /** Sends a cancellation request to the fulfillment service of a fulfillment order. The corresponding mutation for this action is `fulfillmentOrderSubmitCancellationRequest`. */
  RequestCancellation = 'REQUEST_CANCELLATION',
  /** Sends a request for fulfilling selected line items in a fulfillment order to a fulfillment service. The corresponding mutation for this action is `fulfillmentOrderSubmitFulfillmentRequest`. */
  RequestFulfillment = 'REQUEST_FULFILLMENT',
  /** Splits a fulfillment order. The corresponding mutation for this action is `fulfillmentOrderSplit`. */
  Split = 'SPLIT'
}
/**
 * The fulfillment order's assigned location. This is the location where the fulfillment is expected to happen.
 *
 *  The fulfillment order's assigned location might change in the following cases:
 *
 *   - The fulfillment order has been entirely moved to a new location. For example, the [fulfillmentOrderMove](
 *     https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderMove
 *     ) mutation has been called, and you see the original fulfillment order in the [movedFulfillmentOrder](
 *     https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderMove#field-fulfillmentordermovepayload-movedfulfillmentorder
 *     ) field within the mutation's response.
 *
 *   - Work on the fulfillment order has not yet begun, which means that the fulfillment order has the
 *       [OPEN](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-open),
 *       [SCHEDULED](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-scheduled), or
 *       [ON_HOLD](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-onhold)
 *       status, and the shop's location properties might be undergoing edits (for example, in the Shopify admin).
 *
 * If the [fulfillmentOrderMove](
 * https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderMove
 * ) mutation has moved the fulfillment order's line items to a new location,
 * but hasn't moved the fulfillment order instance itself, then the original fulfillment order's assigned location
 * doesn't change.
 * This happens if the fulfillment order is being split during the move, or if all line items can be moved
 * to an existing fulfillment order at a new location.
 *
 * Once the fulfillment order has been taken into work or canceled,
 * which means that the fulfillment order has the
 * [IN_PROGRESS](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-inprogress),
 * [CLOSED](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-closed),
 * [CANCELLED](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-cancelled), or
 * [INCOMPLETE](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-incomplete)
 * status, `FulfillmentOrderAssignedLocation` acts as a snapshot of the shop's location content.
 * Up-to-date shop's location data may be queried through [location](
 *   https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrderAssignedLocation#field-fulfillmentorderassignedlocation-location
 * ) connection.
 */
type FulfillmentOrderAssignedLocation = {
  __typename?: 'FulfillmentOrderAssignedLocation'; /** The first line of the address for the location. */
  address1?: Maybe<Scalars['String']['output']>; /** The second line of the address for the location. */
  address2?: Maybe<Scalars['String']['output']>; /** The city of the location. */
  city?: Maybe<Scalars['String']['output']>; /** The two-letter country code of the location. */
  countryCode: CountryCode;
  /**
   * The location where the fulfillment is expected to happen. This value might be different from
   * `FulfillmentOrderAssignedLocation` if the location's attributes were updated
   * after the fulfillment order was taken into work of canceled.
   */
  location?: Maybe<Location>; /** The name of the location. */
  name: Scalars['String']['output']; /** The phone number of the location. */
  phone?: Maybe<Scalars['String']['output']>; /** The province of the location. */
  province?: Maybe<Scalars['String']['output']>; /** The ZIP code of the location. */
  zip?: Maybe<Scalars['String']['output']>;
};
/** The assigment status to be used to filter fulfillment orders. */
declare enum FulfillmentOrderAssignmentStatus {
  /**
   * Fulfillment orders for which the merchant has requested cancellation of
   * the previously accepted fulfillment request.
   */
  CancellationRequested = 'CANCELLATION_REQUESTED',
  /**
   * Fulfillment orders for which the merchant's fulfillment request has been accepted.
   * Any number of fulfillments can be created on these fulfillment orders
   * to completely fulfill the requested items.
   */
  FulfillmentAccepted = 'FULFILLMENT_ACCEPTED',
  /** Fulfillment orders for which the merchant has requested fulfillment. */
  FulfillmentRequested = 'FULFILLMENT_REQUESTED',
  /** Fulfillment orders for which the merchant hasn't yet requested fulfillment. */
  FulfillmentUnsubmitted = 'FULFILLMENT_UNSUBMITTED'
}
/** An auto-generated type for paginating through multiple FulfillmentOrders. */
type FulfillmentOrderConnection = {
  __typename?: 'FulfillmentOrderConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<FulfillmentOrderEdge>; /** A list of nodes that are contained in FulfillmentOrderEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<FulfillmentOrder>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** Represents the destination where the items should be sent upon fulfillment. */
type FulfillmentOrderDestination$1 = Node & {
  __typename?: 'FulfillmentOrderDestination'; /** The first line of the address of the destination. */
  address1?: Maybe<Scalars['String']['output']>; /** The second line of the address of the destination. */
  address2?: Maybe<Scalars['String']['output']>; /** The city of the destination. */
  city?: Maybe<Scalars['String']['output']>; /** The company of the destination. */
  company?: Maybe<Scalars['String']['output']>; /** The two-letter country code of the destination. */
  countryCode?: Maybe<CountryCode>; /** The email of the customer at the destination. */
  email?: Maybe<Scalars['String']['output']>; /** The first name of the customer at the destination. */
  firstName?: Maybe<Scalars['String']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The last name of the customer at the destination. */
  lastName?: Maybe<Scalars['String']['output']>; /** The location designated for the pick-up of the fulfillment order. */
  location?: Maybe<Location>; /** The phone number of the customer at the destination. */
  phone?: Maybe<Scalars['String']['output']>; /** The province of the destination. */
  province?: Maybe<Scalars['String']['output']>; /** The ZIP code of the destination. */
  zip?: Maybe<Scalars['String']['output']>;
};
/** An auto-generated type which holds one FulfillmentOrder and a cursor during pagination. */
type FulfillmentOrderEdge = {
  __typename?: 'FulfillmentOrderEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of FulfillmentOrderEdge. */
  node: FulfillmentOrder;
};
/** The international duties relevant to a fulfillment order. */
type FulfillmentOrderInternationalDuties = {
  __typename?: 'FulfillmentOrderInternationalDuties'; /** The method of duties payment. Example values: `DDP`, `DAP`. */
  incoterm: Scalars['String']['output'];
};
/**
 * Associates an order line item with the quantities that require fulfillment as part of a fulfillment order. Each Fulfillment Order Line Item object tracks the total quantity to fulfill and the remaining quantity yet to be fulfilled, along with details about the line item being fulfilled and pricing information.
 *
 * The line item provides additional fulfillment data including whether the item requires shipping. Financial summaries show pricing details with discounts applied, while warning messages alert merchants to any issues that might affect fulfillment.
 */
type FulfillmentOrderLineItem$1 = Node & {
  __typename?: 'FulfillmentOrderLineItem'; /** The financial summary for the Fulfillment Order's Line Items. */
  financialSummaries: Array<FulfillmentOrderLineItemFinancialSummary>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The image associated to the line item's variant. */
  image?: Maybe<Image>; /** The ID of the inventory item. */
  inventoryItemId?: Maybe<Scalars['ID']['output']>; /** The associated order line item. */
  lineItem: LineItem;
  /**
   * The variant unit price without discounts applied, in shop and presentment currencies.
   * @deprecated Use `financialSummaries` instead.
   */
  originalUnitPriceSet: MoneyBag; /** The title of the product. */
  productTitle: Scalars['String']['output']; /** The number of units remaining to be fulfilled. */
  remainingQuantity: Scalars['Int']['output']; /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars['Boolean']['output']; /** The variant SKU number. */
  sku?: Maybe<Scalars['String']['output']>; /** The total number of units to be fulfilled. */
  totalQuantity: Scalars['Int']['output']; /** The product variant associated to the fulfillment order line item. */
  variant?: Maybe<ProductVariant>; /** The name of the variant. */
  variantTitle?: Maybe<Scalars['String']['output']>; /** The name of the vendor who made the variant. */
  vendor?: Maybe<Scalars['String']['output']>; /** Warning messages for a fulfillment order line item. */
  warnings: Array<FulfillmentOrderLineItemWarning>; /** The weight of a line item unit. */
  weight?: Maybe<Weight>;
};
/** An auto-generated type for paginating through multiple FulfillmentOrderLineItems. */
type FulfillmentOrderLineItemConnection = {
  __typename?: 'FulfillmentOrderLineItemConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<FulfillmentOrderLineItemEdge>; /** A list of nodes that are contained in FulfillmentOrderLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<FulfillmentOrderLineItem$1>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one FulfillmentOrderLineItem and a cursor during pagination. */
type FulfillmentOrderLineItemEdge = {
  __typename?: 'FulfillmentOrderLineItemEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of FulfillmentOrderLineItemEdge. */
  node: FulfillmentOrderLineItem$1;
};
/** The financial details of a fulfillment order line item. */
type FulfillmentOrderLineItemFinancialSummary = {
  __typename?: 'FulfillmentOrderLineItemFinancialSummary'; /** The approximate split price of a line item unit, in shop and presentment currencies. This value doesn't include discounts applied to the entire order.For the full picture of applied discounts, see discountAllocations. */
  approximateDiscountedUnitPriceSet: MoneyBag; /** The discounts that have been allocated onto the line item by discount applications, not including order edits and refunds. */
  discountAllocations: Array<FinancialSummaryDiscountAllocation>; /** The variant unit price without discounts applied, in shop and presentment currencies. */
  originalUnitPriceSet: MoneyBag; /** Number of line items that this financial summary applies to. */
  quantity: Scalars['Int']['output'];
};
/** The input fields used to include the quantity of the fulfillment order line item that should be fulfilled. */
type FulfillmentOrderLineItemInput = {
  /** The ID of the fulfillment order line item. */id: Scalars['ID']['input']; /** The quantity of the fulfillment order line item. */
  quantity: Scalars['Int']['input'];
};
/** A fulfillment order line item warning. For example, a warning about why a fulfillment request was rejected. */
type FulfillmentOrderLineItemWarning = {
  __typename?: 'FulfillmentOrderLineItemWarning'; /** The description of warning. */
  description?: Maybe<Scalars['String']['output']>; /** The title of warning. */
  title?: Maybe<Scalars['String']['output']>;
};
/** The input fields used to include the line items of a specified fulfillment order that should be fulfilled. */
type FulfillmentOrderLineItemsInput = {
  /** The ID of the fulfillment order. */fulfillmentOrderId: Scalars['ID']['input'];
  /**
   * The fulfillment order line items to be fulfilled.
   * If left blank, all line items of the fulfillment order will be fulfilled.
   * Accepts a maximum of 512 line items.
   */
  fulfillmentOrderLineItems?: InputMaybe<Array<FulfillmentOrderLineItemInput>>;
};
/** A location that a fulfillment order can potentially move to. */
type FulfillmentOrderLocationForMove = {
  __typename?: 'FulfillmentOrderLocationForMove'; /** Fulfillment order line items that can be moved from their current location to the given location. */
  availableLineItems: FulfillmentOrderLineItemConnection;
  /**
   * Total number of fulfillment order line items that can be moved from their current assigned location to the
   * given location.
   */
  availableLineItemsCount?: Maybe<Count>; /** The location being considered as the fulfillment order's new assigned location. */
  location: Location;
  /**
   * A human-readable string with the reason why the fulfillment order, or some of its line items, can't be
   * moved to the location.
   */
  message?: Maybe<Scalars['String']['output']>; /** Whether the fulfillment order can be moved to the location. */
  movable: Scalars['Boolean']['output']; /** Fulfillment order line items that cannot be moved from their current location to the given location. */
  unavailableLineItems: FulfillmentOrderLineItemConnection;
  /**
   * Total number of fulfillment order line items that can't be moved from their current assigned location to the
   * given location.
   */
  unavailableLineItemsCount?: Maybe<Count>;
};
/** An auto-generated type for paginating through multiple FulfillmentOrderLocationForMoves. */
type FulfillmentOrderLocationForMoveConnection = {
  __typename?: 'FulfillmentOrderLocationForMoveConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<FulfillmentOrderLocationForMoveEdge>; /** A list of nodes that are contained in FulfillmentOrderLocationForMoveEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<FulfillmentOrderLocationForMove>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one FulfillmentOrderLocationForMove and a cursor during pagination. */
type FulfillmentOrderLocationForMoveEdge = {
  __typename?: 'FulfillmentOrderLocationForMoveEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of FulfillmentOrderLocationForMoveEdge. */
  node: FulfillmentOrderLocationForMove;
};
/**
 * A request made by the merchant or an order management app to a fulfillment service
 * for a fulfillment order.
 */
type FulfillmentOrderMerchantRequest$1 = Node & {
  __typename?: 'FulfillmentOrderMerchantRequest'; /** The fulfillment order associated with the merchant request. */
  fulfillmentOrder: FulfillmentOrder; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The kind of request made. */
  kind: FulfillmentOrderMerchantRequestKind; /** The optional message that the merchant included in the request. */
  message?: Maybe<Scalars['String']['output']>;
  /**
   * Additional options requested by the merchant. These depend on the `kind` of the request.
   * For example, for a `FULFILLMENT_REQUEST`, one option is `notify_customer`, which indicates whether the
   * merchant intends to notify the customer upon fulfillment. The fulfillment service can then set
   * `notifyCustomer` when making calls to `FulfillmentCreate`.
   */
  requestOptions?: Maybe<Scalars['JSON']['output']>; /** The response from the fulfillment service. */
  responseData?: Maybe<Scalars['JSON']['output']>; /** The timestamp when the request was made. */
  sentAt: Scalars['DateTime']['output'];
};
/** An auto-generated type for paginating through multiple FulfillmentOrderMerchantRequests. */
type FulfillmentOrderMerchantRequestConnection = {
  __typename?: 'FulfillmentOrderMerchantRequestConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<FulfillmentOrderMerchantRequestEdge>; /** A list of nodes that are contained in FulfillmentOrderMerchantRequestEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<FulfillmentOrderMerchantRequest$1>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one FulfillmentOrderMerchantRequest and a cursor during pagination. */
type FulfillmentOrderMerchantRequestEdge = {
  __typename?: 'FulfillmentOrderMerchantRequestEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of FulfillmentOrderMerchantRequestEdge. */
  node: FulfillmentOrderMerchantRequest$1;
};
/** The kinds of request merchants can make to a fulfillment service. */
declare enum FulfillmentOrderMerchantRequestKind {
  /** The merchant requests cancellation of an `IN_PROGRESS` fulfillment order. */
  CancellationRequest = 'CANCELLATION_REQUEST',
  /** The merchant requests fulfillment for an `OPEN` fulfillment order. */
  FulfillmentRequest = 'FULFILLMENT_REQUEST'
}
/** The request status of a fulfillment order. */
declare enum FulfillmentOrderRequestStatus {
  /** The fulfillment service accepted the merchant's fulfillment request. */
  Accepted = 'ACCEPTED',
  /** The fulfillment service accepted the merchant's fulfillment cancellation request. */
  CancellationAccepted = 'CANCELLATION_ACCEPTED',
  /** The fulfillment service rejected the merchant's fulfillment cancellation request. */
  CancellationRejected = 'CANCELLATION_REJECTED',
  /** The merchant requested a cancellation of the fulfillment request for this fulfillment order. */
  CancellationRequested = 'CANCELLATION_REQUESTED',
  /** The fulfillment service closed the fulfillment order without completing it. */
  Closed = 'CLOSED',
  /** The fulfillment service rejected the merchant's fulfillment request. */
  Rejected = 'REJECTED',
  /** The merchant requested fulfillment for this fulfillment order. */
  Submitted = 'SUBMITTED',
  /**
   * The initial request status for the newly-created fulfillment orders. This is the only valid
   * request status for fulfillment orders that aren't assigned to a fulfillment service.
   */
  Unsubmitted = 'UNSUBMITTED'
}
/** The status of a fulfillment order. */
declare enum FulfillmentOrderStatus {
  /** The fulfillment order has been cancelled by the merchant. */
  Cancelled = 'CANCELLED',
  /** The fulfillment order has been completed and closed. */
  Closed = 'CLOSED',
  /** The fulfillment order cannot be completed as requested. */
  Incomplete = 'INCOMPLETE',
  /** The fulfillment order is being processed. */
  InProgress = 'IN_PROGRESS',
  /** The fulfillment order is on hold. The fulfillment process can't be initiated until the hold on the fulfillment order is released. */
  OnHold = 'ON_HOLD',
  /** The fulfillment order is ready for fulfillment. */
  Open = 'OPEN',
  /** The fulfillment order is deferred and will be ready for fulfillment after the date and time specified in `fulfill_at`. */
  Scheduled = 'SCHEDULED'
}
/** One of the actions that the fulfillment order supports in its current state. */
type FulfillmentOrderSupportedAction = {
  __typename?: 'FulfillmentOrderSupportedAction'; /** The action value. */
  action: FulfillmentOrderAction;
  /**
   * The external URL to be used to initiate the fulfillment process outside Shopify.
   * Applicable only when the `action` value is `EXTERNAL`.
   */
  externalUrl?: Maybe<Scalars['URL']['output']>;
};
/** The address at which the fulfillment occurred. This object is intended for tax purposes, as a full address is required for tax providers to accurately calculate taxes. Typically this is the address of the warehouse or fulfillment center. To retrieve a fulfillment location's address, use the `assignedLocation` field on the [`FulfillmentOrder`](/docs/api/admin-graphql/latest/objects/FulfillmentOrder) object instead. */
type FulfillmentOriginAddress = {
  __typename?: 'FulfillmentOriginAddress'; /** The street address of the fulfillment location. */
  address1?: Maybe<Scalars['String']['output']>; /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars['String']['output']>; /** The city in which the fulfillment location is located. */
  city?: Maybe<Scalars['String']['output']>; /** The country code of the fulfillment location. */
  countryCode: Scalars['String']['output']; /** The province code of the fulfillment location. */
  provinceCode?: Maybe<Scalars['String']['output']>; /** The zip code of the fulfillment location. */
  zip?: Maybe<Scalars['String']['output']>;
};
/** The input fields used to include the address at which the fulfillment occurred. This input object is intended for tax purposes, as a full address is required for tax providers to accurately calculate taxes. Typically this is the address of the warehouse or fulfillment center. To retrieve a fulfillment location's address, use the `assignedLocation` field on the [`FulfillmentOrder`](/docs/api/admin-graphql/latest/objects/FulfillmentOrder) object instead. */
type FulfillmentOriginAddressInput = {
  /** The street address of the fulfillment location. */address1?: InputMaybe<Scalars['String']['input']>; /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: InputMaybe<Scalars['String']['input']>; /** The city in which the fulfillment location is located. */
  city?: InputMaybe<Scalars['String']['input']>; /** The country of the fulfillment location. */
  countryCode: Scalars['String']['input']; /** The province of the fulfillment location. */
  provinceCode?: InputMaybe<Scalars['String']['input']>; /** The zip code of the fulfillment location. */
  zip?: InputMaybe<Scalars['String']['input']>;
};
/**
 * A **Fulfillment Service** is a third party warehouse that prepares and ships orders
 * on behalf of the store owner. Fulfillment services charge a fee to package and ship items
 * and update product inventory levels. Some well known fulfillment services with Shopify integrations
 * include: Amazon, Shipwire, and Rakuten. When an app registers a new `FulfillmentService` on a store,
 * Shopify automatically creates a `Location` that's associated to the fulfillment service.
 * To learn more about fulfillment services, refer to
 * [Manage fulfillments as a fulfillment service app](https://shopify.dev/apps/fulfillment/fulfillment-service-apps)
 * guide.
 *
 * ## Mutations
 *
 * You can work with the `FulfillmentService` object with the
 * [fulfillmentServiceCreate](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentServiceCreate),
 * [fulfillmentServiceUpdate](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentServiceUpdate),
 * and [fulfillmentServiceDelete](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentServiceDelete)
 * mutations.
 *
 * ## Hosted endpoints
 *
 * Fulfillment service providers integrate with Shopify by providing Shopify with a set of hosted endpoints that
 * Shopify can query on certain conditions.
 * These endpoints must have a common prefix, and this prefix should be supplied in the `callbackUrl` parameter
 * in the
 * [fulfillmentServiceCreate](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentServiceCreate)
 * mutation.
 *
 * - Shopify sends POST requests to the `<callbackUrl>/fulfillment_order_notification` endpoint
 *   to notify the fulfillment service about fulfillment requests and fulfillment cancellation requests.
 *
 *   For more information, refer to
 *   [Receive fulfillment requests and cancellations](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#step-2-receive-fulfillment-requests-and-cancellations).
 * - Shopify sends GET requests to the `<callbackUrl>/fetch_tracking_numbers` endpoint to retrieve tracking numbers for orders
 *   if `trackingSupport` is set to `true`.
 *
 *   For more information, refer to
 *   [Enable tracking support](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#step-8-enable-tracking-support-optional).
 *
 *   Fulfillment services can also update tracking information using the
 *   [fulfillmentTrackingInfoUpdate](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate) mutation,
 *   rather than waiting for Shopify to ask for tracking numbers.
 * - Shopify sends GET requests to the `<callbackUrl>/fetch_stock` endpoint to retrieve
 *   on hand inventory levels for the fulfillment service location if `inventoryManagement` is set to `true`.
 *
 *   For more information, refer to
 *   [Sharing inventory levels with Shopify](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-10-optional-share-inventory-levels-with-shopify).
 *
 * To make sure you have everything set up correctly, you can test the `callbackUrl`-prefixed endpoints
 * in your development store.
 *
 * ## Resources and webhooks
 *
 * There are a variety of objects and webhooks that enable a fulfillment service to work.
 * To exchange fulfillment information with Shopify, fulfillment services use the
 * [FulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder),
 * [Fulfillment](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment) and
 * [Order](https://shopify.dev/api/admin-graphql/latest/objects/Order) objects and related mutations.
 * To act on fulfillment process events that happen on the Shopify side,
 * besides awaiting calls to `callbackUrl`-prefixed endpoints,
 * fulfillment services can subscribe to the
 * [fulfillment order](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#webhooks)
 * and [order](https://shopify.dev/api/admin-rest/latest/resources/webhook)
 * webhooks.
 */
type FulfillmentService = {
  __typename?: 'FulfillmentService';
  /**
   * The callback URL that the fulfillment service has registered for requests. The following considerations apply:
   *
   * - Shopify queries the `<callbackUrl>/fetch_tracking_numbers` endpoint to retrieve tracking numbers
   *     for orders, if `trackingSupport` is set to `true`.
   * - Shopify queries the `<callbackUrl>/fetch_stock` endpoint to retrieve inventory levels,
   *     if `inventoryManagement` is set to `true`.
   * - Shopify uses the `<callbackUrl>/fulfillment_order_notification` endpoint to send
   *     [fulfillment and cancellation requests](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-9-optional-enable-tracking-support).
   */
  callbackUrl?: Maybe<Scalars['URL']['output']>;
  /**
   * Whether the fulfillment service uses the [fulfillment order based workflow](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments) for managing fulfillments.
   *
   * As the migration is now finished, the `fulfillmentOrdersOptIn` property is [deprecated](
   * https://shopify.dev/changelog/deprecation-of-the-fulfillmentservice-fulfillmentordersoptin-field)
   * and is always set to `true` on correctly functioning fulfillment services.
   * @deprecated Migration period ended. All correctly functioning fulfillment services have `fulfillmentOrdersOptIn` set to `true`.
   */
  fulfillmentOrdersOptIn: Scalars['Boolean']['output']; /** Human-readable unique identifier for this fulfillment service. */
  handle: Scalars['String']['output']; /** The ID of the fulfillment service. */
  id: Scalars['ID']['output']; /** Whether the fulfillment service tracks product inventory and provides updates to Shopify. */
  inventoryManagement: Scalars['Boolean']['output']; /** Location associated with the fulfillment service. */
  location?: Maybe<Location>;
  /**
   * Whether the fulfillment service can stock inventory alongside other locations.
   * @deprecated Fulfillment services are all migrating to permit SKU sharing.
   * Setting permits SKU sharing to false [is no longer supported](https://shopify.dev/changelog/setting-permitsskusharing-argument-to-false-when-creating-a-fulfillment-service-returns-an-error).
   * As of API version `2026-04` this field will be removed.
   *
   */
  permitsSkuSharing: Scalars['Boolean']['output']; /** Whether the fulfillment service requires products to be physically shipped. */
  requiresShippingMethod: Scalars['Boolean']['output']; /** The name of the fulfillment service as seen by merchants. */
  serviceName: Scalars['String']['output']; /** Whether the fulfillment service implemented the /fetch_tracking_numbers endpoint. */
  trackingSupport: Scalars['Boolean']['output']; /** Type associated with the fulfillment service. */
  type: FulfillmentServiceType;
};
/** The type of a fulfillment service. */
declare enum FulfillmentServiceType {
  /** Fulfillment by gift card. */
  GiftCard = 'GIFT_CARD',
  /** Manual fulfillment by the merchant. */
  Manual = 'MANUAL',
  /** Fullfillment by a third-party fulfillment service. */
  ThirdParty = 'THIRD_PARTY'
}
/** The status of a fulfillment. */
declare enum FulfillmentStatus {
  /** The fulfillment was canceled. */
  Cancelled = 'CANCELLED',
  /** There was an error with the fulfillment request. */
  Error = 'ERROR',
  /** The fulfillment request failed. */
  Failure = 'FAILURE',
  /**
   * The third-party fulfillment service has acknowledged the fulfillment and is processing it.
   * @deprecated This is a legacy status and is due to be deprecated.
   */
  Open = 'OPEN',
  /**
   * Shopify has created the fulfillment and is waiting for the third-party fulfillment service to transition it to `open` or `success`.
   * @deprecated This is a legacy status and is due to be deprecated.
   */
  Pending = 'PENDING',
  /** The fulfillment was completed successfully. */
  Success = 'SUCCESS'
}
/** Represents the tracking information for a fulfillment. */
type FulfillmentTrackingInfo$1 = {
  __typename?: 'FulfillmentTrackingInfo';
  /**
   * The name of the tracking company.
   *
   * For tracking company names from the list below
   * Shopify will automatically build tracking URLs for all provided tracking numbers,
   * which will make the tracking numbers clickable in the interface.
   *
   * Additionally, for the tracking companies listed on the
   * [Shipping Carriers help page](https://help.shopify.com/manual/shipping/understanding-shipping/shipping-carriers#integrated-shipping-carriers)
   * Shopify will automatically update the fulfillment's `shipment_status` field during the fulfillment process.
   *
   * ### Supported tracking companies
   *
   * The following tracking companies display for shops located in any country:
   *
   *   * 4PX
   *   * AGS
   *   * Amazon
   *   * Amazon Logistics UK
   *   * An Post
   *   * Anjun Logistics
   *   * APC
   *   * Asendia USA
   *   * Australia Post
   *   * Bonshaw
   *   * BPost
   *   * BPost International
   *   * Canada Post
   *   * Canpar
   *   * CDL Last Mile
   *   * China Post
   *   * Chronopost
   *   * Chukou1
   *   * Colissimo
   *   * Comingle
   *   * Coordinadora
   *   * Correios
   *   * Correos
   *   * CTT
   *   * CTT Express
   *   * Cyprus Post
   *   * Delnext
   *   * Deutsche Post
   *   * DHL eCommerce
   *   * DHL eCommerce Asia
   *   * DHL Express
   *   * DPD
   *   * DPD Local
   *   * DPD UK
   *   * DTD Express
   *   * DX
   *   * Eagle
   *   * Estes
   *   * Evri
   *   * FedEx
   *   * First Global Logistics
   *   * First Line
   *   * FSC
   *   * Fulfilla
   *   * GLS
   *   * Guangdong Weisuyi Information Technology (WSE)
   *   * Heppner Internationale Spedition GmbH & Co.
   *   * Iceland Post
   *   * IDEX
   *   * Israel Post
   *   * Japan Post (EN)
   *   * Japan Post (JA)
   *   * La Poste Colissimo
   *   * La Poste Burkina Faso
   *   * Lasership
   *   * Latvia Post
   *   * Lietuvos Paštas
   *   * Logisters
   *   * Lone Star Overnight
   *   * M3 Logistics
   *   * Meteor Space
   *   * Mondial Relay
   *   * New Zealand Post
   *   * NinjaVan
   *   * North Russia Supply Chain (Shenzhen) Co.
   *   * OnTrac
   *   * Packeta
   *   * Pago Logistics
   *   * Ping An Da Tengfei Express
   *   * Pitney Bowes
   *   * Portal PostNord
   *   * Poste Italiane
   *   * PostNL
   *   * PostNord DK
   *   * PostNord NO
   *   * PostNord SE
   *   * Purolator
   *   * Qxpress
   *   * Qyun Express
   *   * Royal Mail
   *   * Royal Shipments
   *   * Sagawa (EN)
   *   * Sagawa (JA)
   *   * Sendle
   *   * SF Express
   *   * SFC Fulfillment
   *   * SHREE NANDAN COURIER
   *   * Singapore Post
   *   * Southwest Air Cargo
   *   * StarTrack
   *   * Step Forward Freight
   *   * Swiss Post
   *   * TForce Final Mile
   *   * Tinghao
   *   * TNT
   *   * Toll IPEC
   *   * United Delivery Service
   *   * UPS
   *   * USPS
   *   * Venipak
   *   * We Post
   *   * Whistl
   *   * Wizmo
   *   * WMYC
   *   * Xpedigo
   *   * XPO Logistics
   *   * Yamato (EN)
   *   * Yamato (JA)
   *   * YiFan Express
   *   * YunExpress
   *
   * The following tracking companies are displayed for shops located in specific countries:
   *
   *   * **Australia**: Australia Post, Sendle, Aramex Australia, TNT Australia, Hunter Express, Couriers Please, Bonds, Allied Express, Direct Couriers, Northline, GO Logistics
   *   * **Austria**: Österreichische Post
   *   * **Bulgaria**: Speedy
   *   * **Canada**: Intelcom, BoxKnight, Loomis, GLS
   *   * **China**: China Post, DHL eCommerce Asia, WanbExpress, YunExpress, Anjun Logistics, SFC Fulfillment, FSC
   *   * **Czechia**: Zásilkovna
   *   * **Germany**: Deutsche Post (DE), Deutsche Post (EN), DHL, DHL Express, Swiship, Hermes, GLS
   *   * **Spain**: SEUR
   *   * **France**: Colissimo, Mondial Relay, Colis Privé, GLS
   *   * **United Kingdom**: Evri, DPD UK, Parcelforce, Yodel, DHL Parcel, Tuffnells
   *   * **Greece**: ACS Courier
   *   * **Hong Kong SAR**: SF Express
   *   * **Ireland**: Fastway, DPD Ireland
   *   * **India**: DTDC, India Post, Delhivery, Gati KWE, Professional Couriers, XpressBees, Ecom Express, Ekart, Shadowfax, Bluedart
   *   * **Italy**: BRT, GLS Italy
   *   * **Japan**: エコ配, 西濃運輸, 西濃スーパーエキスプレス, 福山通運, 日本通運, 名鉄運輸, 第一貨物
   *   * **Netherlands**: DHL Parcel, DPD
   *   * **Norway**: Bring
   *   * **Poland**: Inpost
   *   * **Turkey**: PTT, Yurtiçi Kargo, Aras Kargo, Sürat Kargo
   *   * **United States**: GLS, Alliance Air Freight, Pilot Freight, LSO, Old Dominion, Pandion, R+L Carriers, Southwest Air Cargo
   *   * **South Africa**: Fastway, Skynet.
   */
  company?: Maybe<Scalars['String']['output']>;
  /**
   * The tracking number of the fulfillment.
   *
   * The tracking number is clickable in the interface if one of the following applies
   * (the highest in the list has the highest priority):
   *
   * * Tracking url provided in the `url` field.
   * * [Shopify-known tracking company name](#supported-tracking-companies) specified in the `company` field.
   *   Shopify will build the tracking URL automatically based on the tracking number specified.
   * * The tracking number has a Shopify-known format.
   *   Shopify will guess the tracking provider and build the tracking url based on the tracking number format.
   *   Not all tracking carriers are supported, and multiple tracking carriers may use similarly formatted tracking numbers.
   *   This can result in an invalid tracking URL.
   *   It is highly recommended that you send the tracking company and the tracking URL.
   */
  number?: Maybe<Scalars['String']['output']>;
  /**
   * The URLs to track the fulfillment.
   *
   * The tracking URL is displayed in the merchant's admin on the order page.
   * The tracking URL is displayed in the shipping confirmation email, which can optionally be sent to the customer.
   * When accounts are enabled, it's also displayed in the customer's order history.
   */
  url?: Maybe<Scalars['URL']['output']>;
};
/**
 * The input fields that specify all possible fields for tracking information.
 *
 * > Note:
 * > If you provide the `url` field, you should not provide the `urls` field.
 * >
 * > If you provide the `number` field, you should not provide the `numbers` field.
 * >
 * > If you provide the `url` field, you should provide the `number` field.
 * >
 * > If you provide the `urls` field, you should provide the `numbers` field.
 */
type FulfillmentTrackingInput = {
  /**
   * The name of the tracking company.
   *
   * If you specify a tracking company name from
   * [the list](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#supported-tracking-companies),
   * Shopify will automatically build tracking URLs for all provided tracking numbers,
   * which will make the tracking numbers clickable in the interface.
   * The same tracking company will be applied to all tracking numbers specified.
   *
   * Additionally, for the tracking companies listed on the
   * [Shipping Carriers help page](https://help.shopify.com/manual/shipping/understanding-shipping/shipping-carriers#integrated-shipping-carriers)
   * Shopify will automatically update the fulfillment's `shipment_status` field during the fulfillment process.
   *
   * > Note:
   * > Send the tracking company name exactly as written in
   * > [the list](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#supported-tracking-companies)
   * > (capitalization matters).
   */
  company?: InputMaybe<Scalars['String']['input']>;
  /**
   * The tracking number of the fulfillment.
   *
   * The tracking number will be clickable in the interface if one of the following applies
   * (the highest in the list has the highest priority):
   *
   * * Tracking url provided in the `url` field.
   * * [Shopify-known tracking company name](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#supported-tracking-companies)
   *   specified in the `company` field.
   *   Shopify will build the tracking URL automatically based on the tracking number specified.
   * * The tracking number has a Shopify-known format.
   *   Shopify will guess the tracking provider and build the tracking url based on the tracking number format.
   *   Not all tracking carriers are supported, and multiple tracking carriers may use similarly formatted tracking numbers.
   *   This can result in an invalid tracking URL.
   *   It is highly recommended that you send the tracking company and the tracking URL.
   */
  number?: InputMaybe<Scalars['String']['input']>;
  /**
   * The tracking numbers of the fulfillment, one or many.
   *
   * With multiple tracking numbers, you can provide tracking information
   * for all shipments associated with the fulfillment, if there are more than one.
   * For example, if you're shipping assembly parts of one furniture item in several boxes.
   *
   * Tracking numbers will be clickable in the interface if one of the following applies
   * (the highest in the list has the highest priority):
   *
   * * Tracking URLs provided in the `urls` field.
   *   The tracking URLs will be matched to the tracking numbers based on their positions in the arrays.
   * * [Shopify-known tracking company name](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#supported-tracking-companies)
   *   specified in the `company` field.
   *   Shopify will build tracking URLs automatically for all tracking numbers specified.
   *   The same tracking company will be applied to all tracking numbers.
   * * Tracking numbers have a Shopify-known format.
   *   Shopify will guess tracking providers and build tracking URLs based on the tracking number formats.
   *   Not all tracking carriers are supported, and multiple tracking carriers may use similarly formatted tracking numbers.
   *   This can result in an invalid tracking URL.
   *   It is highly recommended that you send the tracking company and the tracking URLs.
   */
  numbers?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * The URL to track the fulfillment.
   *
   * The tracking URL is displayed in the merchant's admin on the order page.
   * The tracking URL is displayed in the shipping confirmation email, which can optionally be sent to the customer.
   * When accounts are enabled, it's also displayed in the customer's order history.
   *
   * The URL must be an [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986) and
   * [RFC 3987](https://datatracker.ietf.org/doc/html/rfc3987)-compliant URI string.
   * For example, `"https://www.myshipping.com/track/?tracknumbers=TRACKING_NUMBER"` is a valid URL.
   * It includes a scheme (`https`) and a host (`myshipping.com`).
   */
  url?: InputMaybe<Scalars['URL']['input']>;
  /**
   * The URLs to track the fulfillment, one or many.
   *
   * The tracking URLs are displayed in the merchant's admin on the order page.
   * The tracking URLs are displayed in the shipping confirmation email, which can optionally be sent to the customer.
   * When accounts are enabled, the tracking URLs are also displayed in the customer's order history.
   *
   * If you're not specifying a
   * [Shopify-known](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#supported-tracking-companies)
   * tracking company name in the `company` field,
   * then provide tracking URLs for all tracking numbers from the `numbers` field.
   *
   * Tracking URLs from the `urls` array field are being matched with the tracking numbers from the `numbers` array
   * field correspondingly their positions in the arrays.
   *
   * Each URL must be an [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986) and
   * [RFC 3987](https://datatracker.ietf.org/doc/html/rfc3987)-compliant URI string.
   * For example, `"https://www.myshipping.com/track/?tracknumbers=TRACKING_NUMBER"` is a valid URL.
   * It includes a scheme (`https`) and a host (`myshipping.com`).
   */
  urls?: InputMaybe<Array<Scalars['URL']['input']>>;
};
/** The input fields used to create a fulfillment from fulfillment orders. */
type FulfillmentV2Input = {
  /**
   * Pairs of `fulfillment_order_id` and `fulfillment_order_line_items` that represent the fulfillment
   * order line items that have to be fulfilled for each fulfillment order.  For any given pair, if the
   * fulfillment order line items are left blank then all the fulfillment order line items of the
   * associated fulfillment order ID will be fulfilled.
   */
  lineItemsByFulfillmentOrder: Array<FulfillmentOrderLineItemsInput>;
  /**
   * Whether the customer is notified.
   * If `true`, then a notification is sent when the fulfillment is created. The default value is `false`.
   */
  notifyCustomer?: InputMaybe<Scalars['Boolean']['input']>; /** Address information about the location from which the order was fulfilled. */
  originAddress?: InputMaybe<FulfillmentOriginAddressInput>;
  /**
   * The fulfillment's tracking information, including a tracking URL, a tracking number,
   * and the company associated with the fulfillment.
   */
  trackingInfo?: InputMaybe<FulfillmentTrackingInput>;
};
/** The App Bridge information for a Shopify Function. */
type FunctionsAppBridge = {
  __typename?: 'FunctionsAppBridge'; /** The relative path for creating a customization. */
  createPath: Scalars['String']['output']; /** The relative path for viewing a customization. */
  detailsPath: Scalars['String']['output'];
};
/** The error history from running a Shopify Function. */
type FunctionsErrorHistory = {
  __typename?: 'FunctionsErrorHistory'; /** The date and time that the first error occurred. */
  errorsFirstOccurredAt: Scalars['DateTime']['output']; /** The date and time that the first error occurred. */
  firstOccurredAt: Scalars['DateTime']['output']; /** Whether the merchant has shared all the recent errors with the developer. */
  hasBeenSharedSinceLastError: Scalars['Boolean']['output']; /** Whether the merchant has shared all the recent errors with the developer. */
  hasSharedRecentErrors: Scalars['Boolean']['output'];
};
/** Represents any file other than HTML. */
type GenericFile = File & Node & {
  __typename?: 'GenericFile'; /** A word or phrase to describe the contents or the function of a file. */
  alt?: Maybe<Scalars['String']['output']>; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was created. */
  createdAt: Scalars['DateTime']['output']; /** Any errors that have occurred on the file. */
  fileErrors: Array<FileError>; /** The status of the file. */
  fileStatus: FileStatus; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The generic file's MIME type. */
  mimeType?: Maybe<Scalars['String']['output']>; /** The generic file's size in bytes. */
  originalFileSize?: Maybe<Scalars['Int']['output']>; /** The preview image for the media. */
  preview?: Maybe<MediaPreviewImage>; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was last updated. */
  updatedAt: Scalars['DateTime']['output']; /** The generic file's URL. */
  url?: Maybe<Scalars['URL']['output']>;
};
/**
 * A gift card that customers use as a payment method. Stores the initial value, current balance, and expiration date.
 *
 * You can issue gift cards to a specific [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) or send them to a [`GiftCardRecipient`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardRecipient) with a personalized message. The card tracks its transaction history through [`GiftCardCreditTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardCreditTransaction) and [`GiftCardDebitTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardDebitTransaction) records. You can create and deactivate gift cards using the [`GiftCardCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardCreate) and [`GiftCardDeactivate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardDeactivate) mutations, respectively.
 *
 * > Note: After a gift card is deactivated, it can't be used for further purchases or re-enabled.
 */
type GiftCard = Node & {
  __typename?: 'GiftCard'; /** The gift card's remaining balance. */
  balance: MoneyV2; /** The date and time at which the gift card was created. */
  createdAt: Scalars['DateTime']['output']; /** The customer who will receive the gift card. */
  customer?: Maybe<Customer>; /** The date and time at which the gift card was deactivated. */
  deactivatedAt?: Maybe<Scalars['DateTime']['output']>; /** Whether the gift card is enabled. */
  enabled: Scalars['Boolean']['output']; /** The date at which the gift card will expire. */
  expiresOn?: Maybe<Scalars['Date']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The initial value of the gift card. */
  initialValue: MoneyV2; /** The final four characters of the gift card code. */
  lastCharacters: Scalars['String']['output']; /** The gift card code. Everything but the final four characters is masked. */
  maskedCode: Scalars['String']['output']; /** The note associated with the gift card, which isn't visible to the customer. */
  note?: Maybe<Scalars['String']['output']>; /** The order associated with the gift card. This value is `null` if the gift card was issued manually. */
  order?: Maybe<Order>; /** The recipient who will receive the gift card. */
  recipientAttributes?: Maybe<GiftCardRecipient>; /** The theme template used to render the gift card online. */
  templateSuffix?: Maybe<Scalars['String']['output']>; /** The transaction history of the gift card. */
  transactions?: Maybe<GiftCardTransactionConnection>; /** The date and time at which the gift card was updated. */
  updatedAt: Scalars['DateTime']['output'];
};
/** Represents a recipient who will receive the issued gift card. */
type GiftCardRecipient = {
  __typename?: 'GiftCardRecipient'; /** The message sent with the gift card. */
  message?: Maybe<Scalars['String']['output']>; /** The preferred name of the recipient who will receive the gift card. */
  preferredName?: Maybe<Scalars['String']['output']>; /** The recipient who will receive the gift card. */
  recipient: Customer; /** The scheduled datetime on which the gift card will be sent to the recipient. The gift card will be sent within an hour of the specified datetime. */
  sendNotificationAt?: Maybe<Scalars['DateTime']['output']>;
};
/** Interface for a gift card transaction. */
type GiftCardTransaction = {
  /** The amount of the transaction. */amount: MoneyV2; /** The gift card that the transaction belongs to. */
  giftCard: GiftCard; /** The unique ID for the transaction. */
  id: Scalars['ID']['output'];
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   */
  metafield?: Maybe<Metafield>;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   */
  metafields: MetafieldConnection; /** A note about the transaction. */
  note?: Maybe<Scalars['String']['output']>; /** The date and time when the transaction was processed. */
  processedAt: Scalars['DateTime']['output'];
};
/** An auto-generated type for paginating through multiple GiftCardTransactions. */
type GiftCardTransactionConnection = {
  __typename?: 'GiftCardTransactionConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<GiftCardTransactionEdge>; /** A list of nodes that are contained in GiftCardTransactionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<GiftCardTransaction>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one GiftCardTransaction and a cursor during pagination. */
type GiftCardTransactionEdge = {
  __typename?: 'GiftCardTransactionEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of GiftCardTransactionEdge. */
  node: GiftCardTransaction;
};
/**
 * Represents a summary of the current version of data in a resource.
 *
 * The `compare_digest` field can be used as input for mutations that implement a compare-and-swap mechanism.
 */
type HasCompareDigest = {
  /** The data stored in the resource, represented as a digest. */compareDigest: Scalars['String']['output'];
};
/** Represents an object that has a list of events. */
type HasEvents = {
  /** The paginated list of events associated with the host subject. */events: EventConnection;
};
/** Localization extensions associated with the specified resource. For example, the tax id for government invoice. */
type HasLocalizationExtensions = {
  /**
   * List of localization extensions for the resource.
   * @deprecated This connection will be removed in a future version. Use `localizedFields` instead.
   */
  localizationExtensions: LocalizationExtensionConnection;
};
/** Localized fields associated with the specified resource. */
type HasLocalizedFields = {
  /** List of localized fields for the resource. */localizedFields: LocalizedFieldConnection;
};
/** Resources that metafield definitions can be applied to. */
type HasMetafieldDefinitions = {
  /**
   * List of metafield definitions.
   * @deprecated This field will be removed in a future version. Use `QueryRoot.metafieldDefinitions` instead.
   */
  metafieldDefinitions: MetafieldDefinitionConnection;
};
/** Represents information about the metafields associated to the specified resource. */
type HasMetafields = {
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   */
  metafield?: Maybe<Metafield>;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   */
  metafields: MetafieldConnection;
};
/** Published translations associated with the resource. */
type HasPublishedTranslations = {
  /** The published translations associated with the resource. */translations: Array<Translation>;
};
/** Represents information about the store credit accounts associated to the specified owner. */
type HasStoreCreditAccounts = {
  /**
   * Returns a list of store credit accounts that belong to the owner resource.
   * A store credit account owner can hold multiple accounts each with a different currency.
   */
  storeCreditAccounts: StoreCreditAccountConnection;
};
/** Represents an image resource. */
type Image = HasMetafields & HasPublishedTranslations & {
  __typename?: 'Image'; /** A word or phrase to share the nature or contents of an image. */
  altText?: Maybe<Scalars['String']['output']>; /** The original height of the image in pixels. Returns `null` if the image isn't hosted by Shopify. */
  height?: Maybe<Scalars['Int']['output']>; /** A unique ID for the image. */
  id?: Maybe<Scalars['ID']['output']>;
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   */
  metafield?: Maybe<Metafield>;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   */
  metafields: MetafieldConnection;
  /**
   * The location of the original image as a URL.
   *
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   * @deprecated Use `url` instead.
   */
  originalSrc: Scalars['URL']['output'];
  /**
   * The location of the image as a URL.
   * @deprecated Use `url` instead.
   */
  src: Scalars['URL']['output'];
  /**
   * The ThumbHash of the image.
   *
   * Useful to display placeholder images while the original image is loading.
   */
  thumbhash?: Maybe<Scalars['String']['output']>;
  /**
   * The location of the transformed image as a URL.
   *
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type doesn't support will be ignored.
   * @deprecated Use `url(transform:)` instead
   */
  transformedSrc: Scalars['URL']['output']; /** The published translations associated with the resource. */
  translations: Array<Translation>;
  /**
   * The location of the image as a URL.
   *
   * If no transform options are specified, then the original image will be preserved including any pre-applied transforms.
   *
   * All transformation options are considered "best-effort". Any transformation that the original image type doesn't support will be ignored.
   *
   * If you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).
   */
  url: Scalars['URL']['output']; /** The original width of the image in pixels. Returns `null` if the image isn't hosted by Shopify. */
  width?: Maybe<Scalars['Int']['output']>;
};
/** An auto-generated type for paginating through multiple Images. */
type ImageConnection = {
  __typename?: 'ImageConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ImageEdge>; /** A list of nodes that are contained in ImageEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<Image>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one Image and a cursor during pagination. */
type ImageEdge = {
  __typename?: 'ImageEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ImageEdge. */
  node: Image;
};
/** Answers the question if prices include duties and / or taxes. */
declare enum InclusiveDutiesPricingStrategy {
  /** Add duties at checkout when configured to collect. */
  AddDutiesAtCheckout = 'ADD_DUTIES_AT_CHECKOUT',
  /** Include duties in price when configured to collect. */
  IncludeDutiesInPrice = 'INCLUDE_DUTIES_IN_PRICE'
}
/** Answers the question if prices include duties and / or taxes. */
declare enum InclusiveTaxPricingStrategy {
  /** Add taxes at checkout when configured to collect. */
  AddTaxesAtCheckout = 'ADD_TAXES_AT_CHECKOUT',
  /** Include taxes in price when configured to collect. */
  IncludesTaxesInPrice = 'INCLUDES_TAXES_IN_PRICE',
  /** Include taxes in price based on country when configured to collect. */
  IncludesTaxesInPriceBasedOnCountry = 'INCLUDES_TAXES_IN_PRICE_BASED_ON_COUNTRY'
}
/**
 * A [product variant's](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) inventory information across all locations. The inventory item connects the product variant to its [inventory levels](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) at different locations, tracking stock keeping unit (SKU), whether quantities are tracked, shipping requirements, and customs information for the product.
 *
 * Learn more about [inventory object relationships](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).
 */
type InventoryItem = LegacyInteroperability & Node & {
  __typename?: 'InventoryItem'; /** The ISO 3166-1 alpha-2 country code of where the item originated from. */
  countryCodeOfOrigin?: Maybe<CountryCode>; /** A list of country specific harmonized system codes. */
  countryHarmonizedSystemCodes: CountryHarmonizedSystemCodeConnection; /** The date and time when the inventory item was created. */
  createdAt: Scalars['DateTime']['output']; /** The number of inventory items that share the same SKU with this item. */
  duplicateSkuCount: Scalars['Int']['output']; /** The harmonized system code of the item. This must be a number between 6 and 13 digits. */
  harmonizedSystemCode?: Maybe<Scalars['String']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The URL that points to the inventory history for the item. */
  inventoryHistoryUrl?: Maybe<Scalars['URL']['output']>; /** The inventory item's quantities at the specified location. */
  inventoryLevel?: Maybe<InventoryLevel>; /** A list of the inventory item's quantities for each location that the inventory item can be stocked at. */
  inventoryLevels: InventoryLevelConnection; /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64']['output']; /** The number of locations where this inventory item is stocked. */
  locationsCount?: Maybe<Count>; /** The packaging dimensions of the inventory item. */
  measurement: InventoryItemMeasurement; /** The ISO 3166-2 alpha-2 province code of where the item originated from. */
  provinceCodeOfOrigin?: Maybe<Scalars['String']['output']>; /** Whether the inventory item requires shipping. */
  requiresShipping: Scalars['Boolean']['output']; /** Inventory item SKU. Case-sensitive string. */
  sku?: Maybe<Scalars['String']['output']>; /** Whether inventory levels are tracked for the item. */
  tracked: Scalars['Boolean']['output']; /** Whether the value of the `tracked` field for the inventory item can be changed. */
  trackedEditable: EditableProperty; /** Unit cost associated with the inventory item. Note: the user must have "View product costs" permission granted in order to access this field once product granular permissions are enabled. */
  unitCost?: Maybe<MoneyV2>; /** The date and time when the inventory item was updated. */
  updatedAt: Scalars['DateTime']['output']; /** The variant that owns this inventory item. */
  variant: ProductVariant;
};
/** An auto-generated type for paginating through multiple InventoryItems. */
type InventoryItemConnection = {
  __typename?: 'InventoryItemConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<InventoryItemEdge>; /** A list of nodes that are contained in InventoryItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<InventoryItem>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one InventoryItem and a cursor during pagination. */
type InventoryItemEdge = {
  __typename?: 'InventoryItemEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of InventoryItemEdge. */
  node: InventoryItem;
};
/** Weight information for an [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) when packaged. Provides the weight specification used for inventory management and shipping calculations. Learn more about [managing inventory](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps). */
type InventoryItemMeasurement = Node & {
  __typename?: 'InventoryItemMeasurement'; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The weight of the inventory item. */
  weight?: Maybe<Weight>;
};
/**
 * The quantities of an inventory item at a specific location. Each inventory level connects one [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) to one [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location), tracking multiple quantity states like available, on-hand, incoming, and committed.
 *
 * The [`quantities`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel#field-InventoryLevel.fields.quantities) field provides access to different inventory states. Learn [more about inventory states and relationships](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).
 */
type InventoryLevel = Node & {
  __typename?: 'InventoryLevel'; /** Whether the inventory items associated with the inventory level can be deactivated. */
  canDeactivate: Scalars['Boolean']['output']; /** The date and time when the inventory level was created. */
  createdAt: Scalars['DateTime']['output']; /** Describes either the impact of deactivating the inventory level, or why the inventory level can't be deactivated. */
  deactivationAlert?: Maybe<Scalars['String']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** Inventory item associated with the inventory level. */
  item: InventoryItem; /** The location associated with the inventory level. */
  location: Location;
  /**
   * The quantity of an inventory item at a specific location, for a quantity
   * [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#inventory-states).
   */
  quantities: Array<InventoryQuantity>;
  /**
   * Scheduled changes for the requested quantity names.
   * @deprecated Scheduled changes will be phased out in a future version.
   */
  scheduledChanges: InventoryScheduledChangeConnection; /** The date and time when the inventory level was updated. */
  updatedAt: Scalars['DateTime']['output'];
};
/** An auto-generated type for paginating through multiple InventoryLevels. */
type InventoryLevelConnection = {
  __typename?: 'InventoryLevelConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<InventoryLevelEdge>; /** A list of nodes that are contained in InventoryLevelEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<InventoryLevel>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one InventoryLevel and a cursor during pagination. */
type InventoryLevelEdge = {
  __typename?: 'InventoryLevelEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of InventoryLevelEdge. */
  node: InventoryLevel;
};
/**
 * The `InventoryQuantity` object lets you manage and track inventory quantities for specific [states](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#inventory-states).
 * Inventory quantities represent different states of items such as available for purchase, committed to orders, reserved for drafts, incoming from suppliers, or set aside for quality control or safety stock.
 *
 * You can use [inventory levels](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel) to manage where inventory items are stocked. You can also [make inventory adjustments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryAdjustQuantities) to apply changes to inventory quantities.
 *
 * Inventory quantities can be managed by a merchant or by [fulfillment services](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice) that handle inventory tracking.
 * Learn more about working with [Shopify's inventory management system](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps).
 */
type InventoryQuantity = Node & {
  __typename?: 'InventoryQuantity'; /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /**
   * The inventory state [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#inventory-states)
   * that identifies the inventory quantity.
   */
  name: Scalars['String']['output'];
  /**
   * The quantity of an inventory item at a specific location, for a quantity
   * [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#inventory-states).
   */
  quantity: Scalars['Int']['output']; /** When the inventory quantity was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};
/** Returns the scheduled changes to inventory states related to the ledger document. */
type InventoryScheduledChange = {
  __typename?: 'InventoryScheduledChange'; /** The date and time that the scheduled change is expected to happen. */
  expectedAt: Scalars['DateTime']['output'];
  /**
   * The quantity
   * [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps/quantities-states#move-inventory-quantities-between-states)
   * to transition from.
   */
  fromName: Scalars['String']['output']; /** The quantities of an inventory item that are related to a specific location. */
  inventoryLevel: InventoryLevel; /** A freeform URI that represents what changed the inventory quantities. */
  ledgerDocumentUri: Scalars['URL']['output']; /** The quantity of the scheduled change associated with the ledger document in the `fromName` state. */
  quantity: Scalars['Int']['output'];
  /**
   * The quantity
   * [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps/quantities-states#move-inventory-quantities-between-states)
   * to transition to.
   */
  toName: Scalars['String']['output'];
};
/** An auto-generated type for paginating through multiple InventoryScheduledChanges. */
type InventoryScheduledChangeConnection = {
  __typename?: 'InventoryScheduledChangeConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<InventoryScheduledChangeEdge>; /** A list of nodes that are contained in InventoryScheduledChangeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<InventoryScheduledChange>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one InventoryScheduledChange and a cursor during pagination. */
type InventoryScheduledChangeEdge = {
  __typename?: 'InventoryScheduledChangeEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of InventoryScheduledChangeEdge. */
  node: InventoryScheduledChange;
};
/** The financial transfer details for a return outcome that results in an invoice. */
type InvoiceReturnOutcome = {
  __typename?: 'InvoiceReturnOutcome'; /** The total monetary value to be invoiced in shop and presentment currencies. */
  amount: MoneyBag;
};
/**
 * Interoperability metadata for types that directly correspond to a REST Admin API resource.
 * For example, on the Product type, LegacyInteroperability returns metadata for the corresponding [Product object](https://shopify.dev/api/admin-graphql/latest/objects/product) in the REST Admin API.
 */
type LegacyInteroperability = {
  /** The ID of the corresponding resource in the REST Admin API. */legacyResourceId: Scalars['UnsignedInt64']['output'];
};
/**
 * The total number of pending orders on a shop if less then a maximum, or that maximum.
 * The atMax field indicates when this maximum has been reached.
 */
type LimitedPendingOrderCount = {
  __typename?: 'LimitedPendingOrderCount'; /** This is set when the number of pending orders has reached the maximum. */
  atMax: Scalars['Boolean']['output'];
  /**
   * The number of pendings orders on the shop.
   * Limited to a maximum of 10000.
   */
  count: Scalars['Int']['output'];
};
/**
 * The `LineItem` object represents a single product or service that a customer purchased in an
 * [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order).
 * Each line item is associated with a
 * [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)
 * and can have multiple [discount allocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAllocation).
 * Line items contain details about what was purchased, including the product variant, quantity, pricing,
 * and fulfillment status.
 *
 * Use the `LineItem` object to manage the following processes:
 *
 * - [Track the quantity of items](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/build-fulfillment-solutions) ordered, fulfilled, and unfulfilled.
 * - [Calculate prices](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders), including discounts and taxes.
 * - Manage fulfillment through [fulfillment services](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps).
 * - Manage [returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) and [exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges).
 * - Handle [subscriptions](https://shopify.dev/docs/apps/build/purchase-options/subscriptions) and recurring orders.
 *
 * Line items can also include custom attributes and properties, allowing merchants to add specific details
 * about each item in an order. Learn more about
 * [managing orders and fulfillment](https://shopify.dev/docs/apps/build/orders-fulfillment).
 */
type LineItem = Node & {
  __typename?: 'LineItem';
  /**
   * Whether the line item can be restocked.
   * @deprecated Use `restockable` instead.
   */
  canRestock: Scalars['Boolean']['output']; /** The subscription contract associated with this line item. */
  contract?: Maybe<SubscriptionContract>; /** The number of units ordered, excluding refunded and removed units. */
  currentQuantity: Scalars['Int']['output']; /** A list of attributes that represent custom features or special requests. */
  customAttributes: Array<Attribute>; /** The discounts that have been allocated to the line item by discount applications, including discounts allocated to refunded and removed quantities. */
  discountAllocations: Array<DiscountAllocation>;
  /**
   * The total discounted price of the line item in shop currency, including refunded and removed quantities. This value doesn't include order-level discounts.
   * @deprecated Use `discountedTotalSet` instead.
   */
  discountedTotal: Scalars['Money']['output']; /** The total discounted price of the line item in shop and presentment currencies, including refunded and removed quantities. This value doesn't include order-level discounts. Code-based discounts aren't included by default. */
  discountedTotalSet: MoneyBag;
  /**
   * The approximate unit price of the line item in shop currency. This value includes line-level discounts and discounts applied to refunded and removed quantities. It doesn't include order-level or code-based discounts.
   * @deprecated Use `discountedUnitPriceSet` instead.
   */
  discountedUnitPrice: Scalars['Money']['output']; /** The approximate unit price of the line item in shop and presentment currencies. This value includes discounts applied to refunded and removed quantities. */
  discountedUnitPriceAfterAllDiscountsSet: MoneyBag; /** The approximate unit price of the line item in shop and presentment currencies. This value includes line-level discounts and discounts applied to refunded and removed quantities. It doesn't include order-level or code-based discounts. */
  discountedUnitPriceSet: MoneyBag; /** The duties associated with the line item. */
  duties: Array<Duty>;
  /**
   * The total number of units to fulfill.
   * @deprecated Use [FulfillmentOrderLineItem#remainingQuantity](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrderLineItem#field-fulfillmentorderlineitem-remainingquantity) instead.
   */
  fulfillableQuantity: Scalars['Int']['output'];
  /**
   * The fulfillment service that stocks the product variant belonging to a line item.
   *
   * This is a third-party fulfillment service in the following scenarios:
   *
   * **Scenario 1**
   * - The product variant is stocked by a single fulfillment service.
   * - The [FulfillmentService](/api/admin-graphql/latest/objects/FulfillmentService) is a third-party fulfillment service. Third-party fulfillment services don't have a handle with the value `manual`.
   *
   * **Scenario 2**
   * - Multiple fulfillment services stock the product variant.
   * - The last time that the line item was unfulfilled, it was awaiting fulfillment by a third-party fulfillment service. Third-party fulfillment services don't have a handle with the value `manual`.
   *
   * If none of the above conditions are met, then the fulfillment service has the `manual` handle.
   * @deprecated
   * The [relationship between a product variant and a fulfillment service was changed](/changelog/fulfillment-service-sku-sharing). A [ProductVariant](/api/admin-graphql/latest/objects/ProductVariant) can be stocked by multiple fulfillment services. As a result, we recommend that you use the [inventoryItem field](/api/admin-graphql/latest/objects/ProductVariant#field-productvariant-inventoryitem) if you need to determine where a product variant is stocked.
   *
   * If you need to determine whether a product is a gift card, then you should continue to use this field until an alternative is available.
   *
   * Altering the locations which stock a product variant won't change the value of this field for existing orders.
   *
   * Learn about [managing inventory quantities and states](/apps/fulfillment/inventory-management-apps/quantities-states).
   *
   */
  fulfillmentService?: Maybe<FulfillmentService>;
  /**
   * The line item's fulfillment status. Returns 'fulfilled' if fulfillableQuantity >= quantity,
   * 'partial' if  fulfillableQuantity > 0, and 'unfulfilled' otherwise.
   * @deprecated Use [FulfillmentOrderLineItem#remainingQuantity](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrderLineItem#field-fulfillmentorderlineitem-remainingquantity) instead
   */
  fulfillmentStatus: Scalars['String']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The image associated to the line item's variant. */
  image?: Maybe<Image>; /** Whether the line item represents the purchase of a gift card. */
  isGiftCard: Scalars['Boolean']['output']; /** The line item group associated to the line item. */
  lineItemGroup?: Maybe<LineItemGroup>; /** Whether the line item can be edited or not. */
  merchantEditable: Scalars['Boolean']['output']; /** The title of the product, optionally appended with the title of the variant (if applicable). */
  name: Scalars['String']['output']; /** The total number of units that can't be fulfilled. For example, if items have been refunded, or the item is not something that can be fulfilled, like a tip. Please see the [FulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder) object for more fulfillment details. */
  nonFulfillableQuantity: Scalars['Int']['output'];
  /**
   * In shop currency, the total price of the line item when the order was created.
   * This value doesn't include discounts.
   * @deprecated Use `originalTotalSet` instead.
   */
  originalTotal: Scalars['Money']['output'];
  /**
   * In shop and presentment currencies, the total price of the line item when the order was created.
   * This value doesn't include discounts.
   */
  originalTotalSet: MoneyBag;
  /**
   * In shop currency, the unit price of the line item when the order was created. This value doesn't include discounts.
   * @deprecated Use `originalUnitPriceSet` instead.
   */
  originalUnitPrice: Scalars['Money']['output']; /** In shop and presentment currencies, the unit price of the line item when the order was created. This value doesn't include discounts. */
  originalUnitPriceSet: MoneyBag; /** The Product object associated with this line item's variant. */
  product?: Maybe<Product>; /** The number of units ordered, including refunded and removed units. */
  quantity: Scalars['Int']['output']; /** The number of units ordered, excluding refunded units and removed units. */
  refundableQuantity: Scalars['Int']['output']; /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars['Boolean']['output']; /** Whether the line item can be restocked. */
  restockable: Scalars['Boolean']['output']; /** The selling plan details associated with the line item. */
  sellingPlan?: Maybe<LineItemSellingPlan>; /** The variant SKU number. */
  sku?: Maybe<Scalars['String']['output']>; /** Staff attributed to the line item. */
  staffMember?: Maybe<StaffMember>; /** The taxes charged for the line item, including taxes charged for refunded and removed quantities. */
  taxLines: Array<TaxLine>; /** Whether the variant is taxable. */
  taxable: Scalars['Boolean']['output']; /** The title of the product at time of order creation. */
  title: Scalars['String']['output'];
  /**
   * The total discount allocated to the line item in shop currency, including the total allocated to refunded and removed quantities. This value doesn't include order-level discounts.
   * @deprecated Use `totalDiscountSet` instead.
   */
  totalDiscount: Scalars['Money']['output']; /** The total discount allocated to the line item in shop and presentment currencies, including the total allocated to refunded and removed quantities. This value doesn't include order-level discounts. */
  totalDiscountSet: MoneyBag;
  /**
   * In shop currency, the total discounted price of the unfulfilled quantity for the line item.
   * @deprecated Use `unfulfilledDiscountedTotalSet` instead.
   */
  unfulfilledDiscountedTotal: Scalars['Money']['output']; /** In shop and presentment currencies, the total discounted price of the unfulfilled quantity for the line item. */
  unfulfilledDiscountedTotalSet: MoneyBag;
  /**
   * In shop currency, the total price of the unfulfilled quantity for the line item. This value doesn't include discounts.
   * @deprecated Use `unfulfilledOriginalTotalSet` instead.
   */
  unfulfilledOriginalTotal: Scalars['Money']['output']; /** In shop and presentment currencies, the total price of the unfulfilled quantity for the line item. This value doesn't include discounts. */
  unfulfilledOriginalTotalSet: MoneyBag; /** The number of units not yet fulfilled. */
  unfulfilledQuantity: Scalars['Int']['output']; /** The Variant object associated with this line item. */
  variant?: Maybe<ProductVariant>; /** The title of the variant at time of order creation. */
  variantTitle?: Maybe<Scalars['String']['output']>; /** The name of the vendor who made the variant. */
  vendor?: Maybe<Scalars['String']['output']>;
};
/** An auto-generated type for paginating through multiple LineItems. */
type LineItemConnection = {
  __typename?: 'LineItemConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<LineItemEdge>; /** A list of nodes that are contained in LineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<LineItem>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one LineItem and a cursor during pagination. */
type LineItemEdge = {
  __typename?: 'LineItemEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of LineItemEdge. */
  node: LineItem;
};
/**
 * The information for [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) that are part of a bundle. When a bundle is purchased, each component line item references its [`LineItemGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItemGroup) through the [`lineItemGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem#field-lineItemGroup) field to maintain the relationship with the bundle.
 *
 * The parent bundle's product, variant, and custom attributes enable apps to group and display bundle components in order management systems, transactional emails, and other contexts where understanding the bundle structure is needed.
 *
 * Learn more about [product bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles).
 */
type LineItemGroup = Node & {
  __typename?: 'LineItemGroup'; /** A list of attributes that represent custom features or special requests. */
  customAttributes: Array<Attribute>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** ID of the product of the line item group. */
  productId?: Maybe<Scalars['ID']['output']>; /** Quantity of the line item group on the order. */
  quantity: Scalars['Int']['output']; /** Title of the line item group. */
  title: Scalars['String']['output']; /** ID of the variant of the line item group. */
  variantId?: Maybe<Scalars['ID']['output']>; /** SKU of the variant of the line item group. */
  variantSku?: Maybe<Scalars['String']['output']>;
};
/** Represents the selling plan for a line item. */
type LineItemSellingPlan = {
  __typename?: 'LineItemSellingPlan'; /** The name of the selling plan for display purposes. */
  name: Scalars['String']['output']; /** The ID of the selling plan associated with the line item. */
  sellingPlanId?: Maybe<Scalars['ID']['output']>;
};
/** A link to direct users to. */
type Link = HasPublishedTranslations & {
  __typename?: 'Link'; /** A context-sensitive label for the link. */
  label: Scalars['String']['output']; /** The published translations associated with the resource. */
  translations: Array<Translation>; /** The URL that the link visits. */
  url: Scalars['URL']['output'];
};
/**
 * The identifier for the metafield linked to this option.
 *
 * This API is currently in early access. See [Metafield-linked product options](https://shopify.dev/docs/api/admin/migrate/new-product-model/metafield-linked) for more details.
 */
type LinkedMetafield = {
  __typename?: 'LinkedMetafield'; /** Key of the metafield the option is linked to. */
  key?: Maybe<Scalars['String']['output']>; /** Namespace of the metafield the option is linked to. */
  namespace?: Maybe<Scalars['String']['output']>;
};
/** Local payment methods payment details related to a transaction. */
type LocalPaymentMethodsPaymentDetails = BasePaymentDetails & {
  __typename?: 'LocalPaymentMethodsPaymentDetails'; /** The descriptor by the payment provider. Only available for Amazon Pay and Buy with Prime. */
  paymentDescriptor?: Maybe<Scalars['String']['output']>; /** The name of payment method used by the buyer. */
  paymentMethodName?: Maybe<Scalars['String']['output']>;
};
/** Represents the value captured by a localization extension. Localization extensions are additional fields required by certain countries on international orders. For example, some countries require additional fields for customs information or tax identification numbers. */
type LocalizationExtension = {
  __typename?: 'LocalizationExtension'; /** Country ISO 3166-1 alpha-2 code. */
  countryCode: CountryCode; /** The localized extension keys that are allowed. */
  key: LocalizationExtensionKey; /** The purpose of this localization extension. */
  purpose: LocalizationExtensionPurpose; /** The localized extension title. */
  title: Scalars['String']['output']; /** The value of the field. */
  value: Scalars['String']['output'];
};
/** An auto-generated type for paginating through multiple LocalizationExtensions. */
type LocalizationExtensionConnection = {
  __typename?: 'LocalizationExtensionConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<LocalizationExtensionEdge>; /** A list of nodes that are contained in LocalizationExtensionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<LocalizationExtension>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one LocalizationExtension and a cursor during pagination. */
type LocalizationExtensionEdge = {
  __typename?: 'LocalizationExtensionEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of LocalizationExtensionEdge. */
  node: LocalizationExtension;
};
/** The key of a localization extension. */
declare enum LocalizationExtensionKey {
  /** Extension key 'shipping_credential_br' for country BR. */
  ShippingCredentialBr = 'SHIPPING_CREDENTIAL_BR',
  /** Extension key 'shipping_credential_cl' for country CL. */
  ShippingCredentialCl = 'SHIPPING_CREDENTIAL_CL',
  /** Extension key 'shipping_credential_cn' for country CN. */
  ShippingCredentialCn = 'SHIPPING_CREDENTIAL_CN',
  /** Extension key 'shipping_credential_co' for country CO. */
  ShippingCredentialCo = 'SHIPPING_CREDENTIAL_CO',
  /** Extension key 'shipping_credential_cr' for country CR. */
  ShippingCredentialCr = 'SHIPPING_CREDENTIAL_CR',
  /** Extension key 'shipping_credential_ec' for country EC. */
  ShippingCredentialEc = 'SHIPPING_CREDENTIAL_EC',
  /** Extension key 'shipping_credential_es' for country ES. */
  ShippingCredentialEs = 'SHIPPING_CREDENTIAL_ES',
  /** Extension key 'shipping_credential_gt' for country GT. */
  ShippingCredentialGt = 'SHIPPING_CREDENTIAL_GT',
  /** Extension key 'shipping_credential_id' for country ID. */
  ShippingCredentialId = 'SHIPPING_CREDENTIAL_ID',
  /** Extension key 'shipping_credential_kr' for country KR. */
  ShippingCredentialKr = 'SHIPPING_CREDENTIAL_KR',
  /** Extension key 'shipping_credential_mx' for country MX. */
  ShippingCredentialMx = 'SHIPPING_CREDENTIAL_MX',
  /** Extension key 'shipping_credential_my' for country MY. */
  ShippingCredentialMy = 'SHIPPING_CREDENTIAL_MY',
  /** Extension key 'shipping_credential_pe' for country PE. */
  ShippingCredentialPe = 'SHIPPING_CREDENTIAL_PE',
  /** Extension key 'shipping_credential_pt' for country PT. */
  ShippingCredentialPt = 'SHIPPING_CREDENTIAL_PT',
  /** Extension key 'shipping_credential_py' for country PY. */
  ShippingCredentialPy = 'SHIPPING_CREDENTIAL_PY',
  /** Extension key 'shipping_credential_tr' for country TR. */
  ShippingCredentialTr = 'SHIPPING_CREDENTIAL_TR',
  /** Extension key 'shipping_credential_tw' for country TW. */
  ShippingCredentialTw = 'SHIPPING_CREDENTIAL_TW',
  /** Extension key 'shipping_credential_type_co' for country CO. */
  ShippingCredentialTypeCo = 'SHIPPING_CREDENTIAL_TYPE_CO',
  /** Extension key 'tax_credential_br' for country BR. */
  TaxCredentialBr = 'TAX_CREDENTIAL_BR',
  /** Extension key 'tax_credential_cl' for country CL. */
  TaxCredentialCl = 'TAX_CREDENTIAL_CL',
  /** Extension key 'tax_credential_co' for country CO. */
  TaxCredentialCo = 'TAX_CREDENTIAL_CO',
  /** Extension key 'tax_credential_cr' for country CR. */
  TaxCredentialCr = 'TAX_CREDENTIAL_CR',
  /** Extension key 'tax_credential_ec' for country EC. */
  TaxCredentialEc = 'TAX_CREDENTIAL_EC',
  /** Extension key 'tax_credential_es' for country ES. */
  TaxCredentialEs = 'TAX_CREDENTIAL_ES',
  /** Extension key 'tax_credential_gt' for country GT. */
  TaxCredentialGt = 'TAX_CREDENTIAL_GT',
  /** Extension key 'tax_credential_id' for country ID. */
  TaxCredentialId = 'TAX_CREDENTIAL_ID',
  /** Extension key 'tax_credential_it' for country IT. */
  TaxCredentialIt = 'TAX_CREDENTIAL_IT',
  /** Extension key 'tax_credential_mx' for country MX. */
  TaxCredentialMx = 'TAX_CREDENTIAL_MX',
  /** Extension key 'tax_credential_my' for country MY. */
  TaxCredentialMy = 'TAX_CREDENTIAL_MY',
  /** Extension key 'tax_credential_pe' for country PE. */
  TaxCredentialPe = 'TAX_CREDENTIAL_PE',
  /** Extension key 'tax_credential_pt' for country PT. */
  TaxCredentialPt = 'TAX_CREDENTIAL_PT',
  /** Extension key 'tax_credential_py' for country PY. */
  TaxCredentialPy = 'TAX_CREDENTIAL_PY',
  /** Extension key 'tax_credential_tr' for country TR. */
  TaxCredentialTr = 'TAX_CREDENTIAL_TR',
  /** Extension key 'tax_credential_type_co' for country CO. */
  TaxCredentialTypeCo = 'TAX_CREDENTIAL_TYPE_CO',
  /** Extension key 'tax_credential_type_mx' for country MX. */
  TaxCredentialTypeMx = 'TAX_CREDENTIAL_TYPE_MX',
  /** Extension key 'tax_credential_use_mx' for country MX. */
  TaxCredentialUseMx = 'TAX_CREDENTIAL_USE_MX',
  /** Extension key 'tax_email_it' for country IT. */
  TaxEmailIt = 'TAX_EMAIL_IT'
}
/** The purpose of a localization extension. */
declare enum LocalizationExtensionPurpose {
  /** Extensions that are used for shipping purposes, for example, customs clearance. */
  Shipping = 'SHIPPING',
  /** Extensions that are used for taxes purposes, for example, invoicing. */
  Tax = 'TAX'
}
/** Represents the value captured by a localized field. Localized fields are additional fields required by certain countries on international orders. For example, some countries require additional fields for customs information or tax identification numbers. */
type LocalizedField = {
  __typename?: 'LocalizedField'; /** Country ISO 3166-1 alpha-2 code. */
  countryCode: CountryCode; /** The localized field keys that are allowed. */
  key: LocalizedFieldKey; /** The purpose of this localized field. */
  purpose: LocalizedFieldPurpose; /** The localized field title. */
  title: Scalars['String']['output']; /** The value of the field. */
  value: Scalars['String']['output'];
};
/** An auto-generated type for paginating through multiple LocalizedFields. */
type LocalizedFieldConnection = {
  __typename?: 'LocalizedFieldConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<LocalizedFieldEdge>; /** A list of nodes that are contained in LocalizedFieldEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<LocalizedField>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one LocalizedField and a cursor during pagination. */
type LocalizedFieldEdge = {
  __typename?: 'LocalizedFieldEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of LocalizedFieldEdge. */
  node: LocalizedField;
};
/** The key of a localized field. */
declare enum LocalizedFieldKey {
  /** Localized field key 'shipping_credential_br' for country Brazil. */
  ShippingCredentialBr = 'SHIPPING_CREDENTIAL_BR',
  /** Localized field key 'shipping_credential_cl' for country Chile. */
  ShippingCredentialCl = 'SHIPPING_CREDENTIAL_CL',
  /** Localized field key 'shipping_credential_cn' for country China. */
  ShippingCredentialCn = 'SHIPPING_CREDENTIAL_CN',
  /** Localized field key 'shipping_credential_co' for country Colombia. */
  ShippingCredentialCo = 'SHIPPING_CREDENTIAL_CO',
  /** Localized field key 'shipping_credential_cr' for country Costa Rica. */
  ShippingCredentialCr = 'SHIPPING_CREDENTIAL_CR',
  /** Localized field key 'shipping_credential_ec' for country Ecuador. */
  ShippingCredentialEc = 'SHIPPING_CREDENTIAL_EC',
  /** Localized field key 'shipping_credential_es' for country Spain. */
  ShippingCredentialEs = 'SHIPPING_CREDENTIAL_ES',
  /** Localized field key 'shipping_credential_gt' for country Guatemala. */
  ShippingCredentialGt = 'SHIPPING_CREDENTIAL_GT',
  /** Localized field key 'shipping_credential_id' for country Indonesia. */
  ShippingCredentialId = 'SHIPPING_CREDENTIAL_ID',
  /** Localized field key 'shipping_credential_kr' for country South Korea. */
  ShippingCredentialKr = 'SHIPPING_CREDENTIAL_KR',
  /** Localized field key 'shipping_credential_mx' for country Mexico. */
  ShippingCredentialMx = 'SHIPPING_CREDENTIAL_MX',
  /** Localized field key 'shipping_credential_my' for country Malaysia. */
  ShippingCredentialMy = 'SHIPPING_CREDENTIAL_MY',
  /** Localized field key 'shipping_credential_pe' for country Peru. */
  ShippingCredentialPe = 'SHIPPING_CREDENTIAL_PE',
  /** Localized field key 'shipping_credential_pt' for country Portugal. */
  ShippingCredentialPt = 'SHIPPING_CREDENTIAL_PT',
  /** Localized field key 'shipping_credential_py' for country Paraguay. */
  ShippingCredentialPy = 'SHIPPING_CREDENTIAL_PY',
  /** Localized field key 'shipping_credential_tr' for country Turkey. */
  ShippingCredentialTr = 'SHIPPING_CREDENTIAL_TR',
  /** Localized field key 'shipping_credential_tw' for country Taiwan. */
  ShippingCredentialTw = 'SHIPPING_CREDENTIAL_TW',
  /** Localized field key 'shipping_credential_type_co' for country Colombia. */
  ShippingCredentialTypeCo = 'SHIPPING_CREDENTIAL_TYPE_CO',
  /** Localized field key 'tax_credential_br' for country Brazil. */
  TaxCredentialBr = 'TAX_CREDENTIAL_BR',
  /** Localized field key 'tax_credential_cl' for country Chile. */
  TaxCredentialCl = 'TAX_CREDENTIAL_CL',
  /** Localized field key 'tax_credential_co' for country Colombia. */
  TaxCredentialCo = 'TAX_CREDENTIAL_CO',
  /** Localized field key 'tax_credential_cr' for country Costa Rica. */
  TaxCredentialCr = 'TAX_CREDENTIAL_CR',
  /** Localized field key 'tax_credential_ec' for country Ecuador. */
  TaxCredentialEc = 'TAX_CREDENTIAL_EC',
  /** Localized field key 'tax_credential_es' for country Spain. */
  TaxCredentialEs = 'TAX_CREDENTIAL_ES',
  /** Localized field key 'tax_credential_gt' for country Guatemala. */
  TaxCredentialGt = 'TAX_CREDENTIAL_GT',
  /** Localized field key 'tax_credential_id' for country Indonesia. */
  TaxCredentialId = 'TAX_CREDENTIAL_ID',
  /** Localized field key 'tax_credential_it' for country Italy. */
  TaxCredentialIt = 'TAX_CREDENTIAL_IT',
  /** Localized field key 'tax_credential_mx' for country Mexico. */
  TaxCredentialMx = 'TAX_CREDENTIAL_MX',
  /** Localized field key 'tax_credential_my' for country Malaysia. */
  TaxCredentialMy = 'TAX_CREDENTIAL_MY',
  /** Localized field key 'tax_credential_pe' for country Peru. */
  TaxCredentialPe = 'TAX_CREDENTIAL_PE',
  /** Localized field key 'tax_credential_pt' for country Portugal. */
  TaxCredentialPt = 'TAX_CREDENTIAL_PT',
  /** Localized field key 'tax_credential_py' for country Paraguay. */
  TaxCredentialPy = 'TAX_CREDENTIAL_PY',
  /** Localized field key 'tax_credential_tr' for country Turkey. */
  TaxCredentialTr = 'TAX_CREDENTIAL_TR',
  /** Localized field key 'tax_credential_type_co' for country Colombia. */
  TaxCredentialTypeCo = 'TAX_CREDENTIAL_TYPE_CO',
  /** Localized field key 'tax_credential_type_mx' for country Mexico. */
  TaxCredentialTypeMx = 'TAX_CREDENTIAL_TYPE_MX',
  /** Localized field key 'tax_credential_use_mx' for country Mexico. */
  TaxCredentialUseMx = 'TAX_CREDENTIAL_USE_MX',
  /** Localized field key 'tax_email_it' for country Italy. */
  TaxEmailIt = 'TAX_EMAIL_IT'
}
/** The purpose of a localized field. */
declare enum LocalizedFieldPurpose {
  /** Fields that are used for shipping purposes, for example, customs clearance. */
  Shipping = 'SHIPPING',
  /** Fields that are used for taxes purposes, for example, invoicing. */
  Tax = 'TAX'
}
/**
 * A physical location where merchants store and fulfill inventory. Locations include retail stores, warehouses, popups, dropshippers, or other places where inventory is managed or stocked.
 *
 * Active locations can fulfill online orders when configured with shipping rates, local pickup, or local delivery options. Locations track inventory quantities for [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and process [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) fulfillment. Third-party apps using [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) can create and manage their own locations.
 */
type Location = HasMetafieldDefinitions & HasMetafields & LegacyInteroperability & Node & {
  __typename?: 'Location';
  /**
   * Whether the location can be reactivated. If `false`, then trying to activate the location with the
   * [`LocationActivate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationActivate)
   * mutation will return an error that describes why the location can't be activated.
   */
  activatable: Scalars['Boolean']['output']; /** The address of this location. */
  address: LocationAddress; /** Whether the location address has been verified. */
  addressVerified: Scalars['Boolean']['output']; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) that the location was added to a shop. */
  createdAt: Scalars['DateTime']['output'];
  /**
   * Whether this location can be deactivated. If `true`, then the location can be deactivated by calling the
   * [`LocationDeactivate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationDeactivate)
   * mutation. If `false`, then calling the mutation to deactivate it will return an error that describes why the
   * location can't be deactivated.
   */
  deactivatable: Scalars['Boolean']['output']; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) that the location was deactivated at. For example, 3:30 pm on September 7, 2019 in the time zone of UTC (Universal Time Coordinated) is represented as `"2019-09-07T15:50:00Z`". */
  deactivatedAt?: Maybe<Scalars['String']['output']>; /** Whether this location can be deleted. */
  deletable: Scalars['Boolean']['output']; /** Name of the service provider that fulfills from this location. */
  fulfillmentService?: Maybe<FulfillmentService>; /** Whether this location can fulfill online orders. */
  fulfillsOnlineOrders: Scalars['Boolean']['output']; /** Whether this location has active inventory. */
  hasActiveInventory: Scalars['Boolean']['output']; /** Whether this location has orders that need to be fulfilled. */
  hasUnfulfilledOrders: Scalars['Boolean']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The quantities of an inventory item at this location. */
  inventoryLevel?: Maybe<InventoryLevel>; /** A list of the quantities of the inventory items that can be stocked at this location. */
  inventoryLevels: InventoryLevelConnection;
  /**
   * Whether the location is active. A deactivated location can be activated (change `isActive: true`) if it has
   * `activatable` set to `true` by calling the
   * [`locationActivate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationActivate)
   * mutation.
   */
  isActive: Scalars['Boolean']['output']; /** Whether this location is a fulfillment service. */
  isFulfillmentService: Scalars['Boolean']['output'];
  /**
   * Whether the location is your primary location for shipping inventory.
   * @deprecated The concept of a primary location is deprecated, shipsInventory can be used to get a fallback location
   */
  isPrimary: Scalars['Boolean']['output']; /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64']['output']; /** Local pickup settings for the location. */
  localPickupSettingsV2?: Maybe<DeliveryLocalPickupSettings>;
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   */
  metafield?: Maybe<Metafield>;
  /**
   * List of metafield definitions.
   * @deprecated This field will be removed in a future version. Use `QueryRoot.metafieldDefinitions` instead.
   */
  metafieldDefinitions: MetafieldDefinitionConnection;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   */
  metafields: MetafieldConnection; /** The name of the location. */
  name: Scalars['String']['output']; /** Legacy field indicating this location was designated for shipping. All locations with valid addresses can now ship. */
  shipsInventory: Scalars['Boolean']['output']; /** List of suggested addresses for this location (empty if none). */
  suggestedAddresses: Array<LocationSuggestedAddress>; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the location was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};
/** Represents the address of a location. */
type LocationAddress = {
  __typename?: 'LocationAddress'; /** The first line of the address for the location. */
  address1?: Maybe<Scalars['String']['output']>; /** The second line of the address for the location. */
  address2?: Maybe<Scalars['String']['output']>; /** The city of the location. */
  city?: Maybe<Scalars['String']['output']>; /** The country of the location. */
  country?: Maybe<Scalars['String']['output']>; /** The country code of the location. */
  countryCode?: Maybe<Scalars['String']['output']>; /** A formatted version of the address for the location. */
  formatted: Array<Scalars['String']['output']>; /** The approximate latitude coordinates of the location. */
  latitude?: Maybe<Scalars['Float']['output']>; /** The approximate longitude coordinates of the location. */
  longitude?: Maybe<Scalars['Float']['output']>; /** The phone number of the location. */
  phone?: Maybe<Scalars['String']['output']>; /** The province of the location. */
  province?: Maybe<Scalars['String']['output']>; /** The code for the province, state, or district of the address of the location. */
  provinceCode?: Maybe<Scalars['String']['output']>; /** The ZIP code of the location. */
  zip?: Maybe<Scalars['String']['output']>;
};
/** An auto-generated type for paginating through multiple Locations. */
type LocationConnection = {
  __typename?: 'LocationConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<LocationEdge>; /** A list of nodes that are contained in LocationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<Location>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one Location and a cursor during pagination. */
type LocationEdge = {
  __typename?: 'LocationEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of LocationEdge. */
  node: Location;
};
/** Represents a suggested address for a location. */
type LocationSuggestedAddress = {
  __typename?: 'LocationSuggestedAddress'; /** The first line of the suggested address. */
  address1?: Maybe<Scalars['String']['output']>; /** The second line of the suggested address. */
  address2?: Maybe<Scalars['String']['output']>; /** The city of the suggested address. */
  city?: Maybe<Scalars['String']['output']>; /** The country of the suggested address. */
  country?: Maybe<Scalars['String']['output']>; /** The country code of the suggested address. */
  countryCode?: Maybe<CountryCode>; /** A formatted version of the suggested address. */
  formatted: Array<Scalars['String']['output']>; /** The province of the suggested address. */
  province?: Maybe<Scalars['String']['output']>; /** The code for the province, state, or district of the suggested address. */
  provinceCode?: Maybe<Scalars['String']['output']>; /** The ZIP code of the suggested address. */
  zip?: Maybe<Scalars['String']['output']>;
};
/** A condition checking the location that the visitor is shopping from. */
type LocationsCondition = {
  __typename?: 'LocationsCondition'; /** The application level for the condition. */
  applicationLevel?: Maybe<MarketConditionApplicationType>; /** The locations that comprise the market. */
  locations: LocationConnection;
};
/**
 * A physical mailing address. For example, a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s default address and an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)'s billing address are both mailing addresses. Stores standard address components, customer name information, and company details.
 *
 * The address includes geographic coordinates ([`latitude`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress#field-MailingAddress.fields.latitude) and [`longitude`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress#field-MailingAddress.fields.longitude)). You can format addresses for display using the [`formatted`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress#field-MailingAddress.fields.formatted) field with options to include or exclude name and company information.
 */
type MailingAddress = Node & {
  __typename?: 'MailingAddress'; /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']['output']>; /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars['String']['output']>; /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']['output']>; /** The name of the customer's company or organization. */
  company?: Maybe<Scalars['String']['output']>; /** Whether the address corresponds to recognized latitude and longitude values. */
  coordinatesValidated: Scalars['Boolean']['output']; /** The name of the country. */
  country?: Maybe<Scalars['String']['output']>;
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   * @deprecated Use `countryCodeV2` instead.
   */
  countryCode?: Maybe<Scalars['String']['output']>;
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   */
  countryCodeV2?: Maybe<CountryCode>; /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']['output']>; /** A formatted version of the address, customized by the provided arguments. */
  formatted: Array<Scalars['String']['output']>; /** A comma-separated list of the values for city, province, and country. */
  formattedArea?: Maybe<Scalars['String']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']['output']>; /** The latitude coordinate of the customer address. */
  latitude?: Maybe<Scalars['Float']['output']>; /** The longitude coordinate of the customer address. */
  longitude?: Maybe<Scalars['Float']['output']>; /** The full name of the customer, based on firstName and lastName. */
  name?: Maybe<Scalars['String']['output']>; /** A unique phone number for the customer. */
  phone?: Maybe<Scalars['String']['output']>; /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']['output']>;
  /**
   * The alphanumeric code for the region.
   *
   * For example, ON.
   */
  provinceCode?: Maybe<Scalars['String']['output']>; /** The time zone of the address. */
  timeZone?: Maybe<Scalars['String']['output']>;
  /**
   * The validation status that is leveraged by the address validation feature in the Shopify Admin.
   * See ["Validating addresses in your Shopify admin"](https://help.shopify.com/manual/fulfillment/managing-orders/validating-order-address) for more details.
   */
  validationResultSummary?: Maybe<MailingAddressValidationResult>; /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']['output']>;
};
/** An auto-generated type for paginating through multiple MailingAddresses. */
type MailingAddressConnection = {
  __typename?: 'MailingAddressConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<MailingAddressEdge>; /** A list of nodes that are contained in MailingAddressEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<MailingAddress>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one MailingAddress and a cursor during pagination. */
type MailingAddressEdge = {
  __typename?: 'MailingAddressEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of MailingAddressEdge. */
  node: MailingAddress;
};
/** Highest level of validation concerns identified for the address. */
declare enum MailingAddressValidationResult {
  /** Indicates that the address has been validated and is very likely to contain invalid information. */
  Error = 'ERROR',
  /** Indicates that the address has been validated and no issues were found. */
  NoIssues = 'NO_ISSUES',
  /** Indicates that the address has been validated and might contain invalid information. */
  Warning = 'WARNING'
}
/** The type of resource a payment mandate can be used for. */
declare enum MandateResourceType {
  /** A credential stored on file for checkout. */
  Checkout = 'CHECKOUT',
  /** A credential stored on file for merchant and customer initiated transactions. */
  CredentialOnFile = 'CREDENTIAL_ON_FILE',
  /** A credential stored on file for a Draft Order. */
  DraftOrder = 'DRAFT_ORDER',
  /** A credential stored on file for an Order. */
  Order = 'ORDER',
  /** A credential stored for subscription billing attempts. */
  Subscriptions = 'SUBSCRIPTIONS'
}
/**
 * A market is a group of one or more regions that you want to target for international sales.
 * By creating a market, you can configure a distinct, localized shopping experience for
 * customers from a specific area of the world. For example, you can
 * [change currency](https://shopify.dev/api/admin-graphql/current/mutations/marketCurrencySettingsUpdate),
 * [configure international pricing](https://shopify.dev/apps/internationalization/product-price-lists),
 * or [add market-specific domains or subfolders](https://shopify.dev/api/admin-graphql/current/objects/MarketWebPresence).
 */
type Market = HasMetafieldDefinitions & HasMetafields & Node & {
  __typename?: 'Market'; /** Whether the market has a customization with the given ID. */
  assignedCustomization: Scalars['Boolean']['output']; /** The catalogs that belong to the market. */
  catalogs: MarketCatalogConnection; /** The number of catalogs that belong to the market. */
  catalogsCount?: Maybe<Count>; /** The conditions under which a visitor is in the market. */
  conditions?: Maybe<MarketConditions>; /** The market’s currency settings. */
  currencySettings?: Maybe<MarketCurrencySettings>;
  /**
   * Whether the market is enabled to receive visitors and sales. **Note**: Regions in inactive
   * markets can't be selected on the storefront or in checkout.
   * @deprecated Use `status` instead.
   */
  enabled: Scalars['Boolean']['output']; /** A short, human-readable unique identifier for the market. This is changeable by the merchant. */
  handle: Scalars['String']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   */
  metafield?: Maybe<Metafield>;
  /**
   * List of metafield definitions.
   * @deprecated This field will be removed in a future version. Use `QueryRoot.metafieldDefinitions` instead.
   */
  metafieldDefinitions: MetafieldDefinitionConnection;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   */
  metafields: MetafieldConnection; /** The name of the market. Not shown to customers. */
  name: Scalars['String']['output']; /** The inclusive pricing strategy for a market. This determines if prices include duties and / or taxes. */
  priceInclusions?: Maybe<MarketPriceInclusions>;
  /**
   * The market’s price list, which specifies a percentage-based price adjustment as well as
   * fixed price overrides for specific variants.
   *
   * Markets with multiple catalogs can have multiple price lists. To query which price lists are connected to
   * a market, please query for price lists through the catalogs connection.
   * @deprecated Use `catalogs` instead.
   */
  priceList?: Maybe<PriceList>;
  /**
   * Whether the market is the shop’s primary market.
   * @deprecated This field is deprecated and will be removed in the future.
   */
  primary: Scalars['Boolean']['output'];
  /**
   * The regions that comprise the market.
   * @deprecated This field is deprecated and will be removed in the future. Use `conditions.regionConditions` instead.
   */
  regions: MarketRegionConnection; /** Status of the market. Replaces the enabled field. */
  status: MarketStatus; /** The type of the market. */
  type: MarketType;
  /**
   * The market’s web presence, which defines its SEO strategy. This can be a different domain,
   * subdomain, or subfolders of the primary domain. Each web presence comprises one or more
   * language variants. If a market doesn't have its own web presence, then the market is accessible on the
   * primary market's domains using [country
   * selectors](https://shopify.dev/themes/internationalization/multiple-currencies-languages#the-country-selector).
   * If it's the primary market and it has multiple web presences, then this field will return the primary domain web presence.
   * @deprecated Use `webPresences` instead.
   */
  webPresence?: Maybe<MarketWebPresence>;
  /**
   * The market’s web presences, which defines its SEO strategy. This can be a different domain,
   * subdomain, or subfolders of the primary domain. Each web presence comprises one or more
   * language variants. If a market doesn't have any web presences, then the market is accessible on the
   * primary market's domains using [country
   * selectors](https://shopify.dev/themes/internationalization/multiple-currencies-languages#the-country-selector).
   */
  webPresences: MarketWebPresenceConnection;
};
/**
 * A catalog for managing product availability and pricing for specific [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) contexts. Each catalog links to one or more markets. The catalog can optionally include a [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) to control which [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects customers see, and a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) for market-specific pricing adjustments. When a publication isn't associated with the catalog, product availability is determined by the sales channel.
 *
 * Use catalogs to create distinct shopping experiences for different geographic regions or customer segments.
 *
 * Learn more about [building a catalog](https://shopify.dev/docs/apps/build/markets/build-catalog) and [managing markets](https://shopify.dev/docs/apps/build/markets).
 */
type MarketCatalog = Catalog & Node & {
  __typename?: 'MarketCatalog'; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The markets associated with the catalog. */
  markets: MarketConnection; /** The number of markets associated with the catalog. */
  marketsCount?: Maybe<Count>; /** Most recent catalog operations. */
  operations: Array<ResourceOperation>; /** The price list associated with the catalog. */
  priceList?: Maybe<PriceList>; /** A group of products and collections that's published to a catalog. */
  publication?: Maybe<Publication>; /** The status of the catalog. */
  status: CatalogStatus; /** The name of the catalog. */
  title: Scalars['String']['output'];
};
/** An auto-generated type for paginating through multiple MarketCatalogs. */
type MarketCatalogConnection = {
  __typename?: 'MarketCatalogConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<MarketCatalogEdge>; /** A list of nodes that are contained in MarketCatalogEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<MarketCatalog>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one MarketCatalog and a cursor during pagination. */
type MarketCatalogEdge = {
  __typename?: 'MarketCatalogEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of MarketCatalogEdge. */
  node: MarketCatalog;
};
/** The application level for a market condition. */
declare enum MarketConditionApplicationType {
  /** The condition matches all records of a given type. */
  All = 'ALL',
  /** The condition matches specified records of a given type. */
  Specified = 'SPECIFIED'
}
/** The condition types for the condition set. */
declare enum MarketConditionType {
  /** The condition checks the company location that the visitor is purchasing for. */
  CompanyLocation = 'COMPANY_LOCATION',
  /** The condition checks the location that the visitor is shopping from. */
  Location = 'LOCATION',
  /** The condition checks the visitor's region. */
  Region = 'REGION'
}
/** The conditions that determine whether a visitor is in a market. */
type MarketConditions = {
  __typename?: 'MarketConditions'; /** The company location conditions that determine whether a visitor is in the market. */
  companyLocationsCondition?: Maybe<CompanyLocationsCondition>; /** The set of condition types that are defined for the market. */
  conditionTypes: Array<MarketConditionType>; /** The retail location conditions that determine whether a visitor is in the market. */
  locationsCondition?: Maybe<LocationsCondition>; /** The region conditions that determine whether a visitor is in the market. */
  regionsCondition?: Maybe<RegionsCondition>;
};
/** An auto-generated type for paginating through multiple Markets. */
type MarketConnection = {
  __typename?: 'MarketConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<MarketEdge>; /** A list of nodes that are contained in MarketEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<Market>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** A market's currency settings. */
type MarketCurrencySettings = {
  __typename?: 'MarketCurrencySettings'; /** The currency which this market's customers must use if local currencies are disabled. */
  baseCurrency: CurrencySetting;
  /**
   * Whether or not local currencies are enabled. If enabled, then prices will
   * be converted to give each customer the best experience based on their
   * region. If disabled, then all customers in this market will see prices
   * in the market's base currency.
   */
  localCurrencies: Scalars['Boolean']['output']; /** Whether or not rounding is enabled on multi-currency prices. */
  roundingEnabled: Scalars['Boolean']['output'];
};
/** An auto-generated type which holds one Market and a cursor during pagination. */
type MarketEdge = {
  __typename?: 'MarketEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of MarketEdge. */
  node: Market;
};
/** The inclusive pricing strategy for a market. */
type MarketPriceInclusions = {
  __typename?: 'MarketPriceInclusions'; /** The inclusive duties pricing strategy of the market. This determines if prices include duties. */
  inclusiveDutiesPricingStrategy: InclusiveDutiesPricingStrategy; /** The inclusive tax pricing strategy of the market. This determines if prices include taxes. */
  inclusiveTaxPricingStrategy: InclusiveTaxPricingStrategy;
};
/** A geographic region which comprises a market. */
type MarketRegion = {
  /** A globally-unique ID. */id: Scalars['ID']['output']; /** The name of the region. */
  name: Scalars['String']['output'];
};
/** An auto-generated type for paginating through multiple MarketRegions. */
type MarketRegionConnection = {
  __typename?: 'MarketRegionConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<MarketRegionEdge>; /** A list of nodes that are contained in MarketRegionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<MarketRegion>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one MarketRegion and a cursor during pagination. */
type MarketRegionEdge = {
  __typename?: 'MarketRegionEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of MarketRegionEdge. */
  node: MarketRegion;
};
/** The possible market statuses. */
declare enum MarketStatus {
  /** The market is active. */
  Active = 'ACTIVE',
  /** The market is in draft. */
  Draft = 'DRAFT'
}
/** The market types. */
declare enum MarketType {
  /** The market applies to the visitor based on the company location. */
  CompanyLocation = 'COMPANY_LOCATION',
  /** The market applies to the visitor based on the location. */
  Location = 'LOCATION',
  /** The market does not apply to any visitor. */
  None = 'NONE',
  /** The market applies to the visitor based on region. */
  Region = 'REGION'
}
/**
 * The market’s web presence, which defines its SEO strategy. This can be a different domain
 * (e.g. `example.ca`), subdomain (e.g. `ca.example.com`), or subfolders of the primary
 * domain (e.g. `example.com/en-ca`). Each web presence comprises one or more language
 * variants. If a market does not have its own web presence, it is accessible on the shop’s
 * primary domain via [country
 * selectors](https://shopify.dev/themes/internationalization/multiple-currencies-languages#the-country-selector).
 *
 * Note: while the domain/subfolders defined by a market’s web presence are not applicable to
 * custom storefronts, which must manage their own domains and routing, the languages chosen
 * here do govern [the languages available on the Storefront
 * API](https://shopify.dev/custom-storefronts/internationalization/multiple-languages) for the countries in
 * this market.
 */
type MarketWebPresence = Node & {
  __typename?: 'MarketWebPresence';
  /**
   * The ShopLocale object for the alternate locales. When a domain is used, these locales will be
   * available as language-specific subfolders. For example, if English is an
   * alternate locale, and `example.ca` is the market’s domain, then
   * `example.ca/en` will load in English.
   */
  alternateLocales: Array<ShopLocale>;
  /**
   * The ShopLocale object for the default locale. When a domain is used, this is the locale that will
   * be used when the domain root is accessed. For example, if French is the default locale,
   * and `example.ca` is the market’s domain, then `example.ca` will load in French.
   */
  defaultLocale: ShopLocale;
  /**
   * The web presence’s domain.
   * This field will be null if `subfolderSuffix` isn't null.
   */
  domain?: Maybe<Domain>; /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /**
   * The associated market. This can be null for a web presence that isn't associated with a market.
   * @deprecated Use `markets` instead.
   */
  market?: Maybe<Market>; /** The associated markets for this web presence. */
  markets?: Maybe<MarketConnection>; /** The list of root URLs for each of the web presence’s locales. As of version `2024-04` this value will no longer have a trailing slash. */
  rootUrls: Array<MarketWebPresenceRootUrl>; /** The market-specific suffix of the subfolders defined by the web presence. Example: in `/en-us` the subfolder suffix is `us`. This field will be null if `domain` isn't null. */
  subfolderSuffix?: Maybe<Scalars['String']['output']>;
};
/** An auto-generated type for paginating through multiple MarketWebPresences. */
type MarketWebPresenceConnection = {
  __typename?: 'MarketWebPresenceConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<MarketWebPresenceEdge>; /** A list of nodes that are contained in MarketWebPresenceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<MarketWebPresence>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one MarketWebPresence and a cursor during pagination. */
type MarketWebPresenceEdge = {
  __typename?: 'MarketWebPresenceEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of MarketWebPresenceEdge. */
  node: MarketWebPresence;
};
/**
 * The URL for the homepage of the online store in the context of a particular market and a
 * particular locale.
 */
type MarketWebPresenceRootUrl = {
  __typename?: 'MarketWebPresenceRootUrl'; /** The locale that the storefront loads in. */
  locale: Scalars['String']['output']; /** The URL. */
  url: Scalars['URL']['output'];
};
/** The medium through which the marketing activity and event reached consumers. This is used for reporting aggregation. */
declare enum MarketingChannel {
  /** Displayed ads. */
  Display = 'DISPLAY',
  /** Email. */
  Email = 'EMAIL',
  /** Referral links. */
  Referral = 'REFERRAL',
  /** Paid search. */
  Search = 'SEARCH',
  /** Social media. */
  Social = 'SOCIAL'
}
/** Represents actions that market a merchant's store or products. */
type MarketingEvent = LegacyInteroperability & Node & {
  __typename?: 'MarketingEvent'; /** The app that the marketing event is attributed to. */
  app: App;
  /**
   * The medium through which the marketing activity and event reached consumers. This is used for reporting aggregation.
   * @deprecated Use `marketingChannelType` instead.
   */
  channel?: Maybe<MarketingChannel>; /** The unique string identifier of the channel to which this activity belongs. For the correct handle for your channel, contact your partner manager. */
  channelHandle?: Maybe<Scalars['String']['output']>; /** A human-readable description of the marketing event. */
  description?: Maybe<Scalars['String']['output']>; /** The date and time when the marketing event ended. */
  endedAt?: Maybe<Scalars['DateTime']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64']['output']; /** The URL where the marketing event can be managed. */
  manageUrl?: Maybe<Scalars['URL']['output']>; /** The medium through which the marketing activity and event reached consumers. This is used for reporting aggregation. */
  marketingChannelType?: Maybe<MarketingChannel>; /** The URL where the marketing event can be previewed. */
  previewUrl?: Maybe<Scalars['URL']['output']>; /** An optional ID that helps Shopify validate engagement data. */
  remoteId?: Maybe<Scalars['String']['output']>; /** The date and time when the marketing event is scheduled to end. */
  scheduledToEndAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Where the `MarketingEvent` occurred and what kind of content was used.
   * Because `utmSource` and `utmMedium` are often used interchangeably, this is
   * based on a combination of `marketingChannel`, `referringDomain`, and `type` to
   * provide a consistent representation for any given piece of marketing
   * regardless of the app that created it.
   */
  sourceAndMedium: Scalars['String']['output']; /** The date and time when the marketing event started. */
  startedAt: Scalars['DateTime']['output'];
  /**
   * The display text for the marketing event type.
   * @deprecated Use `sourceAndMedium` instead.
   */
  targetTypeDisplayText: Scalars['String']['output']; /** The marketing event type. */
  type: MarketingTactic; /** The name of the marketing campaign. */
  utmCampaign?: Maybe<Scalars['String']['output']>; /** The medium that the marketing campaign is using. Example values: `cpc`, `banner`. */
  utmMedium?: Maybe<Scalars['String']['output']>; /** The referrer of the marketing event. Example values: `google`, `newsletter`. */
  utmSource?: Maybe<Scalars['String']['output']>;
};
/** The available types of tactics for a marketing activity. */
declare enum MarketingTactic {
  /** An abandoned cart recovery email. */
  AbandonedCart = 'ABANDONED_CART',
  /** An ad, such as a Facebook ad. */
  Ad = 'AD',
  /** An affiliate link. */
  Affiliate = 'AFFILIATE',
  /** A link. */
  Link = 'LINK',
  /** A loyalty program. */
  Loyalty = 'LOYALTY',
  /** A messaging app, such as Facebook Messenger. */
  Message = 'MESSAGE',
  /** A newsletter. */
  Newsletter = 'NEWSLETTER',
  /** A notification in the Shopify admin. */
  Notification = 'NOTIFICATION',
  /** A blog post. */
  Post = 'POST',
  /** A retargeting ad. */
  Retargeting = 'RETARGETING',
  /** Search engine optimization. */
  Seo = 'SEO',
  /** A popup on the online store. */
  StorefrontApp = 'STOREFRONT_APP',
  /** A transactional email. */
  Transactional = 'TRANSACTIONAL'
}
/** The entitlements for B2B markets. */
type MarketsB2BEntitlement = {
  __typename?: 'MarketsB2BEntitlement'; /** The entitlements for B2B market catalogs. */
  catalogs: MarketsCatalogsEntitlement; /** Whether B2B markets are enabled. */
  enabled: Scalars['Boolean']['output'];
};
/** The entitlements for catalogs. */
type MarketsCatalogsEntitlement = {
  __typename?: 'MarketsCatalogsEntitlement'; /** Whether catalogs are enabled. */
  enabled: Scalars['Boolean']['output'];
};
/** The entitlements for region markets. */
type MarketsRegionsEntitlement = {
  __typename?: 'MarketsRegionsEntitlement'; /** The entitlements for region market catalogs. */
  catalogs: MarketsCatalogsEntitlement; /** Whether region markets are enabled. */
  enabled: Scalars['Boolean']['output'];
};
/** The entitlements for retail markets. */
type MarketsRetailEntitlement = {
  __typename?: 'MarketsRetailEntitlement'; /** The entitlements for retail market catalogs. */
  catalogs: MarketsCatalogsEntitlement; /** Whether retail markets are enabled. */
  enabled: Scalars['Boolean']['output'];
};
/** The entitlements for themes. */
type MarketsThemesEntitlement = {
  __typename?: 'MarketsThemesEntitlement'; /** Whether themes are enabled. */
  enabled: Scalars['Boolean']['output'];
};
/** Markets entitlement information. */
type MarketsType = {
  __typename?: 'MarketsType'; /** The entitlements for B2B markets. */
  b2b: MarketsB2BEntitlement; /** The entitlements for region markets. */
  regions: MarketsRegionsEntitlement; /** The entitlements for retail markets. */
  retail: MarketsRetailEntitlement; /** The entitlements for themes. */
  themes: MarketsThemesEntitlement;
};
/** Represents a media interface. */
type Media = {
  /** A word or phrase to share the nature or contents of a media. */alt?: Maybe<Scalars['String']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The media content type. */
  mediaContentType: MediaContentType; /** Any errors which have occurred on the media. */
  mediaErrors: Array<MediaError>; /** The warnings attached to the media. */
  mediaWarnings: Array<MediaWarning>; /** The preview image for the media. */
  preview?: Maybe<MediaPreviewImage>; /** Current status of the media. */
  status: MediaStatus;
};
/** An auto-generated type for paginating through multiple Media. */
type MediaConnection = {
  __typename?: 'MediaConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<MediaEdge>; /** A list of nodes that are contained in MediaEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<Media>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** The possible content types for a media object. */
declare enum MediaContentType {
  /** An externally hosted video. */
  ExternalVideo = 'EXTERNAL_VIDEO',
  /** A Shopify-hosted image. */
  Image = 'IMAGE',
  /** A 3d model. */
  Model_3D = 'MODEL_3D',
  /** A Shopify-hosted video. */
  Video = 'VIDEO'
}
/** An auto-generated type which holds one Media and a cursor during pagination. */
type MediaEdge = {
  __typename?: 'MediaEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of MediaEdge. */
  node: Media;
};
/**
 * Represents a media error. This typically occurs when there is an issue with the media itself causing it to fail validation.
 * Check the media before attempting to upload again.
 */
type MediaError = {
  __typename?: 'MediaError'; /** Code representing the type of error. */
  code: MediaErrorCode; /** Additional details regarding the error. */
  details?: Maybe<Scalars['String']['output']>; /** Translated error message. */
  message: Scalars['String']['output'];
};
/** Error types for media. */
declare enum MediaErrorCode {
  /** Media could not be created because a file with the same name already exists. */
  DuplicateFilenameError = 'DUPLICATE_FILENAME_ERROR',
  /** Media could not be created because embed permissions are disabled for this video. */
  ExternalVideoEmbedDisabled = 'EXTERNAL_VIDEO_EMBED_DISABLED',
  /** Media could not be created because video is either not found or still transcoding. */
  ExternalVideoEmbedNotFoundOrTranscoding = 'EXTERNAL_VIDEO_EMBED_NOT_FOUND_OR_TRANSCODING',
  /** Media could not be created because the external video has an invalid aspect ratio. */
  ExternalVideoInvalidAspectRatio = 'EXTERNAL_VIDEO_INVALID_ASPECT_RATIO',
  /** Media could not be created because the external video could not be found. */
  ExternalVideoNotFound = 'EXTERNAL_VIDEO_NOT_FOUND',
  /** Media could not be created because the external video is not listed or is private. */
  ExternalVideoUnlisted = 'EXTERNAL_VIDEO_UNLISTED',
  /** Media could not be created because the cumulative file storage limit would be exceeded. */
  FileStorageLimitExceeded = 'FILE_STORAGE_LIMIT_EXCEEDED',
  /** File could not be processed because the source could not be downloaded. */
  GenericFileDownloadFailure = 'GENERIC_FILE_DOWNLOAD_FAILURE',
  /** File could not be created because the size is too large. */
  GenericFileInvalidSize = 'GENERIC_FILE_INVALID_SIZE',
  /** Media could not be processed because the image could not be downloaded. */
  ImageDownloadFailure = 'IMAGE_DOWNLOAD_FAILURE',
  /** Media could not be processed because the image could not be processed. */
  ImageProcessingFailure = 'IMAGE_PROCESSING_FAILURE',
  /** Media could not be created because the image has an invalid aspect ratio. */
  InvalidImageAspectRatio = 'INVALID_IMAGE_ASPECT_RATIO',
  /** Media could not be created because the image size is too large. */
  InvalidImageFileSize = 'INVALID_IMAGE_FILE_SIZE',
  /** Media could not be created because the image's resolution exceeds the max limit. */
  InvalidImageResolution = 'INVALID_IMAGE_RESOLUTION',
  /** Media could not be processed because the signed URL was invalid. */
  InvalidSignedUrl = 'INVALID_SIGNED_URL',
  /** Media timed out because it is currently being modified by another operation. */
  MediaTimeoutError = 'MEDIA_TIMEOUT_ERROR',
  /** Media could not be created because the model file failed processing. */
  Model3DGlbOutputCreationError = 'MODEL3D_GLB_OUTPUT_CREATION_ERROR',
  /** Media could not be created because the model can't be converted to USDZ format. */
  Model3DGlbToUsdzConversionError = 'MODEL3D_GLB_TO_USDZ_CONVERSION_ERROR',
  /** Media could not be created because the model file failed processing. */
  Model3DProcessingFailure = 'MODEL3D_PROCESSING_FAILURE',
  /** Media could not be created because the model's thumbnail generation failed. */
  Model3DThumbnailGenerationError = 'MODEL3D_THUMBNAIL_GENERATION_ERROR',
  /** There was an issue while trying to generate a new thumbnail. */
  Model3DThumbnailRegenerationError = 'MODEL3D_THUMBNAIL_REGENERATION_ERROR',
  /** Model failed validation. */
  Model3DValidationError = 'MODEL3D_VALIDATION_ERROR',
  /** Media error has occured for unknown reason. */
  Unknown = 'UNKNOWN',
  /** Media could not be created because the image is an unsupported file type. */
  UnsupportedImageFileType = 'UNSUPPORTED_IMAGE_FILE_TYPE',
  /** Media could not be created because it has an invalid file type. */
  VideoInvalidFiletypeError = 'VIDEO_INVALID_FILETYPE_ERROR',
  /** Media could not be created because it does not meet the maximum duration requirement. */
  VideoMaxDurationError = 'VIDEO_MAX_DURATION_ERROR',
  /** Media could not be created because it does not meet the maximum height requirement. */
  VideoMaxHeightError = 'VIDEO_MAX_HEIGHT_ERROR',
  /** Media could not be created because it does not meet the maximum width requirement. */
  VideoMaxWidthError = 'VIDEO_MAX_WIDTH_ERROR',
  /** Media could not be created because the metadata could not be read. */
  VideoMetadataReadError = 'VIDEO_METADATA_READ_ERROR',
  /** Media could not be created because it does not meet the minimum duration requirement. */
  VideoMinDurationError = 'VIDEO_MIN_DURATION_ERROR',
  /** Media could not be created because it does not meet the minimum height requirement. */
  VideoMinHeightError = 'VIDEO_MIN_HEIGHT_ERROR',
  /** Media could not be created because it does not meet the minimum width requirement. */
  VideoMinWidthError = 'VIDEO_MIN_WIDTH_ERROR',
  /** Video failed validation. */
  VideoValidationError = 'VIDEO_VALIDATION_ERROR'
}
/**
 * The `MediaImage` object represents an image hosted on Shopify's
 * [content delivery network (CDN)](https://shopify.dev/docs/storefronts/themes/best-practices/performance/platform#shopify-cdn).
 * Shopify CDN is a content system that serves as the primary way to store,
 * manage, and deliver visual content for products, variants, and other resources across the Shopify platform.
 *
 * The `MediaImage` object provides information to:
 *
 * - Store and display product and variant images across online stores, admin interfaces, and mobile apps.
 * - Retrieve visual branding elements, including logos, banners, favicons, and background images in checkout flows.
 * - Retrieve signed URLs for secure, time-limited access to original image files.
 *
 * Each `MediaImage` object provides both the processed image data (with automatic optimization and CDN delivery)
 * and access to the original source file. The image processing is handled asynchronously, so images
 * might not be immediately available after upload. The
 * [`status`](https://shopify.dev/docs/api/admin-graphql/latest/objects/mediaimage#field-MediaImage.fields.status)
 * field indicates when processing is complete and the image is ready for use.
 *
 * The `MediaImage` object implements the [`Media`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media)
 * interface alongside other media types, like videos and 3D models.
 *
 * Learn about
 * managing media for [products](https://shopify.dev/docs/apps/build/online-store/product-media),
 * [product variants](https://shopify.dev/docs/apps/build/online-store/product-variant-media), and
 * [asynchronous media management](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components#asynchronous-media-management).
 */
type MediaImage = File & HasMetafields & HasPublishedTranslations & Media & Node & {
  __typename?: 'MediaImage'; /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']['output']>; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was created. */
  createdAt: Scalars['DateTime']['output']; /** Any errors that have occurred on the file. */
  fileErrors: Array<FileError>; /** The status of the file. */
  fileStatus: FileStatus; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The image for the media. Returns `null` until `status` is `READY`. */
  image?: Maybe<Image>; /** The media content type. */
  mediaContentType: MediaContentType; /** Any errors which have occurred on the media. */
  mediaErrors: Array<MediaError>; /** The warnings attached to the media. */
  mediaWarnings: Array<MediaWarning>;
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   * @deprecated No longer supported. Use metaobjects instead.
   */
  metafield?: Maybe<Metafield>;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   * @deprecated No longer supported. Use metaobjects instead.
   */
  metafields: MetafieldConnection; /** The MIME type of the image. */
  mimeType?: Maybe<Scalars['String']['output']>; /** The original source of the image. */
  originalSource?: Maybe<MediaImageOriginalSource>; /** The preview image for the media. */
  preview?: Maybe<MediaPreviewImage>; /** Current status of the media. */
  status: MediaStatus; /** The published translations associated with the resource. */
  translations: Array<Translation>; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};
/** The original source for an image. */
type MediaImageOriginalSource = {
  __typename?: 'MediaImageOriginalSource'; /** The size of the original file in bytes. */
  fileSize?: Maybe<Scalars['Int']['output']>; /** The URL of the original image, valid only for a short period. */
  url?: Maybe<Scalars['URL']['output']>;
};
/** Represents the preview image for a media. */
type MediaPreviewImage = {
  __typename?: 'MediaPreviewImage'; /** The preview image for the media. Returns `null` until `status` is `READY`. */
  image?: Maybe<Image>; /** Current status of the preview image. */
  status: MediaPreviewImageStatus;
};
/** The possible statuses for a media preview image. */
declare enum MediaPreviewImageStatus {
  /** Preview image processing has failed. */
  Failed = 'FAILED',
  /** Preview image is being processed. */
  Processing = 'PROCESSING',
  /** Preview image is ready to be displayed. */
  Ready = 'READY',
  /** Preview image is uploaded but not yet processed. */
  Uploaded = 'UPLOADED'
}
/** The possible statuses for a media object. */
declare enum MediaStatus {
  /** Media processing has failed. */
  Failed = 'FAILED',
  /** Media is being processed. */
  Processing = 'PROCESSING',
  /** Media is ready to be displayed. */
  Ready = 'READY',
  /** Media has been uploaded but not yet processed. */
  Uploaded = 'UPLOADED'
}
/**
 * Represents a media warning. This occurs when there is a non-blocking concern regarding your media.
 * Consider reviewing your media to ensure it is correct and its parameters are as expected.
 */
type MediaWarning = {
  __typename?: 'MediaWarning'; /** The code representing the type of warning. */
  code: MediaWarningCode; /** Translated warning message. */
  message?: Maybe<Scalars['String']['output']>;
};
/** Warning types for media. */
declare enum MediaWarningCode {
  /** 3D model physical size might be invalid. The dimensions of your model are very large. Consider reviewing your model to ensure they are correct. */
  ModelLargePhysicalSize = 'MODEL_LARGE_PHYSICAL_SIZE',
  /** The thumbnail failed to regenerate.Try applying the changes again to regenerate the thumbnail. */
  ModelPreviewImageFail = 'MODEL_PREVIEW_IMAGE_FAIL',
  /** 3D model physical size might be invalid. The dimensions of your model are very small. Consider reviewing your model to ensure they are correct. */
  ModelSmallPhysicalSize = 'MODEL_SMALL_PHYSICAL_SIZE'
}
/**
 * The [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
 * that's used to control how discounts can be combined.
 */
declare enum MerchandiseDiscountClass {
  /**
   * The discount is combined with an
   * [order discount](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * class.
   */
  Order = 'ORDER',
  /**
   * The discount is combined with a
   * [product discount](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
   * class.
   */
  Product = 'PRODUCT'
}
/** Merchant approval for accelerated onboarding to channel integration apps. */
type MerchantApprovalSignals = {
  __typename?: 'MerchantApprovalSignals'; /** Whether the shop's Shopify Payments account identity is verified. Returns `false` if the identity is unverified or if the shop doesn't have a Shopify Payments account. */
  identityVerified: Scalars['Boolean']['output']; /** Whether Shopify has pre-verified the merchant's business for onboarding to channel integration apps. Returns `false` if the shop isn't marked for verification. */
  verifiedByShopify: Scalars['Boolean']['output']; /** Which tier of the Shopify verification was determined for the merchant's business for onboarding to channel integration apps. */
  verifiedByShopifyTier: Scalars['String']['output'];
};
/**
 * Metafields enable you to attach additional information to a Shopify resource, such as a [Product](https://shopify.dev/api/admin-graphql/latest/objects/product) or a [Collection](https://shopify.dev/api/admin-graphql/latest/objects/collection).
 * For more information about where you can attach metafields refer to [HasMetafields](https://shopify.dev/api/admin-graphql/latest/interfaces/HasMetafields).
 * Some examples of the data that metafields enable you to store are specifications, size charts, downloadable documents, release dates, images, or part numbers.
 * Metafields are identified by an owner resource, namespace, and key. and store a value along with type information for that value.
 */
type Metafield = HasCompareDigest & LegacyInteroperability & Node & {
  __typename?: 'Metafield'; /** The data stored in the resource, represented as a digest. */
  compareDigest: Scalars['String']['output']; /** The date and time when the metafield was created. */
  createdAt: Scalars['DateTime']['output']; /** The metafield definition that the metafield belongs to, if any. */
  definition?: Maybe<MetafieldDefinition>;
  /**
   * The description of the metafield.
   * @deprecated This field will be removed in a future release. Use the `description` on the metafield definition instead.
   *
   */
  description?: Maybe<Scalars['String']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The data stored in the metafield in JSON format. */
  jsonValue: Scalars['JSON']['output']; /** The unique identifier for the metafield within its namespace. */
  key: Scalars['String']['output']; /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64']['output']; /** The container for a group of metafields that the metafield is associated with. */
  namespace: Scalars['String']['output']; /** The resource that the metafield is attached to. */
  owner: HasMetafields; /** The type of resource that the metafield is attached to. */
  ownerType: MetafieldOwnerType; /** Returns a reference object if the metafield definition's type is a resource reference. */
  reference?: Maybe<MetafieldReference>; /** A list of reference objects if the metafield's type is a resource reference list. */
  references?: Maybe<MetafieldReferenceConnection>;
  /**
   * The type of data that's stored in the metafield.
   * Refer to the list of [supported types](https://shopify.dev/apps/metafields/types).
   */
  type: Scalars['String']['output']; /** The date and time when the metafield was updated. */
  updatedAt: Scalars['DateTime']['output']; /** The data stored in the metafield. Always stored as a string, regardless of the metafield's type. */
  value: Scalars['String']['output'];
};
/** Access permissions for the definition's metafields. */
type MetafieldAccess = {
  __typename?: 'MetafieldAccess'; /** The access permitted on the Admin API. */
  admin?: Maybe<MetafieldAdminAccess>; /** The access permitted on the Customer Account API. */
  customerAccount: MetafieldCustomerAccountAccess; /** The access permitted on the Storefront API. */
  storefront?: Maybe<MetafieldStorefrontAccess>;
};
/** Metafield access permissions for the Admin API. */
declare enum MetafieldAdminAccess {
  /** The merchant has read-only access. No other apps have access. */
  MerchantRead = 'MERCHANT_READ',
  /** The merchant has read and write access. No other apps have access. */
  MerchantReadWrite = 'MERCHANT_READ_WRITE',
  /** The merchant and other apps have no access. */
  Private = 'PRIVATE',
  /** The merchant and other apps have read-only access. */
  PublicRead = 'PUBLIC_READ',
  /** The merchant and other apps have read and write access. */
  PublicReadWrite = 'PUBLIC_READ_WRITE'
}
/** Provides the capabilities of a metafield definition. */
type MetafieldCapabilities = {
  __typename?: 'MetafieldCapabilities'; /** Indicate whether a metafield definition is configured for filtering. */
  adminFilterable: MetafieldCapabilityAdminFilterable; /** Indicate whether a metafield definition can be used as a smart collection condition. */
  smartCollectionCondition: MetafieldCapabilitySmartCollectionCondition; /** Indicate whether the metafield values for a metafield definition are required to be unique. */
  uniqueValues: MetafieldCapabilityUniqueValues;
};
/** Information about the admin filterable capability on a metafield definition. */
type MetafieldCapabilityAdminFilterable = {
  __typename?: 'MetafieldCapabilityAdminFilterable'; /** Indicates if the definition is eligible to have the capability. */
  eligible: Scalars['Boolean']['output']; /** Indicates if the capability is enabled. */
  enabled: Scalars['Boolean']['output']; /** Determines the metafield definition's filter status for use in admin filtering. */
  status: MetafieldDefinitionAdminFilterStatus;
};
/** Information about the smart collection condition capability on a metafield definition. */
type MetafieldCapabilitySmartCollectionCondition = {
  __typename?: 'MetafieldCapabilitySmartCollectionCondition'; /** Indicates if the definition is eligible to have the capability. */
  eligible: Scalars['Boolean']['output']; /** Indicates if the capability is enabled. */
  enabled: Scalars['Boolean']['output'];
};
/** Information about the unique values capability on a metafield definition. */
type MetafieldCapabilityUniqueValues = {
  __typename?: 'MetafieldCapabilityUniqueValues'; /** Indicates if the definition is eligible to have the capability. */
  eligible: Scalars['Boolean']['output']; /** Indicates if the capability is enabled. */
  enabled: Scalars['Boolean']['output'];
};
/** An auto-generated type for paginating through multiple Metafields. */
type MetafieldConnection = {
  __typename?: 'MetafieldConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<MetafieldEdge>; /** A list of nodes that are contained in MetafieldEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<Metafield>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** Metafield access permissions for the Customer Account API. */
declare enum MetafieldCustomerAccountAccess {
  /** No access. */
  None = 'NONE',
  /** Read-only access. */
  Read = 'READ',
  /** Read and write access. */
  ReadWrite = 'READ_WRITE'
}
/**
 * Defines the structure, validation rules, and permissions for [`Metafield`](https://shopify.dev/docs/api/admin-graphql/current/objects/Metafield) objects attached to a specific owner type. Each definition establishes a schema that metafields must follow, including the data type and validation constraints.
 *
 * The definition controls access permissions across different APIs, determines whether the metafield can be used for filtering or as a collection condition, and can be constrained to specific resource subtypes.
 */
type MetafieldDefinition = Node & {
  __typename?: 'MetafieldDefinition'; /** The access settings associated with the metafield definition. */
  access: MetafieldAccess; /** The capabilities of the metafield definition. */
  capabilities: MetafieldCapabilities;
  /**
   * The [constraints](https://shopify.dev/apps/build/custom-data/metafields/conditional-metafield-definitions)
   * that determine what subtypes of resources a metafield definition applies to.
   */
  constraints?: Maybe<MetafieldDefinitionConstraints>; /** The description of the metafield definition. */
  description?: Maybe<Scalars['String']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The unique identifier for the metafield definition within its namespace. */
  key: Scalars['String']['output']; /** The metafields that belong to the metafield definition. */
  metafields: MetafieldConnection; /** The count of the metafields that belong to the metafield definition. */
  metafieldsCount: Scalars['Int']['output']; /** The human-readable name of the metafield definition. */
  name: Scalars['String']['output']; /** The container for a group of metafields that the metafield definition is associated with. */
  namespace: Scalars['String']['output']; /** The resource type that the metafield definition is attached to. */
  ownerType: MetafieldOwnerType; /** The position of the metafield definition in the pinned list. */
  pinnedPosition?: Maybe<Scalars['Int']['output']>; /** The standard metafield definition template associated with the metafield definition. */
  standardTemplate?: Maybe<StandardMetafieldDefinitionTemplate>;
  /**
   * The type of data that each of the metafields that belong to the metafield definition will store.
   * Refer to the list of [supported types](https://shopify.dev/apps/metafields/types).
   */
  type: MetafieldDefinitionType; /** Whether the metafield definition can be used as a collection condition. */
  useAsCollectionCondition: Scalars['Boolean']['output']; /** The validation status for the metafields that belong to the metafield definition. */
  validationStatus: MetafieldDefinitionValidationStatus;
  /**
   * A list of [validation options](https://shopify.dev/apps/metafields/definitions/validation) for
   * the metafields that belong to the metafield definition. For example, for a metafield definition with the
   * type `date`, you can set a minimum date validation so that each of the metafields that belong to it can only
   * store dates after the specified minimum.
   */
  validations: Array<MetafieldDefinitionValidation>;
};
/** Possible filter statuses associated with a metafield definition for use in admin filtering. */
declare enum MetafieldDefinitionAdminFilterStatus {
  /** The metafield definition has failed to be enabled for admin filtering. */
  Failed = 'FAILED',
  /** The metafield definition allows admin filtering by matching metafield values. */
  Filterable = 'FILTERABLE',
  /** The metafield definition's metafields are currently being processed for admin filtering. */
  InProgress = 'IN_PROGRESS',
  /** The metafield definition cannot be used for admin filtering. */
  NotFilterable = 'NOT_FILTERABLE'
}
/** An auto-generated type for paginating through multiple MetafieldDefinitions. */
type MetafieldDefinitionConnection = {
  __typename?: 'MetafieldDefinitionConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<MetafieldDefinitionEdge>; /** A list of nodes that are contained in MetafieldDefinitionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<MetafieldDefinition>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** A constraint subtype value that the metafield definition applies to. */
type MetafieldDefinitionConstraintValue = {
  __typename?: 'MetafieldDefinitionConstraintValue'; /** The subtype value of the constraint. */
  value: Scalars['String']['output'];
};
/** An auto-generated type for paginating through multiple MetafieldDefinitionConstraintValues. */
type MetafieldDefinitionConstraintValueConnection = {
  __typename?: 'MetafieldDefinitionConstraintValueConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<MetafieldDefinitionConstraintValueEdge>; /** A list of nodes that are contained in MetafieldDefinitionConstraintValueEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<MetafieldDefinitionConstraintValue>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one MetafieldDefinitionConstraintValue and a cursor during pagination. */
type MetafieldDefinitionConstraintValueEdge = {
  __typename?: 'MetafieldDefinitionConstraintValueEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of MetafieldDefinitionConstraintValueEdge. */
  node: MetafieldDefinitionConstraintValue;
};
/**
 * The [constraints](https://shopify.dev/apps/build/custom-data/metafields/conditional-metafield-definitions)
 * that determine what subtypes of resources a metafield definition applies to.
 */
type MetafieldDefinitionConstraints = {
  __typename?: 'MetafieldDefinitionConstraints'; /** The category of resource subtypes that the definition applies to. */
  key?: Maybe<Scalars['String']['output']>; /** The specific constraint subtype values that the definition applies to. */
  values: MetafieldDefinitionConstraintValueConnection;
};
/** An auto-generated type which holds one MetafieldDefinition and a cursor during pagination. */
type MetafieldDefinitionEdge = {
  __typename?: 'MetafieldDefinitionEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of MetafieldDefinitionEdge. */
  node: MetafieldDefinition;
};
/**
 * The type and name for the optional validation configuration of a metafield.
 *
 * For example, a supported validation might consist of a `max` name and a `number_integer` type.
 * This validation can then be used to enforce a maximum character length for a `single_line_text_field` metafield.
 */
type MetafieldDefinitionSupportedValidation = {
  __typename?: 'MetafieldDefinitionSupportedValidation'; /** The name of the metafield definition validation. */
  name: Scalars['String']['output']; /** The type of input for the validation. */
  type: Scalars['String']['output'];
};
/** A metafield definition type provides basic foundation and validation for a metafield. */
type MetafieldDefinitionType = {
  __typename?: 'MetafieldDefinitionType'; /** The category associated with the metafield definition type. */
  category: Scalars['String']['output'];
  /**
   * The name of the type for the metafield definition.
   * See the list of [supported types](https://shopify.dev/apps/metafields/types).
   */
  name: Scalars['String']['output']; /** The supported validations for a metafield definition type. */
  supportedValidations: Array<MetafieldDefinitionSupportedValidation>; /** Whether metafields without a definition can be migrated to a definition of this type. */
  supportsDefinitionMigrations: Scalars['Boolean']['output'];
  /**
   * The value type for a metafield created with this definition type.
   * @deprecated `valueType` is deprecated and `name` should be used for type information.
   */
  valueType: MetafieldValueType;
};
/**
 * A configured metafield definition validation.
 *
 * For example, for a metafield definition of `number_integer` type, you can set a validation with the name `max`
 * and a value of `15`. This validation will ensure that the value of the metafield is a number less than or equal to 15.
 *
 * Refer to the [list of supported validations](https://shopify.dev/api/admin/graphql/reference/common-objects/metafieldDefinitionTypes#examples-Fetch_all_metafield_definition_types).
 */
type MetafieldDefinitionValidation = {
  __typename?: 'MetafieldDefinitionValidation'; /** The validation name. */
  name: Scalars['String']['output']; /** The name for the metafield type of this validation. */
  type: Scalars['String']['output']; /** The validation value. */
  value?: Maybe<Scalars['String']['output']>;
};
/** Possible metafield definition validation statuses. */
declare enum MetafieldDefinitionValidationStatus {
  /** All of this definition's metafields are valid. */
  AllValid = 'ALL_VALID',
  /** Asynchronous validation of this definition's metafields is in progress. */
  InProgress = 'IN_PROGRESS',
  /** Some of this definition's metafields are invalid. */
  SomeInvalid = 'SOME_INVALID'
}
/** An auto-generated type which holds one Metafield and a cursor during pagination. */
type MetafieldEdge = {
  __typename?: 'MetafieldEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of MetafieldEdge. */
  node: Metafield;
};
/** Possible types of a metafield's owner resource. */
declare enum MetafieldOwnerType {
  /** The Api Permission metafield owner type. */
  ApiPermission = 'API_PERMISSION',
  /** The Article metafield owner type. */
  Article = 'ARTICLE',
  /** The Blog metafield owner type. */
  Blog = 'BLOG',
  /** The Cart Transform metafield owner type. */
  Carttransform = 'CARTTRANSFORM',
  /** The Collection metafield owner type. */
  Collection = 'COLLECTION',
  /** The Company metafield owner type. */
  Company = 'COMPANY',
  /** The Company Location metafield owner type. */
  CompanyLocation = 'COMPANY_LOCATION',
  /** The Customer metafield owner type. */
  Customer = 'CUSTOMER',
  /** The Delivery Customization metafield owner type. */
  DeliveryCustomization = 'DELIVERY_CUSTOMIZATION',
  /** The Discount metafield owner type. */
  Discount = 'DISCOUNT',
  /** The draft order metafield owner type. */
  Draftorder = 'DRAFTORDER',
  /** The Fulfillment Constraint Rule metafield owner type. */
  FulfillmentConstraintRule = 'FULFILLMENT_CONSTRAINT_RULE',
  /** The GiftCardTransaction metafield owner type. */
  GiftCardTransaction = 'GIFT_CARD_TRANSACTION',
  /** The Location metafield owner type. */
  Location = 'LOCATION',
  /** The Market metafield owner type. */
  Market = 'MARKET',
  /**
   * The Media Image metafield owner type.
   * @deprecated `MEDIA_IMAGE` is deprecated.
   */
  MediaImage = 'MEDIA_IMAGE',
  /** The Order metafield owner type. */
  Order = 'ORDER',
  /** The Order Routing Location Rule metafield owner type. */
  OrderRoutingLocationRule = 'ORDER_ROUTING_LOCATION_RULE',
  /** The Page metafield owner type. */
  Page = 'PAGE',
  /** The Payment Customization metafield owner type. */
  PaymentCustomization = 'PAYMENT_CUSTOMIZATION',
  /** The Product metafield owner type. */
  Product = 'PRODUCT',
  /** The Product Variant metafield owner type. */
  Productvariant = 'PRODUCTVARIANT',
  /** The Selling Plan metafield owner type. */
  SellingPlan = 'SELLING_PLAN',
  /** The Shop metafield owner type. */
  Shop = 'SHOP',
  /** The Validation metafield owner type. */
  Validation = 'VALIDATION'
}
/** The resource referenced by the metafield value. */
type MetafieldReference = Article | Collection | Company | Customer | GenericFile | MediaImage | Metaobject | Model3d | Order | Page | Product | ProductVariant | TaxonomyValue | Video;
/** An auto-generated type for paginating through multiple MetafieldReferences. */
type MetafieldReferenceConnection = {
  __typename?: 'MetafieldReferenceConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<MetafieldReferenceEdge>; /** A list of nodes that are contained in MetafieldReferenceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<Maybe<MetafieldReference>>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one MetafieldReference and a cursor during pagination. */
type MetafieldReferenceEdge = {
  __typename?: 'MetafieldReferenceEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of MetafieldReferenceEdge. */
  node?: Maybe<MetafieldReference>;
};
/** Types of resources that may use metafields to reference other resources. */
type MetafieldReferencer = AppInstallation | Article | Blog | Collection | Company | CompanyLocation | Customer | DeliveryCustomization | DiscountAutomaticNode | DiscountCodeNode | DiscountNode | DraftOrder | FulfillmentOrder | Location | Market | Metaobject | Order | Page | PaymentCustomization | Product | ProductVariant | Shop;
/**
 * Defines a relation between two resources via a reference metafield.
 * The referencer owns the joining field with a given namespace and key,
 * while the target is referenced by the field.
 */
type MetafieldRelation = {
  __typename?: 'MetafieldRelation'; /** The key of the field making the reference. */
  key: Scalars['String']['output']; /** The name of the field making the reference. */
  name: Scalars['String']['output']; /** The namespace of the metafield making the reference, or type of the metaobject. */
  namespace: Scalars['String']['output']; /** The resource making the reference. */
  referencer: MetafieldReferencer;
  /**
   * The referenced resource.
   * @deprecated No longer supported. Access the object directly instead.
   */
  target: MetafieldReference;
};
/** An auto-generated type for paginating through multiple MetafieldRelations. */
type MetafieldRelationConnection = {
  __typename?: 'MetafieldRelationConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<MetafieldRelationEdge>; /** A list of nodes that are contained in MetafieldRelationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<MetafieldRelation>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one MetafieldRelation and a cursor during pagination. */
type MetafieldRelationEdge = {
  __typename?: 'MetafieldRelationEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of MetafieldRelationEdge. */
  node: MetafieldRelation;
};
/** Metafield access permissions for the Storefront API. */
declare enum MetafieldStorefrontAccess {
  /** No access. */
  None = 'NONE',
  /** Read-only access. */
  PublicRead = 'PUBLIC_READ'
}
/**
 * Legacy type information for the stored value.
 * Replaced by `type`.
 */
declare enum MetafieldValueType {
  /** A `true` or `false` value. */
  Boolean = 'BOOLEAN',
  /** A whole number. */
  Integer = 'INTEGER',
  /** A JSON string. */
  JsonString = 'JSON_STRING',
  /** A text field. */
  String = 'STRING'
}
/**
 * An instance of custom structured data defined by a [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition). [Metaobjects](https://shopify.dev/docs/apps/build/custom-data#what-are-metaobjects) store reusable data that extends beyond Shopify's standard resources, such as product highlights, size charts, or custom content sections.
 *
 * Each metaobject includes fields that match the field types and validation rules specified in its definition, which also determines the metaobject's capabilities, such as storefront visibility, publishing and translation support. [`Metafields`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) can reference metaobjects to connect custom data with [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects, [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) objects, and other Shopify resources.
 */
type Metaobject = Node & {
  __typename?: 'Metaobject'; /** Metaobject capabilities for this Metaobject. */
  capabilities: MetaobjectCapabilityData; /** The app used to create the object. */
  createdBy: App; /** The app used to create the object. */
  createdByApp: App; /** The staff member who created the metaobject. */
  createdByStaff?: Maybe<StaffMember>; /** The MetaobjectDefinition that models this object type. */
  definition: MetaobjectDefinition; /** The preferred display name field value of the metaobject. */
  displayName: Scalars['String']['output']; /** The field for an object key, or null if the key has no field definition. */
  field?: Maybe<MetaobjectField>; /** All ordered fields of the metaobject with their definitions and values. */
  fields: Array<MetaobjectField>; /** The unique handle of the object, useful as a custom ID. */
  handle: Scalars['String']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** List of back references metafields that belong to the resource. */
  referencedBy: MetafieldRelationConnection;
  /**
   * The staff member who created the metaobject.
   * @deprecated Use `createdByStaff` instead.
   */
  staffMember?: Maybe<StaffMember>; /** The recommended field to visually represent this metaobject. May be a file reference or color         field. */
  thumbnailField?: Maybe<MetaobjectField>; /** The type of the metaobject. */
  type: Scalars['String']['output']; /** When the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};
/** Access permissions for the definition's metaobjects. */
type MetaobjectAccess = {
  __typename?: 'MetaobjectAccess'; /** The access permitted on the Admin API. */
  admin: MetaobjectAdminAccess; /** The access permitted on the Storefront API. */
  storefront: MetaobjectStorefrontAccess;
};
/**
 * Metaobject access permissions for the Admin API. When the metaobject is app-owned, the owning app always has
 * full access.
 */
declare enum MetaobjectAdminAccess {
  /** The merchant has read-only access. No other apps have access. */
  MerchantRead = 'MERCHANT_READ',
  /** The merchant has read and write access. No other apps have access. */
  MerchantReadWrite = 'MERCHANT_READ_WRITE',
  /** The merchant and other apps have no access. */
  Private = 'PRIVATE',
  /** The merchant and other apps have read-only access. */
  PublicRead = 'PUBLIC_READ',
  /** The merchant and other apps have read and write access. */
  PublicReadWrite = 'PUBLIC_READ_WRITE'
}
/** Provides the capabilities of a metaobject definition. */
type MetaobjectCapabilities = {
  __typename?: 'MetaobjectCapabilities'; /** Indicates whether a metaobject definition can be displayed as a page on the Online Store. */
  onlineStore?: Maybe<MetaobjectCapabilitiesOnlineStore>; /** Indicate whether a metaobject definition is publishable. */
  publishable: MetaobjectCapabilitiesPublishable; /** Indicate whether a metaobject definition is renderable and exposes SEO data. */
  renderable?: Maybe<MetaobjectCapabilitiesRenderable>; /** Indicate whether a metaobject definition is translatable. */
  translatable: MetaobjectCapabilitiesTranslatable;
};
/** The Online Store capability of a metaobject definition. */
type MetaobjectCapabilitiesOnlineStore = {
  __typename?: 'MetaobjectCapabilitiesOnlineStore'; /** The data associated with the Online Store capability. */
  data?: Maybe<MetaobjectCapabilityDefinitionDataOnlineStore>; /** Indicates if the capability is enabled. */
  enabled: Scalars['Boolean']['output'];
};
/** The publishable capability of a metaobject definition. */
type MetaobjectCapabilitiesPublishable = {
  __typename?: 'MetaobjectCapabilitiesPublishable'; /** Indicates if the capability is enabled. */
  enabled: Scalars['Boolean']['output'];
};
/** The renderable capability of a metaobject definition. */
type MetaobjectCapabilitiesRenderable = {
  __typename?: 'MetaobjectCapabilitiesRenderable'; /** The data associated with the renderable capability. */
  data?: Maybe<MetaobjectCapabilityDefinitionDataRenderable>; /** Indicates if the capability is enabled. */
  enabled: Scalars['Boolean']['output'];
};
/** The translatable capability of a metaobject definition. */
type MetaobjectCapabilitiesTranslatable = {
  __typename?: 'MetaobjectCapabilitiesTranslatable'; /** Indicates if the capability is enabled. */
  enabled: Scalars['Boolean']['output'];
};
/** Provides the capabilities of a metaobject. */
type MetaobjectCapabilityData = {
  __typename?: 'MetaobjectCapabilityData'; /** The Online Store capability for this metaobject. */
  onlineStore?: Maybe<MetaobjectCapabilityDataOnlineStore>; /** The publishable capability for this metaobject. */
  publishable?: Maybe<MetaobjectCapabilityDataPublishable>;
};
/** The Online Store capability for the parent metaobject. */
type MetaobjectCapabilityDataOnlineStore = {
  __typename?: 'MetaobjectCapabilityDataOnlineStore'; /** The theme template used when viewing the metaobject in a store. */
  templateSuffix?: Maybe<Scalars['String']['output']>;
};
/** The publishable capability for the parent metaobject. */
type MetaobjectCapabilityDataPublishable = {
  __typename?: 'MetaobjectCapabilityDataPublishable'; /** The visibility status of this metaobject across all channels. */
  status: MetaobjectStatus;
};
/** The Online Store capability data for the metaobject definition. */
type MetaobjectCapabilityDefinitionDataOnlineStore = {
  __typename?: 'MetaobjectCapabilityDefinitionDataOnlineStore'; /** Flag indicating if a sufficient number of redirects are available to redirect all published entries. */
  canCreateRedirects: Scalars['Boolean']['output']; /** The URL handle for accessing pages of this metaobject type in the Online Store. */
  urlHandle: Scalars['String']['output'];
};
/** The renderable capability data for the metaobject definition. */
type MetaobjectCapabilityDefinitionDataRenderable = {
  __typename?: 'MetaobjectCapabilityDefinitionDataRenderable'; /** The metaobject field used as an alias for the SEO page description. */
  metaDescriptionKey?: Maybe<Scalars['String']['output']>; /** The metaobject field used as an alias for the SEO page title. */
  metaTitleKey?: Maybe<Scalars['String']['output']>;
};
/** Metaobject Capabilities types which can be enabled. */
declare enum MetaobjectCapabilityType {
  /** Allows for a Metaobject to be rendered as an Online Store page. */
  OnlineStore = 'ONLINE_STORE',
  /** Allows for a Metaobject to be conditionally publishable. */
  Publishable = 'PUBLISHABLE',
  /** Allows for a Metaobject to have attributes of a renderable page such as SEO. */
  Renderable = 'RENDERABLE',
  /** Allows for a Metaobject to be translated using the translation api. */
  Translatable = 'TRANSLATABLE'
}
/** An auto-generated type for paginating through multiple Metaobjects. */
type MetaobjectConnection = {
  __typename?: 'MetaobjectConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<MetaobjectEdge>; /** A list of nodes that are contained in MetaobjectEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<Metaobject>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/**
 * Defines the structure and configuration for a custom data type in Shopify. Each definition specifies the fields, validation rules, and capabilities that apply to all [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) entries created from it.
 *
 * The definition includes field definitions that determine what data to store, access controls for [the Shopify admin](https://shopify.dev/docs/apps/build/custom-data/permissions#admin-permissions) and [Storefront](https://shopify.dev/docs/apps/build/custom-data/permissions#storefront-permissions) APIs, and capabilities such as publishability and translatability. You can track which [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) or [`StaffMember`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) created the definition and optionally base it on a [`StandardMetaobjectDefinitionTemplate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetaobjectDefinitionTemplate).
 */
type MetaobjectDefinition = Node & {
  __typename?: 'MetaobjectDefinition'; /** Access configuration for the metaobject definition. */
  access: MetaobjectAccess; /** The capabilities of the metaobject definition. */
  capabilities: MetaobjectCapabilities; /** The app used to create the metaobject definition. */
  createdByApp: App; /** The staff member who created the metaobject definition. */
  createdByStaff?: Maybe<StaffMember>; /** The administrative description. */
  description?: Maybe<Scalars['String']['output']>; /** The key of a field to reference as the display name for each object. */
  displayNameKey?: Maybe<Scalars['String']['output']>; /** The fields defined for this object type. */
  fieldDefinitions: Array<MetaobjectFieldDefinition>; /** Whether this metaobject definition has field whose type can visually represent a metaobject with        the `thumbnailField`. */
  hasThumbnailField: Scalars['Boolean']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** A paginated connection to the metaobjects associated with the definition. */
  metaobjects: MetaobjectConnection; /** The count of metaobjects created for the definition. */
  metaobjectsCount: Scalars['Int']['output']; /** The human-readable name. */
  name: Scalars['String']['output']; /** The standard metaobject template associated with the definition. */
  standardTemplate?: Maybe<StandardMetaobjectDefinitionTemplate>; /** The type of the object definition. Defines the namespace of associated metafields. */
  type: Scalars['String']['output'];
};
/** An auto-generated type which holds one Metaobject and a cursor during pagination. */
type MetaobjectEdge = {
  __typename?: 'MetaobjectEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of MetaobjectEdge. */
  node: Metaobject;
};
/** Provides a field definition and the data value assigned to it. */
type MetaobjectField = {
  __typename?: 'MetaobjectField'; /** The field definition for this object key. */
  definition: MetaobjectFieldDefinition; /** The assigned field value in JSON format. */
  jsonValue?: Maybe<Scalars['JSON']['output']>; /** The object key of this field. */
  key: Scalars['String']['output']; /** For resource reference fields, provides the referenced object. */
  reference?: Maybe<MetafieldReference>; /** For resource reference list fields, provides the list of referenced objects. */
  references?: Maybe<MetafieldReferenceConnection>; /** For file reference or color fields, provides visual attributes for this field. */
  thumbnail?: Maybe<MetaobjectThumbnail>; /** The type of the field. */
  type: Scalars['String']['output']; /** The assigned field value, always stored as a string regardless of the field type. */
  value?: Maybe<Scalars['String']['output']>;
};
/** Information about the admin filterable capability. */
type MetaobjectFieldCapabilityAdminFilterable = {
  __typename?: 'MetaobjectFieldCapabilityAdminFilterable'; /** Indicates if the definition is eligible to have the capability. */
  eligible: Scalars['Boolean']['output']; /** Indicates if the capability is enabled. */
  enabled: Scalars['Boolean']['output'];
};
/**
 * Defines a field for a MetaobjectDefinition with properties
 * such as the field's data type and validations.
 */
type MetaobjectFieldDefinition = {
  __typename?: 'MetaobjectFieldDefinition'; /** Capabilities available for this metaobject field definition. */
  capabilities: MetaobjectFieldDefinitionCapabilities; /** The administrative description. */
  description?: Maybe<Scalars['String']['output']>; /** A key name used to identify the field within the metaobject composition. */
  key: Scalars['String']['output']; /** The human-readable name. */
  name: Scalars['String']['output']; /** Required status of the field within the metaobject composition. */
  required: Scalars['Boolean']['output']; /** The type of data that the field stores. */
  type: MetafieldDefinitionType;
  /**
   * A list of [validation options](https://shopify.dev/apps/metafields/definitions/validation) for
   * the field. For example, a field with the type `date` can set a minimum date requirement.
   */
  validations: Array<MetafieldDefinitionValidation>;
};
/** Capabilities available for a metaobject field definition. */
type MetaobjectFieldDefinitionCapabilities = {
  __typename?: 'MetaobjectFieldDefinitionCapabilities'; /** Indicate whether a metaobject field definition is configured for filtering. */
  adminFilterable: MetaobjectFieldCapabilityAdminFilterable;
};
/** Defines visibility status for metaobjects. */
declare enum MetaobjectStatus {
  /** The metaobjects is active for public use. */
  Active = 'ACTIVE',
  /** The metaobjects is an internal record. */
  Draft = 'DRAFT'
}
/** Metaobject access permissions for the Storefront API. */
declare enum MetaobjectStorefrontAccess {
  /** No access. */
  None = 'NONE',
  /** Read-only access. */
  PublicRead = 'PUBLIC_READ'
}
/** Provides attributes for visual representation. */
type MetaobjectThumbnail = {
  __typename?: 'MetaobjectThumbnail'; /** The file to be used for visual representation of this metaobject. */
  file?: Maybe<File>; /** The hexadecimal color code to be used for respresenting this metaobject. */
  hex?: Maybe<Scalars['String']['output']>;
};
/** Represents a Shopify hosted 3D model. */
type Model3d = File & Media & Node & {
  __typename?: 'Model3d'; /** A word or phrase to describe the contents or the function of a file. */
  alt?: Maybe<Scalars['String']['output']>; /** The 3d model's bounding box information. */
  boundingBox?: Maybe<Model3dBoundingBox>; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was created. */
  createdAt: Scalars['DateTime']['output']; /** Any errors that have occurred on the file. */
  fileErrors: Array<FileError>; /** The status of the file. */
  fileStatus: FileStatus; /** The 3d model's filename. */
  filename: Scalars['String']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The media content type. */
  mediaContentType: MediaContentType; /** Any errors which have occurred on the media. */
  mediaErrors: Array<MediaError>; /** The warnings attached to the media. */
  mediaWarnings: Array<MediaWarning>; /** The 3d model's original source. */
  originalSource?: Maybe<Model3dSource>; /** The preview image for the media. */
  preview?: Maybe<MediaPreviewImage>; /** The 3d model's sources. */
  sources: Array<Model3dSource>; /** Current status of the media. */
  status: MediaStatus; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};
/** Bounding box information of a 3d model. */
type Model3dBoundingBox = {
  __typename?: 'Model3dBoundingBox'; /** Size in meters of the smallest volume which contains the 3d model. */
  size: Vector3;
};
/**
 * A source for a Shopify-hosted 3d model.
 *
 * Types of sources include GLB and USDZ formatted 3d models, where the former
 * is an original 3d model and the latter has been converted from the original.
 *
 * If the original source is in GLB format and over 15 MBs in size, then both the
 * original and the USDZ formatted source are optimized to reduce the file size.
 */
type Model3dSource = {
  __typename?: 'Model3dSource'; /** The 3d model source's filesize. */
  filesize: Scalars['Int']['output']; /** The 3d model source's format. */
  format: Scalars['String']['output']; /** The 3d model source's MIME type. */
  mimeType: Scalars['String']['output']; /** The 3d model source's URL. */
  url: Scalars['String']['output'];
};
/** A collection of monetary values in their respective currencies. Used throughout the API for multi-currency pricing and transactions, when an amount in the shop's currency is converted to the customer's currency of choice. The `presentmentMoney` field contains the amount in the customer's selected currency. The `shopMoney` field contains the equivalent in the shop's base currency. */
type MoneyBag = {
  __typename?: 'MoneyBag'; /** Amount in presentment currency. */
  presentmentMoney: MoneyV2; /** Amount in shop currency. */
  shopMoney: MoneyV2;
};
/** A precise monetary value and its associated currency. Combines a decimal amount with a three-letter currency code to express prices, costs, and other financial values throughout the API. For example, 12.99 USD. */
type MoneyV2 = {
  __typename?: 'MoneyV2';
  /**
   * A monetary value in decimal format, allowing for precise representation of cents or fractional
   * currency. For example, 12.99.
   */
  amount: Scalars['Decimal']['output'];
  /**
   * The three-letter currency code that represents a world currency used in a store. Currency codes
   * include standard [standard ISO 4217 codes](https://en.wikipedia.org/wiki/ISO_4217), legacy codes,
   * and non-standard codes. For example, USD.
   */
  currencyCode: CurrencyCode;
};
/**
 * A default cursor that you can use in queries to paginate your results. Each edge in a connection can
 * return a cursor, which is a reference to the edge's position in the connection. You can use an edge's cursor as
 * the starting point to retrieve the nodes before or after it in a connection.
 *
 * To learn more about using cursor-based pagination, refer to
 * [Paginating results with GraphQL](https://shopify.dev/api/usage/pagination-graphql).
 */
type Navigable = {
  /** A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID. */defaultCursor: Scalars['String']['output'];
};
/** A navigation item, holding basic link attributes. */
type NavigationItem = {
  __typename?: 'NavigationItem'; /** The unique identifier of the navigation item. */
  id: Scalars['String']['output']; /** The name of the navigation item. */
  title: Scalars['String']['output']; /** The URL of the page that the navigation item links to. */
  url: Scalars['URL']['output'];
};
/**
 * An object with an ID field to support global identification, in accordance with the
 * [Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).
 * This interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)
 * and [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.
 */
type Node = {
  /** A globally-unique ID. */id: Scalars['ID']['output'];
};
/** Online Store preview URL of the object. */
type OnlineStorePreviewable = {
  /** The [preview URL](https://help.shopify.com/manual/online-store/setting-up#preview-your-store) for the online store. */onlineStorePreviewUrl?: Maybe<Scalars['URL']['output']>;
};
/**
 * The `Order` object represents a customer's request to purchase one or more products from a store. Use the `Order` object to handle the complete purchase lifecycle from checkout to fulfillment.
 *
 * Use the `Order` object when you need to:
 *
 * - Display order details on customer account pages or admin dashboards.
 * - Create orders for phone sales, wholesale customers, or subscription services.
 * - Update order information like shipping addresses, notes, or fulfillment status.
 * - Process returns, exchanges, and partial refunds.
 * - Generate invoices, receipts, and shipping labels.
 *
 * The `Order` object serves as the central hub connecting customer information, product details, payment processing, and fulfillment data within the GraphQL Admin API schema.
 *
 * > Note:
 * > Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older records,
 * > then you need to [request access to all orders](https://shopify.dev/docs/api/usage/access-scopes#orders-permissions). If your app is granted
 * > access, then you can add the `read_all_orders`, `read_orders`, and `write_orders` scopes.
 *
 * > Caution:
 * > Only use orders data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/docs/api/usage/access-scopes#requesting-specific-permissions) for apps that don't have a legitimate use for the associated data.
 *
 * Learn more about [building apps for orders and fulfillment](https://shopify.dev/docs/apps/build/orders-fulfillment).
 */
type Order = CommentEventSubject & HasEvents & HasLocalizationExtensions & HasLocalizedFields & HasMetafieldDefinitions & HasMetafields & LegacyInteroperability & Node & {
  __typename?: 'Order'; /** A list of additional fees applied to an order, such as duties, import fees, or [tax lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.additionalFees.taxLines). */
  additionalFees: Array<AdditionalFee>; /** A list of sales agreements associated with the order, such as contracts defining payment terms, or delivery schedules between merchants and customers. */
  agreements: SalesAgreementConnection; /** A list of messages that appear on the **Orders** page in the Shopify admin. These alerts provide merchants with important information about an order's status or required actions. */
  alerts: Array<ResourceAlert>;
  /**
   * The application that created the order. For example, "Online Store", "Point of Sale", or a custom app name.
   * Use this to identify the order source for attribution and fulfillment workflows.
   * Learn more about [building apps for orders and fulfillment](https://shopify.dev/docs/apps/build/orders-fulfillment).
   */
  app?: Maybe<OrderApp>;
  /**
   * The billing address associated with the payment method selected by the customer for an order.
   * Returns `null` if no billing address was provided during checkout.
   */
  billingAddress?: Maybe<MailingAddress>; /** Whether the billing address matches the [shipping address](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.shippingAddress). Returns `true` if both addresses are the same, and `false` if they're different or if an address is missing. */
  billingAddressMatchesShippingAddress: Scalars['Boolean']['output']; /** Whether an order can be manually marked as paid. Returns `false` if the order is already paid, is canceled, has pending [Shopify Payments](https://help.shopify.com/en/manual/payments/shopify-payments/payouts) transactions, or has a negative payment amount. */
  canMarkAsPaid: Scalars['Boolean']['output'];
  /**
   * Whether order notifications can be sent to the customer.
   * Returns `true` if the customer has a valid [email address](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.email).
   */
  canNotifyCustomer: Scalars['Boolean']['output']; /** The reason provided for an order cancellation. For example, a merchant might cancel an order if there's insufficient inventory. Returns `null` if the order hasn't been canceled. */
  cancelReason?: Maybe<OrderCancelReason>; /** Details of an order's cancellation, if it has been canceled. This includes the reason, date, and any [staff notes](https://shopify.dev/api/admin-graphql/latest/objects/OrderCancellation#field-OrderCancellation.fields.staffNote). */
  cancellation?: Maybe<OrderCancellation>;
  /**
   * The date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) when an order was canceled.
   * Returns `null` if the order hasn't been canceled.
   */
  cancelledAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Whether an authorized payment for an order can be captured.
   * Returns `true` if an authorized payment exists that hasn't been fully captured yet. Learn more about [capturing payments](https://help.shopify.com/en/manual/fulfillment/managing-orders/payments/capturing-payments).
   */
  capturable: Scalars['Boolean']['output'];
  /**
   * The total discount amount that applies to the entire order in shop currency, before returns, refunds, order edits, and cancellations.
   * @deprecated Use `cartDiscountAmountSet` instead.
   */
  cartDiscountAmount?: Maybe<Scalars['Money']['output']>; /** The total discount amount applied at the time the order was created, displayed in both shop and presentment currencies, before returns, refunds, order edits, and cancellations. This field only includes discounts applied to the entire order. */
  cartDiscountAmountSet?: Maybe<MoneyBag>;
  /**
   * The sales channel from which an order originated, such as the [Online Store](https://shopify.dev/docs/apps/build/app-surfaces#online-store) or [Shopify POS](https://shopify.dev/docs/apps/build/app-surfaces#point-of-sale).
   * @deprecated Use `publication` instead.
   */
  channel?: Maybe<Channel>;
  /**
   * Details about the sales channel that created the order, such as the [channel app type](https://shopify.dev/docs/api/admin-graphql/latest/objects/channel#field-Channel.fields.channelType)
   * and [channel name](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelDefinition#field-ChannelDefinition.fields.channelName), which helps to track order sources.
   */
  channelInformation?: Maybe<ChannelInformation>; /** The IP address of the customer who placed the order. Useful for fraud detection and geographic analysis. */
  clientIp?: Maybe<Scalars['String']['output']>; /** Whether an order is closed. An order is considered closed if all its line items have been fulfilled or canceled, and all financial transactions are complete. */
  closed: Scalars['Boolean']['output']; /** The date and time [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) when an order was closed. Shopify automatically records this timestamp when all items have been fulfilled or canceled, and all financial transactions are complete. Returns `null` if the order isn't closed. */
  closedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * A customer-facing order identifier, often shown instead of the sequential order name.
   * It uses a random alphanumeric format (for example, `XPAV284CT`) and isn't guaranteed to be unique across orders.
   */
  confirmationNumber?: Maybe<Scalars['String']['output']>;
  /**
   * Whether inventory has been reserved for an order. Returns `true` if inventory quantities for an order's [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) have been reserved.
   * Learn more about [managing inventory quantities and states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).
   */
  confirmed: Scalars['Boolean']['output']; /** The date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) when an order was created. This timestamp is set when the customer completes checkout and remains unchanged throughout an order's lifecycle. */
  createdAt: Scalars['DateTime']['output']; /** The shop currency when the order was placed. For example, "USD" or "CAD". */
  currencyCode: CurrencyCode; /** The current total of all discounts applied to the entire order, after returns, refunds, order edits, and cancellations. This includes discount codes, automatic discounts, and other promotions that affect the whole order rather than individual line items. To get the original discount amount at the time of order creation, use the [`cartDiscountAmountSet`](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.cartDiscountAmountSet) field. */
  currentCartDiscountAmountSet: MoneyBag;
  /**
   * The current shipping price after applying refunds and discounts.
   * If the parent `order.taxesIncluded` field is true, then this price includes taxes. Otherwise, this field is the pre-tax price.
   */
  currentShippingPriceSet: MoneyBag; /** The current sum of the quantities for all line items that contribute to the order's subtotal price, after returns, refunds, order edits, and cancellations. */
  currentSubtotalLineItemsQuantity: Scalars['Int']['output'];
  /**
   * The total price of the order, after returns and refunds, in shop and presentment currencies.
   * This includes taxes and discounts.
   */
  currentSubtotalPriceSet: MoneyBag;
  /**
   * A list of all tax lines applied to line items on the order, after returns.
   * Tax line prices represent the total price for all tax lines with the same `rate` and `title`.
   */
  currentTaxLines: Array<TaxLine>; /** The current total of all additional fees for an order, after any returns or modifications. Modifications include returns, refunds, order edits, and cancellations. Additional fees can include charges such as duties, import fees, and special handling. */
  currentTotalAdditionalFeesSet?: Maybe<MoneyBag>;
  /**
   * The total amount discounted on the order after returns and refunds, in shop and presentment currencies.
   * This includes both order and line level discounts.
   */
  currentTotalDiscountsSet: MoneyBag; /** The current total duties amount for an order, after any returns or modifications. Modifications include returns, refunds, order edits, and cancellations. */
  currentTotalDutiesSet?: Maybe<MoneyBag>;
  /**
   * The total price of the order, after returns, in shop and presentment currencies.
   * This includes taxes and discounts.
   */
  currentTotalPriceSet: MoneyBag; /** The sum of the prices of all tax lines applied to line items on the order, after returns and refunds, in shop and presentment currencies. */
  currentTotalTaxSet: MoneyBag; /** The total weight of the order after returns and refunds, in grams. */
  currentTotalWeight: Scalars['UnsignedInt64']['output']; /** A list of additional information that has been attached to the order. For example, gift message, delivery instructions, or internal notes. */
  customAttributes: Array<Attribute>;
  /**
   * The customer who placed an order. Returns `null` if an order was created through a checkout without customer authentication, such as a guest checkout.
   * Learn more about [customer accounts](https://help.shopify.com/manual/customers/customer-accounts).
   */
  customer?: Maybe<Customer>;
  /**
   * Whether the customer agreed to receive marketing emails at the time of purchase.
   * Use this to ensure compliance with marketing consent laws and to segment customers for email campaigns.
   * Learn more about [building customer segments](https://shopify.dev/docs/apps/build/marketing-analytics/customer-segments).
   */
  customerAcceptsMarketing: Scalars['Boolean']['output'];
  /**
   * The customer's visits and interactions with the online store before placing the order.
   * @deprecated Use `customerJourneySummary` instead.
   */
  customerJourney?: Maybe<CustomerJourney>;
  /**
   * The customer's visits and interactions with the online store before placing the order.
   * Use this to understand customer behavior, attribution sources, and marketing effectiveness to optimize your sales funnel.
   */
  customerJourneySummary?: Maybe<CustomerJourneySummary>;
  /**
   * The customer's language and region preference at the time of purchase. For example, "en" for English, "fr-CA" for French (Canada), or "es-MX" for Spanish (Mexico).
   * Use this to provide localized customer service and targeted marketing in the customer's preferred language.
   */
  customerLocale?: Maybe<Scalars['String']['output']>;
  /**
   * A list of discounts that are applied to the order, excluding order edits and refunds.
   * Includes discount codes, automatic discounts, and other promotions that reduce the order total.
   */
  discountApplications: DiscountApplicationConnection; /** The discount code used for an order. Returns `null` if no discount code was applied. */
  discountCode?: Maybe<Scalars['String']['output']>; /** The discount codes used for the order. Multiple codes can be applied to a single order. */
  discountCodes: Array<Scalars['String']['output']>;
  /**
   * The primary address of the customer, prioritizing shipping address over billing address when both are available.
   * Returns `null` if neither shipping address nor billing address was provided.
   */
  displayAddress?: Maybe<MailingAddress>; /** An order's financial status for display in the Shopify admin. */
  displayFinancialStatus?: Maybe<OrderDisplayFinancialStatus>;
  /**
   * The order's fulfillment status that displays in the Shopify admin to merchants. For example, an order might be unfulfilled or scheduled.
   * For detailed processing, use the [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) object.
   */
  displayFulfillmentStatus: OrderDisplayFulfillmentStatus;
  /**
   * A list of payment disputes associated with the order, such as chargebacks or payment inquiries.
   * Disputes occur when customers challenge transactions with their bank or payment provider.
   */
  disputes: Array<OrderDisputeSummary>;
  /**
   * Whether duties are included in the subtotal price of the order.
   * Duties are import taxes charged by customs authorities when goods cross international borders.
   */
  dutiesIncluded: Scalars['Boolean']['output']; /** Whether the order has had any edits applied. For example, adding or removing line items, updating quantities, or changing prices. */
  edited: Scalars['Boolean']['output'];
  /**
   * The email address associated with the customer for this order.
   * Used for sending order confirmations, shipping notifications, and other order-related communications.
   * Returns `null` if no email address was provided during checkout.
   */
  email?: Maybe<Scalars['String']['output']>;
  /**
   * Whether taxes on the order are estimated.
   * This field returns `false` when taxes on the order are finalized and aren't subject to any changes.
   */
  estimatedTaxes: Scalars['Boolean']['output']; /** A list of events associated with the order. Events track significant changes and activities related to the order, such as creation, payment, fulfillment, and cancellation. */
  events: EventConnection;
  /**
   * A list of ExchangeV2s for the order.
   * @deprecated Use `returns` instead.
   */
  exchangeV2s: ExchangeV2Connection;
  /**
   * Whether there are line items that can be fulfilled.
   * This field returns `false` when the order has no fulfillable line items.
   * For a more granular view of the fulfillment status, refer to the [FulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder) object.
   */
  fulfillable: Scalars['Boolean']['output'];
  /**
   * A list of [fulfillment orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) for an order.
   * Each fulfillment order groups [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.lineItems) that are fulfilled together,
   * allowing an order to be processed in parts if needed.
   */
  fulfillmentOrders: FulfillmentOrderConnection; /** A list of shipments for the order. Fulfillments represent the physical shipment of products to customers. */
  fulfillments: Array<Fulfillment>; /** The total number of fulfillments for the order, including canceled ones. */
  fulfillmentsCount?: Maybe<Count>; /** Whether the order has been paid in full. This field returns `true` when the total amount received equals or exceeds the order total. */
  fullyPaid: Scalars['Boolean']['output']; /** Whether the merchant has added a timeline comment to the order. */
  hasTimelineComment: Scalars['Boolean']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /**
   * The URL of the first page of the online store that the customer visited before they submitted the order.
   * @deprecated Use `customerJourneySummary.lastVisit.landingPageHtml` instead
   */
  landingPageDisplayText?: Maybe<Scalars['String']['output']>;
  /**
   * The first page of the online store that the customer visited before they submitted the order.
   * @deprecated Use `customerJourneySummary.lastVisit.landingPage` instead
   */
  landingPageUrl?: Maybe<Scalars['URL']['output']>; /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64']['output']; /** A list of the order's line items. Line items represent the individual products and quantities that make up the order. */
  lineItems: LineItemConnection;
  /**
   * List of localization extensions for the resource.
   * @deprecated This connection will be removed in a future version. Use `localizedFields` instead.
   */
  localizationExtensions: LocalizationExtensionConnection; /** List of localized fields for the resource. */
  localizedFields: LocalizedFieldConnection;
  /**
   * The legal business structure that the merchant operates under for this order, such as an LLC, corporation, or partnership.
   * Used for tax reporting, legal compliance, and determining which business entity is responsible for the order.
   */
  merchantBusinessEntity: BusinessEntity; /** Whether the order can be edited by the merchant. Returns `false` for orders that can't be modified, such as canceled orders or orders with specific payment statuses. */
  merchantEditable: Scalars['Boolean']['output']; /** A list of reasons why the order can't be edited. For example, canceled orders can't be edited. */
  merchantEditableErrors: Array<Scalars['String']['output']>; /** The application acting as the Merchant of Record for the order. The Merchant of Record is responsible for tax collection and remittance. */
  merchantOfRecordApp?: Maybe<OrderApp>;
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   */
  metafield?: Maybe<Metafield>;
  /**
   * List of metafield definitions.
   * @deprecated This field will be removed in a future version. Use `QueryRoot.metafieldDefinitions` instead.
   */
  metafieldDefinitions: MetafieldDefinitionConnection;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   */
  metafields: MetafieldConnection;
  /**
   * The unique identifier for the order that appears on the order page in the Shopify admin and the **Order status** page.
   * For example, "#1001", "EN1001", or "1001-A".
   * This value isn't unique across multiple stores. Use this field to identify orders in the Shopify admin and for order tracking.
   */
  name: Scalars['String']['output'];
  /**
   * The net payment for the order, based on the total amount received minus the total amount refunded, in shop currency.
   * @deprecated Use `netPaymentSet` instead.
   */
  netPayment: Scalars['Money']['output']; /** The net payment for the order, based on the total amount received minus the total amount refunded, in shop and presentment currencies. */
  netPaymentSet: MoneyBag;
  /**
   * A list of line items that can't be fulfilled.
   * For example, tips and fully refunded line items can't be fulfilled.
   * For a more granular view of the fulfillment status, refer to the [FulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder) object.
   */
  nonFulfillableLineItems: LineItemConnection;
  /**
   * The note associated with the order.
   * Contains additional information or instructions added by merchants or customers during the order process.
   * Commonly used for special delivery instructions, gift messages, or internal processing notes.
   */
  note?: Maybe<Scalars['String']['output']>; /** The order number used to generate the name using the store's configured order number prefix/suffix. This number isn't guaranteed to follow a consecutive integer sequence (e.g. 1, 2, 3..), nor is it guaranteed to be unique across multiple stores, or even for a single store. */
  number: Scalars['Int']['output'];
  /**
   * The total amount of all additional fees, such as import fees or taxes, that were applied when an order was created.
   * Returns `null` if additional fees aren't applicable.
   */
  originalTotalAdditionalFeesSet?: Maybe<MoneyBag>; /** The total amount of duties calculated when an order was created, before any modifications. Modifications include returns, refunds, order edits, and cancellations. Use [`currentTotalDutiesSet`](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.currentTotalDutiesSet) to retrieve the current duties amount after adjustments. */
  originalTotalDutiesSet?: Maybe<MoneyBag>;
  /**
   * The total price of the order at the time of order creation, in shop and presentment currencies.
   * Use this to compare the original order value against the current total after edits, returns, or refunds.
   */
  originalTotalPriceSet: MoneyBag;
  /**
   * The payment collection details for the order, including payment status, outstanding amounts, and collection information.
   * Use this to understand when and how payments should be collected, especially for orders with deferred or installment payment terms.
   */
  paymentCollectionDetails: OrderPaymentCollectionDetails;
  /**
   * A list of the names of all payment gateways used for the order.
   * For example, "Shopify Payments" and "Cash on Delivery (COD)".
   */
  paymentGatewayNames: Array<Scalars['String']['output']>; /** The payment terms associated with the order, such as net payment due dates or early payment discounts. Payment terms define when and how an order should be paid. Returns `null` if no specific payment terms were set for the order. */
  paymentTerms?: Maybe<PaymentTerms>;
  /**
   * The phone number associated with the customer for this order.
   * Useful for contacting customers about shipping updates, delivery notifications, or order issues.
   * Returns `null` if no phone number was provided during checkout.
   */
  phone?: Maybe<Scalars['String']['output']>;
  /**
   * The fulfillment location that was assigned when the order was created.
   * Orders can have multiple fulfillment orders. These fulfillment orders can each be assigned to a different location which is responsible for fulfilling a subset of the items in an order. The `Order.physicalLocation` field will only point to one of these locations.
   * Use the [`FulfillmentOrder`](https://shopify.dev/api/admin-graphql/latest/objects/fulfillmentorder)
   * object for up to date fulfillment location information.
   * @deprecated Use `fulfillmentOrders` to get the fulfillment location for the order
   */
  physicalLocation?: Maybe<Location>;
  /**
   * The purchase order (PO) number that's associated with an order.
   * This is typically provided by business customers who require a PO number for their procurement.
   */
  poNumber?: Maybe<Scalars['String']['output']>;
  /**
   * The currency used by the customer when placing the order. For example, "USD", "EUR", or "CAD".
   * This may differ from the shop's base currency when serving international customers or using multi-currency pricing.
   */
  presentmentCurrencyCode: CurrencyCode;
  /**
   * The date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) when the order was processed.
   * This date and time might not match the date and time when the order was created.
   */
  processedAt: Scalars['DateTime']['output']; /** Whether the customer also purchased items from other stores in the network. */
  productNetwork: Scalars['Boolean']['output']; /** The sales channel that the order was created from, such as the [Online Store](https://shopify.dev/docs/apps/build/app-surfaces#online-store) or [Shopify POS](https://shopify.dev/docs/apps/build/app-surfaces#point-of-sale). */
  publication?: Maybe<Publication>;
  /**
   * The business entity that placed the order, including company details and purchasing relationships.
   * Used for B2B transactions to track which company or organization is responsible for the purchase and payment terms.
   */
  purchasingEntity?: Maybe<PurchasingEntity>;
  /**
   * The marketing referral code from the link that the customer clicked to visit the store.
   * Supports the following URL attributes: "ref", "source", or "r".
   * For example, if the URL is `{shop}.myshopify.com/products/slide?ref=j2tj1tn2`, then this value is `j2tj1tn2`.
   * @deprecated Use `customerJourneySummary.lastVisit.referralCode` instead
   */
  referralCode?: Maybe<Scalars['String']['output']>;
  /**
   * A web domain or short description of the source that sent the customer to your online store. For example, "shopify.com" or "email".
   * @deprecated Use `customerJourneySummary.lastVisit.referralInfoHtml` instead
   */
  referrerDisplayText?: Maybe<Scalars['String']['output']>;
  /**
   * The URL of the webpage where the customer clicked a link that sent them to your online store.
   * @deprecated Use `customerJourneySummary.lastVisit.referrerUrl` instead
   */
  referrerUrl?: Maybe<Scalars['URL']['output']>;
  /**
   * The difference between the suggested and actual refund amount of all refunds that have been applied to the order.
   * A positive value indicates a difference in the merchant's favor, and a negative value indicates a difference in the customer's favor.
   */
  refundDiscrepancySet: MoneyBag;
  /**
   * Whether the order can be refunded based on its payment transactions.
   * Returns `false` for orders with no eligible payment transactions, such as fully refunded orders or orders with non-refundable payment methods.
   */
  refundable: Scalars['Boolean']['output'];
  /**
   * A list of refunds that have been applied to the order.
   * Refunds represent money returned to customers for returned items, cancellations, or adjustments.
   */
  refunds: Array<Refund>; /** The URL of the source that the order originated from, if found in the domain registry. Returns `null` if the source URL isn't in the domain registry. */
  registeredSourceUrl?: Maybe<Scalars['URL']['output']>;
  /**
   * Whether the order requires physical shipping to the customer.
   * Returns `false` for digital-only orders (such as gift cards or downloadable products) and `true` for orders with physical products that need delivery.
   * Use this to determine shipping workflows and logistics requirements.
   */
  requiresShipping: Scalars['Boolean']['output'];
  /**
   * Whether any line items on the order can be restocked into inventory.
   * Returns `false` for digital products, custom items, or items that can't be resold.
   */
  restockable: Scalars['Boolean']['output']; /** The physical location where a retail order is created or completed, except for draft POS orders completed using the "mark as paid" flow in the Shopify admin, which return `null`. Transactions associated with the order might have been processed at a different location. */
  retailLocation?: Maybe<Location>;
  /**
   * The order's aggregated return status for display purposes.
   * Indicates the overall state of returns for the order, helping merchants track and manage the return process.
   */
  returnStatus: OrderReturnStatus;
  /**
   * The returns associated with the order.
   * Contains information about items that customers have requested to return, including return reasons, status, and refund details.
   * Use this to track and manage the return process for order items.
   */
  returns: ReturnConnection;
  /**
   * The risk assessment summary for the order.
   * Provides fraud analysis and risk scoring to help you identify potentially fraudulent orders.
   * Use this to make informed decisions about order fulfillment and payment processing.
   */
  risk: OrderRiskSummary;
  /**
   * The fraud risk level of the order.
   * @deprecated This field is deprecated in favor of OrderRiskAssessment.riskLevel which allows for more granular risk levels, including PENDING and NONE.
   */
  riskLevel: OrderRiskLevel;
  /**
   * A list of risks associated with the order.
   * @deprecated This field is deprecated in favor of OrderRiskAssessment, which provides enhanced capabilities such as distinguishing risks from their provider.
   */
  risks: Array<OrderRisk>;
  /**
   * The shipping address where the order will be delivered.
   * Contains the customer's delivery location for fulfillment and shipping label generation.
   * Returns `null` for digital orders or orders that don't require shipping.
   */
  shippingAddress?: Maybe<MailingAddress>;
  /**
   * A summary of all shipping costs on the order.
   * Aggregates shipping charges, discounts, and taxes to provide a single view of delivery costs.
   */
  shippingLine?: Maybe<ShippingLine>;
  /**
   * The shipping methods applied to the order.
   * Each shipping line represents a shipping option chosen during checkout, including the carrier, service level, and cost.
   * Use this to understand shipping charges and delivery options for the order.
   */
  shippingLines: ShippingLineConnection;
  /**
   * The Shopify Protect details for the order, including fraud protection status and coverage information.
   * Shopify Protect helps protect eligible orders against fraudulent chargebacks.
   * Returns `null` if Shopify Protect is disabled for the shop or the order isn't eligible for protection.
   * Learn more about [Shopify Protect](https://www.shopify.com/protect).
   */
  shopifyProtect?: Maybe<ShopifyProtectOrderSummary>;
  /**
   * A unique POS or third party order identifier.
   * For example, "1234-12-1000" or "111-98567-54". The [`receiptNumber`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-receiptNumber) field is derived from this value for POS orders.
   */
  sourceIdentifier?: Maybe<Scalars['String']['output']>; /** The name of the source associated with the order, such as "web", "mobile_app", or "pos". Use this field to identify the platform where the order was placed. */
  sourceName?: Maybe<Scalars['String']['output']>;
  /**
   * The staff member who created or is responsible for the order.
   * Useful for tracking which team member handled phone orders, manual orders, or order modifications.
   * Returns `null` for orders created directly by customers through the online store.
   */
  staffMember?: Maybe<StaffMember>;
  /**
   * The URL where customers can check their order's current status, including tracking information and delivery updates.
   * Provides order tracking links in emails, apps, or customer communications.
   */
  statusPageUrl: Scalars['URL']['output'];
  /**
   * The sum of quantities for all line items that contribute to the order's subtotal price.
   * This excludes quantities for items like tips, shipping costs, or gift cards that don't affect the subtotal.
   * Use this to quickly understand the total item count for pricing calculations.
   */
  subtotalLineItemsQuantity: Scalars['Int']['output'];
  /**
   * The sum of the prices for all line items after discounts and before returns, in shop currency.
   * If `taxesIncluded` is `true`, then the subtotal also includes tax.
   * @deprecated Use `subtotalPriceSet` instead.
   */
  subtotalPrice?: Maybe<Scalars['Money']['output']>;
  /**
   * The sum of the prices for all line items after discounts and before returns, in shop and presentment currencies.
   * If `taxesIncluded` is `true`, then the subtotal also includes tax.
   */
  subtotalPriceSet?: Maybe<MoneyBag>;
  /**
   * A calculated refund suggestion for the order based on specified line items, shipping, and duties.
   * Use this to preview refund amounts, taxes, and processing fees before creating an actual refund.
   */
  suggestedRefund?: Maybe<SuggestedRefund>;
  /**
   * A comma separated list of tags associated with the order. Updating `tags` overwrites
   * any existing tags that were previously added to the order. To add new tags without overwriting
   * existing tags, use the [tagsAdd](https://shopify.dev/api/admin-graphql/latest/mutations/tagsadd)
   * mutation.
   */
  tags: Array<Scalars['String']['output']>;
  /**
   * Whether taxes are exempt on the order.
   * Returns `true` for orders where the customer or business has a valid tax exemption, such as non-profit organizations or tax-free purchases.
   * Use this to understand if tax calculations were skipped during checkout.
   */
  taxExempt: Scalars['Boolean']['output'];
  /**
   * A list of all tax lines applied to line items on the order, before returns.
   * Tax line prices represent the total price for all tax lines with the same `rate` and `title`.
   */
  taxLines: Array<TaxLine>;
  /**
   * Whether taxes are included in the subtotal price of the order.
   * When `true`, the subtotal and line item prices include tax amounts. When `false`, taxes are calculated and displayed separately.
   */
  taxesIncluded: Scalars['Boolean']['output'];
  /**
   * Whether the order is a test.
   * Test orders are made using the Shopify Bogus Gateway or a payment provider with test mode enabled.
   * A test order can't be converted into a real order and vice versa.
   */
  test: Scalars['Boolean']['output'];
  /**
   * The authorized amount that's uncaptured or undercaptured, in shop currency.
   * This amount isn't adjusted for returns.
   * @deprecated Use `totalCapturableSet` instead.
   */
  totalCapturable: Scalars['Money']['output'];
  /**
   * The authorized amount that's uncaptured or undercaptured, in shop and presentment currencies.
   * This amount isn't adjusted for returns.
   */
  totalCapturableSet: MoneyBag; /** The total rounding adjustment applied to payments or refunds for an order involving cash payments. Applies to some countries where cash transactions are rounded to the nearest currency denomination. */
  totalCashRoundingAdjustment: CashRoundingAdjustment;
  /**
   * The total amount discounted on the order before returns, in shop currency.
   * This includes both order and line level discounts.
   * @deprecated Use `totalDiscountsSet` instead.
   */
  totalDiscounts?: Maybe<Scalars['Money']['output']>;
  /**
   * The total amount discounted on the order before returns, in shop and presentment currencies.
   * This includes both order and line level discounts.
   */
  totalDiscountsSet?: Maybe<MoneyBag>;
  /**
   * The total amount not yet transacted for the order, in shop and presentment currencies.
   * A positive value indicates a difference in the merchant's favor (payment from customer to merchant) and a negative value indicates a difference in the customer's favor (refund from merchant to customer).
   */
  totalOutstandingSet: MoneyBag;
  /**
   * The total price of the order, before returns, in shop currency.
   * This includes taxes and discounts.
   * @deprecated Use `totalPriceSet` instead.
   */
  totalPrice: Scalars['Money']['output'];
  /**
   * The total price of the order, before returns, in shop and presentment currencies.
   * This includes taxes and discounts.
   */
  totalPriceSet: MoneyBag;
  /**
   * The total amount received from the customer before returns, in shop currency.
   * @deprecated Use `totalReceivedSet` instead.
   */
  totalReceived: Scalars['Money']['output']; /** The total amount received from the customer before returns, in shop and presentment currencies. */
  totalReceivedSet: MoneyBag;
  /**
   * The total amount that was refunded, in shop currency.
   * @deprecated Use `totalRefundedSet` instead.
   */
  totalRefunded: Scalars['Money']['output']; /** The total amount that was refunded, in shop and presentment currencies. */
  totalRefundedSet: MoneyBag; /** The total amount of shipping that was refunded, in shop and presentment currencies. */
  totalRefundedShippingSet: MoneyBag;
  /**
   * The total shipping amount before discounts and returns, in shop currency.
   * @deprecated Use `totalShippingPriceSet` instead.
   */
  totalShippingPrice: Scalars['Money']['output']; /** The total shipping costs returned to the customer, in shop and presentment currencies. This includes fees and any related discounts that were refunded. */
  totalShippingPriceSet: MoneyBag;
  /**
   * The total tax amount before returns, in shop currency.
   * @deprecated Use `totalTaxSet` instead.
   */
  totalTax?: Maybe<Scalars['Money']['output']>; /** The total tax amount before returns, in shop and presentment currencies. */
  totalTaxSet?: Maybe<MoneyBag>;
  /**
   * The sum of all tip amounts for the order, in shop currency.
   * @deprecated Use `totalTipReceivedSet` instead.
   */
  totalTipReceived: MoneyV2; /** The sum of all tip amounts for the order, in shop and presentment currencies. */
  totalTipReceivedSet: MoneyBag; /** The total weight of the order before returns, in grams. */
  totalWeight?: Maybe<Scalars['UnsignedInt64']['output']>; /** A list of transactions associated with the order. */
  transactions: Array<OrderTransaction>; /** The number of transactions associated with the order. */
  transactionsCount?: Maybe<Count>; /** Whether no payments have been made for the order. */
  unpaid: Scalars['Boolean']['output']; /** The date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) when the order was last modified. */
  updatedAt: Scalars['DateTime']['output'];
};
/**
 * The possible order action types for a
 * [sales agreement](https://shopify.dev/api/admin-graphql/latest/interfaces/salesagreement).
 */
declare enum OrderActionType {
  /** An order with a purchase or charge. */
  Order = 'ORDER',
  /** An edit to the order. */
  OrderEdit = 'ORDER_EDIT',
  /** A refund on the order. */
  Refund = 'REFUND',
  /** A return on the order. */
  Return = 'RETURN',
  /** An unknown agreement action. Represents new actions that may be added in future versions. */
  Unknown = 'UNKNOWN'
}
/** An order adjustment accounts for the difference between a calculated and actual refund amount. */
type OrderAdjustment = Node & {
  __typename?: 'OrderAdjustment'; /** The amount of the order adjustment in shop and presentment currencies. */
  amountSet: MoneyBag; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** An optional reason that explains a discrepancy between calculated and actual refund amounts. */
  reason?: Maybe<OrderAdjustmentDiscrepancyReason>; /** The tax amount of the order adjustment in shop and presentment currencies. */
  taxAmountSet: MoneyBag;
};
/** An auto-generated type for paginating through multiple OrderAdjustments. */
type OrderAdjustmentConnection = {
  __typename?: 'OrderAdjustmentConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<OrderAdjustmentEdge>; /** A list of nodes that are contained in OrderAdjustmentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<OrderAdjustment>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** Discrepancy reasons for order adjustments. */
declare enum OrderAdjustmentDiscrepancyReason {
  /** The discrepancy reason is customer. */
  Customer = 'CUSTOMER',
  /** The discrepancy reason is damage. */
  Damage = 'DAMAGE',
  /** The discrepancy reason is balance adjustment. */
  FullReturnBalancingAdjustment = 'FULL_RETURN_BALANCING_ADJUSTMENT',
  /** The discrepancy reason is pending refund. */
  PendingRefundDiscrepancy = 'PENDING_REFUND_DISCREPANCY',
  /** The discrepancy reason is not one of the predefined reasons. */
  RefundDiscrepancy = 'REFUND_DISCREPANCY',
  /** The discrepancy reason is restocking. */
  Restock = 'RESTOCK'
}
/** An auto-generated type which holds one OrderAdjustment and a cursor during pagination. */
type OrderAdjustmentEdge = {
  __typename?: 'OrderAdjustmentEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of OrderAdjustmentEdge. */
  node: OrderAdjustment;
};
/**
 * Identifies the [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) that created an order. Common sources include "online store" for web purchases, "Point of Sale" for in-person sales, or custom app names for orders created through third-party integrations.
 *
 * Use this information to track order attribution, analyze sales channels, and route orders to appropriate fulfillment workflows based on their source.
 */
type OrderApp = {
  __typename?: 'OrderApp'; /** The application icon. */
  icon: Image; /** The application ID. */
  id: Scalars['ID']['output']; /** The name of the application. */
  name: Scalars['String']['output'];
};
/** Represents the reason for the order's cancellation. */
declare enum OrderCancelReason {
  /** The customer wanted to cancel the order. */
  Customer = 'CUSTOMER',
  /** Payment was declined. */
  Declined = 'DECLINED',
  /** The order was fraudulent. */
  Fraud = 'FRAUD',
  /** There was insufficient inventory. */
  Inventory = 'INVENTORY',
  /** The order was canceled for an unlisted reason. */
  Other = 'OTHER',
  /** Staff made an error. */
  Staff = 'STAFF'
}
/** Details about the order cancellation. */
type OrderCancellation = {
  __typename?: 'OrderCancellation'; /** Staff provided note for the order cancellation. */
  staffNote?: Maybe<Scalars['String']['output']>;
};
/** An auto-generated type for paginating through multiple Orders. */
type OrderConnection = {
  __typename?: 'OrderConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<OrderEdge>; /** A list of nodes that are contained in OrderEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<Order>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** Represents the order's current financial status. */
declare enum OrderDisplayFinancialStatus {
  /** Displayed as **Authorized**. The payment provider has validated the customer's payment information. This status appears only for manual payment capture and indicates payments should be captured before the authorization period expires. */
  Authorized = 'AUTHORIZED',
  /** Displayed as **Expired**. Payment wasn't captured before the payment provider's deadline on an authorized order. Some payment providers use this status to indicate failed payment processing. */
  Expired = 'EXPIRED',
  /** Displayed as **Paid**. Payment was automatically or manually captured, or the order was marked as paid. */
  Paid = 'PAID',
  /** Displayed as **Partially paid**. A payment was manually captured for the order with an amount less than the full order value. */
  PartiallyPaid = 'PARTIALLY_PAID',
  /** Displayed as **Partially refunded**. The amount refunded to a customer is less than the full amount paid for an order. */
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  /** Displayed as **Pending**. Orders have this status when the payment provider needs time to complete the payment, or when manual payment methods are being used. */
  Pending = 'PENDING',
  /** Displayed as **Refunded**. The full amount paid for an order was refunded to the customer. */
  Refunded = 'REFUNDED',
  /**
   * Displayed as **Voided**. An unpaid (payment authorized but not captured) order was manually
   *          canceled.
   */
  Voided = 'VOIDED'
}
/** Represents the order's aggregated fulfillment status for display purposes. */
declare enum OrderDisplayFulfillmentStatus {
  /** Displayed as **Fulfilled**. All the items in the order have been fulfilled. */
  Fulfilled = 'FULFILLED',
  /** Displayed as **In progress**. All of the items in the order have had a request for fulfillment sent to the fulfillment service or all of the items have been marked as in progress. */
  InProgress = 'IN_PROGRESS',
  /** Displayed as **On hold**. All of the unfulfilled items in this order are on hold. */
  OnHold = 'ON_HOLD',
  /** Displayed as **Open**. None of the items in the order have been fulfilled. Replaced by "UNFULFILLED" status. */
  Open = 'OPEN',
  /** Displayed as **Partially fulfilled**. Some of the items in the order have been fulfilled. */
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  /** Displayed as **Pending fulfillment**. A request for fulfillment of some items awaits a response from the fulfillment service. Replaced by the "IN_PROGRESS" status. */
  PendingFulfillment = 'PENDING_FULFILLMENT',
  /** Displayed as **Request declined**. Some of the items in the order have been rejected for fulfillment by the fulfillment service. */
  RequestDeclined = 'REQUEST_DECLINED',
  /** Displayed as **Restocked**. All the items in the order have been restocked. Replaced by the "UNFULFILLED" status. */
  Restocked = 'RESTOCKED',
  /** Displayed as **Scheduled**. All of the unfulfilled items in this order are scheduled for fulfillment at later time. */
  Scheduled = 'SCHEDULED',
  /** Displayed as **Unfulfilled**. None of the items in the order have been fulfilled. */
  Unfulfilled = 'UNFULFILLED'
}
/** A summary of the important details for a dispute on an order. */
type OrderDisputeSummary = Node & {
  __typename?: 'OrderDisputeSummary'; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The type that the dispute was initiated as. */
  initiatedAs: DisputeType; /** The current status of the dispute. */
  status: DisputeStatus;
};
/** An auto-generated type which holds one Order and a cursor during pagination. */
type OrderEdge = {
  __typename?: 'OrderEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of OrderEdge. */
  node: Order;
};
/** The payment collection details for an order that requires additional payment following an edit to the order. */
type OrderPaymentCollectionDetails = {
  __typename?: 'OrderPaymentCollectionDetails'; /** The URL to use for collecting an additional payment on the order. */
  additionalPaymentCollectionUrl?: Maybe<Scalars['URL']['output']>; /** The list of vaulted payment methods for the order with their permissions. */
  vaultedPaymentMethods?: Maybe<Array<PaymentMandate>>;
};
/**
 * The order's aggregated return status that's used for display purposes.
 * An order might have multiple returns, so this field communicates the prioritized return status.
 * The `OrderReturnStatus` enum is a supported filter parameter in the [`orders` query](https://shopify.dev/api/admin-graphql/latest/queries/orders#:~:text=reference_location_id-,return_status,-risk_level).
 */
declare enum OrderReturnStatus {
  /** All return shipments from a return in this order were inspected. */
  InspectionComplete = 'INSPECTION_COMPLETE',
  /** Some items in the order are being returned. */
  InProgress = 'IN_PROGRESS',
  /** No items in the order were returned. */
  NoReturn = 'NO_RETURN',
  /** Some items in the order were returned. */
  Returned = 'RETURNED',
  /** Some returns in the order were not completed successfully. */
  ReturnFailed = 'RETURN_FAILED',
  /** A return was requested for some items in the order. */
  ReturnRequested = 'RETURN_REQUESTED'
}
/** Represents a fraud check on an order. This object is deprecated in favor of [OrderRiskAssessment](https://shopify.dev/api/admin-graphql/latest/objects/OrderRiskAssessment) and its enhanced capabilities. */
type OrderRisk = {
  __typename?: 'OrderRisk';
  /**
   * Whether the risk level is shown in the Shopify admin. If false, then this order risk is ignored when Shopify determines the overall risk level for the order.
   * @deprecated This field is deprecated in favor of OrderRiskAssessment.facts.
   */
  display: Scalars['Boolean']['output'];
  /**
   * The likelihood that an order is fraudulent, based on this order risk. The level can be set by Shopify risk analysis or by an app.
   * @deprecated This field is deprecated in favor of OrderRiskAssessment.riskLevel which allows for more granular risk levels, including PENDING and NONE.
   */
  level?: Maybe<OrderRiskLevel>;
  /**
   * The risk message that's shown to the merchant in the Shopify admin.
   * @deprecated This field is deprecated in favor of OrderRiskAssessment.facts.
   */
  message?: Maybe<Scalars['String']['output']>;
};
/**
 * The risk assessments for an order.
 *
 * See the [example query "Retrieves a list of all order risks for an order"](https://shopify.dev/docs/api/admin-graphql/unstable/queries/order?example=Retrieves+a+list+of+all+order+risks+for+an+order).
 */
type OrderRiskAssessment = {
  __typename?: 'OrderRiskAssessment';
  /**
   * Optional facts used to describe the risk assessment. The values in here are specific to the provider.
   * See the [examples for the mutation orderRiskAssessmentCreate](https://shopify.dev/api/admin-graphql/unstable/mutations/orderRiskAssessmentCreate#section-examples).
   */
  facts: Array<RiskFact>; /** The app that provided the assessment, `null` if the assessment was provided by Shopify. */
  provider?: Maybe<App>; /** The likelihood that the order is fraudulent, based on this risk assessment. */
  riskLevel: RiskAssessmentResult;
};
/**
 * The likelihood that an order is fraudulent.
 * This enum is deprecated in favor of
 * [RiskAssessmentResult](https://shopify.dev/api/admin-graphql/latest/enums/RiskAssessmentResult)
 * which allows for more granular risk levels, including PENDING and NONE.
 */
declare enum OrderRiskLevel {
  /** There is a high level of risk that this order is fraudulent. */
  High = 'HIGH',
  /** There is a low level of risk that this order is fraudulent. */
  Low = 'LOW',
  /** There is a medium level of risk that this order is fraudulent. */
  Medium = 'MEDIUM'
}
/** List of possible values for an OrderRiskRecommendation recommendation. */
declare enum OrderRiskRecommendationResult {
  /** Recommends fulfilling the order. */
  Accept = 'ACCEPT',
  /** Recommends cancelling the order. */
  Cancel = 'CANCEL',
  /** Recommends investigating the order by contacting buyers. */
  Investigate = 'INVESTIGATE',
  /** There is no recommended action for the order. */
  None = 'NONE'
}
/**
 * Summary of risk characteristics for an order.
 *
 * See the [example query "Retrieves a list of all order risks for an order"](https://shopify.dev/docs/api/admin-graphql/unstable/queries/order?example=Retrieves+a+list+of+all+order+risks+for+an+order).
 */
type OrderRiskSummary = {
  __typename?: 'OrderRiskSummary'; /** The list of risk assessments for the order. */
  assessments: Array<OrderRiskAssessment>; /** The recommendation for the order based on the results of the risk assessments. This suggests the action the merchant should take with regards to its risk of fraud. */
  recommendation: OrderRiskRecommendationResult;
};
/**
 * The `OrderTransaction` object represents a payment transaction that's associated with an order. An order
 * transaction is a specific action or event that happens within the context of an order, such as a customer paying
 * for a purchase or receiving a refund, or other payment-related activity.
 *
 * Use the `OrderTransaction` object to capture the complete lifecycle of a payment, from initial
 * authorization to final settlement, including refunds and currency exchanges. Common use cases for using the
 * `OrderTransaction` object include:
 *
 * - Processing new payments for orders
 * - Managing payment authorizations and captures
 * - Processing refunds for returned items
 * - Tracking payment status and errors
 * - Managing multi-currency transactions
 * - Handling payment gateway integrations
 *
 * Each `OrderTransaction` object has a [`kind`](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionKind)
 * that defines the type of transaction and a [`status`](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionStatus)
 * that indicates the current state of the transaction. The object stores detailed information about payment
 * methods, gateway processing, and settlement details.
 *
 * Learn more about [payment processing](https://help.shopify.com/manual/payments)
 * and [payment gateway integrations](https://www.shopify.com/ca/payment-gateways).
 */
type OrderTransaction = Node & {
  __typename?: 'OrderTransaction'; /** The masked account number associated with the payment method. */
  accountNumber?: Maybe<Scalars['String']['output']>;
  /**
   * The amount of money.
   * @deprecated Use `amountSet` instead.
   */
  amount: Scalars['Money']['output']; /** The rounding adjustment applied on the cash amount in shop and presentment currencies. */
  amountRoundingSet?: Maybe<MoneyBag>; /** The amount and currency of the transaction in shop and presentment currencies. */
  amountSet: MoneyBag;
  /**
   * The amount and currency of the transaction.
   * @deprecated Use `amountSet` instead.
   */
  amountV2: MoneyV2;
  /**
   * Authorization code associated with the transaction.
   * @deprecated Use `paymentId` instead.
   */
  authorizationCode?: Maybe<Scalars['String']['output']>; /** The time when the authorization expires. This field is available only to stores on a Shopify Plus plan. */
  authorizationExpiresAt?: Maybe<Scalars['DateTime']['output']>; /** Date and time when the transaction was created. */
  createdAt: Scalars['DateTime']['output']; /** An adjustment on the transaction showing the amount lost or gained  due to fluctuations in the currency exchange rate. */
  currencyExchangeAdjustment?: Maybe<CurrencyExchangeAdjustment>; /** The Shopify Point of Sale device used to process the transaction. */
  device?: Maybe<PointOfSaleDevice>; /** A standardized error code, independent of the payment provider. */
  errorCode?: Maybe<OrderTransactionErrorCode>; /** The transaction fees charged on the order transaction. Only present for Shopify Payments transactions. */
  fees: Array<TransactionFee>; /** The human-readable payment gateway name used to process the transaction. */
  formattedGateway?: Maybe<Scalars['String']['output']>; /** The payment gateway used to process the transaction. */
  gateway?: Maybe<Scalars['String']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The kind of transaction. */
  kind: OrderTransactionKind; /** The physical location where the transaction was processed. */
  location?: Maybe<Location>; /** Whether the transaction is processed by manual payment gateway. */
  manualPaymentGateway: Scalars['Boolean']['output']; /** Whether the transaction can be manually captured. */
  manuallyCapturable: Scalars['Boolean']['output'];
  /**
   * Specifies the available amount to refund on the gateway.
   * This value is only available for transactions of type `SuggestedRefund`.
   * @deprecated Use `maximumRefundableV2` instead.
   */
  maximumRefundable?: Maybe<Scalars['Money']['output']>;
  /**
   * Specifies the available amount with currency to refund on the gateway.
   * This value is only available for transactions of type `SuggestedRefund`.
   */
  maximumRefundableV2?: Maybe<MoneyV2>; /** Whether the transaction can be captured multiple times. */
  multiCapturable: Scalars['Boolean']['output']; /** The associated order. */
  order?: Maybe<Order>; /** The associated parent transaction, for example the authorization of a capture. */
  parentTransaction?: Maybe<OrderTransaction>; /** The payment details for the transaction. */
  paymentDetails?: Maybe<PaymentDetails>; /** The payment icon to display for the transaction. */
  paymentIcon?: Maybe<Image>; /** The payment ID associated with the transaction. */
  paymentId?: Maybe<Scalars['String']['output']>;
  /**
   * The payment method used for the transaction. This value is `null` if the payment method is unknown.
   * @deprecated Use `paymentIcon` instead.
   */
  paymentMethod?: Maybe<PaymentMethods>; /** Date and time when the transaction was processed. */
  processedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The transaction receipt that the payment gateway attaches to the transaction.
   * > **Note:** This field is **gateway-specific** and **not a stable contract**.
   * > Its structure and contents can vary by payment gateway and may change without notice.
   * > Apps **shouldn't parse or rely on this field for business logic**; prefer typed fields on `OrderTransaction` and related objects.
   */
  receiptJson?: Maybe<Scalars['JSON']['output']>; /** The settlement currency. */
  settlementCurrency?: Maybe<CurrencyCode>; /** The rate used when converting the transaction amount to settlement currency. */
  settlementCurrencyRate?: Maybe<Scalars['Decimal']['output']>; /** Contains all Shopify Payments information related to an order transaction. This field is available only to stores on a Shopify Plus plan. */
  shopifyPaymentsSet?: Maybe<ShopifyPaymentsTransactionSet>; /** The status of this transaction. */
  status: OrderTransactionStatus; /** Whether the transaction is a test transaction. */
  test: Scalars['Boolean']['output'];
  /**
   * The amount of the original authorization that remains unsettled.
   * During a pending capture, this reflects the full outstanding balance including the pending amount.
   * When no capture is pending, this equals the capturable amount.
   * Only available when an amount is capturable or manually marked as paid.
   * @deprecated Use `totalUnsettledSet` instead.
   */
  totalUnsettled?: Maybe<Scalars['Money']['output']>;
  /**
   * The amount of the original authorization that remains unsettled, in shop and presentment currencies.
   * During a pending capture, this reflects the full outstanding balance including the pending amount.
   * When no capture is pending, this equals the capturable amount.
   * Only available when an amount is capturable or manually marked as paid.
   */
  totalUnsettledSet?: Maybe<MoneyBag>;
  /**
   * The amount with currency of the original authorization that remains unsettled.
   * During a pending capture, this reflects the full outstanding balance including the pending amount.
   * When no capture is pending, this equals the capturable amount.
   * Only available when an amount is capturable or manually marked as paid.
   * @deprecated Use `totalUnsettledSet` instead.
   */
  totalUnsettledV2?: Maybe<MoneyV2>; /** Staff member who was logged into the Shopify POS device when the transaction was processed. */
  user?: Maybe<StaffMember>;
};
/** An auto-generated type for paginating through multiple OrderTransactions. */
type OrderTransactionConnection = {
  __typename?: 'OrderTransactionConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<OrderTransactionEdge>; /** A list of nodes that are contained in OrderTransactionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<OrderTransaction>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one OrderTransaction and a cursor during pagination. */
type OrderTransactionEdge = {
  __typename?: 'OrderTransactionEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of OrderTransactionEdge. */
  node: OrderTransaction;
};
/** A standardized error code, independent of the payment provider. */
declare enum OrderTransactionErrorCode {
  /** The payment method was invalid. */
  AmazonPaymentsInvalidPaymentMethod = 'AMAZON_PAYMENTS_INVALID_PAYMENT_METHOD',
  /** The maximum amount has been captured. */
  AmazonPaymentsMaxAmountCharged = 'AMAZON_PAYMENTS_MAX_AMOUNT_CHARGED',
  /** The maximum amount has been refunded. */
  AmazonPaymentsMaxAmountRefunded = 'AMAZON_PAYMENTS_MAX_AMOUNT_REFUNDED',
  /** The maximum of 10 authorizations has been captured for an order. */
  AmazonPaymentsMaxAuthorizationsCaptured = 'AMAZON_PAYMENTS_MAX_AUTHORIZATIONS_CAPTURED',
  /** The maximum of 10 refunds has been processed for an order. */
  AmazonPaymentsMaxRefundsProcessed = 'AMAZON_PAYMENTS_MAX_REFUNDS_PROCESSED',
  /** The order was canceled, which canceled all open authorizations. */
  AmazonPaymentsOrderReferenceCanceled = 'AMAZON_PAYMENTS_ORDER_REFERENCE_CANCELED',
  /** The order was not confirmed within three hours. */
  AmazonPaymentsStale = 'AMAZON_PAYMENTS_STALE',
  /** The issuer declined the transaction, the customer should contact their issuer for more details. */
  CallIssuer = 'CALL_ISSUER',
  /** The card was declined. */
  CardDeclined = 'CARD_DECLINED',
  /** There is an error in the gateway or merchant configuration. */
  ConfigError = 'CONFIG_ERROR',
  /** The card is expired. */
  ExpiredCard = 'EXPIRED_CARD',
  /** There was an unknown error with processing the payment. */
  GenericError = 'GENERIC_ERROR',
  /** The address is incorrect. */
  IncorrectAddress = 'INCORRECT_ADDRESS',
  /** The card security code (CVC/CVV) is incorrect. */
  IncorrectCvc = 'INCORRECT_CVC',
  /** The card number is incorrect. */
  IncorrectNumber = 'INCORRECT_NUMBER',
  /** The PIN entered is incorrect. */
  IncorrectPin = 'INCORRECT_PIN',
  /** The ZIP or postal code doesn't match the one on file. */
  IncorrectZip = 'INCORRECT_ZIP',
  /** The amount is invalid. */
  InvalidAmount = 'INVALID_AMOUNT',
  /** The payment method is not available in the customer's country. */
  InvalidCountry = 'INVALID_COUNTRY',
  /** The format of the CVC is incorrect. */
  InvalidCvc = 'INVALID_CVC',
  /** The format of the expiry date is incorrect. */
  InvalidExpiryDate = 'INVALID_EXPIRY_DATE',
  /** The format of the card number is incorrect. */
  InvalidNumber = 'INVALID_NUMBER',
  /** The payment method is momentarily unavailable. */
  PaymentMethodUnavailable = 'PAYMENT_METHOD_UNAVAILABLE',
  /** The card has been reported as lost or stolen, and the card issuer has requested that the merchant keep the card and call the number on the back. */
  PickUpCard = 'PICK_UP_CARD',
  /** There was an error while processing the payment. */
  ProcessingError = 'PROCESSING_ERROR',
  /** A real card was used but the gateway was in test mode. */
  TestModeLiveCard = 'TEST_MODE_LIVE_CARD',
  /** The gateway or merchant configuration doesn't support a feature, such as network tokenization. */
  UnsupportedFeature = 'UNSUPPORTED_FEATURE'
}
/** The different kinds of order transactions. */
declare enum OrderTransactionKind {
  /**
   * An amount reserved against the cardholder's funding source.
   * Money does not change hands until the authorization is captured.
   */
  Authorization = 'AUTHORIZATION',
  /** A transfer of the money that was reserved by an authorization. */
  Capture = 'CAPTURE',
  /** The money returned to the customer when they've paid too much during a cash transaction. */
  Change = 'CHANGE',
  /** An authorization for a payment taken with an EMV credit card reader. */
  EmvAuthorization = 'EMV_AUTHORIZATION',
  /**
   * A partial or full return of captured funds to the cardholder.
   * A refund can happen only after a capture is processed.
   */
  Refund = 'REFUND',
  /** An authorization and capture performed together in a single step. */
  Sale = 'SALE',
  /** A suggested refund transaction that can be used to create a refund. */
  SuggestedRefund = 'SUGGESTED_REFUND',
  /** A cancelation of an authorization transaction. */
  Void = 'VOID'
}
/** The different states that an `OrderTransaction` can have. */
declare enum OrderTransactionStatus {
  /** Awaiting a response. */
  AwaitingResponse = 'AWAITING_RESPONSE',
  /** There was an error while processing the transaction. */
  Error = 'ERROR',
  /** The transaction failed. */
  Failure = 'FAILURE',
  /** The transaction is pending. */
  Pending = 'PENDING',
  /** The transaction succeeded. */
  Success = 'SUCCESS',
  /** The transaction status is unknown. */
  Unknown = 'UNKNOWN'
}
/**
 * A standalone content page in the online store. Pages display HTML-formatted content for informational pages like "About Us", contact information, or shipping policies.
 *
 * Each page has a unique handle for URL routing and supports custom template suffixes for specialized layouts. Pages can be published or hidden, and include creation and update timestamps.
 */
type Page = HasEvents & HasMetafieldDefinitions & HasMetafields & HasPublishedTranslations & Navigable & Node & {
  __typename?: 'Page'; /** The text content of the page, complete with HTML markup. */
  body: Scalars['HTML']['output']; /** The first 150 characters of the page body. If the page body contains more than 150 characters, additional characters are truncated by ellipses. */
  bodySummary: Scalars['String']['output']; /** The date and time (ISO 8601 format) of the page creation. */
  createdAt: Scalars['DateTime']['output']; /** A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID. */
  defaultCursor: Scalars['String']['output']; /** The paginated list of events associated with the host subject. */
  events: EventConnection;
  /**
   * A unique, human-friendly string for the page.
   * In themes, the Liquid templating language refers to a page by its handle.
   */
  handle: Scalars['String']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** Whether or not the page is visible. */
  isPublished: Scalars['Boolean']['output'];
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   */
  metafield?: Maybe<Metafield>;
  /**
   * List of metafield definitions.
   * @deprecated This field will be removed in a future version. Use `QueryRoot.metafieldDefinitions` instead.
   */
  metafieldDefinitions: MetafieldDefinitionConnection;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   */
  metafields: MetafieldConnection;
  /**
   * The date and time (ISO 8601 format) when the page became or will become visible.
   * Returns null when the page isn't visible.
   */
  publishedAt?: Maybe<Scalars['DateTime']['output']>; /** The suffix of the template that's used to render the page. */
  templateSuffix?: Maybe<Scalars['String']['output']>; /** Title of the page. */
  title: Scalars['String']['output']; /** The published translations associated with the resource. */
  translations: Array<Translation>; /** The date and time (ISO 8601 format) of the latest page update. */
  updatedAt: Scalars['DateTime']['output'];
};
/**
 * Returns information about pagination in a connection, in accordance with the
 * [Relay specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo).
 * For more information, please read our [GraphQL Pagination Usage Guide](https://shopify.dev/api/usage/pagination-graphql).
 */
type PageInfo = {
  __typename?: 'PageInfo'; /** The cursor corresponding to the last node in edges. */
  endCursor?: Maybe<Scalars['String']['output']>; /** Whether there are more pages to fetch following the current page. */
  hasNextPage: Scalars['Boolean']['output']; /** Whether there are any pages prior to the current page. */
  hasPreviousPage: Scalars['Boolean']['output']; /** The cursor corresponding to the first node in edges. */
  startCursor?: Maybe<Scalars['String']['output']>;
};
/** A payment customization. */
type PaymentCustomization = HasMetafieldDefinitions & HasMetafields & Node & {
  __typename?: 'PaymentCustomization'; /** The enabled status of the payment customization. */
  enabled: Scalars['Boolean']['output']; /** The error history on the most recent version of the payment customization. */
  errorHistory?: Maybe<FunctionsErrorHistory>; /** The ID of the Shopify Function implementing the payment customization. */
  functionId: Scalars['String']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   */
  metafield?: Maybe<Metafield>;
  /**
   * List of metafield definitions.
   * @deprecated This field will be removed in a future version. Use `QueryRoot.metafieldDefinitions` instead.
   */
  metafieldDefinitions: MetafieldDefinitionConnection;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   */
  metafields: MetafieldConnection; /** The Shopify Function implementing the payment customization. */
  shopifyFunction: ShopifyFunction; /** The title of the payment customization. */
  title: Scalars['String']['output'];
};
/** Payment details related to a transaction. */
type PaymentDetails = CardPaymentDetails | LocalPaymentMethodsPaymentDetails | PaypalWalletPaymentDetails | ShopPayInstallmentsPaymentDetails;
/** All possible instrument outputs for Payment Mandates. */
type PaymentInstrument = VaultCreditCard | VaultPaypalBillingAgreement;
/**
 * A payment instrument and the permission
 * the owner of the instrument gives to the merchant to debit it.
 */
type PaymentMandate = Node & {
  __typename?: 'PaymentMandate'; /** The unique ID of a payment mandate. */
  id: Scalars['ID']['output']; /** The outputs details of the payment instrument. */
  paymentInstrument: PaymentInstrument;
};
/**
 * A payment mandate with resource information, representing the permission
 * the owner of the payment instrument gives to the merchant to debit it
 * for specific resources (e.g., Order, Subscriptions).
 */
type PaymentMandateResource = {
  __typename?: 'PaymentMandateResource'; /** The ID of the resource that this payment method was created for. */
  resourceId?: Maybe<Scalars['ID']['output']>; /** The resource type that this payment method was created for (e.g., Order, Subscriptions). */
  resourceType?: Maybe<MandateResourceType>;
};
/** An auto-generated type for paginating through multiple PaymentMandateResources. */
type PaymentMandateResourceConnection = {
  __typename?: 'PaymentMandateResourceConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<PaymentMandateResourceEdge>; /** A list of nodes that are contained in PaymentMandateResourceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<PaymentMandateResource>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one PaymentMandateResource and a cursor during pagination. */
type PaymentMandateResourceEdge = {
  __typename?: 'PaymentMandateResourceEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of PaymentMandateResourceEdge. */
  node: PaymentMandateResource;
};
/** Some of the payment methods used in Shopify. */
declare enum PaymentMethods {
  AmericanExpress = 'AMERICAN_EXPRESS',
  /** The payment method for Bancontact payment. */
  Bancontact = 'BANCONTACT',
  Bitcoin = 'BITCOIN',
  Bogus = 'BOGUS',
  /** The payment method for Cartes Bancaires payment. */
  CartesBancaires = 'CARTES_BANCAIRES',
  Dankort = 'DANKORT',
  DinersClub = 'DINERS_CLUB',
  Discover = 'DISCOVER',
  Dogecoin = 'DOGECOIN',
  /** The payment method for eftpos_au payment. */
  Eftpos = 'EFTPOS',
  /** The payment method for Elo payment. */
  Elo = 'ELO',
  Forbrugsforeningen = 'FORBRUGSFORENINGEN',
  /** The payment method for Interac payment. */
  Interac = 'INTERAC',
  Jcb = 'JCB',
  Litecoin = 'LITECOIN',
  Maestro = 'MAESTRO',
  Mastercard = 'MASTERCARD',
  Paypal = 'PAYPAL',
  /** The payment method for UnionPay payment. */
  Unionpay = 'UNIONPAY',
  Visa = 'VISA'
}
/** Represents the payment schedule for a single payment defined in the payment terms. */
type PaymentSchedule = Node & {
  __typename?: 'PaymentSchedule';
  /**
   * Amount owed for this payment schedule.
   * @deprecated Use `balanceDue`, `totalBalance`, or `Order.totalOutstandingSet` instead.
   */
  amount: MoneyV2; /** Remaining balance to be captured for this payment schedule. */
  balanceDue: MoneyV2; /** Date and time when the payment schedule is paid or fulfilled. */
  completedAt?: Maybe<Scalars['DateTime']['output']>; /** Whether the payment schedule is due. */
  due: Scalars['Boolean']['output']; /** Date and time when the payment schedule is due. */
  dueAt?: Maybe<Scalars['DateTime']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** Date and time when the invoice is sent. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>; /** The payment terms the payment schedule belongs to. */
  paymentTerms: PaymentTerms; /** Remaining balance to be paid or authorized by the customer for this payment schedule. */
  totalBalance: MoneyV2;
};
/** An auto-generated type for paginating through multiple PaymentSchedules. */
type PaymentScheduleConnection = {
  __typename?: 'PaymentScheduleConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<PaymentScheduleEdge>; /** A list of nodes that are contained in PaymentScheduleEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<PaymentSchedule>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one PaymentSchedule and a cursor during pagination. */
type PaymentScheduleEdge = {
  __typename?: 'PaymentScheduleEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of PaymentScheduleEdge. */
  node: PaymentSchedule;
};
/** Settings related to payments. */
type PaymentSettings = {
  __typename?: 'PaymentSettings'; /** List of the digital wallets which the shop supports. */
  supportedDigitalWallets: Array<DigitalWallet>;
};
/**
 * Payment conditions for an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) or [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder), including when payment is due and how it's scheduled. Payment terms are created from templates that specify net terms (payment due after a certain number of days) or fixed schedules with specific due dates. You can optionally provide custom payment schedules using [`PaymentScheduleInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentScheduleInput).
 *
 * Each payment term contains one or more [`PaymentSchedule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentSchedule), which you can access through the [`paymentSchedules`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms#field-PaymentTerms.fields.paymentSchedules) field. Payment schedules contain detailed information for each payment installment.
 *
 * Learn more about [payment terms](https://shopify.dev/docs/apps/build/checkout/payments/payment-terms).
 */
type PaymentTerms = Node & {
  __typename?: 'PaymentTerms'; /** The draft order associated with the payment terms. */
  draftOrder?: Maybe<DraftOrder>; /** Whether payment terms have a payment schedule that's due. */
  due: Scalars['Boolean']['output']; /** Duration of payment terms in days based on the payment terms template used to create the payment terms. */
  dueInDays?: Maybe<Scalars['Int']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The order associated with the payment terms. */
  order?: Maybe<Order>; /** Whether the payment terms have overdue payment schedules. */
  overdue: Scalars['Boolean']['output']; /** List of schedules for the payment terms. */
  paymentSchedules: PaymentScheduleConnection; /** The name of the payment terms template used to create the payment terms. */
  paymentTermsName: Scalars['String']['output']; /** The payment terms template type used to create the payment terms. */
  paymentTermsType: PaymentTermsType; /** The payment terms name, translated into the shop admin's preferred language. */
  translatedName: Scalars['String']['output'];
};
/** Represents the payment terms template object. */
type PaymentTermsTemplate = Node & {
  __typename?: 'PaymentTermsTemplate'; /** The description of the payment terms template. */
  description: Scalars['String']['output']; /** The number of days between the issued date and due date if this is the net type of payment terms. */
  dueInDays?: Maybe<Scalars['Int']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The name of the payment terms template. */
  name: Scalars['String']['output']; /** The type of the payment terms template. */
  paymentTermsType: PaymentTermsType; /** The translated payment terms template name. */
  translatedName: Scalars['String']['output'];
};
/** The type of a payment terms or a payment terms template. */
declare enum PaymentTermsType {
  /** The payment terms or payment terms template is a fixed type. It's due on a specified date. */
  Fixed = 'FIXED',
  /** The payment terms or payment terms template is due on fulfillment. */
  Fulfillment = 'FULFILLMENT',
  /** The payment terms or payment terms template is a net type. It's due a number of days after issue. */
  Net = 'NET',
  /** The payment terms or payment terms template is due on receipt. */
  Receipt = 'RECEIPT',
  /** The type of the payment terms or payment terms template is unknown. */
  Unknown = 'UNKNOWN'
}
/** Represents a valid PayPal Express subscriptions gateway status. */
declare enum PaypalExpressSubscriptionsGatewayStatus {
  /** The status is disabled. */
  Disabled = 'DISABLED',
  /** The status is enabled. */
  Enabled = 'ENABLED',
  /** The status is pending. */
  Pending = 'PENDING'
}
/** PayPal Wallet payment details related to a transaction. */
type PaypalWalletPaymentDetails = BasePaymentDetails & {
  __typename?: 'PaypalWalletPaymentDetails'; /** The name of payment method used by the buyer. */
  paymentMethodName?: Maybe<Scalars['String']['output']>;
};
/** Represents a mobile device that Shopify Point of Sale has been installed on. */
type PointOfSaleDevice = Node & {
  __typename?: 'PointOfSaleDevice'; /** A globally-unique ID. */
  id: Scalars['ID']['output'];
};
/**
 * A list that defines pricing for [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant). Price lists override default product prices with either fixed prices or percentage-based adjustments.
 *
 * Each price list associates with a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) to determine which customers see the pricing. The catalog's context rules control when the price list applies, such as for specific markets, company locations, or apps.
 *
 * Learn how to [support different pricing models](https://shopify.dev/docs/apps/build/markets/build-catalog).
 */
type PriceList = Node & {
  __typename?: 'PriceList'; /** The catalog that the price list is associated with. */
  catalog?: Maybe<Catalog>; /** The currency for fixed prices associated with this price list. */
  currency: CurrencyCode; /** The number of fixed prices on the price list. */
  fixedPricesCount: Scalars['Int']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The unique name of the price list, used as a human-readable identifier. */
  name: Scalars['String']['output']; /** Relative adjustments to other prices. */
  parent?: Maybe<PriceListParent>; /** A list of prices associated with the price list. */
  prices: PriceListPriceConnection; /** A list of quantity rules associated with the price list, ordered by product variants. */
  quantityRules: QuantityRuleConnection;
};
/**
 * The type and value of a price list adjustment.
 *
 * For more information on price lists, refer to
 * [Support different pricing models](https://shopify.dev/apps/internationalization/product-price-lists).
 */
type PriceListAdjustment = {
  __typename?: 'PriceListAdjustment'; /** The type of price adjustment, such as percentage increase or decrease. */
  type: PriceListAdjustmentType;
  /**
   * The value of price adjustment, where positive numbers reduce the prices and negative numbers
   * increase them.
   */
  value: Scalars['Float']['output'];
};
/** Represents the settings of price list adjustments. */
type PriceListAdjustmentSettings = {
  __typename?: 'PriceListAdjustmentSettings'; /** The type of price list adjustment setting for compare at price. */
  compareAtMode: PriceListCompareAtMode;
};
/** Represents a percentage price adjustment type. */
declare enum PriceListAdjustmentType {
  /** Percentage decrease type. Prices will have a lower value. */
  PercentageDecrease = 'PERCENTAGE_DECREASE',
  /** Percentage increase type. Prices will have a higher value. */
  PercentageIncrease = 'PERCENTAGE_INCREASE'
}
/** Represents how the compare at price will be determined for a price list. */
declare enum PriceListCompareAtMode {
  /** The compare at price is adjusted based on percentage specified in price list. */
  Adjusted = 'ADJUSTED',
  /** The compare at prices are set to `null` unless explicitly defined by a fixed price value. */
  Nullify = 'NULLIFY'
}
/**
 * Represents relative adjustments from one price list to other prices.
 *   You can use a `PriceListParent` to specify an adjusted relative price using a percentage-based
 *   adjustment. Adjusted prices work in conjunction with exchange rules and rounding.
 *
 *   [Adjustment types](https://shopify.dev/api/admin-graphql/latest/enums/pricelistadjustmenttype)
 *   support both percentage increases and decreases.
 */
type PriceListParent = {
  __typename?: 'PriceListParent'; /** A price list adjustment. */
  adjustment: PriceListAdjustment; /** A price list's settings for adjustment. */
  settings: PriceListAdjustmentSettings;
};
/**
 * Pricing for a [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Represents the variant's price, compare-at price, and whether the price is fixed or calculated using percentage-based adjustments. The [`PriceListPriceOriginType`](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListPriceOriginType) distinguishes between prices set directly on the price list (fixed) and prices calculated using the price list's adjustment configuration (relative).
 *
 * Learn more about [building catalogs with different pricing models](https://shopify.dev/docs/apps/build/markets/build-catalog).
 */
type PriceListPrice = {
  __typename?: 'PriceListPrice'; /** The compare-at price of the product variant on this price list. */
  compareAtPrice?: Maybe<MoneyV2>; /** The origin of a price, either fixed (defined on the price list) or relative (calculated using a price list adjustment configuration). */
  originType: PriceListPriceOriginType; /** The price of the product variant on this price list. */
  price: MoneyV2; /** A list of quantity breaks for the product variant. */
  quantityPriceBreaks: QuantityPriceBreakConnection; /** The product variant associated with this price. */
  variant: ProductVariant;
};
/** An auto-generated type for paginating through multiple PriceListPrices. */
type PriceListPriceConnection = {
  __typename?: 'PriceListPriceConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<PriceListPriceEdge>; /** A list of nodes that are contained in PriceListPriceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<PriceListPrice>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one PriceListPrice and a cursor during pagination. */
type PriceListPriceEdge = {
  __typename?: 'PriceListPriceEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of PriceListPriceEdge. */
  node: PriceListPrice;
};
/** Represents the origin of a price, either fixed (defined on the price list) or relative (calculated using a price list adjustment configuration). For examples, refer to [PriceList](https://shopify.dev/api/admin-graphql/latest/queries/priceList#section-examples). */
declare enum PriceListPriceOriginType {
  /** The price is defined on the price list. */
  Fixed = 'FIXED',
  /** The price is relative to the adjustment type and value. */
  Relative = 'RELATIVE'
}
/**
 * One type of value given to a customer when a discount is applied to an order.
 * The application of a discount with this value gives the customer the specified percentage off a specified item.
 */
type PricingPercentageValue = {
  __typename?: 'PricingPercentageValue'; /** The percentage value of the object. This is a number between -100 (free) and 0 (no discount). */
  percentage: Scalars['Float']['output'];
};
/** The type of value given to a customer when a discount is applied to an order. For example, the application of the discount might give the customer a percentage off a specified item. Alternatively, the application of the discount might give the customer a monetary value in a given currency off an order. */
type PricingValue = MoneyV2 | PricingPercentageValue;
/**
 * The `Product` object lets you manage products in a merchant’s store.
 *
 * Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color.
 * You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product.
 * You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media).
 * Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).
 *
 * Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components),
 * including limitations and considerations.
 */
type Product = HasEvents & HasMetafieldDefinitions & HasMetafields & HasPublishedTranslations & LegacyInteroperability & Navigable & Node & OnlineStorePreviewable & Publishable & {
  __typename?: 'Product';
  /**
   * The number of
   * [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)
   * that a resource is published to, without
   * [feedback errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback).
   */
  availablePublicationsCount?: Maybe<Count>;
  /**
   * The description of the product, with
   * HTML tags. For example, the description might include
   * bold `<strong></strong>` and italic `<i></i>` text.
   * @deprecated Use `descriptionHtml` instead.
   */
  bodyHtml?: Maybe<Scalars['String']['output']>;
  /**
   * A list of [components](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-product-fixed-bundle)
   * that are associated with a product in a bundle.
   */
  bundleComponents: ProductBundleComponentConnection;
  /**
   * The category of a product
   * from [Shopify's Standard Product Taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17).
   */
  category?: Maybe<TaxonomyCategory>;
  /**
   * A list of [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)
   * that include the product.
   */
  collections: CollectionConnection;
  /**
   * A special product type that combines separate products from a store into a single product listing.
   * [Combined listings](https://shopify.dev/apps/build/product-merchandising/combined-listings) are connected
   * by a shared option, such as color, model, or dimension.
   */
  combinedListing?: Maybe<CombinedListing>;
  /**
   * The [role of the product](https://shopify.dev/docs/apps/build/product-merchandising/combined-listings/build-for-combined-listings)
   * in a combined listing.
   *
   * If `null`, then the product isn't part of any combined listing.
   */
  combinedListingRole?: Maybe<CombinedListingsRole>;
  /**
   * The [compare-at price range](https://help.shopify.com/manual/products/details/product-pricing/sale-pricing)
   * of the product in the shop's default currency.
   */
  compareAtPriceRange?: Maybe<ProductCompareAtPriceRange>; /** The pricing that applies to a customer in a specific context. For example, a price might vary depending on the customer's location. Only active markets are considered in the price resolution. */
  contextualPricing: ProductContextualPricing; /** The date and time when the product was created. */
  createdAt: Scalars['DateTime']['output'];
  /**
   * The custom product type specified by the merchant.
   * @deprecated Use `productType` instead.
   */
  customProductType?: Maybe<Scalars['String']['output']>; /** A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID. */
  defaultCursor: Scalars['String']['output'];
  /**
   * A single-line description of the product,
   * with [HTML tags](https://developer.mozilla.org/en-US/docs/Web/HTML) removed.
   */
  description: Scalars['String']['output'];
  /**
   * The description of the product, with
   * HTML tags. For example, the description might include
   * bold `<strong></strong>` and italic `<i></i>` text.
   */
  descriptionHtml: Scalars['HTML']['output'];
  /**
   * Stripped description of the product, single line with HTML tags removed.
   * Truncated to 60 characters.
   * @deprecated Use `description` instead.
   */
  descriptionPlainSummary: Scalars['String']['output']; /** The paginated list of events associated with the host subject. */
  events: EventConnection;
  /**
   * The featured image for the product.
   * @deprecated Use `featuredMedia` instead.
   */
  featuredImage?: Maybe<Image>;
  /**
   * The featured [media](https://shopify.dev/docs/apps/build/online-store/product-media)
   * associated with the product.
   */
  featuredMedia?: Maybe<Media>;
  /**
   * The information that lets merchants know what steps they need to take
   * to make sure that the app is set up correctly.
   *
   * For example, if a merchant hasn't set up a product correctly in the app,
   * then the feedback might include a message that says "You need to add a price
   * to this product".
   */
  feedback?: Maybe<ResourceFeedback>; /** The [theme template](https://shopify.dev/docs/storefronts/themes/architecture/templates) that's used when customers view the gift card in a store. */
  giftCardTemplateSuffix?: Maybe<Scalars['String']['output']>;
  /**
   * A unique, human-readable string of the product's title. A handle can contain letters, hyphens (`-`), and numbers, but no spaces.
   * The handle is used in the online store URL for the product.
   */
  handle: Scalars['String']['output']; /** Whether the product has only a single variant with the default option and value. */
  hasOnlyDefaultVariant: Scalars['Boolean']['output']; /** Whether the product has variants that are out of stock. */
  hasOutOfStockVariants: Scalars['Boolean']['output'];
  /**
   * Whether at least one of the product variants requires
   * [bundle components](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-product-fixed-bundle).
   *
   * Learn more about
   * [store eligibility for bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles#store-eligibility).
   */
  hasVariantsThatRequiresComponents: Scalars['Boolean']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /**
   * The images associated with the product.
   * @deprecated Use `media` instead.
   */
  images: ImageConnection;
  /**
   * Whether the product
   * is in a specified
   * [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).
   */
  inCollection: Scalars['Boolean']['output']; /** Whether the product is a gift card. */
  isGiftCard: Scalars['Boolean']['output']; /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64']['output']; /** The [media](https://shopify.dev/docs/apps/build/online-store/product-media) associated with the product. Valid media are images, 3D models, videos. */
  media: MediaConnection;
  /**
   * The total count of [media](https://shopify.dev/docs/apps/build/online-store/product-media)
   * that's associated with a product.
   */
  mediaCount?: Maybe<Count>;
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   */
  metafield?: Maybe<Metafield>;
  /**
   * List of metafield definitions.
   * @deprecated This field will be removed in a future version. Use `QueryRoot.metafieldDefinitions` instead.
   */
  metafieldDefinitions: MetafieldDefinitionConnection;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   */
  metafields: MetafieldConnection; /** The [preview URL](https://help.shopify.com/manual/online-store/setting-up#preview-your-store) for the online store. */
  onlineStorePreviewUrl?: Maybe<Scalars['URL']['output']>;
  /**
   * The product's URL on the online store.
   * If `null`, then the product isn't published to the online store sales channel.
   */
  onlineStoreUrl?: Maybe<Scalars['URL']['output']>;
  /**
   * A list of product options. The limit is defined by the
   * [shop's resource limits for product options](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-resourcelimits) (`Shop.resourceLimits.maxProductOptions`).
   */
  options: Array<ProductOption>;
  /**
   * The price range of the product.
   * @deprecated Use `priceRangeV2` instead.
   */
  priceRange: ProductPriceRange;
  /**
   * The minimum and maximum prices of a product, expressed in decimal numbers.
   * For example, if the product is priced between $10.00 and $50.00,
   * then the price range is $10.00 - $50.00.
   */
  priceRangeV2: ProductPriceRangeV2;
  /**
   * The product category specified by the merchant.
   * @deprecated Use `category` instead.
   */
  productCategory?: Maybe<ProductCategory>;
  /**
   * A list of products that contain at least one variant associated with
   * at least one of the current products' variants via group relationship.
   */
  productComponents: ProductComponentTypeConnection;
  /**
   * A count of unique products that contain at least one variant associated with
   * at least one of the current products' variants via group relationship.
   */
  productComponentsCount?: Maybe<Count>; /** A list of products that has a variant that contains any of this product's variants as a component. */
  productParents: ProductConnection;
  /**
   * A list of the channels where the product is published.
   * @deprecated Use `resourcePublications` instead.
   */
  productPublications: ProductPublicationConnection;
  /**
   * The [product type](https://help.shopify.com/manual/products/details/product-type)
   * that merchants define.
   */
  productType: Scalars['String']['output'];
  /**
   * The number of
   * [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)
   * that a resource is published to, without
   * [feedback errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback).
   * @deprecated Use `resourcePublicationsCount` instead.
   */
  publicationCount: Scalars['Int']['output'];
  /**
   * A list of the channels where the product is published.
   * @deprecated Use `resourcePublications` instead.
   */
  publications: ProductPublicationConnection; /** The date and time when the product was published to the online store. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>; /** Whether the product is published for a customer only in a specified context. For example, a product might be published for a customer only in a specific location. */
  publishedInContext: Scalars['Boolean']['output'];
  /**
   * Whether the resource is published to a specific channel.
   * @deprecated Use `publishedOnPublication` instead.
   */
  publishedOnChannel: Scalars['Boolean']['output'];
  /**
   * Whether the resource is published to a
   * [channel](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel).
   * For example, the resource might be published to the online store channel.
   * @deprecated Use `publishedOnCurrentPublication` instead.
   */
  publishedOnCurrentChannel: Scalars['Boolean']['output'];
  /**
   * Whether the resource is published to the app's
   * [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).
   * For example, the resource might be published to the app's online store channel.
   * @deprecated Use `publishedOnPublication` instead.
   */
  publishedOnCurrentPublication: Scalars['Boolean']['output'];
  /**
   * Whether the resource is published to a specified
   * [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).
   */
  publishedOnPublication: Scalars['Boolean']['output'];
  /**
   * Whether the product can only be purchased with
   * a [selling plan](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans).
   * Products that are sold on subscription (`requiresSellingPlan: true`) can be updated only for online stores.
   * If you update a product to be subscription-only (`requiresSellingPlan:false`), then the product is unpublished from all channels, except the online store.
   */
  requiresSellingPlan: Scalars['Boolean']['output'];
  /**
   * The resource that's either published or staged to be published to
   * the [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).
   * @deprecated Use `resourcePublications` instead.
   */
  resourcePublicationOnCurrentPublication?: Maybe<ResourcePublicationV2>;
  /**
   * The list of resources that are published to a
   * [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).
   */
  resourcePublications: ResourcePublicationConnection;
  /**
   * The number of
   * [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)
   * that a resource is published to, without
   * [feedback errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback).
   */
  resourcePublicationsCount?: Maybe<Count>;
  /**
   * The list of resources that are either published or staged to be published to a
   * [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).
   */
  resourcePublicationsV2: ResourcePublicationV2Connection;
  /**
   * Whether the merchant can make changes to the product when they
   * [edit the order](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders)
   * associated with the product. For example, a merchant might be restricted from changing product details when they
   * edit an order.
   */
  restrictedForResource?: Maybe<RestrictedForResource>;
  /**
   * A count of [selling plan groups](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan)
   * that are associated with the product.
   * @deprecated Use `sellingPlanGroupsCount` instead.
   */
  sellingPlanGroupCount: Scalars['Int']['output'];
  /**
   * A list of all [selling plan groups](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan)
   * that are associated with the product either directly, or through the product's variants.
   */
  sellingPlanGroups: SellingPlanGroupConnection;
  /**
   * A count of [selling plan groups](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan)
   * that are associated with the product.
   */
  sellingPlanGroupsCount?: Maybe<Count>;
  /**
   * The [SEO title and description](https://help.shopify.com/manual/promoting-marketing/seo/adding-keywords)
   * that are associated with a product.
   */
  seo: Seo;
  /**
   * The standardized product type in the Shopify product taxonomy.
   * @deprecated Use `productCategory` instead.
   */
  standardizedProductType?: Maybe<StandardizedProductType>;
  /**
   * The [product status](https://help.shopify.com/manual/products/details/product-details-page#product-status),
   * which controls visibility across all sales channels.
   */
  status: ProductStatus;
  /**
   * The Storefront GraphQL API ID of the `Product`.
   *
   * The Storefront GraphQL API will no longer return Base64 encoded IDs to match the behavior of the Admin GraphQL API. Therefore, you can safely use the `id` field's value instead.
   * @deprecated Use `id` instead.
   */
  storefrontId: Scalars['StorefrontID']['output'];
  /**
   * A comma-separated list of searchable keywords that are
   * associated with the product. For example, a merchant might apply the `sports`
   * and `summer` tags to products that are associated with sportwear for summer.
   *
   * Updating `tags` overwrites
   * any existing tags that were previously added to the product. To add new tags without overwriting
   * existing tags, use the [`tagsAdd`](https://shopify.dev/api/admin-graphql/latest/mutations/tagsadd)
   * mutation.
   */
  tags: Array<Scalars['String']['output']>; /** The [theme template](https://shopify.dev/docs/storefronts/themes/architecture/templates) that's used when customers view the product in a store. */
  templateSuffix?: Maybe<Scalars['String']['output']>;
  /**
   * The name for the product that displays to customers. The title is used to construct the product's handle.
   * For example, if a product is titled "Black Sunglasses", then the handle is `black-sunglasses`.
   */
  title: Scalars['String']['output']; /** The quantity of inventory that's in stock. */
  totalInventory: Scalars['Int']['output'];
  /**
   * The number of [variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)
   * that are associated with the product.
   * @deprecated Use `variantsCount` instead.
   */
  totalVariants: Scalars['Int']['output'];
  /**
   * Whether [inventory tracking](https://help.shopify.com/manual/products/inventory/getting-started-with-inventory/set-up-inventory-tracking)
   * has been enabled for the product.
   */
  tracksInventory: Scalars['Boolean']['output']; /** The published translations associated with the resource. */
  translations: Array<Translation>;
  /**
   * The list of channels that the resource is not published to.
   * @deprecated Use `unpublishedPublications` instead.
   */
  unpublishedChannels: ChannelConnection;
  /**
   * The list of [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)
   * that the resource isn't published to.
   */
  unpublishedPublications: PublicationConnection;
  /**
   * The date and time when the product was last modified.
   * A product's `updatedAt` value can change for different reasons. For example, if an order
   * is placed for a product that has inventory tracking set up, then the inventory adjustment
   * is counted as an update.
   */
  updatedAt: Scalars['DateTime']['output'];
  /**
   * A list of [variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) associated with the product.
   * If querying a single product at the root, you can fetch up to 2048 variants.
   */
  variants: ProductVariantConnection;
  /**
   * The number of [variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)
   * that are associated with the product.
   */
  variantsCount?: Maybe<Count>; /** The name of the product's vendor. */
  vendor: Scalars['String']['output'];
};
/** The product's component information. */
type ProductBundleComponent = {
  __typename?: 'ProductBundleComponent'; /** The product that's related as a component. */
  componentProduct: Product; /** The list of products' variants that are components. */
  componentVariants: ProductVariantConnection; /** The number of component variants for the product component. */
  componentVariantsCount?: Maybe<Count>;
  /**
   * The options in the parent and the component options they're connected to, along with the chosen option values
   * that appear in the bundle.
   */
  optionSelections: Array<ProductBundleComponentOptionSelection>;
  /**
   * The quantity of the component product set for this bundle line.
   * It will be null if there's a quantityOption present.
   */
  quantity?: Maybe<Scalars['Int']['output']>; /** The quantity as option of the component product. It will be null if there's a quantity set. */
  quantityOption?: Maybe<ProductBundleComponentQuantityOption>;
};
/** An auto-generated type for paginating through multiple ProductBundleComponents. */
type ProductBundleComponentConnection = {
  __typename?: 'ProductBundleComponentConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ProductBundleComponentEdge>; /** A list of nodes that are contained in ProductBundleComponentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<ProductBundleComponent>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one ProductBundleComponent and a cursor during pagination. */
type ProductBundleComponentEdge = {
  __typename?: 'ProductBundleComponentEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ProductBundleComponentEdge. */
  node: ProductBundleComponent;
};
/** A relationship between a component option and a parent option. */
type ProductBundleComponentOptionSelection = {
  __typename?: 'ProductBundleComponentOptionSelection'; /** The option that existed on the component product prior to the fixed bundle creation. */
  componentOption: ProductOption; /** The option that was created on the parent product. */
  parentOption?: Maybe<ProductOption>; /** The component option values that are actively selected for this relationship. */
  values: Array<ProductBundleComponentOptionSelectionValue>;
};
/** The status of a component option value related to a bundle. */
declare enum ProductBundleComponentOptionSelectionStatus {
  /** The component option value is not selected as sellable in the bundle. */
  Deselected = 'DESELECTED',
  /** The component option value was not initially selected, but is now available for the bundle. */
  New = 'NEW',
  /** The component option value is selected as sellable in the bundle. */
  Selected = 'SELECTED',
  /** The component option value was selected, is no longer available for the bundle. */
  Unavailable = 'UNAVAILABLE'
}
/** A component option value related to a bundle line. */
type ProductBundleComponentOptionSelectionValue = {
  __typename?: 'ProductBundleComponentOptionSelectionValue'; /** Selection status of the option. */
  selectionStatus: ProductBundleComponentOptionSelectionStatus; /** The value of the option. */
  value: Scalars['String']['output'];
};
/** A quantity option related to a bundle. */
type ProductBundleComponentQuantityOption = {
  __typename?: 'ProductBundleComponentQuantityOption'; /** The name of the option value. */
  name: Scalars['String']['output']; /** The option that was created on the parent product. */
  parentOption?: Maybe<ProductOption>; /** The quantity values of the option. */
  values: Array<ProductBundleComponentQuantityOptionValue>;
};
/** A quantity option value related to a componentized product. */
type ProductBundleComponentQuantityOptionValue = {
  __typename?: 'ProductBundleComponentQuantityOptionValue'; /** The name of the option value. */
  name: Scalars['String']['output']; /** The quantity of the option value. */
  quantity: Scalars['Int']['output'];
};
/** The details of a specific product category within Shopify's [standardized product taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17). Provides access to the associated [`ProductTaxonomyNode`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductTaxonomyNode). */
type ProductCategory = {
  __typename?: 'ProductCategory'; /** The product taxonomy node associated with the product category. */
  productTaxonomyNode?: Maybe<ProductTaxonomyNode>;
};
/** The compare-at price range of the product. */
type ProductCompareAtPriceRange = {
  __typename?: 'ProductCompareAtPriceRange'; /** The highest variant's compare-at price. */
  maxVariantCompareAtPrice: MoneyV2; /** The lowest variant's compare-at price. */
  minVariantCompareAtPrice: MoneyV2;
};
/** The product component information. */
type ProductComponentType = {
  __typename?: 'ProductComponentType'; /** The list of products' variants that are components. */
  componentVariants: ProductVariantConnection; /** The number of component variants for the product component. */
  componentVariantsCount?: Maybe<Count>; /** The list of products' variants that are not components. */
  nonComponentVariants: ProductVariantConnection; /** The number of non_components variants for the product component. */
  nonComponentVariantsCount?: Maybe<Count>; /** The product that's a component. */
  product: Product;
};
/** An auto-generated type for paginating through multiple ProductComponentTypes. */
type ProductComponentTypeConnection = {
  __typename?: 'ProductComponentTypeConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ProductComponentTypeEdge>; /** A list of nodes that are contained in ProductComponentTypeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<ProductComponentType>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one ProductComponentType and a cursor during pagination. */
type ProductComponentTypeEdge = {
  __typename?: 'ProductComponentTypeEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ProductComponentTypeEdge. */
  node: ProductComponentType;
};
/** An auto-generated type for paginating through multiple Products. */
type ProductConnection = {
  __typename?: 'ProductConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ProductEdge>; /** A list of nodes that are contained in ProductEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<Product>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** The price of a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in a specific country. Shows the minimum and maximum variant prices through the price range and the count of fixed quantity rules that apply to the product's variants in the given pricing context. */
type ProductContextualPricing = {
  __typename?: 'ProductContextualPricing'; /** The number of fixed quantity rules for the product's variants on the price list. */
  fixedQuantityRulesCount: Scalars['Int']['output']; /** The pricing of the variant with the highest price in the given context. */
  maxVariantPricing?: Maybe<ProductVariantContextualPricing>; /** The pricing of the variant with the lowest price in the given context. */
  minVariantPricing?: Maybe<ProductVariantContextualPricing>;
  /**
   * The minimum and maximum prices of a product, expressed in decimal numbers.
   * For example, if the product is priced between $10.00 and $50.00,
   * then the price range is $10.00 - $50.00.
   */
  priceRange: ProductPriceRangeV2;
};
/** An auto-generated type which holds one Product and a cursor during pagination. */
type ProductEdge = {
  __typename?: 'ProductEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ProductEdge. */
  node: Product;
};
/**
 * A product attribute that customers can choose from, such as "Size", "Color", or "Material". [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects use options to define the different variations available for purchase. Each option has a name and a set of possible values that combine to create [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects.
 *
 * The option includes its display position, associated values, and optional [`LinkedMetafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LinkedMetafield) for structured data. Options support translations for international selling and track which [`ProductOptionValue`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue) objects that variants actively use versus unused values that exist without associated variants.
 */
type ProductOption = HasPublishedTranslations & Node & {
  __typename?: 'ProductOption'; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The metafield identifier linked to this option. */
  linkedMetafield?: Maybe<LinkedMetafield>; /** The product option’s name. */
  name: Scalars['String']['output']; /** Similar to values, option_values returns all the corresponding option value objects to the product option, including values not assigned to any variants. */
  optionValues: Array<ProductOptionValue>; /** The product option's position. */
  position: Scalars['Int']['output']; /** The published translations associated with the resource. */
  translations: Array<Translation>; /** The corresponding value to the product option name. */
  values: Array<Scalars['String']['output']>;
};
/**
 * A specific value for a [`ProductOption`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption), such as "Red" or "Blue" for a "Color" option. Each value can be assigned to [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects to create different versions of a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product).
 *
 * The value tracks whether any variants currently use it through the [`hasVariants`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue#field-hasVariants) field. Values can include visual representations through swatches that display colors or images. When linked to a [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield), the [`linkedMetafieldValue`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue#field-linkedMetafieldValue) provides additional structured data for the option value.
 */
type ProductOptionValue = HasPublishedTranslations & Node & {
  __typename?: 'ProductOptionValue'; /** Whether the product option value has any linked variants. */
  hasVariants: Scalars['Boolean']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The value of the linked metafield. */
  linkedMetafieldValue?: Maybe<Scalars['String']['output']>; /** The name of the product option value. */
  name: Scalars['String']['output']; /** The swatch associated with the product option value. */
  swatch?: Maybe<ProductOptionValueSwatch>; /** The published translations associated with the resource. */
  translations: Array<Translation>;
};
/** A swatch associated with a product option value. */
type ProductOptionValueSwatch = {
  __typename?: 'ProductOptionValueSwatch'; /** The color representation of the swatch. */
  color?: Maybe<Scalars['Color']['output']>; /** An image representation of the swatch. */
  image?: Maybe<MediaImage>;
};
/** The price range of the product. */
type ProductPriceRange = {
  __typename?: 'ProductPriceRange'; /** The highest variant's price. */
  maxVariantPrice: MoneyV2; /** The lowest variant's price. */
  minVariantPrice: MoneyV2;
};
/** The price range of the product. */
type ProductPriceRangeV2 = {
  __typename?: 'ProductPriceRangeV2'; /** The highest variant's price. */
  maxVariantPrice: MoneyV2; /** The lowest variant's price. */
  minVariantPrice: MoneyV2;
};
/** Represents the channels where a product is published. */
type ProductPublication = {
  __typename?: 'ProductPublication'; /** The channel where the product was or is published. */
  channel: Channel; /** Whether the publication is published or not. */
  isPublished: Scalars['Boolean']['output']; /** The product that was or is going to be published on the channel. */
  product: Product; /** The date that the product was or is going to be published on the channel. */
  publishDate?: Maybe<Scalars['DateTime']['output']>;
};
/** An auto-generated type for paginating through multiple ProductPublications. */
type ProductPublicationConnection = {
  __typename?: 'ProductPublicationConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ProductPublicationEdge>; /** A list of nodes that are contained in ProductPublicationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<ProductPublication>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one ProductPublication and a cursor during pagination. */
type ProductPublicationEdge = {
  __typename?: 'ProductPublicationEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ProductPublicationEdge. */
  node: ProductPublication;
};
/** The possible product statuses. */
declare enum ProductStatus {
  /** The product is ready to sell and can be published to sales channels and apps. Products with an active status aren't automatically published to sales channels, such as the online store, or apps. By default, existing products are set to active. */
  Active = 'ACTIVE',
  /** The product is no longer being sold and isn't available to customers on sales channels and apps. */
  Archived = 'ARCHIVED',
  /** The product isn't ready to sell and is unavailable to customers on sales channels and apps. By default, duplicated and unarchived products are set to draft. */
  Draft = 'DRAFT',
  /** The product is active but you need a direct link to view it. The product doesn't show up in search, collections, or product recommendations. It will be returned in Storefront API and Liquid only when referenced individually by handle, id, or metafield reference.This status is only visible from 2025-10 and up, is translated to active in older versions and can't be changed from unlisted in older versions. */
  Unlisted = 'UNLISTED'
}
/** Represents a [Shopify product taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17) node. */
type ProductTaxonomyNode = Node & {
  __typename?: 'ProductTaxonomyNode'; /** The full name of the product taxonomy node. For example,  Animals & Pet Supplies > Pet Supplies > Dog Supplies > Dog Beds. */
  fullName: Scalars['String']['output']; /** The ID of the product taxonomy node. */
  id: Scalars['ID']['output']; /** Whether the node is a leaf node. */
  isLeaf: Scalars['Boolean']['output']; /** Whether the node is a root node. */
  isRoot: Scalars['Boolean']['output']; /** The name of the product taxonomy node. For example, Dog Beds. */
  name: Scalars['String']['output'];
};
/**
 * The `ProductVariant` object represents a version of a
 * [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
 * that comes in more than one [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption),
 * such as size or color. For example, if a merchant sells t-shirts with options for size and color, then a small,
 * blue t-shirt would be one product variant and a large, blue t-shirt would be another.
 *
 * Use the `ProductVariant` object to manage the full lifecycle and configuration of a product's variants. Common
 * use cases for using the `ProductVariant` object include:
 *
 * - Tracking inventory for each variant
 * - Setting unique prices for each variant
 * - Assigning barcodes and SKUs to connect variants to fulfillment services
 * - Attaching variant-specific images and media
 * - Setting delivery and tax requirements
 * - Supporting product bundles, subscriptions, and selling plans
 *
 * A `ProductVariant` is associated with a parent
 * [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) object.
 * `ProductVariant` serves as the central link between a product's merchandising configuration, inventory,
 * pricing, fulfillment, and sales channels within the GraphQL Admin API schema. Each variant
 * can reference other GraphQL types such as:
 *
 * - [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem): Used for inventory tracking
 * - [`Image`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image): Used for variant-specific images
 * - [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup): Used for subscriptions and selling plans
 *
 * Learn more about [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).
 */
type ProductVariant = HasEvents & HasMetafieldDefinitions & HasMetafields & HasPublishedTranslations & LegacyInteroperability & Navigable & Node & {
  __typename?: 'ProductVariant'; /** Whether the product variant is available for sale. */
  availableForSale: Scalars['Boolean']['output']; /** The value of the barcode associated with the product. */
  barcode?: Maybe<Scalars['String']['output']>; /** The compare-at price of the variant in the default shop currency. */
  compareAtPrice?: Maybe<Scalars['Money']['output']>; /** The pricing that applies for a customer in a given context. As of API version 2025-04, only active markets are considered in the price resolution. */
  contextualPricing: ProductVariantContextualPricing; /** The date and time when the variant was created. */
  createdAt: Scalars['DateTime']['output']; /** A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID. */
  defaultCursor: Scalars['String']['output']; /** The [delivery profile](https://shopify.dev/api/admin-graphql/latest/objects/DeliveryProfile) for the variant. */
  deliveryProfile?: Maybe<DeliveryProfile>; /** Display name of the variant, based on product's title + variant's title. */
  displayName: Scalars['String']['output']; /** The paginated list of events associated with the host subject. */
  events: EventConnection; /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /**
   * The featured image for the variant.
   * @deprecated Use `media` instead.
   */
  image?: Maybe<Image>; /** The inventory item, which is used to query for inventory information. */
  inventoryItem: InventoryItem; /** Whether customers are allowed to place an order for the product variant when it's out of stock. */
  inventoryPolicy: ProductVariantInventoryPolicy; /** The total sellable quantity of the variant. */
  inventoryQuantity?: Maybe<Scalars['Int']['output']>; /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64']['output']; /** The media associated with the product variant. */
  media: MediaConnection;
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   */
  metafield?: Maybe<Metafield>;
  /**
   * List of metafield definitions.
   * @deprecated This field will be removed in a future version. Use `QueryRoot.metafieldDefinitions` instead.
   */
  metafieldDefinitions: MetafieldDefinitionConnection;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   */
  metafields: MetafieldConnection; /** The order of the product variant in the list of product variants. The first position in the list is 1. */
  position: Scalars['Int']['output'];
  /**
   * List of prices and compare-at prices in the presentment currencies for this shop.
   * @deprecated Use `contextualPricing` instead.
   */
  presentmentPrices: ProductVariantPricePairConnection; /** The price of the product variant in the default shop currency. */
  price: Scalars['Money']['output']; /** The product that this variant belongs to. */
  product: Product; /** A list of products that have product variants that contain this variant as a product component. */
  productParents: ProductConnection; /** A list of the product variant components. */
  productVariantComponents: ProductVariantComponentConnection;
  /**
   * Whether a product variant requires components. The default value is `false`.
   * If `true`, then the product variant can only be purchased as a parent bundle with components and it will be omitted
   * from channels that don't support bundles.
   */
  requiresComponents: Scalars['Boolean']['output']; /** List of product options applied to the variant. */
  selectedOptions: Array<SelectedOption>;
  /**
   * The total sellable quantity of the variant for online channels.
   * This doesn't represent the total available inventory or capture
   * [limitations based on customer location](https://help.shopify.com/manual/markets/inventory_and_fulfillment).
   */
  sellableOnlineQuantity: Scalars['Int']['output'];
  /**
   * Count of selling plan groups associated with the product variant.
   * @deprecated Use `sellingPlanGroupsCount` instead.
   */
  sellingPlanGroupCount: Scalars['Int']['output']; /** A list of all selling plan groups defined in the current shop associated with the product variant. */
  sellingPlanGroups: SellingPlanGroupConnection; /** Count of selling plan groups associated with the product variant. */
  sellingPlanGroupsCount?: Maybe<Count>; /** Whether to show the unit price for this product variant. */
  showUnitPrice: Scalars['Boolean']['output'];
  /**
   * A case-sensitive identifier for the product variant in the shop.
   * Required in order to connect to a fulfillment service.
   */
  sku?: Maybe<Scalars['String']['output']>;
  /**
   * The Storefront GraphQL API ID of the `ProductVariant`.
   *
   * The Storefront GraphQL API will no longer return Base64 encoded IDs to match the behavior of the Admin GraphQL API. Therefore, you can safely use the `id` field's value instead.
   * @deprecated Use `id` instead.
   */
  storefrontId: Scalars['StorefrontID']['output'];
  /**
   * Avalara tax code for the product variant. Applies only to the stores that have the Avalara AvaTax app installed.
   * @deprecated This field should no longer be used in new integrations. This field will not be available in future API versions.
   */
  taxCode?: Maybe<Scalars['String']['output']>; /** Whether a tax is charged when the product variant is sold. */
  taxable: Scalars['Boolean']['output']; /** The title of the product variant. */
  title: Scalars['String']['output']; /** The published translations associated with the resource. */
  translations: Array<Translation>; /** The unit price value for the variant based on the variant measurement. */
  unitPrice?: Maybe<MoneyV2>; /** The unit price measurement for the variant. */
  unitPriceMeasurement?: Maybe<UnitPriceMeasurement>; /** The date and time (ISO 8601 format) when the product variant was last modified. */
  updatedAt: Scalars['DateTime']['output'];
};
/**
 * A product variant component that is included within a bundle.
 *
 * These are the individual product variants that make up a bundle product,
 * where each component has a specific required quantity.
 */
type ProductVariantComponent = Node & {
  __typename?: 'ProductVariantComponent'; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The product variant associated with the component. */
  productVariant: ProductVariant; /** The required quantity of the component. */
  quantity: Scalars['Int']['output'];
};
/** An auto-generated type for paginating through multiple ProductVariantComponents. */
type ProductVariantComponentConnection = {
  __typename?: 'ProductVariantComponentConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ProductVariantComponentEdge>; /** A list of nodes that are contained in ProductVariantComponentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<ProductVariantComponent>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one ProductVariantComponent and a cursor during pagination. */
type ProductVariantComponentEdge = {
  __typename?: 'ProductVariantComponentEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ProductVariantComponentEdge. */
  node: ProductVariantComponent;
};
/** An auto-generated type for paginating through multiple ProductVariants. */
type ProductVariantConnection = {
  __typename?: 'ProductVariantConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ProductVariantEdge>; /** A list of nodes that are contained in ProductVariantEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<ProductVariant>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/**
 * The price of a product variant in a specific country.
 * Prices vary between countries.
 */
type ProductVariantContextualPricing = {
  __typename?: 'ProductVariantContextualPricing'; /** The final compare-at price after all adjustments are applied. */
  compareAtPrice?: Maybe<MoneyV2>; /** The final price after all adjustments are applied. */
  price: MoneyV2; /** A list of quantity breaks for the product variant. */
  quantityPriceBreaks: QuantityPriceBreakConnection; /** The quantity rule applied for a given context. */
  quantityRule: QuantityRule; /** The unit price value for the given context based on the variant measurement. */
  unitPrice?: Maybe<MoneyV2>;
};
/** An auto-generated type which holds one ProductVariant and a cursor during pagination. */
type ProductVariantEdge = {
  __typename?: 'ProductVariantEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ProductVariantEdge. */
  node: ProductVariant;
};
/** The valid values for the inventory policy of a product variant once it is out of stock. */
declare enum ProductVariantInventoryPolicy {
  /** Customers can buy this product variant after it's out of stock. */
  Continue = 'CONTINUE',
  /** Customers can't buy this product variant after it's out of stock. */
  Deny = 'DENY'
}
/** The compare-at price and price of a variant sharing a currency. */
type ProductVariantPricePair = {
  __typename?: 'ProductVariantPricePair'; /** The compare-at price of the variant with associated currency. */
  compareAtPrice?: Maybe<MoneyV2>; /** The price of the variant with associated currency. */
  price: MoneyV2;
};
/** An auto-generated type for paginating through multiple ProductVariantPricePairs. */
type ProductVariantPricePairConnection = {
  __typename?: 'ProductVariantPricePairConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ProductVariantPricePairEdge>; /** A list of nodes that are contained in ProductVariantPricePairEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<ProductVariantPricePair>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one ProductVariantPricePair and a cursor during pagination. */
type ProductVariantPricePairEdge = {
  __typename?: 'ProductVariantPricePairEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ProductVariantPricePairEdge. */
  node: ProductVariantPricePair;
};
/**
 * A group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) that are published to an app.
 *
 * Each publication manages which products and collections display on its associated [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel). Merchants can automatically publish products when they're created if [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.autoPublish) is enabled, or manually control publication through publication records.
 *
 * Publications support scheduled publishing through future publish dates for online store channels, allowing merchants to coordinate product launches and promotional campaigns. The [`catalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.catalog) field links to pricing and availability rules specific to that publication's context.
 */
type Publication = Node & {
  __typename?: 'Publication';
  /**
   * The app associated with the publication.
   * @deprecated Use [AppCatalog.apps](https://shopify.dev/api/admin-graphql/unstable/objects/AppCatalog#connection-appcatalog-apps) instead.
   */
  app: App; /** Whether new products are automatically published to this publication. */
  autoPublish: Scalars['Boolean']['output']; /** The catalog associated with the publication. */
  catalog?: Maybe<Catalog>; /** The list of collection publication records, each representing the publication status and details for a collection published to this publication (typically channel). */
  collectionPublicationsV3: ResourcePublicationConnection; /** The list of collections published to the publication. */
  collections: CollectionConnection; /** Whether the collection is available to the publication. */
  hasCollection: Scalars['Boolean']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The list of products included, but not necessarily published, in the publication. */
  includedProducts: ProductConnection; /** The count of products included in the publication. Limited to a maximum of 10000 by default. */
  includedProductsCount?: Maybe<Count>;
  /**
   * Name of the publication.
   * @deprecated Use [Catalog.title](https://shopify.dev/api/admin-graphql/unstable/interfaces/Catalog#field-catalog-title) instead.
   */
  name: Scalars['String']['output']; /** A background operation associated with this publication. */
  operation?: Maybe<PublicationOperation>; /** The product publications for the list of products published to the publication. */
  productPublicationsV3: ResourcePublicationConnection; /** The list of products published to the publication. */
  products: ProductConnection; /** Whether the publication supports future publishing. */
  supportsFuturePublishing: Scalars['Boolean']['output'];
};
/** An auto-generated type for paginating through multiple Publications. */
type PublicationConnection = {
  __typename?: 'PublicationConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<PublicationEdge>; /** A list of nodes that are contained in PublicationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<Publication>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one Publication and a cursor during pagination. */
type PublicationEdge = {
  __typename?: 'PublicationEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of PublicationEdge. */
  node: Publication;
};
/** The possible types of publication operations. */
type PublicationOperation = AddAllProductsOperation | CatalogCsvOperation | PublicationResourceOperation;
/** A bulk update operation on a publication. */
type PublicationResourceOperation = Node & ResourceOperation & {
  __typename?: 'PublicationResourceOperation'; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The count of processed rows, summing imported, failed, and skipped rows. */
  processedRowCount?: Maybe<Scalars['Int']['output']>; /** Represents a rows objects within this background operation. */
  rowCount?: Maybe<RowCount>; /** The status of this operation. */
  status: ResourceOperationStatus;
};
/**
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
type Publishable = {
  /**
   * The number of
   * [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)
   * that a resource is published to, without
   * [feedback errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback).
   */
  availablePublicationsCount?: Maybe<Count>;
  /**
   * The number of
   * [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)
   * that a resource is published to, without
   * [feedback errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback).
   * @deprecated Use `resourcePublicationsCount` instead.
   */
  publicationCount: Scalars['Int']['output'];
  /**
   * Whether the resource is published to a specific channel.
   * @deprecated Use `publishedOnPublication` instead.
   */
  publishedOnChannel: Scalars['Boolean']['output'];
  /**
   * Whether the resource is published to a
   * [channel](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel).
   * For example, the resource might be published to the online store channel.
   * @deprecated Use `publishedOnCurrentPublication` instead.
   */
  publishedOnCurrentChannel: Scalars['Boolean']['output'];
  /**
   * Whether the resource is published to the app's
   * [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).
   * For example, the resource might be published to the app's online store channel.
   * @deprecated Use `publishedOnPublication` instead.
   */
  publishedOnCurrentPublication: Scalars['Boolean']['output'];
  /**
   * Whether the resource is published to a specified
   * [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).
   */
  publishedOnPublication: Scalars['Boolean']['output'];
  /**
   * The list of resources that are published to a
   * [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).
   */
  resourcePublications: ResourcePublicationConnection;
  /**
   * The number of
   * [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)
   * that a resource is published to, without
   * [feedback errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback).
   */
  resourcePublicationsCount?: Maybe<Count>;
  /**
   * The list of resources that are either published or staged to be published to a
   * [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).
   */
  resourcePublicationsV2: ResourcePublicationV2Connection;
  /**
   * The list of channels that the resource is not published to.
   * @deprecated Use `unpublishedPublications` instead.
   */
  unpublishedChannels: ChannelConnection;
  /**
   * The list of [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)
   * that the resource isn't published to.
   */
  unpublishedPublications: PublicationConnection;
};
/** Represents information about the purchasing company for the order or draft order. */
type PurchasingCompany = {
  __typename?: 'PurchasingCompany'; /** The company associated to the order or draft order. */
  company: Company; /** The company contact associated to the order or draft order. */
  contact?: Maybe<CompanyContact>; /** The company location associated to the order or draft order. */
  location: CompanyLocation;
};
/** Represents information about the purchasing entity for the order or draft order. */
type PurchasingEntity = Customer | PurchasingCompany;
/**
 * Quantity price breaks lets you offer different rates that are based on the
 * amount of a specific variant being ordered.
 */
type QuantityPriceBreak = Node & {
  __typename?: 'QuantityPriceBreak'; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** Minimum quantity required to reach new quantity break price. */
  minimumQuantity: Scalars['Int']['output']; /** The price of variant after reaching the minimum quanity. */
  price: MoneyV2; /** The price list associated with this quantity break. */
  priceList: PriceList; /** The product variant associated with this quantity break. */
  variant: ProductVariant;
};
/** An auto-generated type for paginating through multiple QuantityPriceBreaks. */
type QuantityPriceBreakConnection = {
  __typename?: 'QuantityPriceBreakConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<QuantityPriceBreakEdge>; /** A list of nodes that are contained in QuantityPriceBreakEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<QuantityPriceBreak>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one QuantityPriceBreak and a cursor during pagination. */
type QuantityPriceBreakEdge = {
  __typename?: 'QuantityPriceBreakEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of QuantityPriceBreakEdge. */
  node: QuantityPriceBreak;
};
/** The quantity rule for the product variant in a given context. */
type QuantityRule = {
  __typename?: 'QuantityRule';
  /**
   * The value that specifies the quantity increment between minimum and maximum of the rule.
   * Only quantities divisible by this value will be considered valid.
   *
   * The increment must be lower than or equal to the minimum and the maximum, and both minimum and maximum
   * must be divisible by this value.
   */
  increment: Scalars['Int']['output']; /** Whether the quantity rule fields match one increment, one minimum and no maximum. */
  isDefault: Scalars['Boolean']['output'];
  /**
   * An optional value that defines the highest allowed quantity purchased by the customer.
   * If defined, maximum must be lower than or equal to the minimum and must be a multiple of the increment.
   */
  maximum?: Maybe<Scalars['Int']['output']>;
  /**
   * The value that defines the lowest allowed quantity purchased by the customer.
   * The minimum must be a multiple of the quantity rule's increment.
   */
  minimum: Scalars['Int']['output']; /** Whether the values of the quantity rule were explicitly set. */
  originType: QuantityRuleOriginType; /** The product variant for which the quantity rule is applied. */
  productVariant: ProductVariant;
};
/** An auto-generated type for paginating through multiple QuantityRules. */
type QuantityRuleConnection = {
  __typename?: 'QuantityRuleConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<QuantityRuleEdge>; /** A list of nodes that are contained in QuantityRuleEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<QuantityRule>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one QuantityRule and a cursor during pagination. */
type QuantityRuleEdge = {
  __typename?: 'QuantityRuleEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of QuantityRuleEdge. */
  node: QuantityRule;
};
/** The origin of quantity rule on a price list. */
declare enum QuantityRuleOriginType {
  /** Quantity rule is explicitly defined. */
  Fixed = 'FIXED',
  /** Quantity rule falls back to the relative rule. */
  Relative = 'RELATIVE'
}
/**
 * The `Refund` object represents a financial record of money returned to a customer from an order.
 * It provides a comprehensive view of all refunded amounts, transactions, and restocking instructions
 * associated with returning products or correcting order issues.
 *
 * The `Refund` object provides information to:
 *
 * - Process customer returns and issue payments back to customers
 * - Handle partial or full refunds for line items with optional inventory restocking
 * - Refund shipping costs, duties, and additional fees
 * - Issue store credit refunds as an alternative to original payment method returns
 * - Track and reconcile all financial transactions related to refunds
 *
 * Each `Refund` object maintains detailed records of what was refunded, how much was refunded,
 * which payment transactions were involved, and any inventory restocking that occurred. The refund
 * can include multiple components such as product line items, shipping charges, taxes, duties, and
 * additional fees, all calculated with proper currency handling for international orders.
 *
 * Refunds are always associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)
 * and can optionally be linked to a [return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)
 * if the refund was initiated through the returns process. The refund tracks both the presentment currency
 * (what the customer sees) and the shop currency for accurate financial reporting.
 *
 * > Note:
 * > The existence of a `Refund` object doesn't guarantee that the money has been returned to the customer.
 * > The actual financial processing happens through associated
 * > [`OrderTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction)
 * > objects, which can be in various states, such as pending, processing, success, or failure.
 * > To determine if money has actually been refunded, check the
 * > [status](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.status)
 * > of the associated transactions.
 *
 * Learn more about
 * [managing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management),
 * [refunding duties](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/view-and-refund-duties), and
 * [processing refunds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate).
 */
type Refund = LegacyInteroperability & Node & {
  __typename?: 'Refund'; /** The date and time when the refund was created. */
  createdAt?: Maybe<Scalars['DateTime']['output']>; /** A list of the refunded duties as part of this refund. */
  duties?: Maybe<Array<RefundDuty>>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64']['output']; /** The optional note associated with the refund. */
  note?: Maybe<Scalars['String']['output']>; /** The order associated with the refund. */
  order: Order; /** The order adjustments that are attached with the refund. */
  orderAdjustments: OrderAdjustmentConnection; /** The `RefundLineItem` resources attached to the refund. */
  refundLineItems: RefundLineItemConnection; /** The `RefundShippingLine` resources attached to the refund. */
  refundShippingLines: RefundShippingLineConnection; /** The return associated with the refund. */
  return?: Maybe<Return>; /** The staff member who created the refund. */
  staffMember?: Maybe<StaffMember>;
  /**
   * The total amount across all transactions for the refund.
   * @deprecated Use `totalRefundedSet` instead.
   */
  totalRefunded: MoneyV2; /** The total amount across all transactions for the refund, in shop and presentment currencies. */
  totalRefundedSet: MoneyBag; /** The transactions associated with the refund. */
  transactions: OrderTransactionConnection; /** The date and time when the refund was updated. */
  updatedAt: Scalars['DateTime']['output'];
};
/** An auto-generated type for paginating through multiple Refunds. */
type RefundConnection = {
  __typename?: 'RefundConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<RefundEdge>; /** A list of nodes that are contained in RefundEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<Refund>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** Represents a refunded duty. */
type RefundDuty = {
  __typename?: 'RefundDuty'; /** The amount of a refunded duty in shop and presentment currencies. */
  amountSet: MoneyBag; /** The duty associated with this refunded duty. */
  originalDuty?: Maybe<Duty>;
};
/** An auto-generated type which holds one Refund and a cursor during pagination. */
type RefundEdge = {
  __typename?: 'RefundEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of RefundEdge. */
  node: Refund;
};
/**
 * A [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) or [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) being refunded from an order. Each refund line item tracks the quantity, pricing, and restocking details for items returned to the merchant.
 *
 * The refund line item links to the original [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) from the [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and includes financial information such as the refunded price, subtotal, and taxes in both shop and presentment currencies. The [`restockType`](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem#field-RefundLineItem.fields.restockType) field indicates whether and how the merchant restocks the returned items to inventory, while the [`location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem#field-RefundLineItem.fields.location) field specifies where restocking occurs.
 */
type RefundLineItem = {
  __typename?: 'RefundLineItem'; /** A globally-unique ID. */
  id?: Maybe<Scalars['ID']['output']>; /** The `LineItem` resource associated to the refunded line item. */
  lineItem: LineItem; /** The inventory restock location. */
  location?: Maybe<Location>;
  /**
   * The price of a refunded line item.
   * @deprecated Use `priceSet` instead.
   */
  price: Scalars['Money']['output']; /** The price of a refunded line item in shop and presentment currencies. */
  priceSet: MoneyBag; /** The quantity of a refunded line item. */
  quantity: Scalars['Int']['output']; /** The type of restock for the refunded line item. */
  restockType: RefundLineItemRestockType; /** Whether the refunded line item was restocked. Not applicable in the context of a SuggestedRefund. */
  restocked: Scalars['Boolean']['output'];
  /**
   * The subtotal price of a refunded line item.
   * @deprecated Use `subtotalSet` instead.
   */
  subtotal: Scalars['Money']['output']; /** The subtotal price of a refunded line item in shop and presentment currencies. */
  subtotalSet: MoneyBag;
  /**
   * The total tax charged on a refunded line item.
   * @deprecated Use `totalTaxSet` instead.
   */
  totalTax: Scalars['Money']['output']; /** The total tax charged on a refunded line item in shop and presentment currencies. */
  totalTaxSet: MoneyBag;
};
/** An auto-generated type for paginating through multiple RefundLineItems. */
type RefundLineItemConnection = {
  __typename?: 'RefundLineItemConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<RefundLineItemEdge>; /** A list of nodes that are contained in RefundLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<RefundLineItem>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one RefundLineItem and a cursor during pagination. */
type RefundLineItemEdge = {
  __typename?: 'RefundLineItemEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of RefundLineItemEdge. */
  node: RefundLineItem;
};
/** The type of restock performed for a particular refund line item. */
declare enum RefundLineItemRestockType {
  /** The refund line item was canceled. Use this when restocking unfulfilled line items. */
  Cancel = 'CANCEL',
  /** Deprecated. The refund line item was restocked, without specifically beingidentified as a return or cancelation. This value is not accepted when creating new refunds. */
  LegacyRestock = 'LEGACY_RESTOCK',
  /** Refund line item was not restocked. */
  NoRestock = 'NO_RESTOCK',
  /** The refund line item was returned. Use this when restocking line items that were fulfilled. */
  Return = 'RETURN'
}
/** The financial transfer details for a return outcome that results in a refund. */
type RefundReturnOutcome = {
  __typename?: 'RefundReturnOutcome'; /** The total monetary value to be refunded in shop and presentment currencies. */
  amount: MoneyBag; /** A list of suggested refund methods. */
  suggestedRefundMethods: Array<SuggestedRefundMethod>; /** A list of suggested order transactions. */
  suggestedTransactions: Array<SuggestedOrderTransaction>;
};
/** A shipping line item that's included in a refund. */
type RefundShippingLine = Node & {
  __typename?: 'RefundShippingLine'; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The `ShippingLine` resource associated to the refunded shipping line item. */
  shippingLine: ShippingLine; /** The subtotal amount of the refund shipping line in shop and presentment currencies. */
  subtotalAmountSet: MoneyBag; /** The tax amount of the refund shipping line in shop and presentment currencies. */
  taxAmountSet: MoneyBag;
};
/** An auto-generated type for paginating through multiple RefundShippingLines. */
type RefundShippingLineConnection = {
  __typename?: 'RefundShippingLineConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<RefundShippingLineEdge>; /** A list of nodes that are contained in RefundShippingLineEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<RefundShippingLine>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one RefundShippingLine and a cursor during pagination. */
type RefundShippingLineEdge = {
  __typename?: 'RefundShippingLineEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of RefundShippingLineEdge. */
  node: RefundShippingLine;
};
/** A condition checking the visitor's region. */
type RegionsCondition = {
  __typename?: 'RegionsCondition'; /** The application level for the condition. */
  applicationLevel?: Maybe<MarketConditionApplicationType>; /** The regions that comprise the market. */
  regions: MarketRegionConnection;
};
/**
 * An alert message that appears in the Shopify admin about a problem with a store resource, with 1 or more actions to take. For example, you could use an alert to indicate that you're not charging taxes on some product variants.
 * They can optionally have a specific icon and be dismissed by merchants.
 */
type ResourceAlert = {
  __typename?: 'ResourceAlert';
  /**
   * Buttons in the alert that link to related information.
   * For example, _Edit variants_.
   */
  actions: Array<ResourceAlertAction>; /** The secondary text in the alert that includes further information or instructions about how to solve a problem. */
  content: Scalars['HTML']['output'];
  /**
   * Unique identifier that appears when an alert is manually closed by the merchant.
   * Most alerts can't be manually closed.
   */
  dismissibleHandle?: Maybe<Scalars['String']['output']>; /** An icon that's optionally displayed with the alert. */
  icon?: Maybe<ResourceAlertIcon>; /** Indication of how important the alert is. */
  severity: ResourceAlertSeverity; /** The primary text in the alert that includes information or describes the problem. */
  title: Scalars['String']['output'];
};
/** An action associated to a resource alert, such as editing variants. */
type ResourceAlertAction = {
  __typename?: 'ResourceAlertAction'; /** Whether the action appears as a button or as a link. */
  primary: Scalars['Boolean']['output']; /** Resource for the action to show. */
  show?: Maybe<Scalars['String']['output']>; /** The text for the button in the alert. For example, _Edit variants_. */
  title: Scalars['String']['output']; /** The target URL that the button links to. */
  url: Scalars['URL']['output'];
};
/** The available icons for resource alerts. */
declare enum ResourceAlertIcon {
  /** A checkmark inside a circle. */
  CheckmarkCircle = 'CHECKMARK_CIRCLE',
  /** A lowercase `i` inside a circle. */
  InformationCircle = 'INFORMATION_CIRCLE'
}
/** The possible severity levels for a resource alert. */
declare enum ResourceAlertSeverity {
  /** Indicates a critical alert. For example, a blocked app. */
  Critical = 'CRITICAL',
  /** Indicates a neutral alert. For example, an accepted dispute. */
  Default = 'DEFAULT',
  /** @deprecated `ERROR` severity is being deprecated in favour of `WARNING` or `CRITICAL` instead. */
  Error = 'ERROR',
  /** Indicates an informative alert. For example, an escalated dispute. */
  Info = 'INFO',
  /** Indicates a success alert. For example, a winning a dispute. */
  Success = 'SUCCESS',
  /** Indicates an informative alert. For example, a new dispute. */
  Warning = 'WARNING'
}
/** Represents feedback from apps about a resource, and the steps required to set up the apps on the shop. */
type ResourceFeedback = {
  __typename?: 'ResourceFeedback';
  /**
   * Feedback from an app about the steps a merchant needs to take to set up the app on their store.
   * @deprecated Use `details` instead.
   */
  appFeedback: Array<AppFeedback>; /** List of AppFeedback detailing issues regarding a resource. */
  details: Array<AppFeedback>; /** Summary of resource feedback pertaining to the resource. */
  summary: Scalars['String']['output'];
};
/** The state of the resource feedback. */
declare enum ResourceFeedbackState {
  /** No action required from merchant. */
  Accepted = 'ACCEPTED',
  /** The merchant needs to resolve an issue with the resource. */
  RequiresAction = 'REQUIRES_ACTION'
}
/** Represents a merchandising background operation interface. */
type ResourceOperation = {
  /** A globally-unique ID. */id: Scalars['ID']['output']; /** The count of processed rows, summing imported, failed, and skipped rows. */
  processedRowCount?: Maybe<Scalars['Int']['output']>; /** Represents a rows objects within this background operation. */
  rowCount?: Maybe<RowCount>; /** The status of this operation. */
  status: ResourceOperationStatus;
};
/** Represents the state of this catalog operation. */
declare enum ResourceOperationStatus {
  /** Operation is currently running. */
  Active = 'ACTIVE',
  /** Operation is complete. */
  Complete = 'COMPLETE',
  /** Operation has been created. */
  Created = 'CREATED'
}
/**
 * A resource publication represents information about the publication of a resource.
 * An instance of `ResourcePublication`, unlike `ResourcePublicationV2`, can be neither published or scheduled to be published.
 *
 * See [ResourcePublicationV2](/api/admin-graphql/latest/objects/ResourcePublicationV2) for more context.
 */
type ResourcePublication = {
  __typename?: 'ResourcePublication';
  /**
   * The channel the resource publication is published to.
   * @deprecated Use `publication` instead.
   */
  channel: Channel;
  /**
   * Whether the resource publication is published. Also returns true if the resource publication is scheduled to be published.
   * If false, then the resource publication is neither published nor scheduled to be published.
   */
  isPublished: Scalars['Boolean']['output']; /** The publication the resource publication is published to. */
  publication: Publication;
  /**
   * The date that the resource publication was or is going to be published to the publication.
   * If the product isn't published, then this field returns an epoch timestamp.
   */
  publishDate: Scalars['DateTime']['output']; /** The resource published to the publication. */
  publishable: Publishable;
};
/** An auto-generated type for paginating through multiple ResourcePublications. */
type ResourcePublicationConnection = {
  __typename?: 'ResourcePublicationConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ResourcePublicationEdge>; /** A list of nodes that are contained in ResourcePublicationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<ResourcePublication>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one ResourcePublication and a cursor during pagination. */
type ResourcePublicationEdge = {
  __typename?: 'ResourcePublicationEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ResourcePublicationEdge. */
  node: ResourcePublication;
};
/**
 * A resource publication represents information about the publication of a resource.
 * Unlike `ResourcePublication`, an instance of `ResourcePublicationV2` can't be unpublished. It must either be published or scheduled to be published.
 *
 * See [ResourcePublication](/api/admin-graphql/latest/objects/ResourcePublication) for more context.
 */
type ResourcePublicationV2 = {
  __typename?: 'ResourcePublicationV2';
  /**
   * Whether the resource publication is published. If true, then the resource publication is published to the publication.
   * If false, then the resource publication is staged to be published to the publication.
   */
  isPublished: Scalars['Boolean']['output']; /** The publication the resource publication is published to. */
  publication: Publication; /** The date that the resource publication was or is going to be published to the publication. */
  publishDate?: Maybe<Scalars['DateTime']['output']>; /** The resource published to the publication. */
  publishable: Publishable;
};
/** An auto-generated type for paginating through multiple ResourcePublicationV2s. */
type ResourcePublicationV2Connection = {
  __typename?: 'ResourcePublicationV2Connection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ResourcePublicationV2Edge>; /** A list of nodes that are contained in ResourcePublicationV2Edge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<ResourcePublicationV2>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one ResourcePublicationV2 and a cursor during pagination. */
type ResourcePublicationV2Edge = {
  __typename?: 'ResourcePublicationV2Edge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ResourcePublicationV2Edge. */
  node: ResourcePublicationV2;
};
/** Information about product is restricted for a given resource. */
type RestrictedForResource = {
  __typename?: 'RestrictedForResource'; /** Returns true when the product is restricted for the given resource. */
  restricted: Scalars['Boolean']['output']; /** Restriction reason for the given resource. */
  restrictedReason: Scalars['String']['output'];
};
/**
 * The `Return` object represents the intent of a buyer to ship one or more items from an order back to a merchant
 * or a third-party fulfillment location. A return is associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)
 * and can include multiple return [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem).
 * Each return has a [status](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps#return-statuses),
 * which indicates the state of the return.
 *
 * Use the `Return` object to capture the financial, logistical,
 * and business intent of a return. For example, you can identify eligible items for a return and issue customers
 * a refund for returned items on behalf of the merchant.
 *
 * Learn more about providing a
 * [return management workflow](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management)
 * for merchants. You can also manage [exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges),
 * [reverse fulfillment orders](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-fulfillment-orders),
 * and [reverse deliveries](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-deliveries)
 * on behalf of merchants.
 */
type Return = Node & {
  __typename?: 'Return'; /** The date and time when the return was closed. */
  closedAt?: Maybe<Scalars['DateTime']['output']>; /** The date and time when the return was created. */
  createdAt: Scalars['DateTime']['output']; /** Additional information about the declined return. */
  decline?: Maybe<ReturnDecline>; /** The exchange line items attached to the return. */
  exchangeLineItems: ExchangeLineItemConnection; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The name of the return. */
  name: Scalars['String']['output']; /** The order that the return belongs to. */
  order: Order; /** The list of refunds associated with the return. */
  refunds: RefundConnection; /** The date and time when the return was approved. */
  requestApprovedAt?: Maybe<Scalars['DateTime']['output']>; /** The return line items attached to the return. */
  returnLineItems: ReturnLineItemTypeConnection; /** The return shipping fees for the return. */
  returnShippingFees: Array<ReturnShippingFee>; /** The list of reverse fulfillment orders for the return. */
  reverseFulfillmentOrders: ReverseFulfillmentOrderConnection; /** The status of the return. */
  status: ReturnStatus; /** A suggested financial outcome for the return. */
  suggestedFinancialOutcome?: Maybe<SuggestedReturnFinancialOutcome>;
  /**
   * A suggested refund for the return.
   * @deprecated Use `suggestedFinancialOutcome` instead.
   */
  suggestedRefund?: Maybe<SuggestedReturnRefund>; /** The sum of all return line item quantities for the return. */
  totalQuantity: Scalars['Int']['output'];
};
/** An auto-generated type for paginating through multiple Returns. */
type ReturnConnection = {
  __typename?: 'ReturnConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ReturnEdge>; /** A list of nodes that are contained in ReturnEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<Return>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** Additional information about why a merchant declined the customer's return request. */
type ReturnDecline = {
  __typename?: 'ReturnDecline';
  /**
   * The notification message sent to the customer about their declined return request.
   * Maximum length: 500 characters.
   */
  note?: Maybe<Scalars['String']['output']>; /** The reason the customer's return request was declined. */
  reason: ReturnDeclineReason;
};
/** The reason why the merchant declined a customer's return request. */
declare enum ReturnDeclineReason {
  /** The return contains final sale items. */
  FinalSale = 'FINAL_SALE',
  /** The return is declined for another reason. */
  Other = 'OTHER',
  /** The return period has ended. */
  ReturnPeriodEnded = 'RETURN_PERIOD_ENDED'
}
/** An auto-generated type which holds one Return and a cursor during pagination. */
type ReturnEdge = {
  __typename?: 'ReturnEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ReturnEdge. */
  node: Return;
};
/** A return line item of any type. */
type ReturnLineItemType = {
  /** A note from the customer that describes the item to be returned. Maximum length: 300 characters. */customerNote?: Maybe<Scalars['String']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The quantity that can be processed. */
  processableQuantity: Scalars['Int']['output']; /** The quantity that has been processed. */
  processedQuantity: Scalars['Int']['output']; /** The quantity being returned. */
  quantity: Scalars['Int']['output']; /** The quantity that can be refunded. */
  refundableQuantity: Scalars['Int']['output']; /** The quantity that was refunded. */
  refundedQuantity: Scalars['Int']['output']; /** The reason for returning the item. */
  returnReason: ReturnReason; /** Additional information about the reason for the return. Maximum length: 255 characters. */
  returnReasonNote: Scalars['String']['output']; /** The quantity that has't been processed. */
  unprocessedQuantity: Scalars['Int']['output'];
};
/** An auto-generated type for paginating through multiple ReturnLineItemTypes. */
type ReturnLineItemTypeConnection = {
  __typename?: 'ReturnLineItemTypeConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ReturnLineItemTypeEdge>; /** A list of nodes that are contained in ReturnLineItemTypeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<ReturnLineItemType>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one ReturnLineItemType and a cursor during pagination. */
type ReturnLineItemTypeEdge = {
  __typename?: 'ReturnLineItemTypeEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ReturnLineItemTypeEdge. */
  node: ReturnLineItemType;
};
/** The financial transfer details for the return outcome. */
type ReturnOutcomeFinancialTransfer = InvoiceReturnOutcome | RefundReturnOutcome;
/** The reason for returning the return line item. */
declare enum ReturnReason {
  /** The item is returned because the buyer did not like the color. Displays as **Color**. */
  Color = 'COLOR',
  /** The item is returned because it is damaged or defective. Displays as **Damaged or defective**. */
  Defective = 'DEFECTIVE',
  /** The item is returned because it was not as described. Displays as **Item not as described**. */
  NotAsDescribed = 'NOT_AS_DESCRIBED',
  /** The item is returned for another reason. For this value, a return reason note is also provided. Displays as **Other**. */
  Other = 'OTHER',
  /** The item is returned because the size was too large. Displays as **Size was too large**. */
  SizeTooLarge = 'SIZE_TOO_LARGE',
  /** The item is returned because the size was too small. Displays as **Size was too small**. */
  SizeTooSmall = 'SIZE_TOO_SMALL',
  /** The item is returned because the buyer did not like the style. Displays as **Style**. */
  Style = 'STYLE',
  /** The item is returned because of an unknown reason. Displays as **Unknown**. */
  Unknown = 'UNKNOWN',
  /** The item is returned because the customer changed their mind. Displays as **Customer changed their mind**. */
  Unwanted = 'UNWANTED',
  /** The item is returned because the customer received the wrong one. Displays as **Received the wrong item**. */
  WrongItem = 'WRONG_ITEM'
}
/** A return shipping fee is a fee captured as part of a return to cover the costs of shipping the return. */
type ReturnShippingFee = Fee & {
  __typename?: 'ReturnShippingFee'; /** The amount of the return shipping fee, in shop and presentment currencies. */
  amountSet: MoneyBag; /** The unique ID for the Fee. */
  id: Scalars['ID']['output'];
};
/** The status of a return. */
declare enum ReturnStatus {
  /** The return has been canceled. */
  Canceled = 'CANCELED',
  /** The return has been completed. */
  Closed = 'CLOSED',
  /** The return was declined. */
  Declined = 'DECLINED',
  /** The return is in progress. */
  Open = 'OPEN',
  /** The return was requested. */
  Requested = 'REQUESTED'
}
/**
 * A reverse delivery is a post-fulfillment object that represents a buyer sending a package to a merchant.
 * For example, a buyer requests a return, and a merchant sends the buyer a shipping label.
 * The reverse delivery contains the context of the items sent back, how they're being sent back
 * (for example, a shipping label), and the current state of the delivery (tracking information).
 */
type ReverseDelivery = Node & {
  __typename?: 'ReverseDelivery'; /** The deliverable associated with the reverse delivery. */
  deliverable?: Maybe<ReverseDeliveryDeliverable>; /** The ID of the reverse delivery. */
  id: Scalars['ID']['output']; /** The reverse delivery line items attached to the reverse delivery. */
  reverseDeliveryLineItems: ReverseDeliveryLineItemConnection; /** The `ReverseFulfillmentOrder` associated with the reverse delivery. */
  reverseFulfillmentOrder: ReverseFulfillmentOrder;
};
/** An auto-generated type for paginating through multiple ReverseDeliveries. */
type ReverseDeliveryConnection = {
  __typename?: 'ReverseDeliveryConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ReverseDeliveryEdge>; /** A list of nodes that are contained in ReverseDeliveryEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<ReverseDelivery>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** The delivery method and artifacts associated with a reverse delivery. */
type ReverseDeliveryDeliverable = ReverseDeliveryShippingDeliverable;
/** An auto-generated type which holds one ReverseDelivery and a cursor during pagination. */
type ReverseDeliveryEdge = {
  __typename?: 'ReverseDeliveryEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ReverseDeliveryEdge. */
  node: ReverseDelivery;
};
/** The return label file information for a reverse delivery. */
type ReverseDeliveryLabelV2 = {
  __typename?: 'ReverseDeliveryLabelV2'; /** The date and time when the reverse delivery label was created. */
  createdAt: Scalars['DateTime']['output']; /** A public link that can be used to download the label image. */
  publicFileUrl?: Maybe<Scalars['URL']['output']>; /** The date and time when the reverse delivery label was updated. */
  updatedAt: Scalars['DateTime']['output'];
};
/** The details about a reverse delivery line item. */
type ReverseDeliveryLineItem = Node & {
  __typename?: 'ReverseDeliveryLineItem'; /** The dispositions of the item. */
  dispositions: Array<ReverseFulfillmentOrderDisposition>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The expected number of units. */
  quantity: Scalars['Int']['output']; /** The corresponding reverse fulfillment order line item. */
  reverseFulfillmentOrderLineItem: ReverseFulfillmentOrderLineItem;
};
/** An auto-generated type for paginating through multiple ReverseDeliveryLineItems. */
type ReverseDeliveryLineItemConnection = {
  __typename?: 'ReverseDeliveryLineItemConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ReverseDeliveryLineItemEdge>; /** A list of nodes that are contained in ReverseDeliveryLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<ReverseDeliveryLineItem>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one ReverseDeliveryLineItem and a cursor during pagination. */
type ReverseDeliveryLineItemEdge = {
  __typename?: 'ReverseDeliveryLineItemEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ReverseDeliveryLineItemEdge. */
  node: ReverseDeliveryLineItem;
};
/** A reverse shipping deliverable that may include a label and tracking information. */
type ReverseDeliveryShippingDeliverable = {
  __typename?: 'ReverseDeliveryShippingDeliverable'; /** The return label attached to the reverse delivery. */
  label?: Maybe<ReverseDeliveryLabelV2>; /** The information to track the reverse delivery. */
  tracking?: Maybe<ReverseDeliveryTrackingV2>;
};
/** Represents the information used to track a reverse delivery. */
type ReverseDeliveryTrackingV2 = {
  __typename?: 'ReverseDeliveryTrackingV2'; /** The provider of the tracking information, in a human-readable format for display purposes. */
  carrierName?: Maybe<Scalars['String']['output']>; /** The identifier used by the courier to identify the shipment. */
  number?: Maybe<Scalars['String']['output']>; /** The URL to track a shipment. */
  url?: Maybe<Scalars['URL']['output']>;
};
/**
 * A group of one or more items in a return that will be processed at a fulfillment service.
 * There can be more than one reverse fulfillment order for a return at a given location.
 */
type ReverseFulfillmentOrder = Node & {
  __typename?: 'ReverseFulfillmentOrder'; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The list of reverse fulfillment order line items for the reverse fulfillment order. */
  lineItems: ReverseFulfillmentOrderLineItemConnection; /** The order associated with the reverse fulfillment order. */
  order?: Maybe<Order>; /** The list of reverse deliveries for the reverse fulfillment order. */
  reverseDeliveries: ReverseDeliveryConnection; /** The status of the reverse fulfillment order. */
  status: ReverseFulfillmentOrderStatus;
  /**
   * The current confirmation for the reverse fulfillment order from a third-party logistics service.
   * If no third-party service is involved, then this value is `nil`.
   */
  thirdPartyConfirmation?: Maybe<ReverseFulfillmentOrderThirdPartyConfirmation>;
};
/** An auto-generated type for paginating through multiple ReverseFulfillmentOrders. */
type ReverseFulfillmentOrderConnection = {
  __typename?: 'ReverseFulfillmentOrderConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ReverseFulfillmentOrderEdge>; /** A list of nodes that are contained in ReverseFulfillmentOrderEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<ReverseFulfillmentOrder>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** The details of the arrangement of an item. */
type ReverseFulfillmentOrderDisposition = Node & {
  __typename?: 'ReverseFulfillmentOrderDisposition'; /** The date and time when the disposition was created. */
  createdAt: Scalars['DateTime']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The location where the disposition occurred. */
  location?: Maybe<Location>; /** The number of disposed units. */
  quantity: Scalars['Int']['output']; /** The final arrangement of an item. */
  type: ReverseFulfillmentOrderDispositionType;
};
/** The final arrangement of an item from a reverse fulfillment order. */
declare enum ReverseFulfillmentOrderDispositionType {
  /** An item that was expected but absent. */
  Missing = 'MISSING',
  /** An item that wasn't restocked. */
  NotRestocked = 'NOT_RESTOCKED',
  /** An item that requires further processing before being restocked or discarded. */
  ProcessingRequired = 'PROCESSING_REQUIRED',
  /** An item that was restocked. */
  Restocked = 'RESTOCKED'
}
/** An auto-generated type which holds one ReverseFulfillmentOrder and a cursor during pagination. */
type ReverseFulfillmentOrderEdge = {
  __typename?: 'ReverseFulfillmentOrderEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ReverseFulfillmentOrderEdge. */
  node: ReverseFulfillmentOrder;
};
/** The details about a reverse fulfillment order line item. */
type ReverseFulfillmentOrderLineItem = Node & {
  __typename?: 'ReverseFulfillmentOrderLineItem'; /** The dispositions of the item. */
  dispositions: Array<ReverseFulfillmentOrderDisposition>; /** The corresponding fulfillment line item for a reverse fulfillment order line item. */
  fulfillmentLineItem?: Maybe<FulfillmentLineItem>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The total number of units to be processed. */
  totalQuantity: Scalars['Int']['output'];
};
/** An auto-generated type for paginating through multiple ReverseFulfillmentOrderLineItems. */
type ReverseFulfillmentOrderLineItemConnection = {
  __typename?: 'ReverseFulfillmentOrderLineItemConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ReverseFulfillmentOrderLineItemEdge>; /** A list of nodes that are contained in ReverseFulfillmentOrderLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<ReverseFulfillmentOrderLineItem>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one ReverseFulfillmentOrderLineItem and a cursor during pagination. */
type ReverseFulfillmentOrderLineItemEdge = {
  __typename?: 'ReverseFulfillmentOrderLineItemEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ReverseFulfillmentOrderLineItemEdge. */
  node: ReverseFulfillmentOrderLineItem;
};
/** The status of a reverse fulfillment order. */
declare enum ReverseFulfillmentOrderStatus {
  /** The reverse fulfillment order has been canceled. */
  Canceled = 'CANCELED',
  /** The reverse fulfillment order has been completed. */
  Closed = 'CLOSED',
  /** The reverse fulfillment order is in progress. */
  Open = 'OPEN'
}
/** The third-party confirmation of a reverse fulfillment order. */
type ReverseFulfillmentOrderThirdPartyConfirmation = {
  __typename?: 'ReverseFulfillmentOrderThirdPartyConfirmation'; /** The status of the reverse fulfillment order third-party confirmation. */
  status: ReverseFulfillmentOrderThirdPartyConfirmationStatus;
};
/** The status of a reverse fulfillment order third-party confirmation. */
declare enum ReverseFulfillmentOrderThirdPartyConfirmationStatus {
  /** The reverse fulfillment order was accepted by the fulfillment service. */
  Accepted = 'ACCEPTED',
  /** The reverse fulfillment order cancelation was accepted by the fulfillment service. */
  CancelAccepted = 'CANCEL_ACCEPTED',
  /** The reverse fulfillment order cancelation was rejected by the fulfillment service. */
  CancelRejected = 'CANCEL_REJECTED',
  /** The reverse fulfillment order is awaiting acceptance by the fulfillment service. */
  PendingAcceptance = 'PENDING_ACCEPTANCE',
  /** The reverse fulfillment order is awaiting cancelation by the fulfillment service. */
  PendingCancelation = 'PENDING_CANCELATION',
  /** The reverse fulfillment order was rejected by the fulfillment service. */
  Rejected = 'REJECTED'
}
/** List of possible values for a RiskAssessment result. */
declare enum RiskAssessmentResult {
  /** Indicates a high likelihood that the order is fraudulent. */
  High = 'HIGH',
  /** Indicates a low likelihood that the order is fraudulent. */
  Low = 'LOW',
  /** Indicates a medium likelihood that the order is fraudulent. */
  Medium = 'MEDIUM',
  /** Indicates that the risk assessment will not provide a recommendation for the order. */
  None = 'NONE',
  /** Indicates that the risk assessment is still pending. */
  Pending = 'PENDING'
}
/** A risk fact belongs to a single risk assessment and serves to provide additional context for an assessment. Risk facts are not necessarily tied to the result of the recommendation. */
type RiskFact = {
  __typename?: 'RiskFact'; /** A description of the fact. */
  description: Scalars['String']['output']; /** Indicates whether the fact is a negative, neutral or positive contributor with regards to risk. */
  sentiment: RiskFactSentiment;
};
/** List of possible values for a RiskFact sentiment. */
declare enum RiskFactSentiment {
  /** A negative contributor that increases the risk. */
  Negative = 'NEGATIVE',
  /** A neutral contributor with regards to risk. */
  Neutral = 'NEUTRAL',
  /** A positive contributor that lowers the risk. */
  Positive = 'POSITIVE'
}
/** A row count represents rows on background operation. */
type RowCount = {
  __typename?: 'RowCount'; /** Estimated number of rows contained within this background operation. */
  count: Scalars['Int']['output']; /** Whether the operation exceeds max number of reportable rows. */
  exceedsMax: Scalars['Boolean']['output'];
};
/** SEO information. */
type Seo = {
  __typename?: 'SEO'; /** SEO Description. */
  description?: Maybe<Scalars['String']['output']>; /** SEO Title. */
  title?: Maybe<Scalars['String']['output']>;
};
/** An individual sale record associated with a sales agreement. Every money value in an order's sales data is represented in the currency's smallest unit. When amounts are divided across multiple line items, such as taxes or order discounts, the amounts might not divide evenly across all of the line items on the order. To address this, the remaining currency units that couldn't be divided evenly are allocated one at a time, starting with the first line item, until they are all accounted for. In aggregate, the values sum up correctly. In isolation, one line item might have a different tax or discount amount than another line item of the same price, before taxes and discounts. This is because the amount could not be divided evenly across the items. The allocation of currency units across line items is immutable. After they are allocated, currency units are never reallocated or redistributed among the line items. */
type Sale = {
  /** The type of order action that the sale represents. */actionType: SaleActionType; /** The unique ID for the sale. */
  id: Scalars['ID']['output']; /** The line type assocated with the sale. */
  lineType: SaleLineType; /** The number of units either ordered or intended to be returned. */
  quantity?: Maybe<Scalars['Int']['output']>; /** All individual taxes associated with the sale. */
  taxes: Array<SaleTax>; /** The total sale amount after taxes and discounts. */
  totalAmount: MoneyBag; /** The total discounts allocated to the sale after taxes. */
  totalDiscountAmountAfterTaxes: MoneyBag; /** The total discounts allocated to the sale before taxes. */
  totalDiscountAmountBeforeTaxes: MoneyBag; /** The total amount of taxes for the sale. */
  totalTaxAmount: MoneyBag;
};
/** The possible order action types for a sale. */
declare enum SaleActionType {
  /** A purchase or charge. */
  Order = 'ORDER',
  /** A removal or return. */
  Return = 'RETURN',
  /** An unknown order action. Represents new actions that may be added in future versions. */
  Unknown = 'UNKNOWN',
  /** A change to the price, taxes, or discounts for a prior purchase. */
  Update = 'UPDATE'
}
/** An auto-generated type for paginating through multiple Sales. */
type SaleConnection = {
  __typename?: 'SaleConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<SaleEdge>; /** A list of nodes that are contained in SaleEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<Sale>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one Sale and a cursor during pagination. */
type SaleEdge = {
  __typename?: 'SaleEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of SaleEdge. */
  node: Sale;
};
/** The possible line types for a sale record. One of the possible order line types for a sale is an adjustment. Sales adjustments occur when a refund is issued for a line item that is either more or less than the total value of the line item. Examples are restocking fees and goodwill payments. When this happens, Shopify produces a sales agreement with sale records for each line item that is returned or refunded and an additional sale record for the adjustment (for example, a restocking fee). The sales records for the returned or refunded items represent the reversal of the original line item sale value. The additional adjustment sale record represents the difference between the original total value of all line items that were refunded, and the actual amount refunded. */
declare enum SaleLineType {
  /** An additional fee. */
  AdditionalFee = 'ADDITIONAL_FEE',
  /** A sale adjustment. */
  Adjustment = 'ADJUSTMENT',
  /** A duty charge. */
  Duty = 'DUTY',
  /** A fee charge. */
  Fee = 'FEE',
  /** A gift card. */
  GiftCard = 'GIFT_CARD',
  /** A product purchased, returned or exchanged. */
  Product = 'PRODUCT',
  /** A shipping cost. */
  Shipping = 'SHIPPING',
  /** A tip added by the customer. */
  Tip = 'TIP',
  /** An unknown sale line. Represents new types that may be added in future versions. */
  Unknown = 'UNKNOWN'
}
/** The tax allocated to a sale from a single tax line. */
type SaleTax = {
  __typename?: 'SaleTax'; /** The portion of the total tax amount on the related sale that comes from the associated tax line. */
  amount: MoneyBag; /** The unique ID for the sale tax. */
  id: Scalars['ID']['output']; /** The tax line associated with the sale. */
  taxLine: TaxLine;
};
/** A contract between a merchant and a customer to do business. Shopify creates a sales agreement whenever an order is placed, edited, or refunded. A sales agreement has one or more sales records, which provide itemized details about the initial agreement or subsequent changes made to the order. For example, when a customer places an order, Shopify creates the order, generates a sales agreement, and records a sale for each line item purchased in the order. A sale record is specific to a type of order line. Order lines can represent different things such as a purchased product, a tip added by a customer, shipping costs collected at checkout, and more. */
type SalesAgreement = {
  /** The application that created the agreement. */app?: Maybe<App>; /** The date and time at which the agreement occured. */
  happenedAt: Scalars['DateTime']['output']; /** The unique ID for the agreement. */
  id: Scalars['ID']['output']; /** The reason the agremeent was created. */
  reason: OrderActionType; /** The sales associated with the agreement. */
  sales: SaleConnection; /** The staff member associated with the agreement. */
  user?: Maybe<StaffMember>;
};
/** An auto-generated type for paginating through multiple SalesAgreements. */
type SalesAgreementConnection = {
  __typename?: 'SalesAgreementConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<SalesAgreementEdge>; /** A list of nodes that are contained in SalesAgreementEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<SalesAgreement>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one SalesAgreement and a cursor during pagination. */
type SalesAgreementEdge = {
  __typename?: 'SalesAgreementEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of SalesAgreementEdge. */
  node: SalesAgreement;
};
/** A list of search filters along with their specific options in value and label pair for filtering. */
type SearchFilterOptions = {
  __typename?: 'SearchFilterOptions'; /** A list of options that can be use to filter product availability. */
  productAvailability: Array<FilterOption>;
};
/** Represents an individual result returned from a search. */
type SearchResult = {
  __typename?: 'SearchResult'; /** Returns the search result description text. */
  description?: Maybe<Scalars['String']['output']>; /** Returns the Image resource presented to accompany a search result. */
  image?: Maybe<Image>; /** Returns the resource represented by the search result. */
  reference: Node; /** Returns the resource title. */
  title: Scalars['String']['output']; /** Returns the absolute URL to the resource in the search result. */
  url: Scalars['URL']['output'];
};
/** The connection type for SearchResult. */
type SearchResultConnection = {
  __typename?: 'SearchResultConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<SearchResultEdge>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
  /**
   * An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.
   * @deprecated The provided information is not accurate.
   */
  resultsAfterCount: Scalars['Int']['output'];
};
/** An auto-generated type which holds one SearchResult and a cursor during pagination. */
type SearchResultEdge = {
  __typename?: 'SearchResultEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of SearchResultEdge. */
  node: SearchResult;
};
/**
 * A group of [customers](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) that meet specific criteria defined through [ShopifyQL query](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference) conditions. Common use cases for segments include customer analytics, targeted marketing campaigns, and automated discount eligibility.
 *
 * The segment's [`query`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment#field-query) field contains ShopifyQL conditions that determine membership, such as purchase history, location, or engagement patterns. Tracks when the segment was created with [`creationDate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment#field-creationDate) and when it was last modified with [`lastEditDate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment#field-lastEditDate).
 */
type Segment = Node & {
  __typename?: 'Segment'; /** The date and time when the segment was added to the store. */
  creationDate: Scalars['DateTime']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The date and time when the segment was last updated. */
  lastEditDate: Scalars['DateTime']['output']; /** The name of the segment. */
  name: Scalars['String']['output']; /** A precise definition of the segment. The definition is composed of a combination of conditions on facts about customers. */
  query: Scalars['String']['output'];
};
/**
 * Properties used by customers to select a product variant.
 * Products can have multiple options, like different sizes or colors.
 */
type SelectedOption = {
  __typename?: 'SelectedOption'; /** The product option’s name. */
  name: Scalars['String']['output']; /** The product option’s value object. */
  optionValue: ProductOptionValue; /** The product option’s value. */
  value: Scalars['String']['output'];
};
/**
 * How a product can be sold and purchased through recurring billing or deferred purchase options. Defines the specific terms for subscriptions, pre-orders, or try-before-you-buy offers, including when to bill customers, when to fulfill orders, and what pricing adjustments to apply.
 *
 * Each selling plan has billing, delivery, and pricing policies that control the purchase experience. The plan's [`options`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.options) and [`category`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.category) help merchants organize and report on different selling strategies. Plans are grouped within a [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) that associates them with [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects.
 *
 * > Caution:
 * > Selling plans and associated records are automatically deleted 48 hours after a merchant uninstalls the [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) that created them. Back up these records if you need to restore them later.
 *
 * Learn more about [selling plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan).
 */
type SellingPlan = HasMetafieldDefinitions & HasMetafields & HasPublishedTranslations & Node & {
  __typename?: 'SellingPlan'; /** A selling plan policy which describes the recurring billing details. */
  billingPolicy: SellingPlanBillingPolicy; /** The category used to classify the selling plan for reporting purposes. */
  category?: Maybe<SellingPlanCategory>; /** The date and time when the selling plan was created. */
  createdAt: Scalars['DateTime']['output']; /** A selling plan policy which describes the delivery details. */
  deliveryPolicy: SellingPlanDeliveryPolicy; /** Buyer facing string which describes the selling plan commitment. */
  description?: Maybe<Scalars['String']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** When to reserve inventory for a selling plan. */
  inventoryPolicy?: Maybe<SellingPlanInventoryPolicy>;
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   */
  metafield?: Maybe<Metafield>;
  /**
   * List of metafield definitions.
   * @deprecated This field will be removed in a future version. Use `QueryRoot.metafieldDefinitions` instead.
   */
  metafieldDefinitions: MetafieldDefinitionConnection;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   */
  metafields: MetafieldConnection;
  /**
   * A customer-facing description of the selling plan.
   *
   * If your store supports multiple currencies, then don't include country-specific pricing content, such as "Buy monthly, get 10$ CAD off". This field won't be converted to reflect different currencies.
   */
  name: Scalars['String']['output']; /** The values of all options available on the selling plan. Selling plans are grouped together in Liquid when they're created by the same app, and have the same `selling_plan_group.name` and `selling_plan_group.options` values. */
  options: Array<Scalars['String']['output']>; /** Relative position of the selling plan for display. A lower position will be displayed before a higher position. */
  position?: Maybe<Scalars['Int']['output']>; /** Selling plan pricing details. */
  pricingPolicies: Array<SellingPlanPricingPolicy>; /** The published translations associated with the resource. */
  translations: Array<Translation>;
};
/**
 * Specifies the date when delivery or fulfillment is completed by a merchant for a given time cycle. You can also
 * define a cutoff for which customers are eligible to enter this cycle and the desired behavior for customers who
 * start their subscription inside the cutoff period.
 *
 * Some example scenarios where anchors can be useful to implement advanced delivery behavior:
 * - A merchant starts fulfillment on a specific date every month.
 * - A merchant wants to bill the 1st of every quarter.
 * - A customer expects their delivery every Tuesday.
 *
 * For more details, see [About Selling Plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans#anchors).
 */
type SellingPlanAnchor = {
  __typename?: 'SellingPlanAnchor';
  /**
   * The cutoff day for the anchor. Specifies a buffer period before the anchor date for orders to be included in a
   * delivery or fulfillment cycle.
   *
   * If `type` is WEEKDAY, then the value must be between 1-7. Shopify interprets
   * the days of the week according to ISO 8601, where 1 is Monday.
   *
   * If `type` is MONTHDAY, then the value must be between 1-31.
   *
   * If `type` is YEARDAY, then the value must be `null`.
   */
  cutoffDay?: Maybe<Scalars['Int']['output']>;
  /**
   * The day of the anchor.
   *
   * If `type` is WEEKDAY, then the value must be between 1-7. Shopify interprets
   * the days of the week according to ISO 8601, where 1 is Monday.
   *
   * If `type` isn't WEEKDAY, then the value must be between 1-31.
   */
  day: Scalars['Int']['output'];
  /**
   * The month of the anchor. If type is different than YEARDAY, then the value must
   * be `null` or between 1-12.
   */
  month?: Maybe<Scalars['Int']['output']>; /** Represents the anchor type, it can be one one of WEEKDAY, MONTHDAY, YEARDAY. */
  type: SellingPlanAnchorType;
};
/** Represents the anchor type. */
declare enum SellingPlanAnchorType {
  /** Which day of the month, between 1-31. */
  Monthday = 'MONTHDAY',
  /** Which day of the week, between 1-7. */
  Weekday = 'WEEKDAY',
  /** Which days of the month and year, month between 1-12, and day between 1-31. */
  Yearday = 'YEARDAY'
}
/**
 * Represents the billing frequency associated to the selling plan (for example, bill every week, or bill every
 * three months). The selling plan billing policy and associated records (selling plan groups, selling plans, pricing
 * policies, and delivery policy) are deleted 48 hours after a merchant uninstalls their subscriptions app.
 * We recommend backing up these records if you need to restore them later.
 */
type SellingPlanBillingPolicy = SellingPlanFixedBillingPolicy | SellingPlanRecurringBillingPolicy;
/**
 * The category of the selling plan. For the `OTHER` category,
 *          you must fill out our [request form](https://docs.google.com/forms/d/e/1FAIpQLSeU18Xmw0Q61V8wdH-dfGafFqIBfRchQKUO8WAF3yJTvgyyZQ/viewform),
 *          where we'll review your request for a new purchase option.
 */
declare enum SellingPlanCategory {
  /** The selling plan is for anything not in one of the other categories. */
  Other = 'OTHER',
  /** The selling plan is for pre-orders. */
  PreOrder = 'PRE_ORDER',
  /** The selling plan is for subscriptions. */
  Subscription = 'SUBSCRIPTION',
  /** The selling plan is for try before you buy purchases. */
  TryBeforeYouBuy = 'TRY_BEFORE_YOU_BUY'
}
/** The amount charged at checkout when the full amount isn't charged at checkout. */
type SellingPlanCheckoutCharge = {
  __typename?: 'SellingPlanCheckoutCharge'; /** The charge type for the checkout charge. */
  type: SellingPlanCheckoutChargeType; /** The charge value for the checkout charge. */
  value: SellingPlanCheckoutChargeValue;
};
/** The percentage value of the price used for checkout charge. */
type SellingPlanCheckoutChargePercentageValue = {
  __typename?: 'SellingPlanCheckoutChargePercentageValue'; /** The percentage value of the price used for checkout charge. */
  percentage: Scalars['Float']['output'];
};
/** The checkout charge when the full amount isn't charged at checkout. */
declare enum SellingPlanCheckoutChargeType {
  /** The checkout charge is a percentage of the product or variant price. */
  Percentage = 'PERCENTAGE',
  /** The checkout charge is a fixed price amount. */
  Price = 'PRICE'
}
/** The portion of the price to be charged at checkout. */
type SellingPlanCheckoutChargeValue = MoneyV2 | SellingPlanCheckoutChargePercentageValue;
/** An auto-generated type for paginating through multiple SellingPlans. */
type SellingPlanConnection = {
  __typename?: 'SellingPlanConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<SellingPlanEdge>; /** A list of nodes that are contained in SellingPlanEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<SellingPlan>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/**
 * Represents the delivery frequency associated to the selling plan (for example, deliver every month, or deliver
 * every other week). The selling plan delivery policy and associated records (selling plan groups, selling plans,
 * pricing policies, and billing policy) are deleted 48 hours after a merchant uninstalls their subscriptions app.
 * We recommend backing up these records if you need to restore them later.
 */
type SellingPlanDeliveryPolicy = SellingPlanFixedDeliveryPolicy | SellingPlanRecurringDeliveryPolicy;
/** An auto-generated type which holds one SellingPlan and a cursor during pagination. */
type SellingPlanEdge = {
  __typename?: 'SellingPlanEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of SellingPlanEdge. */
  node: SellingPlan;
};
/**
 * The fixed selling plan billing policy defines how much of the price of the product will be billed to customer
 * at checkout. If there is an outstanding balance, it determines when it will be paid.
 */
type SellingPlanFixedBillingPolicy = {
  __typename?: 'SellingPlanFixedBillingPolicy'; /** The checkout charge when the full amount isn't charged at checkout. */
  checkoutCharge: SellingPlanCheckoutCharge; /** The exact time when to capture the full payment. */
  remainingBalanceChargeExactTime?: Maybe<Scalars['DateTime']['output']>; /** The period after remaining_balance_charge_trigger, before capturing the full payment. Expressed as an ISO8601 duration. */
  remainingBalanceChargeTimeAfterCheckout?: Maybe<Scalars['String']['output']>; /** When to capture payment for amount due. */
  remainingBalanceChargeTrigger: SellingPlanRemainingBalanceChargeTrigger;
};
/** Represents a fixed selling plan delivery policy. */
type SellingPlanFixedDeliveryPolicy = {
  __typename?: 'SellingPlanFixedDeliveryPolicy'; /** The specific anchor dates upon which the delivery interval calculations should be made. */
  anchors: Array<SellingPlanAnchor>; /** A buffer period for orders to be included in next fulfillment anchor. */
  cutoff?: Maybe<Scalars['Int']['output']>; /** The date and time when the fulfillment should trigger. */
  fulfillmentExactTime?: Maybe<Scalars['DateTime']['output']>; /** What triggers the fulfillment. The value must be one of ANCHOR, ASAP, EXACT_TIME, or UNKNOWN. */
  fulfillmentTrigger: SellingPlanFulfillmentTrigger;
  /**
   * Whether the delivery policy is merchant or buyer-centric.
   * Buyer-centric delivery policies state the time when the buyer will receive the goods.
   * Merchant-centric delivery policies state the time when the fulfillment should be started.
   * Currently, only merchant-centric delivery policies are supported.
   */
  intent: SellingPlanFixedDeliveryPolicyIntent; /** The fulfillment or delivery behavior of the first fulfillment when the order is placed before the anchor. The default value for this field is `ASAP`. */
  preAnchorBehavior: SellingPlanFixedDeliveryPolicyPreAnchorBehavior;
};
/** Possible intentions of a Delivery Policy. */
declare enum SellingPlanFixedDeliveryPolicyIntent {
  /** A merchant-centric delivery policy. Mark this delivery policy to define when the merchant should start fulfillment. */
  FulfillmentBegin = 'FULFILLMENT_BEGIN'
}
/** The fulfillment or delivery behavior of the first fulfillment when the orderis placed before the anchor. */
declare enum SellingPlanFixedDeliveryPolicyPreAnchorBehavior {
  /** Orders placed can be fulfilled / delivered immediately. Orders placed inside a cutoff can be fulfilled / delivered at the next anchor. */
  Asap = 'ASAP',
  /**
   * Orders placed can be fulfilled / delivered at the next anchor date.
   * Orders placed inside a cutoff will skip the next anchor and can be fulfilled /
   * delivered at the following anchor.
   */
  Next = 'NEXT'
}
/**
 * Represents the pricing policy of a subscription or deferred purchase option selling plan.
 * The selling plan fixed pricing policy works with the billing and delivery policy
 * to determine the final price. Discounts are divided among fulfillments.
 * For example, a subscription with a $10 discount and two deliveries will have a $5
 * discount applied to each delivery.
 */
type SellingPlanFixedPricingPolicy = SellingPlanPricingPolicyBase & {
  __typename?: 'SellingPlanFixedPricingPolicy'; /** The price adjustment type. */
  adjustmentType: SellingPlanPricingPolicyAdjustmentType; /** The price adjustment value. */
  adjustmentValue: SellingPlanPricingPolicyAdjustmentValue; /** The date and time when the fixed selling plan pricing policy was created. */
  createdAt: Scalars['DateTime']['output'];
};
/** Describes what triggers fulfillment. */
declare enum SellingPlanFulfillmentTrigger {
  /** Use the anchor values to calculate fulfillment date. */
  Anchor = 'ANCHOR',
  /** As soon as possible. */
  Asap = 'ASAP',
  /** At an exact time defined by the fulfillment_exact_time field. */
  ExactTime = 'EXACT_TIME',
  /** Unknown. Usually to be determined in the future. */
  Unknown = 'UNKNOWN'
}
/**
 * A selling method that defines how products can be sold through purchase options like subscriptions, pre-orders, or try-before-you-buy. Groups one or more [`SellingPlan`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan) objects that share the same selling method and options.
 *
 * The group provides buyer-facing labels and merchant-facing descriptions for the selling method. Associates [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects with selling plan groups to offer them through these purchase options.
 *
 * > Caution:
 * > Selling plan groups and their associated records are automatically deleted 48 hours after a merchant uninstalls the [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) that created them. Back up these records if you need to restore them later.
 */
type SellingPlanGroup = HasPublishedTranslations & Node & {
  __typename?: 'SellingPlanGroup'; /** The ID for app, exposed in Liquid and product JSON. */
  appId?: Maybe<Scalars['String']['output']>; /** Whether the given product is directly associated to the selling plan group. */
  appliesToProduct: Scalars['Boolean']['output']; /** Whether the given product variant is directly associated to the selling plan group. */
  appliesToProductVariant: Scalars['Boolean']['output']; /** Whether any of the product variants of the given product are associated to the selling plan group. */
  appliesToProductVariants: Scalars['Boolean']['output']; /** The date and time when the selling plan group was created. */
  createdAt: Scalars['DateTime']['output']; /** The merchant-facing description of the selling plan group. */
  description?: Maybe<Scalars['String']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The merchant-facing label of the selling plan group. */
  merchantCode: Scalars['String']['output']; /** The buyer-facing label of the selling plan group. */
  name: Scalars['String']['output']; /** The values of all options available on the selling plan group. Selling plans are grouped together in Liquid when they're created by the same app, and have the same `selling_plan_group.name` and `selling_plan_group.options` values. */
  options: Array<Scalars['String']['output']>; /** The relative position of the selling plan group for display. */
  position?: Maybe<Scalars['Int']['output']>; /** Product variants associated to the selling plan group. */
  productVariants: ProductVariantConnection; /** A count of product variants associated to the selling plan group. */
  productVariantsCount?: Maybe<Count>; /** Products associated to the selling plan group. */
  products: ProductConnection; /** A count of products associated to the selling plan group. */
  productsCount?: Maybe<Count>; /** Selling plans associated to the selling plan group. */
  sellingPlans: SellingPlanConnection; /** A summary of the policies associated to the selling plan group. */
  summary?: Maybe<Scalars['String']['output']>; /** The published translations associated with the resource. */
  translations: Array<Translation>;
};
/** An auto-generated type for paginating through multiple SellingPlanGroups. */
type SellingPlanGroupConnection = {
  __typename?: 'SellingPlanGroupConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<SellingPlanGroupEdge>; /** A list of nodes that are contained in SellingPlanGroupEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<SellingPlanGroup>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one SellingPlanGroup and a cursor during pagination. */
type SellingPlanGroupEdge = {
  __typename?: 'SellingPlanGroupEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of SellingPlanGroupEdge. */
  node: SellingPlanGroup;
};
/** Represents valid selling plan interval. */
declare enum SellingPlanInterval {
  /** Day interval. */
  Day = 'DAY',
  /** Month interval. */
  Month = 'MONTH',
  /** Week interval. */
  Week = 'WEEK',
  /** Year interval. */
  Year = 'YEAR'
}
/** The selling plan inventory policy. */
type SellingPlanInventoryPolicy = {
  __typename?: 'SellingPlanInventoryPolicy'; /** When to reserve inventory for the order. */
  reserve: SellingPlanReserve;
};
/**
 * Represents the type of pricing associated to the selling plan (for example, a $10 or 20% discount that is set
 * for a limited period or that is fixed for the duration of the subscription). Selling plan pricing policies and
 * associated records (selling plan groups, selling plans, billing policy, and delivery policy) are deleted 48
 * hours after a merchant uninstalls their subscriptions app. We recommend backing up these records if you need
 * to restore them later.
 */
type SellingPlanPricingPolicy = SellingPlanFixedPricingPolicy | SellingPlanRecurringPricingPolicy;
/** Represents a selling plan pricing policy adjustment type. */
declare enum SellingPlanPricingPolicyAdjustmentType {
  /** Fixed amount off adjustment. */
  FixedAmount = 'FIXED_AMOUNT',
  /** Percentage off adjustment. */
  Percentage = 'PERCENTAGE',
  /** Price of the policy. */
  Price = 'PRICE'
}
/** Represents a selling plan pricing policy adjustment value type. */
type SellingPlanPricingPolicyAdjustmentValue = MoneyV2 | SellingPlanPricingPolicyPercentageValue;
/** Represents selling plan pricing policy common fields. */
type SellingPlanPricingPolicyBase = {
  /** The price adjustment type. */adjustmentType: SellingPlanPricingPolicyAdjustmentType; /** The price adjustment value. */
  adjustmentValue: SellingPlanPricingPolicyAdjustmentValue;
};
/** The percentage value of a selling plan pricing policy percentage type. */
type SellingPlanPricingPolicyPercentageValue = {
  __typename?: 'SellingPlanPricingPolicyPercentageValue'; /** The percentage value. */
  percentage: Scalars['Float']['output'];
};
/** Represents a recurring selling plan billing policy. */
type SellingPlanRecurringBillingPolicy = {
  __typename?: 'SellingPlanRecurringBillingPolicy'; /** Specific anchor dates upon which the billing interval calculations should be made. */
  anchors: Array<SellingPlanAnchor>; /** The date and time when the selling plan billing policy was created. */
  createdAt: Scalars['DateTime']['output']; /** The billing frequency, it can be either: day, week, month or year. */
  interval: SellingPlanInterval; /** The number of intervals between billings. */
  intervalCount: Scalars['Int']['output']; /** Maximum number of billing iterations. */
  maxCycles?: Maybe<Scalars['Int']['output']>; /** Minimum number of billing iterations. */
  minCycles?: Maybe<Scalars['Int']['output']>;
};
/** Represents a recurring selling plan delivery policy. */
type SellingPlanRecurringDeliveryPolicy = {
  __typename?: 'SellingPlanRecurringDeliveryPolicy'; /** The specific anchor dates upon which the delivery interval calculations should be made. */
  anchors: Array<SellingPlanAnchor>; /** The date and time when the selling plan delivery policy was created. */
  createdAt: Scalars['DateTime']['output']; /** Number of days which represent a buffer period for orders to be included in a cycle. */
  cutoff?: Maybe<Scalars['Int']['output']>;
  /**
   * Whether the delivery policy is merchant or buyer-centric.
   * Buyer-centric delivery policies state the time when the buyer will receive the goods.
   * Merchant-centric delivery policies state the time when the fulfillment should be started.
   * Currently, only merchant-centric delivery policies are supported.
   */
  intent: SellingPlanRecurringDeliveryPolicyIntent; /** The delivery frequency, it can be either: day, week, month or year. */
  interval: SellingPlanInterval; /** The number of intervals between deliveries. */
  intervalCount: Scalars['Int']['output']; /** The fulfillment or delivery behavior of the first fulfillment when the order is placed before the anchor. The default value for this field is `ASAP`. */
  preAnchorBehavior: SellingPlanRecurringDeliveryPolicyPreAnchorBehavior;
};
/** Whether the delivery policy is merchant or buyer-centric. */
declare enum SellingPlanRecurringDeliveryPolicyIntent {
  /** A merchant-centric delivery policy. Mark this delivery policy to define when the merchant should start fulfillment. */
  FulfillmentBegin = 'FULFILLMENT_BEGIN'
}
/** The fulfillment or delivery behaviors of the first fulfillment when the orderis placed before the anchor. */
declare enum SellingPlanRecurringDeliveryPolicyPreAnchorBehavior {
  /** The orders placed can be fulfilled or delivered immediately. The orders placed inside a cutoff can be fulfilled or delivered at the next anchor. */
  Asap = 'ASAP',
  /**
   * The orders placed can be fulfilled or delivered at the next anchor date.
   * The orders placed inside a cutoff will skip the next anchor and can be fulfilled or
   * delivered at the following anchor.
   */
  Next = 'NEXT'
}
/** Represents a recurring selling plan pricing policy. It applies after the fixed pricing policy. By using the afterCycle parameter, you can specify the cycle when the recurring pricing policy comes into effect. Recurring pricing policies are not available for deferred purchase options. */
type SellingPlanRecurringPricingPolicy = SellingPlanPricingPolicyBase & {
  __typename?: 'SellingPlanRecurringPricingPolicy'; /** The price adjustment type. */
  adjustmentType: SellingPlanPricingPolicyAdjustmentType; /** The price adjustment value. */
  adjustmentValue: SellingPlanPricingPolicyAdjustmentValue; /** Cycle after which this pricing policy applies. */
  afterCycle?: Maybe<Scalars['Int']['output']>; /** The date and time when the recurring selling plan pricing policy was created. */
  createdAt: Scalars['DateTime']['output'];
};
/** When to capture the payment for the remaining amount due. */
declare enum SellingPlanRemainingBalanceChargeTrigger {
  /** At an exact time defined by the remaining_balance_charge_exact_time field. */
  ExactTime = 'EXACT_TIME',
  /** When there's no remaining balance to be charged after checkout. */
  NoRemainingBalance = 'NO_REMAINING_BALANCE',
  /** When the order is fulfilled. */
  OnFulfillment = 'ON_FULFILLMENT',
  /** After the duration defined by the remaining_balance_charge_time_after_checkout field. */
  TimeAfterCheckout = 'TIME_AFTER_CHECKOUT'
}
/** When to reserve inventory for a selling plan. */
declare enum SellingPlanReserve {
  /** Reserve inventory when order is fulfilled. */
  OnFulfillment = 'ON_FULFILLMENT',
  /** Reserve inventory at time of sale. */
  OnSale = 'ON_SALE'
}
/**
 * The [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)
 * that's used to control how discounts can be combined.
 */
declare enum ShippingDiscountClass {
  /** Combined as a shipping discount. */
  Shipping = 'SHIPPING'
}
/** The shipping method that customers select for an order. Includes pricing details, carrier information, and any applied discounts or taxes. */
type ShippingLine = {
  __typename?: 'ShippingLine';
  /**
   * A reference to the carrier service that provided the rate.
   * Present when the rate was computed by a third-party carrier service.
   */
  carrierIdentifier?: Maybe<Scalars['String']['output']>; /** A reference to the shipping method. */
  code?: Maybe<Scalars['String']['output']>; /** The current shipping price after applying refunds, after applying discounts. If the parent `order.taxesIncluded`` field is true, then this price includes taxes. Otherwise, this field is the pre-tax price. */
  currentDiscountedPriceSet: MoneyBag; /** Whether the shipping line is custom or not. */
  custom: Scalars['Boolean']['output']; /** The general classification of the delivery method. */
  deliveryCategory?: Maybe<Scalars['String']['output']>; /** The discounts that have been allocated to the shipping line. */
  discountAllocations: Array<DiscountAllocation>;
  /**
   * The pre-tax shipping price with discounts applied.
   * As of API version 2024-07, this will be calculated including cart level discounts, such as the free shipping discount.
   * @deprecated Use `discountedPriceSet` instead.
   */
  discountedPrice: MoneyV2;
  /**
   * The shipping price after applying discounts. If the parent order.taxesIncluded field is true, then this price includes taxes. If not, it's the pre-tax price.
   * As of API version 2024-07, this will be calculated including cart level discounts, such as the free shipping discount.
   */
  discountedPriceSet: MoneyBag; /** A globally-unique ID. */
  id?: Maybe<Scalars['ID']['output']>; /** Whether the shipping line has been removed. */
  isRemoved: Scalars['Boolean']['output'];
  /**
   * The shipping price without any discounts applied. If the parent order.taxesIncluded field is true, then this price includes taxes. Otherwise, this field is the pre-tax price.
   * @deprecated Use `originalPriceSet` instead.
   */
  originalPrice: MoneyV2; /** The shipping price without any discounts applied. If the parent order.taxesIncluded field is true, then this price includes taxes. Otherwise, this field is the pre-tax price. */
  originalPriceSet: MoneyBag; /** The phone number at the shipping address. */
  phone?: Maybe<Scalars['String']['output']>;
  /**
   * Returns the price of the shipping line.
   * @deprecated Use `originalPriceSet` instead.
   */
  price: Scalars['Money']['output'];
  /**
   * The fulfillment service requested for the shipping method.
   * Present if the shipping method requires processing by a third party fulfillment service.
   * @deprecated requestedFulfillmentService is no longer in use. Order routing does not use the requestedFulfillmentService during order and fulfillment order creation.
   */
  requestedFulfillmentService?: Maybe<FulfillmentService>; /** A unique identifier for the shipping rate. The format can change without notice and isn't meant to be shown to users. */
  shippingRateHandle?: Maybe<Scalars['String']['output']>; /** Returns the rate source for the shipping line. */
  source?: Maybe<Scalars['String']['output']>; /** The TaxLine objects connected to this shipping line. */
  taxLines: Array<TaxLine>; /** Returns the title of the shipping line. */
  title: Scalars['String']['output'];
};
/** An auto-generated type for paginating through multiple ShippingLines. */
type ShippingLineConnection = {
  __typename?: 'ShippingLineConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ShippingLineEdge>; /** A list of nodes that are contained in ShippingLineEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<ShippingLine>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one ShippingLine and a cursor during pagination. */
type ShippingLineEdge = {
  __typename?: 'ShippingLineEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ShippingLineEdge. */
  node: ShippingLine;
};
/** Represents the shipping costs refunded on the Refund. */
type ShippingRefund = {
  __typename?: 'ShippingRefund';
  /**
   * The monetary value of the shipping fees to be refunded.
   * @deprecated Use `amountSet` instead.
   */
  amount: Scalars['Money']['output']; /** The monetary value of the shipping fees to be refunded in shop and presentment currencies. */
  amountSet: MoneyBag;
  /**
   * The maximum amount of shipping fees currently refundable.
   * @deprecated Use `maximumRefundableSet` instead.
   */
  maximumRefundable: Scalars['Money']['output']; /** The maximum amount of shipping fees currently refundable in shop and presentment currencies. */
  maximumRefundableSet: MoneyBag;
  /**
   * The monetary value of the tax allocated to shipping fees to be refunded.
   * @deprecated Use `taxSet` instead.
   */
  tax: Scalars['Money']['output']; /** The monetary value of the tax allocated to shipping fees to be refunded in shop and presentment currencies. */
  taxSet: MoneyBag;
};
/**
 * The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.
 *
 * Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.
 */
type Shop = HasMetafieldDefinitions & HasMetafields & HasPublishedTranslations & Node & {
  __typename?: 'Shop'; /** Account owner information. */
  accountOwner: StaffMember; /** A list of the shop's active alert messages that appear in the Shopify admin. */
  alerts: Array<ShopAlert>;
  /**
   * A list of the shop's product categories. Limit: 1000 product categories.
   * @deprecated Use `allProductCategoriesList` instead.
   */
  allProductCategories: Array<ProductCategory>; /** A list of the shop's product categories. Limit: 1000 product categories. */
  allProductCategoriesList: Array<TaxonomyCategory>;
  /**
   * The token required to query the shop's reports or dashboards.
   * @deprecated Not supported anymore.
   */
  analyticsToken: Scalars['String']['output'];
  /**
   * The paginated list of fulfillment orders assigned to the shop locations owned by the app.
   *
   * Assigned fulfillment orders are fulfillment orders that are set to be fulfilled from locations
   * managed by
   * [fulfillment services](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentService)
   * that are registered by the app.
   * One app (api_client) can host multiple fulfillment services on a shop.
   * Each fulfillment service manages a dedicated location on a shop.
   * Assigned fulfillment orders can have associated
   * [fulfillment requests](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderRequestStatus),
   * or might currently not be requested to be fulfilled.
   *
   * The app must have `read_assigned_fulfillment_orders`
   * [access scope](https://shopify.dev/docs/api/usage/access-scopes)
   * to be able to retrieve fulfillment orders assigned to its locations.
   *
   * All assigned fulfillment orders (except those with the `CLOSED` status) will be returned by default.
   * Perform filtering with the `assignmentStatus` argument
   * to receive only fulfillment orders that have been requested to be fulfilled.
   * @deprecated Use `QueryRoot.assignedFulfillmentOrders` instead. Details: https://shopify.dev/changelog/moving-the-shop-assignedfulfillmentorders-connection-to-queryroot
   */
  assignedFulfillmentOrders: FulfillmentOrderConnection; /** The list of sales channels not currently installed on the shop. */
  availableChannelApps: AppConnection;
  /**
   * The shop's billing address information.
   * @deprecated Use `shopAddress` instead.
   */
  billingAddress: ShopAddress; /** List of all channel definitions associated with a shop. */
  channelDefinitionsForInstalledChannels: Array<AvailableChannelDefinitionsByChannel>;
  /**
   * List of the shop's active sales channels.
   * @deprecated Use `QueryRoot.channels` instead.
   */
  channels: ChannelConnection; /** Specifies whether the shop supports checkouts via Checkout API. */
  checkoutApiSupported: Scalars['Boolean']['output'];
  /**
   * List of the shop's collections.
   * @deprecated Use `QueryRoot.collections` instead.
   */
  collections: CollectionConnection;
  /**
   * The public-facing contact email address for the shop.
   * Customers will use this email to communicate with the shop owner.
   */
  contactEmail: Scalars['String']['output']; /** Countries that have been defined in shipping zones for the shop. */
  countriesInShippingZones: CountriesInShippingZones; /** The date and time when the shop was created. */
  createdAt: Scalars['DateTime']['output']; /** The three letter code for the currency that the shop sells in. */
  currencyCode: CurrencyCode; /** How currencies are displayed on your store. */
  currencyFormats: CurrencyFormats; /** The presentment currency settings for the shop excluding the shop's own currency. */
  currencySettings: CurrencySettingConnection; /** Whether customer accounts are required, optional, or disabled for the shop. */
  customerAccounts: ShopCustomerAccountsSetting; /** Information about the shop's customer accounts. */
  customerAccountsV2: CustomerAccountsV2; /** A list of tags that have been added to customer accounts. */
  customerTags: StringConnection;
  /**
   * Customer accounts associated to the shop.
   * @deprecated Use `QueryRoot.customers` instead.
   */
  customers: CustomerConnection; /** The shop's meta description used in search engine results. */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The domains configured for the shop.
   * @deprecated Use `domainsPaginated` instead.
   */
  domains: Array<Domain>; /** A list of tags that have been added to draft orders. */
  draftOrderTags: StringConnection;
  /**
   * List of saved draft orders on the shop.
   * @deprecated Removed as of 2026-01. Use `QueryRoot.draftOrders` instead.
   */
  draftOrders: DraftOrderConnection;
  /**
   * The shop owner's email address.
   * Shopify will use this email address to communicate with the shop owner.
   */
  email: Scalars['String']['output']; /** The presentment currencies enabled for the shop. */
  enabledPresentmentCurrencies: Array<CurrencyCode>; /** The entitlements for a shop. */
  entitlements: EntitlementsType; /** The set of features enabled for the shop. */
  features: ShopFeatures;
  /**
   * The paginated list of merchant-managed and third-party fulfillment orders.
   * @deprecated Use `QueryRoot.fulfillmentOrders` instead.
   */
  fulfillmentOrders: FulfillmentOrderConnection; /** List of the shop's installed fulfillment services. */
  fulfillmentServices: Array<FulfillmentService>; /** The shop's time zone as defined by the IANA. */
  ianaTimezone: Scalars['String']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /**
   * List of the shop's inventory items.
   * @deprecated Use `QueryRoot.inventoryItems` instead.
   */
  inventoryItems: InventoryItemConnection;
  /**
   * The number of pendings orders on the shop.
   * Limited to a maximum of 10000.
   * @deprecated Use `QueryRoot.pendingOrdersCount` instead.
   */
  limitedPendingOrderCount: LimitedPendingOrderCount;
  /**
   * List of active locations of the shop.
   * @deprecated Use `QueryRoot.locations` instead.
   */
  locations: LocationConnection; /** Whether SMS marketing has been enabled on the shop's checkout configuration settings. */
  marketingSmsConsentEnabledAtCheckout: Scalars['Boolean']['output']; /** The approval signals for a shop to support onboarding to channel apps. */
  merchantApprovalSignals?: Maybe<MerchantApprovalSignals>;
  /**
   * A [custom field](https://shopify.dev/docs/apps/build/custom-data),
   * including its `namespace` and `key`, that's associated with a Shopify resource
   * for the purposes of adding and storing additional information.
   */
  metafield?: Maybe<Metafield>;
  /**
   * List of metafield definitions.
   * @deprecated This field will be removed in a future version. Use `QueryRoot.metafieldDefinitions` instead.
   */
  metafieldDefinitions: MetafieldDefinitionConnection;
  /**
   * A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
   * that a merchant associates with a Shopify resource.
   */
  metafields: MetafieldConnection; /** The shop's .myshopify.com domain name. */
  myshopifyDomain: Scalars['String']['output']; /** The shop's name. */
  name: Scalars['String']['output']; /** The shop's settings related to navigation. */
  navigationSettings: Array<NavigationItem>; /** The prefix that appears before order numbers. */
  orderNumberFormatPrefix: Scalars['String']['output']; /** The suffix that appears after order numbers. */
  orderNumberFormatSuffix: Scalars['String']['output']; /** A list of tags that have been added to orders. */
  orderTags: StringConnection;
  /**
   * A list of the shop's orders.
   * @deprecated Use `QueryRoot.orders` instead.
   */
  orders: OrderConnection; /** The shop's settings related to payments. */
  paymentSettings: PaymentSettings; /** The shop's billing plan. */
  plan: ShopPlan; /** The primary domain of the shop's online store. */
  primaryDomain: Domain;
  /**
   * The list of all images of all products for the shop.
   * @deprecated Use `files` instead. See [filesQuery](https://shopify.dev/docs/api/admin-graphql/latest/queries/files) and its [query](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#argument-query) argument for more information.
   */
  productImages: ImageConnection;
  /**
   * A list of tags that have been added to products.
   * @deprecated Use `QueryRoot.productTags` instead.
   */
  productTags: StringConnection;
  /**
   * The list of types added to products.
   * @deprecated Use `QueryRoot.productTypes` instead.
   */
  productTypes: StringConnection;
  /**
   * List of the shop's product variants.
   * @deprecated Use `QueryRoot.productVariants` instead.
   */
  productVariants: ProductVariantConnection;
  /**
   * The list of vendors added to products.
   * @deprecated Use `QueryRoot.productVendors` instead.
   */
  productVendors: StringConnection;
  /**
   * List of the shop's products.
   * @deprecated Use `QueryRoot.products`.
   */
  products: ProductConnection;
  /**
   * The number of publications for the shop.
   * @deprecated Use `QueryRoot.publicationsCount` instead.
   */
  publicationCount: Scalars['Int']['output']; /** The shop's limits for specific resources. For example, the maximum number ofvariants allowed per product, or the maximum number of locations allowed. */
  resourceLimits: ShopResourceLimits; /** The URL of the rich text editor that can be used for mobile devices. */
  richTextEditorUrl: Scalars['URL']['output']; /** Fetches a list of admin search results by a specified query. */
  search: SearchResultConnection; /** The list of search filter options for the shop. These can be used to filter productvisibility for the shop. */
  searchFilters: SearchFilterOptions; /** Whether the shop has outstanding setup steps. */
  setupRequired: Scalars['Boolean']['output']; /** The list of countries that the shop ships to. */
  shipsToCountries: Array<CountryCode>; /** The name of the shop owner. */
  shopOwnerName: Scalars['String']['output']; /** The list of all legal policies associated with a shop. */
  shopPolicies: Array<ShopPolicy>;
  /**
   * The paginated list of the shop's staff members.
   * @deprecated Use `QueryRoot.staffMembers` instead.
   */
  staffMembers: StaffMemberConnection; /** The storefront access token of a private application. These are scoped per-application. */
  storefrontAccessTokens: StorefrontAccessTokenConnection;
  /**
   * The URL of the shop's storefront.
   * @deprecated Use `url` instead.
   */
  storefrontUrl: Scalars['URL']['output']; /** Whether the shop charges taxes for shipping. */
  taxShipping: Scalars['Boolean']['output']; /** Whether applicable taxes are included in the shop's product prices. */
  taxesIncluded: Scalars['Boolean']['output']; /** The shop's time zone abbreviation. */
  timezoneAbbreviation: Scalars['String']['output']; /** The shop's time zone offset. */
  timezoneOffset: Scalars['String']['output']; /** The shop's time zone offset expressed as a number of minutes. */
  timezoneOffsetMinutes: Scalars['Int']['output']; /** Whether transactional SMS sent by Shopify have been disabled for a shop. */
  transactionalSmsDisabled: Scalars['Boolean']['output']; /** The published translations associated with the resource. */
  translations: Array<Translation>; /** The shop's unit system for weights and measures. */
  unitSystem: UnitSystem; /** The date and time when the shop was last updated. */
  updatedAt: Scalars['DateTime']['output']; /** The URL of the shop's online store. */
  url: Scalars['URL']['output']; /** The shop's primary unit of weight for products and shipping. */
  weightUnit: WeightUnit;
};
/** An address for a shop. */
type ShopAddress = Node & {
  __typename?: 'ShopAddress'; /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']['output']>; /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars['String']['output']>; /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']['output']>; /** The name of the company or organization. */
  company?: Maybe<Scalars['String']['output']>; /** Whether the address coordinates are valid. */
  coordinatesValidated: Scalars['Boolean']['output']; /** The name of the country. */
  country?: Maybe<Scalars['String']['output']>;
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   * @deprecated Use `countryCodeV2` instead.
   */
  countryCode?: Maybe<Scalars['String']['output']>;
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   */
  countryCodeV2?: Maybe<CountryCode>;
  /**
   * The first name.
   * @deprecated Always null in this context.
   */
  firstName?: Maybe<Scalars['String']['output']>; /** A formatted version of the address, customized by the provided arguments. */
  formatted: Array<Scalars['String']['output']>; /** A comma-separated list of the values for city, province, and country. */
  formattedArea?: Maybe<Scalars['String']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /**
   * The last name.
   * @deprecated Always null in this context.
   */
  lastName?: Maybe<Scalars['String']['output']>; /** The latitude coordinate of the address. */
  latitude?: Maybe<Scalars['Float']['output']>; /** The longitude coordinate of the address. */
  longitude?: Maybe<Scalars['Float']['output']>;
  /**
   * The full name, based on firstName and lastName.
   * @deprecated Always null in this context.
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * A phone number associated with the address.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone?: Maybe<Scalars['String']['output']>; /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']['output']>;
  /**
   * The alphanumeric code for the region.
   *
   * For example, ON.
   */
  provinceCode?: Maybe<Scalars['String']['output']>; /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']['output']>;
};
/** An alert message that appears in the Shopify admin about a problem with a store setting, with an action to take. For example, you could show an alert to ask the merchant to enter their billing information to activate Shopify Plus. */
type ShopAlert = {
  __typename?: 'ShopAlert'; /** The text for the button in the alert that links to related information. For example, _Add credit card_. */
  action: ShopAlertAction; /** A description of the alert and further information, such as whether the merchant will be charged. */
  description: Scalars['String']['output'];
};
/** An action associated to a shop alert, such as adding a credit card. */
type ShopAlertAction = {
  __typename?: 'ShopAlertAction'; /** The text for the button in the alert. For example, _Add credit card_. */
  title: Scalars['String']['output']; /** The target URL that the button links to. */
  url: Scalars['URL']['output'];
};
/**
 * Possible branding of a shop.
 * Branding can be used to define the look of a shop including its styling and logo in the Shopify Admin.
 */
declare enum ShopBranding {
  /** Shop has Rogers branding. */
  Rogers = 'ROGERS',
  /** Shop has Shopify branding. */
  Shopify = 'SHOPIFY',
  /** Shop has Shopify Gold branding. */
  ShopifyGold = 'SHOPIFY_GOLD',
  /** Shop has Shopify Plus branding. */
  ShopifyPlus = 'SHOPIFY_PLUS'
}
/** Represents the shop's customer account requirement preference. */
declare enum ShopCustomerAccountsSetting {
  Disabled = 'DISABLED',
  Optional = 'OPTIONAL',
  Required = 'REQUIRED'
}
/**
 * Represents the feature set available to the shop.
 * Most fields specify whether a feature is enabled for a shop, and some fields return information
 * related to specific features.
 */
type ShopFeatures = {
  __typename?: 'ShopFeatures'; /** Whether a shop has access to Avalara AvaTax. */
  avalaraAvatax: Scalars['Boolean']['output']; /** The branding of the shop, which influences its look and feel in the Shopify admin. */
  branding: ShopBranding; /** Represents the Bundles feature configuration for the shop. */
  bundles: BundlesFeature; /** Whether a shop's online store can have CAPTCHA protection. */
  captcha: Scalars['Boolean']['output'];
  /**
   * Whether a shop's online store can have CAPTCHA protection for domains not managed by Shopify.
   * @deprecated No longer required for external domains
   */
  captchaExternalDomains: Scalars['Boolean']['output']; /** Represents the cart transform feature configuration for the shop. */
  cartTransform: CartTransformFeature;
  /**
   * Whether the delivery profiles functionality is enabled for this shop.
   * @deprecated Delivery profiles are now 100% enabled across Shopify.
   */
  deliveryProfiles: Scalars['Boolean']['output']; /** Whether a shop has access to the Google Analytics dynamic remarketing feature. */
  dynamicRemarketing: Scalars['Boolean']['output']; /** Whether a shop can be migrated to use Shopify subscriptions. */
  eligibleForSubscriptionMigration: Scalars['Boolean']['output']; /** Whether a shop is configured properly to sell subscriptions. */
  eligibleForSubscriptions: Scalars['Boolean']['output']; /** Whether a shop can create gift cards. */
  giftCards: Scalars['Boolean']['output'];
  /**
   * Whether a shop displays Harmonized System codes on products. This is used for customs when shipping
   * internationally.
   */
  harmonizedSystemCode: Scalars['Boolean']['output'];
  /**
   * Whether a shop can enable international domains.
   * @deprecated All shops have international domains through Shopify Markets.
   */
  internationalDomains: Scalars['Boolean']['output'];
  /**
   * Whether a shop can enable international price overrides.
   * @deprecated Use the `markets` field on `EntitlementsType`.
   * Each market entitlement has a `catalogs` field that indicates
   * whether the shop's markets have access to catalogs and price overrides.
   *
   */
  internationalPriceOverrides: Scalars['Boolean']['output'];
  /**
   * Whether a shop can enable international price rules.
   * @deprecated Use the `markets` field on `EntitlementsType`.
   * Each market entitlement has a `catalogs` field that indicates
   * whether the shop's markets have access to catalogs and price overrides.
   *
   */
  internationalPriceRules: Scalars['Boolean']['output']; /** Whether a shop has enabled a legacy subscription gateway to handle older subscriptions. */
  legacySubscriptionGatewayEnabled: Scalars['Boolean']['output'];
  /**
   * Whether to show the Live View metrics in the Shopify admin. Live view is hidden from merchants that are on a trial
   * or don't have a storefront.
   */
  liveView: Scalars['Boolean']['output'];
  /**
   * Whether a shop has access to the onboarding visual.
   * @deprecated No longer supported.
   */
  onboardingVisual: Scalars['Boolean']['output']; /** Whether a shop is configured to sell subscriptions with PayPal Express. */
  paypalExpressSubscriptionGatewayStatus: PaypalExpressSubscriptionsGatewayStatus; /** Whether a shop has access to all reporting features. */
  reports: Scalars['Boolean']['output']; /** Whether a shop has ever had subscription products. */
  sellsSubscriptions: Scalars['Boolean']['output'];
  /**
   * Whether the shop has a Shopify Plus subscription.
   * @deprecated Use Shop.plan.shopifyPlus instead.
   */
  shopifyPlus: Scalars['Boolean']['output']; /** Whether to show metrics in the Shopify admin. Metrics are hidden for new merchants until they become meaningful. */
  showMetrics: Scalars['Boolean']['output']; /** Whether a shop has an online store. */
  storefront: Scalars['Boolean']['output']; /** Whether a shop is eligible for Unified Markets. */
  unifiedMarkets: Scalars['Boolean']['output']; /** Whether a shop is using Shopify Balance. */
  usingShopifyBalance: Scalars['Boolean']['output'];
};
/** A locale that's been enabled on a shop. */
type ShopLocale = {
  __typename?: 'ShopLocale'; /** The locale ISO code. */
  locale: Scalars['String']['output']; /** The market web presences that use the locale. */
  marketWebPresences: Array<MarketWebPresence>; /** The human-readable locale name. */
  name: Scalars['String']['output']; /** Whether the locale is the default locale for the shop. */
  primary: Scalars['Boolean']['output']; /** Whether the locale is visible to buyers. */
  published: Scalars['Boolean']['output'];
};
/** Shop Pay Installments payment details related to a transaction. */
type ShopPayInstallmentsPaymentDetails = BasePaymentDetails & {
  __typename?: 'ShopPayInstallmentsPaymentDetails'; /** The name of payment method used by the buyer. */
  paymentMethodName?: Maybe<Scalars['String']['output']>;
};
/** The shop's billing plan and subscription details. Indicates the plan tier (such as Basic, Advanced, or Plus), whether the shop has a Shopify Plus subscription, and if it's a dev store for testing. */
type ShopPlan = {
  __typename?: 'ShopPlan';
  /**
   * The name of the shop's billing plan.
   * @deprecated Use `publicDisplayName` instead.
   */
  displayName: Scalars['String']['output']; /** Whether the shop is a partner development shop for testing purposes. */
  partnerDevelopment: Scalars['Boolean']['output']; /** The public display name of the shop's billing plan. Possible values are: Advanced, Agentic, Agentic Enterprise, Basic, Development, Grow, Inactive, Lite, Other, Paused, Plus, Plus Trial, Retail, Shop Component, Staff Business, Starter, and Trial. */
  publicDisplayName: Scalars['String']['output']; /** Whether the shop has a Shopify Plus subscription. */
  shopifyPlus: Scalars['Boolean']['output'];
};
/** Policy that a merchant has configured for their store, such as their refund or privacy policy. */
type ShopPolicy = HasPublishedTranslations & Node & {
  __typename?: 'ShopPolicy'; /** The text of the policy. The maximum size is 512kb. */
  body: Scalars['HTML']['output']; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the policy was created. */
  createdAt: Scalars['Date']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The translated title of the policy. For example, Refund Policy or Politique de remboursement. */
  title: Scalars['String']['output']; /** The published translations associated with the resource. */
  translations: Array<Translation>; /** The shop policy type. */
  type: ShopPolicyType; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the policy was last modified. */
  updatedAt: Scalars['Date']['output']; /** The public URL of the policy. */
  url: Scalars['URL']['output'];
};
/** Available shop policy types. */
declare enum ShopPolicyType {
  /** The contact information. */
  ContactInformation = 'CONTACT_INFORMATION',
  /** The legal notice. */
  LegalNotice = 'LEGAL_NOTICE',
  /** The privacy policy. */
  PrivacyPolicy = 'PRIVACY_POLICY',
  /** The refund policy. */
  RefundPolicy = 'REFUND_POLICY',
  /** The shipping policy. */
  ShippingPolicy = 'SHIPPING_POLICY',
  /** The cancellation policy. */
  SubscriptionPolicy = 'SUBSCRIPTION_POLICY',
  /** The terms of sale. */
  TermsOfSale = 'TERMS_OF_SALE',
  /** The terms of service. */
  TermsOfService = 'TERMS_OF_SERVICE'
}
/** Resource limits of a shop. */
type ShopResourceLimits = {
  __typename?: 'ShopResourceLimits'; /** Maximum number of locations allowed. */
  locationLimit: Scalars['Int']['output']; /** Maximum number of product options allowed. */
  maxProductOptions: Scalars['Int']['output']; /** The maximum number of variants allowed per product. */
  maxProductVariants: Scalars['Int']['output']; /** Whether the shop has reached the limit of the number of URL redirects it can make for resources. */
  redirectLimitReached: Scalars['Boolean']['output'];
};
/** A Shopify Function. */
type ShopifyFunction = {
  __typename?: 'ShopifyFunction'; /** The API type of the Shopify Function. */
  apiType: Scalars['String']['output']; /** The API version of the Shopify Function. */
  apiVersion: Scalars['String']['output']; /** The app that owns the Shopify Function. */
  app: App; /** The App Bridge information for the Shopify Function. */
  appBridge: FunctionsAppBridge; /** The client ID of the app that owns the Shopify Function. */
  appKey: Scalars['String']['output']; /** The description of the Shopify Function. */
  description?: Maybe<Scalars['String']['output']>; /** The ID of the Shopify Function. */
  id: Scalars['String']['output']; /** The input query of the Shopify Function. */
  inputQuery?: Maybe<Scalars['String']['output']>; /** The title of the Shopify Function. */
  title: Scalars['String']['output']; /** If the Shopify Function uses the creation UI in the Admin. */
  useCreationUi: Scalars['Boolean']['output'];
};
/**
 * Financial account information for merchants using Shopify Payments. Tracks current balances across all supported currencies, payout schedules, and [`ShopifyPaymentsBalanceTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction) records.
 *
 * The account includes configuration details such as [`ShopifyPaymentsBankAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount) objects for receiving [`ShopifyPaymentsPayout`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout) transfers, statement descriptors that appear on customer credit card statements, and the [`ShopifyPaymentsPayoutSchedule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSchedule) that determines when funds transfer to your bank. Access balance transactions to review individual charges, refunds, and adjustments that affect your account balance. Query payouts to track money movement between your Shopify Payments balance and bank accounts.
 */
type ShopifyPaymentsAccount = Node & {
  __typename?: 'ShopifyPaymentsAccount'; /** The name of the account opener. */
  accountOpenerName?: Maybe<Scalars['String']['output']>; /** Whether the Shopify Payments setup is completed. */
  activated: Scalars['Boolean']['output']; /** Current balances in all currencies for the account. */
  balance: Array<MoneyV2>; /** A list of balance transactions associated with the shop. */
  balanceTransactions: ShopifyPaymentsBalanceTransactionConnection; /** All bank accounts configured for the Shopify Payments account. */
  bankAccounts: ShopifyPaymentsBankAccountConnection;
  /**
   * The statement descriptor used for charges.
   *
   * The statement descriptor appears on a customer's credit card or bank statement when they make a purchase.
   * @deprecated Use `chargeStatementDescriptors` instead.
   */
  chargeStatementDescriptor?: Maybe<Scalars['String']['output']>;
  /**
   * The statement descriptors used for charges.
   *
   * These descriptors appear on a customer's credit card or bank statement when they make a purchase.
   */
  chargeStatementDescriptors?: Maybe<ShopifyPaymentsChargeStatementDescriptor>; /** The Shopify Payments account country. */
  country: Scalars['String']['output']; /** The default payout currency for the Shopify Payments account. */
  defaultCurrency: CurrencyCode; /** All disputes that originated from a transaction made with the Shopify Payments account. */
  disputes: ShopifyPaymentsDisputeConnection; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** Whether the Shopify Payments account can be onboarded. */
  onboardable: Scalars['Boolean']['output']; /** The payout schedule for the account. */
  payoutSchedule: ShopifyPaymentsPayoutSchedule;
  /**
   * The descriptor used for payouts.
   *
   * The descriptor appears on a merchant's bank statement when they receive a payout.
   */
  payoutStatementDescriptor?: Maybe<Scalars['String']['output']>; /** All current and previous payouts made between the account and the bank account. */
  payouts: ShopifyPaymentsPayoutConnection;
};
/** The adjustment order object. */
type ShopifyPaymentsAdjustmentOrder = {
  __typename?: 'ShopifyPaymentsAdjustmentOrder'; /** The amount of the adjustment order. */
  amount: MoneyV2; /** The fee of the adjustment order. */
  fees: MoneyV2; /** The link to the adjustment order. */
  link: Scalars['URL']['output']; /** The name of the adjustment order. */
  name: Scalars['String']['output']; /** The net of the adjustment order. */
  net: MoneyV2; /** The ID of the order transaction. */
  orderTransactionId: Scalars['BigInt']['output'];
};
/** The order associated to the balance transaction. */
type ShopifyPaymentsAssociatedOrder = {
  __typename?: 'ShopifyPaymentsAssociatedOrder'; /** The ID of the associated order. */
  id: Scalars['ID']['output']; /** The name of the associated order. */
  name: Scalars['String']['output'];
};
/** A transaction that contributes to a Shopify Payments account balance. Records money movement from charges, refunds, payouts, adjustments, or other payment activities. Includes the gross amount, processing fees, and resulting net amount that affects the account balance. Links to the source of the transaction and associated [`ShopifyPaymentsPayout`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout) details, with optional references to [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects or adjustment reasons when applicable. */
type ShopifyPaymentsBalanceTransaction = Node & {
  __typename?: 'ShopifyPaymentsBalanceTransaction';
  /**
   * The reason for the adjustment that's associated with the transaction.
   *             If the source_type isn't an adjustment, the value will be null.
   */
  adjustmentReason?: Maybe<Scalars['String']['output']>; /** The adjustment orders associated to the transaction. */
  adjustmentsOrders: Array<ShopifyPaymentsAdjustmentOrder>; /** The amount contributing to the balance transaction. */
  amount: MoneyV2; /** The associated order for the balance transaction. */
  associatedOrder?: Maybe<ShopifyPaymentsAssociatedOrder>; /** Payout assoicated with the transaction. */
  associatedPayout: ShopifyPaymentsBalanceTransactionAssociatedPayout; /** The fee amount contributing to the balance transaction. */
  fee: MoneyV2; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The net amount contributing to the merchant's balance. */
  net: MoneyV2; /** The ID of the resource leading to the transaction. */
  sourceId?: Maybe<Scalars['BigInt']['output']>;
  /**
   * The id of the
   *             [Order Transaction](https://shopify.dev/docs/admin-api/rest/reference/orders/transaction)
   *
   *             that resulted in this balance transaction.
   */
  sourceOrderTransactionId?: Maybe<Scalars['BigInt']['output']>; /** The source type of the balance transaction. */
  sourceType?: Maybe<ShopifyPaymentsSourceType>; /** Wether the tranaction was created in test mode. */
  test: Scalars['Boolean']['output']; /** The date and time when the balance transaction was processed. */
  transactionDate: Scalars['DateTime']['output']; /** The type of transaction. */
  type: ShopifyPaymentsTransactionType;
};
/** The payout associated with a balance transaction. */
type ShopifyPaymentsBalanceTransactionAssociatedPayout = {
  __typename?: 'ShopifyPaymentsBalanceTransactionAssociatedPayout'; /** The ID of the payout associated with the balance transaction. */
  id?: Maybe<Scalars['ID']['output']>; /** The status of the payout associated with the balance transaction. */
  status?: Maybe<ShopifyPaymentsBalanceTransactionPayoutStatus>;
};
/** An auto-generated type for paginating through multiple ShopifyPaymentsBalanceTransactions. */
type ShopifyPaymentsBalanceTransactionConnection = {
  __typename?: 'ShopifyPaymentsBalanceTransactionConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ShopifyPaymentsBalanceTransactionEdge>; /** A list of nodes that are contained in ShopifyPaymentsBalanceTransactionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<ShopifyPaymentsBalanceTransaction>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one ShopifyPaymentsBalanceTransaction and a cursor during pagination. */
type ShopifyPaymentsBalanceTransactionEdge = {
  __typename?: 'ShopifyPaymentsBalanceTransactionEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ShopifyPaymentsBalanceTransactionEdge. */
  node: ShopifyPaymentsBalanceTransaction;
};
/** The payout status of the balance transaction. */
declare enum ShopifyPaymentsBalanceTransactionPayoutStatus {
  /** The transaction requires action before it can be paid out. */
  ActionRequired = 'ACTION_REQUIRED',
  /** The payout has been canceled by Shopify. */
  Canceled = 'CANCELED',
  /** The payout has been declined by the bank. */
  Failed = 'FAILED',
  /**
   * The payout has been submitted to the bank.
   * @deprecated Use `SCHEDULED` instead.
   */
  InTransit = 'IN_TRANSIT',
  /** The payout has been successfully deposited into the bank. */
  Paid = 'PAID',
  /** The transaction has not been assigned a payout yet. */
  Pending = 'PENDING',
  /**
   * The payout has been created and had transactions assigned to it, but
   * it has not yet been submitted to the bank.
   */
  Scheduled = 'SCHEDULED'
}
/** A bank account that can receive payouts. */
type ShopifyPaymentsBankAccount = Node & {
  __typename?: 'ShopifyPaymentsBankAccount'; /** The last digits of the account number (the rest is redacted). */
  accountNumberLastDigits: Scalars['String']['output']; /** The name of the bank. */
  bankName?: Maybe<Scalars['String']['output']>; /** The country of the bank. */
  country: CountryCode; /** The date that the bank account was created. */
  createdAt: Scalars['DateTime']['output']; /** The currency of the bank account. */
  currency: CurrencyCode; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** All current and previous payouts made between the account and the bank account. */
  payouts: ShopifyPaymentsPayoutConnection; /** The status of the bank account. */
  status: ShopifyPaymentsBankAccountStatus;
};
/** An auto-generated type for paginating through multiple ShopifyPaymentsBankAccounts. */
type ShopifyPaymentsBankAccountConnection = {
  __typename?: 'ShopifyPaymentsBankAccountConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ShopifyPaymentsBankAccountEdge>; /** A list of nodes that are contained in ShopifyPaymentsBankAccountEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<ShopifyPaymentsBankAccount>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one ShopifyPaymentsBankAccount and a cursor during pagination. */
type ShopifyPaymentsBankAccountEdge = {
  __typename?: 'ShopifyPaymentsBankAccountEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ShopifyPaymentsBankAccountEdge. */
  node: ShopifyPaymentsBankAccount;
};
/** The bank account status. */
declare enum ShopifyPaymentsBankAccountStatus {
  /** A payout to the bank account failed. */
  Errored = 'ERRORED',
  /** A bank account that hasn't had any activity and that's not validated. */
  New = 'NEW',
  /** It was determined that the bank account exists. */
  Validated = 'VALIDATED',
  /** Bank account validation was successful. */
  Verified = 'VERIFIED'
}
/** The charge descriptors for a payments account. */
type ShopifyPaymentsChargeStatementDescriptor = {
  /** The default charge statement descriptor. */default?: Maybe<Scalars['String']['output']>; /** The prefix of the statement descriptor. */
  prefix: Scalars['String']['output'];
};
/** A dispute occurs when a buyer questions the legitimacy of a charge with their financial institution. */
type ShopifyPaymentsDispute = LegacyInteroperability & Node & {
  __typename?: 'ShopifyPaymentsDispute'; /** The total amount disputed by the cardholder. */
  amount: MoneyV2; /** The evidence associated with the dispute. */
  disputeEvidence: ShopifyPaymentsDisputeEvidence; /** The deadline for evidence submission. */
  evidenceDueBy?: Maybe<Scalars['Date']['output']>; /** The date when evidence was sent. Returns null if evidence hasn't yet been sent. */
  evidenceSentOn?: Maybe<Scalars['Date']['output']>; /** The date when this dispute was resolved. Returns null if the dispute isn't yet resolved. */
  finalizedOn?: Maybe<Scalars['Date']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The date when this dispute was initiated. */
  initiatedAt: Scalars['DateTime']['output']; /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64']['output']; /** The order that contains the charge that's under dispute. */
  order?: Maybe<Order>; /** The reason of the dispute. */
  reasonDetails: ShopifyPaymentsDisputeReasonDetails; /** The current state of the dispute. */
  status: DisputeStatus; /** Indicates if this dispute is still in the inquiry phase or has turned into a chargeback. */
  type: DisputeType;
};
/** An auto-generated type for paginating through multiple ShopifyPaymentsDisputes. */
type ShopifyPaymentsDisputeConnection = {
  __typename?: 'ShopifyPaymentsDisputeConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ShopifyPaymentsDisputeEdge>; /** A list of nodes that are contained in ShopifyPaymentsDisputeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<ShopifyPaymentsDispute>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one ShopifyPaymentsDispute and a cursor during pagination. */
type ShopifyPaymentsDisputeEdge = {
  __typename?: 'ShopifyPaymentsDisputeEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ShopifyPaymentsDisputeEdge. */
  node: ShopifyPaymentsDispute;
};
/** The evidence associated with the dispute. */
type ShopifyPaymentsDisputeEvidence = Node & {
  __typename?: 'ShopifyPaymentsDisputeEvidence'; /** The activity logs associated with the dispute evidence. */
  accessActivityLog?: Maybe<Scalars['String']['output']>; /** The billing address that's provided by the customer. */
  billingAddress?: Maybe<MailingAddress>; /** The cancellation policy disclosure associated with the dispute evidence. */
  cancellationPolicyDisclosure?: Maybe<Scalars['String']['output']>; /** The cancellation policy file associated with the dispute evidence. */
  cancellationPolicyFile?: Maybe<ShopifyPaymentsDisputeFileUpload>; /** The cancellation rebuttal associated with the dispute evidence. */
  cancellationRebuttal?: Maybe<Scalars['String']['output']>; /** The customer communication file associated with the dispute evidence. */
  customerCommunicationFile?: Maybe<ShopifyPaymentsDisputeFileUpload>; /** The customer's email address. */
  customerEmailAddress?: Maybe<Scalars['String']['output']>; /** The customer's first name. */
  customerFirstName?: Maybe<Scalars['String']['output']>; /** The customer's last name. */
  customerLastName?: Maybe<Scalars['String']['output']>; /** The customer purchase ip for this dispute evidence. */
  customerPurchaseIp?: Maybe<Scalars['String']['output']>; /** The dispute associated with the evidence. */
  dispute: ShopifyPaymentsDispute; /** The file uploads associated with the dispute evidence. */
  disputeFileUploads: Array<ShopifyPaymentsDisputeFileUpload>; /** The fulfillments associated with the dispute evidence. */
  fulfillments: Array<ShopifyPaymentsDisputeFulfillment>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The product description for this dispute evidence. */
  productDescription?: Maybe<Scalars['String']['output']>; /** The refund policy disclosure associated with the dispute evidence. */
  refundPolicyDisclosure?: Maybe<Scalars['String']['output']>; /** The refund policy file associated with the dispute evidence. */
  refundPolicyFile?: Maybe<ShopifyPaymentsDisputeFileUpload>; /** The refund refusal explanation associated with dispute evidence. */
  refundRefusalExplanation?: Maybe<Scalars['String']['output']>; /** The service documentation file associated with the dispute evidence. */
  serviceDocumentationFile?: Maybe<ShopifyPaymentsDisputeFileUpload>; /** The mailing address for shipping that's provided by the customer. */
  shippingAddress?: Maybe<MailingAddress>; /** The shipping documentation file associated with the dispute evidence. */
  shippingDocumentationFile?: Maybe<ShopifyPaymentsDisputeFileUpload>; /** Whether the dispute evidence is submitted. */
  submitted: Scalars['Boolean']['output']; /** The uncategorized file associated with the dispute evidence. */
  uncategorizedFile?: Maybe<ShopifyPaymentsDisputeFileUpload>; /** The uncategorized text for the dispute evidence. */
  uncategorizedText?: Maybe<Scalars['String']['output']>;
};
/** The possible dispute evidence file types. */
declare enum ShopifyPaymentsDisputeEvidenceFileType {
  /** Cancellation Policy File. */
  CancellationPolicyFile = 'CANCELLATION_POLICY_FILE',
  /** Customer Communication File. */
  CustomerCommunicationFile = 'CUSTOMER_COMMUNICATION_FILE',
  /** Refund Policy File. */
  RefundPolicyFile = 'REFUND_POLICY_FILE',
  /** Response Summary File. */
  ResponseSummaryFile = 'RESPONSE_SUMMARY_FILE',
  /** Service Documentation File. */
  ServiceDocumentationFile = 'SERVICE_DOCUMENTATION_FILE',
  /** Shipping Documentation File. */
  ShippingDocumentationFile = 'SHIPPING_DOCUMENTATION_FILE',
  /** Uncategorized File. */
  UncategorizedFile = 'UNCATEGORIZED_FILE'
}
/** The file upload associated with the dispute evidence. */
type ShopifyPaymentsDisputeFileUpload = Node & {
  __typename?: 'ShopifyPaymentsDisputeFileUpload'; /** The type of the file for the dispute evidence. */
  disputeEvidenceType?: Maybe<ShopifyPaymentsDisputeEvidenceFileType>; /** The file size. */
  fileSize: Scalars['Int']['output']; /** The file type. */
  fileType: Scalars['String']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The original file name. */
  originalFileName?: Maybe<Scalars['String']['output']>; /** The URL for accessing the file. */
  url: Scalars['URL']['output'];
};
/** The fulfillment associated with dispute evidence. */
type ShopifyPaymentsDisputeFulfillment = Node & {
  __typename?: 'ShopifyPaymentsDisputeFulfillment'; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The shipping carrier for this fulfillment. */
  shippingCarrier?: Maybe<Scalars['String']['output']>; /** The shipping date for this fulfillment. */
  shippingDate?: Maybe<Scalars['Date']['output']>; /** The shipping tracking number for this fulfillment. */
  shippingTrackingNumber?: Maybe<Scalars['String']['output']>;
};
/** The reason for the dispute provided by the cardholder's bank. */
declare enum ShopifyPaymentsDisputeReason {
  /** The customer's bank can't process the charge. */
  BankCannotProcess = 'BANK_CANNOT_PROCESS',
  /** The customer claims that the purchased product was returned or the transaction was otherwise canceled, but you haven't yet provided a refund or credit. */
  CreditNotProcessed = 'CREDIT_NOT_PROCESSED',
  /** The customer initiated the dispute. Contact the customer for additional details on why the payment was disputed. */
  CustomerInitiated = 'CUSTOMER_INITIATED',
  /** The customer's bank can't proceed with the debit since it hasn't been authorized. */
  DebitNotAuthorized = 'DEBIT_NOT_AUTHORIZED',
  /** The customer claims they were charged multiple times for the same product or service. */
  Duplicate = 'DUPLICATE',
  /** The cardholder claims that they didn’t authorize the payment. */
  Fraudulent = 'FRAUDULENT',
  /** The dispute is uncategorized, so you should contact the customer for additional details to find out why the payment was disputed. */
  General = 'GENERAL',
  /** The customer account associated with the purchase is incorrect. */
  IncorrectAccountDetails = 'INCORRECT_ACCOUNT_DETAILS',
  /** The customer's bank account has insufficient funds. */
  InsufficientFunds = 'INSUFFICIENT_FUNDS',
  /** The card issuer believes the disputed transaction doesn't conform to the network rules. These disputes occur when transactions don't meet card network requirements and may incur additional network fees if escalated for resolution. */
  Noncompliant = 'NONCOMPLIANT',
  /** The customer claims they did not receive the products or services purchased. */
  ProductNotReceived = 'PRODUCT_NOT_RECEIVED',
  /** The product or service was received but was defective, damaged, or not as described. */
  ProductUnacceptable = 'PRODUCT_UNACCEPTABLE',
  /** The customer claims that you continued to charge them after a subscription was canceled. */
  SubscriptionCancelled = 'SUBSCRIPTION_CANCELLED',
  /** The customer doesn’t recognize the payment appearing on their card statement. */
  Unrecognized = 'UNRECOGNIZED'
}
/** Details regarding a dispute reason. */
type ShopifyPaymentsDisputeReasonDetails = {
  __typename?: 'ShopifyPaymentsDisputeReasonDetails'; /** The raw code provided by the payment network. */
  networkReasonCode?: Maybe<Scalars['String']['output']>; /** The reason for the dispute provided by the cardholder's banks. */
  reason: ShopifyPaymentsDisputeReason;
};
/** Presents all Shopify Payments information related to an extended authorization. */
type ShopifyPaymentsExtendedAuthorization = {
  __typename?: 'ShopifyPaymentsExtendedAuthorization'; /** The time after which the extended authorization expires. After the expiry, the merchant is unable to capture the payment. */
  extendedAuthorizationExpiresAt: Scalars['DateTime']['output']; /** The time after which capture will incur an additional fee. */
  standardAuthorizationExpiresAt: Scalars['DateTime']['output'];
};
/**
 * A transfer of funds between a merchant's Shopify Payments balance and their [`ShopifyPaymentsBankAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount). Provides the [net amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout#field-ShopifyPaymentsPayout.fields.net), [issue date](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout#field-ShopifyPaymentsPayout.fields.issuedAt), and current [`ShopifyPaymentsPayoutStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutStatus).
 *
 * The payout includes a [`ShopifyPaymentsPayoutSummary`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSummary) that breaks down fees and gross amounts by transaction type, such as charges, refunds, and adjustments. The [`ShopifyPaymentsPayoutTransactionType`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutTransactionType) indicates whether funds move into the bank account (deposit) or back to Shopify Payments (withdrawal).
 */
type ShopifyPaymentsPayout = LegacyInteroperability & Node & {
  __typename?: 'ShopifyPaymentsPayout';
  /**
   * The bank account for the payout.
   * @deprecated Use `destinationAccount` instead.
   */
  bankAccount?: Maybe<ShopifyPaymentsBankAccount>; /** The business entity associated with the payout. */
  businessEntity: BusinessEntity; /** A unique trace ID from the financial institution. Use this reference number to track the payout with your provider. */
  externalTraceId?: Maybe<Scalars['String']['output']>;
  /**
   * The total amount and currency of the payout.
   * @deprecated Use `net` instead.
   */
  gross: MoneyV2; /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /**
   * The exact time when the payout was issued. The payout only contains
   * balance transactions that were available at this time.
   */
  issuedAt: Scalars['DateTime']['output']; /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64']['output']; /** The total amount and currency of the payout. */
  net: MoneyV2; /** The transfer status of the payout. */
  status: ShopifyPaymentsPayoutStatus; /** The summary of the payout. */
  summary: ShopifyPaymentsPayoutSummary; /** The direction of the payout. */
  transactionType: ShopifyPaymentsPayoutTransactionType;
};
/** An auto-generated type for paginating through multiple ShopifyPaymentsPayouts. */
type ShopifyPaymentsPayoutConnection = {
  __typename?: 'ShopifyPaymentsPayoutConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<ShopifyPaymentsPayoutEdge>; /** A list of nodes that are contained in ShopifyPaymentsPayoutEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<ShopifyPaymentsPayout>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one ShopifyPaymentsPayout and a cursor during pagination. */
type ShopifyPaymentsPayoutEdge = {
  __typename?: 'ShopifyPaymentsPayoutEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of ShopifyPaymentsPayoutEdge. */
  node: ShopifyPaymentsPayout;
};
/** The interval at which payouts are sent to the connected bank account. */
declare enum ShopifyPaymentsPayoutInterval {
  /** Each business day. */
  Daily = 'DAILY',
  /** Payouts will not be automatically made. */
  Manual = 'MANUAL',
  /** Each month, on the day of month specified by monthlyAnchor. */
  Monthly = 'MONTHLY',
  /** Each week, on the day of week specified by weeklyAnchor. */
  Weekly = 'WEEKLY'
}
/** The payment schedule for a payments account. */
type ShopifyPaymentsPayoutSchedule = {
  __typename?: 'ShopifyPaymentsPayoutSchedule'; /** The interval at which payouts are sent to the connected bank account. */
  interval: ShopifyPaymentsPayoutInterval;
  /**
   * The day of the month funds will be paid out.
   *
   * The value can be any day of the month from the 1st to the 31st.
   * If the payment interval is set to monthly, this value will be used.
   * Payouts scheduled between 29-31st of the month are sent on the last day of shorter months.
   */
  monthlyAnchor?: Maybe<Scalars['Int']['output']>;
  /**
   * The day of the week funds will be paid out.
   *
   * The value can be any weekday from Monday to Friday.
   * If the payment interval is set to weekly, this value will be used.
   */
  weeklyAnchor?: Maybe<DayOfTheWeek>;
};
/** The transfer status of the payout. */
declare enum ShopifyPaymentsPayoutStatus {
  /** The payout has been canceled by Shopify. */
  Canceled = 'CANCELED',
  /** The payout has been declined by the bank. */
  Failed = 'FAILED',
  /**
   * The payout has been submitted to the bank.
   * @deprecated Use `SCHEDULED` instead.
   */
  InTransit = 'IN_TRANSIT',
  /** The payout has been successfully deposited into the bank. */
  Paid = 'PAID',
  /**
   * The payout has been created and had transactions assigned to it, but
   * it has not yet been submitted to the bank.
   */
  Scheduled = 'SCHEDULED'
}
/**
 * Breakdown of the total fees and gross of each of the different types of transactions associated
 * with the payout.
 */
type ShopifyPaymentsPayoutSummary = {
  __typename?: 'ShopifyPaymentsPayoutSummary'; /** Total fees for all adjustments including disputes. */
  adjustmentsFee: MoneyV2; /** Total gross amount for all adjustments including disputes. */
  adjustmentsGross: MoneyV2; /** Total fees for all advances. */
  advanceFees: MoneyV2; /** Total gross amount for all advances. */
  advanceGross: MoneyV2; /** Total fees for all charges. */
  chargesFee: MoneyV2; /** Total gross amount for all charges. */
  chargesGross: MoneyV2; /** Total fees for all refunds. */
  refundsFee: MoneyV2; /** Total gross amount for all refunds. */
  refundsFeeGross: MoneyV2; /** Total fees for all reserved funds. */
  reservedFundsFee: MoneyV2; /** Total gross amount for all reserved funds. */
  reservedFundsGross: MoneyV2; /** Total fees for all retried payouts. */
  retriedPayoutsFee: MoneyV2; /** Total gross amount for all retried payouts. */
  retriedPayoutsGross: MoneyV2; /** Total amount for all usdc rebate credit balance adjustments. */
  usdcRebateCreditAmount: MoneyV2;
};
/** The possible transaction types for a payout. */
declare enum ShopifyPaymentsPayoutTransactionType {
  /** The payout is a deposit. */
  Deposit = 'DEPOSIT',
  /** The payout is a withdrawal. */
  Withdrawal = 'WITHDRAWAL'
}
/** Presents all Shopify Payments specific information related to an order refund. */
type ShopifyPaymentsRefundSet = {
  __typename?: 'ShopifyPaymentsRefundSet'; /** The acquirer reference number (ARN) code generated for Visa/Mastercard transactions. */
  acquirerReferenceNumber?: Maybe<Scalars['String']['output']>;
};
/** The possible source types for a balance transaction. */
declare enum ShopifyPaymentsSourceType {
  /** The adjustment source type. */
  Adjustment = 'ADJUSTMENT',
  /** The adjustment_reversal source type. */
  AdjustmentReversal = 'ADJUSTMENT_REVERSAL',
  /** The charge source type. */
  Charge = 'CHARGE',
  /** The dispute source type. */
  Dispute = 'DISPUTE',
  /** The refund source type. */
  Refund = 'REFUND',
  /** The system_adjustment source type. */
  SystemAdjustment = 'SYSTEM_ADJUSTMENT',
  /** The transfer source type. */
  Transfer = 'TRANSFER'
}
/** Presents all Shopify Payments specific information related to an order transaction. */
type ShopifyPaymentsTransactionSet = {
  __typename?: 'ShopifyPaymentsTransactionSet'; /** Contains all fields related to an extended authorization. */
  extendedAuthorizationSet?: Maybe<ShopifyPaymentsExtendedAuthorization>; /** Contains all fields related to a refund. */
  refundSet?: Maybe<ShopifyPaymentsRefundSet>;
};
/** The possible types of transactions. */
declare enum ShopifyPaymentsTransactionType {
  /** The ach_bank_failure_debit_fee transaction type. */
  AchBankFailureDebitFee = 'ACH_BANK_FAILURE_DEBIT_FEE',
  /** The ach_bank_failure_debit_reversal_fee transaction type. */
  AchBankFailureDebitReversalFee = 'ACH_BANK_FAILURE_DEBIT_REVERSAL_FEE',
  /** The adjustment transaction type. */
  Adjustment = 'ADJUSTMENT',
  /** The ads_publisher_credit transaction type. */
  AdsPublisherCredit = 'ADS_PUBLISHER_CREDIT',
  /** The ads_publisher_credit_reversal transaction type. */
  AdsPublisherCreditReversal = 'ADS_PUBLISHER_CREDIT_REVERSAL',
  /** The advance transaction type. */
  Advance = 'ADVANCE',
  /** The advance funding transaction type. */
  AdvanceFunding = 'ADVANCE_FUNDING',
  /** The anomaly_credit transaction type. */
  AnomalyCredit = 'ANOMALY_CREDIT',
  /** The anomaly_credit_reversal transaction type. */
  AnomalyCreditReversal = 'ANOMALY_CREDIT_REVERSAL',
  /** The anomaly_debit transaction type. */
  AnomalyDebit = 'ANOMALY_DEBIT',
  /** The anomaly_debit_reversal transaction type. */
  AnomalyDebitReversal = 'ANOMALY_DEBIT_REVERSAL',
  /** The application_fee_refund transaction type. */
  ApplicationFeeRefund = 'APPLICATION_FEE_REFUND',
  /** The balance_transfer_inbound transaction type. */
  BalanceTransferInbound = 'BALANCE_TRANSFER_INBOUND',
  /** The balance_transfer_outbound transaction type. */
  BalanceTransferOutbound = 'BALANCE_TRANSFER_OUTBOUND',
  /** The billing_debit transaction type. */
  BillingDebit = 'BILLING_DEBIT',
  /** The billing_debit_reversal transaction type. */
  BillingDebitReversal = 'BILLING_DEBIT_REVERSAL',
  /** The channel_credit transaction type. */
  ChannelCredit = 'CHANNEL_CREDIT',
  /** The channel_credit_reversal transaction type. */
  ChannelCreditReversal = 'CHANNEL_CREDIT_REVERSAL',
  /** The channel_promotion_credit transaction type. */
  ChannelPromotionCredit = 'CHANNEL_PROMOTION_CREDIT',
  /** The channel_promotion_credit_reversal transaction type. */
  ChannelPromotionCreditReversal = 'CHANNEL_PROMOTION_CREDIT_REVERSAL',
  /** The channel_transfer_credit transaction type. */
  ChannelTransferCredit = 'CHANNEL_TRANSFER_CREDIT',
  /** The channel_transfer_credit_reversal transaction type. */
  ChannelTransferCreditReversal = 'CHANNEL_TRANSFER_CREDIT_REVERSAL',
  /** The channel_transfer_debit transaction type. */
  ChannelTransferDebit = 'CHANNEL_TRANSFER_DEBIT',
  /** The channel_transfer_debit_reversal transaction type. */
  ChannelTransferDebitReversal = 'CHANNEL_TRANSFER_DEBIT_REVERSAL',
  /** The charge transaction type. */
  Charge = 'CHARGE',
  /** The chargeback_fee transaction type. */
  ChargebackFee = 'CHARGEBACK_FEE',
  /** The chargeback_fee_refund transaction type. */
  ChargebackFeeRefund = 'CHARGEBACK_FEE_REFUND',
  /** The chargeback_hold transaction type. */
  ChargebackHold = 'CHARGEBACK_HOLD',
  /** The chargeback_hold_release transaction type. */
  ChargebackHoldRelease = 'CHARGEBACK_HOLD_RELEASE',
  /** The chargeback_protection_credit transaction type. */
  ChargebackProtectionCredit = 'CHARGEBACK_PROTECTION_CREDIT',
  /** The chargeback_protection_credit_reversal transaction type. */
  ChargebackProtectionCreditReversal = 'CHARGEBACK_PROTECTION_CREDIT_REVERSAL',
  /** The chargeback_protection_debit transaction type. */
  ChargebackProtectionDebit = 'CHARGEBACK_PROTECTION_DEBIT',
  /** The chargeback_protection_debit_reversal transaction type. */
  ChargebackProtectionDebitReversal = 'CHARGEBACK_PROTECTION_DEBIT_REVERSAL',
  /** The charge_adjustment transaction type. */
  ChargeAdjustment = 'CHARGE_ADJUSTMENT',
  /** The collections_credit transaction type. */
  CollectionsCredit = 'COLLECTIONS_CREDIT',
  /** The collections_credit_reversal transaction type. */
  CollectionsCreditReversal = 'COLLECTIONS_CREDIT_REVERSAL',
  /** The customs_duty transaction type. */
  CustomsDuty = 'CUSTOMS_DUTY',
  /** The customs_duty_adjustment transaction type. */
  CustomsDutyAdjustment = 'CUSTOMS_DUTY_ADJUSTMENT',
  /** The dispute_reversal transaction type. */
  DisputeReversal = 'DISPUTE_REVERSAL',
  /** The dispute_withdrawal transaction type. */
  DisputeWithdrawal = 'DISPUTE_WITHDRAWAL',
  /** The import_tax transaction type. */
  ImportTax = 'IMPORT_TAX',
  /** The import_tax_adjustment transaction type. */
  ImportTaxAdjustment = 'IMPORT_TAX_ADJUSTMENT',
  /** The tax refund transaction type. */
  ImportTaxRefund = 'IMPORT_TAX_REFUND',
  /** The lending_capital_refund transaction type. */
  LendingCapitalRefund = 'LENDING_CAPITAL_REFUND',
  /** The lending_capital_refund_reversal transaction type. */
  LendingCapitalRefundReversal = 'LENDING_CAPITAL_REFUND_REVERSAL',
  /** The lending_capital_remittance transaction type. */
  LendingCapitalRemittance = 'LENDING_CAPITAL_REMITTANCE',
  /** The lending_capital_remittance_reversal transaction type. */
  LendingCapitalRemittanceReversal = 'LENDING_CAPITAL_REMITTANCE_REVERSAL',
  /** The lending_credit transaction type. */
  LendingCredit = 'LENDING_CREDIT',
  /** The lending_credit_refund transaction type. */
  LendingCreditRefund = 'LENDING_CREDIT_REFUND',
  /** The lending_credit_refund_reversal transaction type. */
  LendingCreditRefundReversal = 'LENDING_CREDIT_REFUND_REVERSAL',
  /** The lending_credit_remittance transaction type. */
  LendingCreditRemittance = 'LENDING_CREDIT_REMITTANCE',
  /** The lending_credit_remittance_reversal transaction type. */
  LendingCreditRemittanceReversal = 'LENDING_CREDIT_REMITTANCE_REVERSAL',
  /** The lending_credit_reversal transaction type. */
  LendingCreditReversal = 'LENDING_CREDIT_REVERSAL',
  /** The lending_debit transaction type. */
  LendingDebit = 'LENDING_DEBIT',
  /** The lending_debit_reversal transaction type. */
  LendingDebitReversal = 'LENDING_DEBIT_REVERSAL',
  /** The marketplace_fee_credit transaction type. */
  MarketplaceFeeCredit = 'MARKETPLACE_FEE_CREDIT',
  /** The marketplace_fee_credit_reversal transaction type. */
  MarketplaceFeeCreditReversal = 'MARKETPLACE_FEE_CREDIT_REVERSAL',
  /** The markets_pro_credit transaction type. */
  MarketsProCredit = 'MARKETS_PRO_CREDIT',
  /** The merchant_goodwill_credit transaction type. */
  MerchantGoodwillCredit = 'MERCHANT_GOODWILL_CREDIT',
  /** The merchant_goodwill_credit_reversal transaction type. */
  MerchantGoodwillCreditReversal = 'MERCHANT_GOODWILL_CREDIT_REVERSAL',
  /** The merchant_to_merchant_credit transaction type. */
  MerchantToMerchantCredit = 'MERCHANT_TO_MERCHANT_CREDIT',
  /** The merchant_to_merchant_credit_reversal transaction type. */
  MerchantToMerchantCreditReversal = 'MERCHANT_TO_MERCHANT_CREDIT_REVERSAL',
  /** The merchant_to_merchant_debit transaction type. */
  MerchantToMerchantDebit = 'MERCHANT_TO_MERCHANT_DEBIT',
  /** The merchant_to_merchant_debit_reversal transaction type. */
  MerchantToMerchantDebitReversal = 'MERCHANT_TO_MERCHANT_DEBIT_REVERSAL',
  /** The promotion_credit transaction type. */
  PromotionCredit = 'PROMOTION_CREDIT',
  /** The promotion_credit_reversal transaction type. */
  PromotionCreditReversal = 'PROMOTION_CREDIT_REVERSAL',
  /** The referral_fee transaction type. */
  ReferralFee = 'REFERRAL_FEE',
  /** The referral_fee_tax transaction type. */
  ReferralFeeTax = 'REFERRAL_FEE_TAX',
  /** The refund transaction type. */
  Refund = 'REFUND',
  /** The refund_adjustment transaction type. */
  RefundAdjustment = 'REFUND_ADJUSTMENT',
  /** The refund_failure transaction type. */
  RefundFailure = 'REFUND_FAILURE',
  /** The reserved_funds transaction type. */
  ReservedFunds = 'RESERVED_FUNDS',
  /** The reserved_funds_reversal transaction type. */
  ReservedFundsReversal = 'RESERVED_FUNDS_REVERSAL',
  /** The reserved_funds_withdrawal transaction type. */
  ReservedFundsWithdrawal = 'RESERVED_FUNDS_WITHDRAWAL',
  /** The risk_reversal transaction type. */
  RiskReversal = 'RISK_REVERSAL',
  /** The risk_withdrawal transaction type. */
  RiskWithdrawal = 'RISK_WITHDRAWAL',
  /** The seller_protection_credit transaction type. */
  SellerProtectionCredit = 'SELLER_PROTECTION_CREDIT',
  /** The seller_protection_credit_reversal transaction type. */
  SellerProtectionCreditReversal = 'SELLER_PROTECTION_CREDIT_REVERSAL',
  /** The shipping_label transaction type. */
  ShippingLabel = 'SHIPPING_LABEL',
  /** The shipping_label_adjustment transaction type. */
  ShippingLabelAdjustment = 'SHIPPING_LABEL_ADJUSTMENT',
  /** The shipping_label_adjustment_base transaction type. */
  ShippingLabelAdjustmentBase = 'SHIPPING_LABEL_ADJUSTMENT_BASE',
  /** The shipping_label_adjustment_surcharge transaction type. */
  ShippingLabelAdjustmentSurcharge = 'SHIPPING_LABEL_ADJUSTMENT_SURCHARGE',
  /** The shipping_other_carrier_charge_adjustment transaction type. */
  ShippingOtherCarrierChargeAdjustment = 'SHIPPING_OTHER_CARRIER_CHARGE_ADJUSTMENT',
  /** The shipping_return_to_origin_adjustment transaction type. */
  ShippingReturnToOriginAdjustment = 'SHIPPING_RETURN_TO_ORIGIN_ADJUSTMENT',
  /** The shopify_collective_credit transaction type. */
  ShopifyCollectiveCredit = 'SHOPIFY_COLLECTIVE_CREDIT',
  /** The shopify_collective_credit_reversal transaction type. */
  ShopifyCollectiveCreditReversal = 'SHOPIFY_COLLECTIVE_CREDIT_REVERSAL',
  /** The shopify_collective_debit transaction type. */
  ShopifyCollectiveDebit = 'SHOPIFY_COLLECTIVE_DEBIT',
  /** The shopify_collective_debit_reversal transaction type. */
  ShopifyCollectiveDebitReversal = 'SHOPIFY_COLLECTIVE_DEBIT_REVERSAL',
  /** The shopify_source_credit transaction type. */
  ShopifySourceCredit = 'SHOPIFY_SOURCE_CREDIT',
  /** The shopify_source_credit_reversal transaction type. */
  ShopifySourceCreditReversal = 'SHOPIFY_SOURCE_CREDIT_REVERSAL',
  /** The shopify_source_debit transaction type. */
  ShopifySourceDebit = 'SHOPIFY_SOURCE_DEBIT',
  /** The shopify_source_debit_reversal transaction type. */
  ShopifySourceDebitReversal = 'SHOPIFY_SOURCE_DEBIT_REVERSAL',
  /** The shop_cash_billing_debit transaction type. */
  ShopCashBillingDebit = 'SHOP_CASH_BILLING_DEBIT',
  /** The shop_cash_billing_debit_reversal transaction type. */
  ShopCashBillingDebitReversal = 'SHOP_CASH_BILLING_DEBIT_REVERSAL',
  /** The shop_cash_campaign_billing_credit transaction type. */
  ShopCashCampaignBillingCredit = 'SHOP_CASH_CAMPAIGN_BILLING_CREDIT',
  /** The shop_cash_campaign_billing_credit_reversal transaction type. */
  ShopCashCampaignBillingCreditReversal = 'SHOP_CASH_CAMPAIGN_BILLING_CREDIT_REVERSAL',
  /** The shop_cash_campaign_billing_debit transaction type. */
  ShopCashCampaignBillingDebit = 'SHOP_CASH_CAMPAIGN_BILLING_DEBIT',
  /** The shop_cash_campaign_billing_debit_reversal transaction type. */
  ShopCashCampaignBillingDebitReversal = 'SHOP_CASH_CAMPAIGN_BILLING_DEBIT_REVERSAL',
  /** The shop_cash_credit transaction type. */
  ShopCashCredit = 'SHOP_CASH_CREDIT',
  /** The shop_cash_credit_reversal transaction type. */
  ShopCashCreditReversal = 'SHOP_CASH_CREDIT_REVERSAL',
  /** The shop_cash_refund_debit transaction type. */
  ShopCashRefundDebit = 'SHOP_CASH_REFUND_DEBIT',
  /** The shop_cash_refund_debit_reversal transaction type. */
  ShopCashRefundDebitReversal = 'SHOP_CASH_REFUND_DEBIT_REVERSAL',
  /** The stripe_fee transaction type. */
  StripeFee = 'STRIPE_FEE',
  /** The tax_adjustment_credit transaction type. */
  TaxAdjustmentCredit = 'TAX_ADJUSTMENT_CREDIT',
  /** The tax_adjustment_credit_reversal transaction type. */
  TaxAdjustmentCreditReversal = 'TAX_ADJUSTMENT_CREDIT_REVERSAL',
  /** The tax_adjustment_debit transaction type. */
  TaxAdjustmentDebit = 'TAX_ADJUSTMENT_DEBIT',
  /** The tax_adjustment_debit_reversal transaction type. */
  TaxAdjustmentDebitReversal = 'TAX_ADJUSTMENT_DEBIT_REVERSAL',
  /** The transfer transaction type. */
  Transfer = 'TRANSFER',
  /** The transfer_cancel transaction type. */
  TransferCancel = 'TRANSFER_CANCEL',
  /** The transfer_failure transaction type. */
  TransferFailure = 'TRANSFER_FAILURE',
  /** The transfer_refund transaction type. */
  TransferRefund = 'TRANSFER_REFUND',
  /** The vat_refund_credit transaction type. */
  VatRefundCredit = 'VAT_REFUND_CREDIT',
  /** The vat_refund_credit_reversal transaction type. */
  VatRefundCreditReversal = 'VAT_REFUND_CREDIT_REVERSAL'
}
/** The status of an order's eligibility for protection against fraudulent chargebacks by Shopify Protect. */
declare enum ShopifyProtectEligibilityStatus {
  /**
   * The order is eligible for protection against fraudulent chargebacks.
   * If an order is updated, the order's eligibility may change and protection could be removed.
   */
  Eligible = 'ELIGIBLE',
  /** The order isn't eligible for protection against fraudulent chargebacks. */
  NotEligible = 'NOT_ELIGIBLE',
  /** The eligibility of the order is pending and has not yet been determined. */
  Pending = 'PENDING'
}
/** The eligibility details of an order's protection against fraudulent chargebacks by Shopify Protect. */
type ShopifyProtectOrderEligibility = {
  __typename?: 'ShopifyProtectOrderEligibility'; /** The status of whether an order is eligible for protection against fraudulent chargebacks. */
  status: ShopifyProtectEligibilityStatus;
};
/** A summary of Shopify Protect details for an order. */
type ShopifyProtectOrderSummary = {
  __typename?: 'ShopifyProtectOrderSummary'; /** The eligibility details of an order's protection against fraudulent chargebacks. */
  eligibility: ShopifyProtectOrderEligibility; /** The status of the order's protection against fraudulent chargebacks. */
  status: ShopifyProtectStatus;
};
/** The status of an order's protection with Shopify Protect. */
declare enum ShopifyProtectStatus {
  /**
   * The protection for the order is active and eligible for reimbursement against fraudulent chargebacks.
   * If an order is updated, the order's eligibility may change and protection could become inactive.
   */
  Active = 'ACTIVE',
  /** The protection for an order isn't active because the order didn't meet eligibility requirements. */
  Inactive = 'INACTIVE',
  /** The order received a chargeback but the order wasn't protected because it didn't meet coverage requirements. */
  NotProtected = 'NOT_PROTECTED',
  /** The protection for the order is pending and has not yet been determined. */
  Pending = 'PENDING',
  /** The order received a fraudulent chargeback and it was protected. */
  Protected = 'PROTECTED'
}
/**
 * A user account that can access the Shopify admin to manage store operations. Includes personal information and account status.
 *
 * You can assign staff members to [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects for [B2B operations](https://shopify.dev/docs/apps/build/b2b), limiting their actions to those locations.
 */
type StaffMember = Node & {
  __typename?: 'StaffMember'; /** The type of account the staff member has. */
  accountType?: Maybe<AccountType>; /** Whether the staff member is active. */
  active: Scalars['Boolean']['output']; /** The image used as the staff member's avatar in the Shopify admin. */
  avatar: Image; /** The staff member's email address. */
  email: Scalars['String']['output']; /** Whether the staff member's account exists. */
  exists: Scalars['Boolean']['output']; /** The staff member's first name. */
  firstName?: Maybe<Scalars['String']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The staff member's initials, if available. */
  initials?: Maybe<Array<Scalars['String']['output']>>; /** Whether the staff member is the shop owner. */
  isShopOwner: Scalars['Boolean']['output']; /** The staff member's last name. */
  lastName?: Maybe<Scalars['String']['output']>; /** The staff member's preferred locale. Locale values use the format `language` or `language-COUNTRY`, where `language` is a two-letter language code, and `COUNTRY` is a two-letter country code. For example: `en` or `en-US` */
  locale: Scalars['String']['output']; /** The staff member's full name. */
  name: Scalars['String']['output']; /** The staff member's phone number. */
  phone?: Maybe<Scalars['String']['output']>; /** The data used to customize the Shopify admin experience for the staff member. */
  privateData: StaffMemberPrivateData;
};
/** An auto-generated type for paginating through multiple StaffMembers. */
type StaffMemberConnection = {
  __typename?: 'StaffMemberConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<StaffMemberEdge>; /** A list of nodes that are contained in StaffMemberEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<StaffMember>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one StaffMember and a cursor during pagination. */
type StaffMemberEdge = {
  __typename?: 'StaffMemberEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of StaffMemberEdge. */
  node: StaffMember;
};
/** Represents access permissions for a staff member. */
declare enum StaffMemberPermission {
  /** The staff member can manage and install apps and channels. */
  Applications = 'APPLICATIONS',
  /** The staff member can manage and install sales channels. */
  Channels = 'CHANNELS',
  /** The staff member can create and edit customers. */
  CreateAndEditCustomers = 'CREATE_AND_EDIT_CUSTOMERS',
  /** The staff member can create and edit gift cards. */
  CreateAndEditGiftCards = 'CREATE_AND_EDIT_GIFT_CARDS',
  /** The staff member can create and edit markets. */
  CreateAndEditMarkets = 'CREATE_AND_EDIT_MARKETS',
  /** The staff member can view customers. */
  Customers = 'CUSTOMERS',
  /** The staff member can view the Shopify Home page, which includes sales information and other shop data. */
  Dashboard = 'DASHBOARD',
  /** The staff member can deactivate gift cards. */
  DeactivateGiftCards = 'DEACTIVATE_GIFT_CARDS',
  /** The staff member can delete customers. */
  DeleteCustomers = 'DELETE_CUSTOMERS',
  /** The staff member can delete markets. */
  DeleteMarkets = 'DELETE_MARKETS',
  /** The staff member can view, buy, and manage domains. */
  Domains = 'DOMAINS',
  /** The staff member can create, update, and delete draft orders. */
  DraftOrders = 'DRAFT_ORDERS',
  /** The staff member can update orders. */
  EditOrders = 'EDIT_ORDERS',
  /** The staff member can erase customer private data. */
  EraseCustomerData = 'ERASE_CUSTOMER_DATA',
  /** The staff member can export customers. */
  ExportCustomers = 'EXPORT_CUSTOMERS',
  /** The staff member can export gift cards. */
  ExportGiftCards = 'EXPORT_GIFT_CARDS',
  /**
   * The staff has the same permissions as the [store owner](https://shopify.dev/en/manual/your-account/staff-accounts/staff-permissions#store-owner-permissions) with some exceptions, such as modifying the account billing or deleting staff accounts.
   * @deprecated Use the list of the staff member's explicit permissions returned in the `StaffMember.permissions.userPermissions` field instead of `full` permission.
   */
  Full = 'FULL',
  /** The staff member can view, create, issue, and export gift cards to a CSV file. */
  GiftCards = 'GIFT_CARDS',
  /** The staff member can view and modify links and navigation menus. */
  Links = 'LINKS',
  /** The staff member can create, update, and delete locations where inventory is stocked or managed. */
  Locations = 'LOCATIONS',
  /** The staff member can view and create discount codes and automatic discounts, and export discounts to a CSV file. */
  Marketing = 'MARKETING',
  /** The staff member can view, create, and automate marketing campaigns. */
  MarketingSection = 'MARKETING_SECTION',
  /** The staff member can merge customers. */
  MergeCustomers = 'MERGE_CUSTOMERS',
  /** The staff member can view, create, update, delete, and cancel orders, and receive order notifications. The staff member can still create draft orders without this permission. */
  Orders = 'ORDERS',
  /** The staff member can view the Overview and Live view pages, which include sales information, and other shop and sales channels data. */
  Overviews = 'OVERVIEWS',
  /** The staff member can view, create, update, publish, and delete blog posts and pages. */
  Pages = 'PAGES',
  /** The staff member can pay for an order by using a vaulted card. */
  PayOrdersByVaultedCard = 'PAY_ORDERS_BY_VAULTED_CARD',
  /** The staff member can view the preferences and configuration of a shop. */
  Preferences = 'PREFERENCES',
  /** The staff member can view, create, import, and update products, collections, and inventory. */
  Products = 'PRODUCTS',
  /** The staff member can view and create all reports, which includes sales information and other shop data. */
  Reports = 'REPORTS',
  /** The staff member can request customer private data. */
  RequestCustomerData = 'REQUEST_CUSTOMER_DATA',
  /** The staff member can view, update, and publish themes. */
  Themes = 'THEMES',
  /**
   * The staff member can view and create translations.
   * @deprecated Unused.
   */
  Translations = 'TRANSLATIONS',
  /** The staff member can view markets. */
  ViewMarkets = 'VIEW_MARKETS'
}
/** Represents the data used to customize the Shopify admin experience for a logged-in staff member. */
type StaffMemberPrivateData = {
  __typename?: 'StaffMemberPrivateData'; /** The URL to the staff member's account settings page. */
  accountSettingsUrl: Scalars['URL']['output']; /** The date and time when the staff member was created. */
  createdAt: Scalars['DateTime']['output'];
  /**
   * Access permissions for the staff member.
   * @deprecated There's no alternative field to use instead.
   */
  permissions: Array<StaffMemberPermission>;
};
/**
 * Standard metafield definition templates provide preset configurations to create metafield definitions.
 * Each template has a specific namespace and key that we've reserved to have specific meanings for common use cases.
 *
 * Refer to the [list of standard metafield definitions](https://shopify.dev/apps/metafields/definitions/standard-definitions).
 */
type StandardMetafieldDefinitionTemplate = Node & {
  __typename?: 'StandardMetafieldDefinitionTemplate'; /** The description of the standard metafield definition. */
  description?: Maybe<Scalars['String']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The key owned by the definition after the definition has been activated. */
  key: Scalars['String']['output']; /** The human-readable name for the standard metafield definition. */
  name: Scalars['String']['output']; /** The namespace owned by the definition after the definition has been activated. */
  namespace: Scalars['String']['output']; /** The list of resource types that the standard metafield definition can be applied to. */
  ownerTypes: Array<MetafieldOwnerType>; /** The associated [metafield definition type](https://shopify.dev/apps/metafields/definitions/types) that the metafield stores. */
  type: MetafieldDefinitionType; /** The configured validations for the standard metafield definition. */
  validations: Array<MetafieldDefinitionValidation>; /** Whether metafields for the definition are by default visible using the Storefront API. */
  visibleToStorefrontApi: Scalars['Boolean']['output'];
};
/** Describes a capability that is enabled on a Metaobject Definition. */
type StandardMetaobjectCapabilityTemplate = {
  __typename?: 'StandardMetaobjectCapabilityTemplate'; /** The type of capability that's enabled for the metaobject definition. */
  capabilityType: MetaobjectCapabilityType;
};
/** A preset field definition on a standard metaobject definition template. */
type StandardMetaobjectDefinitionFieldTemplate = {
  __typename?: 'StandardMetaobjectDefinitionFieldTemplate'; /** The administrative description. */
  description?: Maybe<Scalars['String']['output']>; /** The key owned by the definition after the definition has been enabled. */
  key: Scalars['String']['output']; /** The human-readable name. */
  name: Scalars['String']['output']; /** The required status of the field within the object composition. */
  required: Scalars['Boolean']['output']; /** The associated [metafield definition type](https://shopify.dev/apps/metafields/definitions/types) that the metafield stores. */
  type: MetafieldDefinitionType; /** The configured validations for the standard metafield definition. */
  validations: Array<MetafieldDefinitionValidation>; /** Whether metafields for the definition are by default visible using the Storefront API. */
  visibleToStorefrontApi: Scalars['Boolean']['output'];
};
/** Standard metaobject definition templates provide preset configurations to create metaobject definitions. */
type StandardMetaobjectDefinitionTemplate = {
  __typename?: 'StandardMetaobjectDefinitionTemplate'; /** The administrative description. */
  description?: Maybe<Scalars['String']['output']>; /** The key of a field to reference as the display name for each object. */
  displayNameKey?: Maybe<Scalars['String']['output']>; /** The capabilities of the metaobject definition. */
  enabledCapabilities: Array<StandardMetaobjectCapabilityTemplate>; /** Templates for the associated field definitions. */
  fieldDefinitions: Array<StandardMetaobjectDefinitionFieldTemplate>; /** The human-readable name. */
  name: Scalars['String']['output']; /** The namespace owned by the definition after the definition has been enabled. */
  type: Scalars['String']['output'];
};
/** Represents the details of a specific type of product within the [Shopify product taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17). */
type StandardizedProductType = {
  __typename?: 'StandardizedProductType'; /** The product taxonomy node associated with the standardized product type. */
  productTaxonomyNode?: Maybe<ProductTaxonomyNode>;
};
/**
 * A store credit account contains a monetary balance that can be redeemed at checkout for purchases in the shop.
 * The account is held in the specified currency and has an owner that cannot be transferred.
 *
 * The account balance is redeemable at checkout only when the owner is authenticated via [new customer accounts authentication](https://shopify.dev/docs/api/customer).
 */
type StoreCreditAccount = Node & {
  __typename?: 'StoreCreditAccount'; /** The current balance of the store credit account. */
  balance: MoneyV2; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The owner of the store credit account. */
  owner: HasStoreCreditAccounts; /** The transaction history of the store credit account. */
  transactions: StoreCreditAccountTransactionConnection;
};
/** An auto-generated type for paginating through multiple StoreCreditAccounts. */
type StoreCreditAccountConnection = {
  __typename?: 'StoreCreditAccountConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<StoreCreditAccountEdge>; /** A list of nodes that are contained in StoreCreditAccountEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<StoreCreditAccount>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one StoreCreditAccount and a cursor during pagination. */
type StoreCreditAccountEdge = {
  __typename?: 'StoreCreditAccountEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of StoreCreditAccountEdge. */
  node: StoreCreditAccount;
};
/** Interface for a store credit account transaction. */
type StoreCreditAccountTransaction = {
  /** The store credit account that the transaction belongs to. */account: StoreCreditAccount; /** The amount of the transaction. */
  amount: MoneyV2; /** The balance of the account after the transaction. */
  balanceAfterTransaction: MoneyV2; /** The date and time when the transaction was created. */
  createdAt: Scalars['DateTime']['output']; /** The event that caused the store credit account transaction. */
  event: StoreCreditSystemEvent; /** The origin of the store credit account transaction. */
  origin?: Maybe<StoreCreditAccountTransactionOrigin>;
};
/** An auto-generated type for paginating through multiple StoreCreditAccountTransactions. */
type StoreCreditAccountTransactionConnection = {
  __typename?: 'StoreCreditAccountTransactionConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<StoreCreditAccountTransactionEdge>; /** A list of nodes that are contained in StoreCreditAccountTransactionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<StoreCreditAccountTransaction>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one StoreCreditAccountTransaction and a cursor during pagination. */
type StoreCreditAccountTransactionEdge = {
  __typename?: 'StoreCreditAccountTransactionEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of StoreCreditAccountTransactionEdge. */
  node: StoreCreditAccountTransaction;
};
/** The origin of a store credit account transaction. */
type StoreCreditAccountTransactionOrigin = OrderTransaction;
/** The event that caused the store credit account transaction. */
declare enum StoreCreditSystemEvent {
  /** An adjustment was made to the store credit account. */
  Adjustment = 'ADJUSTMENT',
  /** Store credit was returned when an authorized payment was voided. */
  OrderCancellation = 'ORDER_CANCELLATION',
  /** Store credit was used as payment for an order. */
  OrderPayment = 'ORDER_PAYMENT',
  /** Store credit was refunded from an order. */
  OrderRefund = 'ORDER_REFUND',
  /** A store credit payment was reverted due to another payment method failing. */
  PaymentFailure = 'PAYMENT_FAILURE',
  /** A smaller amount of store credit was captured than was originally authorized. */
  PaymentReturned = 'PAYMENT_RETURNED',
  /** Tax finalization affected the store credit payment. */
  TaxFinalization = 'TAX_FINALIZATION'
}
/**
 * A token that delegates unauthenticated access scopes to clients that need to access the [Storefront API](https://shopify.dev/docs/api/storefront). Storefront access tokens enable headless storefronts and custom applications to interact with a store on behalf of customers without requiring authentication.
 *
 * The token provides specific permissions, such as reading [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) data, managing carts, or creating [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) accounts. An app can have a maximum of 100 active storefront access tokens for each [`Shop`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop).
 *
 * Learn more about [building with the Storefront API](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/getting-started).
 */
type StorefrontAccessToken = Node & {
  __typename?: 'StorefrontAccessToken'; /** List of permissions associated with the token. */
  accessScopes: Array<AccessScope>; /** The issued public access token. */
  accessToken: Scalars['String']['output']; /** The date and time when the public access token was created. */
  createdAt: Scalars['DateTime']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** An arbitrary title for each token determined by the developer, used for reference         purposes. */
  title: Scalars['String']['output']; /** The date and time when the storefront access token was updated. */
  updatedAt: Scalars['DateTime']['output'];
};
/** An auto-generated type for paginating through multiple StorefrontAccessTokens. */
type StorefrontAccessTokenConnection = {
  __typename?: 'StorefrontAccessTokenConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<StorefrontAccessTokenEdge>; /** A list of nodes that are contained in StorefrontAccessTokenEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<StorefrontAccessToken>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one StorefrontAccessToken and a cursor during pagination. */
type StorefrontAccessTokenEdge = {
  __typename?: 'StorefrontAccessTokenEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of StorefrontAccessTokenEdge. */
  node: StorefrontAccessToken;
};
/** An auto-generated type for paginating through multiple Strings. */
type StringConnection = {
  __typename?: 'StringConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<StringEdge>; /** A list of nodes that are contained in StringEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<Scalars['String']['output']>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one String and a cursor during pagination. */
type StringEdge = {
  __typename?: 'StringEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of StringEdge. */
  node: Scalars['String']['output'];
};
/** Represents an applied code discount. */
type SubscriptionAppliedCodeDiscount = {
  __typename?: 'SubscriptionAppliedCodeDiscount'; /** The unique ID. */
  id: Scalars['ID']['output']; /** The redeem code of the discount that applies on the subscription. */
  redeemCode: Scalars['String']['output']; /** The reason that the discount on the subscription draft is rejected. */
  rejectionReason?: Maybe<SubscriptionDiscountRejectionReason>;
};
/**
 * A record of an execution of the subscription billing process. Billing attempts use idempotency keys to avoid duplicate order creation.
 *
 * When a billing attempt completes successfully, it creates an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The attempt includes associated payment transactions and any errors that occur during billing. If 3D Secure authentication is required, the `nextActionUrl` field provides the redirect URL for customer verification.
 */
type SubscriptionBillingAttempt = Node & {
  __typename?: 'SubscriptionBillingAttempt'; /** The date and time when the billing attempt was completed. */
  completedAt?: Maybe<Scalars['DateTime']['output']>; /** The date and time when the billing attempt was created. */
  createdAt: Scalars['DateTime']['output'];
  /**
   * A code corresponding to a payment error during processing.
   * @deprecated Use `state` instead.
   */
  errorCode?: Maybe<SubscriptionBillingAttemptErrorCode>;
  /**
   * A message describing a payment error during processing.
   * @deprecated Use `state` instead.
   */
  errorMessage?: Maybe<Scalars['String']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** A unique key generated by the client to avoid duplicate payments. */
  idempotencyKey: Scalars['String']['output'];
  /**
   * The URL where the customer needs to be redirected so they can complete the 3D Secure payment flow.
   * @deprecated Use `state` instead.
   */
  nextActionUrl?: Maybe<Scalars['URL']['output']>;
  /**
   * The result of this billing attempt if completed successfully.
   * @deprecated Use `state` instead.
   */
  order?: Maybe<Order>;
  /**
   * The date and time used to calculate fulfillment intervals for a billing attempt that
   * successfully completed after the current anchor date. To prevent fulfillment from being
   * pushed to the next anchor date, this field can override the billing attempt date.
   */
  originTime?: Maybe<Scalars['DateTime']['output']>; /** The reference shared between retried payment attempts. */
  paymentGroupId?: Maybe<Scalars['String']['output']>; /** The reference shared between payment attempts with similar payment details. */
  paymentSessionId?: Maybe<Scalars['String']['output']>;
  /**
   * Error information from processing the billing attempt.
   * @deprecated Use `state` instead.
   */
  processingError?: Maybe<SubscriptionBillingAttemptProcessingError>;
  /**
   * Whether the billing attempt is still processing.
   * @deprecated Use `state` instead.
   */
  ready: Scalars['Boolean']['output']; /** Whether the billing attempt respects the merchant's inventory policy. */
  respectInventoryPolicy: Scalars['Boolean']['output']; /** The subscription contract. */
  subscriptionContract: SubscriptionContract; /** The transactions created by the billing attempt. */
  transactions: OrderTransactionConnection;
};
/** An auto-generated type for paginating through multiple SubscriptionBillingAttempts. */
type SubscriptionBillingAttemptConnection = {
  __typename?: 'SubscriptionBillingAttemptConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<SubscriptionBillingAttemptEdge>; /** A list of nodes that are contained in SubscriptionBillingAttemptEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<SubscriptionBillingAttempt>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one SubscriptionBillingAttempt and a cursor during pagination. */
type SubscriptionBillingAttemptEdge = {
  __typename?: 'SubscriptionBillingAttemptEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of SubscriptionBillingAttemptEdge. */
  node: SubscriptionBillingAttempt;
};
/**
 * The possible error codes associated with making billing attempts. The error codes supplement the
 * `error_message` to provide consistent results and help with dunning management.
 */
declare enum SubscriptionBillingAttemptErrorCode {
  /** The amount is too small. */
  AmountTooSmall = 'AMOUNT_TOO_SMALL',
  /** There was an error during the payment authentication. */
  AuthenticationError = 'AUTHENTICATION_ERROR',
  /** Payment method was canceled by buyer. */
  BuyerCanceledPaymentMethod = 'BUYER_CANCELED_PAYMENT_METHOD',
  /** Card number was incorrect. */
  CardNumberIncorrect = 'CARD_NUMBER_INCORRECT',
  /** Customer is invalid. */
  CustomerInvalid = 'CUSTOMER_INVALID',
  /** Customer was not found. */
  CustomerNotFound = 'CUSTOMER_NOT_FOUND',
  /** Payment method is expired. */
  ExpiredPaymentMethod = 'EXPIRED_PAYMENT_METHOD',
  /** Fraud was suspected. */
  FraudSuspected = 'FRAUD_SUSPECTED',
  /** Gift cards must have a price greater than zero. */
  FreeGiftCardNotAllowed = 'FREE_GIFT_CARD_NOT_ALLOWED',
  /** Insufficient funds. */
  InsufficientFunds = 'INSUFFICIENT_FUNDS',
  /** Not enough inventory found. */
  InsufficientInventory = 'INSUFFICIENT_INVENTORY',
  /** The billing agreement ID or the transaction ID for the customer's payment method is invalid. */
  InvalidCustomerBillingAgreement = 'INVALID_CUSTOMER_BILLING_AGREEMENT',
  /** Payment method is invalid. Please update or create a new payment method. */
  InvalidPaymentMethod = 'INVALID_PAYMENT_METHOD',
  /** The shipping address is either missing or invalid. */
  InvalidShippingAddress = 'INVALID_SHIPPING_ADDRESS',
  /** No inventory location found or enabled. */
  InventoryAllocationsNotFound = 'INVENTORY_ALLOCATIONS_NOT_FOUND',
  /** A payment has already been made for this invoice. */
  InvoiceAlreadyPaid = 'INVOICE_ALREADY_PAID',
  /** Non-test order limit reached. Use a test payment gateway to place another order. */
  NonTestOrderLimitReached = 'NON_TEST_ORDER_LIMIT_REACHED',
  /** Payment method was declined by processor. */
  PaymentMethodDeclined = 'PAYMENT_METHOD_DECLINED',
  /** Payment method cannot be used with the current payment gateway test mode configuration. */
  PaymentMethodIncompatibleWithGatewayConfig = 'PAYMENT_METHOD_INCOMPATIBLE_WITH_GATEWAY_CONFIG',
  /** Payment method was not found. */
  PaymentMethodNotFound = 'PAYMENT_METHOD_NOT_FOUND',
  /** Payment provider is not enabled. */
  PaymentProviderIsNotEnabled = 'PAYMENT_PROVIDER_IS_NOT_ENABLED',
  /** Paypal Error General. */
  PaypalErrorGeneral = 'PAYPAL_ERROR_GENERAL',
  /** Purchase Type is not supported. */
  PurchaseTypeNotSupported = 'PURCHASE_TYPE_NOT_SUPPORTED',
  /** Gateway is in test mode and attempted to bill a live payment method. */
  TestMode = 'TEST_MODE',
  /** Transient error, try again later. */
  TransientError = 'TRANSIENT_ERROR',
  /** There was an unexpected error during the billing attempt. */
  UnexpectedError = 'UNEXPECTED_ERROR'
}
/** An error that prevented a billing attempt. */
type SubscriptionBillingAttemptProcessingError = {
  /** The code for the error. */code: SubscriptionBillingAttemptErrorCode; /** An explanation of the error. */
  message: Scalars['String']['output'];
};
/** Represents a Subscription Billing Policy. */
type SubscriptionBillingPolicy = {
  __typename?: 'SubscriptionBillingPolicy'; /** Specific anchor dates upon which the billing interval calculations should be made. */
  anchors: Array<SellingPlanAnchor>; /** The kind of interval that's associated with this schedule (e.g. Monthly, Weekly, etc). */
  interval: SellingPlanInterval; /** The number of billing intervals between invoices. */
  intervalCount: Scalars['Int']['output']; /** Maximum amount of cycles after which the subscription ends. */
  maxCycles?: Maybe<Scalars['Int']['output']>; /** Minimum amount of cycles required in the subscription. */
  minCycles?: Maybe<Scalars['Int']['output']>;
};
/**
 * A subscription contract that defines recurring purchases for a customer. Each contract specifies what products to deliver, when to bill and ship them, and at what price.
 *
 * The contract includes [`SubscriptionBillingPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy) and [`SubscriptionDeliveryPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy) that control the frequency of charges and fulfillments. [`SubscriptionLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine) items define the products, quantities, and pricing for each recurring [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The contract tracks [`SubscriptionBillingAttempt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt) records, payment status, and generated orders throughout its lifecycle. [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) instances manage contracts through various status transitions including active, paused, failed, cancelled, or expired states.
 *
 * Learn more about [building subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract) and [updating subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract).
 */
type SubscriptionContract = Node & SubscriptionContractBase & {
  __typename?: 'SubscriptionContract'; /** The subscription app that the subscription contract is registered to. */
  app?: Maybe<App>; /** The URL of the subscription contract page on the subscription app. */
  appAdminUrl?: Maybe<Scalars['URL']['output']>; /** The list of billing attempts associated with the subscription contract. */
  billingAttempts: SubscriptionBillingAttemptConnection; /** The billing policy associated with the subscription contract. */
  billingPolicy: SubscriptionBillingPolicy; /** The date and time when the subscription contract was created. */
  createdAt: Scalars['DateTime']['output']; /** The currency that's used for the subscription contract. */
  currencyCode: CurrencyCode; /** A list of the custom attributes to be added to the generated orders. */
  customAttributes: Array<Attribute>; /** The customer to whom the subscription contract belongs. */
  customer?: Maybe<Customer>; /** The customer payment method that's used for the subscription contract. */
  customerPaymentMethod?: Maybe<CustomerPaymentMethod>; /** The delivery method for each billing of the subscription contract. */
  deliveryMethod?: Maybe<SubscriptionDeliveryMethod>; /** The delivery policy associated with the subscription contract. */
  deliveryPolicy: SubscriptionDeliveryPolicy; /** The delivery price for each billing of the subscription contract. */
  deliveryPrice: MoneyV2; /** The list of subscription discounts associated with the subscription contract. */
  discounts: SubscriptionManualDiscountConnection; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The last billing error type of the contract. */
  lastBillingAttemptErrorType?: Maybe<SubscriptionContractLastBillingErrorType>; /** The current status of the last payment. */
  lastPaymentStatus?: Maybe<SubscriptionContractLastPaymentStatus>;
  /**
   * The number of lines associated with the subscription contract.
   * @deprecated Use `linesCount` instead.
   */
  lineCount: Scalars['Int']['output']; /** The list of subscription lines associated with the subscription contract. */
  lines: SubscriptionLineConnection; /** The number of lines associated with the subscription contract. */
  linesCount?: Maybe<Count>;
  /**
   * The next billing date for the subscription contract. This field is managed by the apps.
   *         Alternatively you can utilize our
   *         [Billing Cycles APIs](https://shopify.dev/docs/apps/selling-strategies/subscriptions/billing-cycles),
   *         which provide auto-computed billing dates and additional functionalities.
   */
  nextBillingDate?: Maybe<Scalars['DateTime']['output']>; /** The note field that will be applied to the generated orders. */
  note?: Maybe<Scalars['String']['output']>; /** A list of the subscription contract's orders. */
  orders: OrderConnection; /** The order from which this contract originated. */
  originOrder?: Maybe<Order>; /** The revision id of the contract. */
  revisionId: Scalars['UnsignedInt64']['output']; /** The current status of the subscription contract. */
  status: SubscriptionContractSubscriptionStatus; /** The date and time when the subscription contract was updated. */
  updatedAt: Scalars['DateTime']['output'];
};
/** Represents subscription contract common fields. */
type SubscriptionContractBase = {
  /** The subscription app that the subscription contract is registered to. */app?: Maybe<App>; /** The URL of the subscription contract page on the subscription app. */
  appAdminUrl?: Maybe<Scalars['URL']['output']>; /** The currency that's used for the subscription contract. */
  currencyCode: CurrencyCode; /** A list of the custom attributes to be added to the generated orders. */
  customAttributes: Array<Attribute>; /** The customer to whom the subscription contract belongs. */
  customer?: Maybe<Customer>; /** The customer payment method that's used for the subscription contract. */
  customerPaymentMethod?: Maybe<CustomerPaymentMethod>; /** The delivery method for each billing of the subscription contract. */
  deliveryMethod?: Maybe<SubscriptionDeliveryMethod>; /** The delivery price for each billing of the subscription contract. */
  deliveryPrice: MoneyV2; /** The list of subscription discounts associated with the subscription contract. */
  discounts: SubscriptionManualDiscountConnection;
  /**
   * The number of lines associated with the subscription contract.
   * @deprecated Use `linesCount` instead.
   */
  lineCount: Scalars['Int']['output']; /** The list of subscription lines associated with the subscription contract. */
  lines: SubscriptionLineConnection; /** The number of lines associated with the subscription contract. */
  linesCount?: Maybe<Count>; /** The note field that will be applied to the generated orders. */
  note?: Maybe<Scalars['String']['output']>; /** A list of the subscription contract's orders. */
  orders: OrderConnection; /** The date and time when the subscription contract was updated. */
  updatedAt: Scalars['DateTime']['output'];
};
/** An auto-generated type for paginating through multiple SubscriptionContracts. */
type SubscriptionContractConnection = {
  __typename?: 'SubscriptionContractConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<SubscriptionContractEdge>; /** A list of nodes that are contained in SubscriptionContractEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<SubscriptionContract>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one SubscriptionContract and a cursor during pagination. */
type SubscriptionContractEdge = {
  __typename?: 'SubscriptionContractEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of SubscriptionContractEdge. */
  node: SubscriptionContract;
};
/** The possible values of the last billing error on a subscription contract. */
declare enum SubscriptionContractLastBillingErrorType {
  /** Subscription billing attempt error due to customer error. */
  CustomerError = 'CUSTOMER_ERROR',
  /** Subscription billing attempt error due to inventory error. */
  InventoryError = 'INVENTORY_ERROR',
  /** All other billing attempt errors. */
  Other = 'OTHER',
  /** Subscription billing attempt error due to payment error. */
  PaymentError = 'PAYMENT_ERROR'
}
/** The possible status values of the last payment on a subscription contract. */
declare enum SubscriptionContractLastPaymentStatus {
  /** Failed subscription billing attempt. */
  Failed = 'FAILED',
  /** Successful subscription billing attempt. */
  Succeeded = 'SUCCEEDED'
}
/** The possible status values of a subscription. */
declare enum SubscriptionContractSubscriptionStatus {
  /** The contract is active and continuing per its policies. */
  Active = 'ACTIVE',
  /** The contract was ended by an unplanned customer action. */
  Cancelled = 'CANCELLED',
  /** The contract has ended per the expected circumstances. All billing and deliverycycles of the subscriptions were executed. */
  Expired = 'EXPIRED',
  /** The contract ended because billing failed and no further billing attempts are expected. */
  Failed = 'FAILED',
  /** The contract is temporarily paused and is expected to resume in the future. */
  Paused = 'PAUSED'
}
/** Represents a Subscription Line Pricing Cycle Adjustment. */
type SubscriptionCyclePriceAdjustment = {
  __typename?: 'SubscriptionCyclePriceAdjustment'; /** Price adjustment type. */
  adjustmentType: SellingPlanPricingPolicyAdjustmentType; /** Price adjustment value. */
  adjustmentValue: SellingPlanPricingPolicyAdjustmentValue; /** The number of cycles required before this pricing policy applies. */
  afterCycle: Scalars['Int']['output']; /** The computed price after the adjustments applied. */
  computedPrice: MoneyV2;
};
/** Describes the delivery method to use to get the physical goods to the customer. */
type SubscriptionDeliveryMethod = SubscriptionDeliveryMethodLocalDelivery | SubscriptionDeliveryMethodPickup | SubscriptionDeliveryMethodShipping;
/**
 * A subscription delivery method for local delivery.
 * The other subscription delivery methods can be found in the `SubscriptionDeliveryMethod` union type.
 */
type SubscriptionDeliveryMethodLocalDelivery = {
  __typename?: 'SubscriptionDeliveryMethodLocalDelivery'; /** The address to deliver to. */
  address: MailingAddress; /** The details of the local delivery method to use. */
  localDeliveryOption: SubscriptionDeliveryMethodLocalDeliveryOption;
};
/** The selected delivery option on a subscription contract. */
type SubscriptionDeliveryMethodLocalDeliveryOption = {
  __typename?: 'SubscriptionDeliveryMethodLocalDeliveryOption'; /** A custom reference to the delivery method for use with automations. */
  code?: Maybe<Scalars['String']['output']>; /** The details displayed to the customer to describe the local delivery option. */
  description?: Maybe<Scalars['String']['output']>; /** The delivery instructions that the customer can provide to the merchant. */
  instructions?: Maybe<Scalars['String']['output']>;
  /**
   * The phone number that the customer provided to the merchant.
   * Formatted using E.164 standard. For example, `+16135551111`.
   */
  phone: Scalars['String']['output']; /** The presentment title of the local delivery option. */
  presentmentTitle?: Maybe<Scalars['String']['output']>; /** The title of the local delivery option. */
  title?: Maybe<Scalars['String']['output']>;
};
/** A delivery method with a pickup option. */
type SubscriptionDeliveryMethodPickup = {
  __typename?: 'SubscriptionDeliveryMethodPickup'; /** The details of the pickup delivery method to use. */
  pickupOption: SubscriptionDeliveryMethodPickupOption;
};
/** Represents the selected pickup option on a subscription contract. */
type SubscriptionDeliveryMethodPickupOption = {
  __typename?: 'SubscriptionDeliveryMethodPickupOption'; /** A custom reference to the delivery method for use with automations. */
  code?: Maybe<Scalars['String']['output']>; /** The details displayed to the customer to describe the pickup option. */
  description?: Maybe<Scalars['String']['output']>; /** The location where the customer will pick up the merchandise. */
  location: Location; /** The presentment title of the pickup option. */
  presentmentTitle?: Maybe<Scalars['String']['output']>; /** The title of the pickup option. */
  title?: Maybe<Scalars['String']['output']>;
};
/** Represents a shipping delivery method: a mailing address and a shipping option. */
type SubscriptionDeliveryMethodShipping = {
  __typename?: 'SubscriptionDeliveryMethodShipping'; /** The address to ship to. */
  address: MailingAddress; /** The details of the shipping method to use. */
  shippingOption: SubscriptionDeliveryMethodShippingOption;
};
/** Represents the selected shipping option on a subscription contract. */
type SubscriptionDeliveryMethodShippingOption = {
  __typename?: 'SubscriptionDeliveryMethodShippingOption';
  /**
   * The carrier service that's providing this shipping option.
   * This field isn't currently supported and returns null.
   * @deprecated This field has never been implemented.
   */
  carrierService?: Maybe<DeliveryCarrierService>; /** The code of the shipping option. */
  code?: Maybe<Scalars['String']['output']>; /** The description of the shipping option. */
  description?: Maybe<Scalars['String']['output']>; /** The presentment title of the shipping option. */
  presentmentTitle?: Maybe<Scalars['String']['output']>; /** The title of the shipping option. */
  title?: Maybe<Scalars['String']['output']>;
};
/** Represents a Subscription Delivery Policy. */
type SubscriptionDeliveryPolicy = {
  __typename?: 'SubscriptionDeliveryPolicy'; /** The specific anchor dates upon which the delivery interval calculations should be made. */
  anchors: Array<SellingPlanAnchor>; /** The kind of interval that's associated with this schedule (e.g. Monthly, Weekly, etc). */
  interval: SellingPlanInterval; /** The number of delivery intervals between deliveries. */
  intervalCount: Scalars['Int']['output'];
};
/** Subscription draft discount types. */
type SubscriptionDiscount = SubscriptionAppliedCodeDiscount | SubscriptionManualDiscount;
/** Represents what a particular discount reduces from a line price. */
type SubscriptionDiscountAllocation = {
  __typename?: 'SubscriptionDiscountAllocation'; /** Allocation amount. */
  amount: MoneyV2; /** Discount that created the allocation. */
  discount: SubscriptionDiscount;
};
/** Represents the subscription lines the discount applies on. */
type SubscriptionDiscountEntitledLines = {
  __typename?: 'SubscriptionDiscountEntitledLines'; /** Specify whether the subscription discount will apply on all subscription lines. */
  all: Scalars['Boolean']['output']; /** The list of subscription lines associated with the subscription discount. */
  lines: SubscriptionLineConnection;
};
/** The value of the discount and how it will be applied. */
type SubscriptionDiscountFixedAmountValue = {
  __typename?: 'SubscriptionDiscountFixedAmountValue'; /** The fixed amount value of the discount. */
  amount: MoneyV2; /** Whether the amount is applied per item. */
  appliesOnEachItem: Scalars['Boolean']['output'];
};
/** The percentage value of the discount. */
type SubscriptionDiscountPercentageValue = {
  __typename?: 'SubscriptionDiscountPercentageValue'; /** The percentage value of the discount. */
  percentage: Scalars['Int']['output'];
};
/** The reason a discount on a subscription draft was rejected. */
declare enum SubscriptionDiscountRejectionReason {
  /** Discount is inactive. */
  CurrentlyInactive = 'CURRENTLY_INACTIVE',
  /** Given customer does not qualify for the discount. */
  CustomerNotEligible = 'CUSTOMER_NOT_ELIGIBLE',
  /** Customer usage limit has been reached. */
  CustomerUsageLimitReached = 'CUSTOMER_USAGE_LIMIT_REACHED',
  /** Purchase type does not qualify for the discount. */
  IncompatiblePurchaseType = 'INCOMPATIBLE_PURCHASE_TYPE',
  /** Internal error during discount code validation. */
  InternalError = 'INTERNAL_ERROR',
  /** Discount code is not found. */
  NotFound = 'NOT_FOUND',
  /** Discount does not apply to any of the given line items. */
  NoEntitledLineItems = 'NO_ENTITLED_LINE_ITEMS',
  /** No applicable shipping lines. */
  NoEntitledShippingLines = 'NO_ENTITLED_SHIPPING_LINES',
  /** Purchase amount of items does not qualify for the discount. */
  PurchaseNotInRange = 'PURCHASE_NOT_IN_RANGE',
  /** Quantity of items does not qualify for the discount. */
  QuantityNotInRange = 'QUANTITY_NOT_IN_RANGE',
  /** Discount usage limit has been reached. */
  UsageLimitReached = 'USAGE_LIMIT_REACHED'
}
/** The value of the discount and how it will be applied. */
type SubscriptionDiscountValue = SubscriptionDiscountFixedAmountValue | SubscriptionDiscountPercentageValue;
/**
 * A product line item within a [`SubscriptionContract`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract). Each line represents a specific product variant that the customer subscribes to, including its quantity, pricing, and whether shipping is required.
 *
 * The line maintains references to the [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant), [`SellingPlan`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan), and custom [`Attribute`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute) objects. It tracks the current price and any scheduled price changes through its [`pricingPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionPricingPolicy). You can modify lines through [`SubscriptionDraft`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft) objects without affecting the original contract until you commit changes.
 *
 * Learn more about [subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts) and [selling plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans).
 */
type SubscriptionLine = {
  __typename?: 'SubscriptionLine'; /** The origin contract of the line if it was concatenated from another contract. */
  concatenatedOriginContract?: Maybe<SubscriptionContract>; /** The price per unit for the subscription line in the contract's currency. */
  currentPrice: MoneyV2; /** List of custom attributes associated to the line item. */
  customAttributes: Array<Attribute>; /** Discount allocations. */
  discountAllocations: Array<SubscriptionDiscountAllocation>; /** The unique ID. */
  id: Scalars['ID']['output']; /** Total line price including all discounts. */
  lineDiscountedPrice: MoneyV2; /** Describe the price changes of the line over time. */
  pricingPolicy?: Maybe<SubscriptionPricingPolicy>; /** The product ID associated with the subscription line. */
  productId?: Maybe<Scalars['ID']['output']>; /** The quantity of the unit selected for the subscription line. */
  quantity: Scalars['Int']['output']; /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars['Boolean']['output'];
  /**
   * The selling plan ID associated to the line.
   *
   * Indicates which selling plan was used to create this
   * contract line initially. The selling plan ID is also used to
   * find the associated delivery profile.
   *
   * The subscription contract, subscription line, or selling plan might have
   * changed. As a result, the selling plan's attributes might not
   * match the information on the contract.
   */
  sellingPlanId?: Maybe<Scalars['ID']['output']>;
  /**
   * The selling plan name associated to the line. This name describes
   * the order line items created from this subscription line
   * for both merchants and customers.
   *
   * The value can be different from the selling plan's name, because both
   * the selling plan's name and the subscription line's selling_plan_name
   * attribute can be updated independently.
   */
  sellingPlanName?: Maybe<Scalars['String']['output']>; /** Variant SKU number of the item associated with the subscription line. */
  sku?: Maybe<Scalars['String']['output']>; /** Whether the variant is taxable. */
  taxable: Scalars['Boolean']['output']; /** Product title of the item associated with the subscription line. */
  title: Scalars['String']['output']; /** The product variant ID associated with the subscription line. */
  variantId?: Maybe<Scalars['ID']['output']>; /** The image associated with the line item's variant or product. */
  variantImage?: Maybe<Image>; /** Product variant title of the item associated with the subscription line. */
  variantTitle?: Maybe<Scalars['String']['output']>;
};
/** An auto-generated type for paginating through multiple SubscriptionLines. */
type SubscriptionLineConnection = {
  __typename?: 'SubscriptionLineConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<SubscriptionLineEdge>; /** A list of nodes that are contained in SubscriptionLineEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<SubscriptionLine>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one SubscriptionLine and a cursor during pagination. */
type SubscriptionLineEdge = {
  __typename?: 'SubscriptionLineEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of SubscriptionLineEdge. */
  node: SubscriptionLine;
};
/** Custom subscription discount. */
type SubscriptionManualDiscount = {
  __typename?: 'SubscriptionManualDiscount'; /** Entitled line items used to apply the subscription discount on. */
  entitledLines: SubscriptionDiscountEntitledLines; /** The unique ID. */
  id: Scalars['ID']['output']; /** The maximum number of times the subscription discount will be applied on orders. */
  recurringCycleLimit?: Maybe<Scalars['Int']['output']>; /** The reason that the discount on the subscription draft is rejected. */
  rejectionReason?: Maybe<SubscriptionDiscountRejectionReason>; /** Type of line the discount applies on. */
  targetType: DiscountTargetType; /** The title associated with the subscription discount. */
  title?: Maybe<Scalars['String']['output']>; /** The type of the subscription discount. */
  type: DiscountType; /** The number of times the discount was applied. */
  usageCount: Scalars['Int']['output']; /** The value of the subscription discount. */
  value: SubscriptionDiscountValue;
};
/** An auto-generated type for paginating through multiple SubscriptionManualDiscounts. */
type SubscriptionManualDiscountConnection = {
  __typename?: 'SubscriptionManualDiscountConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<SubscriptionManualDiscountEdge>; /** A list of nodes that are contained in SubscriptionManualDiscountEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<SubscriptionManualDiscount>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one SubscriptionManualDiscount and a cursor during pagination. */
type SubscriptionManualDiscountEdge = {
  __typename?: 'SubscriptionManualDiscountEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of SubscriptionManualDiscountEdge. */
  node: SubscriptionManualDiscount;
};
/** Represents a Subscription Line Pricing Policy. */
type SubscriptionPricingPolicy = {
  __typename?: 'SubscriptionPricingPolicy'; /** The base price per unit for the subscription line in the contract's currency. */
  basePrice: MoneyV2; /** The adjustments per cycle for the subscription line. */
  cycleDiscounts: Array<SubscriptionCyclePriceAdjustment>;
};
/**
 * A suggested transaction. Suggested transaction are usually used in the context of refunds
 * and exchanges.
 */
type SuggestedOrderTransaction = {
  __typename?: 'SuggestedOrderTransaction'; /** The masked account number associated with the payment method. */
  accountNumber?: Maybe<Scalars['String']['output']>;
  /**
   * The amount of the transaction.
   * @deprecated Use `amountSet` instead.
   */
  amount: Scalars['Money']['output']; /** The amount and currency of the suggested order transaction in shop and presentment currencies. */
  amountSet: MoneyBag; /** The human-readable payment gateway name suggested to process the transaction. */
  formattedGateway?: Maybe<Scalars['String']['output']>; /** The suggested payment gateway used to process the transaction. */
  gateway?: Maybe<Scalars['String']['output']>; /** Specifies the kind of the suggested order transaction. */
  kind: SuggestedOrderTransactionKind;
  /**
   * Specifies the available amount to refund on the gateway. Only available within SuggestedRefund.
   * @deprecated Use `maximumRefundableSet` instead.
   */
  maximumRefundable?: Maybe<Scalars['Money']['output']>; /** Specifies the available amount to refund on the gateway in shop and presentment currencies. Only available within SuggestedRefund. */
  maximumRefundableSet?: Maybe<MoneyBag>; /** The associated parent transaction, for example the authorization of a capture. */
  parentTransaction?: Maybe<OrderTransaction>; /** The associated payment details related to the transaction. */
  paymentDetails?: Maybe<PaymentDetails>;
};
/** Specifies the kind of the suggested order transaction. */
declare enum SuggestedOrderTransactionKind {
  /** A suggested refund transaction for an order. */
  SuggestedRefund = 'SUGGESTED_REFUND'
}
/**
 * A refund amount that Shopify suggests based on the items, duties, and shipping costs that customers return. Provides a breakdown of all monetary values including subtotals, taxes, discounts, and the maximum refundable amount.
 *
 * The suggested refund includes [`RefundLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem) objects to refund with their quantities and restock instructions, [`RefundDuty`](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundDuty) objects for duty reimbursements, and [`ShippingRefund`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingRefund) for shipping cost refunds. Provides [`SuggestedOrderTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedOrderTransaction) objects and the [`SuggestedRefundMethod`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SuggestedRefundMethod) interface to process the refund through the appropriate gateways.
 *
 * Learn more about [previewing and refunding duties](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/view-and-refund-duties#step-3-preview-a-refund-that-includes-duties).
 */
type SuggestedRefund = {
  __typename?: 'SuggestedRefund';
  /**
   * The total monetary value to be refunded.
   * @deprecated Use `amountSet` instead.
   */
  amount: Scalars['Money']['output']; /** The total monetary value to be refunded in shop and presentment currencies. */
  amountSet: MoneyBag; /** The sum of all the discounted prices of the line items being refunded. */
  discountedSubtotalSet: MoneyBag;
  /**
   * The total monetary value available to refund.
   * @deprecated Use `maximumRefundableSet` instead.
   */
  maximumRefundable: Scalars['Money']['output']; /** The total monetary value available to refund in shop and presentment currencies. */
  maximumRefundableSet: MoneyBag; /** A list of duties to be refunded from the order. */
  refundDuties: Array<RefundDuty>; /** A list of line items to be refunded, along with restock instructions. */
  refundLineItems: Array<RefundLineItem>; /** The shipping costs to be refunded from the order. */
  shipping: ShippingRefund;
  /**
   * The sum of all the prices of the line items being refunded.
   * @deprecated Use `subtotalSet` instead.
   */
  subtotal: Scalars['Money']['output']; /** The sum of all the prices of the line items being refunded in shop and presentment currencies. */
  subtotalSet: MoneyBag; /** A list of suggested refund methods. */
  suggestedRefundMethods: Array<SuggestedRefundMethod>; /** A list of suggested order transactions. */
  suggestedTransactions: Array<SuggestedOrderTransaction>; /** The total cart discount amount that was applied to all line items in this refund. */
  totalCartDiscountAmountSet: MoneyBag; /** The sum of all the duties being refunded from the order in shop and presentment currencies. The value must be positive. */
  totalDutiesSet: MoneyBag; /** The sum of the taxes being refunded from the order in shop and presentment currencies. The value must be positive. */
  totalTaxSet: MoneyBag;
  /**
   * The sum of the taxes being refunded from the order. The value must be positive.
   * @deprecated Use `totalTaxSet` instead.
   */
  totalTaxes: Scalars['Money']['output'];
};
/** Generic attributes of a suggested refund method. */
type SuggestedRefundMethod = {
  /** The suggested amount to refund in shop and presentment currencies. */amount: MoneyBag; /** The maximum available amount to refund in shop and presentment currencies. */
  maximumRefundable: MoneyBag;
};
/** Represents a return financial outcome suggested by Shopify based on the items being reimbursed. You can then use the suggested outcome object to generate an actual refund or invoice for the return. */
type SuggestedReturnFinancialOutcome = {
  __typename?: 'SuggestedReturnFinancialOutcome'; /** The sum of all the discounted prices of the line items being refunded. */
  discountedSubtotal: MoneyBag; /** The financial transfer details for the return outcome. */
  financialTransfer?: Maybe<ReturnOutcomeFinancialTransfer>; /** The total monetary value available to refund in shop and presentment currencies. */
  maximumRefundable: MoneyBag; /** A list of duties to be refunded from the order. */
  refundDuties: Array<RefundDuty>; /** The shipping costs to be refunded from the order. */
  shipping: ShippingRefund; /** The sum of all the additional fees being refunded in shop and presentment currencies. The value must be positive. */
  totalAdditionalFees: MoneyBag; /** The total cart discount amount that was applied to all line items in this refund. */
  totalCartDiscountAmount: MoneyBag; /** The sum of all the duties being refunded from the order in shop and presentment currencies. The value must be positive. */
  totalDuties: MoneyBag; /** The sum of the taxes being refunded in shop and presentment currencies. The value must be positive. */
  totalTax: MoneyBag;
};
/** Represents a return refund suggested by Shopify based on the items being reimbursed. You can then use the suggested refund object to generate an actual refund for the return. */
type SuggestedReturnRefund = {
  __typename?: 'SuggestedReturnRefund'; /** The total monetary value to be refunded in shop and presentment currencies. */
  amount: MoneyBag; /** The sum of all the discounted prices of the line items being refunded. */
  discountedSubtotal: MoneyBag; /** The total monetary value available to refund in shop and presentment currencies. */
  maximumRefundable: MoneyBag; /** A list of duties to be refunded from the order. */
  refundDuties: Array<RefundDuty>; /** The shipping costs to be refunded from the order. */
  shipping: ShippingRefund; /** The sum of all the prices of the line items being refunded in shop and presentment currencies. */
  subtotal: MoneyBag; /** A list of suggested order transactions. */
  suggestedTransactions: Array<SuggestedOrderTransaction>; /** The total cart discount amount that was applied to all line items in this refund. */
  totalCartDiscountAmount: MoneyBag; /** The sum of all the duties being refunded from the order in shop and presentment currencies. The value must be positive. */
  totalDuties: MoneyBag; /** The sum of the taxes being refunded in shop and presentment currencies. The value must be positive. */
  totalTax: MoneyBag;
};
/** Available customer tax exemptions. */
declare enum TaxExemption {
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in British Columbia. */
  CaBcCommercialFisheryExemption = 'CA_BC_COMMERCIAL_FISHERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid CONTRACTOR_EXEMPTION in British Columbia. */
  CaBcContractorExemption = 'CA_BC_CONTRACTOR_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid PRODUCTION_AND_MACHINERY_EXEMPTION in British Columbia. */
  CaBcProductionAndMachineryExemption = 'CA_BC_PRODUCTION_AND_MACHINERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in British Columbia. */
  CaBcResellerExemption = 'CA_BC_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid SUB_CONTRACTOR_EXEMPTION in British Columbia. */
  CaBcSubContractorExemption = 'CA_BC_SUB_CONTRACTOR_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid DIPLOMAT_EXEMPTION in Canada. */
  CaDiplomatExemption = 'CA_DIPLOMAT_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Manitoba. */
  CaMbCommercialFisheryExemption = 'CA_MB_COMMERCIAL_FISHERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Manitoba. */
  CaMbFarmerExemption = 'CA_MB_FARMER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Manitoba. */
  CaMbResellerExemption = 'CA_MB_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Nova Scotia. */
  CaNsCommercialFisheryExemption = 'CA_NS_COMMERCIAL_FISHERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Nova Scotia. */
  CaNsFarmerExemption = 'CA_NS_FARMER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid PURCHASE_EXEMPTION in Ontario. */
  CaOnPurchaseExemption = 'CA_ON_PURCHASE_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Prince Edward Island. */
  CaPeCommercialFisheryExemption = 'CA_PE_COMMERCIAL_FISHERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Saskatchewan. */
  CaSkCommercialFisheryExemption = 'CA_SK_COMMERCIAL_FISHERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid CONTRACTOR_EXEMPTION in Saskatchewan. */
  CaSkContractorExemption = 'CA_SK_CONTRACTOR_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Saskatchewan. */
  CaSkFarmerExemption = 'CA_SK_FARMER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid PRODUCTION_AND_MACHINERY_EXEMPTION in Saskatchewan. */
  CaSkProductionAndMachineryExemption = 'CA_SK_PRODUCTION_AND_MACHINERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Saskatchewan. */
  CaSkResellerExemption = 'CA_SK_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid SUB_CONTRACTOR_EXEMPTION in Saskatchewan. */
  CaSkSubContractorExemption = 'CA_SK_SUB_CONTRACTOR_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid STATUS_CARD_EXEMPTION in Canada. */
  CaStatusCardExemption = 'CA_STATUS_CARD_EXEMPTION',
  /** This customer is exempt from VAT for purchases within the EU that is shipping from outside of customer's country, as well as purchases from the EU to the UK. */
  EuReverseChargeExemptionRule = 'EU_REVERSE_CHARGE_EXEMPTION_RULE',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Alaska. */
  UsAkResellerExemption = 'US_AK_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Alabama. */
  UsAlResellerExemption = 'US_AL_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Arkansas. */
  UsArResellerExemption = 'US_AR_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Arizona. */
  UsAzResellerExemption = 'US_AZ_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in California. */
  UsCaResellerExemption = 'US_CA_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Colorado. */
  UsCoResellerExemption = 'US_CO_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Connecticut. */
  UsCtResellerExemption = 'US_CT_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Washington DC. */
  UsDcResellerExemption = 'US_DC_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Delaware. */
  UsDeResellerExemption = 'US_DE_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Florida. */
  UsFlResellerExemption = 'US_FL_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Georgia. */
  UsGaResellerExemption = 'US_GA_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Hawaii. */
  UsHiResellerExemption = 'US_HI_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Iowa. */
  UsIaResellerExemption = 'US_IA_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Idaho. */
  UsIdResellerExemption = 'US_ID_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Illinois. */
  UsIlResellerExemption = 'US_IL_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Indiana. */
  UsInResellerExemption = 'US_IN_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Kansas. */
  UsKsResellerExemption = 'US_KS_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Kentucky. */
  UsKyResellerExemption = 'US_KY_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Louisiana. */
  UsLaResellerExemption = 'US_LA_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Massachusetts. */
  UsMaResellerExemption = 'US_MA_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Maryland. */
  UsMdResellerExemption = 'US_MD_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Maine. */
  UsMeResellerExemption = 'US_ME_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Michigan. */
  UsMiResellerExemption = 'US_MI_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Minnesota. */
  UsMnResellerExemption = 'US_MN_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Missouri. */
  UsMoResellerExemption = 'US_MO_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Mississippi. */
  UsMsResellerExemption = 'US_MS_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Montana. */
  UsMtResellerExemption = 'US_MT_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in North Carolina. */
  UsNcResellerExemption = 'US_NC_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in North Dakota. */
  UsNdResellerExemption = 'US_ND_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Nebraska. */
  UsNeResellerExemption = 'US_NE_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in New Hampshire. */
  UsNhResellerExemption = 'US_NH_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in New Jersey. */
  UsNjResellerExemption = 'US_NJ_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in New Mexico. */
  UsNmResellerExemption = 'US_NM_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Nevada. */
  UsNvResellerExemption = 'US_NV_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in New York. */
  UsNyResellerExemption = 'US_NY_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Ohio. */
  UsOhResellerExemption = 'US_OH_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Oklahoma. */
  UsOkResellerExemption = 'US_OK_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Oregon. */
  UsOrResellerExemption = 'US_OR_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Pennsylvania. */
  UsPaResellerExemption = 'US_PA_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Rhode Island. */
  UsRiResellerExemption = 'US_RI_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in South Carolina. */
  UsScResellerExemption = 'US_SC_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in South Dakota. */
  UsSdResellerExemption = 'US_SD_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Tennessee. */
  UsTnResellerExemption = 'US_TN_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Texas. */
  UsTxResellerExemption = 'US_TX_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Utah. */
  UsUtResellerExemption = 'US_UT_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Virginia. */
  UsVaResellerExemption = 'US_VA_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Vermont. */
  UsVtResellerExemption = 'US_VT_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Washington. */
  UsWaResellerExemption = 'US_WA_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Wisconsin. */
  UsWiResellerExemption = 'US_WI_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in West Virginia. */
  UsWvResellerExemption = 'US_WV_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Wyoming. */
  UsWyResellerExemption = 'US_WY_RESELLER_EXEMPTION'
}
/**
 * A tax applied to a [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) or [`ShippingLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine). Includes the tax amount, rate, title, and whether the channel that submitted the tax is liable for remitting it.
 *
 * The tax amount in both shop and presentment currencies after applying discounts. Includes information about the tax rate, whether the channel is liable for remitting the tax, and other tax-related details.
 */
type TaxLine = {
  __typename?: 'TaxLine'; /** Whether the channel that submitted the tax line is liable for remitting. A value of null indicates unknown liability for this tax line. */
  channelLiable?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The amount of tax, in shop currency, after discounts and before returns.
   * @deprecated Use `priceSet` instead.
   */
  price: Scalars['Money']['output']; /** The amount of tax, in shop and presentment currencies, after discounts and before returns. */
  priceSet: MoneyBag; /** The proportion of the line item price that the tax represents as a decimal. */
  rate?: Maybe<Scalars['Float']['output']>; /** The proportion of the line item price that the tax represents as a percentage. */
  ratePercentage?: Maybe<Scalars['Float']['output']>; /** The source of the tax. */
  source?: Maybe<Scalars['String']['output']>; /** The name of the tax. */
  title: Scalars['String']['output'];
};
/** A Shopify product taxonomy attribute. */
type TaxonomyAttribute = Node & {
  __typename?: 'TaxonomyAttribute'; /** A globally-unique ID. */
  id: Scalars['ID']['output'];
};
/**
 * A product category within Shopify's [standardized product taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17). Provides hierarchical organization through parent-child relationships, with each category tracking its ancestors, children, and level in the taxonomy tree.
 *
 * Categories include attributes specific to their product type and navigation properties like whether they're root, leaf, or archived categories. The taxonomy enables consistent product classification across Shopify and integrated marketplaces.
 */
type TaxonomyCategory = Node & {
  __typename?: 'TaxonomyCategory'; /** The IDs of the category's ancestor categories. */
  ancestorIds: Array<Scalars['ID']['output']>; /** The attributes of the taxonomy category. */
  attributes: TaxonomyCategoryAttributeConnection; /** The IDs of the category's child categories. */
  childrenIds: Array<Scalars['ID']['output']>; /** The full name of the taxonomy category. For example, Animals & Pet Supplies > Pet Supplies > Dog Supplies > Dog Beds. */
  fullName: Scalars['String']['output']; /** The globally-unique ID of the TaxonomyCategory. */
  id: Scalars['ID']['output']; /** Whether the category is archived. The default value is `false`. */
  isArchived: Scalars['Boolean']['output']; /** Whether the category is a leaf category. A leaf category doesn't have any subcategories beneath it. For example, in Animals & Pet Supplies > Pet Supplies > Dog Supplies > Dog Treadmills, Dog Treadmills is a leaf category. The value is `true` when there are no `childrenIds` specified. */
  isLeaf: Scalars['Boolean']['output']; /** Whether the category is a root category. A root category is at the top level of the category hierarchy and doesn't have a parent category. For example, Animals & Pet Supplies. The value is `true` when there's no `parentId` specified. */
  isRoot: Scalars['Boolean']['output']; /** The level of the category in the taxonomy tree. Levels indicate the depth of the category from the root. For example, in Animals & Pet Supplies > Pet Supplies > Dog Supplies, Animals & Pet Supplies is at level 1, Animals & Pet Supplies > Pet Supplies is at level 2, and Animals & Pet Supplies > Pet Supplies > Dog Supplies is at level 3. */
  level: Scalars['Int']['output']; /** The name of the taxonomy category. For example, Dog Beds. */
  name: Scalars['String']['output']; /** The ID of the category's parent category. */
  parentId?: Maybe<Scalars['ID']['output']>;
};
/** A product taxonomy attribute interface. */
type TaxonomyCategoryAttribute = TaxonomyAttribute | TaxonomyChoiceListAttribute | TaxonomyMeasurementAttribute;
/** An auto-generated type for paginating through multiple TaxonomyCategoryAttributes. */
type TaxonomyCategoryAttributeConnection = {
  __typename?: 'TaxonomyCategoryAttributeConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<TaxonomyCategoryAttributeEdge>; /** A list of nodes that are contained in TaxonomyCategoryAttributeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<TaxonomyCategoryAttribute>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one TaxonomyCategoryAttribute and a cursor during pagination. */
type TaxonomyCategoryAttributeEdge = {
  __typename?: 'TaxonomyCategoryAttributeEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of TaxonomyCategoryAttributeEdge. */
  node: TaxonomyCategoryAttribute;
};
/** A Shopify product taxonomy choice list attribute. */
type TaxonomyChoiceListAttribute = Node & {
  __typename?: 'TaxonomyChoiceListAttribute'; /** The unique ID of the TaxonomyAttribute. */
  id: Scalars['ID']['output']; /** The name of the product taxonomy attribute. For example, Color. */
  name: Scalars['String']['output']; /** A list of values on the choice list attribute. */
  values: TaxonomyValueConnection;
};
/** A Shopify product taxonomy measurement attribute. */
type TaxonomyMeasurementAttribute = Node & {
  __typename?: 'TaxonomyMeasurementAttribute'; /** The unique ID of the TaxonomyAttribute. */
  id: Scalars['ID']['output']; /** The name of the product taxonomy attribute. For example, Color. */
  name: Scalars['String']['output']; /** The product taxonomy attribute options. */
  options: Array<Attribute>;
};
/** Represents a Shopify product taxonomy value. */
type TaxonomyValue = Node & {
  __typename?: 'TaxonomyValue'; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The name of the product taxonomy value. For example, Red. */
  name: Scalars['String']['output'];
};
/** An auto-generated type for paginating through multiple TaxonomyValues. */
type TaxonomyValueConnection = {
  __typename?: 'TaxonomyValueConnection'; /** The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node. */
  edges: Array<TaxonomyValueEdge>; /** A list of nodes that are contained in TaxonomyValueEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve. */
  nodes: Array<TaxonomyValue>; /** An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page. */
  pageInfo: PageInfo;
};
/** An auto-generated type which holds one TaxonomyValue and a cursor during pagination. */
type TaxonomyValueEdge = {
  __typename?: 'TaxonomyValueEdge'; /** The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql). */
  cursor: Scalars['String']['output']; /** The item at the end of TaxonomyValueEdge. */
  node: TaxonomyValue;
};
/** Transaction fee related to an order transaction. */
type TransactionFee = Node & {
  __typename?: 'TransactionFee'; /** Amount of the fee. */
  amount: MoneyV2; /** Flat rate charge for a transaction. */
  flatFee: MoneyV2; /** Name of the credit card flat fee. */
  flatFeeName?: Maybe<Scalars['String']['output']>; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** Percentage charge. */
  rate: Scalars['Decimal']['output']; /** Name of the credit card rate. */
  rateName?: Maybe<Scalars['String']['output']>; /** Tax amount charged on the fee. */
  taxAmount: MoneyV2; /** Name of the type of fee. */
  type: Scalars['String']['output'];
};
/**
 * A localized version of a field on a resource. Translations enable merchants to provide content in multiple languages for [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects, [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) objects, and other store resources.
 *
 * Each translation specifies the locale, the field being translated (identified by its key), and the translated value. Translations can be market-specific, allowing different content for the same language across different markets, or available globally when no [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) is specified. The `outdated` flag indicates whether the original content has changed since this translation was last updated.
 *
 * Learn more about [managing translated content](https://shopify.dev/docs/apps/build/markets/manage-translated-content).
 */
type Translation = {
  __typename?: 'Translation'; /** On the resource that this translation belongs to, the reference to the value being translated. */
  key: Scalars['String']['output']; /** ISO code of the translation locale. */
  locale: Scalars['String']['output']; /** The market that the translation is specific to. Null value means the translation is available in all markets. */
  market?: Maybe<Market>; /** Whether the original content has changed since this translation was updated. */
  outdated: Scalars['Boolean']['output']; /** The date and time when the translation was updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>; /** Translation value. */
  value?: Maybe<Scalars['String']['output']>;
};
/** Represents a typed custom attribute. */
type TypedAttribute = {
  __typename?: 'TypedAttribute'; /** Key or name of the attribute. */
  key: Scalars['String']['output']; /** Value of the attribute. */
  value: Scalars['String']['output'];
};
/** Represents a set of UTM parameters. */
type UtmParameters = {
  __typename?: 'UTMParameters'; /** The name of a marketing campaign. */
  campaign?: Maybe<Scalars['String']['output']>; /** Identifies specific content in a marketing campaign. Used to differentiate between similar content or links in a marketing campaign to determine which is the most effective. */
  content?: Maybe<Scalars['String']['output']>; /** The medium of a marketing campaign, such as a banner or email newsletter. */
  medium?: Maybe<Scalars['String']['output']>; /** The source of traffic to the merchant's store, such as Google or an email newsletter. */
  source?: Maybe<Scalars['String']['output']>; /** Paid search terms used by a marketing campaign. */
  term?: Maybe<Scalars['String']['output']>;
};
/** The measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml). */
type UnitPriceMeasurement = {
  __typename?: 'UnitPriceMeasurement'; /** The type of unit of measurement for the unit price measurement. */
  measuredType?: Maybe<UnitPriceMeasurementMeasuredType>; /** The quantity unit for the unit price measurement. */
  quantityUnit?: Maybe<UnitPriceMeasurementMeasuredUnit>; /** The quantity value for the unit price measurement. */
  quantityValue: Scalars['Float']['output']; /** The reference unit for the unit price measurement. */
  referenceUnit?: Maybe<UnitPriceMeasurementMeasuredUnit>; /** The reference value for the unit price measurement. */
  referenceValue: Scalars['Int']['output'];
};
/** The accepted types of unit of measurement. */
declare enum UnitPriceMeasurementMeasuredType {
  /** Unit of measurements representing areas. */
  Area = 'AREA',
  /** Unit of measurements representing counts. */
  Count = 'COUNT',
  /** Unit of measurements representing lengths. */
  Length = 'LENGTH',
  /** The type of measurement is unknown. Upgrade to the latest version of the API to resolve this type. */
  Unknown = 'UNKNOWN',
  /** Unit of measurements representing volumes. */
  Volume = 'VOLUME',
  /** Unit of measurements representing weights. */
  Weight = 'WEIGHT'
}
/** The valid units of measurement for a unit price measurement. */
declare enum UnitPriceMeasurementMeasuredUnit {
  /** 100 centiliters equals 1 liter. */
  Cl = 'CL',
  /** 100 centimeters equals 1 meter. */
  Cm = 'CM',
  /** Imperial system unit of volume (U.S. customary unit). */
  Floz = 'FLOZ',
  /** 1 foot equals 12 inches. */
  Ft = 'FT',
  /** Imperial system unit of area. */
  Ft2 = 'FT2',
  /** Metric system unit of weight. */
  G = 'G',
  /** 1 gallon equals 128 fluid ounces (U.S. customary unit). */
  Gal = 'GAL',
  /** Imperial system unit of length. */
  In = 'IN',
  /** 1 item, a unit of count. */
  Item = 'ITEM',
  /** 1 kilogram equals 1000 grams. */
  Kg = 'KG',
  /** Metric system unit of volume. */
  L = 'L',
  /** Imperial system unit of weight. */
  Lb = 'LB',
  /** Metric system unit of length. */
  M = 'M',
  /** Metric system unit of area. */
  M2 = 'M2',
  /** 1 cubic meter equals 1000 liters. */
  M3 = 'M3',
  /** 1000 milligrams equals 1 gram. */
  Mg = 'MG',
  /** 1000 milliliters equals 1 liter. */
  Ml = 'ML',
  /** 1000 millimeters equals 1 meter. */
  Mm = 'MM',
  /** 16 ounces equals 1 pound. */
  Oz = 'OZ',
  /** 1 pint equals 16 fluid ounces (U.S. customary unit). */
  Pt = 'PT',
  /** 1 quart equals 32 fluid ounces (U.S. customary unit). */
  Qt = 'QT',
  /** The unit of measurement is unknown. Upgrade to the latest version of the API to resolve this unit. */
  Unknown = 'UNKNOWN',
  /** 1 yard equals 36 inches. */
  Yd = 'YD'
}
/** Systems of weights and measures. */
declare enum UnitSystem {
  /** Imperial system of weights and measures. */
  ImperialSystem = 'IMPERIAL_SYSTEM',
  /** Metric system of weights and measures. */
  MetricSystem = 'METRIC_SYSTEM'
}
/** An error in the input of a mutation. Mutations return `UserError` objects to indicate validation failures, such as invalid field values or business logic violations, that prevent the operation from completing. */
type UserError = DisplayableError & {
  __typename?: 'UserError'; /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>; /** The error message. */
  message: Scalars['String']['output'];
};
/** Represents a credit card payment instrument. */
type VaultCreditCard = {
  __typename?: 'VaultCreditCard'; /** The billing address of the card. */
  billingAddress?: Maybe<CustomerCreditCardBillingAddress>; /** The brand for the card. */
  brand: Scalars['String']['output']; /** Whether the card has been expired. */
  expired: Scalars['Boolean']['output']; /** The expiry month of the card. */
  expiryMonth: Scalars['Int']['output']; /** The expiry year of the card. */
  expiryYear: Scalars['Int']['output']; /** The last four digits for the card. */
  lastDigits: Scalars['String']['output']; /** The name of the card holder. */
  name: Scalars['String']['output'];
};
/** Represents a paypal billing agreement payment instrument. */
type VaultPaypalBillingAgreement = {
  __typename?: 'VaultPaypalBillingAgreement'; /** Whether the paypal billing agreement is inactive. */
  inactive: Scalars['Boolean']['output']; /** The paypal account name. */
  name: Scalars['String']['output']; /** The paypal account email address. */
  paypalAccountEmail: Scalars['String']['output'];
};
/**
 * Representation of 3d vectors and points. It can represent
 * either the coordinates of a point in space, a direction, or
 * size. Presented as an object with three floating-point values.
 */
type Vector3 = {
  __typename?: 'Vector3'; /** The x coordinate of Vector3. */
  x: Scalars['Float']['output']; /** The y coordinate of Vector3. */
  y: Scalars['Float']['output']; /** The z coordinate of Vector3. */
  z: Scalars['Float']['output'];
};
/** Represents a Shopify hosted video. */
type Video = File & Media & Node & {
  __typename?: 'Video'; /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']['output']>; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was created. */
  createdAt: Scalars['DateTime']['output'];
  /**
   * The video's duration in milliseconds. This value is `null` unless the video's status field is
   * [READY](https://shopify.dev/api/admin-graphql/latest/enums/MediaStatus#value-ready).
   */
  duration?: Maybe<Scalars['Int']['output']>; /** Any errors that have occurred on the file. */
  fileErrors: Array<FileError>; /** The status of the file. */
  fileStatus: FileStatus; /** The video's filename. */
  filename: Scalars['String']['output']; /** A globally-unique ID. */
  id: Scalars['ID']['output']; /** The media content type. */
  mediaContentType: MediaContentType; /** Any errors which have occurred on the media. */
  mediaErrors: Array<MediaError>; /** The warnings attached to the media. */
  mediaWarnings: Array<MediaWarning>;
  /**
   * The video's original source. This value is `null` unless the video's status field is
   * [READY](https://shopify.dev/api/admin-graphql/latest/enums/MediaStatus#value-ready).
   */
  originalSource?: Maybe<VideoSource>; /** The preview image for the media. */
  preview?: Maybe<MediaPreviewImage>;
  /**
   * The video's sources. This value is empty unless the video's status field is
   * [READY](https://shopify.dev/api/admin-graphql/latest/enums/MediaStatus#value-ready).
   */
  sources: Array<VideoSource>; /** Current status of the media. */
  status: MediaStatus; /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};
/**
 * Represents a source for a Shopify hosted video.
 *
 * Types of sources include the original video, lower resolution versions of the original video,
 * and an m3u8 playlist file.
 *
 * Only [videos](https://shopify.dev/api/admin-graphql/latest/objects/video) with a status field
 * of [READY](https://shopify.dev/api/admin-graphql/latest/enums/MediaStatus#value-ready) have sources.
 */
type VideoSource = {
  __typename?: 'VideoSource'; /** The video source's file size in bytes. */
  fileSize?: Maybe<Scalars['Int']['output']>; /** The video source's file format extension. */
  format: Scalars['String']['output']; /** The video source's height. */
  height: Scalars['Int']['output']; /** The video source's MIME type. */
  mimeType: Scalars['String']['output']; /** The video source's URL. */
  url: Scalars['String']['output']; /** The video source's width. */
  width: Scalars['Int']['output'];
};
/**
 * A weight measurement with its numeric value and unit. Used throughout the API, for example in shipping calculations, delivery conditions, order line items, and inventory measurements.
 *
 * The weight combines a decimal value with a standard unit of measurement to ensure consistent weight handling across different regional systems.
 */
type Weight = {
  __typename?: 'Weight'; /** The unit of measurement for `value`. */
  unit: WeightUnit; /** The weight value using the unit system specified with `unit`. */
  value: Scalars['Float']['output'];
};
/** Units of measurement for weight. */
declare enum WeightUnit {
  /** Metric system unit of mass. */
  Grams = 'GRAMS',
  /** 1 kilogram equals 1000 grams. */
  Kilograms = 'KILOGRAMS',
  /** Imperial system unit of mass. */
  Ounces = 'OUNCES',
  /** 1 pound equals 16 ounces. */
  Pounds = 'POUNDS'
}
//#endregion
//#region src/generated/admin.generated.d.ts
type GetAssignedFulfillmentOrdersQueryVariables = Exact<{
  locationIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  status?: InputMaybe<FulfillmentOrderAssignmentStatus>;
  requestKind?: InputMaybe<FulfillmentOrderMerchantRequestKind>;
}>;
type GetAssignedFulfillmentOrdersQuery = {
  shop: {
    assignedFulfillmentOrders: {
      nodes: Array<(Pick<FulfillmentOrder, 'id' | 'orderName' | 'requestStatus' | 'status'> & {
        destination?: Maybe<Pick<FulfillmentOrderDestination$1, 'firstName' | 'lastName' | 'address1' | 'address2' | 'city' | 'zip' | 'province' | 'countryCode' | 'phone' | 'email'>>;
        lineItems: {
          nodes: Array<Pick<FulfillmentOrderLineItem$1, 'id' | 'sku' | 'totalQuantity'>>;
        };
        order: (Pick<Order, 'note' | 'name' | 'email' | 'phone' | 'totalPrice'> & {
          shippingAddress?: Maybe<Pick<MailingAddress, 'phone' | 'address1' | 'address2' | 'countryCodeV2' | 'city' | 'province' | 'zip' | 'firstName' | 'lastName' | 'country'>>;
          lineItems: {
            nodes: Array<Pick<LineItem, 'id' | 'sku' | 'quantity' | 'originalTotal' | 'originalUnitPrice' | 'discountedTotal' | 'discountedUnitPrice'>>;
          };
        });
        merchantRequests: {
          nodes: Array<Pick<FulfillmentOrderMerchantRequest$1, 'message'>>;
        };
      })>;
    };
  };
};
type AcceptFulfillmentRequestMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
}>;
type AcceptFulfillmentRequestMutation = {
  fulfillmentOrderAcceptFulfillmentRequest?: Maybe<{
    fulfillmentOrder?: Maybe<Pick<FulfillmentOrder, 'id' | 'status' | 'requestStatus'>>;
    userErrors: Array<Pick<UserError, 'field' | 'message'>>;
  }>;
};
type RejectFulfillmentRequestMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
}>;
type RejectFulfillmentRequestMutation = {
  fulfillmentOrderRejectFulfillmentRequest?: Maybe<{
    fulfillmentOrder?: Maybe<Pick<FulfillmentOrder, 'id' | 'status' | 'requestStatus'>>;
    userErrors: Array<Pick<UserError, 'field' | 'message'>>;
  }>;
};
type AcceptCancellationRequestMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
}>;
type AcceptCancellationRequestMutation = {
  fulfillmentOrderAcceptCancellationRequest?: Maybe<{
    fulfillmentOrder?: Maybe<Pick<FulfillmentOrder, 'id' | 'status' | 'requestStatus'>>;
    userErrors: Array<Pick<UserError, 'field' | 'message'>>;
  }>;
};
type RejectCancellationRequestMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
}>;
type RejectCancellationRequestMutation = {
  fulfillmentOrderRejectCancellationRequest?: Maybe<{
    fulfillmentOrder?: Maybe<Pick<FulfillmentOrder, 'id' | 'status' | 'requestStatus'>>;
    userErrors: Array<Pick<UserError, 'field' | 'message'>>;
  }>;
};
type CreateFulfillmentMutationVariables = Exact<{
  fulfillment: FulfillmentV2Input;
}>;
type CreateFulfillmentMutation = {
  fulfillmentCreateV2?: Maybe<{
    fulfillment?: Maybe<Pick<Fulfillment, 'id' | 'status' | 'name'>>;
    userErrors: Array<Pick<UserError, 'field' | 'message'>>;
  }>;
};
type UpdateTrackingInfoMutationVariables = Exact<{
  fulfillmentId: Scalars['ID']['input'];
  trackingInfoInput: FulfillmentTrackingInput;
  notifyCustomer?: InputMaybe<Scalars['Boolean']['input']>;
}>;
type UpdateTrackingInfoMutation = {
  fulfillmentTrackingInfoUpdateV2?: Maybe<{
    fulfillment?: Maybe<Pick<Fulfillment, 'id'>>;
    userErrors: Array<Pick<UserError, 'field' | 'message'>>;
  }>;
};
interface GeneratedQueryTypes {
  "#graphql\n  query GetAssignedFulfillmentOrders(\n    $locationIds: [ID!]\n    $status: FulfillmentOrderAssignmentStatus\n    $requestKind: FulfillmentOrderMerchantRequestKind\n  ) {\n    shop {\n      assignedFulfillmentOrders(\n        first: 50\n        assignmentStatus: $status\n        locationIds: $locationIds\n      ) {\n        nodes {\n          id\n          orderName\n          requestStatus\n          status\n          destination {\n            firstName\n            lastName\n            address1\n            address2\n            city\n            zip\n            province\n            countryCode\n            phone\n            email\n          }\n          lineItems(first: 50) {\n            nodes {\n              id\n              sku\n              totalQuantity\n            }\n          }\n          order {\n            note\n            name\n            email\n            phone\n            shippingAddress {\n              phone\n              address1\n              address2\n              countryCodeV2\n              city\n              province\n              zip\n              firstName\n              lastName\n              country\n            }\n            totalPrice\n            lineItems(first: 150) {\n              nodes {\n                id\n                sku\n                quantity\n                originalTotal\n                originalUnitPrice\n                discountedTotal\n                discountedUnitPrice\n              }\n            }\n          }\n          merchantRequests(first: 1, kind: $requestKind) {\n            nodes {\n              message\n            }\n          }\n        }\n      }\n    }\n  }\n": {
    return: GetAssignedFulfillmentOrdersQuery;
    variables: GetAssignedFulfillmentOrdersQueryVariables;
  };
}
interface GeneratedMutationTypes {
  "#graphql\n  mutation AcceptFulfillmentRequest($id: ID!, $message: String) {\n    fulfillmentOrderAcceptFulfillmentRequest(id: $id, message: $message) {\n      fulfillmentOrder {\n        id\n        status\n        requestStatus\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n": {
    return: AcceptFulfillmentRequestMutation;
    variables: AcceptFulfillmentRequestMutationVariables;
  };
  "#graphql\n  mutation RejectFulfillmentRequest($id: ID!, $message: String) {\n    fulfillmentOrderRejectFulfillmentRequest(id: $id, message: $message) {\n      fulfillmentOrder {\n        id\n        status\n        requestStatus\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n": {
    return: RejectFulfillmentRequestMutation;
    variables: RejectFulfillmentRequestMutationVariables;
  };
  "#graphql\n  mutation AcceptCancellationRequest($id: ID!, $message: String) {\n    fulfillmentOrderAcceptCancellationRequest(id: $id, message: $message) {\n      fulfillmentOrder {\n        id\n        status\n        requestStatus\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n": {
    return: AcceptCancellationRequestMutation;
    variables: AcceptCancellationRequestMutationVariables;
  };
  "#graphql\n  mutation RejectCancellationRequest($id: ID!, $message: String) {\n    fulfillmentOrderRejectCancellationRequest(id: $id, message: $message) {\n      fulfillmentOrder {\n        id\n        status\n        requestStatus\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n": {
    return: RejectCancellationRequestMutation;
    variables: RejectCancellationRequestMutationVariables;
  };
  "#graphql\n  mutation CreateFulfillment($fulfillment: FulfillmentV2Input!) {\n    fulfillmentCreateV2(fulfillment: $fulfillment) {\n      fulfillment {\n        id\n        status\n        name\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n": {
    return: CreateFulfillmentMutation;
    variables: CreateFulfillmentMutationVariables;
  };
  "#graphql\n  mutation UpdateTrackingInfo(\n    $fulfillmentId: ID!\n    $trackingInfoInput: FulfillmentTrackingInput!\n    $notifyCustomer: Boolean\n  ) {\n    fulfillmentTrackingInfoUpdateV2(\n      fulfillmentId: $fulfillmentId\n      trackingInfoInput: $trackingInfoInput\n      notifyCustomer: $notifyCustomer\n    ) {\n      fulfillment {\n        id\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n": {
    return: UpdateTrackingInfoMutation;
    variables: UpdateTrackingInfoMutationVariables;
  };
}
declare module '@shopify/admin-api-client' {
  type InputMaybe<T> = InputMaybe<T>;
  interface AdminQueries extends GeneratedQueryTypes {}
  interface AdminMutations extends GeneratedMutationTypes {}
}
//#endregion
//#region src/types.d.ts
interface ShopifyCredentials {
  readonly shop: string;
  readonly accessToken: string;
}
type AssignedFulfillmentOrder = GetAssignedFulfillmentOrdersQuery["shop"]["assignedFulfillmentOrders"]["nodes"][number];
type FulfillmentOrderDestination = NonNullable<AssignedFulfillmentOrder["destination"]>;
type FulfillmentOrderLineItem = AssignedFulfillmentOrder["lineItems"]["nodes"][number];
type FulfillmentOrderMerchantRequest = AssignedFulfillmentOrder["merchantRequests"]["nodes"][number];
type FulfillmentOrderOrder = AssignedFulfillmentOrder["order"];
type OrderLineItem = FulfillmentOrderOrder["lineItems"]["nodes"][number];
type OrderShippingAddress = NonNullable<FulfillmentOrderOrder["shippingAddress"]>;
type FulfillmentOrderActionPayload = NonNullable<AcceptFulfillmentRequestMutation["fulfillmentOrderAcceptFulfillmentRequest"] | RejectFulfillmentRequestMutation["fulfillmentOrderRejectFulfillmentRequest"] | AcceptCancellationRequestMutation["fulfillmentOrderAcceptCancellationRequest"] | RejectCancellationRequestMutation["fulfillmentOrderRejectCancellationRequest"]>;
type ShopifyUserError = FulfillmentOrderActionPayload["userErrors"][number];
type FulfillmentCreatePayload = NonNullable<CreateFulfillmentMutation["fulfillmentCreateV2"]>;
type FulfillmentTrackingInfoPayload = NonNullable<UpdateTrackingInfoMutation["fulfillmentTrackingInfoUpdateV2"]>;
type FulfillmentTrackingInfo = Pick<FulfillmentTrackingInput, "company" | "number" | "url">;
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
  readonly locationIds?: GetAssignedFulfillmentOrdersQueryVariables["locationIds"];
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
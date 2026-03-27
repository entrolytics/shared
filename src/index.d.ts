/**
 * Shared constants across Entrolytics ecosystem
 * Used by: CLI, SDKs, Dashboard, Integrations
 */
/**
 * Plan definitions and limits
 */
export declare const PLANS: {
    readonly starter: {
        readonly id: "starter";
        readonly name: "Starter";
        readonly price: 0;
        readonly limits: {
            readonly pageviewsPerMonth: 25000;
            readonly websites: 2;
            readonly retentionDays: 30;
            readonly seats: 1;
        };
        readonly features: {
            readonly funnels: false;
            readonly attribution: false;
            readonly revenue: false;
            readonly customDashboards: false;
            readonly apiAccess: false;
            readonly weeklyReports: true;
            readonly support: "community";
        };
    };
    readonly pro: {
        readonly id: "pro";
        readonly name: "Pro";
        readonly price: 29;
        readonly limits: {
            readonly pageviewsPerMonth: 250000;
            readonly websites: 10;
            readonly retentionDays: 365;
            readonly seats: 5;
        };
        readonly features: {
            readonly funnels: true;
            readonly attribution: true;
            readonly revenue: true;
            readonly customDashboards: false;
            readonly apiAccess: true;
            readonly weeklyReports: true;
            readonly support: "email";
        };
    };
    readonly business: {
        readonly id: "business";
        readonly name: "Business";
        readonly price: 99;
        readonly limits: {
            readonly pageviewsPerMonth: 1000000;
            readonly websites: -1;
            readonly retentionDays: 730;
            readonly seats: -1;
        };
        readonly features: {
            readonly funnels: true;
            readonly attribution: true;
            readonly revenue: true;
            readonly customDashboards: true;
            readonly apiAccess: true;
            readonly weeklyReports: true;
            readonly support: "priority";
        };
    };
    readonly enterprise: {
        readonly id: "enterprise";
        readonly name: "Enterprise";
        readonly price: -1;
        readonly limits: {
            readonly pageviewsPerMonth: -1;
            readonly websites: -1;
            readonly retentionDays: -1;
            readonly seats: -1;
        };
        readonly features: {
            readonly funnels: true;
            readonly attribution: true;
            readonly revenue: true;
            readonly customDashboards: true;
            readonly apiAccess: true;
            readonly weeklyReports: true;
            readonly support: "dedicated";
            readonly sso: true;
            readonly auditLogs: true;
            readonly customRetention: true;
        };
    };
};
/**
 * Plan feature names for display
 */
export declare const PLAN_FEATURES: {
    readonly funnels: "Funnel Analytics";
    readonly attribution: "Attribution Reports";
    readonly revenue: "Revenue Tracking";
    readonly customDashboards: "Custom Dashboards";
    readonly apiAccess: "API Access";
    readonly weeklyReports: "Weekly Email Reports";
    readonly sso: "SSO/SAML";
    readonly auditLogs: "Audit Logs";
    readonly customRetention: "Custom Data Retention";
};
/**
 * Usage warning thresholds (percentages)
 */
export declare const USAGE_THRESHOLDS: {
    readonly warning: 90;
    readonly critical: 95;
};
/**
 * Billing-related error codes
 */
export declare const BILLING_ERRORS: {
    readonly quotaExceeded: "QUOTA_EXCEEDED";
    readonly planRequired: "PLAN_REQUIRED";
    readonly featureNotAvailable: "FEATURE_NOT_AVAILABLE";
    readonly subscriptionInactive: "SUBSCRIPTION_INACTIVE";
    readonly paymentFailed: "PAYMENT_FAILED";
};
/**
 * API endpoint configuration
 */
export declare const API_ENDPOINTS: {
    readonly production: "https://api.entrolytics.click";
    readonly development: "http://localhost:3001";
};
/**
 * Default API host
 */
export declare const DEFAULT_API_HOST: "https://api.entrolytics.click" | "http://localhost:3001";
/**
 * Environment variable naming conventions by framework
 */
export declare const ENV_VAR_NAMES: {
    readonly nextjs: {
        readonly websiteId: "NEXT_PUBLIC_ENTROLYTICS_WEBSITE_ID";
        readonly host: "NEXT_PUBLIC_ENTROLYTICS_HOST";
        readonly envFile: ".env.local";
    };
    readonly react: {
        readonly websiteId: "VITE_ENTROLYTICS_WEBSITE_ID";
        readonly host: "VITE_ENTROLYTICS_HOST";
        readonly envFile: ".env";
        readonly fallback: {
            readonly websiteId: "REACT_APP_ENTROLYTICS_WEBSITE_ID";
            readonly host: "REACT_APP_ENTROLYTICS_HOST";
        };
    };
    readonly vue: {
        readonly websiteId: "VITE_ENTROLYTICS_WEBSITE_ID";
        readonly host: "VITE_ENTROLYTICS_HOST";
        readonly envFile: ".env";
    };
    readonly svelte: {
        readonly websiteId: "PUBLIC_ENTROLYTICS_WEBSITE_ID";
        readonly host: "PUBLIC_ENTROLYTICS_HOST";
        readonly envFile: ".env";
    };
    readonly astro: {
        readonly websiteId: "PUBLIC_ENTROLYTICS_WEBSITE_ID";
        readonly host: "PUBLIC_ENTROLYTICS_HOST";
        readonly envFile: ".env";
    };
    readonly html: {
        readonly websiteId: "ENTROLYTICS_WEBSITE_ID";
        readonly host: "ENTROLYTICS_HOST";
        readonly envFile: ".env";
    };
    readonly node: {
        readonly websiteId: "ENTROLYTICS_WEBSITE_ID";
        readonly host: "ENTROLYTICS_HOST";
        readonly envFile: ".env";
    };
    readonly php: {
        readonly websiteId: "ENTROLYTICS_WEBSITE_ID";
        readonly host: "ENTROLYTICS_HOST";
        readonly envFile: ".env";
    };
    readonly python: {
        readonly websiteId: "ENTROLYTICS_WEBSITE_ID";
        readonly host: "ENTROLYTICS_HOST";
        readonly envFile: ".env";
    };
    readonly go: {
        readonly websiteId: "ENTROLYTICS_WEBSITE_ID";
        readonly host: "ENTROLYTICS_HOST";
        readonly envFile: ".env";
    };
};
/**
 * CLI configuration constants
 */
export declare const CLI_CONFIG: {
    readonly tokenExpiryMinutes: 15;
    readonly maxTokensPerUser: 10;
    readonly pollIntervalMs: 2000;
    readonly setupTimeoutMs: 300000;
    readonly minCliVersion: "1.0.0";
};
/**
 * Core event types - matches backend protocol values exactly
 * Used by: API Server, SDKs, CLI, worker processes
 * See: entrolytics/packages/protocol/src/events.ts
 */
export declare const EVENT_TYPES: {
    readonly pageView: "pageview";
    readonly custom: "custom_event";
    readonly click: "click";
};
/**
 * Extended event types for SDK-level semantics
 * These are higher-level event categories used by SDKs
 * They map to the core EVENT_TYPES when sent to the backend
 */
export declare const SDK_EVENT_TYPES: {
    readonly pageView: "pageview";
    readonly click: "click";
    readonly formSubmit: "form_submit";
    readonly custom: "custom_event";
    readonly error: "error";
    readonly performance: "performance";
};
/**
 * Web Vitals metric types (Phase 2)
 * Core Web Vitals: LCP, INP, CLS
 * Additional: TTFB, FCP
 */
export declare const VITAL_TYPES: {
    readonly LCP: "LCP";
    readonly INP: "INP";
    readonly CLS: "CLS";
    readonly TTFB: "TTFB";
    readonly FCP: "FCP";
};
/**
 * Web Vitals rating thresholds
 */
export declare const VITAL_RATINGS: {
    readonly good: "good";
    readonly needsImprovement: "needs-improvement";
    readonly poor: "poor";
};
/**
 * Web Vitals thresholds by metric (in milliseconds, except CLS which is unitless)
 */
export declare const VITAL_THRESHOLDS: {
    readonly LCP: {
        readonly good: 2500;
        readonly poor: 4000;
    };
    readonly INP: {
        readonly good: 200;
        readonly poor: 500;
    };
    readonly CLS: {
        readonly good: 0.1;
        readonly poor: 0.25;
    };
    readonly TTFB: {
        readonly good: 800;
        readonly poor: 1800;
    };
    readonly FCP: {
        readonly good: 1800;
        readonly poor: 3000;
    };
};
/**
 * Navigation types for Web Vitals context
 */
export declare const NAVIGATION_TYPES: {
    readonly navigate: "navigate";
    readonly reload: "reload";
    readonly backForward: "back-forward";
    readonly backForwardCache: "back-forward-cache";
    readonly prerender: "prerender";
    readonly restore: "restore";
};
/**
 * Form event types (Phase 2)
 */
export declare const FORM_EVENT_TYPES: {
    readonly start: "start";
    readonly fieldFocus: "field_focus";
    readonly fieldBlur: "field_blur";
    readonly fieldError: "field_error";
    readonly submit: "submit";
    readonly abandon: "abandon";
};
/**
 * Form field types
 */
export declare const FORM_FIELD_TYPES: {
    readonly text: "text";
    readonly email: "email";
    readonly password: "password";
    readonly tel: "tel";
    readonly number: "number";
    readonly url: "url";
    readonly textarea: "textarea";
    readonly select: "select";
    readonly checkbox: "checkbox";
    readonly radio: "radio";
    readonly date: "date";
    readonly file: "file";
    readonly hidden: "hidden";
    readonly submit: "submit";
    readonly other: "other";
};
/**
 * Deployment platform sources (Phase 2)
 */
export declare const DEPLOYMENT_SOURCES: {
    readonly vercel: "vercel";
    readonly netlify: "netlify";
    readonly cloudflare: "cloudflare";
    readonly railway: "railway";
    readonly render: "render";
    readonly fly: "fly";
    readonly heroku: "heroku";
    readonly aws: "aws";
    readonly gcp: "gcp";
    readonly azure: "azure";
    readonly custom: "custom";
};
/**
 * Deployment environment variables by platform
 */
export declare const DEPLOYMENT_ENV_VARS: {
    readonly vercel: {
        readonly deployId: "VERCEL_DEPLOYMENT_ID";
        readonly gitSha: "VERCEL_GIT_COMMIT_SHA";
        readonly gitBranch: "VERCEL_GIT_COMMIT_REF";
        readonly url: "VERCEL_URL";
    };
    readonly netlify: {
        readonly deployId: "DEPLOY_ID";
        readonly gitSha: "COMMIT_REF";
        readonly gitBranch: "BRANCH";
        readonly url: "DEPLOY_URL";
    };
    readonly cloudflare: {
        readonly deployId: "CF_PAGES_COMMIT_SHA";
        readonly gitSha: "CF_PAGES_COMMIT_SHA";
        readonly gitBranch: "CF_PAGES_BRANCH";
        readonly url: "CF_PAGES_URL";
    };
};
/**
 * HTTP status codes
 */
export declare const HTTP_STATUS: {
    readonly ok: 200;
    readonly created: 201;
    readonly accepted: 202;
    readonly noContent: 204;
    readonly badRequest: 400;
    readonly unauthorized: 401;
    readonly forbidden: 403;
    readonly notFound: 404;
    readonly conflict: 409;
    readonly tooManyRequests: 429;
    readonly internalServerError: 500;
    readonly serviceUnavailable: 503;
};
/**
 * API route paths
 */
export declare const API_ROUTES: {
    readonly cliAuthToken: "/api/auth/cli/token";
    readonly cliAuthTokens: "/api/auth/cli/tokens";
    readonly cliValidate: "/api/auth/cli/validate";
    readonly cliToken: "/api/cli/token";
    readonly shareToken: (shareId: string) => string;
    readonly links: "/api/links";
    readonly linkRedirect: (slug: string) => string;
    readonly websites: "/api/websites";
    readonly websiteById: (id: string) => string;
    readonly websiteEvents: (id: string) => string;
    readonly websiteRecentEvents: (id: string) => string;
    readonly userOnboarding: "/api/user/onboarding";
    readonly userProfile: "/api/user/profile";
    readonly userEmailPreferences: "/api/me/email-preferences";
    readonly billingUsage: "/api/billing/usage";
    readonly billingCheckout: "/api/billing/checkout";
    readonly billingPortal: "/api/billing/portal";
    readonly billingWebhook: "/api/billing/webhook";
    readonly analyticsOverview: (websiteId: string) => string;
    readonly analyticsTimeseries: (websiteId: string) => string;
    readonly analyticsTopPages: (websiteId: string) => string;
    readonly analyticsTopReferrers: (websiteId: string) => string;
    readonly analyticsGeography: (websiteId: string) => string;
    readonly analyticsDevices: (websiteId: string) => string;
    readonly collect: "/collect";
    readonly collectBatch: "/collect/batch";
    readonly send: "/collect";
    readonly collectVitals: "/api/collect/vitals";
    readonly collectVitalsBatch: "/api/collect/vitals/batch";
    readonly collectForms: "/api/collect/forms";
    readonly collectFormsBatch: "/api/collect/forms/batch";
    readonly vitalsOverview: "/api/vitals/overview";
    readonly vitalsByPage: "/api/vitals/by-page";
    readonly vitalsTrend: "/api/vitals/trend";
    readonly vitalsRecent: "/api/vitals/recent";
    readonly vitalsPageBreakdown: "/api/vitals/page-breakdown";
    readonly formsConversions: "/api/forms/conversions";
    readonly formsFieldMetrics: "/api/forms/field-metrics";
    readonly formsFunnel: "/api/forms/funnel";
    readonly formsRecent: "/api/forms/recent";
    readonly deployments: "/api/deployments";
    readonly deploymentByWebsite: (id: string) => string;
    readonly deploymentLatest: (id: string) => string;
    readonly websiteVitals: (id: string) => string;
    readonly websiteForms: (id: string) => string;
    readonly websiteDeployments: (id: string) => string;
    readonly health: "/api/health";
    readonly healthIntegrations: "/api/health/integrations";
};
/**
 * Onboarding step identifiers
 */
export declare const ONBOARDING_STEPS: {
    readonly welcome: "welcome";
    readonly createWebsite: "create-website";
    readonly installTracking: "install-tracking";
    readonly verify: "verify";
    readonly complete: "complete";
    readonly skipped: "skipped";
};
/**
 * CLI token statuses
 */
export declare const CLI_TOKEN_STATUS: {
    readonly pending: "pending";
    readonly used: "used";
    readonly expired: "expired";
    readonly revoked: "revoked";
};
/**
 * User roles
 */
export declare const USER_ROLES: {
    readonly admin: "admin";
    readonly user: "user";
    readonly viewer: "viewer";
};
/**
 * Framework package names
 */
export declare const FRAMEWORK_PACKAGES: {
    readonly nextjs: "@entrolytics/nextjs-sdk";
    readonly react: "@entrolytics/react-sdk";
    readonly vue: "@entrolytics/vue-sdk";
    readonly svelte: "@entrolytics/svelte-sdk";
    readonly astro: "@entrolytics/astro-sdk";
    readonly node: "@entrolytics/node-sdk";
};
/**
 * Framework detection patterns
 */
export declare const FRAMEWORK_PATTERNS: {
    readonly nextjs: {
        readonly files: readonly ["next.config.js", "next.config.mjs", "next.config.ts"];
        readonly dependencies: readonly ["next"];
    };
    readonly react: {
        readonly files: readonly ["vite.config.js", "vite.config.ts"];
        readonly dependencies: readonly ["react", "vite"];
    };
    readonly vue: {
        readonly files: readonly ["vite.config.js", "vite.config.ts"];
        readonly dependencies: readonly ["vue", "vite"];
    };
    readonly svelte: {
        readonly files: readonly ["svelte.config.js", "svelte.config.ts"];
        readonly dependencies: readonly ["svelte"];
    };
    readonly astro: {
        readonly files: readonly ["astro.config.mjs", "astro.config.ts"];
        readonly dependencies: readonly ["astro"];
    };
};
/**
 * Rate limiting configuration
 * Updated to match server-side implementation
 */
export declare const RATE_LIMITS: {
    readonly cliTokenExchange: {
        readonly windowSeconds: 60;
        readonly maxRequests: 5;
    };
    readonly shareTokenGeneration: {
        readonly windowSeconds: 60;
        readonly maxRequests: 10;
    };
    readonly linkCreation: {
        readonly windowSeconds: 60;
        readonly maxRequests: 20;
    };
    readonly linkRedirect: {
        readonly windowSeconds: 60;
        readonly maxRequests: 100;
    };
    readonly apiGeneral: {
        readonly windowSeconds: 60;
        readonly maxRequests: 100;
    };
    readonly cliTokenGeneration: {
        readonly windowMs: 3600000;
        readonly maxRequests: 10;
    };
    readonly cliValidation: {
        readonly windowMs: 3600000;
        readonly maxRequests: 100;
    };
    readonly eventCollection: {
        readonly windowMs: 60000;
        readonly maxRequests: 1000;
    };
};
/**
 * Error messages
 */
export declare const ERROR_MESSAGES: {
    readonly unauthorized: "Unauthorized access";
    readonly forbidden: "Access forbidden";
    readonly tokenExpired: "Token has expired";
    readonly tokenInvalid: "Invalid token";
    readonly tokenNotFound: "Token not found";
    readonly tokenAlreadyUsed: "Token has already been used";
    readonly tokenRevoked: "Token has been revoked";
    readonly tokenMissingJti: "Token missing JTI - please re-authenticate";
    readonly userBanned: "User account has been banned";
    readonly userDeleted: "User account has been deleted";
    readonly shareTokenExpired: "Share token has expired";
    readonly shareTokenRevoked: "Share has been revoked";
    readonly shareTokenInvalid: "Invalid share token";
    readonly invalidUrl: "Invalid URL provided";
    readonly invalidUrlProtocol: "URL must use http or https protocol";
    readonly openRedirectBlocked: "Open redirect attempt blocked";
    readonly invalidInput: "Invalid input provided";
    readonly missingRequired: "Missing required fields";
    readonly invalidFormat: "Invalid format";
    readonly notFound: "Resource not found";
    readonly websiteNotFound: "Website not found";
    readonly userNotFound: "User not found";
    readonly linkNotFound: "Link not found";
    readonly tooManyRequests: "Too many requests. Please try again later.";
    readonly rateLimitExceeded: "Rate limit exceeded";
    readonly internalError: "Internal server error";
    readonly serviceUnavailable: "Service temporarily unavailable";
};
/**
 * Success messages
 */
export declare const SUCCESS_MESSAGES: {
    readonly tokenGenerated: "Setup token generated successfully";
    readonly tokenValidated: "Token validated successfully";
    readonly tokenRevoked: "Token revoked successfully";
    readonly allTokensRevoked: "All tokens revoked successfully";
    readonly websiteCreated: "Website created successfully";
    readonly linkCreated: "Link created successfully";
    readonly shareCreated: "Share created successfully";
    readonly onboardingComplete: "Onboarding completed successfully";
    readonly setupComplete: "Setup completed successfully";
};
/**
 * CLI Access Token metadata
 */
export interface CliAccessTokenMetadata {
    jti: string;
    createdAt: string;
    expiresAt: string;
    lastUsedAt: string | null;
    ipAddress: string | null;
    userAgent: string | null;
}
export type Framework = keyof typeof ENV_VAR_NAMES;
export type EventType = (typeof EVENT_TYPES)[keyof typeof EVENT_TYPES];
export type SdkEventType = (typeof SDK_EVENT_TYPES)[keyof typeof SDK_EVENT_TYPES];
export type OnboardingStep = (typeof ONBOARDING_STEPS)[keyof typeof ONBOARDING_STEPS];
export type CliTokenStatus = (typeof CLI_TOKEN_STATUS)[keyof typeof CLI_TOKEN_STATUS];
export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];
export type PlanId = keyof typeof PLANS;
export type Plan = (typeof PLANS)[PlanId];
export type PlanFeature = keyof typeof PLAN_FEATURES;
export type BillingError = (typeof BILLING_ERRORS)[keyof typeof BILLING_ERRORS];
export type VitalType = (typeof VITAL_TYPES)[keyof typeof VITAL_TYPES];
export type VitalRating = (typeof VITAL_RATINGS)[keyof typeof VITAL_RATINGS];
export type NavigationType = (typeof NAVIGATION_TYPES)[keyof typeof NAVIGATION_TYPES];
export type FormEventType = (typeof FORM_EVENT_TYPES)[keyof typeof FORM_EVENT_TYPES];
export type FormFieldType = (typeof FORM_FIELD_TYPES)[keyof typeof FORM_FIELD_TYPES];
export type DeploymentSource = (typeof DEPLOYMENT_SOURCES)[keyof typeof DEPLOYMENT_SOURCES];
export declare const EVENT_TYPE_VALUES: [EventType, ...EventType[]];
export declare const SDK_EVENT_TYPE_VALUES: [SdkEventType, ...SdkEventType[]];
export declare const VITAL_TYPE_VALUES: [VitalType, ...VitalType[]];
export declare const VITAL_RATING_VALUES: [VitalRating, ...VitalRating[]];
export declare const NAVIGATION_TYPE_VALUES: [NavigationType, ...NavigationType[]];
export declare const FORM_EVENT_TYPE_VALUES: [FormEventType, ...FormEventType[]];
export declare const FORM_FIELD_TYPE_VALUES: [FormFieldType, ...FormFieldType[]];
export declare const DEPLOYMENT_SOURCE_VALUES: [DeploymentSource, ...DeploymentSource[]];
export declare function isEventType(value: string): value is EventType;
export declare function isSdkEventType(value: string): value is SdkEventType;
export declare function isVitalType(value: string): value is VitalType;
export declare function isVitalRating(value: string): value is VitalRating;
export declare function isNavigationType(value: string): value is NavigationType;
export declare function isFormEventType(value: string): value is FormEventType;
export declare function isFormFieldType(value: string): value is FormFieldType;
export declare function isDeploymentSource(value: string): value is DeploymentSource;
export declare function normalizeDeploymentSource(value: string | null | undefined): DeploymentSource;
/**
 * Web Vital data structure for SDK tracking
 */
export interface WebVitalData {
    metric: VitalType;
    value: number;
    rating: VitalRating;
    delta?: number;
    id?: string;
    navigationType?: NavigationType;
    attribution?: Record<string, unknown>;
    url?: string;
    path?: string;
}
/**
 * Form event data structure for SDK tracking
 */
export interface FormEventData {
    eventType: FormEventType;
    formId: string;
    formName?: string;
    urlPath: string;
    fieldName?: string;
    fieldType?: FormFieldType;
    fieldIndex?: number;
    timeOnField?: number;
    timeSinceStart?: number;
    errorMessage?: string;
    success?: boolean;
}
/**
 * Deployment context for SDK tracking
 */
export interface DeploymentContext {
    deployId: string;
    gitSha?: string;
    gitBranch?: string;
    deployUrl?: string;
    source?: DeploymentSource;
}
/**
 * Utility functions
 */
export declare function getEnvVarNames(framework: Framework): {
    readonly websiteId: "NEXT_PUBLIC_ENTROLYTICS_WEBSITE_ID";
    readonly host: "NEXT_PUBLIC_ENTROLYTICS_HOST";
    readonly envFile: ".env.local";
} | {
    readonly websiteId: "VITE_ENTROLYTICS_WEBSITE_ID";
    readonly host: "VITE_ENTROLYTICS_HOST";
    readonly envFile: ".env";
    readonly fallback: {
        readonly websiteId: "REACT_APP_ENTROLYTICS_WEBSITE_ID";
        readonly host: "REACT_APP_ENTROLYTICS_HOST";
    };
} | {
    readonly websiteId: "VITE_ENTROLYTICS_WEBSITE_ID";
    readonly host: "VITE_ENTROLYTICS_HOST";
    readonly envFile: ".env";
} | {
    readonly websiteId: "PUBLIC_ENTROLYTICS_WEBSITE_ID";
    readonly host: "PUBLIC_ENTROLYTICS_HOST";
    readonly envFile: ".env";
} | {
    readonly websiteId: "PUBLIC_ENTROLYTICS_WEBSITE_ID";
    readonly host: "PUBLIC_ENTROLYTICS_HOST";
    readonly envFile: ".env";
} | {
    readonly websiteId: "ENTROLYTICS_WEBSITE_ID";
    readonly host: "ENTROLYTICS_HOST";
    readonly envFile: ".env";
} | {
    readonly websiteId: "ENTROLYTICS_WEBSITE_ID";
    readonly host: "ENTROLYTICS_HOST";
    readonly envFile: ".env";
} | {
    readonly websiteId: "ENTROLYTICS_WEBSITE_ID";
    readonly host: "ENTROLYTICS_HOST";
    readonly envFile: ".env";
} | {
    readonly websiteId: "ENTROLYTICS_WEBSITE_ID";
    readonly host: "ENTROLYTICS_HOST";
    readonly envFile: ".env";
} | {
    readonly websiteId: "ENTROLYTICS_WEBSITE_ID";
    readonly host: "ENTROLYTICS_HOST";
    readonly envFile: ".env";
};
export declare function getFrameworkPackage(framework: Framework): "@entrolytics/nextjs-sdk" | "@entrolytics/react-sdk" | "@entrolytics/vue-sdk" | "@entrolytics/svelte-sdk" | "@entrolytics/astro-sdk" | "@entrolytics/node-sdk";
export declare function isValidFramework(framework: string): framework is Framework;
export declare function getApiRoute(route: keyof typeof API_ROUTES, ...args: string[]): string;
/**
 * Get plan by ID
 */
export declare function getPlan(planId: PlanId): Plan;
/**
 * Check if a feature is available for a plan
 */
export declare function isPlanFeatureEnabled(planId: PlanId, feature: PlanFeature): boolean;
/**
 * Get plan limit value (-1 means unlimited)
 */
export declare function getPlanLimit(planId: PlanId, limit: keyof Plan["limits"]): number;
/**
 * Check if usage is at warning threshold
 */
export declare function isUsageWarning(current: number, limit: number): boolean;
/**
 * Check if usage is at critical threshold
 */
export declare function isUsageCritical(current: number, limit: number): boolean;
/**
 * Calculate Web Vital rating from value (Phase 2)
 */
export declare function getVitalRating(metric: VitalType, value: number): VitalRating;
/**
 * Detect deployment context from environment variables (Phase 2)
 * Works in Node.js environments only - returns null in browser
 */
export declare function detectDeploymentContext(): DeploymentContext | null;
export * from "./analytics-types";
export * from "./event-protocol";
//# sourceMappingURL=index.d.ts.map
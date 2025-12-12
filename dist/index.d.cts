/**
 * Shared constants across Entrolytics ecosystem
 * Used by: CLI, SDKs, Dashboard, Integrations
 */
/**
 * Plan definitions and limits
 */
declare const PLANS: {
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
declare const PLAN_FEATURES: {
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
declare const USAGE_THRESHOLDS: {
    readonly warning: 90;
    readonly critical: 95;
};
/**
 * Billing-related error codes
 */
declare const BILLING_ERRORS: {
    readonly quotaExceeded: "QUOTA_EXCEEDED";
    readonly planRequired: "PLAN_REQUIRED";
    readonly featureNotAvailable: "FEATURE_NOT_AVAILABLE";
    readonly subscriptionInactive: "SUBSCRIPTION_INACTIVE";
    readonly paymentFailed: "PAYMENT_FAILED";
};
/**
 * API endpoint configuration
 */
declare const API_ENDPOINTS: {
    readonly production: "https://ng.entrolytics.click";
    readonly development: "http://localhost:3000";
};
/**
 * Default API host
 */
declare const DEFAULT_API_HOST: "https://ng.entrolytics.click" | "http://localhost:3000";
/**
 * Environment variable naming conventions by framework
 */
declare const ENV_VAR_NAMES: {
    readonly nextjs: {
        readonly websiteId: "NEXT_PUBLIC_ENTROLYTICS_NG_WEBSITE_ID";
        readonly host: "NEXT_PUBLIC_ENTROLYTICS_NG_HOST";
        readonly envFile: ".env.local";
    };
    readonly react: {
        readonly websiteId: "VITE_ENTROLYTICS_NG_WEBSITE_ID";
        readonly host: "VITE_ENTROLYTICS_NG_HOST";
        readonly envFile: ".env";
        readonly fallback: {
            readonly websiteId: "REACT_APP_ENTROLYTICS_NG_WEBSITE_ID";
            readonly host: "REACT_APP_ENTROLYTICS_NG_HOST";
        };
    };
    readonly vue: {
        readonly websiteId: "VITE_ENTROLYTICS_NG_WEBSITE_ID";
        readonly host: "VITE_ENTROLYTICS_NG_HOST";
        readonly envFile: ".env";
    };
    readonly svelte: {
        readonly websiteId: "PUBLIC_ENTROLYTICS_NG_WEBSITE_ID";
        readonly host: "PUBLIC_ENTROLYTICS_NG_HOST";
        readonly envFile: ".env";
    };
    readonly astro: {
        readonly websiteId: "PUBLIC_ENTROLYTICS_NG_WEBSITE_ID";
        readonly host: "PUBLIC_ENTROLYTICS_NG_HOST";
        readonly envFile: ".env";
    };
    readonly html: {
        readonly websiteId: "ENTROLYTICS_NG_WEBSITE_ID";
        readonly host: "ENTROLYTICS_NG_HOST";
        readonly envFile: ".env";
    };
    readonly node: {
        readonly websiteId: "ENTROLYTICS_NG_WEBSITE_ID";
        readonly host: "ENTROLYTICS_NG_HOST";
        readonly envFile: ".env";
    };
    readonly php: {
        readonly websiteId: "ENTROLYTICS_NG_WEBSITE_ID";
        readonly host: "ENTROLYTICS_NG_HOST";
        readonly envFile: ".env";
    };
    readonly python: {
        readonly websiteId: "ENTROLYTICS_NG_WEBSITE_ID";
        readonly host: "ENTROLYTICS_NG_HOST";
        readonly envFile: ".env";
    };
    readonly go: {
        readonly websiteId: "ENTROLYTICS_NG_WEBSITE_ID";
        readonly host: "ENTROLYTICS_NG_HOST";
        readonly envFile: ".env";
    };
};
/**
 * CLI configuration constants
 */
declare const CLI_CONFIG: {
    readonly tokenExpiryMinutes: 15;
    readonly maxTokensPerUser: 10;
    readonly pollIntervalMs: 2000;
    readonly setupTimeoutMs: 300000;
    readonly minCliVersion: "1.0.0";
};
/**
 * Standard event types
 */
declare const EVENT_TYPES: {
    readonly pageView: "page_view";
    readonly click: "click";
    readonly formSubmit: "form_submit";
    readonly custom: "custom";
    readonly error: "error";
    readonly performance: "performance";
};
/**
 * Web Vitals metric types (Phase 2)
 * Core Web Vitals: LCP, INP, CLS
 * Additional: TTFB, FCP
 */
declare const VITAL_TYPES: {
    readonly LCP: "LCP";
    readonly INP: "INP";
    readonly CLS: "CLS";
    readonly TTFB: "TTFB";
    readonly FCP: "FCP";
};
/**
 * Web Vitals rating thresholds
 */
declare const VITAL_RATINGS: {
    readonly good: "good";
    readonly needsImprovement: "needs-improvement";
    readonly poor: "poor";
};
/**
 * Web Vitals thresholds by metric (in milliseconds, except CLS which is unitless)
 */
declare const VITAL_THRESHOLDS: {
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
declare const NAVIGATION_TYPES: {
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
declare const FORM_EVENT_TYPES: {
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
declare const FORM_FIELD_TYPES: {
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
declare const DEPLOYMENT_SOURCES: {
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
declare const DEPLOYMENT_ENV_VARS: {
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
declare const HTTP_STATUS: {
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
declare const API_ROUTES: {
    readonly cliAuthToken: "/api/auth/cli/token";
    readonly cliAuthTokens: "/api/auth/cli/tokens";
    readonly cliToken: "/api/cli/token";
    readonly cliValidate: "/api/cli/validate";
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
    readonly collect: "/api/collect";
    readonly send: "/api/send";
    readonly collectVitals: "/api/collect/vitals";
    readonly collectForms: "/api/collect/forms";
    readonly websiteVitals: (id: string) => string;
    readonly websiteForms: (id: string) => string;
    readonly websiteDeployments: (id: string) => string;
    readonly health: "/api/health";
    readonly healthIntegrations: "/api/health/integrations";
};
/**
 * Onboarding step identifiers
 */
declare const ONBOARDING_STEPS: {
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
declare const CLI_TOKEN_STATUS: {
    readonly pending: "pending";
    readonly used: "used";
    readonly expired: "expired";
    readonly revoked: "revoked";
};
/**
 * User roles
 */
declare const USER_ROLES: {
    readonly admin: "admin";
    readonly user: "user";
    readonly viewer: "viewer";
};
/**
 * Framework package names
 */
declare const FRAMEWORK_PACKAGES: {
    readonly nextjs: "@entrolytics/nextjs";
    readonly react: "@entrolytics/react";
    readonly vue: "@entrolytics/vue";
    readonly svelte: "@entrolytics/svelte";
    readonly astro: "@entrolytics/astro";
    readonly node: "@entrolytics/node";
};
/**
 * Framework detection patterns
 */
declare const FRAMEWORK_PATTERNS: {
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
declare const RATE_LIMITS: {
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
declare const ERROR_MESSAGES: {
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
declare const SUCCESS_MESSAGES: {
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
interface CliAccessTokenMetadata {
    jti: string;
    createdAt: string;
    expiresAt: string;
    lastUsedAt: string | null;
    ipAddress: string | null;
    userAgent: string | null;
}
type Framework = keyof typeof ENV_VAR_NAMES;
type EventType = (typeof EVENT_TYPES)[keyof typeof EVENT_TYPES];
type OnboardingStep = (typeof ONBOARDING_STEPS)[keyof typeof ONBOARDING_STEPS];
type CliTokenStatus = (typeof CLI_TOKEN_STATUS)[keyof typeof CLI_TOKEN_STATUS];
type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];
type PlanId = keyof typeof PLANS;
type Plan = (typeof PLANS)[PlanId];
type PlanFeature = keyof typeof PLAN_FEATURES;
type BillingError = (typeof BILLING_ERRORS)[keyof typeof BILLING_ERRORS];
type VitalType = (typeof VITAL_TYPES)[keyof typeof VITAL_TYPES];
type VitalRating = (typeof VITAL_RATINGS)[keyof typeof VITAL_RATINGS];
type NavigationType = (typeof NAVIGATION_TYPES)[keyof typeof NAVIGATION_TYPES];
type FormEventType = (typeof FORM_EVENT_TYPES)[keyof typeof FORM_EVENT_TYPES];
type FormFieldType = (typeof FORM_FIELD_TYPES)[keyof typeof FORM_FIELD_TYPES];
type DeploymentSource = (typeof DEPLOYMENT_SOURCES)[keyof typeof DEPLOYMENT_SOURCES];
/**
 * Web Vital data structure for SDK tracking
 */
interface WebVitalData {
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
interface FormEventData {
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
interface DeploymentContext {
    deployId: string;
    gitSha?: string;
    gitBranch?: string;
    deployUrl?: string;
    source?: DeploymentSource;
}
/**
 * Utility functions
 */
declare function getEnvVarNames(framework: Framework): {
    readonly websiteId: "NEXT_PUBLIC_ENTROLYTICS_NG_WEBSITE_ID";
    readonly host: "NEXT_PUBLIC_ENTROLYTICS_NG_HOST";
    readonly envFile: ".env.local";
} | {
    readonly websiteId: "VITE_ENTROLYTICS_NG_WEBSITE_ID";
    readonly host: "VITE_ENTROLYTICS_NG_HOST";
    readonly envFile: ".env";
    readonly fallback: {
        readonly websiteId: "REACT_APP_ENTROLYTICS_NG_WEBSITE_ID";
        readonly host: "REACT_APP_ENTROLYTICS_NG_HOST";
    };
} | {
    readonly websiteId: "VITE_ENTROLYTICS_NG_WEBSITE_ID";
    readonly host: "VITE_ENTROLYTICS_NG_HOST";
    readonly envFile: ".env";
} | {
    readonly websiteId: "PUBLIC_ENTROLYTICS_NG_WEBSITE_ID";
    readonly host: "PUBLIC_ENTROLYTICS_NG_HOST";
    readonly envFile: ".env";
} | {
    readonly websiteId: "PUBLIC_ENTROLYTICS_NG_WEBSITE_ID";
    readonly host: "PUBLIC_ENTROLYTICS_NG_HOST";
    readonly envFile: ".env";
} | {
    readonly websiteId: "ENTROLYTICS_NG_WEBSITE_ID";
    readonly host: "ENTROLYTICS_NG_HOST";
    readonly envFile: ".env";
} | {
    readonly websiteId: "ENTROLYTICS_NG_WEBSITE_ID";
    readonly host: "ENTROLYTICS_NG_HOST";
    readonly envFile: ".env";
} | {
    readonly websiteId: "ENTROLYTICS_NG_WEBSITE_ID";
    readonly host: "ENTROLYTICS_NG_HOST";
    readonly envFile: ".env";
} | {
    readonly websiteId: "ENTROLYTICS_NG_WEBSITE_ID";
    readonly host: "ENTROLYTICS_NG_HOST";
    readonly envFile: ".env";
} | {
    readonly websiteId: "ENTROLYTICS_NG_WEBSITE_ID";
    readonly host: "ENTROLYTICS_NG_HOST";
    readonly envFile: ".env";
};
declare function getFrameworkPackage(framework: Framework): "@entrolytics/nextjs" | "@entrolytics/react" | "@entrolytics/vue" | "@entrolytics/svelte" | "@entrolytics/astro" | "@entrolytics/node";
declare function isValidFramework(framework: string): framework is Framework;
declare function getApiRoute(route: keyof typeof API_ROUTES, ...args: string[]): string;
/**
 * Get plan by ID
 */
declare function getPlan(planId: PlanId): Plan;
/**
 * Check if a feature is available for a plan
 */
declare function isPlanFeatureEnabled(planId: PlanId, feature: PlanFeature): boolean;
/**
 * Get plan limit value (-1 means unlimited)
 */
declare function getPlanLimit(planId: PlanId, limit: keyof Plan['limits']): number;
/**
 * Check if usage is at warning threshold
 */
declare function isUsageWarning(current: number, limit: number): boolean;
/**
 * Check if usage is at critical threshold
 */
declare function isUsageCritical(current: number, limit: number): boolean;
/**
 * Calculate Web Vital rating from value (Phase 2)
 */
declare function getVitalRating(metric: VitalType, value: number): VitalRating;
/**
 * Detect deployment context from environment variables (Phase 2)
 * Works in Node.js environments only - returns null in browser
 */
declare function detectDeploymentContext(): DeploymentContext | null;

export { API_ENDPOINTS, API_ROUTES, BILLING_ERRORS, type BillingError, CLI_CONFIG, CLI_TOKEN_STATUS, type CliAccessTokenMetadata, type CliTokenStatus, DEFAULT_API_HOST, DEPLOYMENT_ENV_VARS, DEPLOYMENT_SOURCES, type DeploymentContext, type DeploymentSource, ENV_VAR_NAMES, ERROR_MESSAGES, EVENT_TYPES, type EventType, FORM_EVENT_TYPES, FORM_FIELD_TYPES, FRAMEWORK_PACKAGES, FRAMEWORK_PATTERNS, type FormEventData, type FormEventType, type FormFieldType, type Framework, HTTP_STATUS, NAVIGATION_TYPES, type NavigationType, ONBOARDING_STEPS, type OnboardingStep, PLANS, PLAN_FEATURES, type Plan, type PlanFeature, type PlanId, RATE_LIMITS, SUCCESS_MESSAGES, USAGE_THRESHOLDS, USER_ROLES, type UserRole, VITAL_RATINGS, VITAL_THRESHOLDS, VITAL_TYPES, type VitalRating, type VitalType, type WebVitalData, detectDeploymentContext, getApiRoute, getEnvVarNames, getFrameworkPackage, getPlan, getPlanLimit, getVitalRating, isPlanFeatureEnabled, isUsageCritical, isUsageWarning, isValidFramework };

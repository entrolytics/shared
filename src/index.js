/**
 * Shared constants across Entrolytics ecosystem
 * Used by: CLI, SDKs, Dashboard, Integrations
 */
/**
 * Plan definitions and limits
 */
export const PLANS = {
    starter: {
        id: "starter",
        name: "Starter",
        price: 0,
        limits: {
            pageviewsPerMonth: 25_000,
            websites: 2,
            retentionDays: 30,
            seats: 1,
        },
        features: {
            funnels: false,
            attribution: false,
            revenue: false,
            customDashboards: false,
            apiAccess: false,
            weeklyReports: true,
            support: "community",
        },
    },
    pro: {
        id: "pro",
        name: "Pro",
        price: 29,
        limits: {
            pageviewsPerMonth: 250_000,
            websites: 10,
            retentionDays: 365,
            seats: 5,
        },
        features: {
            funnels: true,
            attribution: true,
            revenue: true,
            customDashboards: false,
            apiAccess: true,
            weeklyReports: true,
            support: "email",
        },
    },
    business: {
        id: "business",
        name: "Business",
        price: 99,
        limits: {
            pageviewsPerMonth: 1_000_000,
            websites: -1, // unlimited
            retentionDays: 730, // 2 years
            seats: -1, // unlimited
        },
        features: {
            funnels: true,
            attribution: true,
            revenue: true,
            customDashboards: true,
            apiAccess: true,
            weeklyReports: true,
            support: "priority",
        },
    },
    enterprise: {
        id: "enterprise",
        name: "Enterprise",
        price: -1, // custom
        limits: {
            pageviewsPerMonth: -1, // custom
            websites: -1,
            retentionDays: -1, // custom
            seats: -1,
        },
        features: {
            funnels: true,
            attribution: true,
            revenue: true,
            customDashboards: true,
            apiAccess: true,
            weeklyReports: true,
            support: "dedicated",
            sso: true,
            auditLogs: true,
            customRetention: true,
        },
    },
};
/**
 * Plan feature names for display
 */
export const PLAN_FEATURES = {
    funnels: "Funnel Analytics",
    attribution: "Attribution Reports",
    revenue: "Revenue Tracking",
    customDashboards: "Custom Dashboards",
    apiAccess: "API Access",
    weeklyReports: "Weekly Email Reports",
    sso: "SSO/SAML",
    auditLogs: "Audit Logs",
    customRetention: "Custom Data Retention",
};
/**
 * Usage warning thresholds (percentages)
 */
export const USAGE_THRESHOLDS = {
    warning: 90,
    critical: 95,
};
/**
 * Billing-related error codes
 */
export const BILLING_ERRORS = {
    quotaExceeded: "QUOTA_EXCEEDED",
    planRequired: "PLAN_REQUIRED",
    featureNotAvailable: "FEATURE_NOT_AVAILABLE",
    subscriptionInactive: "SUBSCRIPTION_INACTIVE",
    paymentFailed: "PAYMENT_FAILED",
};
/**
 * API endpoint configuration
 */
export const API_ENDPOINTS = {
    production: "https://api.entrolytics.click",
    development: "http://localhost:3001",
};
/**
 * Default API host
 */
export const DEFAULT_API_HOST = getEnv()?.NODE_ENV === "production" ? API_ENDPOINTS.production : API_ENDPOINTS.development;
/**
 * Environment variable naming conventions by framework
 */
export const ENV_VAR_NAMES = {
    nextjs: {
        websiteId: "NEXT_PUBLIC_ENTROLYTICS_WEBSITE_ID",
        host: "NEXT_PUBLIC_ENTROLYTICS_HOST",
        envFile: ".env.local",
    },
    react: {
        websiteId: "VITE_ENTROLYTICS_WEBSITE_ID",
        host: "VITE_ENTROLYTICS_HOST",
        envFile: ".env",
        fallback: {
            // CRA fallback
            websiteId: "REACT_APP_ENTROLYTICS_WEBSITE_ID",
            host: "REACT_APP_ENTROLYTICS_HOST",
        },
    },
    vue: {
        websiteId: "VITE_ENTROLYTICS_WEBSITE_ID",
        host: "VITE_ENTROLYTICS_HOST",
        envFile: ".env",
    },
    svelte: {
        websiteId: "PUBLIC_ENTROLYTICS_WEBSITE_ID",
        host: "PUBLIC_ENTROLYTICS_HOST",
        envFile: ".env",
    },
    astro: {
        websiteId: "PUBLIC_ENTROLYTICS_WEBSITE_ID",
        host: "PUBLIC_ENTROLYTICS_HOST",
        envFile: ".env",
    },
    html: {
        websiteId: "ENTROLYTICS_WEBSITE_ID",
        host: "ENTROLYTICS_HOST",
        envFile: ".env",
    },
    node: {
        websiteId: "ENTROLYTICS_WEBSITE_ID",
        host: "ENTROLYTICS_HOST",
        envFile: ".env",
    },
    php: {
        websiteId: "ENTROLYTICS_WEBSITE_ID",
        host: "ENTROLYTICS_HOST",
        envFile: ".env",
    },
    python: {
        websiteId: "ENTROLYTICS_WEBSITE_ID",
        host: "ENTROLYTICS_HOST",
        envFile: ".env",
    },
    go: {
        websiteId: "ENTROLYTICS_WEBSITE_ID",
        host: "ENTROLYTICS_HOST",
        envFile: ".env",
    },
};
/**
 * CLI configuration constants
 */
export const CLI_CONFIG = {
    tokenExpiryMinutes: 15,
    maxTokensPerUser: 10,
    pollIntervalMs: 2000,
    setupTimeoutMs: 300000, // 5 minutes
    minCliVersion: "1.0.0",
};
/**
 * Core event types - matches backend protocol values exactly
 * Used by: API Server, SDKs, CLI, worker processes
 * See: entrolytics/packages/protocol/src/events.ts
 */
export const EVENT_TYPES = {
    pageView: "pageview",
    custom: "custom_event",
    click: "click",
};
/**
 * Extended event types for SDK-level semantics
 * These are higher-level event categories used by SDKs
 * They map to the core EVENT_TYPES when sent to the backend
 */
export const SDK_EVENT_TYPES = {
    pageView: "pageview",
    click: "click",
    formSubmit: "form_submit",
    custom: "custom_event",
    error: "error",
    performance: "performance",
};
/**
 * Web Vitals metric types (Phase 2)
 * Core Web Vitals: LCP, INP, CLS
 * Additional: TTFB, FCP
 */
export const VITAL_TYPES = {
    LCP: "LCP", // Largest Contentful Paint
    INP: "INP", // Interaction to Next Paint (replaced FID)
    CLS: "CLS", // Cumulative Layout Shift
    TTFB: "TTFB", // Time to First Byte
    FCP: "FCP", // First Contentful Paint
};
/**
 * Web Vitals rating thresholds
 */
export const VITAL_RATINGS = {
    good: "good",
    needsImprovement: "needs-improvement",
    poor: "poor",
};
/**
 * Web Vitals thresholds by metric (in milliseconds, except CLS which is unitless)
 */
export const VITAL_THRESHOLDS = {
    LCP: { good: 2500, poor: 4000 },
    INP: { good: 200, poor: 500 },
    CLS: { good: 0.1, poor: 0.25 },
    TTFB: { good: 800, poor: 1800 },
    FCP: { good: 1800, poor: 3000 },
};
/**
 * Navigation types for Web Vitals context
 */
export const NAVIGATION_TYPES = {
    navigate: "navigate",
    reload: "reload",
    backForward: "back-forward",
    backForwardCache: "back-forward-cache",
    prerender: "prerender",
    restore: "restore",
};
/**
 * Form event types (Phase 2)
 */
export const FORM_EVENT_TYPES = {
    start: "start", // Form interaction started
    fieldFocus: "field_focus", // Field received focus
    fieldBlur: "field_blur", // Field lost focus
    fieldError: "field_error", // Field validation error
    submit: "submit", // Form submitted
    abandon: "abandon", // Form abandoned (left page)
};
/**
 * Form field types
 */
export const FORM_FIELD_TYPES = {
    text: "text",
    email: "email",
    password: "password",
    tel: "tel",
    number: "number",
    url: "url",
    textarea: "textarea",
    select: "select",
    checkbox: "checkbox",
    radio: "radio",
    date: "date",
    file: "file",
    hidden: "hidden",
    submit: "submit",
    other: "other",
};
/**
 * Deployment platform sources (Phase 2)
 */
export const DEPLOYMENT_SOURCES = {
    vercel: "vercel",
    netlify: "netlify",
    cloudflare: "cloudflare",
    railway: "railway",
    render: "render",
    fly: "fly",
    heroku: "heroku",
    aws: "aws",
    gcp: "gcp",
    azure: "azure",
    custom: "custom",
};
/**
 * Deployment environment variables by platform
 */
export const DEPLOYMENT_ENV_VARS = {
    vercel: {
        deployId: "VERCEL_DEPLOYMENT_ID",
        gitSha: "VERCEL_GIT_COMMIT_SHA",
        gitBranch: "VERCEL_GIT_COMMIT_REF",
        url: "VERCEL_URL",
    },
    netlify: {
        deployId: "DEPLOY_ID",
        gitSha: "COMMIT_REF",
        gitBranch: "BRANCH",
        url: "DEPLOY_URL",
    },
    cloudflare: {
        deployId: "CF_PAGES_COMMIT_SHA",
        gitSha: "CF_PAGES_COMMIT_SHA",
        gitBranch: "CF_PAGES_BRANCH",
        url: "CF_PAGES_URL",
    },
};
/**
 * HTTP status codes
 */
export const HTTP_STATUS = {
    ok: 200,
    created: 201,
    accepted: 202,
    noContent: 204,
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    conflict: 409,
    tooManyRequests: 429,
    internalServerError: 500,
    serviceUnavailable: 503,
};
/**
 * API route paths
 */
export const API_ROUTES = {
    // CLI Auth routes
    cliAuthToken: "/api/auth/cli/token",
    cliAuthTokens: "/api/auth/cli/tokens",
    cliValidate: "/api/auth/cli/validate",
    cliToken: "/api/cli/token", // Legacy - deprecated
    // Share routes
    shareToken: (shareId) => `/api/share/${shareId}`,
    // Links routes
    links: "/api/links",
    linkRedirect: (slug) => `/q/${slug}`,
    // Website routes
    websites: "/api/websites",
    websiteById: (id) => `/api/websites/${id}`,
    websiteEvents: (id) => `/api/websites/${id}/events`,
    websiteRecentEvents: (id) => `/api/websites/${id}/recent-events`,
    // User routes
    userOnboarding: "/api/user/onboarding",
    userProfile: "/api/user/profile",
    userEmailPreferences: "/api/me/email-preferences",
    // Billing routes
    billingUsage: "/api/billing/usage",
    billingCheckout: "/api/billing/checkout",
    billingPortal: "/api/billing/portal",
    billingWebhook: "/api/billing/webhook",
    // Analytics routes (REST)
    analyticsOverview: (websiteId) => `/api/analytics/${websiteId}/overview`,
    analyticsTimeseries: (websiteId) => `/api/analytics/${websiteId}/timeseries`,
    analyticsTopPages: (websiteId) => `/api/analytics/${websiteId}/top-pages`,
    analyticsTopReferrers: (websiteId) => `/api/analytics/${websiteId}/top-referrers`,
    analyticsGeography: (websiteId) => `/api/analytics/${websiteId}/geography`,
    analyticsDevices: (websiteId) => `/api/analytics/${websiteId}/devices`,
    // Event collection
    collect: "/collect",
    collectBatch: "/collect/batch",
    send: "/collect",
    // Phase 2: Web Vitals, Forms, Deployments
    collectVitals: "/api/collect/vitals",
    collectVitalsBatch: "/api/collect/vitals/batch",
    collectForms: "/api/collect/forms",
    collectFormsBatch: "/api/collect/forms/batch",
    vitalsOverview: "/api/vitals/overview",
    vitalsByPage: "/api/vitals/by-page",
    vitalsTrend: "/api/vitals/trend",
    vitalsRecent: "/api/vitals/recent",
    vitalsPageBreakdown: "/api/vitals/page-breakdown",
    formsConversions: "/api/forms/conversions",
    formsFieldMetrics: "/api/forms/field-metrics",
    formsFunnel: "/api/forms/funnel",
    formsRecent: "/api/forms/recent",
    deployments: "/api/deployments",
    deploymentByWebsite: (id) => `/api/deployments/${id}`,
    deploymentLatest: (id) => `/api/deployments/${id}/latest`,
    // Backwards-compatible aliases for legacy website-scoped helpers
    websiteVitals: (id) => `/api/vitals/overview?websiteId=${encodeURIComponent(id)}`,
    websiteForms: (id) => `/api/forms/conversions?websiteId=${encodeURIComponent(id)}`,
    websiteDeployments: (id) => `/api/deployments/${encodeURIComponent(id)}`,
    // Health checks
    health: "/api/health",
    healthIntegrations: "/api/health/integrations",
};
/**
 * Onboarding step identifiers
 */
export const ONBOARDING_STEPS = {
    welcome: "welcome",
    createWebsite: "create-website",
    installTracking: "install-tracking",
    verify: "verify",
    complete: "complete",
    skipped: "skipped",
};
/**
 * CLI token statuses
 */
export const CLI_TOKEN_STATUS = {
    pending: "pending",
    used: "used",
    expired: "expired",
    revoked: "revoked",
};
/**
 * User roles
 */
export const USER_ROLES = {
    admin: "admin",
    user: "user",
    viewer: "viewer",
};
/**
 * Framework package names
 */
export const FRAMEWORK_PACKAGES = {
    nextjs: "@entrolytics/nextjs-sdk",
    react: "@entrolytics/react-sdk",
    vue: "@entrolytics/vue-sdk",
    svelte: "@entrolytics/svelte-sdk",
    astro: "@entrolytics/astro-sdk",
    node: "@entrolytics/node-sdk",
};
/**
 * Framework detection patterns
 */
export const FRAMEWORK_PATTERNS = {
    nextjs: {
        files: ["next.config.js", "next.config.mjs", "next.config.ts"],
        dependencies: ["next"],
    },
    react: {
        files: ["vite.config.js", "vite.config.ts"],
        dependencies: ["react", "vite"],
    },
    vue: {
        files: ["vite.config.js", "vite.config.ts"],
        dependencies: ["vue", "vite"],
    },
    svelte: {
        files: ["svelte.config.js", "svelte.config.ts"],
        dependencies: ["svelte"],
    },
    astro: {
        files: ["astro.config.mjs", "astro.config.ts"],
        dependencies: ["astro"],
    },
};
/**
 * Rate limiting configuration
 * Updated to match server-side implementation
 */
export const RATE_LIMITS = {
    cliTokenExchange: {
        windowSeconds: 60, // 1 minute
        maxRequests: 5,
    },
    shareTokenGeneration: {
        windowSeconds: 60, // 1 minute
        maxRequests: 10,
    },
    linkCreation: {
        windowSeconds: 60, // 1 minute
        maxRequests: 20,
    },
    linkRedirect: {
        windowSeconds: 60, // 1 minute
        maxRequests: 100,
    },
    apiGeneral: {
        windowSeconds: 60, // 1 minute
        maxRequests: 100,
    },
    // Legacy (deprecated but kept for backwards compatibility)
    cliTokenGeneration: {
        windowMs: 3600000, // 1 hour
        maxRequests: 10,
    },
    cliValidation: {
        windowMs: 3600000, // 1 hour
        maxRequests: 100,
    },
    eventCollection: {
        windowMs: 60000, // 1 minute
        maxRequests: 1000,
    },
};
/**
 * Error messages
 */
export const ERROR_MESSAGES = {
    // Authentication
    unauthorized: "Unauthorized access",
    forbidden: "Access forbidden",
    tokenExpired: "Token has expired",
    tokenInvalid: "Invalid token",
    tokenNotFound: "Token not found",
    tokenAlreadyUsed: "Token has already been used",
    tokenRevoked: "Token has been revoked",
    tokenMissingJti: "Token missing JTI - please re-authenticate",
    userBanned: "User account has been banned",
    userDeleted: "User account has been deleted",
    // Share tokens
    shareTokenExpired: "Share token has expired",
    shareTokenRevoked: "Share has been revoked",
    shareTokenInvalid: "Invalid share token",
    // URL Validation
    invalidUrl: "Invalid URL provided",
    invalidUrlProtocol: "URL must use http or https protocol",
    openRedirectBlocked: "Open redirect attempt blocked",
    // Validation
    invalidInput: "Invalid input provided",
    missingRequired: "Missing required fields",
    invalidFormat: "Invalid format",
    // Resources
    notFound: "Resource not found",
    websiteNotFound: "Website not found",
    userNotFound: "User not found",
    linkNotFound: "Link not found",
    // Rate limiting
    tooManyRequests: "Too many requests. Please try again later.",
    rateLimitExceeded: "Rate limit exceeded",
    // Server
    internalError: "Internal server error",
    serviceUnavailable: "Service temporarily unavailable",
};
/**
 * Success messages
 */
export const SUCCESS_MESSAGES = {
    tokenGenerated: "Setup token generated successfully",
    tokenValidated: "Token validated successfully",
    tokenRevoked: "Token revoked successfully",
    allTokensRevoked: "All tokens revoked successfully",
    websiteCreated: "Website created successfully",
    linkCreated: "Link created successfully",
    shareCreated: "Share created successfully",
    onboardingComplete: "Onboarding completed successfully",
    setupComplete: "Setup completed successfully",
};
export const EVENT_TYPE_VALUES = Object.values(EVENT_TYPES);
export const SDK_EVENT_TYPE_VALUES = Object.values(SDK_EVENT_TYPES);
export const VITAL_TYPE_VALUES = Object.values(VITAL_TYPES);
export const VITAL_RATING_VALUES = Object.values(VITAL_RATINGS);
export const NAVIGATION_TYPE_VALUES = Object.values(NAVIGATION_TYPES);
export const FORM_EVENT_TYPE_VALUES = Object.values(FORM_EVENT_TYPES);
export const FORM_FIELD_TYPE_VALUES = Object.values(FORM_FIELD_TYPES);
export const DEPLOYMENT_SOURCE_VALUES = Object.values(DEPLOYMENT_SOURCES);
export function isEventType(value) {
    return EVENT_TYPE_VALUES.includes(value);
}
export function isSdkEventType(value) {
    return SDK_EVENT_TYPE_VALUES.includes(value);
}
export function isVitalType(value) {
    return VITAL_TYPE_VALUES.includes(value);
}
export function isVitalRating(value) {
    return VITAL_RATING_VALUES.includes(value);
}
export function isNavigationType(value) {
    return NAVIGATION_TYPE_VALUES.includes(value);
}
export function isFormEventType(value) {
    return FORM_EVENT_TYPE_VALUES.includes(value);
}
export function isFormFieldType(value) {
    return FORM_FIELD_TYPE_VALUES.includes(value);
}
export function isDeploymentSource(value) {
    return DEPLOYMENT_SOURCE_VALUES.includes(value);
}
export function normalizeDeploymentSource(value) {
    if (!value) {
        return "custom";
    }
    return isDeploymentSource(value) ? value : "custom";
}
/**
 * Utility functions
 */
export function getEnvVarNames(framework) {
    return ENV_VAR_NAMES[framework];
}
export function getFrameworkPackage(framework) {
    return FRAMEWORK_PACKAGES[framework] || null;
}
export function isValidFramework(framework) {
    return framework in ENV_VAR_NAMES;
}
export function getApiRoute(route, ...args) {
    const routeFn = API_ROUTES[route];
    if (typeof routeFn === "function") {
        return routeFn(...args);
    }
    return routeFn;
}
/**
 * Get plan by ID
 */
export function getPlan(planId) {
    return PLANS[planId];
}
/**
 * Check if a feature is available for a plan
 */
export function isPlanFeatureEnabled(planId, feature) {
    const plan = PLANS[planId];
    return plan?.features?.[feature] === true;
}
/**
 * Get plan limit value (-1 means unlimited)
 */
export function getPlanLimit(planId, limit) {
    return PLANS[planId]?.limits?.[limit] ?? 0;
}
/**
 * Check if usage is at warning threshold
 */
export function isUsageWarning(current, limit) {
    if (limit <= 0)
        return false; // unlimited
    return (current / limit) * 100 >= USAGE_THRESHOLDS.warning;
}
/**
 * Check if usage is at critical threshold
 */
export function isUsageCritical(current, limit) {
    if (limit <= 0)
        return false; // unlimited
    return (current / limit) * 100 >= USAGE_THRESHOLDS.critical;
}
/**
 * Calculate Web Vital rating from value (Phase 2)
 */
export function getVitalRating(metric, value) {
    const thresholds = VITAL_THRESHOLDS[metric];
    if (value <= thresholds.good)
        return "good";
    if (value <= thresholds.poor)
        return "needs-improvement";
    return "poor";
}
/**
 * Detect deployment context from environment variables (Phase 2)
 * Works in Node.js environments only - returns null in browser
 */
export function detectDeploymentContext() {
    // Safe access to process.env in any environment
    const env = getEnv();
    if (!env)
        return null;
    // Vercel
    if (env.VERCEL_DEPLOYMENT_ID) {
        return {
            deployId: env.VERCEL_DEPLOYMENT_ID,
            gitSha: env.VERCEL_GIT_COMMIT_SHA,
            gitBranch: env.VERCEL_GIT_COMMIT_REF,
            deployUrl: env.VERCEL_URL ? `https://${env.VERCEL_URL}` : undefined,
            source: "vercel",
        };
    }
    // Netlify
    if (env.DEPLOY_ID) {
        return {
            deployId: env.DEPLOY_ID,
            gitSha: env.COMMIT_REF,
            gitBranch: env.BRANCH,
            deployUrl: env.DEPLOY_URL,
            source: "netlify",
        };
    }
    // Cloudflare Pages
    if (env.CF_PAGES_COMMIT_SHA) {
        return {
            deployId: env.CF_PAGES_COMMIT_SHA,
            gitSha: env.CF_PAGES_COMMIT_SHA,
            gitBranch: env.CF_PAGES_BRANCH,
            deployUrl: env.CF_PAGES_URL,
            source: "cloudflare",
        };
    }
    return null;
}
/**
 * Safe environment variable access (works in browser and Node.js)
 */
function getEnv() {
    try {
        // Check if we're in a Node.js-like environment
        if (typeof globalThis !== "undefined" && "process" in globalThis) {
            const proc = globalThis
                .process;
            return proc?.env ?? null;
        }
        return null;
    }
    catch {
        return null;
    }
}
// Export analytics types
export * from "./analytics-types";
// Export event protocol types (canonical event structures)
export * from "./event-protocol";
//# sourceMappingURL=index.js.map
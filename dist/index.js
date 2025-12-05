// src/index.ts
var PLANS = {
  starter: {
    id: "starter",
    name: "Starter",
    price: 0,
    limits: {
      pageviewsPerMonth: 25e3,
      websites: 2,
      retentionDays: 30,
      seats: 1
    },
    features: {
      funnels: false,
      attribution: false,
      revenue: false,
      customDashboards: false,
      apiAccess: false,
      weeklyReports: true,
      support: "community"
    }
  },
  pro: {
    id: "pro",
    name: "Pro",
    price: 29,
    limits: {
      pageviewsPerMonth: 25e4,
      websites: 10,
      retentionDays: 365,
      seats: 5
    },
    features: {
      funnels: true,
      attribution: true,
      revenue: true,
      customDashboards: false,
      apiAccess: true,
      weeklyReports: true,
      support: "email"
    }
  },
  business: {
    id: "business",
    name: "Business",
    price: 99,
    limits: {
      pageviewsPerMonth: 1e6,
      websites: -1,
      // unlimited
      retentionDays: 730,
      // 2 years
      seats: -1
      // unlimited
    },
    features: {
      funnels: true,
      attribution: true,
      revenue: true,
      customDashboards: true,
      apiAccess: true,
      weeklyReports: true,
      support: "priority"
    }
  },
  enterprise: {
    id: "enterprise",
    name: "Enterprise",
    price: -1,
    // custom
    limits: {
      pageviewsPerMonth: -1,
      // custom
      websites: -1,
      retentionDays: -1,
      // custom
      seats: -1
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
      customRetention: true
    }
  }
};
var PLAN_FEATURES = {
  funnels: "Funnel Analytics",
  attribution: "Attribution Reports",
  revenue: "Revenue Tracking",
  customDashboards: "Custom Dashboards",
  apiAccess: "API Access",
  weeklyReports: "Weekly Email Reports",
  sso: "SSO/SAML",
  auditLogs: "Audit Logs",
  customRetention: "Custom Data Retention"
};
var USAGE_THRESHOLDS = {
  warning: 90,
  critical: 95
};
var BILLING_ERRORS = {
  quotaExceeded: "QUOTA_EXCEEDED",
  planRequired: "PLAN_REQUIRED",
  featureNotAvailable: "FEATURE_NOT_AVAILABLE",
  subscriptionInactive: "SUBSCRIPTION_INACTIVE",
  paymentFailed: "PAYMENT_FAILED"
};
var API_ENDPOINTS = {
  production: "https://ng.entrolytics.click",
  development: "http://localhost:3000"
};
var DEFAULT_API_HOST = process.env.NODE_ENV === "production" ? API_ENDPOINTS.production : API_ENDPOINTS.development;
var ENV_VAR_NAMES = {
  nextjs: {
    websiteId: "NEXT_PUBLIC_ENTROLYTICS_NG_WEBSITE_ID",
    host: "NEXT_PUBLIC_ENTROLYTICS_NG_HOST",
    envFile: ".env.local"
  },
  react: {
    websiteId: "VITE_ENTROLYTICS_NG_WEBSITE_ID",
    host: "VITE_ENTROLYTICS_NG_HOST",
    envFile: ".env",
    fallback: {
      // CRA fallback
      websiteId: "REACT_APP_ENTROLYTICS_NG_WEBSITE_ID",
      host: "REACT_APP_ENTROLYTICS_NG_HOST"
    }
  },
  vue: {
    websiteId: "VITE_ENTROLYTICS_NG_WEBSITE_ID",
    host: "VITE_ENTROLYTICS_NG_HOST",
    envFile: ".env"
  },
  svelte: {
    websiteId: "PUBLIC_ENTROLYTICS_NG_WEBSITE_ID",
    host: "PUBLIC_ENTROLYTICS_NG_HOST",
    envFile: ".env"
  },
  astro: {
    websiteId: "PUBLIC_ENTROLYTICS_NG_WEBSITE_ID",
    host: "PUBLIC_ENTROLYTICS_NG_HOST",
    envFile: ".env"
  },
  html: {
    websiteId: "ENTROLYTICS_NG_WEBSITE_ID",
    host: "ENTROLYTICS_NG_HOST",
    envFile: ".env"
  },
  node: {
    websiteId: "ENTROLYTICS_NG_WEBSITE_ID",
    host: "ENTROLYTICS_NG_HOST",
    envFile: ".env"
  },
  php: {
    websiteId: "ENTROLYTICS_NG_WEBSITE_ID",
    host: "ENTROLYTICS_NG_HOST",
    envFile: ".env"
  },
  python: {
    websiteId: "ENTROLYTICS_NG_WEBSITE_ID",
    host: "ENTROLYTICS_NG_HOST",
    envFile: ".env"
  },
  go: {
    websiteId: "ENTROLYTICS_NG_WEBSITE_ID",
    host: "ENTROLYTICS_NG_HOST",
    envFile: ".env"
  }
};
var CLI_CONFIG = {
  tokenExpiryMinutes: 15,
  maxTokensPerUser: 10,
  pollIntervalMs: 2e3,
  setupTimeoutMs: 3e5,
  // 5 minutes
  minCliVersion: "1.0.0"
};
var EVENT_TYPES = {
  pageView: "page_view",
  click: "click",
  formSubmit: "form_submit",
  custom: "custom",
  error: "error",
  performance: "performance"
};
var VITAL_TYPES = {
  LCP: "LCP",
  // Largest Contentful Paint
  INP: "INP",
  // Interaction to Next Paint (replaced FID)
  CLS: "CLS",
  // Cumulative Layout Shift
  TTFB: "TTFB",
  // Time to First Byte
  FCP: "FCP"
  // First Contentful Paint
};
var VITAL_RATINGS = {
  good: "good",
  needsImprovement: "needs-improvement",
  poor: "poor"
};
var VITAL_THRESHOLDS = {
  LCP: { good: 2500, poor: 4e3 },
  INP: { good: 200, poor: 500 },
  CLS: { good: 0.1, poor: 0.25 },
  TTFB: { good: 800, poor: 1800 },
  FCP: { good: 1800, poor: 3e3 }
};
var NAVIGATION_TYPES = {
  navigate: "navigate",
  reload: "reload",
  backForward: "back-forward",
  backForwardCache: "back-forward-cache",
  prerender: "prerender",
  restore: "restore"
};
var FORM_EVENT_TYPES = {
  start: "start",
  // Form interaction started
  fieldFocus: "field_focus",
  // Field received focus
  fieldBlur: "field_blur",
  // Field lost focus
  fieldError: "field_error",
  // Field validation error
  submit: "submit",
  // Form submitted
  abandon: "abandon"
  // Form abandoned (left page)
};
var FORM_FIELD_TYPES = {
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
  other: "other"
};
var DEPLOYMENT_SOURCES = {
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
  custom: "custom"
};
var DEPLOYMENT_ENV_VARS = {
  vercel: {
    deployId: "VERCEL_DEPLOYMENT_ID",
    gitSha: "VERCEL_GIT_COMMIT_SHA",
    gitBranch: "VERCEL_GIT_COMMIT_REF",
    url: "VERCEL_URL"
  },
  netlify: {
    deployId: "DEPLOY_ID",
    gitSha: "COMMIT_REF",
    gitBranch: "BRANCH",
    url: "DEPLOY_URL"
  },
  cloudflare: {
    deployId: "CF_PAGES_COMMIT_SHA",
    gitSha: "CF_PAGES_COMMIT_SHA",
    gitBranch: "CF_PAGES_BRANCH",
    url: "CF_PAGES_URL"
  }
};
var HTTP_STATUS = {
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
  serviceUnavailable: 503
};
var API_ROUTES = {
  // CLI Auth routes
  cliAuthToken: "/api/auth/cli/token",
  cliAuthTokens: "/api/auth/cli/tokens",
  cliToken: "/api/cli/token",
  // Legacy - deprecated
  cliValidate: "/api/cli/validate",
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
  // Event collection
  collect: "/api/collect",
  send: "/api/send",
  // Phase 2: Web Vitals, Forms, Deployments (NG only)
  collectVitals: "/api/collect/vitals",
  collectForms: "/api/collect/forms",
  websiteVitals: (id) => `/api/websites/${id}/vitals`,
  websiteForms: (id) => `/api/websites/${id}/forms`,
  websiteDeployments: (id) => `/api/websites/${id}/deployments`,
  // Health checks
  health: "/api/health",
  healthIntegrations: "/api/health/integrations"
};
var ONBOARDING_STEPS = {
  welcome: "welcome",
  createWebsite: "create-website",
  installTracking: "install-tracking",
  verify: "verify",
  complete: "complete",
  skipped: "skipped"
};
var CLI_TOKEN_STATUS = {
  pending: "pending",
  used: "used",
  expired: "expired",
  revoked: "revoked"
};
var USER_ROLES = {
  admin: "admin",
  user: "user",
  viewer: "viewer"
};
var FRAMEWORK_PACKAGES = {
  nextjs: "@entrolytics-ng/nextjs",
  react: "@entrolytics-ng/react",
  vue: "@entrolytics-ng/vue",
  svelte: "@entrolytics-ng/svelte",
  astro: "@entrolytics-ng/astro",
  node: "@entrolytics-ng/node"
};
var FRAMEWORK_PATTERNS = {
  nextjs: {
    files: ["next.config.js", "next.config.mjs", "next.config.ts"],
    dependencies: ["next"]
  },
  react: {
    files: ["vite.config.js", "vite.config.ts"],
    dependencies: ["react", "vite"]
  },
  vue: {
    files: ["vite.config.js", "vite.config.ts"],
    dependencies: ["vue", "vite"]
  },
  svelte: {
    files: ["svelte.config.js", "svelte.config.ts"],
    dependencies: ["svelte"]
  },
  astro: {
    files: ["astro.config.mjs", "astro.config.ts"],
    dependencies: ["astro"]
  }
};
var RATE_LIMITS = {
  cliTokenExchange: {
    windowSeconds: 60,
    // 1 minute
    maxRequests: 5
  },
  shareTokenGeneration: {
    windowSeconds: 60,
    // 1 minute
    maxRequests: 10
  },
  linkCreation: {
    windowSeconds: 60,
    // 1 minute
    maxRequests: 20
  },
  linkRedirect: {
    windowSeconds: 60,
    // 1 minute
    maxRequests: 100
  },
  apiGeneral: {
    windowSeconds: 60,
    // 1 minute
    maxRequests: 100
  },
  // Legacy (deprecated but kept for backwards compatibility)
  cliTokenGeneration: {
    windowMs: 36e5,
    // 1 hour
    maxRequests: 10
  },
  cliValidation: {
    windowMs: 36e5,
    // 1 hour
    maxRequests: 100
  },
  eventCollection: {
    windowMs: 6e4,
    // 1 minute
    maxRequests: 1e3
  }
};
var ERROR_MESSAGES = {
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
  serviceUnavailable: "Service temporarily unavailable"
};
var SUCCESS_MESSAGES = {
  tokenGenerated: "Setup token generated successfully",
  tokenValidated: "Token validated successfully",
  tokenRevoked: "Token revoked successfully",
  allTokensRevoked: "All tokens revoked successfully",
  websiteCreated: "Website created successfully",
  linkCreated: "Link created successfully",
  shareCreated: "Share created successfully",
  onboardingComplete: "Onboarding completed successfully",
  setupComplete: "Setup completed successfully"
};
function getEnvVarNames(framework) {
  return ENV_VAR_NAMES[framework];
}
function getFrameworkPackage(framework) {
  return FRAMEWORK_PACKAGES[framework] || null;
}
function isValidFramework(framework) {
  return framework in ENV_VAR_NAMES;
}
function getApiRoute(route, ...args) {
  const routeFn = API_ROUTES[route];
  if (typeof routeFn === "function") {
    return routeFn(...args);
  }
  return routeFn;
}
function getPlan(planId) {
  return PLANS[planId];
}
function isPlanFeatureEnabled(planId, feature) {
  const plan = PLANS[planId];
  return plan?.features?.[feature] === true;
}
function getPlanLimit(planId, limit) {
  return PLANS[planId]?.limits?.[limit] ?? 0;
}
function isUsageWarning(current, limit) {
  if (limit <= 0) return false;
  return current / limit * 100 >= USAGE_THRESHOLDS.warning;
}
function isUsageCritical(current, limit) {
  if (limit <= 0) return false;
  return current / limit * 100 >= USAGE_THRESHOLDS.critical;
}
function getVitalRating(metric, value) {
  const thresholds = VITAL_THRESHOLDS[metric];
  if (value <= thresholds.good) return "good";
  if (value <= thresholds.poor) return "needs-improvement";
  return "poor";
}
function detectDeploymentContext() {
  const env = getEnv();
  if (!env) return null;
  if (env.VERCEL_DEPLOYMENT_ID) {
    return {
      deployId: env.VERCEL_DEPLOYMENT_ID,
      gitSha: env.VERCEL_GIT_COMMIT_SHA,
      gitBranch: env.VERCEL_GIT_COMMIT_REF,
      deployUrl: env.VERCEL_URL ? `https://${env.VERCEL_URL}` : void 0,
      source: "vercel"
    };
  }
  if (env.DEPLOY_ID) {
    return {
      deployId: env.DEPLOY_ID,
      gitSha: env.COMMIT_REF,
      gitBranch: env.BRANCH,
      deployUrl: env.DEPLOY_URL,
      source: "netlify"
    };
  }
  if (env.CF_PAGES_COMMIT_SHA) {
    return {
      deployId: env.CF_PAGES_COMMIT_SHA,
      gitSha: env.CF_PAGES_COMMIT_SHA,
      gitBranch: env.CF_PAGES_BRANCH,
      deployUrl: env.CF_PAGES_URL,
      source: "cloudflare"
    };
  }
  return null;
}
function getEnv() {
  try {
    if (typeof globalThis !== "undefined" && "process" in globalThis) {
      const proc = globalThis.process;
      return proc?.env ?? null;
    }
    return null;
  } catch {
    return null;
  }
}

export { API_ENDPOINTS, API_ROUTES, BILLING_ERRORS, CLI_CONFIG, CLI_TOKEN_STATUS, DEFAULT_API_HOST, DEPLOYMENT_ENV_VARS, DEPLOYMENT_SOURCES, ENV_VAR_NAMES, ERROR_MESSAGES, EVENT_TYPES, FORM_EVENT_TYPES, FORM_FIELD_TYPES, FRAMEWORK_PACKAGES, FRAMEWORK_PATTERNS, HTTP_STATUS, NAVIGATION_TYPES, ONBOARDING_STEPS, PLANS, PLAN_FEATURES, RATE_LIMITS, SUCCESS_MESSAGES, USAGE_THRESHOLDS, USER_ROLES, VITAL_RATINGS, VITAL_THRESHOLDS, VITAL_TYPES, detectDeploymentContext, getApiRoute, getEnvVarNames, getFrameworkPackage, getPlan, getPlanLimit, getVitalRating, isPlanFeatureEnabled, isUsageCritical, isUsageWarning, isValidFramework };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
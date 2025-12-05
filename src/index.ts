/**
 * Shared constants across Entrolytics ecosystem
 * Used by: CLI, SDKs, Dashboard, Integrations
 */

/**
 * Plan definitions and limits
 */
export const PLANS = {
  starter: {
    id: 'starter',
    name: 'Starter',
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
      support: 'community',
    },
  },
  pro: {
    id: 'pro',
    name: 'Pro',
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
      support: 'email',
    },
  },
  business: {
    id: 'business',
    name: 'Business',
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
      support: 'priority',
    },
  },
  enterprise: {
    id: 'enterprise',
    name: 'Enterprise',
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
      support: 'dedicated',
      sso: true,
      auditLogs: true,
      customRetention: true,
    },
  },
} as const;

/**
 * Plan feature names for display
 */
export const PLAN_FEATURES = {
  funnels: 'Funnel Analytics',
  attribution: 'Attribution Reports',
  revenue: 'Revenue Tracking',
  customDashboards: 'Custom Dashboards',
  apiAccess: 'API Access',
  weeklyReports: 'Weekly Email Reports',
  sso: 'SSO/SAML',
  auditLogs: 'Audit Logs',
  customRetention: 'Custom Data Retention',
} as const;

/**
 * Usage warning thresholds (percentages)
 */
export const USAGE_THRESHOLDS = {
  warning: 90,
  critical: 95,
} as const;

/**
 * Billing-related error codes
 */
export const BILLING_ERRORS = {
  quotaExceeded: 'QUOTA_EXCEEDED',
  planRequired: 'PLAN_REQUIRED',
  featureNotAvailable: 'FEATURE_NOT_AVAILABLE',
  subscriptionInactive: 'SUBSCRIPTION_INACTIVE',
  paymentFailed: 'PAYMENT_FAILED',
} as const;

/**
 * API endpoint configuration
 */
export const API_ENDPOINTS = {
  production: 'https://ng.entrolytics.click',
  development: 'http://localhost:3000',
} as const;

/**
 * Default API host
 */
export const DEFAULT_API_HOST =
  process.env.NODE_ENV === 'production' ? API_ENDPOINTS.production : API_ENDPOINTS.development;

/**
 * Environment variable naming conventions by framework
 */
export const ENV_VAR_NAMES = {
  nextjs: {
    websiteId: 'NEXT_PUBLIC_ENTROLYTICS_NG_WEBSITE_ID',
    host: 'NEXT_PUBLIC_ENTROLYTICS_NG_HOST',
    envFile: '.env.local',
  },
  react: {
    websiteId: 'VITE_ENTROLYTICS_NG_WEBSITE_ID',
    host: 'VITE_ENTROLYTICS_NG_HOST',
    envFile: '.env',
    fallback: {
      // CRA fallback
      websiteId: 'REACT_APP_ENTROLYTICS_NG_WEBSITE_ID',
      host: 'REACT_APP_ENTROLYTICS_NG_HOST',
    },
  },
  vue: {
    websiteId: 'VITE_ENTROLYTICS_NG_WEBSITE_ID',
    host: 'VITE_ENTROLYTICS_NG_HOST',
    envFile: '.env',
  },
  svelte: {
    websiteId: 'PUBLIC_ENTROLYTICS_NG_WEBSITE_ID',
    host: 'PUBLIC_ENTROLYTICS_NG_HOST',
    envFile: '.env',
  },
  astro: {
    websiteId: 'PUBLIC_ENTROLYTICS_NG_WEBSITE_ID',
    host: 'PUBLIC_ENTROLYTICS_NG_HOST',
    envFile: '.env',
  },
  html: {
    websiteId: 'ENTROLYTICS_NG_WEBSITE_ID',
    host: 'ENTROLYTICS_NG_HOST',
    envFile: '.env',
  },
  node: {
    websiteId: 'ENTROLYTICS_NG_WEBSITE_ID',
    host: 'ENTROLYTICS_NG_HOST',
    envFile: '.env',
  },
  php: {
    websiteId: 'ENTROLYTICS_NG_WEBSITE_ID',
    host: 'ENTROLYTICS_NG_HOST',
    envFile: '.env',
  },
  python: {
    websiteId: 'ENTROLYTICS_NG_WEBSITE_ID',
    host: 'ENTROLYTICS_NG_HOST',
    envFile: '.env',
  },
  go: {
    websiteId: 'ENTROLYTICS_NG_WEBSITE_ID',
    host: 'ENTROLYTICS_NG_HOST',
    envFile: '.env',
  },
} as const;

/**
 * CLI configuration constants
 */
export const CLI_CONFIG = {
  tokenExpiryMinutes: 15,
  maxTokensPerUser: 10,
  pollIntervalMs: 2000,
  setupTimeoutMs: 300000, // 5 minutes
  minCliVersion: '1.0.0',
} as const;

/**
 * Standard event types
 */
export const EVENT_TYPES = {
  pageView: 'page_view',
  click: 'click',
  formSubmit: 'form_submit',
  custom: 'custom',
  error: 'error',
  performance: 'performance',
} as const;

/**
 * Web Vitals metric types (Phase 2)
 * Core Web Vitals: LCP, INP, CLS
 * Additional: TTFB, FCP
 */
export const VITAL_TYPES = {
  LCP: 'LCP', // Largest Contentful Paint
  INP: 'INP', // Interaction to Next Paint (replaced FID)
  CLS: 'CLS', // Cumulative Layout Shift
  TTFB: 'TTFB', // Time to First Byte
  FCP: 'FCP', // First Contentful Paint
} as const;

/**
 * Web Vitals rating thresholds
 */
export const VITAL_RATINGS = {
  good: 'good',
  needsImprovement: 'needs-improvement',
  poor: 'poor',
} as const;

/**
 * Web Vitals thresholds by metric (in milliseconds, except CLS which is unitless)
 */
export const VITAL_THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  INP: { good: 200, poor: 500 },
  CLS: { good: 0.1, poor: 0.25 },
  TTFB: { good: 800, poor: 1800 },
  FCP: { good: 1800, poor: 3000 },
} as const;

/**
 * Navigation types for Web Vitals context
 */
export const NAVIGATION_TYPES = {
  navigate: 'navigate',
  reload: 'reload',
  backForward: 'back-forward',
  backForwardCache: 'back-forward-cache',
  prerender: 'prerender',
  restore: 'restore',
} as const;

/**
 * Form event types (Phase 2)
 */
export const FORM_EVENT_TYPES = {
  start: 'start', // Form interaction started
  fieldFocus: 'field_focus', // Field received focus
  fieldBlur: 'field_blur', // Field lost focus
  fieldError: 'field_error', // Field validation error
  submit: 'submit', // Form submitted
  abandon: 'abandon', // Form abandoned (left page)
} as const;

/**
 * Form field types
 */
export const FORM_FIELD_TYPES = {
  text: 'text',
  email: 'email',
  password: 'password',
  tel: 'tel',
  number: 'number',
  url: 'url',
  textarea: 'textarea',
  select: 'select',
  checkbox: 'checkbox',
  radio: 'radio',
  date: 'date',
  file: 'file',
  hidden: 'hidden',
  submit: 'submit',
  other: 'other',
} as const;

/**
 * Deployment platform sources (Phase 2)
 */
export const DEPLOYMENT_SOURCES = {
  vercel: 'vercel',
  netlify: 'netlify',
  cloudflare: 'cloudflare',
  railway: 'railway',
  render: 'render',
  fly: 'fly',
  heroku: 'heroku',
  aws: 'aws',
  gcp: 'gcp',
  azure: 'azure',
  custom: 'custom',
} as const;

/**
 * Deployment environment variables by platform
 */
export const DEPLOYMENT_ENV_VARS = {
  vercel: {
    deployId: 'VERCEL_DEPLOYMENT_ID',
    gitSha: 'VERCEL_GIT_COMMIT_SHA',
    gitBranch: 'VERCEL_GIT_COMMIT_REF',
    url: 'VERCEL_URL',
  },
  netlify: {
    deployId: 'DEPLOY_ID',
    gitSha: 'COMMIT_REF',
    gitBranch: 'BRANCH',
    url: 'DEPLOY_URL',
  },
  cloudflare: {
    deployId: 'CF_PAGES_COMMIT_SHA',
    gitSha: 'CF_PAGES_COMMIT_SHA',
    gitBranch: 'CF_PAGES_BRANCH',
    url: 'CF_PAGES_URL',
  },
} as const;

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
} as const;

/**
 * API route paths
 */
export const API_ROUTES = {
  // CLI Auth routes
  cliAuthToken: '/api/auth/cli/token',
  cliAuthTokens: '/api/auth/cli/tokens',
  cliToken: '/api/cli/token', // Legacy - deprecated
  cliValidate: '/api/cli/validate',

  // Share routes
  shareToken: (shareId: string) => `/api/share/${shareId}`,

  // Links routes
  links: '/api/links',
  linkRedirect: (slug: string) => `/q/${slug}`,

  // Website routes
  websites: '/api/websites',
  websiteById: (id: string) => `/api/websites/${id}`,
  websiteEvents: (id: string) => `/api/websites/${id}/events`,
  websiteRecentEvents: (id: string) => `/api/websites/${id}/recent-events`,

  // User routes
  userOnboarding: '/api/user/onboarding',
  userProfile: '/api/user/profile',
  userEmailPreferences: '/api/me/email-preferences',

  // Billing routes
  billingUsage: '/api/billing/usage',
  billingCheckout: '/api/billing/checkout',
  billingPortal: '/api/billing/portal',
  billingWebhook: '/api/billing/webhook',

  // Event collection
  collect: '/api/collect',
  send: '/api/send',

  // Phase 2: Web Vitals, Forms, Deployments (NG only)
  collectVitals: '/api/collect/vitals',
  collectForms: '/api/collect/forms',
  websiteVitals: (id: string) => `/api/websites/${id}/vitals`,
  websiteForms: (id: string) => `/api/websites/${id}/forms`,
  websiteDeployments: (id: string) => `/api/websites/${id}/deployments`,

  // Health checks
  health: '/api/health',
  healthIntegrations: '/api/health/integrations',
} as const;

/**
 * Onboarding step identifiers
 */
export const ONBOARDING_STEPS = {
  welcome: 'welcome',
  createWebsite: 'create-website',
  installTracking: 'install-tracking',
  verify: 'verify',
  complete: 'complete',
  skipped: 'skipped',
} as const;

/**
 * CLI token statuses
 */
export const CLI_TOKEN_STATUS = {
  pending: 'pending',
  used: 'used',
  expired: 'expired',
  revoked: 'revoked',
} as const;

/**
 * User roles
 */
export const USER_ROLES = {
  admin: 'admin',
  user: 'user',
  viewer: 'viewer',
} as const;

/**
 * Framework package names
 */
export const FRAMEWORK_PACKAGES = {
  nextjs: '@entrolytics/nextjs',
  react: '@entrolytics/react',
  vue: '@entrolytics/vue',
  svelte: '@entrolytics/svelte',
  astro: '@entrolytics/astro',
  node: '@entrolytics/node',
} as const;

/**
 * Framework detection patterns
 */
export const FRAMEWORK_PATTERNS = {
  nextjs: {
    files: ['next.config.js', 'next.config.mjs', 'next.config.ts'],
    dependencies: ['next'],
  },
  react: {
    files: ['vite.config.js', 'vite.config.ts'],
    dependencies: ['react', 'vite'],
  },
  vue: {
    files: ['vite.config.js', 'vite.config.ts'],
    dependencies: ['vue', 'vite'],
  },
  svelte: {
    files: ['svelte.config.js', 'svelte.config.ts'],
    dependencies: ['svelte'],
  },
  astro: {
    files: ['astro.config.mjs', 'astro.config.ts'],
    dependencies: ['astro'],
  },
} as const;

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
} as const;

/**
 * Error messages
 */
export const ERROR_MESSAGES = {
  // Authentication
  unauthorized: 'Unauthorized access',
  forbidden: 'Access forbidden',
  tokenExpired: 'Token has expired',
  tokenInvalid: 'Invalid token',
  tokenNotFound: 'Token not found',
  tokenAlreadyUsed: 'Token has already been used',
  tokenRevoked: 'Token has been revoked',
  tokenMissingJti: 'Token missing JTI - please re-authenticate',
  userBanned: 'User account has been banned',
  userDeleted: 'User account has been deleted',

  // Share tokens
  shareTokenExpired: 'Share token has expired',
  shareTokenRevoked: 'Share has been revoked',
  shareTokenInvalid: 'Invalid share token',

  // URL Validation
  invalidUrl: 'Invalid URL provided',
  invalidUrlProtocol: 'URL must use http or https protocol',
  openRedirectBlocked: 'Open redirect attempt blocked',

  // Validation
  invalidInput: 'Invalid input provided',
  missingRequired: 'Missing required fields',
  invalidFormat: 'Invalid format',

  // Resources
  notFound: 'Resource not found',
  websiteNotFound: 'Website not found',
  userNotFound: 'User not found',
  linkNotFound: 'Link not found',

  // Rate limiting
  tooManyRequests: 'Too many requests. Please try again later.',
  rateLimitExceeded: 'Rate limit exceeded',

  // Server
  internalError: 'Internal server error',
  serviceUnavailable: 'Service temporarily unavailable',
} as const;

/**
 * Success messages
 */
export const SUCCESS_MESSAGES = {
  tokenGenerated: 'Setup token generated successfully',
  tokenValidated: 'Token validated successfully',
  tokenRevoked: 'Token revoked successfully',
  allTokensRevoked: 'All tokens revoked successfully',
  websiteCreated: 'Website created successfully',
  linkCreated: 'Link created successfully',
  shareCreated: 'Share created successfully',
  onboardingComplete: 'Onboarding completed successfully',
  setupComplete: 'Setup completed successfully',
} as const;

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

// Type exports
export type Framework = keyof typeof ENV_VAR_NAMES;
export type EventType = (typeof EVENT_TYPES)[keyof typeof EVENT_TYPES];
export type OnboardingStep = (typeof ONBOARDING_STEPS)[keyof typeof ONBOARDING_STEPS];
export type CliTokenStatus = (typeof CLI_TOKEN_STATUS)[keyof typeof CLI_TOKEN_STATUS];
export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];
export type PlanId = keyof typeof PLANS;
export type Plan = (typeof PLANS)[PlanId];
export type PlanFeature = keyof typeof PLAN_FEATURES;
export type BillingError = (typeof BILLING_ERRORS)[keyof typeof BILLING_ERRORS];

// Phase 2 type exports
export type VitalType = (typeof VITAL_TYPES)[keyof typeof VITAL_TYPES];
export type VitalRating = (typeof VITAL_RATINGS)[keyof typeof VITAL_RATINGS];
export type NavigationType = (typeof NAVIGATION_TYPES)[keyof typeof NAVIGATION_TYPES];
export type FormEventType = (typeof FORM_EVENT_TYPES)[keyof typeof FORM_EVENT_TYPES];
export type FormFieldType = (typeof FORM_FIELD_TYPES)[keyof typeof FORM_FIELD_TYPES];
export type DeploymentSource = (typeof DEPLOYMENT_SOURCES)[keyof typeof DEPLOYMENT_SOURCES];

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
export function getEnvVarNames(framework: Framework) {
  return ENV_VAR_NAMES[framework];
}

export function getFrameworkPackage(framework: Framework) {
  return FRAMEWORK_PACKAGES[framework as keyof typeof FRAMEWORK_PACKAGES] || null;
}

export function isValidFramework(framework: string): framework is Framework {
  return framework in ENV_VAR_NAMES;
}

export function getApiRoute(route: keyof typeof API_ROUTES, ...args: string[]) {
  const routeFn = API_ROUTES[route];
  if (typeof routeFn === 'function') {
    return (routeFn as (...args: string[]) => string)(...args);
  }
  return routeFn;
}

/**
 * Get plan by ID
 */
export function getPlan(planId: PlanId): Plan {
  return PLANS[planId];
}

/**
 * Check if a feature is available for a plan
 */
export function isPlanFeatureEnabled(planId: PlanId, feature: PlanFeature): boolean {
  const plan = PLANS[planId];
  return plan?.features?.[feature as keyof typeof plan.features] === true;
}

/**
 * Get plan limit value (-1 means unlimited)
 */
export function getPlanLimit(planId: PlanId, limit: keyof Plan['limits']): number {
  return PLANS[planId]?.limits?.[limit] ?? 0;
}

/**
 * Check if usage is at warning threshold
 */
export function isUsageWarning(current: number, limit: number): boolean {
  if (limit <= 0) return false; // unlimited
  return (current / limit) * 100 >= USAGE_THRESHOLDS.warning;
}

/**
 * Check if usage is at critical threshold
 */
export function isUsageCritical(current: number, limit: number): boolean {
  if (limit <= 0) return false; // unlimited
  return (current / limit) * 100 >= USAGE_THRESHOLDS.critical;
}

/**
 * Calculate Web Vital rating from value (Phase 2)
 */
export function getVitalRating(metric: VitalType, value: number): VitalRating {
  const thresholds = VITAL_THRESHOLDS[metric];
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.poor) return 'needs-improvement';
  return 'poor';
}

/**
 * Detect deployment context from environment variables (Phase 2)
 * Works in Node.js environments only - returns null in browser
 */
export function detectDeploymentContext(): DeploymentContext | null {
  // Safe access to process.env in any environment
  const env = getEnv();
  if (!env) return null;

  // Vercel
  if (env.VERCEL_DEPLOYMENT_ID) {
    return {
      deployId: env.VERCEL_DEPLOYMENT_ID,
      gitSha: env.VERCEL_GIT_COMMIT_SHA,
      gitBranch: env.VERCEL_GIT_COMMIT_REF,
      deployUrl: env.VERCEL_URL ? `https://${env.VERCEL_URL}` : undefined,
      source: 'vercel',
    };
  }

  // Netlify
  if (env.DEPLOY_ID) {
    return {
      deployId: env.DEPLOY_ID,
      gitSha: env.COMMIT_REF,
      gitBranch: env.BRANCH,
      deployUrl: env.DEPLOY_URL,
      source: 'netlify',
    };
  }

  // Cloudflare Pages
  if (env.CF_PAGES_COMMIT_SHA) {
    return {
      deployId: env.CF_PAGES_COMMIT_SHA,
      gitSha: env.CF_PAGES_COMMIT_SHA,
      gitBranch: env.CF_PAGES_BRANCH,
      deployUrl: env.CF_PAGES_URL,
      source: 'cloudflare',
    };
  }

  return null;
}

/**
 * Safe environment variable access (works in browser and Node.js)
 */
function getEnv(): Record<string, string | undefined> | null {
  try {
    // Check if we're in a Node.js-like environment
    if (typeof globalThis !== 'undefined' && 'process' in globalThis) {
      const proc = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process;
      return proc?.env ?? null;
    }
    return null;
  } catch {
    return null;
  }
}

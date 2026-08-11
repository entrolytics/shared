/**
 * Event Protocol Types
 *
 * These types define the canonical event structures used across the Entrolytics ecosystem.
 * Used by: API Server, SDKs, CLI, worker processes.
 *
 * This file was extracted from the internal @entrolytics/protocol package to enable
 * sharing with external packages.
 */
/**
 * Core event types supported by the analytics platform
 */
export declare const EventType: {
  readonly PageView: "pageview";
  readonly Custom: "custom_event";
  readonly Click: "click";
};
export type EventType = (typeof EventType)[keyof typeof EventType];
/**
 * Event payload as sent from client SDKs
 */
export interface EventPayload {
  websiteId: string;
  eventId: string;
  timestamp: string;
  sessionId: string;
  visitorId: string;
  url: string;
  referrer?: string;
  eventType: EventType;
  eventName?: string;
  consent?: boolean;
  properties?: Record<string, unknown>;
  screenWidth?: number;
  screenHeight?: number;
  loadTime?: number;
  domInteractive?: number;
  domComplete?: number;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
}
/**
 * Event DB row structure as stored in ClickHouse
 * Uses snake_case to match database column naming convention
 */
export interface EventDBRow {
  id: string;
  website_id: string;
  session_id: string;
  visitor_id: string;
  timestamp: string;
  event_type: EventType;
  event_name: string | null;
  url: string;
  path: string;
  referrer: string | null;
  referrer_domain: string | null;
  browser: string;
  browser_version: string | null;
  os: string;
  os_version: string | null;
  device_type: "desktop" | "mobile" | "tablet" | "server" | "unknown";
  screen_width: number | null;
  screen_height: number | null;
  country: string | null;
  city: string | null;
  region: string | null;
  load_time: number | null;
  dom_interactive: number | null;
  dom_complete: number | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
  properties: string;
}
/**
 * Device types for analytics segmentation
 */
export type DeviceType = "desktop" | "mobile" | "tablet" | "server" | "unknown";
//# sourceMappingURL=event-protocol.d.ts.map

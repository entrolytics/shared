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
export const EventType = {
  PageView: 'pageview',
  Custom: 'custom_event',
  Click: 'click',
} as const;

export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * Event payload as sent from client SDKs
 */
export interface EventPayload {
  websiteId: string;
  sessionId: string;
  visitorId: string;
  url: string;
  referrer?: string;
  eventType: EventType;
  eventName?: string;
  properties?: Record<string, unknown>;

  // Device info
  screenWidth?: number;
  screenHeight?: number;

  // Performance metrics
  loadTime?: number;
  domInteractive?: number;
  domComplete?: number;

  // UTM parameters
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
  id: string; // UUID - Maps to 'id' in ClickHouse
  website_id: string; // UUID
  session_id: string; // UUID
  visitor_id: string; // UUID
  timestamp: string; // ISO String
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
  device_type: 'desktop' | 'mobile' | 'tablet';
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
  properties: string; // JSON string in database
}

/**
 * Device types for analytics segmentation
 */
export type DeviceType = 'desktop' | 'mobile' | 'tablet';

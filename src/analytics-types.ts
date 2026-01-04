
// Moved from @entrolytics/types

// Analytics query types
export interface DateRangeFilter {
    websiteId: string;
    startDate: Date;
    endDate: Date;
    filters?: {
        country?: string;
        device?: 'desktop' | 'mobile' | 'tablet';
        browser?: string;
        path?: string;
    };
}

export interface OverviewStats {
    pageviews: number;
    visitors: number;
    sessions: number;
    pagesPerVisitor: number;
    avgLoadTime: number;
}

export interface TimeseriesData {
    date: Date;
    pageviews: number;
    visitors: number;
    sessions: number;
}

export interface TopPage {
    path: string;
    views: number;
    uniqueVisitors: number;
    avgLoadTime: number;
    p95LoadTime: number;
}

export interface Referrer {
    referrerDomain: string;
    visits: number;
    uniqueVisitors: number;
}

export interface DeviceStats {
    deviceType: string;
    browser: string;
    os: string;
    pageviews: number;
    uniqueVisitors: number;
}

export interface GeoStats {
    country: string;
    city: string;
    pageviews: number;
    uniqueVisitors: number;
}

// Real-time types
export interface RealtimeStats {
    visitors: number;
    sessions: number;
    pageviews: number;
}

export interface RealtimeEvent {
    timestamp: Date;
    eventType: string; // broadened from specific EventType to string to match usage flexibility
    eventName?: string;
    path: string;
    visitorId: string;
    country?: string;
    deviceType: string;
    browser: string;
}

export interface ActivePage {
    path: string;
    viewers: number;
}

/**
 * Core event interface
 */
export interface EntrolyticsEvent {
    id: string;
    websiteId: string;
    sessionId: string;
    visitorId: string;
    timestamp: Date;
    eventType: string;
    eventName?: string;
    url: string;
    path: string;
    referrer?: string;
    referrerDomain?: string;
    browser: string;
    browserVersion?: string;
    os: string;
    osVersion?: string;
    deviceType: 'desktop' | 'mobile' | 'tablet';
    screenWidth?: number;
    screenHeight?: number;
    country?: string;
    city?: string;
    region?: string;
    loadTime?: number;
    domInteractive?: number;
    domComplete?: number;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmTerm?: string;
    utmContent?: string;
    properties?: Record<string, unknown>;
}

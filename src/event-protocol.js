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
    PageView: "pageview",
    Custom: "custom_event",
    Click: "click",
};
//# sourceMappingURL=event-protocol.js.map
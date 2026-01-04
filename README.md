# @entrolytics/shared

Shared utilities and constants for Entrolytics packages.

## Installation

```bash
npm install @entrolytics/shared
# or
pnpm add @entrolytics/shared
# or
yarn add @entrolytics/shared
```

## Usage

```typescript
import {
  EVENT_TYPES,
  DEFAULT_CONFIG,
  validateWebsiteId,
  formatAnalyticsQuery
} from '@entrolytics/shared';

// Use constants
console.log(EVENT_TYPES.PAGEVIEW); // 'pageview'

// Validate data
const isValid = validateWebsiteId('abc123'); // true

// Format queries
const query = formatAnalyticsQuery({
  websiteId: 'abc123',
  startDate: '2025-01-01',
  endDate: '2025-01-31',
});
```

## Features

- 🔧 Shared constants and types
- ✅ Validation utilities
- 📊 Query formatting helpers
- 🎯 Type definitions for all Entrolytics packages
- 🚀 Zero dependencies
- 📦 Tree-shakeable exports

## Exports

### Constants

- `EVENT_TYPES` - Standard event type constants
- `DEFAULT_CONFIG` - Default configuration values
- `HTTP_STATUS` - HTTP status code constants
- `ERROR_CODES` - Entrolytics error codes

### Validators

- `validateWebsiteId(id: string): boolean`
- `validateApiKey(key: string): boolean`
- `validateEventType(type: string): boolean`
- `validateDateRange(start: string, end: string): boolean`

### Formatters

- `formatAnalyticsQuery(params): FormattedQuery`
- `formatEventPayload(event): FormattedEvent`
- `formatDateForAPI(date): string`

### Types

All TypeScript types used across Entrolytics packages are exported from this package.

## License

MIT © Entrolytics

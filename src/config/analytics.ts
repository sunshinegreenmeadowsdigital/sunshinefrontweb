/**
 * Analytics Configuration & Tracking Identity Preservation
 *
 * Identified Tracking Credentials from live audit:
 * - Google Tag Manager: GTM-N9GFV22K
 * - Google Analytics 4: G-EEDQJJHKV9
 * - Meta Pixel: 696710413232998
 * - Google Site Verification: 0uiE8pFcVbql918cH34s-WRejjUWIbnD1-QzssrB714
 *
 * Rules:
 * 1. Tracking scripts must not be loaded repeatedly on client-side route changes.
 * 2. Event dispatchers must verify the presence of `dataLayer` / `gtag` / `fbq` before firing.
 * 3. Page views must be debounced across SPA navigation to avoid duplicate hits.
 */

export const analyticsConfig = {
  enabled: import.meta.env.PROD, // Default to production only
  gtmId: 'GTM-N9GFV22K',
  ga4Id: 'G-EEDQJJHKV9',
  metaPixelId: '696710413232998',
  events: {
    PAGE_VIEW: 'page_view',
    LEAD_SUBMISSION: 'generate_lead',
    BROCHURE_DOWNLOAD: 'download_brochure',
    SITE_VISIT_BOOK: 'book_site_visit',
    PHONE_CLICK: 'click_phone_call',
    WHATSAPP_CLICK: 'click_whatsapp',
  },
} as const

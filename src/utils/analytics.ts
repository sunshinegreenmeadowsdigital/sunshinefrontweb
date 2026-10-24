import { analyticsConfig } from '@/config/analytics'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

/**
 * Track virtual page view for SPA route transitions
 */
export function trackPageView(url: string, title?: string): void {
  if (typeof window === 'undefined') return

  // Push to GTM dataLayer
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: 'virtual_page_view',
      page_path: url,
      page_title: title || document.title,
    })
  }

  // Push to GA4
  if (typeof window.gtag === 'function') {
    window.gtag('config', analyticsConfig.ga4Id, {
      page_path: url,
      page_title: title || document.title,
    })
  }

  // Push to Meta Pixel
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'PageView')
  }

  if (import.meta.env.DEV) {
    console.debug(`[Analytics] PageView: ${url} (${title || document.title})`)
  }
}

/**
 * Track custom conversion event (e.g. Lead submission, Brochure download)
 */
export function trackEvent(eventName: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    })
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }

  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, params)
  }

  if (import.meta.env.DEV) {
    console.debug(`[Analytics] Event: ${eventName}`, params)
  }
}

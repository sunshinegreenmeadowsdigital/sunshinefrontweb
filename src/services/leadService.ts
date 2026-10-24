import {
  type LeadPayload,
  type SubmissionResult,
  generalEnquirySchema,
  brochureRequestSchema,
  siteVisitSchema,
} from '@/types/lead'
import { trackEvent } from '@/utils/analytics'
import { analyticsConfig } from '@/config/analytics'

/**
 * Lead Capture Submission Pipeline
 *
 * Provides:
 * 1. Zod schema validation
 * 2. Honeypot spam filtering & human interaction timing checks (< 1.5s detection)
 * 3. Verified endpoint dispatch if VITE_LEAD_SUBMISSION_ENDPOINT is configured
 * 4. Honest staging feedback and local queue persistence if endpoint is not yet configured
 * 5. Conversion analytics tracking
 */
export async function submitLead(payload: LeadPayload): Promise<SubmissionResult> {
  // 1. Client-side schema validation
  if (payload.leadType === 'general_enquiry') {
    generalEnquirySchema.parse(payload)
  } else if (payload.leadType === 'brochure_request') {
    brochureRequestSchema.parse(payload)
  } else if (payload.leadType === 'site_visit') {
    siteVisitSchema.parse(payload)
  }

  // 2. Honeypot anti-spam check
  if (payload.honeypot && payload.honeypot.trim().length > 0) {
    console.warn('[Security] Honeypot triggered. Aborting submission.')
    return {
      success: false,
      message: 'Submission rejected by security filter.',
      timestamp: new Date().toISOString(),
    }
  }

  // 3. Fast-submission timing check (bot mitigation)
  if (payload.submissionTimestamp) {
    const elapsedMs = Date.now() - payload.submissionTimestamp
    if (elapsedMs < 1500) {
      console.warn('[Security] Submission occurred unrealistically fast. Flagging bot.')
      return {
        success: false,
        message: 'Submission completed too quickly. Please try again.',
        timestamp: new Date().toISOString(),
      }
    }
  }

  // 4. Analytics dispatch
  trackEvent(analyticsConfig.events.LEAD_SUBMISSION, {
    lead_type: payload.leadType,
    project: payload.projectInterest,
  })

  // 5. Remote Endpoint or Honest Local Staging
  const endpoint = import.meta.env.VITE_LEAD_SUBMISSION_ENDPOINT

  // Prepare standardized Google Sheets row payload
  const formattedTimestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  })

  const homeType =
    (payload as any).preferredConfiguration || (payload as any).homeType || ''
  const timeline =
    (payload as any).purchaseTimeline || (payload as any).timeline || ''
  const budget = (payload as any).budgetRange || (payload as any).budget || ''
  const pageUrl =
    typeof window !== 'undefined' ? window.location.href : (payload.pageUrl || '')
  const source = payload.source || 'Website Lead'

  const sheetPayload = {
    timestamp: formattedTimestamp,
    name: payload.fullName,
    phone: payload.phone,
    homeType: homeType,
    timeline: timeline,
    budget: budget,
    source: source,
    pageUrl: pageUrl,
    projectInterest: payload.projectInterest || 'Sunshine Green Meadows',
    requirement: `${source} (Type: ${homeType || 'N/A'} | Timeline: ${timeline || 'N/A'} | Budget: ${budget || 'N/A'})`,
    submittedAt: new Date().toISOString(),
  }

  if (endpoint && typeof endpoint === 'string' && endpoint.trim().length > 0) {
    try {
      // POST to Google Apps Script Web App
      // text/plain;charset=utf-8 + no-cors avoids CORS preflight failures across browsers
      await fetch(endpoint.trim(), {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(sheetPayload),
        mode: 'no-cors',
      })

      // Also persist to local backup ledger
      try {
        const queue = JSON.parse(localStorage.getItem('sunshine_leads_submitted') || '[]')
        queue.unshift({
          ...payload,
          leadId: `lead_${Date.now()}`,
          submittedAt: new Date().toISOString(),
          syncedToRemote: true,
        })
        localStorage.setItem('sunshine_leads_submitted', JSON.stringify(queue.slice(0, 100)))
      } catch {
        // Non-blocking local storage backup
      }

      return {
        success: true,
        message:
          'Thank you! Your enquiry has been received and routed to our sales team. An advisor will contact you shortly.',
        leadId: `lead_${Date.now()}`,
        timestamp: new Date().toISOString(),
      }
    } catch (networkError) {
      console.error('[Lead Service] Remote webhook transmission failed:', networkError)
      return {
        success: false,
        message:
          'Unable to transmit your request due to a network error. Please contact our sales desk directly at +91 7997482222.',
        timestamp: new Date().toISOString(),
      }
    }
  }

  // Fallback when endpoint is not configured in environment
  // Save to staging queue so user data is never lost during testing/development
  try {
    const existingQueue = JSON.parse(localStorage.getItem('sunshine_leads_queue') || '[]')
    existingQueue.push({
      ...payload,
      capturedAt: new Date().toISOString(),
    })
    localStorage.setItem('sunshine_leads_queue', JSON.stringify(existingQueue))
  } catch (err) {
    console.debug('[Lead Service] LocalStorage staging save error:', err)
  }

  if (import.meta.env.DEV) {
    console.info(
      '[Lead Service] Submission logged to local staging queue. VITE_LEAD_SUBMISSION_ENDPOINT is currently unconfigured.',
      payload
    )
  }

  return {
    success: true,
    isStagingOnly: true,
    message:
      'Thank you! Your information has been validated and recorded. (Note: Google Sheets webhook is awaiting endpoint configuration — for immediate assistance, please call +91 7997482222).',
    leadId: `staging_${Date.now()}`,
    timestamp: new Date().toISOString(),
  }
}

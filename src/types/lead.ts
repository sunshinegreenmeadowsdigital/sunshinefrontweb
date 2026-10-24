import { z } from 'zod'

/**
 * Lead Intent Types
 */
export type LeadType = 'general_enquiry' | 'brochure_request' | 'site_visit'

/**
 * Zod Validation Schemas for Lead Capture
 */
export const phoneRegex = /^[6-9]\d{9}$/

export const baseLeadSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(80, { message: 'Name exceeds maximum length' })
    .regex(/^[a-zA-Z\s.'-]+$/, { message: 'Name contains invalid characters' }),
  phone: z
    .string()
    .regex(phoneRegex, { message: 'Enter a valid 10-digit Indian mobile number' }),
  email: z.string().optional(),
  projectInterest: z.string(),
  source: z.string().optional(),
  pageUrl: z.string().optional(),
  honeypot: z.string().optional(),
  submissionTimestamp: z.number().optional(),
})

export const generalEnquirySchema = baseLeadSchema.extend({
  leadType: z.literal('general_enquiry'),
  message: z.string().optional(),
  preferredConfiguration: z.string().optional(),
  purchaseTimeline: z.string().optional(),
  budgetRange: z.string().optional(),
})

export const brochureRequestSchema = baseLeadSchema.extend({
  leadType: z.literal('brochure_request'),
  preferredChannel: z.enum(['download', 'whatsapp', 'email']),
})

export const siteVisitSchema = baseLeadSchema.extend({
  leadType: z.literal('site_visit'),
  preferredDate: z.string().min(1, { message: 'Please select a preferred date' }),
  preferredTimeSlot: z.enum(['morning', 'afternoon', 'evening'], {
    message: 'Please select a time slot',
  }),
  visitorCount: z.number().int().min(1).max(10),
})

export type BaseLeadData = z.infer<typeof baseLeadSchema>
export type GeneralEnquiryData = z.infer<typeof generalEnquirySchema>
export type BrochureRequestData = z.infer<typeof brochureRequestSchema>
export type SiteVisitData = z.infer<typeof siteVisitSchema>

export type LeadPayload = GeneralEnquiryData | BrochureRequestData | SiteVisitData

/**
 * Submission State Types
 */
export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error'

export interface SubmissionResult {
  success: boolean
  message: string
  leadId?: string
  timestamp: string
  isStagingOnly?: boolean
}

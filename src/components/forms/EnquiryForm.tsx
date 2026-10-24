import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { submitLead } from '@/services/leadService'
import { CheckCircle2, AlertCircle, Send } from 'lucide-react'
import { cn } from '@/utils/cn'

const enquirySchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Please enter your full name (at least 2 characters)' })
    .max(80, { message: 'Name exceeds maximum length' })
    .regex(/^[a-zA-Z\s.'-]+$/, { message: 'Please enter a valid name' }),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, { message: 'Enter a valid 10-digit Indian mobile number' }),
  honeypot: z.string().optional(),
})

type EnquiryFormData = z.infer<typeof enquirySchema>

export interface EnquiryFormProps {
  onSuccess?: () => void
  className?: string
  projectInterest?: string
  showHeader?: boolean
  source?: string
}

const HOME_TYPE_OPTIONS = ['2 BHK', '3 BHK', 'Not sure yet']
const TIMELINE_OPTIONS = ['Immediately', '1–3 months', '3–6 months', 'Just exploring']
const BUDGET_OPTIONS = ['₹60–75 Lakhs', '₹75–90 Lakhs', '₹90 Lakhs – ₹1 Cr+']

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  onSuccess,
  className,
  projectInterest = 'Sunshine Green Meadows',
  showHeader = true,
  source,
}) => {
  const [homeType, setHomeType] = useState<string>('2 BHK')
  const [timeline, setTimeline] = useState<string>('1–3 months')
  const [budget, setBudget] = useState<string>('₹60–75 Lakhs')

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState<string>('')
  const [mountTimestamp] = useState<number>(() => Date.now())

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: '',
      phone: '',
      honeypot: '',
    },
  })

  const onSubmit = async (data: EnquiryFormData) => {
    setStatus('submitting')
    setStatusMessage('')

    try {
      const result = await submitLead({
        leadType: 'general_enquiry',
        fullName: data.fullName.trim(),
        phone: data.phone.trim(),
        preferredConfiguration: homeType,
        purchaseTimeline: timeline,
        budgetRange: budget,
        projectInterest: projectInterest,
        source: source || `${projectInterest} - Page Bottom Contact Form`,
        message: `End-Page Enquiry: Interested in ${homeType}, Planning in ${timeline}, Budget ${budget}`,
        honeypot: data.honeypot,
        submissionTimestamp: mountTimestamp,
      })

      if (result.success) {
        setStatus('success')
        setStatusMessage(
          'Thank you! Your preferences and details have been received. Our sales team will share the brochure & pricing directly via WhatsApp / Call.'
        )
      } else {
        setStatus('error')
        setStatusMessage(result.message || 'Submission failed. Please verify your details.')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
      setStatusMessage('Validation failed. Please verify your details.')
    }
  }

  if (status === 'success') {
    return (
      <div className="p-4 sm:p-6 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-center space-y-3 animate-in fade-in duration-300">
        <div className="w-11 h-11 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900">Enquiry Received</h3>
          <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
            {statusMessage}
          </p>
        </div>
        <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-emerald-200/80 text-[11px] sm:text-xs text-slate-700 font-medium inline-block mx-auto">
          {homeType} • {timeline} • {budget}
        </div>
        <div className="pt-1 flex items-center justify-center gap-2.5">
          {onSuccess && (
            <button
              type="button"
              onClick={onSuccess}
              className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--color-accent-primary,#E06B2D)] text-white shadow-xs hover:brightness-105 transition-all cursor-pointer"
            >
              Done
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              setStatus('idle')
              reset()
            }}
            className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all cursor-pointer"
          >
            Send Another Query
          </button>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('space-y-3.5', className)}
      noValidate
    >
      {/* Honeypot field (hidden from legitimate users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="endpage-enquiry-honeypot">Leave blank</label>
        <input
          id="endpage-enquiry-honeypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('honeypot')}
        />
      </div>

      {/* Header (Matching Reference Image 3) */}
      {showHeader && (
        <div className="space-y-1 pb-0.5">
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] font-bold text-[var(--color-accent-primary,#E06B2D)]">
            INSTANT ACCESS
          </span>
          <h2 className="font-display text-lg sm:text-2xl font-bold tracking-tight text-slate-900 leading-snug">
            Request Pricing & Project Details
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Provide your details below to receive the brochure & floor plans via WhatsApp.
          </p>
        </div>
      )}

      {/* Question 1: Home Type */}
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-slate-900">
          1. What type of home are you looking for? <span className="text-[var(--color-accent-primary,#E06B2D)]">*</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
          {HOME_TYPE_OPTIONS.map((opt) => {
            const isSelected = homeType === opt
            return (
              <button
                key={opt}
                type="button"
                onClick={() => setHomeType(opt)}
                className={cn(
                  'py-2 px-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer text-center select-none border',
                  isSelected
                    ? 'bg-[var(--color-accent-primary,#E06B2D)] text-white border-[var(--color-accent-primary,#E06B2D)] shadow-xs ring-1 ring-[var(--color-accent-primary,#E06B2D)]/20'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                )}
              >
                {opt}
              </button>
            )
          })}
        </div>
      </div>

      {/* Question 2: Timeline */}
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-slate-900">
          2. When are you planning to buy? <span className="text-[var(--color-accent-primary,#E06B2D)]">*</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
          {TIMELINE_OPTIONS.map((opt) => {
            const isSelected = timeline === opt
            return (
              <button
                key={opt}
                type="button"
                onClick={() => setTimeline(opt)}
                className={cn(
                  'py-2 px-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer text-center select-none border',
                  isSelected
                    ? 'bg-[var(--color-accent-primary,#E06B2D)] text-white border-[var(--color-accent-primary,#E06B2D)] shadow-xs ring-1 ring-[var(--color-accent-primary,#E06B2D)]/20'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                )}
              >
                {opt}
              </button>
            )
          })}
        </div>
      </div>

      {/* Question 3: Budget */}
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-slate-900">
          3. What is your budget? <span className="text-[var(--color-accent-primary,#E06B2D)]">*</span>
        </label>
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
          {BUDGET_OPTIONS.map((opt) => {
            const isSelected = budget === opt
            return (
              <button
                key={opt}
                type="button"
                onClick={() => setBudget(opt)}
                className={cn(
                  'py-2 px-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer text-center select-none border',
                  isSelected
                    ? 'bg-[var(--color-accent-primary,#E06B2D)] text-white border-[var(--color-accent-primary,#E06B2D)] shadow-xs ring-1 ring-[var(--color-accent-primary,#E06B2D)]/20'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                )}
              >
                {opt}
              </button>
            )
          })}
        </div>
      </div>

      {/* Contact Inputs: Full Name & Mobile Number (2 columns on tablet/desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-0.5">
        {/* Full Name */}
        <div className="space-y-1">
          <label htmlFor="endpage-fullname" className="block text-xs font-semibold text-slate-900">
            Full Name <span className="text-[var(--color-accent-primary,#E06B2D)]">*</span>
          </label>
          <input
            id="endpage-fullname"
            type="text"
            placeholder="e.g. Rajesh Sharma"
            className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[var(--color-accent-primary,#E06B2D)] focus:ring-2 focus:ring-[var(--color-accent-primary,#E06B2D)]/15 focus:outline-none transition-all text-xs sm:text-sm"
            {...register('fullName')}
          />
          {errors.fullName && (
            <p className="text-[11px] text-rose-500 flex items-center gap-1 pt-0.5">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.fullName.message}</span>
            </p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="space-y-1">
          <label htmlFor="endpage-phone" className="block text-xs font-semibold text-slate-900">
            Mobile Number <span className="text-[var(--color-accent-primary,#E06B2D)]">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-slate-400 select-none">
              +91
            </span>
            <input
              id="endpage-phone"
              type="tel"
              maxLength={10}
              placeholder="10-digit mobile number"
              className="w-full pl-11 pr-3.5 py-2 sm:py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[var(--color-accent-primary,#E06B2D)] focus:ring-2 focus:ring-[var(--color-accent-primary,#E06B2D)]/15 focus:outline-none transition-all text-xs sm:text-sm font-mono"
              {...register('phone')}
            />
          </div>
          {errors.phone && (
            <p className="text-[11px] text-rose-500 flex items-center gap-1 pt-0.5">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.phone.message}</span>
            </p>
          )}
        </div>
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-[11px] flex items-start gap-1.5">
          <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-rose-600" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Submit Action */}
      <div className="pt-1">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full py-2.5 sm:py-3 px-5 rounded-xl bg-[var(--color-accent-primary,#E06B2D)] hover:brightness-105 active:scale-[0.99] text-white font-bold uppercase tracking-wider text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
        >
          <span>{status === 'submitting' ? 'Submitting...' : 'Get Brochure & Price Sheet'}</span>
          <Send className="w-3.5 h-3.5 ml-0.5" />
        </button>
      </div>

      {/* Disclaimer */}
      <p className="text-center text-[10px] text-slate-500 pt-0.5 leading-relaxed">
        By submitting, our team will share the project details and pricing with you via call / WhatsApp.
      </p>
    </form>
  )
}

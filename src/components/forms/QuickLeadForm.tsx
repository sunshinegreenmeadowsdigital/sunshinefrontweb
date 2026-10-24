import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { submitLead } from '@/services/leadService'
import { CheckCircle2, AlertCircle, Send, X } from 'lucide-react'
import { cn } from '@/utils/cn'

// Validation schema for the contact details step
const stepTwoSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Please enter your full name (minimum 2 characters)' })
    .max(80, { message: 'Name exceeds maximum length' })
    .regex(/^[a-zA-Z\s.'-]+$/, { message: 'Please enter a valid name' }),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, { message: 'Enter a valid 10-digit Indian mobile number' }),
  honeypot: z.string().optional(),
})

type StepTwoFormData = z.infer<typeof stepTwoSchema>

export interface QuickLeadFormProps {
  onSuccess?: () => void
  onClose?: () => void
  projectInterest?: string
  className?: string
  source?: string
  customTitle?: string
  customSubtitle?: string
  defaultHomeType?: string
}

const HOME_TYPE_OPTIONS = ['2 BHK', '3 BHK', 'Not sure yet']
const TIMELINE_OPTIONS = ['Immediately', '1–3 months', '3–6 months', 'Just exploring']
const BUDGET_OPTIONS = ['₹60–75 Lakhs', '₹75–90 Lakhs', '₹90 Lakhs – ₹1 Cr+']

export const QuickLeadForm: React.FC<QuickLeadFormProps> = ({
  onSuccess,
  onClose,
  projectInterest = 'Sunshine Green Meadows',
  className,
  source = 'website_lead_modal',
  customTitle,
  customSubtitle,
  defaultHomeType = '2 BHK',
}) => {
  const [step, setStep] = useState<1 | 2>(1)
  const [homeType, setHomeType] = useState<string>(defaultHomeType)
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
  } = useForm<StepTwoFormData>({
    resolver: zodResolver(stepTwoSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      honeypot: '',
    },
  })

  const onSubmit = async (data: StepTwoFormData) => {
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
        source: source,
        projectInterest: projectInterest,
        message: `Preferences: Looking for ${homeType}, Planning in ${timeline}, Budget ${budget}`,
        honeypot: data.honeypot,
        submissionTimestamp: mountTimestamp,
      })

      if (result.success) {
        setStatus('success')
        setStatusMessage(
          'Thank you! Our property specialist will share the official blueprints and transparent pricing directly via WhatsApp / Call.'
        )
      } else {
        setStatus('error')
        setStatusMessage(result.message || 'Submission failed. Please check your entries.')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
      setStatusMessage('Validation failed. Please verify your details.')
    }
  }

  // Success view
  if (status === 'success') {
    return (
      <div className="p-4 sm:p-6 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-center space-y-3 animate-in fade-in zoom-in-95 duration-200">
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
          {(onClose || onSuccess) && (
            <button
              type="button"
              onClick={onClose || onSuccess}
              className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--color-accent-primary,#E06B2D)] text-white shadow-xs hover:brightness-105 transition-all cursor-pointer"
            >
              Done
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              setStatus('idle')
              setStep(1)
              reset()
            }}
            className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all cursor-pointer"
          >
            Submit Another
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('space-y-3.5', className)}>
      {/* Step Indicator Header & Close Button */}
      <div className="flex items-center justify-between pb-0.5">
        <div className="flex items-center gap-2.5">
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-bold text-[var(--color-accent-primary,#E06B2D)]">
            {step === 1 ? 'STEP 1 OF 2: PREFERENCES' : 'STEP 2 OF 2: CONTACT DETAILS'}
          </span>
          <div className="flex items-center gap-1">
            <span
              className={cn(
                'h-1 w-5 sm:w-6 rounded-full transition-all duration-200',
                step >= 1 ? 'bg-[var(--color-accent-primary,#E06B2D)]' : 'bg-slate-200'
              )}
            />
            <span
              className={cn(
                'h-1 w-5 sm:w-6 rounded-full transition-all duration-200',
                step === 2 ? 'bg-[var(--color-accent-primary,#E06B2D)]' : 'bg-slate-200'
              )}
            />
          </div>
        </div>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}
      </div>

      {/* Main Title & Description */}
      <div className="space-y-0.5">
        <h2 className="font-display text-lg sm:text-2xl font-bold tracking-tight text-slate-900 leading-snug">
          {customTitle || 'Request Pricing & Project Details'}
        </h2>
        <p className="text-xs text-slate-600 leading-relaxed">
          {step === 1
            ? (customSubtitle || 'Answer 3 quick questions to help us send the right pricing and floor plans.')
            : 'Where should we send the official brochure, blueprints, and pricing sheet?'}
        </p>
      </div>

      {/* STEP 1: PREFERENCES */}
      {step === 1 && (
        <div className="space-y-3 pt-0.5 animate-in fade-in duration-200">
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

          {/* Step 1 Continue Action */}
          <div className="pt-1.5">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full py-2.5 sm:py-3 px-5 rounded-xl bg-[var(--color-accent-primary,#E06B2D)] hover:brightness-105 active:scale-[0.99] text-white font-bold uppercase tracking-wider text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Continue to Contact Details</span>
              <Send className="w-3.5 h-3.5 ml-0.5" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: CONTACT DETAILS */}
      {step === 2 && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 pt-0.5 animate-in fade-in duration-200"
          noValidate
        >
          {/* Honeypot field for bot mitigation */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="quick-popup-honeypot">Leave blank</label>
            <input
              id="quick-popup-honeypot"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register('honeypot')}
            />
          </div>

          {/* Selections Summary Strip */}
          <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between gap-2">
            <div className="text-[11px] sm:text-xs font-semibold text-slate-800 truncate">
              <span>{homeType}</span> • <span>{timeline}</span> • <span>{budget}</span>
            </div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-[var(--color-accent-primary,#E06B2D)] hover:underline font-bold text-[11px] uppercase tracking-wider shrink-0 cursor-pointer"
            >
              Edit
            </button>
          </div>

          {/* Full Name */}
          <div className="space-y-1">
            <label htmlFor="step2-fullname" className="block text-xs font-semibold text-slate-900">
              Full Name <span className="text-[var(--color-accent-primary,#E06B2D)]">*</span>
            </label>
            <input
              id="step2-fullname"
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
            <label htmlFor="step2-phone" className="block text-xs font-semibold text-slate-900">
              Mobile Number <span className="text-[var(--color-accent-primary,#E06B2D)]">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-slate-400 select-none">
                +91
              </span>
              <input
                id="step2-phone"
                type="tel"
                maxLength={10}
                placeholder="10-Digit Mobile Number"
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

          {/* Error Message */}
          {status === 'error' && (
            <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-[11px] flex items-start gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-rose-600" />
              <span>{statusMessage}</span>
            </div>
          )}

          {/* Actions: Back & Submit */}
          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="flex-1 py-2.5 sm:py-3 px-4 rounded-xl bg-[var(--color-accent-primary,#E06B2D)] hover:brightness-105 active:scale-[0.99] text-white font-bold uppercase tracking-wider text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-70"
            >
              <span>{status === 'submitting' ? 'Submitting...' : 'Get Floor Plans & Pricing'}</span>
              <Send className="w-3.5 h-3.5 ml-0.5" />
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-[10px] text-slate-500 pt-0.5 leading-relaxed">
            Zero spam guarantee. Official blueprints and pricing sent directly via WhatsApp / Call.
          </p>
        </form>
      )}
    </div>
  )
}

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { siteVisitSchema, type SiteVisitData, type SubmissionStatus } from '@/types/lead'
import { submitLead } from '@/services/leadService'
import { Button } from '@/components/shared/Button'
import { Calendar, CheckCircle2, AlertCircle } from 'lucide-react'

export interface SiteVisitFormProps {
  onSuccess?: () => void
  className?: string
  source?: string
  projectInterest?: string
}

export const SiteVisitForm: React.FC<SiteVisitFormProps> = ({
  onSuccess,
  className,
  source = 'Sunshine Green Meadows - Site Visit Form',
  projectInterest = 'Sunshine Green Meadows',
}) => {
  const [status, setStatus] = useState<SubmissionStatus>('idle')
  const [statusMessage, setStatusMessage] = useState<string>('')
  const [mountTimestamp] = useState<number>(() => Date.now())

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SiteVisitData>({
    resolver: zodResolver(siteVisitSchema),
    defaultValues: {
      leadType: 'site_visit',
      projectInterest: projectInterest,
      fullName: '',
      phone: '',
      email: '',
      preferredDate: '',
      preferredTimeSlot: 'morning',
      visitorCount: 2,
      honeypot: '',
      submissionTimestamp: mountTimestamp,
    },
  })

  const onSubmit = async (data: SiteVisitData) => {
    setStatus('submitting')
    setStatusMessage('')

    try {
      const result = await submitLead({
        ...data,
        source: source,
        projectInterest: projectInterest,
        submissionTimestamp: mountTimestamp,
      })

      if (result.success) {
        setStatus('success')
        setStatusMessage(result.message)
      } else {
        setStatus('error')
        setStatusMessage(result.message)
      }
    } catch (err) {
      setStatus('error')
      setStatusMessage('Validation failed. Please verify dates and contact details.')
      console.error(err)
    }
  }

  if (status === 'success') {
    return (
      <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="font-display font-bold text-xl text-slate-900">Visit Request Received</h3>
        <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
          {statusMessage}
        </p>
        <div className="pt-2 flex items-center justify-center gap-3">
          {onSuccess && (
            <Button variant="primary" size="sm" onClick={onSuccess}>
              Done
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setStatus('idle')
              reset()
            }}
          >
            Schedule Another Visit
          </Button>
        </div>
      </div>
    )
  }

  // Minimum selectable date: tomorrow
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className || 'space-y-4'} noValidate>
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="visit-honeypot">Leave blank</label>
        <input id="visit-honeypot" type="text" tabIndex={-1} {...register('honeypot')} />
      </div>

      <div>
        <label htmlFor="visit-name" className="block text-xs font-medium uppercase tracking-wider text-[var(--color-text-secondary)] mb-1.5">
          Visitor Name <span className="text-[var(--color-accent-primary)]">*</span>
        </label>
        <input
          id="visit-name"
          type="text"
          placeholder="e.g. Dr. K. Rao"
          className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-surface-card)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent-primary)] focus:outline-none transition-colors text-sm"
          {...register('fullName')}
        />
        {errors.fullName && (
          <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.fullName.message}</span>
          </p>
        )}
      </div>

      <div>
        <label htmlFor="visit-phone" className="block text-xs font-medium uppercase tracking-wider text-[var(--color-text-secondary)] mb-1.5">
          Contact Phone <span className="text-[var(--color-accent-primary)]">*</span>
        </label>
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-[var(--color-text-muted)]">
            +91
          </span>
          <input
            id="visit-phone"
            type="tel"
            maxLength={10}
            placeholder="98765 43210"
            className="w-full pl-12 pr-4 py-2.5 rounded-xl bg-[var(--color-surface-card)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent-primary)] focus:outline-none transition-colors text-sm font-mono"
            {...register('phone')}
          />
        </div>
        {errors.phone && (
          <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.phone.message}</span>
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="visit-date" className="block text-xs font-medium uppercase tracking-wider text-[var(--color-text-secondary)] mb-1.5">
            Preferred Date <span className="text-[var(--color-accent-primary)]">*</span>
          </label>
          <input
            id="visit-date"
            type="date"
            min={minDate}
            className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-surface-card)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] focus:border-[var(--color-accent-primary)] focus:outline-none transition-colors text-sm"
            {...register('preferredDate')}
          />
          {errors.preferredDate && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.preferredDate.message}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="visit-slot" className="block text-xs font-medium uppercase tracking-wider text-[var(--color-text-secondary)] mb-1.5">
            Time Window <span className="text-[var(--color-accent-primary)]">*</span>
          </label>
          <select
            id="visit-slot"
            className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-surface-card)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] focus:border-[var(--color-accent-primary)] focus:outline-none transition-colors text-sm"
            {...register('preferredTimeSlot')}
          >
            <option value="morning">Morning (10:00 AM - 1:00 PM)</option>
            <option value="afternoon">Afternoon (1:00 PM - 4:00 PM)</option>
            <option value="evening">Evening (4:00 PM - 6:30 PM)</option>
          </select>
          {errors.preferredTimeSlot && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.preferredTimeSlot.message}</span>
            </p>
          )}
        </div>
      </div>

      {status === 'error' && (
        <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/25 text-rose-300 text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
          <span>{statusMessage}</span>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="md"
        isLoading={status === 'submitting'}
        className="w-full"
      >
        <Calendar className="w-4 h-4 mr-1.5" />
        <span>Schedule Guided Site Visit</span>
      </Button>
    </form>
  )
}

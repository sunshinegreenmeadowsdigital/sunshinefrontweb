import React, { useEffect, useState } from 'react'
import { X, Calendar, Download, MessageSquare } from 'lucide-react'
import { cn } from '@/utils/cn'
import { QuickLeadForm } from '@/components/forms/QuickLeadForm'
import { SiteVisitForm } from '@/components/forms/SiteVisitForm'
import { BrochureForm } from '@/components/forms/BrochureForm'

export interface EnquiryModalProps {
  isOpen: boolean
  onClose: () => void
  projectContext?: string
  modalType?: 'quick' | 'enquiry' | 'brochure' | 'visit'
  source?: string
  customTitle?: string
  customSubtitle?: string
  defaultHomeType?: string
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  projectContext = 'Sunshine Green Meadows',
  modalType = 'quick',
  source = 'website_lead_modal',
  customTitle,
  customSubtitle,
  defaultHomeType,
}) => {
  const [activeType, setActiveType] = useState<'quick' | 'enquiry' | 'brochure' | 'visit'>(modalType)

  useEffect(() => {
    setActiveType(modalType)
  }, [modalType, isOpen])

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const isQuickMode = modalType === 'quick'

  const titles = {
    quick: {
      eyebrow: 'Developer Direct Enquiry',
      title: 'Get Floor Plans & Pricing',
      desc: 'Enter your contact details below to receive instant brochure, pricing details, and unit availability.',
      icon: MessageSquare,
    },
    enquiry: {
      eyebrow: 'Direct Consultation',
      title: 'Connect With Our Sales Team',
      desc: 'Share your requirements and our team will get in touch with floor plans, pricing breakdowns, and Vaastu orientation guidance.',
      icon: MessageSquare,
    },
    brochure: {
      eyebrow: 'Digital Dossier',
      title: 'Request Project E-Brochure',
      desc: 'Enter your contact details below to receive the complete architectural portfolio, block layouts, and master specifications.',
      icon: Download,
    },
    visit: {
      eyebrow: 'Private Experience',
      title: 'Schedule a Guided Site Visit',
      desc: 'Pick your preferred date and time slot for a personalized tour of Sunshine Green Meadows with our property specialists.',
      icon: Calendar,
    },
  }

  const current = titles[activeType] || titles.quick
  const Icon = current.icon

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card (Bottom-sheet style on mobile, centered modal on desktop) */}
      <div className="relative w-full max-w-lg bg-white border-t sm:border border-slate-200 rounded-t-3xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 shadow-2xl z-10 max-h-[90dvh] sm:max-h-[88vh] overflow-y-auto animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-200 text-slate-900 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
        {/* Mobile handle indicator */}
        <div className="sm:hidden w-10 h-1 bg-slate-300 rounded-full mx-auto mb-3" />

        {isQuickMode ? (
          /* Dedicated 2-Step Popup Form (matching reference Images 1 & 2) */
          <QuickLeadForm
            onSuccess={onClose}
            onClose={onClose}
            projectInterest={projectContext}
            source={source}
            customTitle={customTitle}
            customSubtitle={customSubtitle}
            defaultHomeType={defaultHomeType}
          />
        ) : (
          <>
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3.5 sm:top-5 right-3.5 sm:right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#E06B2D] cursor-pointer"
              aria-label="Close enquiry modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-4 pr-8 space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E06B2D]" />
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#E06B2D] font-semibold">
                  {projectContext} • {current.eyebrow}
                </span>
              </div>
              <h2
                id="modal-title"
                className="text-lg sm:text-xl font-display font-bold text-slate-900 flex items-center gap-2 pt-0.5"
              >
                <Icon className="w-4 h-4 text-[#E06B2D] shrink-0" />
                <span>{current.title}</span>
              </h2>
              <p className="text-xs text-slate-600 pt-0.5 leading-relaxed">
                {current.desc}
              </p>
            </div>

            {/* Quick Tab Segmented Control */}
            <div className="flex items-center gap-1 p-1 rounded-2xl bg-slate-100 border border-slate-200 mb-6">
              <button
                type="button"
                onClick={() => setActiveType('enquiry')}
                className={cn(
                  'flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-semibold transition-all',
                  activeType === 'enquiry'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                )}
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#E06B2D]" />
                <span>Enquiry</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveType('brochure')}
                className={cn(
                  'flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-semibold transition-all',
                  activeType === 'brochure'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                )}
              >
                <Download className="w-3.5 h-3.5 text-[#E06B2D]" />
                <span>Brochure</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveType('visit')}
                className={cn(
                  'flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-semibold transition-all',
                  activeType === 'visit'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                )}
              >
                <Calendar className="w-3.5 h-3.5 text-[#E06B2D]" />
                <span>Site Visit</span>
              </button>
            </div>

            {/* Dynamic Form Render */}
            {activeType === 'visit' ? (
              <SiteVisitForm
                onSuccess={onClose}
                source={source}
                projectInterest={projectContext}
              />
            ) : activeType === 'brochure' ? (
              <BrochureForm
                onSuccess={onClose}
                source={source}
                projectInterest={projectContext}
              />
            ) : (
              <QuickLeadForm
                onSuccess={onClose}
                onClose={onClose}
                projectInterest={projectContext}
                source={source}
                customTitle={customTitle}
                customSubtitle={customSubtitle}
                defaultHomeType={defaultHomeType}
              />
            )}
          </>
        )}
      </div>
    </div>
  )
}

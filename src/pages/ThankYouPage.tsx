import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SEO } from '@/components/shared/SEO'
import { siteConfig } from '@/config/site'
import { Check, MessageCircle, Phone, ArrowLeft } from 'lucide-react'

export const ThankYouPage: React.FC = () => {
  const location = useLocation()
  const state = (location.state || {}) as {
    leadType?: string
    name?: string
    project?: string
    eventId?: string
  }

  const leadType = state.leadType || 'general_enquiry'
  const userName = state.name ? state.name.trim().split(' ')[0] : ''
  const project = state.project || siteConfig.greenMeadows.name
  const eventId = state.eventId

  useEffect(() => {
    window.scrollTo(0, 0)

    // Deduplication: Prevent duplicate 'Lead' event firing if visitor refreshes the page
    const navKey = eventId || location.key || 'direct'
    const dedupeKey = `meta_lead_tracked_${navKey}`

    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      if (!sessionStorage.getItem(dedupeKey)) {
        // Official Meta Pixel + CAPI Event Deduplication via matching eventID
        const eventOptions = eventId ? { eventID: eventId } : undefined
        window.fbq(
          'track',
          'Lead',
          {
            content_name: project,
            lead_type: leadType,
          },
          eventOptions
        )
        try {
          sessionStorage.setItem(dedupeKey, 'true')
        } catch {
          // Ignore private browsing storage restrictions
        }
      }
    }
  }, [project, leadType, location.key, eventId])

  const whatsAppDirectUrl = `https://wa.me/917997482222?text=${encodeURIComponent(
    leadType === 'brochure_request'
      ? `Hi Sunshine Infra team, I just requested the brochure for ${project} on your website. Please share the brochure PDF and price sheet.`
      : `Hi Sunshine Infra team, I just enquired about ${project} on your website. Please share the details.`
  )}`

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 sm:p-6 text-slate-900">
      <SEO
        title="Thank You | Sunshine Infra"
        description="We've received your enquiry. Our property advisor will connect with you shortly."
        canonicalUrl="https://sunshineinfra.in/thank-you"
        noindex={true}
      />

      <div className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-lg text-center animate-in fade-in zoom-in-95 duration-200">
        {/* Success Icon */}
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
          <Check className="w-7 h-7 stroke-[2.5]" />
        </div>

        {/* Heading */}
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          {userName ? `Thank You, ${userName}!` : 'Thank You!'}
        </h1>

        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          We’ve received your enquiry for <strong className="text-slate-800 font-semibold">{project}</strong>. Our advisor will reach out to you shortly.
        </p>

        {/* CTAs */}
        <div className="mt-6 space-y-2.5">
          <a
            href={whatsAppDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] text-white font-semibold text-sm shadow-md shadow-emerald-600/25 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp with Sales Desk</span>
          </a>

          <a
            href={`tel:${siteConfig.contact.primaryPhoneTel}`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-[0.99] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>Call: {siteConfig.contact.primaryPhoneFormatted}</span>
          </a>
        </div>

        {/* Back Link */}
        <div className="mt-6 pt-4 border-t border-slate-100">
          <Link
            to="/sunshine-green-meadows"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Green Meadows</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

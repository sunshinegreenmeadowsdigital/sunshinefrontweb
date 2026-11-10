import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SEO } from '@/components/shared/SEO'
import { siteConfig } from '@/config/site'
import {
  CheckCircle2,
  MessageCircle,
  Phone,
  ArrowRight,
  Calendar,
  Sparkles,
  MapPin,
  Clock,
  ShieldCheck,
} from 'lucide-react'

export const ThankYouPage: React.FC = () => {
  const location = useLocation()
  const state = (location.state || {}) as {
    leadType?: string
    name?: string
    project?: string
  }

  const leadType = state.leadType || 'general_enquiry'
  const userName = state.name ? state.name.split(' ')[0] : ''
  const project = state.project || siteConfig.greenMeadows.name

  useEffect(() => {
    window.scrollTo(0, 0)

    // Fire Meta Pixel standard 'Lead' event for dedicated URL tracking
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', {
        content_name: project,
        lead_type: leadType,
      })
    }
  }, [project, leadType])

  const whatsAppDirectUrl = `https://api.whatsapp.com/send?phone=${siteConfig.contact.whatsAppNumber}&text=${encodeURIComponent(
    `Hi Sunshine Infra team, I just submitted an enquiry for ${project} on your website. Please share the floor plans, pricing sheets, and site visit details.`
  )}`

  return (
    <div className="w-full bg-slate-50 min-h-screen text-slate-900 flex flex-col justify-between">
      <SEO
        title="Thank You — We've Received Your Enquiry | Sunshine Infra"
        description="Thank you for your interest in Sunshine Infra. Our senior property advisor will reach out shortly."
        canonicalUrl="https://sunshineinfra.in/thank-you"
        noindex={true}
      />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col justify-center">
        {/* Main Success Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-xl shadow-slate-200/50 text-center relative overflow-hidden animate-in fade-in zoom-in-95 duration-300">
          {/* Top ambient glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-400/10 rounded-full blur-3xl pointer-events-none" />

          {/* Icon Badge */}
          <div className="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 mb-6">
            <CheckCircle2 className="w-9 h-9 sm:w-11 sm:h-11" />
            <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600" />
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2 max-w-xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Enquiry Confirmed</span>
            </span>

            <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              {userName ? `Thank You, ${userName}!` : 'Thank You!'}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
              Your interest in <strong className="text-slate-900 font-semibold">{project}</strong> has been received by our sales desk. Our property advisor is reviewing your requirements and will connect with you within 15 minutes.
            </p>
          </div>

          {/* Primary Warm Action: Instant WhatsApp Button */}
          <div className="mt-8 pt-8 border-t border-slate-100 max-w-xl mx-auto space-y-4">
            <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs font-mono font-bold text-emerald-900 uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Prefer an Instant Response?</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-700">
                  Connect immediately with our on-site team via WhatsApp.
                </div>
              </div>

              <a
                href={whatsAppDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-emerald-600/30 hover:shadow-lg transition-all active:scale-95 whitespace-nowrap cursor-pointer shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Direct Phone Call Alternate */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`tel:${siteConfig.contact.primaryPhoneTel}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Call Sales: {siteConfig.contact.primaryPhoneFormatted}</span>
              </a>

              <Link
                to="/sunshine-green-meadows"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-emerald-800 bg-white hover:bg-emerald-50 border border-emerald-300 transition-colors"
              >
                <span>Back to Green Meadows</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Trust Highlights Strip */}
          <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-[11px] text-slate-600 leading-tight">
                <strong className="block text-slate-900 font-semibold mb-0.5">TS RERA & HMDA</strong>
                Sanctioned land with verified bank approvals.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-2.5">
              <Calendar className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-[11px] text-slate-600 leading-tight">
                <strong className="block text-slate-900 font-semibold mb-0.5">90% Complete</strong>
                Towers structurally ready for handover.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-[11px] text-slate-600 leading-tight">
                <strong className="block text-slate-900 font-semibold mb-0.5">Bowrampet DPS Road</strong>
                Just 5 minutes to ORR Exit 4.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

import React from 'react'
import { siteConfig } from '@/config/site'
import { EnquiryForm } from '@/components/forms/EnquiryForm'
import { Phone, MessageCircle, ShieldCheck } from 'lucide-react'

export const EnquiryCtaSection: React.FC = () => {
  return (
    <section id="enquire" className="py-12 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Conversion Copy & Fast Channels */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#E06B2D] font-semibold">
                Direct Developer Enquiries
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.15]">
                Begin Your Journey With <span className="italic font-normal text-[#C28B5B]">Sunshine.</span>
              </h2>
            </div>

            <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
              Connect directly with our senior property advisors for floor plans, transparent pricing sheets, and private site visits.
            </p>

            {/* Quick Contact Buttons */}
            <div className="space-y-2.5 sm:space-y-3 pt-1">
              <a
                href={`tel:${siteConfig.contact.primaryPhoneTel}`}
                className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#E06B2D]/50 hover:shadow-xs transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E06B2D]/10 border border-[#E06B2D]/25 flex items-center justify-center text-[#E06B2D] group-hover:bg-[#E06B2D] group-hover:text-white transition-all shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500">
                    Direct Sales Phone
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-[#E06B2D] transition-colors font-mono">
                    {siteConfig.contact.primaryPhoneFormatted}
                  </div>
                </div>
              </a>

              <a
                href={siteConfig.contact.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-emerald-500/50 hover:shadow-xs transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500">
                    Instant WhatsApp Assistance
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    Chat with an Advisor
                  </div>
                </div>
              </a>
            </div>

            {/* Statutory Compliance Note */}
            <div className="pt-3 border-t border-slate-200 flex items-center gap-2 text-[11px] sm:text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>TS RERA Registration No. {siteConfig.greenMeadows.reraNumber}</span>
            </div>
          </div>

          {/* Right Column: Embedded Validated Form Card */}
          <div className="lg:col-span-7">
            <div className="p-4 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-lg shadow-slate-200/60 relative">
              <EnquiryForm
                projectInterest="Sunshine Green Meadows"
                source="Sunshine Infra - Corporate Home: Bottom Enquiry Form"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

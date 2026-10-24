import React, { useState } from 'react'
import { siteConfig } from '@/config/site'
import { EnquiryForm } from '@/components/forms/EnquiryForm'
import { BrochureForm } from '@/components/forms/BrochureForm'
import { SiteVisitForm } from '@/components/forms/SiteVisitForm'
import { Phone, MessageCircle, Calendar, Download, ShieldCheck, Mail } from 'lucide-react'
import { cn } from '@/utils/cn'

export interface ProjectEnquirySectionProps {
  initialTab?: 'enquiry' | 'brochure' | 'visit'
}

export const ProjectEnquirySection: React.FC<ProjectEnquirySectionProps> = ({
  initialTab = 'enquiry',
}) => {
  const [activeTab, setActiveTab] = useState<'enquiry' | 'brochure' | 'visit'>(initialTab)

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Direct Sales & Fast Action Channels */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-emerald-700 font-semibold">
                Direct On-Site Advisory
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.15]">
                Can't Wait to Know More? <br />
                <span className="italic font-normal text-emerald-600">Let's Connect.</span>
              </h2>
            </div>

            <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
              Schedule an exclusive walkthrough of Sunshine Green Meadows with our project leads. We provide transparent pricing sheets, sanctioned block plans, and assistance with pre-approved bank loans.
            </p>

            <div className="space-y-2.5 sm:space-y-3 pt-1">
              {/* Direct Phone Action */}
              <a
                href={`tel:${siteConfig.contact.primaryPhoneTel}`}
                className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:shadow-xs transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-all shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500">
                    Direct Sales Desk
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors font-mono">
                    {siteConfig.contact.primaryPhoneFormatted}
                  </div>
                </div>
              </a>

              {/* Direct WhatsApp Action */}
              <a
                href={siteConfig.contact.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:shadow-xs transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-all shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500">
                    WhatsApp Direct Inquiry
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    Request Floor Plans on WhatsApp
                  </div>
                </div>
              </a>
            </div>

            {/* Statutory Compliance Note */}
            <div className="pt-3 border-t border-slate-200 flex items-center gap-2 text-[11px] sm:text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>TS RERA REG. No. {siteConfig.greenMeadows.reraNumber}</span>
            </div>
          </div>

          {/* Right Column: Multi-tab Interactive Lead Capture Card */}
          <div className="lg:col-span-7">
            <div className="p-4 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/90 shadow-lg shadow-slate-200/50 space-y-5">
              {/* Tab Switcher */}
              <div className="flex items-center gap-1 sm:gap-2 p-1 sm:p-1.5 rounded-full bg-slate-200/80 border border-slate-300/80">
                <button
                  onClick={() => setActiveTab('enquiry')}
                  className={cn(
                    'flex-1 flex items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-2.5 px-2.5 sm:px-3 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all select-none',
                    activeTab === 'enquiry'
                      ? 'bg-emerald-600 text-white shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  )}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Enquiry</span>
                </button>

                <button
                  onClick={() => setActiveTab('brochure')}
                  className={cn(
                    'flex-1 flex items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-2.5 px-2.5 sm:px-3 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all select-none',
                    activeTab === 'brochure'
                      ? 'bg-emerald-600 text-white shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  )}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>E-Brochure</span>
                </button>

                <button
                  onClick={() => setActiveTab('visit')}
                  className={cn(
                    'flex-1 flex items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-2.5 px-2.5 sm:px-3 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all select-none',
                    activeTab === 'visit'
                      ? 'bg-emerald-600 text-white shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  )}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Site Visit</span>
                </button>
              </div>

              {/* Form Content with exact CTA source identification */}
              <div>
                {activeTab === 'enquiry' && (
                  <EnquiryForm
                    projectInterest="Sunshine Green Meadows"
                    source="Sunshine Green Meadows - Page Bottom: Enquiry Form"
                  />
                )}
                {activeTab === 'brochure' && (
                  <BrochureForm
                    projectInterest="Sunshine Green Meadows"
                    source="Sunshine Green Meadows - Page Bottom: Download Brochure Form"
                  />
                )}
                {activeTab === 'visit' && (
                  <SiteVisitForm
                    projectInterest="Sunshine Green Meadows"
                    source="Sunshine Green Meadows - Page Bottom: Site Visit Booking Form"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

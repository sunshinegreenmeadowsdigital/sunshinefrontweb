import React, { useEffect } from 'react'
import { EnquiryForm } from '@/components/forms/EnquiryForm'
import { siteConfig } from '@/config/site'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Navigation,
  Headphones,
} from 'lucide-react'

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Sunshine Infra | Corporate Sales & Site Office'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Contact Sunshine Infra Hyderabad. Reach our sales office at Bowrampet, call +91 7997482222, or email sales@sunshineinfra.in for appointments and project details.'
      )
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      {/* 1. Page Header */}
      <section className="relative pt-24 sm:pt-32 pb-10 sm:pb-16 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#E06B2D] font-semibold flex items-center gap-2">
              <Headphones className="w-3.5 h-3.5 text-[#E06B2D]" />
              <span>Direct Sales & Inquiries</span>
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              We Are Here to <br />
              <span className="italic font-normal text-[#C28B5B]">Help You Home.</span>
            </h1>
            <p className="font-sans text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl">
              Whether you are scheduling a private walkthrough of Sunshine Green Meadows, exploring commercial partnership, or inquiring about statutory approvals, our team is at your service.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-12 sm:py-16 lg:py-20 relative bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
            {/* Left Column: Coordinates & Map */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              {/* Official Office Details Card */}
              <div className="p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-lg sm:shadow-xl shadow-slate-200/50 space-y-5 sm:space-y-6">
                <div>
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#E06B2D] font-semibold">
                    Corporate & Site Office
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    Bowrampet Headquarters
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Conveniently positioned on DPS Road, adjacent to our flagship community.
                  </p>
                </div>

                <div className="space-y-3.5 sm:space-y-4 pt-3.5 sm:pt-4 border-t border-slate-100 text-xs">
                  {/* Address */}
                  <div className="flex items-start gap-3 sm:gap-3.5">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#E06B2D] shrink-0 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <div className="font-mono uppercase tracking-wider text-slate-500 text-[10px]">
                        Registered Address
                      </div>
                      <div className="text-xs sm:text-sm text-slate-900 leading-relaxed mt-0.5 font-medium">
                        {siteConfig.contact.officeAddress.fullAddress}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-[#C28B5B] mt-0.5 font-mono font-medium">
                        Near HP Petrol Bunk, DPS Road
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3 sm:gap-3.5">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#E06B2D] shrink-0 mt-0.5">
                      <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <div className="font-mono uppercase tracking-wider text-slate-500 text-[10px]">
                        Direct Call & WhatsApp
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-0.5">
                        <a
                          href={`tel:${siteConfig.contact.primaryPhoneTel}`}
                          className="text-xs sm:text-sm font-bold text-slate-900 hover:text-[#E06B2D] transition-colors font-mono"
                        >
                          {siteConfig.contact.primaryPhoneFormatted}
                        </a>
                        <span className="text-slate-300">•</span>
                        <a
                          href={siteConfig.contact.whatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-emerald-600 hover:text-emerald-700 font-semibold underline"
                        >
                          WhatsApp Chat
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3 sm:gap-3.5">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#E06B2D] shrink-0 mt-0.5">
                      <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <div className="font-mono uppercase tracking-wider text-slate-500 text-[10px]">
                        Email Address
                      </div>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-[#E06B2D] transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-3 sm:gap-3.5">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#E06B2D] shrink-0 mt-0.5">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <div className="font-mono uppercase tracking-wider text-slate-500 text-[10px]">
                        Office & Site Visiting Hours
                      </div>
                      <div className="text-xs text-slate-900 mt-0.5 font-medium">
                        Monday – Sunday: 10:00 AM – 6:30 PM
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-slate-500">
                        Open 7 days a week for scheduled site visits
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Google Maps Action */}
                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=17.550682,78.391765"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 sm:px-5 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-[#E06B2D] text-white transition-colors shadow-sm"
                  >
                    <span>Open in Google Maps Navigation</span>
                    <Navigation className="w-3.5 h-3.5 text-orange-300" />
                  </a>
                </div>
              </div>

              {/* Map Embed Frame */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 bg-white h-56 sm:h-64 shadow-md sm:shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.094601500374!2d78.3917654!3d17.550682099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f2cde0efb0b%3A0x4e140594df763099!2sSunshine%20Green%20Meadows!5e0!3m2!1sen!2sin!4v1697287741442!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sunshine Infra Bowrampet Office Location"
                />
              </div>
            </div>

            {/* Right Column: Validated Enquiry Form */}
            <div className="lg:col-span-7 p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-lg sm:shadow-xl shadow-slate-200/50 space-y-4 sm:space-y-6">
              <div>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#E06B2D] font-semibold">
                  Send an Inquiry
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  Connect with a Property Specialist
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Fill in your details below. Our executive will reach out to discuss your requirements, provide detailed brochures, and schedule a private site visit.
                </p>
              </div>

              {/* Validated Enquiry Form Component */}
              <EnquiryForm showHeader={false} />

              {/* Privacy Reassurance Note */}
              <div className="pt-3 sm:pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] sm:text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  Privacy Guarantee: We respect your confidentiality. Your contact details are never shared with third parties or external marketing agencies.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

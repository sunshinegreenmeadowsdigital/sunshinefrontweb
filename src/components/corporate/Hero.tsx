import React, { useState } from 'react'
import { ArrowRight, MessageSquare, ShieldCheck, Award } from 'lucide-react'
import { EnquiryModal } from '@/components/shared/EnquiryModal'

export const Hero: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="relative overflow-hidden bg-slate-950 min-h-[100dvh] flex flex-col justify-center pt-20 sm:pt-28 pb-8 sm:pb-12">
      {/* Background Architectural Aerial Render - Dedicated Mobile (9:16) & Desktop (16:9) Night Views */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/assets/projects/home-hero-night-mobile.jpg"
          />
          <img
            src="/assets/projects/home-hero-night.jpg"
            alt="Sunshine Infra Architectural Vision Master Night View"
            className="w-full h-full object-cover object-top md:object-center transition-transform duration-1000 ease-out"
            fetchPriority="high"
          />
        </picture>
        {/* Luxury twilight dark gradients ensuring pristine readability on both mobile and desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 via-55% to-slate-950/45 md:hidden pointer-events-none" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20 pointer-events-none" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/50 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full my-auto py-4 sm:py-8">
        <div className="max-w-3xl space-y-3.5 sm:space-y-5 bg-slate-950/60 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none p-3.5 sm:p-0 rounded-2xl border border-white/10 sm:border-0 shadow-2xl sm:shadow-none">
          {/* Subtle Credibility Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xs text-xs text-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06B2D] animate-pulse" />
            <span className="font-mono uppercase tracking-wider text-[10px] sm:text-[11px] text-[#F27C3E] font-semibold">
              Enshining Lifestyles
            </span>
            <span className="text-white/20">•</span>
            <span className="text-[11px] sm:text-xs text-slate-300">Hyderabad, Telangana</span>
          </div>

          {/* Editorial Headline */}
          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            A Sunshine for <br />
            <span className="italic font-normal text-[#F27C3E]">the Future.</span>
          </h1>

          {/* Supporting Architecture Narrative - strictly 2 lines on mobile, high impact */}
          <p className="font-sans text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl font-normal">
            Creating visionary living across Hyderabad's premier corridors, where architectural elegance meets enduring community trust.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="pt-0.5 sm:pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3.5">
            <a
              href="#ongoing-project"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#E06B2D] hover:bg-[#F27C3E] text-white shadow-lg shadow-[#E06B2D]/25 transition-all cursor-pointer"
            >
              <span>Explore Our Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/30 shadow-xs backdrop-blur-sm transition-all cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#F27C3E]" />
              <span>Enquire Now</span>
            </button>
          </div>

          {/* Quick Credibility Footnote */}
          <div className="pt-3 sm:pt-4 border-t border-white/15 flex items-center gap-4 text-[11px] sm:text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#F27C3E] shrink-0" />
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>TS RERA Approved</span>
            </div>
          </div>

          {/* 3 Core Trust Statistics - Side-by-Side row on mobile */}
          <div className="pt-3 sm:pt-4 border-t border-white/15 grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl">
            <div className="p-2 sm:p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-xs">
              <div className="font-display text-lg sm:text-2xl font-bold text-white tracking-tight">
                15+
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-200 leading-tight mt-0.5">
                Years of Trust
              </div>
              <p className="text-[10px] text-slate-400 leading-snug mt-1 hidden sm:block">
                Pioneering thoughtful residential development across Hyderabad.
              </p>
            </div>

            <div className="p-2 sm:p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-xs">
              <div className="font-display text-lg sm:text-2xl font-bold text-white tracking-tight">
                1000+
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-200 leading-tight mt-0.5">
                Residences Built
              </div>
              <p className="text-[10px] text-slate-400 leading-snug mt-1 hidden sm:block">
                High-quality gated communities engineered to last.
              </p>
            </div>

            <div className="p-2 sm:p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-xs">
              <div className="font-display text-lg sm:text-2xl font-bold text-white tracking-tight">
                1200+
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-200 leading-tight mt-0.5">
                Happy Families
              </div>
              <p className="text-[10px] text-slate-400 leading-snug mt-1 hidden sm:block">
                Thriving neighbourhoods built on long-term satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reusable Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        modalType="quick"
        projectContext="Sunshine Infra — Corporate Priority Desk"
        source="Sunshine Infra - Home Hero: Direct Priority Desk"
        customTitle="Connect with Sunshine Infra"
        customSubtitle="Tell us your preferences to receive project updates, master plans, and pricing."
      />
    </section>
  )
}

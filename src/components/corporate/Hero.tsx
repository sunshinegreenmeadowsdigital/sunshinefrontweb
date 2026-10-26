import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare, ShieldCheck, Award, Sparkles } from 'lucide-react'
import { projectRoutes } from '@/data/routes'
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
        {/* Balanced twilight lighting: soft directional vignette so the project visual remains clearly visible and vibrant */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/25 via-55% to-transparent pointer-events-none" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/20 via-40% to-transparent pointer-events-none" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-black/15 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-4 sm:py-8">
        <div className="max-w-3xl space-y-3 sm:space-y-4">
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

          {/* High-Converting Flagship Callout: Instant Discovery for Sunshine Green Meadows */}
          <Link
            to={projectRoutes.greenMeadows}
            className="group relative flex items-center justify-between gap-3 p-2.5 sm:p-3 rounded-2xl bg-gradient-to-r from-emerald-950/85 via-slate-900/85 to-slate-950/85 border border-emerald-500/40 hover:border-emerald-400 backdrop-blur-md shadow-xl hover:shadow-emerald-500/20 transition-all cursor-pointer max-w-xl"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-emerald-300">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>Ongoing Project</span>
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-amber-300 uppercase">
                    90% Complete — Ready to Move In
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-display font-bold text-white group-hover:text-emerald-300 transition-colors truncate">
                  Sunshine Green Meadows — 2 & 3 BHK @ Bowrampet
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500 group-hover:bg-emerald-400 text-white shrink-0 shadow-md">
              <span className="hidden sm:inline">Explore Project</span>
              <span className="sm:hidden">View</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          {/* Primary & Secondary CTAs */}
          <div className="pt-0.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3.5">
            <a
              href="#ongoing-project"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#E06B2D] hover:bg-[#F27C3E] text-white shadow-lg shadow-[#E06B2D]/25 transition-all cursor-pointer"
            >
              <span>Explore All Projects</span>
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

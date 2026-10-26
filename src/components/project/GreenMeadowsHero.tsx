import React from 'react'
import { siteConfig } from '@/config/site'
import { ArrowDown, Calendar, ShieldCheck, MapPin, Building, Sparkles } from 'lucide-react'

export interface GreenMeadowsHeroProps {
  onOpenModal: (typeOrOptions?: 'quick' | 'enquiry' | 'brochure' | 'visit' | {
    type?: 'quick' | 'enquiry' | 'brochure' | 'visit'
    source?: string
    title?: string
    subtitle?: string
    defaultHomeType?: string
  }) => void
}

export const GreenMeadowsHero: React.FC<GreenMeadowsHeroProps> = ({ onOpenModal }) => {
  return (
    <section
      id="overview"
      className="relative min-h-[100dvh] md:min-h-screen flex items-end md:items-center justify-center overflow-hidden bg-slate-950 pt-20 sm:pt-28 pb-6 sm:pb-16"
    >
      {/* Background Aerial Render - Dedicated Mobile Portrait (9:16) & Desktop Landscape (16:9) Night Views */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/assets/projects/green-meadows/elevations/aerial-night-mobile.jpg"
          />
          <img
            src="/assets/projects/green-meadows/elevations/aerial-night.jpg"
            alt="Sunshine Green Meadows Bowrampet Master Aerial Night View"
            className="w-full h-full object-cover object-top md:object-center transition-transform duration-1000 ease-out"
            fetchPriority="high"
          />
        </picture>
        {/* Full-bleed twilight dark shading: darkens the entire background image evenly so text sits directly on the visual without any separate box */}
        <div className="absolute inset-0 bg-slate-950/45 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 via-50% to-slate-950/30 md:hidden pointer-events-none" />
        {/* Desktop Luxury Twilight Gradients */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-slate-950/60 pointer-events-none" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4 sm:py-10">
        <div className="max-w-3xl space-y-3 sm:space-y-6">
          {/* Eyebrow & Credibility Pill */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider sm:tracking-widest text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Sunshine Infra</span>
            </span>

            <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs text-slate-200 font-mono shadow-xs">
              <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
              <span>TS RERA ({siteConfig.greenMeadows.reraNumber})</span>
            </span>

            <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs text-slate-200 font-mono shadow-xs">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
              <span>HMDA</span>
            </span>

            <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1.5 rounded-full bg-emerald-500/25 backdrop-blur-md border border-emerald-400/40 text-[10px] sm:text-xs text-emerald-300 font-mono font-bold">
              <span>90% Complete</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-0.5 sm:py-1.5 rounded-full bg-emerald-500 text-white font-mono font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>Ready to Move In</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            A Greener Way to <br />
            <span className="italic font-normal text-emerald-400">Come Home.</span>
          </h1>

          {/* Supporting Copy - Compact 2 lines */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed max-w-2xl font-normal line-clamp-2 sm:line-clamp-none">
            Discover thoughtfully designed 2 & 3 BHK residences at Sunshine Green Meadows, Bowrampet, Hyderabad — 90% complete and ready to move in soon.
          </p>

          {/* Concise 4-Column Project Highlight Chips (1 compact row on mobile) */}
          <div className="grid grid-cols-4 gap-1.5 sm:gap-3 py-0.5 sm:py-1 max-w-2xl">
            <div className="p-1.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center shadow-xs">
              <div className="font-display text-sm sm:text-xl font-bold text-white">4</div>
              <div className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-slate-300">Blocks</div>
            </div>
            <div className="p-1.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center shadow-xs">
              <div className="font-display text-sm sm:text-xl font-bold text-white">236</div>
              <div className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-slate-300">Units</div>
            </div>
            <div className="p-1.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center shadow-xs">
              <div className="font-display text-sm sm:text-xl font-bold text-emerald-400">2 & 3</div>
              <div className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-slate-300">BHK</div>
            </div>
            <div className="p-1.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center shadow-xs">
              <div className="font-display text-sm sm:text-xl font-bold text-white">~10k Sft</div>
              <div className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-slate-300">Club</div>
            </div>
          </div>

          {/* Actions: Primary CTA: Book a Site Visit, Secondary CTA: Explore Plans */}
          <div className="pt-1.5 sm:pt-2 flex flex-row items-center gap-2 sm:gap-4">
            <button
              onClick={() =>
                onOpenModal({
                  type: 'quick',
                  source: 'Sunshine Green Meadows - Hero: Book a Site Visit Button',
                  title: 'Book a Guided Site Visit',
                  subtitle: 'Select your preferences below to schedule a private walkthrough of Sunshine Green Meadows.',
                })
              }
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider sm:tracking-widest bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 transition-all transform active:scale-95 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Book Visit</span>
            </button>

            <a
              href="#plans"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider sm:tracking-widest text-white bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white backdrop-blur-sm transition-all shadow-xs cursor-pointer"
            >
              <span>Floor Plans</span>
              <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
            </a>
          </div>

          {/* Location Proximity Note */}
          <div className="pt-2.5 sm:pt-6 border-t border-white/15 flex items-center justify-between sm:justify-start gap-2 sm:gap-4 text-[10px] sm:text-xs text-slate-300">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
              <span className="text-[10px] sm:text-xs">Bowrampet, DPS Road</span>
            </div>
            <span className="text-white/20">•</span>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Building className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
              <span className="text-[10px] sm:text-xs">5 Mins to ORR Exit 4</span>
            </div>
          </div>
        </div>
      </div>

      {/* Unobtrusive Scroll Down Indicator - Desktop Only */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-slate-400 hover:text-emerald-400 transition-colors pointer-events-none">
        <span className="text-[10px]">Scroll Down</span>
        <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-emerald-400 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

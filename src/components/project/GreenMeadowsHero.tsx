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
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-white pt-24 sm:pt-28 pb-12 sm:pb-16"
    >
      {/* Background Aerial Render - Dramatic Luxury Night View */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/projects/green-meadows/elevations/aerial-night.jpg"
          alt="Sunshine Green Meadows Bowrampet Master Elevation Night View"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          fetchPriority="high"
        />
        {/* Deep luxury twilight gradients to let the architectural lighting pop while keeping content legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-10">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          {/* Eyebrow & Credibility Pill */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider sm:tracking-widest text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Sunshine Infra Presents</span>
            </span>

            <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs text-slate-200 font-mono shadow-xs">
              <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
              <span>TS RERA ({siteConfig.greenMeadows.reraNumber})</span>
            </span>

            <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs text-slate-200 font-mono shadow-xs">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
              <span>HMDA Approved</span>
            </span>

            <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs text-emerald-300 font-mono">
              <span>2 & 3 BHK</span>
            </span>

            <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-emerald-500/25 backdrop-blur-md border border-emerald-400/40 text-[10px] sm:text-xs text-emerald-300 font-mono font-bold">
              <span>90% Complete</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
            A Greener Way to <br />
            <span className="italic font-normal text-emerald-400">Come Home.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed max-w-2xl font-normal">
            Discover thoughtfully designed 2 & 3 BHK residences at Sunshine Green Meadows, Bowrampet, Hyderabad — where everyday comfort meets a more considered way of living.
          </p>

          {/* Concise Project Highlight Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 py-1 max-w-2xl">
            <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center shadow-xs">
              <div className="font-display text-lg sm:text-xl font-bold text-white">4</div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-slate-300">Blocks</div>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center shadow-xs">
              <div className="font-display text-lg sm:text-xl font-bold text-white">236</div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-slate-300">Apartments</div>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center shadow-xs">
              <div className="font-display text-lg sm:text-xl font-bold text-emerald-400">2 & 3</div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-slate-300">BHK Suites</div>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center shadow-xs">
              <div className="font-display text-lg sm:text-xl font-bold text-white">~10,000 Sft</div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-slate-300">Clubhouse</div>
            </div>
          </div>

          {/* Actions: Primary CTA: Book a Site Visit, Secondary CTA: Explore the Project */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              onClick={() =>
                onOpenModal({
                  type: 'quick',
                  source: 'Sunshine Green Meadows - Hero: Book a Site Visit Button',
                  title: 'Book a Guided Site Visit',
                  subtitle: 'Select your preferences below to schedule a private walkthrough of Sunshine Green Meadows.',
                })
              }
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider sm:tracking-widest bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Site Visit</span>
            </button>

            <a
              href="#plans"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider sm:tracking-widest text-white bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white backdrop-blur-sm transition-all shadow-xs cursor-pointer"
            >
              <span>Explore Floor Plans</span>
              <ArrowDown className="w-4 h-4 text-emerald-400" />
            </a>
          </div>

          {/* Location Proximity Note */}
          <div className="pt-4 sm:pt-6 border-t border-white/15 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="text-[11px] sm:text-xs">Bowrampet, DPS Road, Hyderabad</span>
            </div>
            <span className="text-white/20">•</span>
            <div className="flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="text-[11px] sm:text-xs">5 Mins to ORR Exit 4</span>
            </div>
          </div>
        </div>
      </div>

      {/* Unobtrusive Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-slate-400 hover:text-emerald-400 transition-colors">
        <span className="text-[10px]">Scroll Down</span>
        <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-emerald-400 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

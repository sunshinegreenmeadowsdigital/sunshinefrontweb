import React from 'react'
import { Link } from 'react-router-dom'
import { projectRoutes } from '@/data/routes'
import { siteConfig } from '@/config/site'
import { ArrowRight, MapPin, ShieldCheck, Check, Building, Sparkles, Compass } from 'lucide-react'

export const OngoingProjectSection: React.FC = () => {
  return (
    <section id="ongoing-project" className="py-16 sm:py-24 lg:py-28 bg-gradient-to-b from-white via-slate-50/80 to-white relative overflow-hidden border-t border-slate-200/80">
      {/* Subtle luxury ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-tr from-emerald-500/10 via-teal-500/5 to-transparent blur-[140px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-5 sm:gap-6">
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Flagship Ongoing Residences</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider bg-emerald-600 text-white shadow-sm shadow-emerald-600/30">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>90% Complete • Ready to Move In</span>
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Sunshine Green Meadows, <span className="italic font-normal text-emerald-600">Bowrampet</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              A private 2.87-acre botanical enclave of 2 & 3 BHK residences, situated on DPS Road just 5 minutes from ORR Exit 4.
            </p>
          </div>

          <Link
            to={projectRoutes.greenMeadows}
            className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/35 transition-all self-start md:self-end active:scale-95 cursor-pointer"
          >
            <span>Explore Green Meadows</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Project Showcase Feature Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_-15px_rgba(16,185,129,0.12)] transition-all duration-500">
          {/* Visual Showcase */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 aspect-[16/10] group shadow-sm">
              <img
                src="/assets/projects/green-meadows/elevations/aerial.jpg"
                alt="Sunshine Green Meadows Architectural Master View"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* RERA Badge top left */}
              <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-semibold bg-white/95 backdrop-blur-md text-emerald-800 border border-slate-200 shadow-md">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>TS RERA: {siteConfig.greenMeadows.reraNumber}</span>
              </div>

              {/* Location & Ready status bottom bar */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-xs text-white">
                <div className="flex items-center gap-1.5 font-medium text-slate-100">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-[11px] sm:text-xs truncate">Bowrampet, DPS Road, Hyderabad</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs shrink-0">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-bold uppercase tracking-wider shadow-sm">
                    Ready to Move In
                  </span>
                </div>
              </div>
            </div>

            {/* Architectural Highlights Strip */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center shrink-0 shadow-xs">
                  <Building className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 font-display">Grand Clubhouse</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-mono">~10,000 Sft. 3-Level Luxury</div>
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center shrink-0 shadow-xs">
                  <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 font-display">100% Vaastu</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-mono">Zero Common Wall Privacy</div>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications & Key Details */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-emerald-700 font-bold">
                Project Architecture & Inventory
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 leading-snug">
                Designed for Space, Light & Enduring Value
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Four elegantly planned towers surrounded by lush reserve greens, featuring expansive corner balconies and high-spec club amenities.
              </p>
            </div>

            {/* Verified Architectural Metric Ribbon */}
            <div className="grid grid-cols-3 gap-2 p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center shadow-xs">
              <div>
                <div className="font-display text-xl sm:text-2xl font-bold text-slate-900">4</div>
                <div className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-slate-500 mt-0.5">Blocks</div>
              </div>
              <div className="border-x border-slate-200">
                <div className="font-display text-xl sm:text-2xl font-bold text-slate-900">236</div>
                <div className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-slate-500 mt-0.5">Apartments</div>
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl font-bold text-emerald-600">2 & 3</div>
                <div className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-slate-500 mt-0.5">BHK Units</div>
              </div>
            </div>

            {/* Curated Luxury Features List */}
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2.5 font-bold text-emerald-900 bg-emerald-50/90 px-3 py-2 rounded-xl border border-emerald-200/80">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>90% Construction Complete — Handover Imminent</span>
              </li>
              <li className="flex items-center gap-2.5 px-1">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Rooftop swimming pool & air-conditioned fitness club</span>
              </li>
              <li className="flex items-center gap-2.5 px-1">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>5 minutes to Outer Ring Road (ORR) Exit No. 4</span>
              </li>
              <li className="flex items-center gap-2.5 px-1">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>HMDA & TS RERA legally approved residential land</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                to={projectRoutes.greenMeadows}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full text-xs font-bold uppercase tracking-wider bg-white border-2 border-emerald-600 text-emerald-800 hover:bg-emerald-50 hover:border-emerald-700 shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span>View Floor Plans & Pricing Details</span>
                <ArrowRight className="w-4 h-4 text-emerald-600" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

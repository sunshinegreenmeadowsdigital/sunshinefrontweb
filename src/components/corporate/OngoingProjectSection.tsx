import React from 'react'
import { Link } from 'react-router-dom'
import { projectRoutes } from '@/data/routes'
import { siteConfig } from '@/config/site'
import { ArrowRight, MapPin, ShieldCheck, Check, Trees, Building, Sparkles } from 'lucide-react'

export const OngoingProjectSection: React.FC = () => {
  return (
    <section id="ongoing-project" className="py-12 sm:py-20 lg:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div className="space-y-1.5 sm:space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
              <Trees className="w-3.5 h-3.5" />
              <span>Flagship Ongoing Development</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Sunshine Green Meadows
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
              Gated luxury 2 & 3 BHK apartments at Bowrampet, surrounded by natural greens and 5 minutes from ORR Exit 4.
            </p>
          </div>

          <Link
            to={projectRoutes.greenMeadows}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs hover:shadow-md transition-all self-start md:self-end"
          >
            <span>Discover Green Meadows</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Project Feature Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-9 shadow-md shadow-slate-200/50">
          {/* Visual Showcase */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 aspect-[16/10] group">
              <img
                src="/assets/projects/green-meadows/elevations/aerial.jpg"
                alt="Sunshine Green Meadows Architectural Perspective"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-mono font-semibold bg-white/90 backdrop-blur-md text-emerald-800 border border-slate-200 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>TS RERA: {siteConfig.greenMeadows.reraNumber}</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-[11px] sm:text-xs text-white">
                <div className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Bowrampet, Medchal, Hyderabad</span>
                </div>
                <div className="font-mono text-emerald-300 font-semibold text-[10px] sm:text-xs">
                  90% Complete • HMDA Approved
                </div>
              </div>
            </div>

            {/* Thumbnail Highlights */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center shrink-0">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-900">Grand Clubhouse</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500">~10,000 Sft. Leisure</div>
                </div>
              </div>

              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-900">100% Vaastu</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500">Cross-Ventilated</div>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications & Key Details */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-emerald-700 font-semibold">
                Project Architecture
              </span>
              <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 leading-snug">
                Balanced Living Around Nature & Space
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
                Four towers with spacious 2 & 3 BHK residences, next to reserve greens and minutes from top international schools.
              </p>
            </div>

            {/* Verified Metric Ribbon */}
            <div className="grid grid-cols-3 gap-2 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
              <div>
                <div className="font-display text-lg sm:text-2xl font-bold text-slate-900">4</div>
                <div className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-slate-500 mt-0.5">Blocks</div>
              </div>
              <div className="border-x border-slate-200">
                <div className="font-display text-lg sm:text-2xl font-bold text-slate-900">236</div>
                <div className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-slate-500 mt-0.5">Apartments</div>
              </div>
              <div>
                <div className="font-display text-lg sm:text-2xl font-bold text-emerald-600">2 & 3</div>
                <div className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-slate-500 mt-0.5">BHK Units</div>
              </div>
            </div>

            {/* Highlighted Amenities List */}
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Rooftop swimming pool & AC fitness gymnasium</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>5 minutes to Outer Ring Road (ORR) Exit No. 4</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>100-feet proposed master access road connectivity</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>No common walls with expansive corner balconies</span>
              </li>
            </ul>

            <div className="pt-1">
              <Link
                to={projectRoutes.greenMeadows}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-5 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-600 text-emerald-700 hover:bg-emerald-50 transition-colors"
              >
                <span>View Master Layout & Floor Plans</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { Building2, Home, Sparkles, Map } from 'lucide-react'

export const ProjectStatsRibbon: React.FC = () => {
  return (
    <section className="relative bg-slate-50 border-y border-slate-200 py-6 sm:py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200 text-center">
          {/* Stat 1: Total Land Extent */}
          <div className="flex flex-col items-center justify-center p-2.5 pt-4 md:pt-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-100/70 flex items-center justify-center text-emerald-700 mb-1.5">
              <Map className="w-3.5 h-3.5" />
            </div>
            <div className="font-display text-lg sm:text-2xl font-bold text-slate-900">
              2.87 Acres
            </div>
            <div className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-slate-600 mt-0.5">
              Total Land Parcel
            </div>
            <div className="text-[9px] sm:text-[10px] text-emerald-700 font-mono mt-0.5 font-medium">
              Sanctioned Layout
            </div>
          </div>

          {/* Stat 2: Blocks */}
          <div className="flex flex-col items-center justify-center p-2.5 pt-4 md:pt-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-100/70 flex items-center justify-center text-emerald-700 mb-1.5">
              <Building2 className="w-3.5 h-3.5" />
            </div>
            <div className="font-display text-lg sm:text-2xl font-bold text-slate-900">
              4 Blocks
            </div>
            <div className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-slate-600 mt-0.5">
              Residential Towers
            </div>
            <div className="text-[9px] sm:text-[10px] text-emerald-700 font-mono mt-0.5">
              Blocks A, B, C & D
            </div>
          </div>

          {/* Stat 3: Total Apartments */}
          <div className="flex flex-col items-center justify-center p-2.5 pt-4 md:pt-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-100/70 flex items-center justify-center text-emerald-700 mb-1.5">
              <Home className="w-3.5 h-3.5" />
            </div>
            <div className="font-display text-lg sm:text-2xl font-bold text-slate-900">
              236 Units
            </div>
            <div className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-slate-600 mt-0.5">
              Lifestyle Residences
            </div>
            <div className="text-[9px] sm:text-[10px] text-emerald-700 font-mono mt-0.5">
              Gated Master Community
            </div>
          </div>

          {/* Stat 4: Configurations */}
          <div className="flex flex-col items-center justify-center p-2.5 pt-4 md:pt-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-100/70 flex items-center justify-center text-emerald-700 mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div className="font-display text-lg sm:text-2xl font-bold text-emerald-700">
              2 & 3 BHK
            </div>
            <div className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-slate-600 mt-0.5">
              Apartment Choices
            </div>
            <div className="text-[9px] sm:text-[10px] text-emerald-700 font-mono mt-0.5 font-semibold">
              100% Vaastu Compliant
            </div>
          </div>

          {/* Stat 5: Clubhouse */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center p-2.5 pt-4 md:pt-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-100/70 flex items-center justify-center text-emerald-700 mb-1.5">
              <Building2 className="w-3.5 h-3.5" />
            </div>
            <div className="font-display text-lg sm:text-2xl font-bold text-slate-900">
              ~10,000 Sft.
            </div>
            <div className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-slate-600 mt-0.5">
              Lifestyle Clubhouse
            </div>
            <div className="text-[9px] sm:text-[10px] text-slate-600 font-mono mt-0.5">
              Gym, Pool, Squash, Yoga
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

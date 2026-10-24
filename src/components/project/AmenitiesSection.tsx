import React, { useState } from 'react'
import { amenityCategories } from '@/data/greenMeadowsData'
import { Check, Dumbbell, Trophy, Trees, ShieldCheck, Sparkles, Building2 } from 'lucide-react'
import { cn } from '@/utils/cn'

export const AmenitiesSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)

  const categoryIcons = [Dumbbell, Trophy, Building2, ShieldCheck]

  return (
    <section id="amenities" className="py-12 sm:py-16 lg:py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div className="space-y-2.5 sm:space-y-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-emerald-700 font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Thoughtful Infrastructure</span>
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Curated Community <br />
              <span className="italic font-normal text-emerald-700">Amenities & Privileges.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
              Engineered for long-term reliability, family recreation, and peace of mind across four purposeful domains.
            </p>
          </div>

          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-xs max-w-xs self-start lg:self-end">
            <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-emerald-700 font-semibold">
              Quality Standards
            </div>
            <div className="text-xs sm:text-sm text-slate-900 font-medium mt-0.5">
              TS RERA Sanctioned Master Plan
            </div>
          </div>
        </div>

        {/* Interactive Categorized Amenities Tabs & Grid */}
        <div className="space-y-5 sm:space-y-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3 overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            {amenityCategories.map((cat, i) => {
              const Icon = categoryIcons[i] || Trees
              const isActive = activeCategoryIndex === i
              return (
                <button
                  key={cat.title}
                  onClick={() => setActiveCategoryIndex(i)}
                  className={cn(
                    'flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all select-none whitespace-nowrap shrink-0',
                    isActive
                      ? 'bg-emerald-600 text-white shadow-md font-bold'
                      : 'bg-white text-slate-700 hover:text-emerald-700 border border-slate-200 hover:border-emerald-500/40 shadow-xs'
                  )}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.title}</span>
                </button>
              )
            })}
          </div>

          {/* Active Category Display */}
          <div className="p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-lg sm:shadow-xl space-y-4 sm:space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-slate-100 pb-3 sm:pb-4">
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                  {amenityCategories[activeCategoryIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  {amenityCategories[activeCategoryIndex].description}
                </p>
              </div>
              <div className="text-[11px] sm:text-xs font-mono text-emerald-700 font-semibold shrink-0">
                Category 0{activeCategoryIndex + 1} of 0{amenityCategories.length}
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3.5 pt-1">
              {amenityCategories[activeCategoryIndex].items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-emerald-500/40 transition-colors shadow-xs"
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-medium text-slate-800 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

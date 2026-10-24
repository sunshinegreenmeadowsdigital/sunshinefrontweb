import React from 'react'
import { siteConfig } from '@/config/site'
import { Building2, Users2, Calendar } from 'lucide-react'

export const StatsSection: React.FC = () => {
  const stats = [
    {
      value: siteConfig.company.experienceYears,
      label: 'Years of Building Trust',
      subtext: 'Pioneering thoughtful residential development across Hyderabad',
      icon: Calendar,
      accent: 'text-[#E06B2D]',
    },
    {
      value: siteConfig.company.unitsDelivered,
      label: 'Residences Brought to Market',
      subtext: 'High-quality apartments and gated communities engineered to last',
      icon: Building2,
      accent: 'text-[#D4A373]',
    },
    {
      value: siteConfig.company.familiesCount,
      label: 'Happy Families',
      subtext: 'Thriving neighbourhoods built on long-term satisfaction and care',
      icon: Users2,
      accent: 'text-emerald-400',
    },
  ]

  return (
    <section className="relative bg-slate-50 border-y border-slate-200/80 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="flex flex-col items-center md:items-start text-center md:text-left pt-5 md:pt-0 md:px-6 first:pt-0 first:px-0"
              >
                <div className="inline-flex p-2.5 rounded-xl bg-white shadow-xs border border-slate-200/90 mb-3">
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.accent}`} />
                </div>
                <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-0.5">
                  {stat.value}
                </div>
                <div className="font-sans font-semibold text-xs sm:text-sm text-slate-800 mb-1">
                  {stat.label}
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed max-w-xs">
                  {stat.subtext}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

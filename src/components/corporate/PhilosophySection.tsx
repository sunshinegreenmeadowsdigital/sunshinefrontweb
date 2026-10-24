import React from 'react'
import { Sparkles, Compass, ShieldCheck, HeartHandshake } from 'lucide-react'

export const PhilosophySection: React.FC = () => {
  const values = [
    {
      num: '01',
      title: 'Leadership',
      desc: 'Pioneering enduring residential spaces with architectural discipline.',
      icon: Compass,
    },
    {
      num: '02',
      title: 'Integrity',
      desc: 'Legal rigor, statutory approvals, and transparent homeowner trust.',
      icon: ShieldCheck,
    },
    {
      num: '03',
      title: 'Customer Focus',
      desc: 'Curated premium finishes, generous light, and 100% Vaastu harmony.',
      icon: HeartHandshake,
    },
  ]

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-slate-50 relative overflow-hidden border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Title Banner */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-1.5 sm:space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-medium uppercase tracking-widest text-[#C28B5B] bg-white border border-slate-200 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Sunshine Standard</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.18]">
            Quality and Care in <span className="italic font-normal text-[#C28B5B]">Every Little Detail.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Creating eco-conscious residences engineered for generational longevity, natural balance, and community living.
          </p>
        </div>

        {/* 3 Core Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <div
                key={i}
                className="relative p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 hover:border-[#E06B2D]/40 transition-all duration-300 group flex flex-col justify-between shadow-xs hover:shadow-lg hover:shadow-slate-200/60"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-slate-300 group-hover:text-[#E06B2D]/50 transition-colors">
                      {v.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#E06B2D] group-hover:bg-[#E06B2D] group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#C28B5B]">
                  <span>Sunshine Principle</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Cinematic Visual Banner with Quote */}
        <div className="mt-10 sm:mt-14 rounded-2xl sm:rounded-3xl overflow-hidden relative border border-slate-200 shadow-md group aspect-[21/9] min-h-[190px] sm:min-h-[230px] flex items-center">
          <img
            src="/assets/projects/hero-3.jpg"
            alt="Sunshine Infra Visionary Architecture"
            className="w-full h-full object-cover absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-950/85" />

          <div className="relative z-10 p-5 sm:p-8 lg:p-10 max-w-2xl">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#E06B2D] font-semibold">
              Vision. Innovation. Quality.
            </span>
            <blockquote className="font-display text-base sm:text-xl lg:text-2xl font-normal text-white mt-1.5 sm:mt-2 italic leading-snug">
              “More than luxury developments, we are building communities that our residents love coming home to every single day.”
            </blockquote>
            <div className="mt-2.5 sm:mt-3 text-[11px] sm:text-xs font-mono text-orange-200">
              — Sunshine Infra Leadership
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

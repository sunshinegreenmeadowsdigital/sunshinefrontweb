import React from 'react'
import { Trees, SunMedium, Wind, ShieldCheck } from 'lucide-react'

export const LifestyleIntro: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Dual Imagery Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl group">
              <img
                src="/assets/projects/green-meadows/gallery/landscape-view.jpg"
                alt="Green Meadows Open Green Spaces"
                className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>

            {/* Inset Living Room Perspective Card */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-64 rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white p-2">
              <img
                src="/assets/projects/green-meadows/gallery/living-view.jpg"
                alt="Green Meadows 3 BHK Living Room Interior"
                className="w-full h-36 object-cover rounded-xl"
                loading="lazy"
              />
              <div className="p-2.5">
                <div className="text-[11px] font-mono uppercase text-emerald-700 font-semibold tracking-wider">
                  Considered Interiors
                </div>
                <div className="text-xs text-slate-800 font-medium mt-0.5">
                  Natural Daylight & Ventilation
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Philosophy Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-700 font-semibold">
                  Lifestyle Philosophy
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-600 text-white shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>90% Complete • Ready to Move In</span>
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.14]">
                Where Natural Tranquility Meets <span className="italic font-normal text-emerald-700">Urban Comfort.</span>
              </h2>
            </div>

            <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed">
              Sunshine Green Meadows is crafted for families who desire more than four walls. Positioned in the rapidly rising Bowrampet corridor, the master layout harmonizes generous open spaces with meticulously planned 2 and 3 BHK homes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2.5 mb-1.5 text-slate-900">
                  <Wind className="w-4 h-4 text-emerald-600 shrink-0" />
                  <h3 className="font-semibold text-sm">Abundant Cross-Ventilation</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Carefully spaced towers allow refreshing seasonal breezes and constant air circulation through every flat.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2.5 mb-1.5 text-slate-900">
                  <SunMedium className="w-4 h-4 text-emerald-600 shrink-0" />
                  <h3 className="font-semibold text-sm">Natural Sunlit Living</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Wide perimeter windows and open corridors invite generous daylight across morning and afternoon hours.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2.5 mb-1.5 text-slate-900">
                  <Trees className="w-4 h-4 text-emerald-600 shrink-0" />
                  <h3 className="font-semibold text-sm">Lush Outdoor Pockets</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Landscaped gardens, pergolas, and walking trails encourage active wellness right on your doorstep.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2.5 mb-1.5 text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <h3 className="font-semibold text-sm">100% Vaastu Discipline</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  East and West facing options structured in precise conformity with time-tested Vaastu architectural principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { Dumbbell, Trophy, Users, Heart, ArrowRight } from 'lucide-react'

export interface ClubhouseShowcaseProps {
  onOpenModal?: (typeOrOptions?: 'quick' | 'enquiry' | 'brochure' | 'visit' | {
    type?: 'quick' | 'enquiry' | 'brochure' | 'visit'
    source?: string
    title?: string
    subtitle?: string
    defaultHomeType?: string
  }) => void
}

export const ClubhouseShowcase: React.FC<ClubhouseShowcaseProps> = ({ onOpenModal }) => {
  return (
    <section id="clubhouse" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Intro */}
        <div className="max-w-3xl mb-8 sm:mb-12 space-y-2.5 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-emerald-700 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>The Architectural Centerpiece</span>
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.15]">
            A ~10,000 Sft. Haven of <br />
            <span className="italic font-normal text-emerald-700">Leisure & Community Life.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
            The social anchor of Green Meadows, bringing fitness, indoor sports, rooftop swimming, and banquet spaces together under one roof.
          </p>
        </div>

        {/* Large Editorial Feature: Big Image with Restrained Floating Editorial Text Panel */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-lg sm:shadow-xl">
          {/* Main Visual: Authentic Clubhouse Render */}
          <div className="relative aspect-[16/10] sm:aspect-[21/9] min-h-[240px] sm:min-h-[380px] lg:min-h-[480px] w-full">
            <img
              src="/assets/projects/green-meadows/elevations/clubhouse.png"
              alt="Sunshine Green Meadows 10,000 Sft. Clubhouse"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            {/* Subtle Gradient Overlays for Readability and Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent" />
          </div>

          {/* Floating Editorial Text Panel */}
          <div className="p-4 sm:p-6 lg:p-8 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-8 lg:max-w-md bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-slate-200 shadow-xl space-y-4 sm:space-y-5">
            <div className="space-y-1.5 sm:space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold">
                Exclusive Resident Privilege
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                Crafted for Body, Mind & Celebration.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From energizing cardio and tranquil yoga to squash and family celebrations, the clubhouse seamlessly elevates everyday life.
              </p>
            </div>

            {/* Curated Lifestyle Amenities Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5 pt-1">
              <div className="flex items-center gap-2 p-2 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200">
                <Dumbbell className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-slate-800">AC Gymnasium</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200">
                <Trophy className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-slate-800">Squash Court</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200">
                <Heart className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-slate-800">Yoga & Meditation</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200">
                <Users className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-slate-800">Multipurpose Hall</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <button
                onClick={() =>
                  onOpenModal?.({
                    type: 'quick',
                    source: 'Sunshine Green Meadows - Clubhouse: Schedule Walkthrough Button',
                    title: 'Schedule a Clubhouse Walkthrough',
                    subtitle: 'Experience the ~10,000 Sft. lifestyle clubhouse and sports amenities firsthand.',
                  })
                }
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-md shadow-emerald-600/20"
              >
                <span>Schedule a Walkthrough</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <div className="text-[10px] sm:text-[11px] font-mono text-slate-500">
                Approx. 10,000 Sft.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

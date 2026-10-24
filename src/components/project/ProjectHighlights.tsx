import React from 'react'
import { Building2, Wind, ShieldCheck, Compass, Activity, Route } from 'lucide-react'

export const ProjectHighlights: React.FC = () => {
  const highlights = [
    {
      title: 'Four Independent Blocks',
      description: 'Structured as Blocks A, B, C, and D, providing spacious separations, privacy, and scenic corridor vistas.',
      icon: Building2,
      tag: 'Verified Plan',
    },
    {
      title: 'Well-Ventilated Living',
      description: 'Generous room proportions and double-sided airflow design ensure naturally cooler interior temperatures.',
      icon: Wind,
      tag: 'Architectural Focus',
    },
    {
      title: 'No Common Walls',
      description: 'Individual apartment layouts offer acoustical seclusion and privacy (*subject to confirmation against final sanction plans).',
      icon: ShieldCheck,
      tag: 'Subject to Sanction',
    },
    {
      title: '100% Vaastu Compliance',
      description: 'Carefully orientated floor plans designed to honor cardinal alignments, kitchen placement, and entryway energy.',
      icon: Compass,
      tag: 'Cultural Rigor',
    },
    {
      title: 'Earthquake-Resistant RCC Frame',
      description: 'Engineered structure designed in accordance with seismic zone safety norms (*as per structural consultant specifications).',
      icon: Activity,
      tag: 'Structural Safety',
    },
    {
      title: 'Proposed 100-Foot Access Road',
      description: 'Planned 100-foot master plan road facilitating smooth vehicular transit (*designated as proposed by urban authorities).',
      icon: Route,
      tag: 'Proposed Road',
    },
  ]

  return (
    <section id="highlights" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-700 font-semibold">
            Engineering & Planning
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
            Project & Architectural Highlights
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Every aspect of Sunshine Green Meadows is engineered to balance everyday privacy, modern safety standards, and neighborhood connectivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-100 group-hover:scale-105 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full font-semibold">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                  <span>Green Meadows Standards</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

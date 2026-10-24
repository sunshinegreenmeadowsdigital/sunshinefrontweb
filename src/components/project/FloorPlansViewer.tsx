import React, { useState, useEffect } from 'react'
import { floorPlansData, type FloorPlanItem } from '@/data/greenMeadowsData'
import { Maximize2, X, Lock, Layers } from 'lucide-react'
import { cn } from '@/utils/cn'

export interface FloorPlansViewerProps {
  onOpenEnquiry: (options?: {
    source: string
    title?: string
    subtitle?: string
    defaultHomeType?: string
  }) => void
}

export const FloorPlansViewer: React.FC<FloorPlansViewerProps> = ({ onOpenEnquiry }) => {
  const [selectedBlock, setSelectedBlock] = useState<'master' | 'block-a' | 'block-b' | 'block-c' | 'block-d'>('master')
  const [planTypeFilter, setPlanTypeFilter] = useState<'Ground Floor' | 'Typical Floor'>('Typical Floor')
  const [activePlan, setActivePlan] = useState<FloorPlanItem>(floorPlansData[0])
  const [lightboxOpen, setLightboxOpen] = useState(false)

  // Update active plan when block or planType changes
  useEffect(() => {
    if (selectedBlock === 'master') {
      const master = floorPlansData.find((p) => p.block === 'master')
      if (master) setActivePlan(master)
    } else {
      const matched = floorPlansData.find(
        (p) => p.block === selectedBlock && p.planType === planTypeFilter
      )
      if (matched) {
        setActivePlan(matched)
      } else {
        // Fallback to any plan for this block
        const fallback = floorPlansData.find((p) => p.block === selectedBlock)
        if (fallback) setActivePlan(fallback)
      }
    }
  }, [selectedBlock, planTypeFilter])

  // Lightbox keyboard ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxOpen) {
        setLightboxOpen(false)
      }
    }
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightboxOpen])

  const blockTabs = [
    { id: 'master', label: 'Master Plan' },
    { id: 'block-a', label: 'Block A' },
    { id: 'block-b', label: 'Block B' },
    { id: 'block-c', label: 'Block C' },
    { id: 'block-d', label: 'Block D' },
  ] as const

  return (
    <section id="plans" className="py-12 sm:py-16 lg:py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-emerald-700 font-semibold flex items-center justify-center gap-2">
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            <span>Floor Plans & Master Layout</span>
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.15]">
            Balancing Nature, Pleasure & <span className="italic font-normal text-emerald-700">Living Space.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Inspect authentic architectural layouts for all four residential blocks. Designed with zero wall sharing (*subject to sanction plans), 100% Vaastu alignment, and optimal corner ventilation.
          </p>
        </div>

        {/* Block Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {blockTabs.map((tab) => {
            const isSelected = selectedBlock === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedBlock(tab.id)}
                className={cn(
                  'px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all select-none whitespace-nowrap shrink-0',
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'bg-slate-50 text-slate-700 hover:text-emerald-700 border border-slate-200 hover:border-emerald-500/40'
                )}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Floor Type Sub-Selector (Ground vs Typical) for Blocks A-D */}
        {selectedBlock !== 'master' && (
          <div className="flex items-center justify-center gap-2 mb-6">
            <button
              onClick={() => setPlanTypeFilter('Typical Floor')}
              className={cn(
                'px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-mono transition-all',
                planTypeFilter === 'Typical Floor'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-300 font-semibold shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200'
              )}
            >
              Typical Floor Plan
            </button>
            <button
              onClick={() => setPlanTypeFilter('Ground Floor')}
              className={cn(
                'px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-mono transition-all',
                planTypeFilter === 'Ground Floor'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-300 font-semibold shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200'
              )}
            >
              Ground Floor Plan
            </button>
          </div>
        )}

        {/* Plan Display Card */}
        <div className="p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-lg sm:shadow-xl space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-slate-100 pb-3 sm:pb-4">
            <div>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-emerald-700 font-semibold">
                {activePlan.planType}
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                {activePlan.title}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {activePlan.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 self-stretch sm:self-auto">
              <button
                onClick={() => setLightboxOpen(true)}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs font-semibold bg-slate-50 text-slate-800 border border-slate-200 hover:border-emerald-500 hover:text-emerald-700 transition-colors"
                title="Enlarge blueprint"
              >
                <Maximize2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Enlarge</span>
              </button>

              <button
                onClick={() =>
                  onOpenEnquiry({
                    source: `Sunshine Green Meadows - Floor Plan Unlock Button (${activePlan.title})`,
                    title: `Unlock ${activePlan.title} & Cost Sheet`,
                    subtitle: `Select your preferences to receive complete dimensions, sanctioned layout, and price breakdown.`,
                    defaultHomeType: activePlan.title.includes('2 BHK') ? '2 BHK' : activePlan.title.includes('3 BHK') ? '3 BHK' : '2 BHK',
                  })
                }
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors cursor-pointer"
              >
                <Lock className="w-3 h-3 text-emerald-200" />
                <span>Unlock Blueprint</span>
              </button>
            </div>
          </div>

          {/* Blueprint Image Container with Zoom Prompt & Unlock Badge */}
          <div
            onClick={() => setLightboxOpen(true)}
            className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 cursor-zoom-in group flex items-center justify-center min-h-[260px] sm:min-h-[420px]"
          >
            <img
              src={activePlan.image}
              alt={activePlan.alt}
              className="w-full max-h-[520px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />

            {/* Curiosity Unlock Floating CTA Pill */}
            <div className="absolute inset-0 flex items-end justify-center pb-4 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onOpenEnquiry({
                    source: `Sunshine Green Meadows - Blueprint Unlock Pill (${activePlan.title})`,
                    title: `Unlock High-Resolution ${activePlan.title}`,
                    subtitle: `Enter your preferences to receive official blueprints and transparent unit pricing directly.`,
                    defaultHomeType: activePlan.title.includes('2 BHK') ? '2 BHK' : activePlan.title.includes('3 BHK') ? '3 BHK' : '2 BHK',
                  })
                }}
                className="pointer-events-auto inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 hover:bg-white text-slate-900 shadow-xl border border-slate-200/80 backdrop-blur-md transform hover:scale-105 transition-all cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Unlock Full Blueprint & Dimensions</span>
              </button>
            </div>

            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-[11px] font-mono text-emerald-700 border border-slate-200 flex items-center gap-1 shadow-xs font-semibold">
              <Maximize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Enlarge</span>
            </div>
          </div>

          {/* Configuration Enquiry Bar */}
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900">
                Require custom unit carpet areas or Vaastu guidance?
              </div>
              <div className="text-[11px] sm:text-xs text-slate-600">
                Our architectural team can walk you through East & West entrance options for {activePlan.title}.
              </div>
            </div>
            <button
              onClick={() =>
                onOpenEnquiry({
                  source: `Sunshine Green Meadows - Consult Architect Button (${activePlan.title})`,
                  title: `Consult an Architect for ${activePlan.title}`,
                  subtitle: `Connect with our planning team for customized dimensions and Vaastu floor orientation.`,
                  defaultHomeType: activePlan.title.includes('2 BHK') ? '2 BHK' : activePlan.title.includes('3 BHK') ? '3 BHK' : '2 BHK',
                })
              }
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-emerald-600 text-white shrink-0 transition-colors shadow-xs cursor-pointer"
            >
              <span>Consult an Architect</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute top-4 right-4 sm:top-5 sm:right-5 flex items-center gap-2 sm:gap-3 z-10">
            <button
              onClick={() => {
                setLightboxOpen(false)
                onOpenEnquiry({
                  source: `Sunshine Green Meadows - Lightbox Blueprint Unlock (${activePlan.title})`,
                  title: `Unlock ${activePlan.title} & Cost Sheet`,
                  subtitle: `Select your preferences to receive complete dimensions, sanctioned layout, and price breakdown.`,
                  defaultHomeType: activePlan.title.includes('2 BHK') ? '2 BHK' : activePlan.title.includes('3 BHK') ? '3 BHK' : '2 BHK',
                })
              }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white shadow-md cursor-pointer"
            >
              Unlock Plan
            </button>
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2 sm:p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          <div className="w-full h-full max-w-6xl max-h-[85dvh] flex flex-col items-center justify-center">
            <img
              src={activePlan.image}
              alt={activePlan.alt}
              className="max-w-full max-h-full object-contain rounded-xl"
            />
            <div className="mt-3 text-center">
              <span className="font-display font-bold text-base sm:text-lg text-white">
                {activePlan.title}
              </span>
              <p className="text-xs text-slate-300">{activePlan.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

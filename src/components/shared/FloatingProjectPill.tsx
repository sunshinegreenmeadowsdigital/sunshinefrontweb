import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { projectRoutes } from '@/data/routes'
import { ArrowRight, X, Sparkles } from 'lucide-react'

export const FloatingProjectPill: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const location = useLocation()

  // Only display on corporate pages (not on the project microsite itself)
  const isProjectPage = location.pathname.startsWith('/sunshine-green-meadows')

  useEffect(() => {
    if (isProjectPage || dismissed) {
      setVisible(false)
      return
    }

    // Gentle delay to slide in after the hero loads
    const timer = setTimeout(() => {
      setVisible(true)
    }, 1800)

    return () => clearTimeout(timer)
  }, [isProjectPage, dismissed, location.pathname])

  if (isProjectPage || dismissed || !visible) {
    return null
  }

  return (
    <aside
      aria-label="Ongoing Flagship Development Announcement"
      className="fixed z-40 bottom-20 sm:bottom-6 right-3 sm:right-6 max-w-[calc(100vw-1.5rem)] sm:max-w-md animate-in fade-in slide-in-from-bottom-5 duration-500"
    >
      <div className="relative group bg-slate-950/90 hover:bg-slate-950 text-white p-3 sm:p-3.5 rounded-2xl border border-emerald-500/40 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:shadow-emerald-500/20 hover:border-emerald-400">
        {/* Glowing aura */}
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emerald-500/30 to-amber-500/30 opacity-75 blur-sm -z-10 group-hover:opacity-100 transition-opacity" />

        {/* Dismiss Button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setDismissed(true)
          }}
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-800 text-slate-300 hover:text-white border border-slate-700 flex items-center justify-center text-xs shadow-md cursor-pointer transition-colors"
          aria-label="Dismiss project alert"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <Link
          to={projectRoutes.greenMeadows}
          className="flex items-center gap-3 sm:gap-3.5"
        >
          {/* Mini Thumbnail with Live Pulse */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shrink-0 border border-white/20">
            <img
              src="/assets/projects/green-meadows/elevations/aerial-night.jpg"
              alt="Sunshine Green Meadows Luxury Apartments Bowrampet"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <span className="absolute top-1 left-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
          </div>

          {/* Project Details */}
          <div className="flex-1 min-w-0 pr-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/70 px-1.5 py-0.5 rounded border border-emerald-500/30">
                <Sparkles className="w-2.5 h-2.5" />
                <span>Ongoing Flagship</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono font-bold text-amber-300 uppercase tracking-wider bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-500/30">
                90% Complete
              </span>
            </div>

            <div className="font-display text-xs sm:text-sm font-bold text-white truncate mt-0.5 group-hover:text-emerald-300 transition-colors">
              Sunshine Green Meadows
            </div>

            <div className="text-[10px] sm:text-xs text-slate-300 truncate font-sans">
              2 & 3 BHK @ Bowrampet • Ready to Move In
            </div>
          </div>

          {/* Action Arrow */}
          <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 group-hover:bg-emerald-400 group-hover:translate-x-0.5 transition-all shadow-md shadow-emerald-500/30">
            <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      </div>
    </aside>
  )
}

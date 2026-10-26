import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { projectRoutes } from '@/data/routes'
import { X } from 'lucide-react'

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
    }, 1500)

    return () => clearTimeout(timer)
  }, [isProjectPage, dismissed, location.pathname])

  if (isProjectPage || dismissed || !visible) {
    return null
  }

  return (
    <aside
      aria-label="Ongoing Flagship Project"
      className="fixed z-40 bottom-20 sm:bottom-6 right-3 sm:right-6 animate-in fade-in slide-in-from-bottom-3 duration-500 select-none"
    >
      <div className="relative group">
        {/* Unobtrusive Dismiss 'X' Button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setDismissed(true)
          }}
          className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-slate-900 text-slate-300 hover:text-white border border-slate-700 hover:border-emerald-400 flex items-center justify-center text-[10px] shadow-lg z-20 cursor-pointer transition-colors"
          aria-label="Close project shortcut"
        >
          <X className="w-3 h-3" />
        </button>

        {/* Small, Compact Square-Style Floating Card */}
        <Link
          to={projectRoutes.greenMeadows}
          className="flex flex-col items-center text-center p-2 rounded-2xl bg-slate-950/90 hover:bg-slate-900 border border-emerald-500/50 hover:border-emerald-400 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 w-[96px] sm:w-[108px] group cursor-pointer"
        >
          {/* Glowing Aura Effect */}
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emerald-500/30 to-teal-500/30 opacity-70 blur-sm -z-10 group-hover:opacity-100 transition-opacity" />

          {/* Radar Pulse & Ongoing Tag */}
          <div className="flex items-center gap-1 mb-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-400">
              Ongoing
            </span>
          </div>

          {/* Mini Project Thumbnail */}
          <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/20 relative my-0.5 shadow-sm">
            <img
              src="/assets/projects/green-meadows/elevations/aerial-night.jpg"
              alt="Sunshine Green Meadows"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <span className="absolute bottom-0 inset-x-0 bg-emerald-950/90 text-emerald-300 text-[8px] font-mono font-bold text-center py-0.5 leading-none">
              90% Ready
            </span>
          </div>

          {/* Project Title */}
          <div className="font-display text-[11px] font-bold text-white leading-tight mt-1 group-hover:text-emerald-300 transition-colors line-clamp-1">
            Green Meadows
          </div>

          {/* Configuration */}
          <div className="text-[9px] font-mono font-semibold text-emerald-400 mt-0.5 tracking-wide">
            2 & 3 BHK
          </div>
        </Link>
      </div>
    </aside>
  )
}

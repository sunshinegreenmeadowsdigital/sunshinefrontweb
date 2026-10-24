import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Total preloader duration: 1.4s for an elegant, snappy first impression
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="sunshine-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden select-none"
        >
          {/* Ambient Warm Sunburst Aura */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.9, 1.15, 1], opacity: [0.3, 0.6, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#E06B2D]/20 via-[#D4A373]/15 to-transparent blur-3xl pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center text-center px-4">
            {/* Logo Rising Up Animation */}
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6"
            >
              {/* Subtle radiant ring behind the logo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.25, opacity: 0.4 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="absolute -inset-4 rounded-full bg-radial from-[#E06B2D]/25 via-transparent to-transparent blur-md"
              />

              <img
                src="/assets/branding/sunshine-logo-dark.png"
                alt="Sunshine Infra"
                className="h-16 sm:h-20 w-auto object-contain filter drop-shadow-sm"
                onError={(e) => {
                  // Fallback if image fails to render
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    const fallback = document.createElement('div')
                    fallback.className = 'font-display text-3xl font-bold tracking-tight text-slate-900'
                    fallback.innerHTML = 'SUNSHINE <span style="color:#E06B2D">INFRA</span>'
                    parent.appendChild(fallback)
                  }
                }}
              />
            </motion.div>

            {/* Editorial Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="space-y-1.5"
            >
              <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#E06B2D] font-bold">
                <Sparkles className="w-3 h-3 text-[#E06B2D] animate-spin-slow" />
                <span>Luxury Residences • Hyderabad</span>
              </div>
              <p className="text-xs text-slate-500 font-sans tracking-wide">
                Crafting Architectural Landmarks
              </p>
            </motion.div>

            {/* Architectural Minimal Progress Bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '140px' }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-8 h-[2px] bg-slate-100 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  repeat: Infinity,
                  duration: 1.0,
                  ease: 'easeInOut',
                }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#E06B2D] to-transparent"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

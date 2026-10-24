import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/utils/cn'

export const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation()
  const [isVisible, setIsVisible] = useState(false)

  // 1. Automatically scroll to top on every route change (unless clicking an anchor hash link)
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    } else {
      // If there's an anchor hash (e.g. #amenities, #plans), scroll smoothly to that element
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [pathname, hash])

  // 2. Track scroll distance to show/hide the floating button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      aria-label="Scroll to top of page"
      className={cn(
        'fixed bottom-20 md:bottom-8 right-5 sm:right-8 z-30 p-3 rounded-full shadow-xl border border-slate-200/80 bg-white/95 hover:bg-white text-slate-800 hover:text-[var(--color-accent-primary,#E06B2D)] backdrop-blur-md transition-all duration-300 transform cursor-pointer',
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
      )}
    >
      <ArrowUp className="w-5 h-5 stroke-[2.2]" />
    </button>
  )
}

import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { siteConfig } from '@/config/site'
import { corporateRoutes, projectRoutes } from '@/data/routes'
import { Phone, Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react'
import { cn } from '@/utils/cn'
import { EnquiryModal } from './EnquiryModal'

export interface NavigationProps {
  theme?: 'corporate' | 'meadows'
}

export const Navigation: React.FC<NavigationProps> = ({ theme = 'corporate' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false)
  const location = useLocation()

  const isMeadows = theme === 'meadows'

  const [logoError, setLogoError] = useState(false)

  // Scroll detection for transparent-to-dark transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-2 sm:py-2.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-2.5 sm:py-3'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-4">
          {/* Logo & Brand Identity */}
          <div className="flex items-center shrink-0">
            <Link
              to="/"
              className="flex items-center group focus-visible:outline-none"
              aria-label="Sunshine Infra Home"
            >
              {!logoError ? (
                <img
                  src="/assets/branding/sunshine-logo-dark.png"
                  alt="Sunshine Infra"
                  className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="flex flex-col">
                  <span className="font-display font-bold text-base sm:text-lg tracking-wider text-slate-900 group-hover:text-[#E06B2D] transition-colors leading-tight">
                    SUNSHINE<span className="text-[#E06B2D]">.</span>INFRA
                  </span>
                  <span className="text-[8px] uppercase font-mono tracking-widest text-slate-500">
                    {isMeadows ? 'Green Meadows Project' : 'Enshining Lifestyles'}
                  </span>
                </div>
              )}
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Main Navigation">
            {corporateRoutes.map((route) => {
              const isActive = location.pathname === route.path
              const isOngoing = route.path === '/ongoing-project'

              return (
                <Link
                  key={route.path}
                  to={route.path}
                  className={cn(
                    'text-xs xl:text-sm font-medium transition-colors hover:text-[#E06B2D] relative py-1 whitespace-nowrap inline-flex items-center gap-1.5',
                    isActive
                      ? 'text-[#E06B2D] font-bold'
                      : 'text-slate-700'
                  )}
                >
                  <span>{route.label}</span>
                  {isOngoing && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" title="Ongoing: Green Meadows" />
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E06B2D] rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Actions: Phone & Enquire Now */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={`tel:${siteConfig.contact.primaryPhoneTel}`}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-[#E06B2D] transition-colors whitespace-nowrap"
              aria-label={`Call sales at ${siteConfig.contact.primaryPhoneFormatted}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#E06B2D]" />
              <span>{siteConfig.contact.primaryPhoneFormatted}</span>
            </a>

            <button
              onClick={() => setEnquiryModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E06B2D] hover:bg-[#F27C3E] text-white shadow-xs hover:shadow-md transition-all whitespace-nowrap cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Enquire Now</span>
            </button>

            {/* Mobile Nav Toggler */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-5 space-y-3 animate-in slide-in-from-top-3 duration-200 shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {corporateRoutes.map((route) => {
                const isActive = location.pathname === route.path
                return (
                  <Link
                    key={route.path}
                    to={route.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-orange-50 text-[#E06B2D] font-bold'
                        : 'text-slate-800 hover:bg-slate-50 hover:text-[#E06B2D]'
                    )}
                  >
                    {route.label}
                  </Link>
                )
              })}
              <Link
                to={projectRoutes.greenMeadows}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 flex items-center justify-between"
              >
                <span>Sunshine Green Meadows (Bowrampet)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600" />
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <a
                href={`tel:${siteConfig.contact.primaryPhoneTel}`}
                className="w-full text-center py-2.5 rounded-full text-xs font-semibold bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center gap-1.5 hover:bg-slate-200 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E06B2D]" />
                <span>Call {siteConfig.contact.primaryPhoneFormatted}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  setEnquiryModalOpen(true)
                }}
                className="w-full text-center py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E06B2D] text-white shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Enquire Now</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Accessible Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        modalType="quick"
        projectContext="Sunshine Green Meadows"
        source="Sunshine Infra - Corporate Header: Enquire Button"
        customTitle="Get Floor Plans & Pricing"
        customSubtitle="Select your preferences below to receive instant brochure and pricing details."
      />
    </>
  )
}

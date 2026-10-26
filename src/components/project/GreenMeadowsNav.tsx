import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '@/config/site'
import { Phone, Menu, X, ArrowLeft, Calendar, MessageSquare } from 'lucide-react'
import { cn } from '@/utils/cn'

export interface GreenMeadowsNavProps {
  onOpenModal: (typeOrOptions?: 'quick' | 'enquiry' | 'brochure' | 'visit' | {
    type?: 'quick' | 'enquiry' | 'brochure' | 'visit'
    source?: string
    title?: string
    subtitle?: string
    defaultHomeType?: string
  }) => void
}

export const GreenMeadowsNav: React.FC<GreenMeadowsNavProps> = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Streamlined 5 essential links (combining sections to save space and remove clutter)
  const navLinks = [
    { href: '#overview', label: 'Overview' },
    { href: '#amenities', label: 'Amenities' },
    { href: '#plans', label: 'Floor Plans' },
    { href: '#gallery', label: 'Gallery & Tour' },
    { href: '#location', label: 'Location' },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  const [logoError, setLogoError] = useState(false)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-2 sm:py-2.5'
          : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 sm:py-3.5'
      )}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-3 sm:gap-6 flex-nowrap">
        {/* Left: Prominent Logo, Corporate Link & Space-Saving Stacked Badge */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
          <Link
            to="/sunshine-green-meadows"
            className="flex items-center group focus-visible:outline-none"
            aria-label="Sunshine Green Meadows Home"
          >
            {!logoError ? (
              <img
                src="/assets/branding/green-meadows-logo.png"
                alt="Sunshine Green Meadows"
                className="h-10 sm:h-12 md:h-13 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg sm:text-xl tracking-wider text-slate-900 leading-tight">
                  GREEN MEADOWS
                </span>
                <span className="text-[9px] uppercase font-mono tracking-widest text-emerald-600 font-bold">
                  By Sunshine Infra
                </span>
              </div>
            )}
          </Link>

          {/* Return to Corporate Header Link */}
          <div className="hidden sm:flex items-center pl-2.5 border-l border-slate-200">
            <Link
              to="/"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-600 hover:text-slate-900 bg-slate-50 border border-slate-200 hover:border-emerald-500/40 transition-all whitespace-nowrap"
            >
              <ArrowLeft className="w-3 h-3 text-emerald-600" />
              <span>Corporate</span>
            </Link>
          </div>

          {/* Space-Saving Stacked Status Badge (Compact 2-line layout) */}
          <div className="hidden md:flex flex-col justify-center px-2.5 py-1 rounded-xl bg-emerald-50 border border-emerald-200/90 text-emerald-900 shrink-0 shadow-2xs leading-tight select-none">
            <div className="flex items-center gap-1 text-[10px] font-mono font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>90% Complete</span>
            </div>
            <div className="text-[9px] font-mono font-extrabold uppercase tracking-wider text-emerald-700 mt-0.5">
              Ready to Move
            </div>
          </div>
        </div>

        {/* Center: Clean, Spaced 5 Nav Links (Never Wraps, Never Collides) */}
        <nav
          className="hidden xl:flex items-center gap-5 2xl:gap-7 shrink-0 whitespace-nowrap"
          aria-label="Project Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-emerald-600 transition-colors py-1 select-none"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Compact Phone Icon + Highlighted Book Visit + Highlighted Enquire Now */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 whitespace-nowrap">
          {/* Phone: Sleek icon button saving 150px of horizontal clutter */}
          <a
            href={`tel:${siteConfig.contact.primaryPhoneTel}`}
            className="hidden sm:inline-flex p-2 sm:p-2.5 rounded-full text-emerald-700 bg-emerald-50/80 hover:bg-emerald-100 border border-emerald-200 transition-colors cursor-pointer shadow-2xs"
            title={`Call Sales: ${siteConfig.contact.primaryPhoneFormatted}`}
            aria-label={`Call Sales: ${siteConfig.contact.primaryPhoneFormatted}`}
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
          </a>

          {/* Highlighted CTA 1: Book Visit */}
          <button
            onClick={() =>
              onOpenModal({
                type: 'quick',
                source: 'Sunshine Green Meadows - Header: Book a Site Visit Button',
                title: 'Book a Guided Site Visit',
                subtitle: 'Select your preferences below to schedule a private walkthrough of Sunshine Green Meadows (Ready to Move In).',
              })
            }
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-white hover:bg-emerald-50 text-emerald-800 border-2 border-emerald-600 hover:border-emerald-700 shadow-2xs hover:shadow-md transition-all cursor-pointer select-none active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Book Visit</span>
          </button>

          {/* Highlighted CTA 2: Enquire Now */}
          <button
            onClick={() =>
              onOpenModal({
                type: 'quick',
                source: 'Sunshine Green Meadows - Header: Enquire Button',
                title: 'Get Floor Plans & Pricing',
                subtitle: 'Select your preferences below to receive instant brochure and pricing details.',
              })
            }
            className="inline-flex items-center gap-1.5 px-4 sm:px-4.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-600 via-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-md shadow-emerald-600/25 ring-2 ring-emerald-500/20 hover:shadow-lg transition-all cursor-pointer select-none active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5 shrink-0" />
            <span>Enquire Now</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors cursor-pointer"
            aria-label="Toggle project navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-5 space-y-3 animate-in slide-in-from-top-3 duration-200 shadow-xl max-h-[80vh] overflow-y-auto">
          {/* Quick status in mobile menu */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono">
            <span className="flex items-center gap-1.5 font-bold text-emerald-900">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              90% Complete
            </span>
            <span className="font-bold uppercase tracking-wider text-emerald-700 bg-white px-2 py-0.5 rounded shadow-2xs">
              Ready to Move
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-700 bg-slate-50 border border-slate-200 hover:border-emerald-500/40 hover:text-emerald-700 transition-colors text-center truncate"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2.5 border-t border-slate-100 flex flex-col gap-2">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="w-full text-center py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-50 flex items-center justify-center gap-1.5 hover:bg-slate-100 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-emerald-600" />
              <span>Back to Sunshine Corporate</span>
            </Link>

            <a
              href={`tel:${siteConfig.contact.primaryPhoneTel}`}
              className="w-full text-center py-2.5 rounded-full text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-800 flex items-center justify-center gap-1.5 hover:bg-slate-100"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Call {siteConfig.contact.primaryPhoneFormatted}</span>
            </a>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenModal({
                    type: 'quick',
                    source: 'Sunshine Green Meadows - Mobile Menu: Book a Site Visit Button',
                    title: 'Book a Guided Site Visit',
                    subtitle: 'Select your preferences below to schedule a private walkthrough of Sunshine Green Meadows.',
                  })
                }}
                className="w-full text-center py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-emerald-800 border-2 border-emerald-600 flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                <span>Book Visit</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenModal({
                    type: 'quick',
                    source: 'Sunshine Green Meadows - Mobile Menu: Enquire Button',
                    title: 'Get Floor Plans & Pricing',
                    subtitle: 'Select your preferences below to receive instant brochure and pricing details.',
                  })
                }}
                className="w-full text-center py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Enquire Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

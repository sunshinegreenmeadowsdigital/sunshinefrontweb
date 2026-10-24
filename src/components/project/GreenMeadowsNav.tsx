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
      setScrolled(window.scrollY > 40)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#overview', label: 'Overview' },
    { href: '#highlights', label: 'Highlights' },
    { href: '#amenities', label: 'Amenities' },
    { href: '#plans', label: 'Floor Plans' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#video', label: 'Video Tour' },
    { href: '#location', label: 'Location' },
    { href: '#faq', label: 'FAQ' },
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
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-2.5 sm:py-3'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-4">
        {/* Brand Logo & Corporate Badge */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <Link
            to="/sunshine-green-meadows"
            className="flex items-center group focus-visible:outline-none"
            aria-label="Sunshine Green Meadows Home"
          >
            {!logoError ? (
              <img
                src="/assets/branding/green-meadows-logo.png"
                alt="Sunshine Green Meadows"
                className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="flex flex-col">
                <span className="font-display font-bold text-base sm:text-lg tracking-wider text-slate-900 leading-tight">
                  GREEN MEADOWS
                </span>
                <span className="text-[8px] uppercase font-mono tracking-widest text-emerald-600 font-semibold">
                  By Sunshine Infra
                </span>
              </div>
            )}
          </Link>

          {/* Return to Corporate Header Link */}
          <div className="hidden sm:flex items-center pl-3 border-l border-slate-200">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-600 hover:text-slate-900 bg-slate-50 border border-slate-200 hover:border-emerald-500/40 transition-all whitespace-nowrap"
            >
              <ArrowLeft className="w-3 h-3 text-emerald-600" />
              <span>Corporate</span>
            </Link>
          </div>
        </div>

        {/* Anchor Navigation Links */}
        <nav className="hidden xl:flex items-center gap-5" aria-label="Project Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-emerald-600 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions: Direct Call, Book Visit, Enquire Now */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <a
            href={`tel:${siteConfig.contact.primaryPhoneTel}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-slate-800 bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:text-emerald-700 transition-colors whitespace-nowrap"
            aria-label={`Call direct sales at ${siteConfig.contact.primaryPhoneFormatted}`}
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>{siteConfig.contact.primaryPhoneFormatted}</span>
          </a>

          <button
            onClick={() =>
              onOpenModal({
                type: 'quick',
                source: 'Sunshine Green Meadows - Header: Book a Site Visit Button',
                title: 'Book a Guided Site Visit',
                subtitle: 'Select your preferences below to schedule a private walkthrough of Sunshine Green Meadows.',
              })
            }
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 hover:border-emerald-500/40 transition-all cursor-pointer whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
            <span>Book Visit</span>
          </button>

          <button
            onClick={() =>
              onOpenModal({
                type: 'quick',
                source: 'Sunshine Green Meadows - Header: Enquire Button',
                title: 'Get Floor Plans & Pricing',
                subtitle: 'Select your preferences below to receive instant brochure and pricing details.',
              })
            }
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs hover:shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Enquire</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors cursor-pointer"
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
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-2.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-700 bg-slate-50 border border-slate-200 hover:border-emerald-500/40 hover:text-emerald-700 transition-colors text-center truncate"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2.5 border-t border-slate-100 flex flex-col gap-2">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="w-full text-center py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-50 flex items-center justify-center gap-1.5 hover:bg-slate-100 transition-colors"
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

            <div className="grid grid-cols-2 gap-2">
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
                className="w-full text-center py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center gap-1.5 cursor-pointer"
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
                className="w-full text-center py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Enquire</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

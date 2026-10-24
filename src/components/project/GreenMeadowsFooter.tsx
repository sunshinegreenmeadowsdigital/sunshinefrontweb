import React from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '@/config/site'
import { Phone, Mail, MapPin, ShieldCheck, Compass, ArrowUpRight } from 'lucide-react'

export const GreenMeadowsFooter: React.FC = () => {
  const currentYear = new Date().getFullYear()

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

  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200 text-slate-600 transition-colors pb-20 md:pb-12 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Identity & Developer Link */}
          <div className="space-y-4">
            <Link to="/sunshine-green-meadows" className="inline-block">
              <img
                src="/assets/branding/green-meadows-logo.png"
                alt="Sunshine Green Meadows"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <span className="font-display font-bold text-xl tracking-wider text-slate-900 block mt-2">
                GREEN MEADOWS
              </span>
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
              A flagship residential gated community by{' '}
              <Link to="/" className="text-slate-900 hover:text-emerald-700 font-semibold underline decoration-emerald-500/40">
                Sunshine Infra
              </Link>
              . Thoughtfully designed 2 & 3 BHK lifestyle residences in Bowrampet, Hyderabad.
            </p>
            <div className="pt-2">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-white border border-slate-200 text-slate-800 hover:border-emerald-500/40 hover:text-emerald-700 shadow-2xs transition-colors"
              >
                <span>Visit Sunshine Infra Corporate</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600" />
              </Link>
            </div>
          </div>

          {/* Quick Page Sections */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Project Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-emerald-700 transition-colors py-1 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Statutory Permissions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Statutory Approvals
            </h4>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-700">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span className="font-semibold">TS RERA REG. NO.</span>
              </div>
              <div className="font-mono text-sm font-bold text-slate-900 pl-6">
                {siteConfig.greenMeadows.reraNumber}
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-700">
                <Compass className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>HMDA Approved Gated Community</span>
              </div>
            </div>
          </div>

          {/* Project Site Coordinates */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Site & Sales Office
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {siteConfig.contact.officeAddress.fullAddress}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.primaryPhoneTel}`}
                  className="font-medium text-slate-900 hover:text-emerald-700 transition-colors"
                >
                  {siteConfig.contact.primaryPhoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-slate-900 hover:text-emerald-700 transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} {siteConfig.company.legalName}. All rights reserved. • Sunshine Green Meadows, Bowrampet
          </div>
          <div className="text-center sm:text-right">
            <span>TS RERA REG. No. {siteConfig.greenMeadows.reraNumber}</span> |{' '}
            <span>HMDA Approved</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

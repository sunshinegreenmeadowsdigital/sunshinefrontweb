import React from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '@/config/site'
import { corporateRoutes, projectRoutes } from '@/data/routes'
import { Phone, Mail, MapPin, ShieldCheck, ExternalLink } from 'lucide-react'

export interface FooterProps {
  theme?: 'corporate' | 'meadows'
}

export const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200 text-slate-600 transition-colors mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8 lg:gap-10">
          {/* Brand & Mission */}
          <div className="space-y-3">
            <Link to="/" className="inline-block">
              <img
                src="/assets/branding/sunshine-logo-dark.png"
                alt="Sunshine Infra"
                className="h-8 sm:h-9 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </Link>
            <p className="text-xs leading-relaxed text-slate-600">
              {siteConfig.company.tagline}. Creating energy-efficient, design-led residential
              communities that redefine luxury living across Hyderabad.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-white border border-slate-200 shadow-xs text-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>TS RERA: {siteConfig.greenMeadows.reraNumber}</span>
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {corporateRoutes.map((route) => (
                <li key={route.path}>
                  <Link
                    to={route.path}
                    className="text-slate-600 hover:text-[#E06B2D] transition-colors"
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to={projectRoutes.greenMeadows}
                  className="text-emerald-700 hover:text-emerald-800 font-medium transition-colors inline-flex items-center gap-1"
                >
                  <span>Sunshine Green Meadows</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Project Highlights */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-3">
              Ongoing Project
            </h4>
            <div className="p-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1.5">
              <div className="text-xs sm:text-sm font-semibold text-slate-900">
                {siteConfig.greenMeadows.name}
              </div>
              <div className="text-[11px] text-slate-500">
                {siteConfig.greenMeadows.location}
              </div>
              <div className="text-[11px] text-emerald-700 font-mono font-medium">
                {siteConfig.greenMeadows.status}
              </div>
              <div className="pt-1">
                <Link
                  to={projectRoutes.greenMeadows}
                  className="text-[11px] font-bold text-[#E06B2D] hover:underline inline-flex items-center gap-1"
                >
                  <span>View Project Details</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-3">
              Headquarters & Sales
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#E06B2D] shrink-0 mt-0.5" />
                <span className="text-[11px] sm:text-xs leading-relaxed text-slate-600">
                  {siteConfig.contact.officeAddress.fullAddress}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#E06B2D] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.primaryPhoneTel}`}
                  className="text-xs font-medium text-slate-800 hover:text-[#E06B2D] transition-colors font-mono"
                >
                  {siteConfig.contact.primaryPhoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#E06B2D] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-xs text-slate-800 hover:text-[#E06B2D] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Statutory Bottom Row */}
        <div className="mt-8 sm:mt-10 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-slate-500">
          <div>
            &copy; {currentYear} {siteConfig.company.legalName}. All rights reserved. •{' '}
            <a href="https://sunshineinfra.in" className="hover:text-slate-900 transition-colors">
              sunshineinfra.in
            </a>
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

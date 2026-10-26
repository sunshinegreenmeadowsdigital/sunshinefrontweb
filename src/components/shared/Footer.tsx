import React from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '@/config/site'
import { corporateRoutes, projectRoutes } from '@/data/routes'
import { Phone, Mail, MapPin, ShieldCheck, ExternalLink, ArrowUpRight } from 'lucide-react'

export interface FooterProps {
  theme?: 'corporate' | 'meadows'
}

export const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800/80 text-slate-400 transition-colors mt-auto relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-[#E06B2D]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <Link to="/" className="inline-block group focus-visible:outline-none">
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl sm:text-2xl tracking-wider text-white group-hover:text-[#F27C3E] transition-colors leading-tight">
                  SUNSHINE<span className="text-[#E06B2D]">.</span>INFRA
                </span>
                <span className="text-[9px] uppercase font-mono tracking-[0.25em] text-[#C28B5B] font-semibold mt-0.5">
                  Enshining Lifestyles
                </span>
              </div>
            </Link>

            <p className="text-xs leading-relaxed text-slate-400">
              {siteConfig.company.tagline}. Creating energy-efficient, design-led residential communities that redefine luxury living across Hyderabad's prime growth corridors.
            </p>

            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-[11px]">TS RERA: <strong className="text-white font-semibold">{siteConfig.greenMeadows.reraNumber}</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C28B5B] mb-4">
              Explore Sunshine
            </h4>
            <ul className="space-y-2.5 text-xs">
              {corporateRoutes.map((route) => (
                <li key={route.path}>
                  <Link
                    to={route.path}
                    className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all inline-flex items-center gap-1.5"
                  >
                    <span className="text-slate-600">›</span>
                    <span>{route.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to={projectRoutes.greenMeadows}
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-emerald-500">›</span>
                  <span>Sunshine Green Meadows</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Flagship Ongoing Development */}
          <div>
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C28B5B] mb-4">
              Flagship Development
            </h4>
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-md space-y-2.5 group hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white font-display group-hover:text-emerald-300 transition-colors">
                  {siteConfig.greenMeadows.name}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="text-[11px] text-slate-400 leading-relaxed font-sans">
                {siteConfig.greenMeadows.location}
              </div>
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                  90% Complete
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500 text-slate-950 shadow-xs">
                  Ready to Move In
                </span>
              </div>
              <Link
                to={projectRoutes.greenMeadows}
                className="mt-2 text-[11px] font-mono uppercase tracking-wider text-emerald-400 hover:text-emerald-300 flex items-center gap-1 pt-1 font-semibold"
              >
                <span>Explore 2 & 3 BHK Plans</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Corporate Head Office Contact */}
          <div>
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C28B5B] mb-4">
              Sales & Corporate Office
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E06B2D] shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-relaxed">
                  {siteConfig.contact.officeAddress.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E06B2D] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.primaryPhoneTel}`}
                  className="font-mono text-slate-200 hover:text-white font-medium transition-colors"
                >
                  {siteConfig.contact.primaryPhoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E06B2D] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-sans">
          <p>© {currentYear} Sunshine Infra Developers. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-slate-500">HMDA Approved</span>
            <span className="text-slate-700">•</span>
            <span className="font-mono text-emerald-500 font-semibold">TS RERA: {siteConfig.greenMeadows.reraNumber}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

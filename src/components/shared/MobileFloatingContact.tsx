import React from 'react'
import { siteConfig } from '@/config/site'
import { Phone, MessageCircle } from 'lucide-react'

export const MobileFloatingContact: React.FC = () => {
  return (
    <aside
      aria-label="Quick contact buttons"
      className="md:hidden fixed bottom-3 left-3 right-3 z-40 flex items-center justify-center gap-2.5 max-w-sm mx-auto pointer-events-none pb-[env(safe-area-inset-bottom)]"
    >
      {/* Call Button */}
      <a
        href={`tel:${siteConfig.contact.primaryPhoneTel}`}
        className="pointer-events-auto flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-full bg-slate-900/95 hover:bg-black text-white font-semibold text-xs shadow-xl border border-slate-700/60 backdrop-blur-md active:scale-95 transition-all"
        aria-label="Call Sunshine Infra Sales Desk"
      >
        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
          <Phone className="w-3 h-3 fill-current" />
        </div>
        <span className="tracking-wide">Call Us</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={siteConfig.contact.whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs shadow-xl active:scale-95 transition-all"
        aria-label="Chat on WhatsApp"
      >
        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
          <MessageCircle className="w-3.5 h-3.5 fill-current" />
        </div>
        <span className="tracking-wide">WhatsApp</span>
      </a>
    </aside>
  )
}

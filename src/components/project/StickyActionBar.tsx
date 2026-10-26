import React from 'react'
import { siteConfig } from '@/config/site'
import { Phone, MessageCircle, Calendar } from 'lucide-react'

export interface StickyActionBarProps {
  onOpenModal: (typeOrOptions?: 'quick' | 'enquiry' | 'brochure' | 'visit' | {
    type?: 'quick' | 'enquiry' | 'brochure' | 'visit'
    source?: string
    title?: string
    subtitle?: string
    defaultHomeType?: string
  }) => void
}

export const StickyActionBar: React.FC<StickyActionBarProps> = ({ onOpenModal }) => {
  return (
    <aside
      aria-label="Quick contact actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-4 py-2 flex items-center justify-between gap-2 shadow-2xl pb-[max(0.6rem,env(safe-area-inset-bottom))]"
    >
      {/* Call button */}
      <a
        href={`tel:${siteConfig.contact.primaryPhoneTel}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 active:bg-slate-200"
        aria-label="Call Sales"
      >
        <Phone className="w-3.5 h-3.5 text-emerald-600" />
        <span>Call</span>
      </a>

      {/* WhatsApp button */}
      <a
        href={siteConfig.contact.whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 active:bg-slate-200"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
        <span>WhatsApp</span>
      </a>

      {/* Book Visit button */}
      <button
        onClick={() =>
          onOpenModal({
            type: 'quick',
            source: 'Sunshine Green Meadows - Mobile Sticky Bar: Book a Site Visit Button',
            title: 'Book a Guided Site Visit',
            subtitle: 'Select your preferences below to schedule a private walkthrough of Sunshine Green Meadows (90% Complete — Ready to Move In).',
          })
        }
        className="flex-[1.4] flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white shadow-md active:bg-emerald-700 cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5 shrink-0" />
        <span className="flex flex-col items-center leading-tight">
          <span>Book Visit</span>
          <span className="text-[9px] font-mono font-medium text-emerald-200 normal-case tracking-normal">Ready to Move</span>
        </span>
      </button>
    </aside>
  )
}

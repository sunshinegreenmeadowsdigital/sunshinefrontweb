import React, { useState } from 'react'
import { faqData } from '@/data/greenMeadowsData'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { cn } from '@/utils/cn'

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 space-y-2.5 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-emerald-700 font-semibold flex items-center justify-center gap-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Buyer Inquiries & Transparency</span>
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Verified details regarding statutory permissions, layout configurations, and on-site visits.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-2.5 sm:space-y-3">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={cn(
                  'rounded-xl sm:rounded-2xl transition-all duration-200 border overflow-hidden',
                  isOpen
                    ? 'bg-white border-emerald-400/50 shadow-sm ring-1 ring-emerald-400/20'
                    : 'bg-white border-slate-200 shadow-xs hover:border-slate-300'
                )}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-sm sm:text-base text-slate-900 pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      'w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200',
                      isOpen
                        ? 'bg-emerald-100 text-emerald-700 rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    )}
                  >
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

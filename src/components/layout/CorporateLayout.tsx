import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigation } from '@/components/shared/Navigation'
import { Footer } from '@/components/shared/Footer'
import { MobileFloatingContact } from '@/components/shared/MobileFloatingContact'
import { FloatingProjectPill } from '@/components/shared/FloatingProjectPill'
import { useAnalytics } from '@/hooks/useAnalytics'

export const CorporateLayout: React.FC = () => {
  // Listen to route changes for SPA analytics
  useAnalytics()

  return (
    <div
      data-theme="corporate"
      className="min-h-screen flex flex-col bg-[var(--color-surface-base)] text-[var(--color-text-primary)] transition-colors pb-14 md:pb-0"
    >
      <Navigation theme="corporate" />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer theme="corporate" />

      {/* Floating Ongoing Project Callout Widget */}
      <FloatingProjectPill />

      {/* Fixed Call & WhatsApp floating action buttons on mobile across all corporate pages */}
      <MobileFloatingContact />
    </div>
  )
}

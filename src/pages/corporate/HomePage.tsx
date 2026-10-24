import React from 'react'
import { Hero } from '@/components/corporate/Hero'
import { AboutSection } from '@/components/corporate/AboutSection'
import { OngoingProjectSection } from '@/components/corporate/OngoingProjectSection'
import { CompletedProjectsSection } from '@/components/corporate/CompletedProjectsSection'
import { PhilosophySection } from '@/components/corporate/PhilosophySection'
import { EnquiryCtaSection } from '@/components/corporate/EnquiryCtaSection'

export const HomePage: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-white text-slate-900">
      {/* 1. Cinematic Hero Section with Integrated Side-by-Side Trust Stats */}
      <Hero />

      {/* 2. About Sunshine Infra & Philosophy */}
      <AboutSection />

      {/* 4. Flagship Ongoing Project: Sunshine Green Meadows */}
      <OngoingProjectSection />

      {/* 5. Completed Projects Portfolio Showcase */}
      <CompletedProjectsSection />

      {/* 6. Brand Philosophy: Quality and Care in Every Little Detail */}
      <PhilosophySection />

      {/* 7. Direct Developer Enquiry CTA Section */}
      <EnquiryCtaSection />
    </div>
  )
}

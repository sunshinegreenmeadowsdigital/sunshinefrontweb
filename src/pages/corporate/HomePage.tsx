import React from 'react'
import { SEO } from '@/components/shared/SEO'
import { Hero } from '@/components/corporate/Hero'
import { AboutSection } from '@/components/corporate/AboutSection'
import { OngoingProjectSection } from '@/components/corporate/OngoingProjectSection'
import { CompletedProjectsSection } from '@/components/corporate/CompletedProjectsSection'
import { PhilosophySection } from '@/components/corporate/PhilosophySection'
import { EnquiryCtaSection } from '@/components/corporate/EnquiryCtaSection'

export const HomePage: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-white text-slate-900">
      <SEO
        title="Sunshine Infra — Luxury Real Estate Developer | 2 & 3 BHK Apartments in Hyderabad"
        description="Explore premier gated communities by Sunshine Infra in Hyderabad. Discover Sunshine Green Meadows at Bowrampet — 2 & 3 BHK luxury residences, 90% complete & ready to move in."
        canonicalUrl="https://sunshineinfra.in/"
        keywords={[
          'Sunshine Infra',
          '2 BHK apartments in Bowrampet Hyderabad',
          '3 BHK apartments in Bowrampet Hyderabad',
          'flats for sale in Bowrampet',
          'new residential projects in Bowrampet',
          'ready to move flats in Bowrampet',
          'Sunshine Green Meadows Bowrampet',
          'gated community apartments Hyderabad',
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'RealEstateAgent',
          name: 'Sunshine Infra',
          url: 'https://sunshineinfra.in',
          logo: 'https://sunshineinfra.in/assets/branding/sunshine-logo.png',
          image: 'https://sunshineinfra.in/assets/projects/green-meadows/elevations/aerial-night.jpg',
          description: 'Premier real estate developer in Hyderabad with 15+ years of excellence, 1,000+ residences delivered, and flagship project Sunshine Green Meadows in Bowrampet.',
          telephone: '+91-7997482222',
          email: 'sales@sunshineinfra.in',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Survey No. 536, Near HP Petrol Bunk, DPS Road, Bowrampet',
            addressLocality: 'Hyderabad',
            addressRegion: 'Telangana',
            postalCode: '500043',
            addressCountry: 'IN',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 17.550682,
            longitude: 78.391765,
          },
          priceRange: '₹60 Lakhs - ₹1 Cr+',
        }}
      />

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

import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { type ProjectContextType } from '@/components/layout/ProjectLayout'
import { SEO } from '@/components/shared/SEO'
import { siteConfig } from '@/config/site'
import { faqData } from '@/data/greenMeadowsData'
import { GreenMeadowsHero } from '@/components/project/GreenMeadowsHero'
import { ProjectStatsRibbon } from '@/components/project/ProjectStatsRibbon'
import { LifestyleIntro } from '@/components/project/LifestyleIntro'
import { ProjectHighlights } from '@/components/project/ProjectHighlights'
import { ClubhouseShowcase } from '@/components/project/ClubhouseShowcase'
import { AmenitiesSection } from '@/components/project/AmenitiesSection'
import { FloorPlansViewer } from '@/components/project/FloorPlansViewer'
import { ProjectMediaShowcase } from '@/components/project/ProjectMediaShowcase'
import { LocationSection } from '@/components/project/LocationSection'
import { ProjectEnquirySection } from '@/components/project/ProjectEnquirySection'
import { FaqSection } from '@/components/project/FaqSection'

export const GreenMeadowsPage: React.FC = () => {
  const { onOpenModal } = useOutletContext<ProjectContextType>()

  return (
    <div className="w-full flex flex-col bg-white text-slate-900">
      <SEO
        title="2 & 3 BHK Apartments in Bowrampet Hyderabad | Sunshine Green Meadows Flats for Sale"
        description="Buy luxury 2 & 3 BHK apartments at Sunshine Green Meadows, Bowrampet, Hyderabad. 4 Blocks, 236 flats, ~10,000 Sft clubhouse. 90% Complete & Ready to Move In. HMDA & TS RERA (P02200006843). Call +91 7997482222."
        canonicalUrl="https://sunshineinfra.in/sunshine-green-meadows"
        keywords={[
          '2 BHK apartments in Bowrampet Hyderabad',
          '3 BHK apartments in Bowrampet Hyderabad',
          'Flats for sale in Bowrampet',
          'New residential projects in Bowrampet',
          'Affordable 2 BHK flats in Bowrampet',
          'Luxury 3 BHK apartments in Bowrampet',
          'Ready-to-move flats in Bowrampet Hyderabad',
          'Under-construction apartments in Bowrampet',
          'Residential apartments near ORR Exit 4 Bowrampet',
          'Best apartments for sale in Bowrampet Hyderabad',
          'Sunshine Green Meadows Bowrampet',
        ]}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'ApartmentComplex',
            name: 'Sunshine Green Meadows',
            alternateName: 'Green Meadows Bowrampet',
            url: 'https://sunshineinfra.in/sunshine-green-meadows',
            image: 'https://sunshineinfra.in/assets/projects/green-meadows/elevations/aerial-night.jpg',
            description: 'Sunshine Green Meadows features premium 2 & 3 BHK gated community apartments in Bowrampet, Hyderabad. 4 high-rise blocks, 236 residences on 2.87 Acres with ~10,000 Sft clubhouse. 90% Complete & Ready to Move In. Approved by HMDA & registered under TS RERA (P02200006843).',
            telephone: '+91-7997482222',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Survey No. 536, Near HP Petrol Bunk, DPS Road, Bowrampet Village',
              addressLocality: 'Hyderabad',
              addressRegion: 'Telangana',
              postalCode: '500043',
              addressCountry: 'IN',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: siteConfig.greenMeadows.coordinates.lat,
              longitude: siteConfig.greenMeadows.coordinates.lng,
            },
            numberOfAccommodationUnits: siteConfig.greenMeadows.units,
            numberOfBedrooms: '2, 3',
            amenityFeature: [
              { '@type': 'LocationFeatureSpecification', name: 'Multi-Level Clubhouse (~10,000 Sft)', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Swimming Pool & Sun Deck', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'AC Fitness Gymnasium', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Squash Court & Indoor Sports', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Meditation & Yoga Hall', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Children Play Area & Gardens', value: true },
              { '@type': 'LocationFeatureSpecification', name: '24/7 Security & CCTV', value: true },
            ],
            offers: {
              '@type': 'AggregateOffer',
              priceCurrency: 'INR',
              lowPrice: 6000000,
              highPrice: 10000000,
              offerCount: 236,
              availability: 'https://schema.org/InStock',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqData.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://sunshineinfra.in/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Ongoing Projects',
                item: 'https://sunshineinfra.in/ongoing-project',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Sunshine Green Meadows Bowrampet',
                item: 'https://sunshineinfra.in/sunshine-green-meadows',
              },
            ],
          },
        ]}
      />

      {/* 1. Cinematic Hero Section */}
      <GreenMeadowsHero onOpenModal={onOpenModal} />

      {/* 2. Refined Project Statistics Ribbon */}
      <ProjectStatsRibbon />

      {/* 3. Project Story & Lifestyle Philosophy */}
      <LifestyleIntro />

      {/* 4. Architecture & Engineering Highlights */}
      <ProjectHighlights />

      {/* 5. Dedicated ~10,000 Sft. Clubhouse Showcase */}
      <ClubhouseShowcase onOpenModal={onOpenModal} />

      {/* 6. Curated Categorized Amenities (4 Domains) */}
      <AmenitiesSection />

      {/* 7. Interactive Master Plan & Floor Plans Viewer with Lightbox */}
      <FloorPlansViewer onOpenEnquiry={(options) => onOpenModal(options || 'quick')} />

      {/* 8. Integrated Architectural Gallery & Virtual Video Walkthrough */}
      <ProjectMediaShowcase />

      {/* 10. Strategic Bowrampet Location & Indicative Commute Matrix */}
      <LocationSection />

      {/* 11. Multi-Tab Lead Capture Suite (Enquiry, E-Brochure, Site Visit) */}
      <ProjectEnquirySection />

      {/* 12. Accessible Buyer FAQ Accordions */}
      <FaqSection />
    </div>
  )
}

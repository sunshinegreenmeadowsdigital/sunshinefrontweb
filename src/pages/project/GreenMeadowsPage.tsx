import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { type ProjectContextType } from '@/components/layout/ProjectLayout'
import { GreenMeadowsHero } from '@/components/project/GreenMeadowsHero'
import { ProjectStatsRibbon } from '@/components/project/ProjectStatsRibbon'
import { LifestyleIntro } from '@/components/project/LifestyleIntro'
import { ProjectHighlights } from '@/components/project/ProjectHighlights'
import { ClubhouseShowcase } from '@/components/project/ClubhouseShowcase'
import { AmenitiesSection } from '@/components/project/AmenitiesSection'
import { FloorPlansViewer } from '@/components/project/FloorPlansViewer'
import { PhotoGallery } from '@/components/project/PhotoGallery'
import { VideoTour } from '@/components/project/VideoTour'
import { LocationSection } from '@/components/project/LocationSection'
import { ProjectEnquirySection } from '@/components/project/ProjectEnquirySection'
import { FaqSection } from '@/components/project/FaqSection'

export const GreenMeadowsPage: React.FC = () => {
  const { onOpenModal } = useOutletContext<ProjectContextType>()

  return (
    <div className="w-full flex flex-col bg-white text-slate-900">
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

      {/* 8. Authentic Architectural & Lifestyle Photo Gallery */}
      <PhotoGallery />

      {/* 9. Virtual Walkthrough Video Tour */}
      <VideoTour />

      {/* 10. Strategic Bowrampet Location & Indicative Commute Matrix */}
      <LocationSection />

      {/* 11. Multi-Tab Lead Capture Suite (Enquiry, E-Brochure, Site Visit) */}
      <ProjectEnquirySection />

      {/* 12. Accessible Buyer FAQ Accordions */}
      <FaqSection />
    </div>
  )
}

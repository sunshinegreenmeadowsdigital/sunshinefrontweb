import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { GreenMeadowsNav } from '@/components/project/GreenMeadowsNav'
import { GreenMeadowsFooter } from '@/components/project/GreenMeadowsFooter'
import { StickyActionBar } from '@/components/project/StickyActionBar'
import { EnquiryModal } from '@/components/shared/EnquiryModal'
import { useAnalytics } from '@/hooks/useAnalytics'

export interface ModalOptions {
  type?: 'quick' | 'enquiry' | 'brochure' | 'visit'
  source?: string
  title?: string
  subtitle?: string
  defaultHomeType?: string
}

export interface ProjectContextType {
  onOpenModal: (typeOrOptions?: 'quick' | 'enquiry' | 'brochure' | 'visit' | ModalOptions) => void
}

export const ProjectLayout: React.FC = () => {
  // Listen to route changes for SPA analytics
  useAnalytics()

  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState<'quick' | 'enquiry' | 'brochure' | 'visit'>('quick')
  const [modalSource, setModalSource] = useState<string>('Sunshine Green Meadows - Quick Enquiry Button')
  const [modalTitle, setModalTitle] = useState<string | undefined>()
  const [modalSubtitle, setModalSubtitle] = useState<string | undefined>()
  const [modalDefaultHomeType, setModalDefaultHomeType] = useState<string | undefined>()

  const handleOpenModal = (
    typeOrOptions?: 'quick' | 'enquiry' | 'brochure' | 'visit' | ModalOptions
  ) => {
    if (typeof typeOrOptions === 'object' && typeOrOptions !== null) {
      setModalType(typeOrOptions.type || 'quick')
      setModalSource(typeOrOptions.source || 'Sunshine Green Meadows - Enquiry Button')
      setModalTitle(typeOrOptions.title)
      setModalSubtitle(typeOrOptions.subtitle)
      setModalDefaultHomeType(typeOrOptions.defaultHomeType)
    } else {
      const type = typeOrOptions || 'quick'
      setModalType(type)

      let sourceName = 'Sunshine Green Meadows - Quick Enquiry Button'
      let title: string | undefined = undefined
      let subtitle: string | undefined = undefined

      if (type === 'visit') {
        sourceName = 'Sunshine Green Meadows - Book a Site Visit Button'
        title = 'Book a Guided Site Visit'
        subtitle = 'Select your preferences below to schedule a private walkthrough of Sunshine Green Meadows.'
      } else if (type === 'brochure') {
        sourceName = 'Sunshine Green Meadows - Download Brochure Button'
        title = 'Request Project E-Brochure'
        subtitle = 'Select your preferences below to receive the complete floor plans & cost sheet.'
      }

      setModalSource(sourceName)
      setModalTitle(title)
      setModalSubtitle(subtitle)
      setModalDefaultHomeType(undefined)
    }
    setModalOpen(true)
  }

  return (
    <div
      data-theme="meadows"
      className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-600 selection:text-white"
    >
      <GreenMeadowsNav onOpenModal={handleOpenModal} />
      <main className="flex-1 flex flex-col">
        <Outlet context={{ onOpenModal: handleOpenModal } satisfies ProjectContextType} />
      </main>
      <GreenMeadowsFooter />
      <StickyActionBar onOpenModal={handleOpenModal} />

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        modalType={modalType}
        projectContext="Sunshine Green Meadows"
        source={modalSource}
        customTitle={modalTitle}
        customSubtitle={modalSubtitle}
        defaultHomeType={modalDefaultHomeType}
      />
    </div>
  )
}

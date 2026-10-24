import React, { useEffect, useState } from 'react'
import { EnquiryModal } from './EnquiryModal'

const POPUP_SESSION_KEY = 'sunshine_website_visited_popup_shown'

export const WebsiteAutoPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if the popup was already displayed in this browsing visit
    try {
      const hasShown = sessionStorage.getItem(POPUP_SESSION_KEY)
      if (hasShown === 'true') {
        return
      }
    } catch {
      // Ignore sessionStorage exceptions in private browsing mode
    }

    // Trigger popup 2.5s after the visitor arrives at the website
    const timer = setTimeout(() => {
      setIsOpen(true)
      try {
        sessionStorage.setItem(POPUP_SESSION_KEY, 'true')
      } catch {
        // Storage quota or restriction handled silently
      }
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <EnquiryModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      modalType="quick"
      projectContext="Sunshine Green Meadows"
      source="Sunshine Infra - Website Welcome Auto Popup"
      customTitle="Get Floor Plans & Pricing"
      customSubtitle="Select your preferences below to receive instant brochure and pricing details."
    />
  )
}

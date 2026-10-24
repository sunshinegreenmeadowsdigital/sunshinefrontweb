import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CorporateLayout } from '@/components/layout/CorporateLayout'
import { ProjectLayout } from '@/components/layout/ProjectLayout'
import { Preloader } from '@/components/shared/Preloader'
import { WebsiteAutoPopup } from '@/components/shared/WebsiteAutoPopup'
import { ScrollToTop } from '@/components/shared/ScrollToTop'

// Route-level code splitting for production performance & zero main-thread blocking
const HomePage = lazy(() => import('@/pages/corporate/HomePage').then(m => ({ default: m.HomePage })))
const AboutPage = lazy(() => import('@/pages/corporate/AboutPage').then(m => ({ default: m.AboutPage })))
const OngoingProjectPage = lazy(() => import('@/pages/corporate/OngoingProjectPage').then(m => ({ default: m.OngoingProjectPage })))
const CompletedProjectsPage = lazy(() => import('@/pages/corporate/CompletedProjectsPage').then(m => ({ default: m.CompletedProjectsPage })))
const BlogPage = lazy(() => import('@/pages/corporate/BlogPage').then(m => ({ default: m.BlogPage })))
const ContactPage = lazy(() => import('@/pages/corporate/ContactPage').then(m => ({ default: m.ContactPage })))
const GreenMeadowsPage = lazy(() => import('@/pages/project/GreenMeadowsPage').then(m => ({ default: m.GreenMeadowsPage })))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })))

const PageLoadingFallback: React.FC = () => (
  <div className="w-full min-h-[60vh] flex items-center justify-center bg-white">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-slate-200 border-t-[#E06B2D] animate-spin" />
      <span className="text-[11px] font-mono tracking-widest text-slate-500 uppercase">
        Loading Sunshine Infra...
      </span>
    </div>
  </div>
)

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* Luxury Brand Entrance Preloader */}
      <Preloader />

      {/* Auto-popup: triggers once when the customer visits the website, not on every page */}
      <WebsiteAutoPopup />

      {/* Auto scroll-reset on route change & floating back-to-top button */}
      <ScrollToTop />

      <Suspense fallback={<PageLoadingFallback />}>
        <Routes>
          {/* Corporate Website Experience */}
          <Route element={<CorporateLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about-us" element={<Navigate to="/about" replace />} />
            <Route path="/ongoing-project" element={<OngoingProjectPage />} />
            <Route path="/completed-projects" element={<CompletedProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
            <Route path="/contact-us.html" element={<Navigate to="/contact" replace />} />
          </Route>

          {/* Dedicated Green Meadows Project Website Experience */}
          <Route element={<ProjectLayout />}>
            {/* Canonical path */}
            <Route path="/sunshine-green-meadows" element={<GreenMeadowsPage />} />
            <Route path="/sunshine-green-meadows/" element={<GreenMeadowsPage />} />

            {/* Legacy URL compatibility preservation as required by audit */}
            <Route path="/sunshine-green-meadows/index.html" element={<GreenMeadowsPage />} />
          </Route>

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App

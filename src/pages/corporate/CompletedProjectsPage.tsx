import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { completedProjectsData, type CompletedProject } from '@/data/projects'
import { projectRoutes } from '@/data/routes'
import { Button } from '@/components/shared/Button'
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  X,
} from 'lucide-react'
import { cn } from '@/utils/cn'

export const CompletedProjectsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All')
  const [activeProject, setActiveProject] = useState<CompletedProject | null>(null)

  useEffect(() => {
    document.title = 'Completed Residential Projects | Sunshine Infra Hyderabad'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore delivered residential projects by Sunshine Infra across Kokapet, Narsingi, Jubilee Hills, Pragathi Nagar, and Hafeezpet. 15+ years of verified construction excellence.'
      )
    }
    window.scrollTo(0, 0)
  }, [])

  // Filter projects (prioritize those with authentic images, 6 primary verified developments)
  const verifiedProjects = completedProjectsData.filter((p) => p.hasImage)

  const filterOptions = ['All', 'Kokapet & Narsingi', 'Jubilee Hills', 'Hafeezpet & Pragathi Nagar']

  const filteredProjects = verifiedProjects.filter((project) => {
    if (selectedFilter === 'All') return true
    if (selectedFilter === 'Kokapet & Narsingi') {
      return project.location.includes('Kokapet') || project.location.includes('Narsingi')
    }
    if (selectedFilter === 'Jubilee Hills') {
      return project.location.includes('Jubilee Hills')
    }
    if (selectedFilter === 'Hafeezpet & Pragathi Nagar') {
      return project.location.includes('Hafeezpet') || project.location.includes('Pragathi Nagar')
    }
    return true
  })

  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      {/* 1. Page Header */}
      <section className="relative pt-24 sm:pt-32 pb-10 sm:pb-16 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#E06B2D] font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E06B2D]" />
              <span>Delivered Communities Portfolio</span>
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              A Proven Legacy Across <br />
              <span className="italic font-normal text-[#C28B5B]">Hyderabad’s Prime Corridors.</span>
            </h1>
            <p className="font-sans text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl">
              From landmark residences in Jubilee Hills and high-rise living in Kokapet to family enclaves in Narsingi, Hafeezpet, and Pragathi Nagar, explore delivered communities that stand as a testament to our craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Portfolio Gallery & Filter Controls */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 sm:mb-12 border-b border-slate-200 pb-4 sm:pb-6">
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSelectedFilter(opt)}
                  className={cn(
                    'px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all select-none whitespace-nowrap shrink-0',
                    selectedFilter === opt
                      ? 'bg-[#E06B2D] text-white font-bold shadow-md shadow-[#E06B2D]/20'
                      : 'bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-200/80'
                  )}
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className="text-[11px] sm:text-xs font-mono text-[#C28B5B] font-semibold shrink-0">
              Showing {filteredProjects.length} Verified Delivered Communities
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-slate-200/90 hover:border-[#E06B2D]/40 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-slate-200/60"
              >
                {/* Image Container with Hover Zoom */}
                <div
                  onClick={() => setActiveProject(project)}
                  className="relative aspect-[16/10] overflow-hidden cursor-pointer bg-slate-100"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] font-mono uppercase tracking-widest font-semibold bg-white/95 backdrop-blur-md text-emerald-800 border border-slate-200 shadow-xs">
                      {project.category}
                    </span>
                  </div>

                  {/* Enlarge prompt button */}
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 border border-slate-200 flex items-center justify-center text-slate-800 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E06B2D]" />
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#E06B2D] font-mono font-medium">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#E06B2D] transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights Chips */}
                  <div className="pt-2.5 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {project.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg text-[10px] font-mono text-slate-600 bg-slate-100 border border-slate-200/60"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Historical Archive Disclosure */}
          <div className="mt-10 sm:mt-14 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-center max-w-2xl mx-auto space-y-1.5">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#C28B5B] font-semibold">
              Archival Records
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sunshine Infra has completed additional private enclaves and bespoke developments across Jubilee Hills and Gachibowli. Full project documentation and specifications are maintained at our corporate headquarters.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Lightbox Inspection Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-xl animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setActiveProject(null)}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="w-full h-full max-w-4xl max-h-[85dvh] flex flex-col items-center justify-center text-center p-2">
            <img
              src={activeProject.image}
              alt={activeProject.name}
              className="max-w-full max-h-[60dvh] sm:max-h-[70dvh] object-contain rounded-xl sm:rounded-2xl shadow-2xl"
            />
            <div className="mt-3 sm:mt-4 space-y-1">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#E06B2D]">
                {activeProject.location}
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                {activeProject.name}
              </h3>
              <p className="text-xs text-slate-300 max-w-lg mx-auto">
                {activeProject.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 4. Conversion CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#E06B2D] font-semibold">
            Join Our Growing Community
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Looking for Your Next Residence?
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Following the successful delivery of our prior communities, our current ongoing focus is Sunshine Green Meadows at Bowrampet.
          </p>

          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link to={projectRoutes.greenMeadows} className="w-full sm:w-auto">
              <Button variant="primary" size="md" className="w-full sm:w-auto">
                <span>View Sunshine Green Meadows</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="md" className="w-full sm:w-auto border-slate-300 text-slate-800 hover:bg-white">
                <span>Enquire About Upcoming Lands</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

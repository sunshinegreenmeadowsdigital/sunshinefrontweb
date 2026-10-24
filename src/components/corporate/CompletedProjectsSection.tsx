import React from 'react'
import { Link } from 'react-router-dom'
import { completedProjectsData } from '@/data/projects'
import { ArrowRight, MapPin, Building2, CheckCircle2 } from 'lucide-react'

export const CompletedProjectsSection: React.FC = () => {
  // Show first 6 featured projects on homepage
  const featuredProjects = completedProjectsData.slice(0, 6)

  return (
    <section id="projects" className="py-12 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div className="space-y-1.5 sm:space-y-2">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#E06B2D] font-semibold">
              Delivered Excellence
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Completed Projects
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
              A decade and a half of proven execution across Hyderabad's most coveted residential neighborhoods.
            </p>
          </div>

          <Link
            to="/completed-projects"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#C28B5B] hover:text-[#E06B2D] transition-colors group self-start md:self-end"
          >
            <span>View Full Portfolio (14+ Communities)</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-slate-200/90 hover:border-[#E06B2D]/40 transition-all duration-300 flex flex-col shadow-xs hover:shadow-lg hover:shadow-slate-200/60"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-90" />

                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-white/90 backdrop-blur-md text-emerald-800 border border-slate-200 shadow-xs">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Delivered</span>
                  </span>
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] sm:text-xs text-white">
                  <span className="flex items-center gap-1 font-medium drop-shadow-sm">
                    <MapPin className="w-3 h-3 text-[#E06B2D]" />
                    <span>{project.location}</span>
                  </span>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#C28B5B] mb-0.5">
                    {project.category}
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 group-hover:text-[#E06B2D] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1.5 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Highlights tags */}
                <div className="pt-2.5 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {project.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono text-slate-600 bg-slate-100 border border-slate-200/60"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote about additional projects */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#E06B2D]/10 border border-[#E06B2D]/25 flex items-center justify-center text-[#E06B2D] shrink-0">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900">
                Looking for our full historical portfolio?
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500">
                Explore completed landmarks across Jubilee Hills, Gachibowli, Kukatpally, and Chandanagar.
              </div>
            </div>
          </div>
          <Link
            to="/completed-projects"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 transition-colors shrink-0 shadow-xs"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E06B2D]" />
          </Link>
        </div>
      </div>
    </section>
  )
}

import React, { useState, useEffect } from 'react'
import { galleryData } from '@/data/greenMeadowsData'
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon, Play, Video, ShieldCheck, Film } from 'lucide-react'
import { cn } from '@/utils/cn'

export const ProjectMediaShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gallery' | 'video'>('gallery')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoId = '4QFx9lkM3-U'

  // Listen to hash changes for direct deep linking (#video or #gallery)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase()
      if (hash === '#video') {
        setActiveTab('video')
      } else if (hash === '#gallery' || hash === '#experience') {
        setActiveTab('gallery')
      }
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const categories = ['All', 'Architectural Renders', 'Interior Living', 'Clubhouse', 'Landscape']

  const filteredImages =
    selectedCategory === 'All'
      ? galleryData
      : galleryData.filter((img) => img.category === selectedCategory)

  // Lightbox keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return
      if (e.key === 'Escape') {
        setActiveImageIndex(null)
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : 0))
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) =>
          prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : 0
        )
      }
    }

    if (activeImageIndex !== null) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeImageIndex, filteredImages.length])

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      {/* Anchor alias for video deep linking */}
      <div id="video" className="absolute -top-24" />
      <div id="experience" className="absolute -top-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div className="space-y-2.5 sm:space-y-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-emerald-700 font-semibold flex items-center gap-2">
              <Film className="w-3.5 h-3.5 text-emerald-600" />
              <span>Visual Experience & Media</span>
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Gallery & <span className="italic font-normal text-emerald-600">Video Walkthrough</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Experience the spatial layout, elevations, clubhouse vision, and virtual video tour of Sunshine Green Meadows.
            </p>
          </div>

          {/* Unified Primary Tab Switcher (Photo Gallery vs Video Walkthrough) */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm shrink-0 self-start md:self-end">
            <button
              onClick={() => setActiveTab('gallery')}
              className={cn(
                'flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all cursor-pointer',
                activeTab === 'gallery'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                  : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'
              )}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Photo Gallery</span>
              <span
                className={cn(
                  'text-[10px] font-mono px-1.5 py-0.5 rounded-full',
                  activeTab === 'gallery' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                )}
              >
                {galleryData.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('video')}
              className={cn(
                'flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all cursor-pointer',
                activeTab === 'video'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                  : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'
              )}
            >
              <Video className="w-4 h-4" />
              <span>Video Tour</span>
              <span
                className={cn(
                  'text-[10px] font-mono px-1.5 py-0.5 rounded-full uppercase font-bold',
                  activeTab === 'video' ? 'bg-white/20 text-white' : 'bg-emerald-50 text-emerald-700'
                )}
              >
                HD
              </span>
            </button>
          </div>
        </div>

        {/* Tab 1: Photo Gallery Content */}
        {activeTab === 'gallery' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap pb-2 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    'px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all select-none whitespace-nowrap shrink-0 cursor-pointer',
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white font-bold shadow-md shadow-slate-900/20'
                      : 'bg-white text-slate-700 hover:text-emerald-700 hover:border-emerald-300 border border-slate-200 shadow-xs'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredImages.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setActiveImageIndex(index)}
                  className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-emerald-500/50 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3]"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-end justify-between">
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-emerald-300 block font-semibold">
                        {item.category}
                      </span>
                      <h3 className="font-display text-xs sm:text-sm font-bold text-white mt-0.5 leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-emerald-500 group-hover:text-white transition-colors shrink-0">
                      <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Video Walkthrough Tour Content */}
        {activeTab === 'video' && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div className="max-w-5xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xl relative aspect-[16/9]">
              {!isVideoPlaying ? (
                <div
                  className="relative w-full h-full group cursor-pointer"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <img
                    src="/assets/projects/green-meadows/elevations/aerial.jpg"
                    alt="Sunshine Green Meadows Walkthrough Preview"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/50 group-hover:bg-slate-950/30 transition-colors flex flex-col items-center justify-center p-6 text-center" />

                  {/* Central Play Button */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 sm:gap-4">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-emerald-600 group-hover:bg-emerald-500 flex items-center justify-center text-white shadow-xl shadow-emerald-600/50 group-hover:scale-110 transition-all duration-300">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-0.5" />
                    </div>
                    <div className="text-center bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-slate-200 shadow-md">
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold">
                        Click to Play Walkthrough (YouTube HD)
                      </span>
                    </div>
                  </div>

                  {/* RERA Footnote */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-[11px] sm:text-xs text-slate-200 pointer-events-none">
                    <span className="flex items-center gap-1.5 font-mono">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Official Developer Walkthrough</span>
                    </span>
                    <span className="hidden sm:inline font-mono">YouTube Video Tour</span>
                  </div>
                </div>
              ) : (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                  title="Sunshine Green Meadows Walkthrough"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20 cursor-pointer"
            aria-label="Close gallery lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous image */}
          <button
            onClick={() =>
              setActiveImageIndex((prev) =>
                prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : 0
              )
            }
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next image */}
          <button
            onClick={() =>
              setActiveImageIndex((prev) =>
                prev !== null ? (prev + 1) % filteredImages.length : 0
              )
            }
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Display */}
          <div className="w-full h-full max-w-5xl max-h-[85vh] flex flex-col items-center justify-center">
            <img
              src={filteredImages[activeImageIndex].image}
              alt={filteredImages[activeImageIndex].alt}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400">
                {filteredImages[activeImageIndex].category} ({activeImageIndex + 1} of {filteredImages.length})
              </span>
              <h3 className="font-display font-bold text-lg text-white mt-0.5">
                {filteredImages[activeImageIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

import React, { useState, useEffect } from 'react'
import { galleryData } from '@/data/greenMeadowsData'
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'
import { cn } from '@/utils/cn'

export const PhotoGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div className="space-y-2.5 sm:space-y-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-emerald-700 font-semibold flex items-center gap-2">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Project Visuals</span>
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Authentic Architectural <span className="italic font-normal text-emerald-600">Gallery</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Explore authentic elevations, clubhouse perspective renders, and interior configurations crafted for Sunshine Green Meadows.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 self-start md:self-end overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap w-full md:w-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  'px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all select-none whitespace-nowrap shrink-0',
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white font-bold shadow-md shadow-emerald-600/20'
                    : 'bg-white text-slate-700 hover:text-emerald-700 hover:border-emerald-300 border border-slate-200 shadow-xs'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
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
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
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
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
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
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
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

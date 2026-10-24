import React, { useState } from 'react'
import { Play, Video, ShieldCheck } from 'lucide-react'

export const VideoTour: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoId = '4QFx9lkM3-U'

  return (
    <section id="video" className="py-12 sm:py-16 lg:py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-emerald-700 font-semibold flex items-center justify-center gap-2">
            <Video className="w-3.5 h-3.5" />
            <span>Virtual Project Experience</span>
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.15]">
            Walkthrough & Architectural Tour
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Experience the spatial layout, clubhouse vision, and open-space environment of Sunshine Green Meadows in motion.
          </p>
        </div>

        {/* Video Player Card / Play-to-Load Container */}
        <div className="max-w-5xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xl relative aspect-[16/9]">
          {!isPlaying ? (
            <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
              {/* Fallback backdrop using our real aerial render */}
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
    </section>
  )
}

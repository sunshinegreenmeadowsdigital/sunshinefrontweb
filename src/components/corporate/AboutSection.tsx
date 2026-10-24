import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Compass, Shield, Users, Leaf, Hammer } from 'lucide-react'

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'Design, Construct, Deliver',
      desc: 'End-to-end architectural discipline ensuring meticulous execution from masterplan to handover.',
      icon: Hammer,
    },
    {
      title: 'Integrity & Transparency',
      desc: 'Uncompromising legal and structural adherence with verified RERA compliance on every development.',
      icon: Shield,
    },
    {
      title: 'Customer-Centric Living',
      desc: 'Homes configured around natural light, cross-ventilation, and 100% Vaastu alignment.',
      icon: Users,
    },
    {
      title: 'Sustainable Habitats',
      desc: 'Rainwater harvesting, solar power integration, and expansive landscaped open spaces.',
      icon: Leaf,
    },
  ]

  return (
    <section id="about" className="py-12 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Image with architectural frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg group">
              <img
                src="/assets/projects/sunshine-infra-hyderabad.jpg"
                alt="Sunshine Infra Architectural Craftsmanship"
                className="w-full h-[260px] sm:h-[380px] lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              
              {/* Floating Stat Badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md flex items-center justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs uppercase font-mono text-[#C28B5B] tracking-wider font-semibold">
                    Visionary Living
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">
                    Setting Benchmarks in Hyderabad
                  </div>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#E06B2D]/10 border border-[#E06B2D]/25 flex items-center justify-center text-[#E06B2D] shrink-0 ml-2">
                  <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial narrative & pillars */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#E06B2D] font-semibold">
                About Sunshine Infra
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.18]">
                Inspiring design begins with a <span className="italic font-normal text-[#C28B5B]">vision.</span>
              </h2>
            </div>

            <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              We craft visionary residences across Hyderabad's prime growth corridors, prioritizing architectural elegance, natural light, and generational longevity.
            </p>

            <div className="grid grid-cols-2 gap-2 sm:gap-4 pt-1">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={idx}
                    className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#E06B2D]/40 hover:shadow-xs transition-all"
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 text-slate-900">
                      <Icon className="w-3.5 h-3.5 text-[#E06B2D] shrink-0" />
                      <h3 className="font-semibold text-xs sm:text-sm leading-tight">{pillar.title}</h3>
                    </div>
                    <p className="text-[10px] sm:text-xs text-slate-500 leading-snug line-clamp-2 sm:line-clamp-none">
                      {pillar.desc}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="pt-2 sm:pt-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#E06B2D] hover:text-[#C85A20] transition-colors group"
              >
                <span>Read Full Company Narrative & Leadership</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

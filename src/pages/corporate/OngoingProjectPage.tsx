import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '@/config/site'
import { projectRoutes } from '@/data/routes'
import { Button } from '@/components/shared/Button'
import {
  ShieldCheck,
  Compass,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

export const OngoingProjectPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Ongoing Flagship Project | Sunshine Green Meadows Bowrampet'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Discover Sunshine Green Meadows by Sunshine Infra at Bowrampet, Hyderabad. 4 Blocks, 236 Units of 2 & 3 BHK luxury residences, HMDA approved & TS RERA registered (P02200006843).'
      )
    }
    window.scrollTo(0, 0)
  }, [])

  const highlights = [
    { title: '4 Residential Towers', desc: 'Blocks A, B, C & D spaced for maximum daylight and natural breezes.' },
    { title: '236 Luxury Residences', desc: 'Thoughtfully planned 2 & 3 BHK configurations with spacious balconies.' },
    { title: '~10,000 Sft. Clubhouse', desc: 'Multi-level recreational hub with AC gym, pool, squash, yoga & banquet.' },
    { title: '100% Vaastu Discipline', desc: 'East & West facing unit layouts structured in adherence to Vaastu science.' },
    { title: 'No Common Wall Layouts', desc: 'Engineered for exceptional acoustic privacy (*subject to sanctioned municipal plans).' },
    { title: 'Rapid Ring-Road Access', desc: 'Just 5 minutes to Nehru Outer Ring Road (ORR) Exit No. 4 at Bowrampet.' },
  ]

  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      {/* 1. Header Banner */}
      <section className="relative pt-24 sm:pt-32 pb-10 sm:pb-16 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="/assets/projects/green-meadows/elevations/aerial.jpg"
            alt="Sunshine Green Meadows Aerial"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/70 backdrop-blur-xs" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>90% Complete</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>Ready to Move In</span>
              </span>

              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-[10px] sm:text-xs font-mono text-slate-700 shadow-xs">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span>TS RERA: {siteConfig.greenMeadows.reraNumber}</span>
              </span>

              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-[10px] sm:text-xs font-mono text-slate-700 shadow-xs">
                <Compass className="w-3 h-3 text-emerald-600" />
                <span>HMDA Approved</span>
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.12]">
              Sunshine Green Meadows <br />
              <span className="italic font-normal text-emerald-700">Bowrampet, Hyderabad.</span>
            </h1>

            <p className="font-sans text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              An expansive residential gated sanctuary bringing together 236 lifestyle apartments across 4 high-rise blocks, surrounded by natural tranquility and seamless North-West Hyderabad connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics Strip */}
      <section className="relative bg-slate-50 border-b border-slate-200/80 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 text-center">
            {/* Stat 1: Total Land Parcel */}
            <div className="p-2 sm:p-3 pt-4 sm:pt-2 flex flex-col items-center justify-center">
              <div className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                2.87 Acres
              </div>
              <div className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-slate-500 mt-0.5">
                Total Land Parcel
              </div>
              <div className="text-[10px] text-emerald-700 font-mono mt-0.5 font-medium">
                Gated Community
              </div>
            </div>

            {/* Stat 2: Blocks */}
            <div className="p-2 sm:p-3 pt-4 sm:pt-2 flex flex-col items-center justify-center">
              <div className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                4 Towers
              </div>
              <div className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-slate-500 mt-0.5">
                Residential Blocks
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                Blocks A, B, C & D
              </div>
            </div>

            {/* Stat 3: Total Apartments */}
            <div className="p-2 sm:p-3 pt-4 sm:pt-2 flex flex-col items-center justify-center">
              <div className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                236 Units
              </div>
              <div className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-slate-500 mt-0.5">
                Total Residences
              </div>
              <div className="text-[10px] text-emerald-700 font-mono mt-0.5 font-medium">
                2 & 3 BHK Formats
              </div>
            </div>

            {/* Stat 4: Construction Status */}
            <div className="p-2 sm:p-3 pt-4 sm:pt-2 flex flex-col items-center justify-center">
              <div className="font-display text-xl sm:text-2xl font-bold text-emerald-700">
                90% Complete
              </div>
              <div className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-emerald-800 font-bold mt-0.5">
                Ready to Move In
              </div>
              <div className="text-[9px] text-slate-500 font-mono mt-0.5 font-medium">
                Finishing Stage
              </div>
            </div>

            {/* Stat 5: Clubhouse */}
            <div className="col-span-2 lg:col-span-1 p-2 sm:p-3 pt-4 sm:pt-2 flex flex-col items-center justify-center">
              <div className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                ~10,000 Sft.
              </div>
              <div className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-slate-500 mt-0.5">
                Multi-Level Clubhouse
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                Gym, Pool & Sports
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visual Feature & Architectural Overview */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left: Render Image Frame */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-md group">
                <img
                  src="/assets/projects/green-meadows/elevations/hero-elevation.jpg"
                  alt="Sunshine Green Meadows Architectural Perspective"
                  className="w-full h-[260px] sm:h-[380px] lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div>
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-emerald-700 font-semibold">
                      Bowrampet Corridor
                    </span>
                    <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                      Flagship Community in North-West Hyderabad
                    </h3>
                  </div>
                  <Link to={projectRoutes.greenMeadows}>
                    <button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white shrink-0 hover:bg-emerald-700 transition-colors shadow-xs cursor-pointer">
                      <span>View Microsite</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Architectural Narrative */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-5">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#E06B2D] font-semibold">
                Project Overview
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                A Considered Residential Enclave Designed for Living.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Situated on DPS Road in Bowrampet, Sunshine Green Meadows features four independent residential blocks spaced for acoustic privacy and generous airflow.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                With construction at 90% complete, homeowners enjoy a ~10,000 Sft. multi-level clubhouse, rooftop pool, manicured gardens, and 24/7 security.
              </p>

              <div className="pt-1 flex flex-col gap-2">
                <div className="flex items-start gap-2 text-xs text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Approved by HMDA and registered under TS RERA No. {siteConfig.greenMeadows.reraNumber}</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Surrounded by leading schools (DPS, Oakridge, Creek) and 5 minutes from ORR Exit 4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Project Highlights Grid */}
      <section className="py-12 sm:py-20 lg:py-24 bg-slate-50 border-y border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2 sm:space-y-3">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#E06B2D] font-semibold">
              Distinctive Engineering
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Thoughtful Living Specifications
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Every detail is engineered to support contemporary family life with enduring construction standards.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-500/40 transition-all space-y-1.5 sm:space-y-2 shadow-xs hover:shadow-md group"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <h3 className="font-display text-xs sm:text-base font-bold text-slate-900 leading-tight">{h.title}</h3>
                <p className="text-[10px] sm:text-xs text-slate-600 leading-snug line-clamp-3 sm:line-clamp-none">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Deep Link CTA to Full Project Experience */}
      <section className="py-12 sm:py-16 lg:py-20 bg-emerald-50/60 border-t border-emerald-200 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-emerald-700 font-semibold">
            Complete Project Microsite
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Explore the Green Meadows Microsite
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Delve into interactive floor plans for Blocks A through D, the 10,000 Sft. clubhouse showcase, photo gallery, video tour, and schedule a private site visit.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to={projectRoutes.greenMeadows}>
              <Button variant="primary" size="md" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold">
                <span>Enter Green Meadows Experience</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="md" className="w-full sm:w-auto border-slate-300 text-slate-800 hover:bg-white">
                <span>Contact Sales Desk</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

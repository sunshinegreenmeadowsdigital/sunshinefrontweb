import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/shared/SEO'
import { projectRoutes } from '@/data/routes'
import { Button } from '@/components/shared/Button'
import {
  Compass,
  Hammer,
  Key,
  ShieldCheck,
  HeartHandshake,
  Award,
  Trees,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const pillars = [
    {
      icon: Compass,
      step: '01',
      title: 'Design',
      subtitle: 'Architectural Vision & Spatial Harmony',
      description:
        'Every Sunshine project begins with thoughtful planning. We engineer floor plans for zero wall compromise, optimal cross-ventilation, 100% Vaastu alignment, and generous natural daylighting.',
    },
    {
      icon: Hammer,
      step: '02',
      title: 'Construct',
      subtitle: 'Engineering Precision & Material Integrity',
      description:
        'From seismic-resistant RCC framed structures to premium vitrified tiling, solar fencing, and eco-friendly rainwater harvesting, our construction adheres strictly to certified engineering standards.',
    },
    {
      icon: Key,
      step: '03',
      title: 'Deliver',
      subtitle: 'Transparent Statutory Handovers',
      description:
        'We believe trust is forged through punctuality and statutory compliance. Every development carries complete HMDA sanctions, TS RERA registrations, and transparent documentation for lifelong peace of mind.',
    },
  ]

  const values = [
    {
      icon: ShieldCheck,
      title: 'Integrity & Transparency',
      description:
        'Clear documentation, verified statutory approvals (HMDA & TS RERA), and straightforward communication with zero hidden clauses.',
    },
    {
      icon: Award,
      title: 'Uncompromising Quality',
      description:
        'High-grade structural steel, certified concrete, precision workmanship, and rigorous multi-stage quality inspections.',
    },
    {
      icon: HeartHandshake,
      title: 'Customer-First Focus',
      description:
        'Dedicated client servicing from initial site walkthrough to key handover, property registration, and post-possession assistance.',
    },
    {
      icon: Trees,
      title: 'Sustainable Communities',
      description:
        'Incorporating rainwater harvesting, solar boundary fencing, energy-efficient illumination, and expansive landscaped open zones.',
    },
  ]

  const stats = [
    { label: 'Years of Excellence', value: '15+', subtext: 'In Hyderabad Real Estate' },
    { label: 'Residences Delivered', value: '1,000+', subtext: 'Across Prime Corridors' },
    { label: 'Happy Families', value: '1,200+', subtext: 'Thriving in Sunshine Enclaves' },
    { label: 'Delivered Communities', value: '6+', subtext: 'Kokapet, Narsingi, Jubilee Hills' },
  ]

  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      <SEO
        title="About Sunshine Infra | 15+ Years Building Trust in Hyderabad Real Estate"
        description="Learn about Sunshine Infra, Hyderabad's trusted real estate developer with 15+ years of excellence, 1,000+ homes delivered, and an uncompromised commitment to quality construction."
        canonicalUrl="https://sunshineinfra.in/about"
        keywords={[
          'About Sunshine Infra',
          'real estate developer Hyderabad',
          'builders in Hyderabad',
          'trusted builders Hyderabad',
          'Sunshine Infra Bowrampet',
          'residential developers Hyderabad',
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Sunshine Infra',
          url: 'https://sunshineinfra.in/about',
          mainEntity: {
            '@type': 'Organization',
            name: 'Sunshine Infra',
            foundingDate: '2011',
            description: 'Premier real estate development firm in Hyderabad specializing in design-led gated communities.',
            url: 'https://sunshineinfra.in',
            logo: 'https://sunshineinfra.in/assets/branding/sunshine-logo.png',
          },
        }}
      />

      {/* 1. Hero Header */}
      <section className="relative pt-24 sm:pt-32 pb-10 sm:pb-16 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="/assets/projects/sunshine-infra-hyderabad.jpg"
            alt="Sunshine Infra Corporate Architecture"
            className="w-full h-full object-cover object-center filter grayscale"
          />
          <div className="absolute inset-0 bg-white/70 backdrop-blur-xs" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#E06B2D] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E06B2D]" />
              <span>About Sunshine Infra</span>
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.12]">
              Shaping Hyderabad’s Skyline with <br />
              <span className="italic font-normal text-[#C28B5B]">Integrity & Purpose.</span>
            </h1>
            <p className="font-sans text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              For over a decade and a half, Sunshine Infra has developed premium gated communities, luxury apartment complexes, and landmark residential addresses across Hyderabad’s most coveted growth corridors.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Key Stats Ribbon */}
      <section className="relative bg-slate-50 border-b border-slate-200/80 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 text-center">
            {stats.map((s, idx) => (
              <div key={idx} className="p-2 sm:p-3 pt-4 sm:pt-2">
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#E06B2D]">
                  {s.value}
                </div>
                <div className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-slate-800 mt-0.5 font-semibold">
                  {s.label}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">
                  {s.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Company Story & Editorial Philosophy */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-md group">
                <img
                  src="/assets/projects/sunshine-infra-hyderabad.jpg"
                  alt="Sunshine Infra Architectural Craftsmanship"
                  className="w-full h-[260px] sm:h-[380px] lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm">
                  <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#E06B2D] font-semibold">
                    Hyderabad Real Estate Developer
                  </div>
                  <div className="text-xs sm:text-sm font-display font-bold text-slate-900 mt-0.5">
                    Delivering Quality Communities Since Inception
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#E06B2D] font-semibold">
                Our Philosophy
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Homes Crafted for Generations, <br />
                <span className="italic font-normal text-[#C28B5B]">Engineered Without Compromise.</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                For over 15+ years across Kokapet, Narsingi, Jubilee Hills, and Bowrampet, Sunshine Infra has developed enduring residential sanctuaries where families flourish.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                With 1,000+ residences brought to market and 1,200+ proud families, we unite statutory HMDA/RERA compliance with uncompromising architectural finesse.
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-3 text-[11px] sm:text-xs font-mono text-[#C28B5B]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#E06B2D]" />
                  <span>100% HMDA / RERA Compliant</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#E06B2D]" />
                  <span>Vaastu Architectural Principles</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#E06B2D]" />
                  <span>Zero Common Wall Sanctions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The “Design, Construct, Deliver” Approach */}
      <section className="py-12 sm:py-20 lg:py-24 bg-slate-50 border-y border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2 sm:space-y-3">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#E06B2D] font-semibold">
              The Sunshine Process
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Design. Construct. Deliver.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Our end-to-end framework guarantees meticulous quality control from architectural drafting to final key handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.step}
                  className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 hover:border-[#E06B2D]/40 transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-lg"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#E06B2D] group-hover:bg-[#E06B2D] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-lg font-bold text-slate-300 group-hover:text-[#E06B2D] transition-colors">
                        {pillar.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                        {pillar.title}
                      </h3>
                      <div className="text-[11px] font-mono text-[#C28B5B] mt-0.5">
                        {pillar.subtitle}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 sm:mb-14 space-y-2 sm:space-y-3">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#E06B2D] font-semibold">
              Guiding Principles
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
              Values That Define Every Footprint
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our reputation has been earned by delivering on our promises and building enduring relationships with homeowners.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <div
                  key={i}
                  className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#E06B2D]/40 transition-all space-y-1.5 sm:space-y-2.5 shadow-xs"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#E06B2D] shadow-xs">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <h3 className="font-display text-xs sm:text-base font-bold text-slate-900 leading-tight">{v.title}</h3>
                  <p className="text-[10px] sm:text-xs text-slate-600 leading-snug line-clamp-3 sm:line-clamp-none">{v.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#E06B2D] font-semibold">
            Discover Your Next Address
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Experience the Sunshine Standard
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Tour our ongoing flagship development, Sunshine Green Meadows at Bowrampet, or connect directly with our corporate team to learn about upcoming opportunities.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to={projectRoutes.greenMeadows}>
              <Button variant="primary" size="md" className="w-full sm:w-auto">
                <span>Explore Sunshine Green Meadows</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="md" className="w-full sm:w-auto border-slate-300 text-slate-800 hover:bg-slate-100">
                <span>Contact Corporate Office</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

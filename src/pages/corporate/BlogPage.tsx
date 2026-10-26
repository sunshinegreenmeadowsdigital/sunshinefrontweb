import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/shared/Button'
import {
  BookOpen,
  Clock,
  ArrowRight,
  Tag,
  X,
} from 'lucide-react'
import { cn } from '@/utils/cn'

interface Article {
  id: string
  title: string
  category: 'Market Trends' | 'Homebuyer Guide' | 'Architecture'
  publishDate: string
  readTime: string
  excerpt: string
  content: string[]
  tags: string[]
}

const articlesData: Article[] = [
  {
    id: 'bowrampet-growth-corridor',
    title: 'The Bowrampet Corridor: The Rise of North-West Hyderabad’s Gated Living',
    category: 'Market Trends',
    publishDate: 'October 2026',
    readTime: '4 min read',
    excerpt:
      'How connectivity via ORR Exit 4, prestigious school clusters, and natural green buffers are transforming Bowrampet into one of Hyderabad’s most desirable residential zones.',
    content: [
      'North-West Hyderabad is undergoing a considered transformation. Driven by the completion and expansion of the Nehru Outer Ring Road (ORR), corridors like Bowrampet have shifted from peripheral localities into prime residential epicenters.',
      'A primary catalyst for this rise is accessibility. With ORR Exit No. 4 located less than 5 minutes from key arterial roads like DPS Road, professionals working in the Financial District, Hitec City, and Dundigal enjoy direct high-speed commutes while returning home to unpolluted, tranquil environments.',
      'Complementing the connectivity is an established educational infrastructure. Top-tier institutions such as Delhi Public School (DPS), Oakridge International, The Creek Planet School, and Silver Oaks provide seamless schooling for young families without demanding long morning commutes.',
      'As high-density central zones face space constraints, thoughtfully planned master communities like Sunshine Green Meadows demonstrate the advantages of expansive open parcels, multi-level clubhouses, and clean air living.',
    ],
    tags: ['Bowrampet', 'ORR Exit 4', 'Infrastructure', 'Hyderabad Real Estate'],
  },
  {
    id: 'rera-hmda-checklist',
    title: 'Navigating Statutory Compliance: What HMDA & TS RERA Mean for Buyers',
    category: 'Homebuyer Guide',
    publishDate: 'September 2026',
    readTime: '5 min read',
    excerpt:
      'A straightforward guide to statutory clearances, checking TS RERA project registration numbers, and ensuring title transparency before making a property commitment.',
    content: [
      'Purchasing a home is one of the most significant financial and emotional investments a family will make. In Telangana, statutory frameworks established by the Hyderabad Metropolitan Development Authority (HMDA) and Telangana State Real Estate Regulatory Authority (TS RERA) have elevated buyer protection.',
      'Before committing to an apartment purchase, verify that the project possesses a valid TS RERA registration number (such as P02200006843 for Sunshine Green Meadows). RERA mandates transparent disclosures of sanctioned floor plans, title ownership, escrow account management, and construction milestones.',
      'HMDA approvals ensure that the project layout adheres to zoning regulations, setbacks, fire safety mandates, and public utility reservations. Ensuring that your developer provides verified HMDA proceedings protects your asset for generations to come.',
      'At Sunshine Infra, every project undergoes rigorous legal due diligence and statutory registration before marketing, ensuring total transparency for every homeowner.',
    ],
    tags: ['TS RERA', 'HMDA Sanctions', 'Homebuyer Guide', 'Legal Transparency'],
  },
  {
    id: 'vaastu-architecture',
    title: 'The Balance of Vaastu & Contemporary Architecture in Modern Apartments',
    category: 'Architecture',
    publishDate: 'August 2026',
    readTime: '4 min read',
    excerpt:
      'How intelligent spatial planning seamlessly integrates time-tested Vaastu discipline with modern cross-ventilation and open-concept living.',
    content: [
      'For many Indian families, Vaastu compliance is a foundational criterion when selecting a residential layout. Traditionally, homebuyers were often forced to compromise between rigid Vaastu orientations and modern functional aesthetics.',
      'Contemporary architectural engineering bridges this gap. By designing residential towers with zero wall sharing and generous corner exposures, apartments can feature unobstructed East and West entrances alongside expansive north and east-facing balconies that welcome natural morning light.',
      'Cross-ventilation is an integral corollary to Vaastu principles of energy flow. Large perimeter windows and thoughtfully aligned kitchen utility corridors ensure constant circulation of fresh air, naturally cooling living spaces and reducing reliance on artificial cooling.',
      'Sunshine Green Meadows integrates 100% Vaastu alignment across all four blocks without compromising spatial openness or interior flow.',
    ],
    tags: ['Vaastu Architecture', 'Apartment Design', 'Living Philosophy', 'Ventilation'],
  },
]

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [activeArticle, setActiveArticle] = useState<Article | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categories = ['All', 'Market Trends', 'Homebuyer Guide', 'Architecture']

  const filteredArticles =
    selectedCategory === 'All'
      ? articlesData
      : articlesData.filter((a) => a.category === selectedCategory)

  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      <SEO
        title="Real Estate Insights & Buyer Guides | Sunshine Infra Hyderabad"
        description="Read expert real estate guides on Bowrampet growth, TS RERA & HMDA compliance, and Vaastu apartment design in Hyderabad curated by Sunshine Infra."
        canonicalUrl="https://sunshineinfra.in/blog"
        keywords={[
          'real estate insights Hyderabad',
          'Bowrampet growth corridor',
          'TS RERA checklist',
          'HMDA approvals guide',
          'Vaastu apartments Hyderabad',
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Sunshine Infra Real Estate Insights',
          url: 'https://sunshineinfra.in/blog',
          description: 'Perspectives on residential property, urban infrastructure, and homebuyer guidance in Hyderabad.',
          publisher: {
            '@type': 'Organization',
            name: 'Sunshine Infra',
            logo: 'https://sunshineinfra.in/assets/branding/sunshine-logo.png',
          },
        }}
      />

      {/* 1. Page Header */}
      <section className="relative pt-24 sm:pt-32 pb-10 sm:pb-16 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#E06B2D] font-semibold flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-[#E06B2D]" />
              <span>Editorial & Perspectives</span>
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Insights on Real Estate, <br />
              <span className="italic font-normal text-[#C28B5B]">Growth Corridors & Design.</span>
            </h1>
            <p className="font-sans text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl">
              Curated perspectives on Hyderabad’s urban expansion, homebuyer checklists, statutory regulations, and modern architectural philosophy.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Articles Grid & Categories */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex items-center gap-1.5 sm:gap-2 mb-8 sm:mb-12 border-b border-slate-200 pb-4 sm:pb-6 overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  'px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all select-none whitespace-nowrap shrink-0',
                  selectedCategory === cat
                    ? 'bg-[#E06B2D] text-white font-bold shadow-md shadow-[#E06B2D]/20'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-200/80'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="p-5 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 hover:border-[#E06B2D]/40 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-slate-200/60 group cursor-pointer"
                onClick={() => setActiveArticle(article)}
              >
                <div className="space-y-3 sm:space-y-4">
                  {/* Meta Bar */}
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-500">
                    <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-orange-50 border border-orange-200/60 text-[#E06B2D] uppercase tracking-wider font-semibold">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E06B2D]" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#E06B2D] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 sm:pt-5 border-t border-slate-100 flex items-center justify-between mt-4">
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-500">
                    {article.publishDate}
                  </span>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E06B2D] group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Editorial Integrity Notice */}
          <div className="mt-10 sm:mt-14 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-center max-w-2xl mx-auto space-y-1.5">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#C28B5B] font-semibold">
              Editorial Policy
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sunshine Infra articles are written to provide objective guidance on real-estate regulations, urban growth corridors, and architectural concepts. We never publish unverified awards or inflated market metrics.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Full Article Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl z-10 max-h-[88dvh] overflow-y-auto text-slate-900 space-y-5">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 pr-6">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-600">
                <span className="px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200/60 text-[#E06B2D] uppercase tracking-wider font-semibold text-[10px] sm:text-xs">
                  {activeArticle.category}
                </span>
                <span>•</span>
                <span>{activeArticle.publishDate}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                {activeArticle.title}
              </h2>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-b border-slate-200 py-4 sm:py-5">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Article Tags */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1">
              <Tag className="w-3.5 h-3.5 text-[#E06B2D]" />
              {activeArticle.tags.map((t, i) => (
                <span
                  key={i}
                  className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-[10px] font-mono text-slate-700 bg-slate-100 border border-slate-200/60"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. Consultation CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#E06B2D] font-semibold">
            Have Questions About Bowrampet?
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Connect With Our Property Advisors
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our team is available to walk you through master layouts, TS RERA documentation, and schedule a private consultation.
          </p>

          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="primary" size="md" className="w-full sm:w-auto">
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

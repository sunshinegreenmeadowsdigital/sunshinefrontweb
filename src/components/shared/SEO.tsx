import React, { useEffect } from 'react'

export interface SEOProps {
  title: string
  description: string
  canonicalUrl: string
  ogType?: 'website' | 'article'
  ogImage?: string
  keywords?: string[]
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>
  noindex?: boolean
}

const DEFAULT_OG_IMAGE = 'https://sunshineinfra.in/assets/projects/green-meadows/elevations/aerial-night.jpg'
const SITE_NAME = 'Sunshine Infra'

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  keywords,
  jsonLd,
  noindex = false,
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title

    // 2. Helper to set or create meta tags
    const setMetaTag = (selector: string, attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement | null
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attrName, attrValue)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Standard Meta Tags
    setMetaTag('meta[name="description"]', 'name', 'description', description)
    setMetaTag('meta[name="robots"]', 'name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')

    if (keywords && keywords.length > 0) {
      setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords.join(', '))
    }

    // Open Graph Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title)
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description)
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME)
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType)
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage)

    // Twitter Tags
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage)

    // 3. Update Canonical Link Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonicalUrl)

    // 4. Update or Inject Page-Specific JSON-LD Schema
    const scriptId = 'page-jsonld-schema'
    const existingScript = document.getElementById(scriptId)
    if (existingScript) {
      existingScript.remove()
    }

    if (jsonLd) {
      const script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }

    return () => {
      // Clean up script on unmount
      const scriptToRemove = document.getElementById(scriptId)
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [title, description, canonicalUrl, ogType, ogImage, keywords, jsonLd, noindex])

  return null
}

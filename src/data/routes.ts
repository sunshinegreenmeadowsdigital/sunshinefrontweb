/**
 * Centralized Route Registry
 * Preserves legacy URL paths and canonical structure
 */

export interface NavRoute {
  path: string
  label: string
  isExternal?: boolean
  description?: string
}

export const corporateRoutes: NavRoute[] = [
  { path: '/', label: 'Home', description: 'Sunshine Infra Corporate Homepage' },
  { path: '/about', label: 'About', description: 'About Sunshine Infra, Vision & Leadership' },
  { path: '/ongoing-project', label: 'Ongoing Project', description: 'Overview of Sunshine Green Meadows' },
  { path: '/completed-projects', label: 'Completed Projects', description: 'Past Track Record & Delivered Communities' },
  { path: '/blog', label: 'Blog', description: 'Real Estate Insights & Architectural Articles' },
  { path: '/contact', label: 'Contact', description: 'Corporate Enquiries & Office Location' },
]

export const projectRoutes = {
  greenMeadows: '/sunshine-green-meadows',
  greenMeadowsLegacy: '/sunshine-green-meadows/index.html',
  greenMeadowsTrailing: '/sunshine-green-meadows/',
} as const

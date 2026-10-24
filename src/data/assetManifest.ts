/**
 * Asset Organization Manifest
 *
 * Tracks all authentic project and corporate media assets.
 * Documents source URLs, local paths, and verification status.
 */

export interface AssetRecord {
  id: string
  title: string
  category: 'branding' | 'elevation' | 'floor_plan' | 'gallery' | 'document' | 'completed'
  sourceUrl: string
  targetLocalPath: string
  status: 'imported_locally' | 'verified_in_audit' | 'pending_client_supply'
  notes?: string
}

export const assetManifest: AssetRecord[] = [
  // Branding
  {
    id: 'corp-logo-light',
    title: 'Sunshine Infra Corporate Logo (Light / Navbar)',
    category: 'branding',
    sourceUrl: 'https://sunshineinfra.in/img/logo.png',
    targetLocalPath: '/assets/branding/sunshine-logo.png',
    status: 'imported_locally',
  },
  {
    id: 'corp-logo-dark',
    title: 'Sunshine Infra Corporate Logo (Dark / Footer)',
    category: 'branding',
    sourceUrl: 'https://sunshineinfra.in/img/logo-dark.png',
    targetLocalPath: '/assets/branding/sunshine-logo-dark.png',
    status: 'imported_locally',
  },
  {
    id: 'meadows-logo',
    title: 'Sunshine Green Meadows Project Logo',
    category: 'branding',
    sourceUrl: 'https://sunshineinfra.in/sunshine-green-meadows/images/logo.png',
    targetLocalPath: '/assets/branding/green-meadows-logo.png',
    status: 'imported_locally',
  },

  // Project Elevations & Renders
  {
    id: 'meadows-hero-elevation',
    title: 'Green Meadows Main Elevation Render',
    category: 'elevation',
    sourceUrl: 'https://sunshineinfra.in/img/sunshine-infra-greenmeadows-bowrampet.jpg',
    targetLocalPath: '/assets/projects/green-meadows/elevations/hero-elevation.jpg',
    status: 'imported_locally',
  },
  {
    id: 'meadows-aerial-elevation',
    title: 'Green Meadows Aerial Elevation',
    category: 'elevation',
    sourceUrl: 'https://sunshineinfra.in/sunshine-green-meadows/images/sunshine-green-meadows-bowrampet.jpg',
    targetLocalPath: '/assets/projects/green-meadows/elevations/aerial.jpg',
    status: 'imported_locally',
  },
  {
    id: 'meadows-clubhouse-render',
    title: 'Green Meadows 10,000 Sft. Clubhouse Render',
    category: 'elevation',
    sourceUrl: 'https://sunshineinfra.in/sunshine-green-meadows/images/sunshine-greenmeadows-clubhouse.png',
    targetLocalPath: '/assets/projects/green-meadows/elevations/clubhouse.png',
    status: 'imported_locally',
  },

  // Corporate Photography
  {
    id: 'corp-slider-1',
    title: 'Corporate Architectural Hero 1',
    category: 'elevation',
    sourceUrl: 'https://sunshineinfra.in/img/slider-1.jpg',
    targetLocalPath: '/assets/projects/hero-1.jpg',
    status: 'imported_locally',
  },
  {
    id: 'corp-slider-2',
    title: 'Corporate Architectural Hero 2',
    category: 'elevation',
    sourceUrl: 'https://sunshineinfra.in/img/slider-2.jpg',
    targetLocalPath: '/assets/projects/hero-2.jpg',
    status: 'imported_locally',
  },
  {
    id: 'corp-slider-3',
    title: 'Corporate Architectural Hero 3',
    category: 'elevation',
    sourceUrl: 'https://sunshineinfra.in/img/slider-3.jpg',
    targetLocalPath: '/assets/projects/hero-3.jpg',
    status: 'imported_locally',
  },
  {
    id: 'corp-about-img',
    title: 'Sunshine Infra About Architecture Photo',
    category: 'elevation',
    sourceUrl: 'https://sunshineinfra.in/img/sunshine-infra-hyderabad.jpg',
    targetLocalPath: '/assets/projects/sunshine-infra-hyderabad.jpg',
    status: 'imported_locally',
  },

  // Completed Projects
  {
    id: 'completed-ecopolis',
    title: 'Sunshine Ecopolis Kokapet',
    category: 'completed',
    sourceUrl: 'https://sunshineinfra.in/img/completed-projects-1.jpg',
    targetLocalPath: '/assets/projects/completed/ecopolis.jpg',
    status: 'imported_locally',
  },
  {
    id: 'completed-la-grand',
    title: 'Sunshine La Grand Narsingi',
    category: 'completed',
    sourceUrl: 'https://sunshineinfra.in/img/completed-projects-2.jpg',
    targetLocalPath: '/assets/projects/completed/la-grand.jpg',
    status: 'imported_locally',
  },
  {
    id: 'completed-elite',
    title: 'Sunshine Elite Pragathi Nagar',
    category: 'completed',
    sourceUrl: 'https://sunshineinfra.in/img/completed-projects-3.jpg',
    targetLocalPath: '/assets/projects/completed/elite.jpg',
    status: 'imported_locally',
  },
  {
    id: 'completed-blue-pearl',
    title: 'Sunshine Blue Pearl Hafeezpet',
    category: 'completed',
    sourceUrl: 'https://sunshineinfra.in/img/completed-projects-4.jpg',
    targetLocalPath: '/assets/projects/completed/blue-pearl.jpg',
    status: 'imported_locally',
  },
  {
    id: 'completed-green-woods',
    title: 'Sunshine Green Woods Hafeezpet',
    category: 'completed',
    sourceUrl: 'https://sunshineinfra.in/img/completed-projects-5.jpg',
    targetLocalPath: '/assets/projects/completed/green-woods.jpg',
    status: 'imported_locally',
  },
  {
    id: 'completed-gardenia',
    title: 'Sunshine Gardenia Jubilee Hills',
    category: 'completed',
    sourceUrl: 'https://sunshineinfra.in/img/completed-projects-6.jpg',
    targetLocalPath: '/assets/projects/completed/gardenia.jpg',
    status: 'imported_locally',
  },
]

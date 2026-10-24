/**
 * Sunshine Green Meadows Detailed Structured Data
 * All data sourced directly from verified audit of https://sunshineinfra.in/sunshine-green-meadows/
 */

export interface FloorPlanItem {
  id: string
  title: string
  subtitle: string
  block: 'master' | 'block-a' | 'block-b' | 'block-c' | 'block-d'
  planType: 'Master Layout' | 'Ground Floor' | 'Typical Floor'
  image: string
  alt: string
}

export const floorPlansData: FloorPlanItem[] = [
  {
    id: 'master-plan',
    title: 'Master Layout & Site Plan',
    subtitle: 'Spread across 4 residential blocks with expansive central open spaces',
    block: 'master',
    planType: 'Master Layout',
    image: '/assets/projects/green-meadows/floor-plans/master-plan.jpg',
    alt: 'Sunshine Green Meadows Master Layout Plan',
  },
  {
    id: 'block-a-ground',
    title: 'Block A — Ground Floor',
    subtitle: 'Spacious entry-level layout with easy access to amenities',
    block: 'block-a',
    planType: 'Ground Floor',
    image: '/assets/projects/green-meadows/floor-plans/block-a-ground.jpg',
    alt: 'Sunshine Green Meadows Block A Ground Floor Plan',
  },
  {
    id: 'block-a-typical',
    title: 'Block A — Typical Floor',
    subtitle: 'Optimized 2 & 3 BHK residences with well-placed balconies',
    block: 'block-a',
    planType: 'Typical Floor',
    image: '/assets/projects/green-meadows/floor-plans/block-a-typical.jpg',
    alt: 'Sunshine Green Meadows Block A Typical Floor Plan',
  },
  {
    id: 'block-b-ground',
    title: 'Block B — Ground Floor',
    subtitle: 'Ground floor layout enjoying direct garden connectivity',
    block: 'block-b',
    planType: 'Ground Floor',
    image: '/assets/projects/green-meadows/floor-plans/block-b-ground.jpg',
    alt: 'Sunshine Green Meadows Block B Ground Floor Plan',
  },
  {
    id: 'block-b-typical',
    title: 'Block B — Typical Floor',
    subtitle: 'Cross-ventilated living spaces with modern kitchen and utility zones',
    block: 'block-b',
    planType: 'Typical Floor',
    image: '/assets/projects/green-meadows/floor-plans/block-b-typical.jpg',
    alt: 'Sunshine Green Meadows Block B Typical Floor Plan',
  },
  {
    id: 'block-c-ground',
    title: 'Block C — Ground Floor',
    subtitle: 'Private residential suites on ground level',
    block: 'block-c',
    planType: 'Ground Floor',
    image: '/assets/projects/green-meadows/floor-plans/block-c-ground.jpg',
    alt: 'Sunshine Green Meadows Block C Ground Floor Plan',
  },
  {
    id: 'block-c-typical',
    title: 'Block C — Typical Floor',
    subtitle: 'Expansive 2 & 3 BHK apartments positioned for sunrise and sunset light',
    block: 'block-c',
    planType: 'Typical Floor',
    image: '/assets/projects/green-meadows/floor-plans/block-c-typical.jpg',
    alt: 'Sunshine Green Meadows Block C Typical Floor Plan',
  },
  {
    id: 'block-d-ground',
    title: 'Block D — Ground Floor',
    subtitle: 'Ground floor residence layout facing tranquil community corridors',
    block: 'block-d',
    planType: 'Ground Floor',
    image: '/assets/projects/green-meadows/floor-plans/block-d-ground.jpg',
    alt: 'Sunshine Green Meadows Block D Ground Floor Plan',
  },
  {
    id: 'block-d-typical',
    title: 'Block D — Typical Floor',
    subtitle: 'Premium residential apartments with uninterrupted forest corridor views',
    block: 'block-d',
    planType: 'Typical Floor',
    image: '/assets/projects/green-meadows/floor-plans/block-d-typical.jpg',
    alt: 'Sunshine Green Meadows Block D Typical Floor Plan',
  },
]

export interface GalleryItem {
  id: string
  title: string
  category: 'Architectural Renders' | 'Interior Living' | 'Clubhouse' | 'Landscape'
  image: string
  alt: string
}

export const galleryData: GalleryItem[] = [
  {
    id: 'aerial-elevation',
    title: 'Architectural Aerial Master View',
    category: 'Architectural Renders',
    image: '/assets/projects/green-meadows/elevations/aerial.jpg',
    alt: 'Sunshine Green Meadows Architectural Perspective',
  },
  {
    id: 'clubhouse-exterior',
    title: '10,000 Sft. Grand Clubhouse',
    category: 'Clubhouse',
    image: '/assets/projects/green-meadows/elevations/clubhouse.png',
    alt: 'Sunshine Green Meadows Clubhouse Architecture',
  },
  {
    id: 'living-view',
    title: 'Expansive Living & Dining Suite',
    category: 'Interior Living',
    image: '/assets/projects/green-meadows/gallery/living-view.jpg',
    alt: '3 BHK Living Room Perspective at Green Meadows',
  },
  {
    id: 'landscape-view',
    title: 'Landscaped Gated Enclave',
    category: 'Landscape',
    image: '/assets/projects/green-meadows/gallery/landscape-view.jpg',
    alt: 'Gated Community Open Spaces at Bowrampet',
  },
  {
    id: 'bedroom-view',
    title: 'Comfortable Bedroom Design',
    category: 'Interior Living',
    image: '/assets/projects/green-meadows/gallery/bedroom-view.jpg',
    alt: '2 BHK Bedroom Layout View at Green Meadows',
  },
  {
    id: 'medchal-view',
    title: 'Corridor Architectural Vista',
    category: 'Architectural Renders',
    image: '/assets/projects/green-meadows/gallery/medchal-view.jpg',
    alt: 'Green Meadows Bowrampet Tower Perspective',
  },
  {
    id: 'clubhouse-indoor',
    title: 'Clubhouse Leisure & Lounge',
    category: 'Clubhouse',
    image: '/assets/projects/green-meadows/gallery/clubhouse-interior.jpg',
    alt: 'Clubhouse Amenities and Leisure Spaces',
  },
  {
    id: 'gallery-0',
    title: 'Walkway & Landscaping Architecture',
    category: 'Landscape',
    image: '/assets/projects/green-meadows/gallery/gallery-0.jpg',
    alt: 'Sunshine Green Meadows Walkway Gardens',
  },
]

export interface ProjectStatsConfig {
  landExtent: {
    workingValue: string
    displayBadge: string
    isVerified: boolean
    verificationNotice: string
  }
  blocks: {
    count: number
    display: string
    sublabel: string
  }
  apartments: {
    count: number
    display: string
    sublabel: string
  }
  configurations: {
    types: string
    display: string
    sublabel: string
  }
  clubhouse: {
    areaSft: string
    display: string
    sublabel: string
  }
}

export const projectStats: ProjectStatsConfig = {
  landExtent: {
    workingValue: '2.87 Acres',
    displayBadge: '2.87 Acres',
    isVerified: true,
    verificationNotice: 'Sanctioned Extent: 2.87 Acres',
  },
  blocks: {
    count: 4,
    display: '4 Blocks',
    sublabel: 'Residential Towers A, B, C & D',
  },
  apartments: {
    count: 236,
    display: '236 Apartments',
    sublabel: 'Gated Master Enclave',
  },
  configurations: {
    types: '2 & 3 BHK',
    display: '2 & 3 BHK',
    sublabel: '100% Vaastu Discipline',
  },
  clubhouse: {
    areaSft: '~10,000 Sft.',
    display: '~10,000 Sft.',
    sublabel: 'Multi-Level Clubhouse',
  },
}

export interface AmenityCategory {
  title: string
  description: string
  items: string[]
}

export const amenityCategories: AmenityCategory[] = [
  {
    title: 'Clubhouse & Wellness',
    description: 'Nearly 10,000 Sft. multi-level recreational clubhouse crafted for health, rejuvenation, and leisure.',
    items: [
      'Air-conditioned gymnasium',
      'Multipurpose hall',
      'Meditation and yoga centre',
      'Indoor games',
      'Squash court',
      'Reception and waiting lounge',
    ],
  },
  {
    title: 'Outdoor & Recreation',
    description: 'Lush active spaces thoughtfully planned across the master enclave for all generations.',
    items: [
      'Swimming pool',
      'Children\'s play area',
      'Cricket practice net',
      'Landscaped gardens',
      'Walking track',
      'Pergolas and elders\' seating',
    ],
  },
  {
    title: 'Comfort & Infrastructure',
    description: 'Modern residential infrastructure engineered for effortless convenience and sustainability.',
    items: [
      'High-speed passenger lifts',
      'Ample parking',
      '24-hour water supply',
      'Rainwater harvesting',
      'Solar fencing',
      'DG backup',
    ],
  },
  {
    title: 'Safety & Security',
    description: 'Robust multi-layer protective systems for complete peace of mind around the clock.',
    items: [
      'CCTV surveillance',
      '24/7 security',
      'Intercom',
      'Automatic entry and exit',
      'Earthquake-resistant design',
    ],
  },
]

export interface FaqItem {
  question: string
  answer: string
}

export const faqData: FaqItem[] = [
  {
    question: 'Where is Sunshine Green Meadows located?',
    answer:
      'Sunshine Green Meadows is located at Survey No. 536, near the HP Petrol Bunk on DPS Road, Bowrampet Village, Malkajgiri - Medchal District, Hyderabad - 500043. It enjoys immediate connectivity just 5 minutes from Nehru Outer Ring Road (ORR) Exit No. 4 and 20 minutes from Miyapur Metro Station.',
  },
  {
    question: 'What configurations are available at Green Meadows?',
    answer:
      'The project features carefully designed 2 BHK and 3 BHK luxury lifestyle apartments across 4 high-rise blocks, planned with 100% Vaastu compliance, abundant cross-ventilation, and private balconies.',
  },
  {
    question: 'How many blocks and apartments comprise the project?',
    answer:
      'The development comprises 4 residential towers (Block A, Block B, Block C, Block D) housing a total of 236 exclusive residential apartments.',
  },
  {
    question: 'What amenities are provided in the clubhouse?',
    answer:
      'The grand clubhouse spans nearly 10,000 Sft. and features an air-conditioned fitness gymnasium, swimming pool, reception lounge, multipurpose celebration hall, yoga/meditation hall, indoor games, squash court, and an adjoining children’s play park.',
  },
  {
    question: 'Is Sunshine Green Meadows approved by HMDA and RERA?',
    answer:
      'Yes. The project is fully approved by the Hyderabad Metropolitan Development Authority (HMDA) and registered under the Telangana Real Estate Regulatory Authority (TS RERA).',
  },
  {
    question: 'What is the TS RERA registration number for Green Meadows?',
    answer:
      'The official Telangana State RERA Registration Number for Sunshine Green Meadows is P02200006843.',
  },
  {
    question: 'How can I schedule a guided site visit?',
    answer:
      'You can schedule a private site visit by using the "Book a Site Visit" form on this page, calling our direct sales desk at +91 7997482222, or sending a direct message via WhatsApp. Our sales executives are available on-site Monday through Sunday from 10:00 AM to 6:30 PM.',
  },
]

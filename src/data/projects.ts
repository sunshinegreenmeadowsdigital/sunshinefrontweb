/**
 * Verified Project Data
 * Sourced directly from official Sunshine Infra portfolio and audit.
 */

export interface CompletedProject {
  id: string
  name: string
  location: string
  category: 'Luxury Apartments' | 'Gated Community' | 'Premium Residences'
  description: string
  image: string
  hasImage: boolean
  highlights: string[]
}

export const completedProjectsData: CompletedProject[] = [
  {
    id: 'ecopolis',
    name: 'Sunshine Ecopolis',
    location: 'Kokapet, Hyderabad',
    category: 'Luxury Apartments',
    description: 'Sprawling high-life gated community in Kokapet financial corridor with expansive green spaces.',
    image: '/assets/projects/completed/ecopolis.jpg',
    hasImage: true,
    highlights: ['Kokapet Financial District', '1.75 Acres', 'Delivered Community'],
  },
  {
    id: 'la-grand',
    name: 'Sunshine La Grand',
    location: 'Narsingi, Hyderabad',
    category: 'Premium Residences',
    description: 'A residential haven where stunning modern architecture and refined living spaces meet in harmony.',
    image: '/assets/projects/completed/la-grand.jpg',
    hasImage: true,
    highlights: ['Narsingi ORR Corridor', 'Luxury Living', 'Handed Over'],
  },
  {
    id: 'elite',
    name: 'Sunshine Elite',
    location: 'Pragathi Nagar, Hyderabad',
    category: 'Gated Community',
    description: 'Designed for families seeking a relaxed ambience combined with modern urban sensibilities.',
    image: '/assets/projects/completed/elite.jpg',
    hasImage: true,
    highlights: ['Pragathi Nagar', 'Family Focused', '100% Vaastu'],
  },
  {
    id: 'blue-pearl',
    name: 'Sunshine Blue Pearl',
    location: 'Hafeezpet, Hyderabad',
    category: 'Luxury Apartments',
    description: 'Bestowing elevated everyday living with thoughtfully engineered spaces and ventilation.',
    image: '/assets/projects/completed/blue-pearl.jpg',
    hasImage: true,
    highlights: ['Hafeezpet IT Corridor', 'Strategic Location', 'Delivered'],
  },
  {
    id: 'green-woods',
    name: 'Sunshine Green Woods',
    location: 'Hafeezpet, Hyderabad',
    category: 'Gated Community',
    description: 'An oasis of calm and comfort nestled close to major commercial and educational hubs.',
    image: '/assets/projects/completed/green-woods.jpg',
    hasImage: true,
    highlights: ['Hafeezpet', 'Nature Surrounded', 'Completed'],
  },
  {
    id: 'gardenia',
    name: 'Sunshine Gardenia',
    location: 'Jubilee Hills, Hyderabad',
    category: 'Premium Residences',
    description: 'A benchmark development blending prestige, sophisticated styling, and central convenience.',
    image: '/assets/projects/completed/gardenia.jpg',
    hasImage: true,
    highlights: ['Jubilee Hills', 'Prime Living', 'Excellence in Finish'],
  },
  {
    id: 'green-valley',
    name: 'Sunshine Green Valley',
    location: 'Jubilee Hills, Hyderabad',
    category: 'Premium Residences',
    description: 'Exclusively crafted apartments embodying understated elegance, simplicity, and privacy.',
    image: '/assets/projects/completed/gardenia.jpg', // Documented placeholder note: authentic image pending from client
    hasImage: false,
    highlights: ['Jubilee Hills', 'Exclusive Units', 'Delivered'],
  },
  {
    id: 'enclave',
    name: 'Sunshine Enclave',
    location: 'Gachibowli, Hyderabad',
    category: 'Luxury Apartments',
    description: 'Where fine living meets seamless connectivity to Hitec City and Financial District.',
    image: '/assets/projects/completed/ecopolis.jpg', // Documented placeholder note
    hasImage: false,
    highlights: ['Gachibowli', 'IT Corridor Proximity', 'Completed'],
  },
]

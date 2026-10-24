/**
 * Project Configuration Types
 */
export interface FloorPlan {
  id: string
  block: 'Block A' | 'Block B' | 'Block C' | 'Block D' | 'Master'
  title: string
  floorType: 'Ground Floor' | 'Typical Floor' | 'Master Layout'
  configuration: '2 BHK' | '3 BHK' | 'Master Layout'
  previewUrl: string
  highResUrl: string
}

export interface AmenityItem {
  id: string
  title: string
  subtitle?: string
  category: 'clubhouse' | 'wellness' | 'outdoors' | 'security' | 'infrastructure'
  iconName: string
}

export interface ProximityItem {
  destination: string
  durationMinutes: number
  category: 'transit' | 'schools' | 'hospitals' | 'workplace' | 'lifestyle'
}

export interface ProjectSpecs {
  name: string
  tagline: string
  location: string
  totalLandArea: string // "2.87 Acres"
  blocksCount: number
  unitsCount: number
  configurations: string[]
  constructionStatus: string // "Ongoing (90% Complete)"
  reraRegistrationNumber: string
  hmdaApproved: boolean
}

/**
 * Centralized Site & Contact Configuration
 * All corporate and project contact information must be read from here.
 * Never hardcode phone numbers or addresses across individual components.
 */
export const siteConfig = {
  company: {
    name: 'Sunshine Infra',
    legalName: 'Sunshine Infra Pvt. Ltd.',
    tagline: 'Inspiring Design Begins with a Vision',
    experienceYears: '15+',
    unitsDelivered: '1000+',
    familiesCount: '1200+',
  },
  contact: {
    // Primary sales contact proposed by client
    primaryPhone: '+91 7997482222',
    primaryPhoneFormatted: '+91 79974 82222',
    primaryPhoneTel: '+917997482222',

    // Support and WhatsApp lines identified from audit
    secondaryPhone: '+91 7997242222',
    whatsAppNumber: '917997242222',
    whatsAppUrl:
      'https://api.whatsapp.com/send?phone=917997242222&text=Hi%2C%20I%20would%20like%20more%20information%20about%20Sunshine%20Infra%20projects',

    email: 'sales@sunshineinfra.in',
    officeAddress: {
      line1: 'Sy No. 536, Near HP Petrol Bunk',
      line2: 'DPS Road, Bowrampet Village',
      district: 'Malkajgiri - Medchal District',
      city: 'Hyderabad',
      pincode: '500043',
      state: 'Telangana',
      fullAddress:
        'Sy No. 536, near HP Petrol Bunk, DPS Road, Bowrampet Village, Medchal District, Hyderabad - 500043',
    },
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61580470644206',
    instagram: 'https://www.instagram.com/sunshine_infra_pvt_ltd/',
    youtube: 'https://www.youtube.com/@SunshineInfraPvtLtd',
    linkedin: '#',
  },
  greenMeadows: {
    name: 'Sunshine Green Meadows',
    location: 'Bowrampet, Medchal, Hyderabad',
    tagline: 'Lifestyle Apartments @ Bowrampet',
    status: 'Ongoing (~90% complete, as reported by client)',
    blocks: 4,
    units: 236,
    configurations: ['2 BHK', '3 BHK'],
    // Flagged for verification before legal publication
    landAreaSupplied: '2.87 acres 37 guntas (Client reported — pending final legal verification)',
    landAreaDisplay: '~2.87 Acres',
    reraNumber: 'P02200006843',
    hmdaApproved: true,
    clubhouseArea: 'Nearly 10,000 Sft.',
    youtubeVideoId: '4QFx9lkM3-U',
    coordinates: {
      lat: 17.550682,
      lng: 78.391765,
    },
  },
} as const

import React from 'react'
import { MapPin, Navigation2, School, HeartPulse, GraduationCap, ShoppingBag, Clock } from 'lucide-react'

export const LocationSection: React.FC = () => {
  const travelTimes = [
    { label: 'ORR Exit No. 4', time: '~5 Mins', note: 'Rapid ring-road access across Hyderabad' },
    { label: 'Kandlakoya Oxygen Park', time: '~15 Mins', note: 'Expansive ecological green lung & forest corridor' },
    { label: 'Miyapur Metro Station', time: '~20 Mins', note: 'High-speed mass transit rail connection' },
    { label: 'Dundigal / Kompally Corridor', time: '~20 Mins', note: 'High-growth residential & employment hub' },
    { label: 'JNTU / KPHB Commercial Hub', time: '~30 Mins', note: 'Established retail, dining, and educational zone' },
  ]

  const surroundings = [
    {
      category: 'Schools',
      icon: School,
      items: ['Delhi Public School (DPS)', 'Oakridge International School', 'The Creek Planet School', 'Unicent School', 'Keshava Reddy School'],
    },
    {
      category: 'Hospitals',
      icon: HeartPulse,
      items: ['Malla Reddy Narayana Hospital', 'Usha Mullapudi Cardiac Centre', 'SLG Hospital, Nizampet', 'Mamata Medical Academy'],
    },
    {
      category: 'Higher Education',
      icon: GraduationCap,
      items: ['VNR Vignana Jyothi (VJIET)', 'Mahindra University', 'Malla Reddy University', 'JNTU Technological University'],
    },
    {
      category: 'Conveniences & Retail',
      icon: ShoppingBag,
      items: ['Forum Sujana Mall', 'Sarath City Capital Mall', 'Inorbit & IKEA Hitec City', 'Cineplanet & Runway 9'],
    },
  ]

  return (
    <section id="location" className="py-12 sm:py-16 lg:py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2.5 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-emerald-700 font-semibold flex items-center justify-center gap-2">
            <Navigation2 className="w-3.5 h-3.5" />
            <span>Strategic Connectivity</span>
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.15]">
            The Locale of Dreams in <span className="italic font-normal text-emerald-600">Bowrampet.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
            Positioned in North-West Hyderabad, combining peaceful green surroundings with seamless 5-minute access to ORR Exit 4.
          </p>
        </div>

        {/* Travel Estimates Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4 mb-8 sm:mb-12">
          {travelTimes.map((item, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-xs text-center flex flex-col justify-between space-y-1.5 hover:border-emerald-300 transition-colors"
            >
              <div>
                <div className="font-display text-lg sm:text-2xl font-bold text-emerald-600">
                  {item.time}
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-900 mt-0.5">
                  {item.label}
                </div>
              </div>
              <p className="text-[9px] sm:text-[10px] text-slate-500 leading-snug">
                {item.note}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-[10px] sm:text-[11px] font-mono text-slate-500 -mt-4 sm:-mt-6 mb-8 sm:mb-12 flex items-center justify-center gap-1.5 px-2">
          <Clock className="w-3 h-3 text-slate-400 shrink-0" />
          <span>*Travel times are indicative estimates subject to real-time traffic conditions.</span>
        </p>

        {/* Interactive Map & Address Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-10 sm:mb-16">
          {/* Map Embed Frame */}
          <div className="lg:col-span-8 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 bg-white min-h-[280px] sm:min-h-[380px] shadow-sm sm:shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.094601500374!2d78.3917654!3d17.550682099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f2cde0efb0b%3A0x4e140594df763099!2sSunshine%20Green%20Meadows!5e0!3m2!1sen!2sin!4v1697287741442!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ minHeight: '280px', border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sunshine Green Meadows Location Map"
            />
          </div>

          {/* Site Address Card */}
          <div className="lg:col-span-4 p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-sm sm:shadow-md flex flex-col justify-between space-y-4 sm:space-y-6">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-emerald-700 font-semibold">
                Project Coordinates
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                Site & Sales Office
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1.5">
                Survey No. 536, Near HP Petrol Bunk, DPS Road, Bowrampet Village, Medchal - Malkajgiri District, Hyderabad, Telangana - 500043.
              </p>
            </div>

            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="text-xs font-semibold text-emerald-800">
                Landmarks Nearby:
              </div>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>• Adjacent to Delhi Public School (DPS) Road</li>
                <li>• 5 Mins to ORR Exit 4 Interchange</li>
                <li>• In proximity to Bowrampet Reserve Greenery</li>
              </ul>
            </div>

            <a
              href="https://maps.google.com/?q=17.550682,78.391765"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 sm:px-5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-sm"
            >
              <span>Directions on Google Maps</span>
              <Navigation2 className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Neighborhood Amenities Matrix - 2x2 on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {surroundings.map((cat, i) => {
            const Icon = cat.icon
            return (
              <div key={i} className="p-3 sm:p-5 rounded-xl sm:rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2 sm:mb-4 text-slate-900">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <h4 className="font-display font-bold text-xs sm:text-base leading-tight">{cat.category}</h4>
                </div>
                <ul className="space-y-1 sm:space-y-2 text-[10px] sm:text-xs text-slate-600">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 leading-snug">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

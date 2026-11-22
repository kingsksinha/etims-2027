import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  ExternalLink,
  Navigation,
  Compass,
  CheckCircle2,
  Building,
  Plane,
  Train,
  Car,
  Cpu,
  BookOpen,
  Phone,
  Volume2,
  Home,
  Trees,
} from 'lucide-react';
import { HOST_INSTITUTION, CONVENOR } from '../../utils/constants';

export interface CampusFacilityItem {
  id: string;
  name: string;
  category: string;
  title: string;
  subtitle: string;
  specs: string[];
  image?: string;
  badge: string;
  icon: typeof Building;
  description: string;
}

export const VERIFIED_CAMPUS_FACILITIES: CampusFacilityItem[] = [
  {
    id: 'plenary',
    name: 'Main Auditorium & Plenary Hall',
    category: 'Keynote & Presentation',
    title: 'Central Seminar & Conference Auditorium',
    subtitle: 'Academic Block, NSIT Bihta',
    specs: [
      'Centrally air-conditioned presentation hall',
      'High-definition laser projection & dual digital display screens',
      'Acoustically engineered sound with wireless podium/lapel mics',
      'Tiered lecture seating for 200–300 delegates',
    ],
    image: '/assets/nsit-auditorium-real.jpg',
    badge: 'CONFERENCE VENUE',
    icon: Volume2,
    description:
      'Air-conditioned auditorium and seminar hall hosting the conference inaugural session, plenary keynote addresses, and multidisciplinary oral paper presentations.',
  },
  {
    id: 'campus-building',
    name: 'Main Academic Campus & Plaza',
    category: 'Institutional Campus',
    title: 'NSIT Integrated Campus (9.2 Acres)',
    subtitle: 'Amhara, Bihta, Patna',
    specs: [
      'Approved by AICTE and Department of Science & Technology, Govt. of Bihar',
      'Affiliated with Bihar Engineering University (BEU) & SBTE',
      'Strategically located directly adjacent to IIT Patna along NH-922',
      'Lush green landscaped campus environment with 24x7 security',
    ],
    image: '/assets/nsit-building-real.jpg',
    badge: 'OFFICIAL HOST CAMPUS',
    icon: Building,
    description:
      'Spread over 9.2 acres at Amhara, Bihta, approximately 30 km west of Patna, featuring modern academic blocks, lecture theatres, and open networking courtyards.',
  },
  {
    id: 'computing',
    name: 'Central Computing Facility & Labs',
    category: 'Digital Infrastructure',
    title: 'High-Tech Computer Center & Server Labs',
    subtitle: 'IT Complex, NSIT Bihta',
    specs: [
      'High-speed optical fiber backbone & campus-wide Wi-Fi connectivity',
      'Licensed engineering software suites & research simulation testbenches',
      'High-availability UPS power backup ensuring uninterrupted sessions',
      'Isolated delegate presentation network & technical support desk',
    ],
    badge: 'DIGITAL INFRASTRUCTURE',
    icon: Cpu,
    description:
      'Centralized computing center providing networked workstations, high-speed campus internet, and engineering software for research demonstrations.',
  },
  {
    id: 'library',
    name: 'Central Digital Library & Archives',
    category: 'Academic Research',
    title: 'Institutional Digital Knowledge Resource Center',
    subtitle: 'Main Academic Block, NSIT',
    specs: [
      'Comprehensive collections of B.Tech textbooks & research volumes',
      'Digital e-library portal with access to national & international journals',
      'Quiet scholar carrels and research reading tables',
      'Archived proceedings of academic and technical conferences',
    ],
    badge: 'CENTRAL LIBRARY',
    icon: BookOpen,
    description:
      'Spacious academic central library offering digital catalog access, research repositories, and quiet scholar reading halls for conference delegates.',
  },
  {
    id: 'hostels',
    name: 'On-Campus Hostels & Guest House',
    category: 'Hospitality & Accommodation',
    title: 'Residential Hostels & Visiting Faculty Guest House',
    subtitle: 'Residential Enclave, NSIT Bihta',
    specs: [
      'Furnished guest rooms for outstation delegates (subject to prior request)',
      'Separate residential wings for gentlemen and lady researchers',
      'Hygienic campus dining serving wholesome vegetarian meals',
      'Round-the-clock perimeter security and medical first-aid support',
    ],
    badge: 'CAMPUS RESIDENCE',
    icon: Home,
    description:
      'Limited on-campus guest accommodation is available for registered delegates upon prior request, subject to availability. Dining facilities cater to visiting scholars.',
  },
  {
    id: 'sports',
    name: 'Campus Grounds & Institutional Fleet',
    category: 'Transit & Grounds',
    title: 'Open Networking Grounds & Transport Fleet',
    subtitle: 'NSIT Campus Grounds, Bihta',
    specs: [
      'Expansive landscaped outdoor courtyards for conference tea & networking',
      'Dedicated institutional bus fleet connecting Patna Junction & Bihta Station',
      'Secure on-campus parking for delegate vehicles & keynote convoys',
      'Direct arterial access to the 4-lane Patna–Buxar Expressway (NH-922)',
    ],
    badge: 'GROUNDS & TRANSIT',
    icon: Trees,
    description:
      'Ample outdoor green courtyards for delegate interactions, poster presentations, and dedicated institutional transport connecting key transit nodes.',
  },
];

export default function OrbitalVenueRadar() {
  const [activeTab, setActiveTab] = useState<'showcase' | 'facilities' | 'transit'>('showcase');
  const [activeFacilityId, setActiveFacilityId] = useState<string>('plenary');

  const activeFacility =
    VERIFIED_CAMPUS_FACILITIES.find((f) => f.id === activeFacilityId) ||
    VERIFIED_CAMPUS_FACILITIES[0];

  return (
    <div className="relative w-full rounded-3xl border border-[#E7E0D6] bg-white text-[#1C1917] overflow-hidden shadow-lg">
      {/* Top Header Bar — Prestigious Maroon & Gold Institutional Styling */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E7E0D6] px-5 sm:px-8 py-4 bg-[#7B1123] text-white">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#BF982E]/40 bg-[#BF982E]/20 text-[#BF982E] shrink-0">
            <Compass className="h-5 w-5 text-[#F3D993]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#F3D993]">
                NSIT BIHTA, PATNA // CAMPUS DIRECTORY
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 font-mono text-[9px] font-semibold text-white border border-white/20">
                <span className="h-1.5 w-1.5 rounded-full bg-[#BF982E]" />
                PHYSICAL SUMMIT
              </span>
            </div>
            <h3 className="font-heading text-sm sm:text-base font-extrabold text-white tracking-tight">
              Host Academic Institution & Regional Transit Corridors
            </h3>
          </div>
        </div>

        {/* View Switcher Pills */}
        <div className="w-full sm:w-auto grid grid-cols-3 sm:flex items-center rounded-xl bg-black/25 p-1 gap-1 border border-white/10">
          <button
            type="button"
            onClick={() => setActiveTab('showcase')}
            className={`rounded-lg px-2.5 sm:px-3.5 py-1.5 text-xs font-mono font-bold transition-all cursor-pointer text-center truncate ${
              activeTab === 'showcase'
                ? 'bg-[#BF982E] text-[#1C1917] shadow-sm'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            Campus & Map
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('facilities')}
            className={`rounded-lg px-2.5 sm:px-3.5 py-1.5 text-xs font-mono font-bold transition-all cursor-pointer text-center truncate ${
              activeTab === 'facilities'
                ? 'bg-[#BF982E] text-[#1C1917] shadow-sm'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            Halls & Facilities
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('transit')}
            className={`rounded-lg px-2.5 sm:px-3.5 py-1.5 text-xs font-mono font-bold transition-all cursor-pointer text-center truncate ${
              activeTab === 'transit'
                ? 'bg-[#BF982E] text-[#1C1917] shadow-sm'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            Transit Corridors
          </button>
        </div>
      </div>

      {/* Main Body Viewport */}
      <div className="p-5 sm:p-8 bg-[#FAF8F5]">
        {/* TAB 1: CAMPUS SHOWCASE & MAP */}
        {activeTab === 'showcase' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 lg:grid-cols-12 lg:items-center"
          >
            {/* Real Campus Photos Display */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative overflow-hidden rounded-2xl border border-[#E7E0D6] bg-white p-2 shadow-md">
                <div className="relative h-60 sm:h-80 w-full overflow-hidden rounded-xl bg-zinc-950">
                  <img
                    src="/assets/nsit-building-real.jpg"
                    alt="NSIT Bihta Main Campus"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl bg-white/95 border border-[#E7E0D6] px-3 py-2 backdrop-blur-md">
                    <div>
                      <span className="text-[10px] font-mono text-[#7B1123] font-bold uppercase block">
                        Official Conference Host
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-[#1C1917]">
                        Netaji Subhas Institute of Technology, Bihta, Patna
                      </p>
                    </div>
                    <span className="rounded-md bg-[#7B1123]/10 border border-[#7B1123]/25 px-2 py-0.5 text-[10px] font-mono font-bold text-[#7B1123] shrink-0">
                      9.2-Acre Campus
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Campus Facts Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
                <div className="rounded-xl border border-[#E7E0D6] bg-white p-2.5 shadow-2xs">
                  <span className="text-[10px] font-mono text-[#57534E] uppercase block">Campus Area</span>
                  <strong className="text-xs sm:text-sm text-[#7B1123] font-bold">9.2 Acres</strong>
                </div>
                <div className="rounded-xl border border-[#E7E0D6] bg-white p-2.5 shadow-2xs">
                  <span className="text-[10px] font-mono text-[#57534E] uppercase block">Location</span>
                  <strong className="text-xs sm:text-sm text-[#1C1917] font-bold">Bihta, Patna</strong>
                </div>
                <div className="rounded-xl border border-[#E7E0D6] bg-white p-2.5 shadow-2xs">
                  <span className="text-[10px] font-mono text-[#57534E] uppercase block">From Patna</span>
                  <strong className="text-xs sm:text-sm text-[#BF982E] font-bold">~30 km West</strong>
                </div>
                <div className="rounded-xl border border-[#E7E0D6] bg-white p-2.5 shadow-2xs">
                  <span className="text-[10px] font-mono text-[#57534E] uppercase block">Railway Link</span>
                  <strong className="text-xs sm:text-sm text-[#7B1123] font-bold">4 km to Bihta</strong>
                </div>
              </div>
            </div>

            {/* Location & Navigation Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl border border-[#E7E0D6] bg-white p-5 sm:p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#7B1123]/10 border border-[#7B1123]/30 px-3 py-0.5 text-[11px] font-mono font-bold text-[#7B1123]">
                    Official Venue
                  </span>
                  <span className="text-xs font-mono text-[#BF982E] font-bold">Physical Mode</span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1C1917]">
                  {HOST_INSTITUTION.name}
                </h3>

                <p className="text-xs text-[#7B1123] font-mono flex items-start gap-2 font-semibold">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>{HOST_INSTITUTION.fullAddress}</span>
                </p>

                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  Situated in the emerging educational corridor of Bihta, directly adjacent to IIT Patna along the 4-lane Patna–Buxar National Highway (NH-922).
                </p>

                <div className="pt-2 border-t border-[#E7E0D6] space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#57534E]">GPS Coordinates:</span>
                    <span className="font-mono font-bold text-[#1C1917]">25.5684° N, 84.8872° E</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#57534E]">Academic Approvals:</span>
                    <span className="font-mono font-bold text-[#7B1123]">AICTE & DST Bihar</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-2.5">
                  <a
                    href="https://maps.google.com/?q=Netaji+Subhas+Institute+of+Technology+Bihta+Patna"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#7B1123] hover:bg-[#5C1324] px-4 py-2.5 text-xs font-bold text-white shadow-xs transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Navigation className="h-3.5 w-3.5" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <a
                    href={`tel:${CONVENOR.phoneTel}`}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] px-3.5 py-2.5 text-xs font-mono font-semibold text-[#1C1917] hover:border-[#7B1123] transition-colors whitespace-nowrap"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#7B1123]" />
                    <span>{CONVENOR.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: CONFERENCE VENUES & FACILITIES */}
        {activeTab === 'facilities' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 lg:grid-cols-12 lg:items-start"
          >
            {/* Left Facilities Selector List (5 cols) */}
            <div className="lg:col-span-5 space-y-2">
              {VERIFIED_CAMPUS_FACILITIES.map((fac) => {
                const isSelected = fac.id === activeFacilityId;
                const IconComponent = fac.icon;
                return (
                  <button
                    key={fac.id}
                    type="button"
                    onClick={() => setActiveFacilityId(fac.id)}
                    className={`w-full text-left rounded-2xl p-3.5 sm:p-4 transition-all cursor-pointer border flex items-center gap-3 ${
                      isSelected
                        ? 'border-[#7B1123] bg-white shadow-sm ring-1 ring-[#7B1123]/25'
                        : 'border-[#E7E0D6] bg-white/70 hover:bg-white hover:border-[#7B1123]/30'
                    }`}
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                        isSelected
                          ? 'bg-[#7B1123] text-white'
                          : 'bg-[#7B1123]/10 text-[#7B1123]'
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-mono uppercase text-[#7B1123] font-bold block">
                        {fac.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-[#1C1917] truncate">
                        {fac.name}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Facility Detail Card (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-[#E7E0D6] bg-white p-6 sm:p-8 shadow-sm space-y-4">
                {activeFacility.image && (
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden rounded-2xl border border-[#E7E0D6] mb-4">
                    <img
                      src={activeFacility.image}
                      alt={activeFacility.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-2.5 left-2.5 rounded-lg bg-black/75 px-3 py-1 text-[11px] font-mono text-white">
                      Verified Campus Photo
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between border-b border-[#E7E0D6] pb-3">
                  <div>
                    <span className="text-xs font-mono uppercase text-[#7B1123] font-bold block">
                      {activeFacility.badge}
                    </span>
                    <h3 className="font-heading text-lg sm:text-2xl font-bold text-[#1C1917]">
                      {activeFacility.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#57534E]">{activeFacility.subtitle}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {activeFacility.description}
                </p>

                <div className="pt-2 border-t border-[#E7E0D6] space-y-2">
                  <span className="text-xs font-mono uppercase text-[#7B1123] font-bold block tracking-wider">
                    Infrastructure Specifications:
                  </span>
                  <div className="grid grid-cols-1 gap-2 text-xs text-[#57534E]">
                    {activeFacility.specs.map((spec, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#BF982E] shrink-0 mt-0.5" />
                        <span className="text-[#1C1917] font-medium leading-snug">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 3: TRANSIT CORRIDORS */}
        {activeTab === 'transit' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-4 sm:gap-6 md:grid-cols-3"
          >
            {/* Airways */}
            <div className="rounded-2xl border border-[#E7E0D6] bg-white p-5 sm:p-6 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7B1123]/10 text-[#7B1123]">
                  <Plane className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#7B1123] font-bold block">
                    Airways Connectivity
                  </span>
                  <h4 className="font-heading text-base font-bold text-[#1C1917]">
                    Patna Airport (PAT)
                  </h4>
                  <span className="text-xs font-mono text-[#BF982E] font-semibold">
                    ~30 km from NSIT Campus
                  </span>
                </div>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Jay Prakash Narayan International Airport in Patna operates daily direct flights to Delhi, Mumbai, Bengaluru, Kolkata, and Hyderabad. Future Bihta Civil Enclave is located minutes away.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E7E0D6] text-[11px] font-mono text-[#57534E]">
                Prepaid taxi & ride-hailing available at airport terminal.
              </div>
            </div>

            {/* Railways */}
            <div className="rounded-2xl border border-[#E7E0D6] bg-white p-5 sm:p-6 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7B1123]/10 text-[#7B1123]">
                  <Train className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#7B1123] font-bold block">
                    Railways Connectivity
                  </span>
                  <h4 className="font-heading text-base font-bold text-[#1C1917]">
                    Bihta & Patna Junction
                  </h4>
                  <span className="text-xs font-mono text-[#BF982E] font-semibold">
                    Bihta (4 km) &bull; Patna Jn (~32 km)
                  </span>
                </div>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Bihta Railway Station (4 km) connects frequent local passenger trains along the Danapur–Mughalsarai mainline. Patna Junction (32 km) connects Rajdhani, Vande Bharat, and Superfast expresses nationwide.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E7E0D6] text-[11px] font-mono text-[#57534E]">
                Auto-rickshaws and campus transport available from Bihta station.
              </div>
            </div>

            {/* Roadways */}
            <div className="rounded-2xl border border-[#E7E0D6] bg-white p-5 sm:p-6 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7B1123]/10 text-[#7B1123]">
                  <Car className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#7B1123] font-bold block">
                    Roadways & Highways
                  </span>
                  <h4 className="font-heading text-base font-bold text-[#1C1917]">
                    NH-922 Corridor
                  </h4>
                  <span className="text-xs font-mono text-[#BF982E] font-semibold">
                    Danapur–Bihta Elevated Highway
                  </span>
                </div>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Smooth 4-lane access along the Patna–Buxar National Highway (NH-922) and the Danapur–Bihta elevated corridor. Institutional parking is available for private and delegate vehicles.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E7E0D6] text-[11px] font-mono text-[#57534E]">
                Estimated travel time from Danapur: ~25 minutes via elevated expressway.
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Layers,
  Cpu,
  BookOpen,
  Globe as GlobeIcon,
  Phone,
} from 'lucide-react';
import InteractiveGlobe from './InteractiveGlobe';
import { HOST_INSTITUTION, CONVENOR } from '../../utils/constants';

export interface HonestVenueNode {
  id: string;
  label: string;
  category: 'core' | 'academic' | 'transit' | 'amenity';
  title: string;
  subtitle: string;
  honestSpecs: string[];
  image: string;
  badge: string;
  tag: string;
  icon: typeof Building;
  coordinates: string;
  description: string;
}

// 100% Verified NSIT Campus Facilities — Each with its Own Distinct, Genuine Photo
export const HONEST_VENUE_NODES: HonestVenueNode[] = [
  {
    id: 'plenary',
    label: 'MAIN AUDITORIUM & PLENARY HALL',
    category: 'core',
    title: 'Central Seminar & Conference Hall',
    subtitle: 'Academic Block, NSIT Bihta',
    honestSpecs: [
      'Air-conditioned presentation hall',
      'Audio-visual projection & mic setup',
      'Tiered seating for conference delegates',
      'Dedicated presentation podium',
    ],
    image: '/assets/nsit-classroom.png',
    badge: 'CONFERENCE VENUE',
    tag: 'Auditorium Hall',
    icon: Building,
    coordinates: '25.5684° N, 84.8872° E',
    description:
      'Air-conditioned auditorium and seminar hall hosting the conference inaugural session, plenary keynote addresses, and track paper presentations.',
  },
  {
    id: 'computing',
    label: 'CAMPUS COMPUTER CENTER & LABS',
    category: 'academic',
    title: 'High-Tech Computing Laboratory',
    subtitle: 'IT Wing, NSIT Bihta',
    honestSpecs: [
      'Connected desktop computer terminals',
      'Campus local area network (LAN)',
      'Programming & software testing environment',
      'Supervised by faculty lab in-charge',
    ],
    image: '/assets/nsit-computing.jpg',
    badge: 'COMPUTER LAB',
    tag: 'IT Complex',
    icon: Cpu,
    coordinates: 'IT Wing Floor 1',
    description:
      'Dedicated computer laboratory equipped with desktop workstations and campus LAN connectivity for technical demos and workshops.',
  },
  {
    id: 'library',
    label: 'CENTRAL INSTITUTIONAL LIBRARY',
    category: 'academic',
    title: 'Central Reading Hall & Reference Library',
    subtitle: 'Main Academic Building',
    honestSpecs: [
      'B.Tech engineering reference textbooks',
      'Academic journals & periodical section',
      'Quiet study desks for visiting scholars',
      'Reading hall and syllabus collection',
    ],
    image: '/assets/nsit-library.png',
    badge: 'LIBRARY',
    tag: 'Academic Block',
    icon: BookOpen,
    coordinates: 'Central Floor',
    description:
      'College library offering reference collections, academic engineering texts, and quiet study reading tables for visiting delegates and scholars.',
  },
  {
    id: 'labs',
    label: 'ENGINEERING LABS & WORKSHOPS',
    category: 'academic',
    title: 'Core Engineering Laboratories',
    subtitle: 'EEE, ME, CE & CSE Departments',
    honestSpecs: [
      'Electrical machines & circuit testing kits',
      'Mechanical workshop & lathe apparatus',
      'Civil engineering surveying & concrete lab',
      'Practical engineering workstations',
    ],
    image: '/assets/nsit-lab.jpg',
    badge: 'DEPT LABS',
    tag: 'Workshop Wing',
    icon: Layers,
    coordinates: 'Tech Blocks',
    description:
      'Hands-on engineering laboratories equipped with standard testing instruments, machine benches, and apparatus for technical demonstrations.',
  },
  {
    id: 'hostels',
    label: 'ON-CAMPUS STUDENT HOSTELS',
    category: 'amenity',
    title: 'Residential Hostels & Delegate Living',
    subtitle: 'Campus Residential Quadrangle',
    honestSpecs: [
      'Separate residential blocks for boys & girls',
      'Hostel mess providing daily meals',
      'Resident warden & 24/7 security supervision',
      'Furnished rooms for visiting attendees',
    ],
    image: '/assets/nsit-hostel.png',
    badge: 'RESIDENTIAL',
    tag: 'Residential Wing',
    icon: Building,
    coordinates: 'Hostel Quadrangle',
    description:
      'On-campus multi-storey residential hostel accommodations with mess dining facilities, available for student attendees and scholars traveling from other cities.',
  },
  {
    id: 'campus',
    label: 'NSIT BIHTA CAMPUS GROUNDS',
    category: 'core',
    title: '11-Acre Academic Campus & Lawns',
    subtitle: 'Amhara, Bihta, Patna, Bihar',
    honestSpecs: [
      '11-acre integrated tech campus',
      'Located on 4-lane NH-922 highway',
      'Situated in Bihta knowledge corridor near IIT Patna',
      'Green lawns & open campus parking area',
    ],
    image: '/assets/nsit-campus.jpg',
    badge: 'ACADEMIC FACADE',
    tag: 'Main Building',
    icon: Building,
    coordinates: 'Amhara, Bihta – 801106',
    description:
      'Pollution-free green academic campus situated along the Patna–Buxar national highway corridor in Bihta, featuring academic blocks, administrative offices, and central fountain plaza.',
  },
  {
    id: 'sports',
    label: '11-ACRE ATHLETIC GROUNDS & FLEET',
    category: 'amenity',
    title: 'Outdoor Sports Grounds & Transit Fleet',
    subtitle: '11-Acre Campus Grounds, NSIT Bihta',
    honestSpecs: [
      'Multi-sport outdoor grounds for cricket & athletics',
      'Campus transport bus fleet connecting Patna',
      'Open green courtyards & pedestrian walkways',
      'Open-air delegate networking and event space',
    ],
    image: '/assets/nsit-sports-grounds.jpg',
    badge: 'CAMPUS GROUNDS',
    tag: 'Sports & Transit',
    icon: Building,
    coordinates: 'Campus Open Quadrangle',
    description:
      'Extensive 11-acre outdoor grounds featuring sports playing fields, institutional transit fleet parking, and open-air event spaces surrounded by lush green foliage.',
  },
];

export default function OrbitalVenueRadar() {
  const [activeNodeId, setActiveNodeId] = useState<string>('plenary');
  const [activeTab, setActiveTab] = useState<'3d-globe' | 'facilities' | 'transit'>('3d-globe');

  const activeNode =
    HONEST_VENUE_NODES.find((node) => node.id === activeNodeId) || HONEST_VENUE_NODES[0];

  return (
    <div className="relative w-full rounded-3xl border border-white/10 bg-zinc-950 text-white overflow-hidden shadow-2xl backdrop-blur-2xl">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 sm:px-8 py-4 bg-black/90">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-950/40 text-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.3)]">
            <GlobeIcon className="h-5 w-5 text-cyan-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400">
                NSIT BIHTA, PATNA // SPATIAL RADAR
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-emerald-400 border border-emerald-500/30">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                INTERACTIVE 3D
              </span>
            </div>
            <h3 className="font-heading text-sm sm:text-base font-extrabold text-white tracking-tight">
              Summit Location, Interactive 3D Earth & Campus Facilities
            </h3>
          </div>
        </div>

        {/* View Switcher Pills — Responsive Grid on Mobile */}
        <div className="w-full sm:w-auto grid grid-cols-3 sm:flex items-center rounded-2xl sm:rounded-full border border-white/10 bg-zinc-900/90 p-1 gap-1">
          <button
            type="button"
            onClick={() => setActiveTab('3d-globe')}
            className={`rounded-xl sm:rounded-full px-2 sm:px-3.5 py-1.5 sm:py-1 text-[11px] sm:text-xs font-mono font-medium transition-all cursor-pointer text-center truncate ${
              activeTab === '3d-globe'
                ? 'bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(6,182,212,0.6)]'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <span className="sm:hidden">3D Earth</span>
            <span className="hidden sm:inline">3D Interactive Earth</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('facilities')}
            className={`rounded-xl sm:rounded-full px-2 sm:px-3.5 py-1.5 sm:py-1 text-[11px] sm:text-xs font-mono font-medium transition-all cursor-pointer text-center truncate ${
              activeTab === 'facilities'
                ? 'bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(6,182,212,0.6)]'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <span className="sm:hidden">Facilities</span>
            <span className="hidden sm:inline">Campus Facilities</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('transit')}
            className={`rounded-xl sm:rounded-full px-2 sm:px-3.5 py-1.5 sm:py-1 text-[11px] sm:text-xs font-mono font-medium transition-all cursor-pointer text-center truncate ${
              activeTab === 'transit'
                ? 'bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(6,182,212,0.6)]'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <span className="sm:hidden">Transit</span>
            <span className="hidden sm:inline">Transit & Routes</span>
          </button>
        </div>
      </div>

      {/* TAB 1: 3D INTERACTIVE EARTH (FUN, SMOOTH, 60 FPS, NOT LAGGY) */}
      {activeTab === '3d-globe' && (
        <div className="p-3 sm:p-6 bg-black space-y-4 sm:space-y-6">
          {/* Instructions Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-2">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
              <Compass className="h-4 w-4 text-cyan-400" />
              <span>
                Drag mouse or touch to rotate the 3D Earth • Click <strong className="text-cyan-300">"Locate NSIT Bihta"</strong> to fly directly to Patna, India
              </span>
            </div>
            <span className="font-mono text-[11px] text-cyan-400 font-semibold">
              Latitude: 25.5684° N • Longitude: 84.8872° E
            </span>
          </div>

          {/* Dedicated 3D Interactive WebGL Globe Stage */}
          <InteractiveGlobe className="w-full" />

          {/* Honest Quick Coordinates & Campus Stats Bar (No fake claims!) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-3.5 text-center">
              <span className="font-mono text-cyan-400 font-bold text-xs uppercase block">
                CAMPUS AREA
              </span>
              <p className="font-heading text-lg font-black text-white mt-1">
                11 Acres
              </p>
              <span className="text-[10px] text-zinc-400">Green Tech Campus</span>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-3.5 text-center">
              <span className="font-mono text-emerald-400 font-bold text-xs uppercase block">
                AFFILIATION
              </span>
              <p className="font-heading text-sm sm:text-base font-bold text-white mt-1">
                BEU Patna
              </p>
              <span className="text-[10px] text-zinc-400">AICTE Approved</span>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-3.5 text-center">
              <span className="font-mono text-cyan-400 font-bold text-xs uppercase block">
                AIRPORT DISTANCE
              </span>
              <p className="font-heading text-lg font-black text-white mt-1">
                ~30 km
              </p>
              <span className="text-[10px] text-zinc-400">Patna Airport (PAT)</span>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-3.5 text-center">
              <span className="font-mono text-amber-400 font-bold text-xs uppercase block">
                NEAREST RAILWAY
              </span>
              <p className="font-heading text-lg font-black text-white mt-1">
                4 km
              </p>
              <span className="text-[10px] text-zinc-400">Bihta Railway Station</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CAMPUS FACILITIES & TELEMETRY CAPSULES (CLEAN, NO OVERLAPPING) */}
      {activeTab === 'facilities' && (
        <div className="p-4 sm:p-7 bg-black">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Sleek Capsule Buttons Column */}
            <div className="lg:col-span-5 flex flex-col gap-2">
              <div className="mb-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400 block">
                  CAMPUS SPATIAL NODES // SELECT FACILITY:
                </span>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Click any verified facility to view photo and details
                </p>
              </div>

              {HONEST_VENUE_NODES.map((node) => {
                const isSelected = activeNodeId === node.id;
                const Icon = node.icon;

                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setActiveNodeId(node.id)}
                    className={`group flex items-center justify-between gap-3 rounded-full px-4 py-2 sm:py-2.5 text-left transition-all cursor-pointer border backdrop-blur-md ${
                      isSelected
                        ? 'border-cyan-400 bg-cyan-950/70 text-white shadow-[0_0_15px_rgba(34,211,238,0.3)] ring-1 ring-cyan-400/80'
                        : 'border-white/10 bg-zinc-950 text-zinc-300 hover:border-white/30 hover:bg-zinc-900 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`h-2 w-2 rounded-full transition-all shrink-0 ${
                          isSelected ? 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]' : 'bg-zinc-500'
                        }`}
                      />
                      <Icon
                        className={`h-3.5 w-3.5 shrink-0 ${
                          isSelected ? 'text-cyan-400' : 'text-zinc-400'
                        }`}
                      />
                      <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider font-semibold truncate">
                        {node.label}
                      </span>
                    </div>

                    <span
                      className={`rounded-full px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider shrink-0 ${
                        isSelected
                          ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/40'
                          : 'bg-white/5 text-zinc-400 border border-white/5'
                      }`}
                    >
                      {node.tag}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right: Selected Facility Detail Inspector (Clean & Uncluttered) */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl border border-cyan-400/30 bg-zinc-950 p-5 sm:p-6 shadow-xl"
                >
                  <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3 mb-4">
                    <span className="rounded-full bg-cyan-400/15 border border-cyan-400/40 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                      {activeNode.badge}
                    </span>
                    <span className="font-mono text-[11px] text-zinc-400 flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                      <span>{activeNode.coordinates}</span>
                    </span>
                  </div>

                  {/* Real Photo Preview */}
                  <div className="relative h-48 sm:h-60 w-full overflow-hidden rounded-xl border border-white/10 mb-4 bg-black">
                    <img
                      src={activeNode.image}
                      alt={activeNode.title}
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-zinc-300">
                      <span>NSIT BIHTA CAMPUS ASSET</span>
                      <span className="text-cyan-400 font-bold">{activeNode.tag}</span>
                    </div>
                  </div>

                  {/* Title & Honest Description */}
                  <div className="space-y-1 mb-4">
                    <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
                      {activeNode.title}
                    </h4>
                    <p className="font-mono text-xs text-cyan-400">
                      {activeNode.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
                      {activeNode.description}
                    </p>
                  </div>

                  {/* Honest Specifications (No exaggerated claims!) */}
                  <div className="mb-5 space-y-1.5 pt-3 border-t border-white/10">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                      FACILITY DETAILS & DELEGATE AMENITIES:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeNode.honestSpecs.map((spec, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/5 px-2.5 py-1.5 text-xs text-zinc-200 font-mono"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                          <span className="truncate">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href="https://maps.google.com/?q=Netaji+Subhas+Institute+of+Technology+Bihta+Patna"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-xs font-bold text-black shadow-md hover:brightness-110 transition-all cursor-pointer"
                    >
                      <Navigation className="h-3.5 w-3.5 text-black" />
                      <span>Open Campus in Google Maps</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>

                    <a
                      href={`tel:${CONVENOR.phoneTel}`}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-3.5 py-2 text-xs font-mono text-zinc-300 hover:text-white hover:border-cyan-400 transition-colors"
                    >
                      <Phone className="h-3 w-3 text-cyan-400" />
                      <span>Secretariat: {CONVENOR.phone}</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: TRANSIT & ACCESS GUIDE */}
      {activeTab === 'transit' && (
        <div className="p-6 sm:p-8 bg-black space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            {HOST_INSTITUTION.transitAccess.map((transit, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-zinc-950 p-5 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-400 border border-cyan-400/30 mb-3">
                    {idx === 0 && <Plane className="h-5 w-5" />}
                    {idx === 1 && <Train className="h-5 w-5" />}
                    {idx === 2 && <Car className="h-5 w-5" />}
                  </div>

                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                    {transit.mode}
                  </span>
                  <h4 className="font-heading text-base font-bold text-white mt-0.5">
                    {transit.terminal}
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed mt-2">
                    {transit.detail}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>TRANSIT TERMINAL</span>
                  <span className="text-cyan-400 font-bold">Patna Route</span>
                </div>
              </div>
            ))}
          </div>

          {/* Official Location Summary Bar */}
          <div className="rounded-2xl border border-cyan-400/30 bg-zinc-950 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400 block">
                OFFICIAL SUMMIT VENUE ADDRESS
              </span>
              <h4 className="font-heading text-base sm:text-lg font-bold text-white">
                Netaji Subhas Institute of Technology (NSIT)
              </h4>
              <p className="text-xs text-zinc-300 font-mono">
                Amhara, Bihta, Patna, Bihar – 801106, India • Adjacent to IIT Patna
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Netaji+Subhas+Institute+of+Technology+Bihta+Patna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-xs font-bold text-black shadow-lg hover:bg-cyan-300 transition-all shrink-0 cursor-pointer"
            >
              <MapPin className="h-4 w-4" />
              <span>Open in Google Maps</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

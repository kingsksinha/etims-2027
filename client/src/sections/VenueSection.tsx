import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  ExternalLink,
  MapPin,
  Plane,
  Train,
  Car,
  Compass,
} from 'lucide-react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import { HOST_INSTITUTION } from '../utils/constants';

const transitIcons: Record<string, typeof Plane> = {
  'Airways Access': Plane,
  'Railways Access': Train,
  'Roadways Access': Car,
};

const venueFacilities = [
  {
    id: 'hall',
    label: 'Lecture Theatres',
    src: '/assets/nsit-classroom.png',
    title: 'Smart Lecture Halls & Theatres',
    badge: 'CONFERENCE SESSIONS & PLENARY',
    desc: 'Air-conditioned digital multimedia halls equipped for hybrid presentations, keynotes, and technical paper tracks.',
  },
  {
    id: 'labs',
    label: 'Research Labs',
    src: '/assets/nsit-lab.jpg',
    title: 'Advanced Engineering Laboratories',
    badge: 'RESEARCH & INNOVATION LABS',
    desc: 'Comprehensive engineering facilities supporting electronics, VLSI, mechanical fabrication, and applied science demos.',
  },
  {
    id: 'computing',
    label: 'Computing Center',
    src: '/assets/nsit-computing.jpg',
    title: 'High-Performance Computing Center',
    badge: 'AI & COMPUTATIONAL INFRASTRUCTURE',
    desc: 'Advanced computer center with high-speed gigabit networking, modern workstations, and research computing clusters.',
  },
  {
    id: 'library',
    label: 'Central Library',
    src: '/assets/nsit-library.png',
    title: 'Central Institutional Library',
    badge: 'SCHOLARLY REPOSITORIES',
    desc: 'Extensive academic holding with IEEE, Springer, and international journal archives and scholarly literature.',
  },
  {
    id: 'hostel',
    label: 'Residential Hostels',
    src: '/assets/nsit-hostel.png',
    title: 'Campus Residential Complex',
    badge: 'DELEGATE RESIDENTIAL WING',
    desc: 'Secure, modern residential complex with dining facilities for visiting delegates and student scholars.',
  },
];

export default function VenueSection() {
  const [activeFacilityIdx, setActiveFacilityIdx] = useState(0);
  const currentFacility = venueFacilities[activeFacilityIdx];

  return (
    <section id="venue" className="relative py-24 md:py-32 bg-midnight bg-tech-grid border-b border-border-dark overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute -top-40 right-10 h-96 w-96 rounded-full bg-cyan/8 blur-[140px]" />

      <Container className="relative z-10 w-full min-w-0">
        <SectionHeading
          tag="08 // Venue & Transit"
          title="Summit Venue & Campus Access"
          subtitle="Netaji Subhas Institute of Technology (NSIT) • Bihta, Patna, Bihar, India"
          align="left"
        />

        {/* Large Architectural Campus Showcase with Interactive Multi-Facility Tabs */}
        <div className="relative mb-14 overflow-hidden rounded-3xl border border-cyan/30 bg-gradient-to-b from-navy to-midnight p-3 sm:p-4 shadow-2xl glow-cyan-sm w-full min-w-0">
          {/* Facility Selector Tabs Bar */}
          <div className="flex flex-wrap items-center gap-2 mb-3 pb-2 border-b border-border-dark/80">
            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan mr-1 hidden sm:inline">
              SELECT FACILITY:
            </span>
            {venueFacilities.map((fac, idx) => {
              const isSelected = activeFacilityIdx === idx;
              return (
                <button
                  key={fac.id}
                  type="button"
                  onClick={() => setActiveFacilityIdx(idx)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-mono font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-cyan text-midnight font-bold shadow-sm glow-cyan-sm'
                      : 'bg-navy/80 border border-border-dark text-secondary-text hover:text-light-text hover:border-cyan/40'
                  }`}
                >
                  {fac.label}
                </button>
              );
            })}
          </div>

          <div className="relative h-72 sm:h-96 md:h-[28rem] w-full overflow-hidden rounded-2xl bg-midnight/90">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentFacility.id}
                src={currentFacility.src}
                alt={currentFacility.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent pointer-events-none" />
            
            {/* Overlay Details */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-light-text flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="min-w-0">
                <span className="text-[10px] sm:text-xs uppercase font-mono font-bold tracking-wider text-cyan block mb-1">
                  {currentFacility.badge}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-light-text text-glow-cyan truncate">
                  {currentFacility.title}
                </h3>
                <p className="text-xs sm:text-sm text-secondary-text mt-0.5 line-clamp-2 max-w-xl">
                  {currentFacility.desc}
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Netaji+Subhas+Institute+of+Technology+Bihta+Patna"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-teal to-cyan px-4 py-2 sm:px-5 sm:py-2.5 text-xs font-bold text-midnight shadow-md hover:shadow-cyan/30 transition-all shrink-0 glow-cyan-sm"
              >
                <MapPin className="h-4 w-4 text-midnight" />
                <span>Open in Google Maps</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Venue Information & Transit Schematic (Inspired by Orbital Reference Image 5) */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Campus Description & Facilities (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 lg:col-span-6"
          >
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan block mb-2">
                Campus Profile
              </span>
              <p className="text-base sm:text-lg text-secondary-text leading-relaxed">
                {HOST_INSTITUTION.description}
              </p>
            </div>

            <div className="pt-4 border-t border-border-dark">
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-light-text mb-3">
                Key Campus Features
              </h4>
              <div className="grid gap-3 sm:grid-cols-2">
                {HOST_INSTITUTION.campusFeatures.map((facility, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-xl border border-border-dark bg-navy/60 p-3.5 text-sm text-secondary-text"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3-Channel Transit Connectivity (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-4 rounded-3xl border border-border-dark bg-navy/80 p-6 sm:p-7 backdrop-blur-md lg:col-span-6"
          >
            <div className="flex items-center justify-between border-b border-border-dark pb-4">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan block">
                  Regional Transportation Access
                </span>
                <h4 className="font-heading text-lg sm:text-xl font-bold text-light-text">
                  Campus Transit Routes & Distances
                </h4>
              </div>
              <Compass className="h-5 w-5 text-cyan" />
            </div>

            {/* Regional Access Route Schematic */}
            <div className="relative overflow-hidden rounded-2xl bg-midnight border border-border-dark p-4 my-1">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-border-dark/60">
                <span className="font-mono text-xs text-cyan uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                  <span className="h-2 w-2 rounded-full bg-cyan animate-pulse" />
                  Regional Access Map • NSIT Bihta, Patna
                </span>
                <span className="font-mono text-xs text-secondary-text hidden sm:inline">
                  Bihar, India
                </span>
              </div>

              <div className="relative h-44 w-full flex items-center justify-center">
                <svg viewBox="0 0 400 150" className="w-full h-full text-cyan">
                  {/* Concentric Distance Rings */}
                  <circle cx="200" cy="75" r="28" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
                  <circle cx="200" cy="75" r="54" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" opacity="0.35" />
                  <circle cx="200" cy="75" r="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 5" opacity="0.25" />
                  
                  {/* Central Hub: NSIT Campus */}
                  <circle cx="200" cy="75" r="7" fill="#35D9E8" />
                  <circle cx="200" cy="75" r="14" fill="none" stroke="#65E6C4" strokeWidth="1.2" opacity="0.8" />
                  <text x="200" y="99" textAnchor="middle" fill="#F1F6F8" fontSize="10" fontFamily="sans-serif" fontWeight="bold">
                    NSIT BIHTA
                  </text>

                  {/* Node 1: Bihta Railway Station (4 km) */}
                  <line x1="200" y1="75" x2="115" y2="40" stroke="#35D9E8" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.75" />
                  <circle cx="115" cy="40" r="4" fill="#65E6C4" />
                  <text x="107" y="38" textAnchor="end" fill="#35D9E8" fontSize="9" fontFamily="sans-serif" fontWeight="600">
                    Bihta Station (4 km)
                  </text>

                  {/* Node 2: Patna Airport PAT (30 km) */}
                  <line x1="200" y1="75" x2="285" y2="35" stroke="#35D9E8" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.75" />
                  <circle cx="285" cy="35" r="4" fill="#35D9E8" />
                  <text x="293" y="33" textAnchor="start" fill="#65E6C4" fontSize="9" fontFamily="sans-serif" fontWeight="600">
                    Patna Airport PAT (30 km)
                  </text>

                  {/* Node 3: Patna Junction (35 km) */}
                  <line x1="200" y1="75" x2="280" y2="115" stroke="#35D9E8" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.75" />
                  <circle cx="280" cy="115" r="4" fill="#35D9E8" />
                  <text x="288" y="118" textAnchor="start" fill="#A9BBC5" fontSize="9" fontFamily="sans-serif" fontWeight="600">
                    Patna Junction (35 km)
                  </text>

                  {/* Node 4: NH-922 Corridor */}
                  <line x1="200" y1="75" x2="110" y2="112" stroke="#65E6C4" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.75" />
                  <circle cx="110" cy="112" r="4" fill="#65E6C4" />
                  <text x="102" y="115" textAnchor="end" fill="#A9BBC5" fontSize="9" fontFamily="sans-serif" fontWeight="600">
                    NH-922 Highway
                  </text>
                </svg>
              </div>
            </div>

            <div className="space-y-3.5 mt-3">
              {HOST_INSTITUTION.transitAccess.map((item, index) => {
                const Icon = transitIcons[item.mode] || Plane;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-border-dark bg-midnight/80 p-5 hover:border-cyan/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy border border-border-dark text-cyan">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <span className="font-heading text-base font-bold text-light-text">
                        {item.mode} ({item.terminal})
                      </span>
                    </div>
                    <p className="text-sm text-secondary-text leading-relaxed pl-12">
                      {item.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

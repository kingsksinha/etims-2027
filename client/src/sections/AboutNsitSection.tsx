import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  ExternalLink,
  MapPin,
} from 'lucide-react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import { HOST_INSTITUTION } from '../utils/constants';

const campusGallery = [
  {
    id: 'campus',
    src: '/assets/nsit-campus.jpg',
    title: 'Main Academic Building & Plaza',
    tag: 'NSIT Bihta Integrated Tech Campus',
    badge: 'Academic Facade',
    style: { objectPosition: 'center center' },
  },
  {
    id: 'classroom',
    src: '/assets/nsit-classroom.png',
    title: 'Smart Auditoriums & Plenary Halls',
    tag: 'Air-Conditioned Digital Plenary Venue',
    badge: 'Plenary Venue',
    style: { objectPosition: 'center center' },
  },
  {
    id: 'computing',
    src: '/assets/nsit-computing.jpg',
    title: 'Computing Laboratory & IT Center',
    tag: 'High-Speed LAN & Programming Workstations',
    badge: 'Computing Center',
    style: { objectPosition: 'center center' },
  },
  {
    id: 'lab',
    src: '/assets/nsit-lab.jpg',
    title: 'Core Engineering Laboratories',
    tag: 'Hands-on Technical Research Facilities',
    badge: 'Research Labs',
    style: { objectPosition: 'center center' },
  },
  {
    id: 'library',
    src: '/assets/nsit-library.png',
    title: 'Central Library & Reading Hall',
    tag: 'Engineering Reference & Periodicals',
    badge: 'Library',
    style: { objectPosition: 'center center' },
  },
  {
    id: 'sports',
    src: '/assets/nsit-sports-grounds.jpg',
    title: '9.2-Acre Campus Grounds & Fleet',
    tag: 'Athletic Fields & Transit Hub',
    badge: 'Campus Grounds',
    style: { objectPosition: 'center center' },
  },
];

export default function AboutNsitSection() {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const activePhoto = campusGallery[activePhotoIdx];

  return (
    <section id="nsit" className="relative py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E7E0D6] overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[32rem] w-[32rem] rounded-full bg-[#BF982E]/10 blur-[140px]" />

      <Container className="relative z-10 w-full min-w-0">
        <SectionHeading
          tag="02 // Host Institution"
          title="About NSIT Bihta, Patna"
          subtitle="Netaji Subhas Institute of Technology — The premier technical host for ETIMS 2027"
          align="left"
        />

        <div className="grid gap-10 lg:gap-12 lg:grid-cols-12 lg:items-center w-full min-w-0">
          {/* Left Column: Authentic Campus Photography Showcase & Crest (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
            className="flex w-full min-w-0 flex-col gap-4 sm:gap-6 lg:col-span-6"
          >
            {/* Campus Image Frame (Authentic Image with Perfect Framing) */}
            <div className="relative overflow-hidden rounded-3xl border border-[#E7E0D6] bg-white p-3 shadow-md w-full min-w-0">
              <div className="relative h-80 sm:h-[26rem] w-full overflow-hidden rounded-2xl bg-[#F5EFEB]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activePhoto.id}
                    src={activePhoto.src}
                    alt={activePhoto.title}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    style={activePhoto.style}
                  />
                </AnimatePresence>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Tech Badge Overlay */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between rounded-xl bg-white/95 border border-[#E7E0D6] px-3.5 py-2 backdrop-blur-md shadow-xs">
                  <div className="min-w-0 pr-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#7B1123] font-bold block truncate">
                      {activePhoto.badge}
                    </span>
                    <span className="text-xs font-heading font-bold text-[#1C1917] block truncate">
                      {activePhoto.title}
                    </span>
                  </div>
                  <span className="rounded-md bg-[#7B1123]/10 border border-[#7B1123]/30 px-2.5 py-0.5 text-[10px] font-mono text-[#7B1123] font-bold shrink-0">
                    NSIT Bihta
                  </span>
                </div>
              </div>

              {/* Multi-Photo Switcher Bar */}
              <div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-2">
                {campusGallery.map((photo, idx) => {
                  const isSelected = activePhotoIdx === idx;
                  return (
                    <button
                      key={photo.id}
                      type="button"
                      onClick={() => setActivePhotoIdx(idx)}
                      className={`group relative h-14 sm:h-16 rounded-xl overflow-hidden border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#7B1123] ring-2 ring-[#7B1123]/40 scale-[1.02] shadow-xs'
                          : 'border-[#E7E0D6] opacity-70 hover:opacity-100 hover:border-[#7B1123]/50'
                      }`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="h-full w-full object-cover"
                        style={photo.style}
                      />
                      {isSelected && (
                        <span className="absolute inset-0 bg-[#7B1123]/15 pointer-events-none" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Institutional Seal Lockup */}
            <div className="flex items-center gap-4 rounded-2xl border border-[#E7E0D6] bg-white p-4 shadow-xs w-full min-w-0">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-white border border-[#BF982E]/40 p-1 shadow-xs">
                <img
                  src="/assets/nsit-seal.png"
                  alt="NSIT Official Seal"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#7B1123] font-bold block truncate">
                  Institutional Host
                </span>
                <h4 className="font-heading text-xs sm:text-sm font-bold text-[#1C1917] truncate">
                  Netaji Subhas Institute of Technology
                </h4>
                <p className="text-[11px] text-[#57534E] truncate">
                  Bihta, Patna, Bihar – 801106, India
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Institutional Overview & Facilities (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="flex flex-col gap-6 lg:col-span-6"
          >
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7B1123] block mb-2">
                Academic Campus Profile
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#1C1917]">
                Fostering Technological Leadership in Eastern India
              </h3>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#57534E] font-subheading">
                {HOST_INSTITUTION.description}
              </p>
            </div>

            {/* Campus Facilities Matrix */}
            <div className="space-y-3 pt-4 border-t border-[#E7E0D6]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#7B1123] font-bold block mb-1">
                Conference Facilities on Campus:
              </span>
              <div className="grid gap-3 sm:grid-cols-2">
                {HOST_INSTITUTION.campusFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-[#E7E0D6] bg-white p-3.5 text-sm text-[#57534E] shadow-xs"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#BF982E] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Navigation Link */}
            <div className="flex items-center justify-between rounded-2xl border border-[#E7E0D6] bg-white p-4 shadow-xs">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-[#7B1123] shrink-0" />
                <span className="text-xs sm:text-sm text-[#1C1917] font-medium">
                  {HOST_INSTITUTION.location}
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=Netaji+Subhas+Institute+of+Technology+Bihta+Patna"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#7B1123]/10 border border-[#7B1123]/30 px-3 py-1.5 text-xs font-mono font-bold text-[#7B1123] hover:bg-[#7B1123] hover:text-white transition-colors"
              >
                <span>Google Maps</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bento Strip of Key Institutional Metrics */}
        <div className="mt-12 pt-8 border-t border-[#E7E0D6] grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-[#E7E0D6] bg-white p-4 hover:border-[#7B1123]/40 transition-colors shadow-xs">
            <span className="font-heading text-2xl sm:text-3xl font-black text-[#7B1123] font-mono block">
              9.2 Acres
            </span>
            <span className="text-xs font-bold text-[#1C1917] mt-0.5 block">
              Green Residential Campus
            </span>
            <span className="text-[10px] font-mono text-[#BF982E] font-bold mt-1 block">
              Amhara, Bihta, Patna
            </span>
          </div>

          <div className="rounded-2xl border border-[#E7E0D6] bg-white p-4 hover:border-[#7B1123]/40 transition-colors shadow-xs">
            <span className="font-heading text-2xl sm:text-3xl font-black text-[#7B1123] font-mono block">
              7 Depts
            </span>
            <span className="text-xs font-bold text-[#1C1917] mt-0.5 block">
              Academic Departments
            </span>
            <span className="text-[10px] font-mono text-[#BF982E] font-bold mt-1 block">
              Engineering, Mgmt & Sciences
            </span>
          </div>

          <div className="rounded-2xl border border-[#E7E0D6] bg-white p-4 hover:border-[#7B1123]/40 transition-colors shadow-xs">
            <span className="font-heading text-2xl sm:text-3xl font-black text-[#7B1123] font-mono block">
              Est. 2007
            </span>
            <span className="text-xs font-bold text-[#1C1917] mt-0.5 block">
              AICTE & DST Approved
            </span>
            <span className="text-[10px] font-mono text-[#BF982E] font-bold mt-1 block">
              BEU / SBTE / AKU Affiliated
            </span>
          </div>

          <div className="rounded-2xl border border-[#E7E0D6] bg-white p-4 hover:border-[#7B1123]/40 transition-colors shadow-xs">
            <span className="font-heading text-2xl sm:text-3xl font-black text-[#7B1123] font-mono block">
              Adjacent
            </span>
            <span className="text-xs font-bold text-[#1C1917] mt-0.5 block">
              To IIT Patna
            </span>
            <span className="text-[10px] font-mono text-[#BF982E] font-bold mt-1 block">
              NH-922 Expressway Hub
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

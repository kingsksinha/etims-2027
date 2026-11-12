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
    id: 'student',
    src: '/assets/nsit-student.jpg',
    title: 'Academic Life & Research Library',
    tag: 'NSIT Scholar & Scholarly Environment',
    badge: 'Campus Life',
    style: { objectPosition: 'center 12%' },
  },
  {
    id: 'classroom',
    src: '/assets/nsit-classroom.png',
    title: 'Smart Lecture Theatres & Conference Halls',
    tag: 'Air-Conditioned Digital Plenary Venue',
    badge: 'Plenary Venue',
    style: { objectPosition: 'center center' },
  },
  {
    id: 'lab',
    src: '/assets/nsit-lab.jpg',
    title: 'Advanced Engineering Laboratories',
    tag: 'Hands-on Technical Research Facilities',
    badge: 'Research Labs',
    style: { objectPosition: 'center center' },
  },
  {
    id: 'computing',
    src: '/assets/nsit-computing.jpg',
    title: 'High-Performance Computing Center',
    tag: 'High-Speed Networking & Computing Clusters',
    badge: 'Computing Hub',
    style: { objectPosition: 'center center' },
  },
];

export default function AboutNsitSection() {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const activePhoto = campusGallery[activePhotoIdx];

  return (
    <section id="nsit" className="relative py-24 md:py-32 bg-gradient-to-b from-[#07131F] via-[#08222F] to-[#07131F] border-b border-border-dark overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[32rem] w-[32rem] rounded-full bg-primary-teal/15 blur-[140px]" />

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
            <div className="relative overflow-hidden rounded-3xl border border-cyan/30 bg-navy/90 p-3 shadow-2xl glow-cyan-sm w-full min-w-0">
              <div className="relative h-80 sm:h-[26rem] w-full overflow-hidden rounded-2xl bg-midnight">
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
                
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent pointer-events-none" />

                {/* Tech Badge Overlay */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between rounded-xl bg-midnight/90 border border-border-dark px-3.5 py-2 backdrop-blur-md">
                  <div className="min-w-0 pr-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan block truncate">
                      {activePhoto.badge}
                    </span>
                    <span className="text-xs font-heading font-bold text-light-text block truncate">
                      {activePhoto.title}
                    </span>
                  </div>
                  <span className="rounded-md bg-cyan/15 border border-cyan/30 px-2.5 py-0.5 text-[10px] font-mono text-cyan font-bold shrink-0">
                    NSIT Bihta
                  </span>
                </div>
              </div>

              {/* Multi-Photo Switcher Bar */}
              <div className="mt-3 grid grid-cols-4 gap-2">
                {campusGallery.map((photo, idx) => {
                  const isSelected = activePhotoIdx === idx;
                  return (
                    <button
                      key={photo.id}
                      type="button"
                      onClick={() => setActivePhotoIdx(idx)}
                      className={`group relative h-14 sm:h-16 rounded-xl overflow-hidden border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-cyan ring-2 ring-cyan/50 scale-[1.02] glow-cyan-sm'
                          : 'border-border-dark/80 opacity-60 hover:opacity-100 hover:border-cyan/50'
                      }`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="h-full w-full object-cover"
                        style={photo.style}
                      />
                      {isSelected && (
                        <span className="absolute inset-0 bg-cyan/10 pointer-events-none" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Institutional Seal Lockup */}
            <div className="flex items-center gap-4 rounded-2xl border border-border-dark bg-navy/60 p-4 backdrop-blur-xs w-full min-w-0">
              <img
                src="/assets/nsit-logo.png"
                alt="NSIT Official Emblem"
                className="h-10 sm:h-12 w-auto max-w-[140px] sm:max-w-none object-contain filter drop-shadow-[0_0_8px_rgba(53,217,232,0.3)] shrink-0"
              />
              <div className="min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan block truncate">
                  Institutional Host
                </span>
                <h4 className="font-heading text-xs sm:text-sm font-bold text-light-text truncate">
                  Netaji Subhas Institute of Technology
                </h4>
                <p className="text-[11px] text-secondary-text truncate">
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
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan block mb-2">
                Academic Campus Profile
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-light-text">
                Fostering Technological Leadership in Eastern India
              </h3>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-secondary-text">
                {HOST_INSTITUTION.description}
              </p>
            </div>

            {/* Campus Facilities Matrix */}
            <div className="space-y-3 pt-4 border-t border-border-dark/80">
              <span className="text-xs font-mono uppercase tracking-wider text-secondary-text block mb-1">
                Conference Facilities on Campus:
              </span>
              <div className="grid gap-3 sm:grid-cols-2">
                {HOST_INSTITUTION.campusFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-border-dark bg-navy/50 p-3.5 text-sm text-secondary-text"
                  >
                    <CheckCircle2 className="h-4 w-4 text-cyan shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Navigation Link */}
            <div className="flex items-center justify-between rounded-2xl border border-cyan/20 bg-navy/60 p-4">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-cyan shrink-0" />
                <span className="text-xs sm:text-sm text-light-text">
                  {HOST_INSTITUTION.location}
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=Netaji+Subhas+Institute+of+Technology+Bihta+Patna"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-cyan/15 border border-cyan/30 px-3 py-1.5 text-xs font-mono font-bold text-cyan hover:bg-cyan hover:text-midnight transition-colors"
              >
                <span>Google Maps</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

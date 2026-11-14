import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  ExternalLink,
} from 'lucide-react';
import Container from '../components/common/Container';
import HeroSection from '../sections/HeroSection';
import OrbitalVenueRadar from '../components/ui/OrbitalVenueRadar';
import {
  CONFERENCE,
  CONVENOR,
  HOST_INSTITUTION,
  TAB_NAV_ITEMS,
  PROVISIONAL_TRACKS,
  FACULTY_TASK_TEAMS,
} from '../utils/constants';

export default function HomePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>('about');

  const goToTab = (path: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Interactive Tabbed Summit Hub (Zero-Scroll Instant Switcher) */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-midnight via-navy/50 to-midnight border-b border-border-dark overflow-hidden">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute top-1/4 -right-40 h-96 w-96 rounded-full bg-cyan/10 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-1/4 -left-40 h-96 w-96 rounded-full bg-primary-teal/10 blur-[140px]" />

        <Container className="relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-navy/80 px-4 py-1.5 text-xs font-mono font-semibold text-cyan mb-4 glow-cyan-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Instant Tabbed Summit Navigator</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-light-text">
              Explore ETIMS 2027 by <span className="text-cyan text-glow-cyan">Conference Tabs</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-secondary-text">
              Switch between tabs below to preview key information instantly without endless scrolling, or click to open any dedicated section.
            </p>

            {/* In-Page Quick Tab Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-4xl">
              {TAB_NAV_ITEMS.filter((t) => t.id !== 'home').map((tab) => {
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-primary-teal to-cyan text-midnight shadow-md glow-cyan-sm scale-105'
                        : 'bg-navy/70 border border-border-dark text-secondary-text hover:text-light-text hover:border-cyan/40'
                    }`}
                  >
                    {tab.shortLabel}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Preview Stage */}
          <div className="rounded-3xl border border-cyan/40 bg-navy/80 p-6 sm:p-10 shadow-2xl glow-cyan-sm max-w-5xl mx-auto backdrop-blur-md">
            <AnimatePresence mode="wait">
              {/* TAB PREVIEW: ABOUT NSIT */}
              {activeTab === 'about' && (
                <motion.div
                  key="tab-about"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid gap-8 lg:grid-cols-12 lg:items-center"
                >
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-cyan/15 border border-cyan/30 px-3 py-0.5 text-xs font-mono font-bold text-cyan">
                        Host Academic Institution
                      </span>
                      <span className="text-xs font-mono text-mint">Bihta, Patna</span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-black text-light-text">
                      {HOST_INSTITUTION.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                      Approved by AICTE and affiliated to BEU / AKU, NSIT Bihta is situated in the national education hub of Bihta (near IIT Patna and NH-922). The campus features 5 engineering departments, smart AC auditoriums, computing centers, and central library resources.
                    </p>

                    <div className="grid grid-cols-3 gap-2.5 pt-1">
                      <div className="rounded-xl border border-border-dark bg-midnight p-2.5 text-center">
                        <span className="font-mono text-cyan font-bold text-sm block">11 Acres</span>
                        <span className="text-[10px] text-secondary-text">Campus Land</span>
                      </div>
                      <div className="rounded-xl border border-border-dark bg-midnight p-2.5 text-center">
                        <span className="font-mono text-mint font-bold text-sm block">400K+ Sq. Ft.</span>
                        <span className="text-[10px] text-secondary-text">Built-Up Space</span>
                      </div>
                      <div className="rounded-xl border border-border-dark bg-midnight p-2.5 text-center">
                        <span className="font-mono text-cyan font-bold text-sm block">AICTE & BEU</span>
                        <span className="text-[10px] text-secondary-text">Approved & Affiliated</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => goToTab('/about')}
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-teal to-cyan px-5 py-2.5 text-xs font-bold text-midnight shadow-md glow-cyan-sm cursor-pointer"
                      >
                        <span>Explore Full College Profile & Facilities</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="overflow-hidden rounded-2xl border border-border-dark bg-midnight p-2">
                      <img
                        src="/assets/nsit-campus.jpg"
                        alt="NSIT Bihta Campus"
                        className="h-56 sm:h-64 w-full object-cover rounded-xl"
                      />
                      <div className="p-2 text-center text-xs text-secondary-text font-mono">
                        Netaji Subhas Institute of Technology &bull; Bihta Campus
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB PREVIEW: COMMITTEES */}
              {activeTab === 'committees' && (
                <motion.div
                  key="tab-committees"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-dark pb-4">
                    <div>
                      <span className="text-xs font-mono text-cyan uppercase">
                        Academic Leadership & In-Charges
                      </span>
                      <h3 className="font-heading text-2xl font-bold text-light-text mt-0.5">
                        Faculty Task Teams & Secretariats ({FACULTY_TASK_TEAMS.length} Designated In-Charges)
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => goToTab('/committees')}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-cyan/15 border border-cyan/40 px-4 py-2 text-xs font-bold text-cyan hover:bg-cyan/25 transition-all cursor-pointer shrink-0"
                    >
                      <span>View All In-Charges</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* Convenor Snapshot */}
                  <div className="rounded-2xl border border-cyan/30 bg-midnight/90 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full min-w-0">
                    <div className="flex items-center gap-3.5 sm:gap-4 w-full min-w-0">
                      <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-cyan/20 border border-cyan/40 text-cyan font-bold text-lg sm:text-xl">
                        AH
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-mono text-cyan uppercase block">
                          Conference Convenor
                        </span>
                        <h4 className="font-heading text-base sm:text-lg font-bold text-light-text truncate">
                          {CONVENOR.name}
                        </h4>
                        <p className="text-xs text-secondary-text truncate">
                          Assistant Professor, Dept. of Electrical & Electronics Engineering
                        </p>
                      </div>
                    </div>

                    <div className="text-xs font-mono text-left sm:text-right space-y-1 w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-border-dark/60">
                      <a href={`mailto:${CONVENOR.email}`} className="text-cyan block hover:underline break-all">
                        {CONVENOR.email}
                      </a>
                      <a href={`tel:${CONVENOR.phoneTel}`} className="text-light-text block hover:underline">
                        {CONVENOR.phone}
                      </a>
                    </div>
                  </div>

                  {/* Operational Task Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="rounded-xl border border-border-dark bg-midnight p-3">
                      <span className="font-mono text-cyan font-bold block">Track 01–05</span>
                      <span className="text-secondary-text text-[11px]">Technical Program Chairs</span>
                    </div>
                    <div className="rounded-xl border border-border-dark bg-midnight p-3">
                      <span className="font-mono text-mint font-bold block">Logistics & Fleet</span>
                      <span className="text-secondary-text text-[11px]">Airport & Station Shuttles</span>
                    </div>
                    <div className="rounded-xl border border-border-dark bg-midnight p-3">
                      <span className="font-mono text-cyan font-bold block">Hospitality Desk</span>
                      <span className="text-secondary-text text-[11px]">Guest House & Catering</span>
                    </div>
                    <div className="rounded-xl border border-border-dark bg-midnight p-3">
                      <span className="font-mono text-mint font-bold block">Publications</span>
                      <span className="text-secondary-text text-[11px]">Similarity & Proceedings</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB PREVIEW: TRACKS */}
              {activeTab === 'tracks' && (
                <motion.div
                  key="tab-tracks"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-border-dark pb-4">
                    <div>
                      <span className="text-xs font-mono text-cyan uppercase">
                        Thematic Research Areas
                      </span>
                      <h3 className="font-heading text-2xl font-bold text-light-text mt-0.5">
                        Five Multidisciplinary Engineering Tracks
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => goToTab('/tracks')}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary-teal to-cyan px-4 py-2 text-xs font-bold text-midnight shadow-md glow-cyan-sm cursor-pointer"
                    >
                      <span>Explore Tracks</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {PROVISIONAL_TRACKS.map((tr) => (
                      <div
                        key={tr.id}
                        className="rounded-2xl border border-border-dark bg-midnight/80 p-4 space-y-1.5"
                      >
                        <span className="text-[10px] font-mono text-cyan uppercase font-bold">
                          {tr.number}
                        </span>
                        <h4 className="font-heading text-sm font-bold text-light-text">
                          {tr.title}
                        </h4>
                        <p className="text-[11px] text-secondary-text line-clamp-2">
                          {tr.tagline}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* TAB PREVIEW: DATES */}
              {activeTab === 'dates' && (
                <motion.div
                  key="tab-dates"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-border-dark pb-4">
                    <div>
                      <span className="text-xs font-mono text-cyan uppercase">
                        Summit Schedule
                      </span>
                      <h3 className="font-heading text-2xl font-bold text-light-text mt-0.5">
                        Confirmed Conference Schedule
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => goToTab('/dates')}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary-teal to-cyan px-4 py-2 text-xs font-bold text-midnight shadow-md glow-cyan-sm cursor-pointer"
                    >
                      <span>View Full Timeline</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div className="rounded-2xl border border-cyan/40 bg-midnight p-6 text-center space-y-2">
                    <span className="text-xs font-mono text-mint uppercase font-semibold">
                      Confirmed Official Summit Days
                    </span>
                    <h4 className="font-heading text-3xl sm:text-4xl font-black text-light-text text-glow-cyan">
                      {CONFERENCE.dateDisplay}
                    </h4>
                    <p className="text-xs text-secondary-text">
                      In-Person Technical Sessions, Keynotes & Exhibition at NSIT Bihta, Patna
                    </p>
                  </div>
                </motion.div>
              )}

              {/* TAB PREVIEW: SUBMISSION */}
              {activeTab === 'submission' && (
                <motion.div
                  key="tab-submission"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-border-dark pb-4">
                    <div>
                      <span className="text-xs font-mono text-cyan uppercase">
                        Call for Manuscripts
                      </span>
                      <h3 className="font-heading text-2xl font-bold text-light-text mt-0.5">
                        Author Guidelines & Plagiarism Policy
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => goToTab('/submission')}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary-teal to-cyan px-4 py-2 text-xs font-bold text-midnight shadow-md glow-cyan-sm cursor-pointer"
                    >
                      <span>Author Guidelines</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3 text-xs">
                    <div className="rounded-2xl border border-border-dark bg-midnight p-4 space-y-1">
                      <span className="font-mono text-cyan font-bold block">Double-Blind</span>
                      <p className="text-light-text font-semibold">Peer Review</p>
                      <p className="text-secondary-text text-[11px]">Strict author masking during technical evaluation</p>
                    </div>
                    <div className="rounded-2xl border border-border-dark bg-midnight p-4 space-y-1">
                      <span className="font-mono text-mint font-bold block">&lt; 15%</span>
                      <p className="text-light-text font-semibold">Similarity Limit</p>
                      <p className="text-secondary-text text-[11px]">Enforced via automated anti-plagiarism screening</p>
                    </div>
                    <div className="rounded-2xl border border-border-dark bg-midnight p-4 space-y-1">
                      <span className="font-mono text-cyan font-bold block">IEEE/Springer</span>
                      <p className="text-light-text font-semibold">Format Compliance</p>
                      <p className="text-secondary-text text-[11px]">Two-column standard 6 to 8 pages manuscript</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB PREVIEW: REGISTRATION */}
              {activeTab === 'registration' && (
                <motion.div
                  key="tab-registration"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-border-dark pb-4">
                    <div>
                      <span className="text-xs font-mono text-cyan uppercase">
                        Delegate Registration
                      </span>
                      <h3 className="font-heading text-2xl font-bold text-light-text mt-0.5">
                        Participation Categories & Inclusions
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => goToTab('/registration')}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary-teal to-cyan px-4 py-2 text-xs font-bold text-midnight shadow-md glow-cyan-sm cursor-pointer"
                    >
                      <span>Registration Details</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-secondary-text">
                    Registration includes conference access, kit, high teas, networking lunches, presentation slot, and proceedings publication. Categories cover Academicians, Research Scholars, UG Students, and Industry Delegates.
                  </p>
                </motion.div>
              )}

              {/* TAB PREVIEW: VENUE */}
              {activeTab === 'venue' && (
                <motion.div
                  key="tab-venue"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border-dark pb-4">
                    <div>
                      <span className="text-xs font-mono text-cyan uppercase tracking-wider">
                        SPATIAL RADAR & CAMPUS ACCESS
                      </span>
                      <h3 className="font-heading text-2xl font-bold text-light-text mt-0.5">
                        Netaji Subhas Institute of Technology (NSIT) • Bihta, Patna
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => goToTab('/venue')}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan to-blue-500 px-4 py-2 text-xs font-bold text-black shadow-md hover:brightness-110 cursor-pointer self-start sm:self-auto"
                    >
                      <span>Full Venue Page</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* Embedded Interactive Orbital Radar */}
                  <OrbitalVenueRadar />
                </motion.div>
              )}

              {/* TAB PREVIEW: CONTACT */}
              {activeTab === 'contact' && (
                <motion.div
                  key="tab-contact"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-border-dark pb-4">
                    <div>
                      <span className="text-xs font-mono text-cyan uppercase">
                        Organizing Secretariat
                      </span>
                      <h3 className="font-heading text-2xl font-bold text-light-text mt-0.5">
                        Contact Secretariat & Helpdesk
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => goToTab('/contact')}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary-teal to-cyan px-4 py-2 text-xs font-bold text-midnight shadow-md glow-cyan-sm cursor-pointer"
                    >
                      <span>Send an Inquiry</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-secondary-text">
                    For inquiries regarding paper submissions, technical tracks, session timing, or campus lodging, contact Convenor <strong>{CONVENOR.name}</strong> at <a href={`mailto:${CONVENOR.email}`} className="text-cyan underline">{CONVENOR.email}</a> or call <a href={`tel:${CONVENOR.phoneTel}`} className="text-cyan underline">{CONVENOR.phone}</a>.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick-Jump Card Grid */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TAB_NAV_ITEMS.filter((t) => t.id !== 'home').map((item) => (
              <div
                key={item.id}
                onClick={() => goToTab(item.path)}
                className="group relative flex flex-col justify-between rounded-3xl border border-border-dark bg-navy/60 p-5 hover:border-cyan/50 hover:bg-navy/80 hover:shadow-xl transition-all cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-cyan uppercase tracking-wider">
                      Conference Tab
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-secondary-text group-hover:text-cyan group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <h4 className="font-heading text-base font-bold text-light-text group-hover:text-cyan transition-colors">
                    {item.label}
                  </h4>
                  <p className="text-xs text-secondary-text mt-1 leading-snug">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border-dark flex items-center justify-between text-[11px] font-semibold text-cyan">
                  <span>Explore Tab</span>
                  <ExternalLink className="h-3 w-3 opacity-60 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Institutional Host & Convenor Spotlight Section */}
      <section className="relative py-16 sm:py-20 bg-midnight border-b border-border-dark">
        <Container className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Host Institution Spotlight (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-navy/80 px-3.5 py-1 text-xs font-mono text-cyan">
                <Building2 className="h-3.5 w-3.5" />
                <span>Host Institution Profile</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-light-text">
                Netaji Subhas Institute of Technology
              </h2>
              <p className="text-xs sm:text-sm text-cyan font-mono">
                Bihta, Patna, Bihar – 801106, India
              </p>
              <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                NSIT Bihta stands as one of Bihar’s preeminent centers for higher technical education and applied engineering. With its proximity to IIT Patna in the educational corridor of Bihta and state-of-the-art facilities, NSIT provides an ideal forum for the 1st National Conference on Emerging Technologies, Innovation and Multidisciplinary Studies.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => goToTab('/about')}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-teal to-cyan px-4 py-2 text-xs font-bold text-midnight shadow-md glow-cyan-sm cursor-pointer"
                >
                  <span>Read Full College Profile</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Convenor Direct Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-cyan/40 bg-gradient-to-b from-navy to-midnight p-6 shadow-2xl glow-cyan-sm space-y-4">
                <div className="flex items-center justify-between border-b border-border-dark pb-3">
                  <span className="text-[10px] font-mono uppercase text-cyan font-semibold">
                    Conference Convenorship
                  </span>
                  <span className="rounded-full bg-cyan/15 border border-cyan/30 px-2.5 py-0.5 text-[10px] font-mono text-cyan font-bold">
                    Official Point of Contact
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-light-text">
                    {CONVENOR.name}
                  </h3>
                  <p className="text-xs text-mint mt-0.5">
                    Assistant Professor & Conference Convenor
                  </p>
                  <p className="text-[11px] text-secondary-text font-mono mt-0.5">
                    Department of Electrical & Electronics Engineering, NSIT Bihta
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-border-dark text-xs font-mono">
                  <a
                    href={`mailto:${CONVENOR.email}`}
                    className="flex items-center gap-2 rounded-xl border border-border-dark bg-midnight px-3.5 py-2 text-light-text hover:border-cyan hover:text-cyan transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5 text-cyan shrink-0" />
                    <span className="truncate">{CONVENOR.email}</span>
                  </a>
                  <a
                    href={`tel:${CONVENOR.phoneTel}`}
                    className="flex items-center gap-2 rounded-xl border border-border-dark bg-midnight px-3.5 py-2 text-light-text hover:border-cyan hover:text-cyan transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-cyan shrink-0" />
                    <span>{CONVENOR.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

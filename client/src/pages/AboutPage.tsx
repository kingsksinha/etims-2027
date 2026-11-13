import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  MapPin,
  Cpu,
  Layers,
  FlaskConical,
  Shield,
  Compass,
  Briefcase,
  Rocket,
  Phone,
  Mail,
  BookOpen,
} from 'lucide-react';
import Container from '../components/common/Container';
import {
  HOST_INSTITUTION,
  COLLEGE_DEPARTMENTS,
  CAMPUS_FACILITIES,
  CONFERENCE,
  CONVENOR,
} from '../utils/constants';

type SubTabId = 'overview' | 'departments' | 'facilities' | 'innovation' | 'placements' | 'summit';

interface SubTabItem {
  id: SubTabId;
  label: string;
  icon: React.ReactNode;
}

const SUB_TABS: SubTabItem[] = [
  { id: 'overview', label: 'Campus Overview & Legacy', icon: <Building2 className="h-4 w-4" /> },
  { id: 'departments', label: 'Departments & Degrees', icon: <Cpu className="h-4 w-4" /> },
  { id: 'facilities', label: 'Campus Infrastructure & Gallery', icon: <Layers className="h-4 w-4" /> },
  { id: 'innovation', label: 'Research & Incubation (CIIE)', icon: <Rocket className="h-4 w-4" /> },
  { id: 'placements', label: 'Corporate Ties & Placements', icon: <Briefcase className="h-4 w-4" /> },
  { id: 'summit', label: 'About ETIMS 2027 Summit', icon: <Sparkles className="h-4 w-4" /> },
];

export default function AboutPage() {
  const [activeSubTab, setActiveSubTab] = useState<SubTabId>('overview');
  const [activeDeptCode, setActiveDeptCode] = useState<string>('CSE');
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);

  const selectedDepartment =
    COLLEGE_DEPARTMENTS.find((d) => d.code === activeDeptCode) || COLLEGE_DEPARTMENTS[0];
  const activeFacility = CAMPUS_FACILITIES[activePhotoIdx] || CAMPUS_FACILITIES[0];

  return (
    <div className="relative min-h-screen bg-midnight text-light-text py-12 sm:py-16 overflow-hidden">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute top-10 left-1/4 h-96 w-96 rounded-full bg-cyan/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-20 right-10 h-96 w-96 rounded-full bg-primary-teal/10 blur-[150px]" />

      <Container className="relative z-10">
        {/* Page Header */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-navy/80 px-4 py-1.5 text-xs font-mono font-semibold text-cyan mb-4 glow-cyan-sm">
            <Building2 className="h-3.5 w-3.5" />
            <span>Host Academic Institution Profile</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-light-text">
            Netaji Subhas Institute of Technology{' '}
            <span className="text-cyan text-glow-cyan">& ETIMS 2027</span>
          </h1>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-secondary-text leading-relaxed">
            Discover the premier technical institution hosting the 1st National Conference on Emerging Technologies, Innovation and Multidisciplinary Studies at Bihta, Patna, Bihar.
          </p>

          {/* Sub-Tabs Switcher Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-border-dark pb-4">
            {SUB_TABS.map((tab) => {
              const isSelected = activeSubTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveSubTab(tab.id)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-primary-teal to-cyan text-midnight shadow-md glow-cyan-sm'
                      : 'bg-navy/60 text-secondary-text hover:text-light-text hover:bg-navy'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* SUB-TAB 1: CAMPUS OVERVIEW & LEGACY */}
        {activeSubTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-12"
          >
            {/* Hero Profile Lockup */}
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/nsit-logo.png"
                    alt="NSIT Official Emblem"
                    className="h-12 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(53,217,232,0.4)]"
                  />
                  <div>
                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-light-text">
                      {HOST_INSTITUTION.name}
                    </h2>
                    <p className="text-xs font-mono text-cyan flex items-center gap-1.5 mt-0.5">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{HOST_INSTITUTION.fullAddress}</span>
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border-dark/80 bg-navy/60 p-4 text-xs font-mono text-mint">
                  <span className="text-[10px] uppercase text-cyan block mb-1">
                    Statutory Recognitions & University Affiliations:
                  </span>
                  <p className="leading-relaxed text-secondary-text">
                    {HOST_INSTITUTION.approvals}
                  </p>
                  <p className="mt-1 text-light-text font-semibold">
                    Governed by: {HOST_INSTITUTION.trustName}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-secondary-text leading-relaxed">
                  Netaji Subhas Institute of Technology (NSIT), Bihta, Patna was established with the steadfast vision to cultivate world-class engineers, computer scientists, and innovative researchers in Bihar. Situated in the emerging national knowledge hub of Bihta, NSIT is positioned adjacent to **IIT Patna** and the national technology corridor, offering a vibrant learning ecosystem for multidisciplinary collaboration.
                </p>

                <p className="text-sm sm:text-base text-secondary-text leading-relaxed">
                  Spread across a sprawling, pollution-free green multi-acre campus, the institute features state-of-the-art air-conditioned auditoriums, high-capacity computing clusters, an extensive digital central library, and over 30 specialized engineering laboratories.
                </p>
              </div>

              {/* Campus Feature Frame */}
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-3xl border border-cyan/40 bg-navy/90 p-3 shadow-2xl glow-cyan-sm">
                  <img
                    src="/assets/nsit-campus.jpg"
                    alt="NSIT Bihta Sprawling Campus"
                    className="h-72 sm:h-96 w-full object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-midnight/90 border border-border-dark p-3.5 backdrop-blur-md">
                    <span className="text-[10px] font-mono text-cyan uppercase tracking-wider block">
                      Host Institution Campus
                    </span>
                    <p className="text-xs font-semibold text-light-text mt-0.5">
                      Netaji Subhas Institute of Technology, Bihta, Patna
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Bento Telemetry: Institutional Scale & Metrics */}
            <div className="space-y-4 pt-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan block">
                    INSTITUTIONAL METRICS // VERIFIED AUDIT
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-light-text">
                    Campus Scale, Research Facilities & Academic Scale
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>AICTE & BEU Charter Compliant</span>
                </span>
              </div>

              {/* Bento Grid Layout with Honest Verified Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* 1. Sprawling Campus Scale (Span 2) */}
                <div className="sm:col-span-2 rounded-3xl border border-white/10 bg-gradient-to-br from-navy via-black to-navy p-6 relative overflow-hidden group hover:border-cyan/40 transition-colors">
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-cyan bg-cyan/10 border border-cyan/30 px-2.5 py-0.5 rounded-full">
                        CAMPUS INFRASTRUCTURE
                      </span>
                      <span className="text-xs font-mono text-secondary-text">Est. 2007 • AICTE Approved</span>
                    </div>
                    <div className="my-5">
                      <div className="flex items-baseline gap-3">
                        <span className="font-heading text-4xl sm:text-5xl font-black text-white tracking-tight">
                          11 Acres
                        </span>
                        <span className="font-mono text-sm text-cyan font-bold">
                          • Amhara, Bihta Campus
                        </span>
                      </div>
                      <h4 className="font-heading text-base font-bold text-light-text mt-1.5">
                        Integrated Academic & Residential Campus
                      </h4>
                      <p className="text-xs text-secondary-text mt-1 max-w-lg leading-relaxed">
                        Pollution-free engineering campus situated in the Bihta educational corridor along NH-922, featuring departmental lecture halls, computer labs, and student residential blocks.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 pt-2 border-t border-white/10 text-[11px] font-mono text-zinc-400">
                      <MapPin className="h-3.5 w-3.5 text-cyan" />
                      <span>Bihta Knowledge Hub, Patna (Near IIT Patna)</span>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-cyan/10 blur-[50px]" />
                </div>

                {/* 2. Academic Departments */}
                <div className="rounded-3xl border border-white/10 bg-black/60 p-5 flex flex-col justify-between hover:border-cyan/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan/15 text-cyan border border-cyan/30">
                      <Cpu className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-[10px] font-mono text-secondary-text uppercase">ACADEMICS</span>
                  </div>
                  <div className="my-4">
                    <span className="font-heading text-3xl font-black text-white font-mono block">
                      5 Depts
                    </span>
                    <h4 className="font-heading text-sm font-bold text-light-text mt-1">
                      Engineering Disciplines
                    </h4>
                    <p className="text-[11px] text-secondary-text mt-1">
                      CSE, EEE, Mechanical & Civil Engineering.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-cyan">BEU Patna Affiliated</span>
                </div>

                {/* 3. Computing Lab */}
                <div className="rounded-3xl border border-white/10 bg-black/60 p-5 flex flex-col justify-between hover:border-cyan/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan/15 text-cyan border border-cyan/30">
                      <Layers className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-[10px] font-mono text-secondary-text uppercase">COMPUTING</span>
                  </div>
                  <div className="my-4">
                    <span className="font-heading text-3xl font-black text-white font-mono block">
                      IT Labs
                    </span>
                    <h4 className="font-heading text-sm font-bold text-light-text mt-1">
                      Campus Computer Center
                    </h4>
                    <p className="text-[11px] text-secondary-text mt-1">
                      Desktop terminals with campus LAN network for academic sessions.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">Campus LAN Connected</span>
                </div>

                {/* 4. Practical Laboratories */}
                <div className="rounded-3xl border border-white/10 bg-black/60 p-5 flex flex-col justify-between hover:border-cyan/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan/15 text-cyan border border-cyan/30">
                      <FlaskConical className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-[10px] font-mono text-secondary-text uppercase">LABS</span>
                  </div>
                  <div className="my-4">
                    <span className="font-heading text-3xl font-black text-white font-mono block">
                      Dept Labs
                    </span>
                    <h4 className="font-heading text-sm font-bold text-light-text mt-1">
                      Workshops & Testing Labs
                    </h4>
                    <p className="text-[11px] text-secondary-text mt-1">
                      Circuit testing, mechanical workshops, and civil surveying setups.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-secondary-text">Hands-On Practice</span>
                </div>

                {/* 5. College Library */}
                <div className="rounded-3xl border border-white/10 bg-black/60 p-5 flex flex-col justify-between hover:border-cyan/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan/15 text-cyan border border-cyan/30">
                      <BookOpen className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-[10px] font-mono text-secondary-text uppercase">LIBRARY</span>
                  </div>
                  <div className="my-4">
                    <span className="font-heading text-3xl font-black text-white font-mono block">
                      Library
                    </span>
                    <h4 className="font-heading text-sm font-bold text-light-text mt-1">
                      Central Reading Hall
                    </h4>
                    <p className="text-[11px] text-secondary-text mt-1">
                      Engineering textbooks, reference material, and quiet study desks.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-cyan">Reference Collection</span>
                </div>

                {/* 6. Conference Hall */}
                <div className="rounded-3xl border border-white/10 bg-black/60 p-5 flex flex-col justify-between hover:border-cyan/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan/15 text-cyan border border-cyan/30">
                      <Building2 className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-[10px] font-mono text-secondary-text uppercase">HALL</span>
                  </div>
                  <div className="my-4">
                    <span className="font-heading text-3xl font-black text-white font-mono block">
                      Auditorium
                    </span>
                    <h4 className="font-heading text-sm font-bold text-light-text mt-1">
                      Air-Conditioned Hall
                    </h4>
                    <p className="text-[11px] text-secondary-text mt-1">
                      Presentation hall with audio-visual equipment and tiered seating.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-amber">ETIMS 2027 Venue</span>
                </div>

                {/* 7. Student Living */}
                <div className="rounded-3xl border border-white/10 bg-black/60 p-5 flex flex-col justify-between hover:border-cyan/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan/15 text-cyan border border-cyan/30">
                      <Shield className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-[10px] font-mono text-secondary-text uppercase">HOSTEL</span>
                  </div>
                  <div className="my-4">
                    <span className="font-heading text-3xl font-black text-white font-mono block">
                      Hostels
                    </span>
                    <h4 className="font-heading text-sm font-bold text-light-text mt-1">
                      On-Campus Residence
                    </h4>
                    <p className="text-[11px] text-secondary-text mt-1">
                      Separate residential accommodation for boys & girls with mess.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">Campus Accommodation</span>
                </div>
              </div>
            </div>

            {/* Vision, Mission & Strategic Location */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-border-dark bg-navy/70 p-6 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/15 text-cyan border border-cyan/30">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-light-text">
                  Institutional Vision
                </h3>
                <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                  To emerge as a center of technical and research excellence recognized nationally for fostering innovation, entrepreneurial vigor, ethical leadership, and sustainable engineering solutions that uplift society.
                </p>
              </div>

              <div className="rounded-3xl border border-border-dark bg-navy/70 p-6 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/15 text-cyan border border-cyan/30">
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-light-text">
                  Academic Mission
                </h3>
                <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                  To deliver rigorous outcome-based engineering education, provide state-of-the-art laboratory infrastructure, nurture intellectual curiosity, and forge sustained partnerships with industry and global research communities.
                </p>
              </div>

              <div className="rounded-3xl border border-border-dark bg-navy/70 p-6 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/15 text-cyan border border-cyan/30">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-light-text">
                  Bihta Mega Knowledge Hub
                </h3>
                <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                  Strategically situated in Bihta, directly adjacent to **IIT Patna** and near NIELIT along the 4-lane NH-922 corridor, providing effortless connectivity to Patna Airport (30 km) and Bihta Railway Station (4 km).
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* SUB-TAB 2: DEPARTMENTS & DEGREES */}
        {activeSubTab === 'departments' && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-12"
          >
            {/* Degree Programs Offered Summary */}
            <div className="rounded-3xl border border-cyan/30 bg-navy/80 p-6 sm:p-8 backdrop-blur-md space-y-6">
              <div>
                <span className="text-xs font-mono text-cyan uppercase tracking-wider block">
                  Academic Curriculum & Degrees
                </span>
                <h3 className="font-heading text-2xl font-bold text-light-text mt-1">
                  Programs of Study at NSIT Bihta
                </h3>
                <p className="text-xs sm:text-sm text-secondary-text mt-1">
                  Comprehensive four-year B.Tech engineering degrees, three-year polytechnic diplomas, and applied management courses approved by AICTE New Delhi and affiliated with BEU / AKU.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {HOST_INSTITUTION.academicPrograms.undergraduate.map((prog, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-border-dark bg-midnight/80 p-4 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-cyan uppercase font-bold">
                        Undergraduate (B.Tech)
                      </span>
                      <span className="rounded bg-cyan/15 px-2 py-0.5 text-[10px] font-mono text-cyan font-bold">
                        {prog.duration}
                      </span>
                    </div>
                    <h4 className="font-heading text-sm font-bold text-light-text">
                      {prog.degree}
                    </h4>
                    <p className="text-[11px] text-secondary-text leading-snug">
                      Focus: {prog.focus}
                    </p>
                  </div>
                ))}
              </div>

              {/* Polytechnic & Management Snippet */}
              <div className="grid gap-4 sm:grid-cols-2 pt-2 border-t border-border-dark">
                <div className="rounded-2xl border border-border-dark bg-midnight/60 p-4">
                  <span className="text-xs font-mono text-mint uppercase font-semibold block mb-2">
                    Polytechnic / Diploma in Engineering (3 Years):
                  </span>
                  <ul className="space-y-1 text-xs text-secondary-text">
                    <li>&bull; Diploma in Mechanical Engineering</li>
                    <li>&bull; Diploma in Civil Engineering</li>
                    <li>&bull; Diploma in Electrical Engineering</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-border-dark bg-midnight/60 p-4">
                  <span className="text-xs font-mono text-mint uppercase font-semibold block mb-2">
                    Applied Applications & Management:
                  </span>
                  <ul className="space-y-1 text-xs text-secondary-text">
                    <li>&bull; Bachelor of Computer Applications (BCA) &bull; 3 Years</li>
                    <li>&bull; Bachelor of Business Administration (BBA) &bull; 3 Years</li>
                    <li>&bull; Master of Business Administration (MBA) &bull; 2 Years</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Department Selection & Detailed Breakdown */}
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl font-bold text-light-text">
                  Departmental Research Thrusts & Laboratories
                </h3>
                <p className="text-xs text-secondary-text mt-1">
                  Select an engineering department to review its academic overview, specialized laboratories, and faculty coordinators.
                </p>
              </div>

              {/* Department Selection Pills */}
              <div className="flex flex-wrap gap-2.5">
                {COLLEGE_DEPARTMENTS.map((dept) => {
                  const isSelected = dept.code === activeDeptCode;
                  return (
                    <button
                      key={dept.code}
                      type="button"
                      onClick={() => setActiveDeptCode(dept.code)}
                      className={`flex items-center gap-2 rounded-2xl px-4 py-3 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-r from-cyan to-primary-teal text-midnight shadow-lg glow-cyan-sm'
                          : 'bg-navy/70 border border-border-dark text-secondary-text hover:text-light-text hover:border-cyan/40'
                      }`}
                    >
                      <span className="font-mono">{dept.code}</span>
                      <span>&bull;</span>
                      <span>{dept.shortName}</span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Department Showcase Card */}
              <div className="rounded-3xl border border-cyan/30 bg-navy/80 p-6 sm:p-8 backdrop-blur-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-dark pb-6">
                  <div>
                    <span className="text-xs font-mono text-cyan uppercase tracking-wider">
                      {selectedDepartment.headTitle} &bull; NSIT Bihta
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-light-text mt-1">
                      {selectedDepartment.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-mint font-medium mt-1">
                      {selectedDepartment.tagline}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border-dark bg-midnight px-4 py-3 text-right shrink-0">
                    <span className="text-[10px] font-mono text-cyan uppercase block">Department Code</span>
                    <span className="font-heading text-2xl font-black text-light-text font-mono">
                      {selectedDepartment.code}
                    </span>
                  </div>
                </div>

                <p className="mt-6 text-sm sm:text-base text-secondary-text leading-relaxed">
                  {selectedDepartment.overview}
                </p>

                {/* Research Areas & Laboratories Grid */}
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {/* Specialized Laboratories */}
                  <div className="rounded-2xl border border-border-dark bg-midnight/70 p-5 space-y-3">
                    <div className="flex items-center gap-2 text-cyan">
                      <FlaskConical className="h-4 w-4" />
                      <h4 className="font-heading text-sm font-bold uppercase tracking-wider">
                        Advanced Research & Instructional Labs
                      </h4>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-secondary-text">
                      {selectedDepartment.labs.map((lab, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-cyan shrink-0 mt-0.5" />
                          <span className="text-light-text font-medium">{lab}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Research Focus Thrusts */}
                  <div className="rounded-2xl border border-border-dark bg-midnight/70 p-5 space-y-3">
                    <div className="flex items-center gap-2 text-mint">
                      <GraduationCap className="h-4 w-4" />
                      <h4 className="font-heading text-sm font-bold uppercase tracking-wider">
                        Interdisciplinary Research Thrusts
                      </h4>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-secondary-text">
                      {selectedDepartment.researchAreas.map((area, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-mint shrink-0 mt-1.5" />
                          <span className="text-light-text font-medium">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Department In-Charge */}
                <div className="mt-6 pt-5 border-t border-border-dark flex items-center justify-between text-xs text-secondary-text">
                  <span className="font-mono text-cyan">Faculty Lead & Coordinator:</span>
                  <span className="font-semibold text-light-text">{selectedDepartment.keyInCharge}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* SUB-TAB 3: CAMPUS FACILITIES & GALLERY */}
        {activeSubTab === 'facilities' && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-10"
          >
            {/* Interactive Photo Viewer */}
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="relative overflow-hidden rounded-3xl border border-cyan/40 bg-navy/90 p-3 shadow-2xl glow-cyan-sm">
                  <div className="relative h-80 sm:h-[26rem] w-full overflow-hidden rounded-2xl bg-midnight">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeFacility.id}
                        src={activeFacility.image}
                        alt={activeFacility.name}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-full w-full object-cover"
                      />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent pointer-events-none" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-midnight/90 border border-border-dark px-4 py-2.5 backdrop-blur-md">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-cyan block">
                          {activeFacility.category}
                        </span>
                        <h4 className="text-sm font-bold text-light-text">
                          {activeFacility.name}
                        </h4>
                      </div>
                      <span className="rounded-md bg-cyan/15 border border-cyan/30 px-2.5 py-1 text-[11px] font-mono text-cyan font-bold">
                        {activeFacility.capacity}
                      </span>
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  <div className="mt-3 grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {CAMPUS_FACILITIES.map((fac, idx) => {
                      const isSel = idx === activePhotoIdx;
                      return (
                        <button
                          key={fac.id}
                          type="button"
                          onClick={() => setActivePhotoIdx(idx)}
                          className={`relative h-14 rounded-xl overflow-hidden border transition-all cursor-pointer ${
                            isSel
                              ? 'border-cyan ring-2 ring-cyan/60 scale-105'
                              : 'border-border-dark opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={fac.image}
                            alt={fac.name}
                            className="h-full w-full object-cover"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Facility Details Column */}
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-3xl border border-border-dark bg-navy/80 p-6 space-y-4">
                  <span className="rounded-full bg-cyan/15 border border-cyan/30 px-3 py-1 text-xs font-mono font-bold text-cyan">
                    {activeFacility.category}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-light-text">
                    {activeFacility.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                    {activeFacility.description}
                  </p>

                  <div className="pt-2 space-y-2 border-t border-border-dark">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan block">
                      Key Technical Features:
                    </span>
                    {activeFacility.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-secondary-text">
                        <CheckCircle2 className="h-3.5 w-3.5 text-mint shrink-0 mt-0.5" />
                        <span className="text-light-text font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Grid of All Campus Infrastructure */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CAMPUS_FACILITIES.map((facility) => (
                <div
                  key={facility.id}
                  className="rounded-3xl border border-border-dark bg-navy/60 overflow-hidden flex flex-col hover:border-cyan/40 transition-colors"
                >
                  <div className="h-44 w-full overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-cyan block">
                        {facility.category}
                      </span>
                      <h4 className="font-heading text-base font-bold text-light-text mt-0.5">
                        {facility.name}
                      </h4>
                      <p className="text-xs text-secondary-text mt-1.5 line-clamp-2">
                        {facility.description}
                      </p>
                    </div>
                    <span className="text-[11px] font-mono text-mint font-semibold border-t border-border-dark pt-2 block">
                      {facility.capacity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* SUB-TAB 4: RESEARCH & INCUBATION (CIIE) */}
        {activeSubTab === 'innovation' && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-8"
          >
            <div className="rounded-3xl border border-cyan/40 bg-navy/80 p-7 sm:p-10 shadow-2xl glow-cyan-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/15 text-cyan border border-cyan/30">
                  <Rocket className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan uppercase tracking-wider block">
                    Innovation & Startup Ecosystem
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-light-text">
                    {HOST_INSTITUTION.innovationAndIncubation.centerName}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-secondary-text leading-relaxed">
                The Center for Innovation, Incubation and Entrepreneurship (CIIE) at NSIT Bihta serves as a vibrant launchpad for aspiring student founders, research scholars, and faculty inventors. CIIE facilitates idea-to-prototype transitions, offering hardware test suites, seed grants, intellectual property guidance, and investor access.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 pt-2">
                {HOST_INSTITUTION.innovationAndIncubation.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-2xl border border-border-dark bg-midnight/80 p-4 text-xs sm:text-sm text-secondary-text"
                  >
                    <CheckCircle2 className="h-4 w-4 text-mint shrink-0 mt-0.5" />
                    <span className="text-light-text font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* Research Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-border-dark">
                <div className="rounded-xl border border-border-dark bg-midnight p-3 text-center">
                  <span className="text-lg font-black text-cyan font-mono block">3D Labs</span>
                  <span className="text-[10px] text-secondary-text">Rapid Prototyping</span>
                </div>
                <div className="rounded-xl border border-border-dark bg-midnight p-3 text-center">
                  <span className="text-lg font-black text-mint font-mono block">IPR Cell</span>
                  <span className="text-[10px] text-secondary-text">Patent Filing Support</span>
                </div>
                <div className="rounded-xl border border-border-dark bg-midnight p-3 text-center">
                  <span className="text-lg font-black text-cyan font-mono block">MoUs</span>
                  <span className="text-[10px] text-secondary-text">Industry Collaborations</span>
                </div>
                <div className="rounded-xl border border-border-dark bg-midnight p-3 text-center">
                  <span className="text-lg font-black text-mint font-mono block">ETIMS 2027</span>
                  <span className="text-[10px] text-secondary-text">National Summit Host</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* SUB-TAB 5: CORPORATE TIES & PLACEMENTS */}
        {activeSubTab === 'placements' && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-8"
          >
            <div className="rounded-3xl border border-cyan/40 bg-navy/80 p-7 sm:p-10 shadow-2xl glow-cyan-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/15 text-cyan border border-cyan/30">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan uppercase tracking-wider block">
                    Training & Placement Division
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-light-text">
                    Industry Engagements & Career Outcomes
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-secondary-text leading-relaxed">
                The Training and Placement (T&P) Cell at NSIT Bihta actively bridges academia with leading technology conglomerates and engineering enterprises. Through semester-long industrial internships, mock interview panels, GATE coaching, and technical hackathons, students are prepared to excel in competitive global environments.
              </p>

              <div>
                <span className="text-xs font-mono uppercase text-cyan block mb-3">
                  Prominent Campus Recruiters & Industry Partners:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {HOST_INSTITUTION.placementsAndRecruiters.map((recruiter, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-border-dark bg-midnight px-4 py-2.5 text-xs font-semibold text-light-text hover:border-cyan/50 transition-colors"
                    >
                      {recruiter}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* SUB-TAB 6: ABOUT ETIMS 2027 SUMMIT */}
        {activeSubTab === 'summit' && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-10"
          >
            <div className="rounded-3xl border border-cyan/40 bg-navy/80 p-7 sm:p-10 shadow-2xl glow-cyan-sm">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan">
                National Academic Convention
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-light-text mt-2 text-glow-cyan">
                {CONFERENCE.name}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-secondary-text leading-relaxed">
                ETIMS 2027 is conceptualized as an authoritative scientific gathering uniting engineering scholars, computing specialists, industry researchers, and policy advisors. Hosted at Netaji Subhas Institute of Technology (NSIT), Bihta, Patna on 23–24 July 2027, the conference provides an intellectual forum to debate breakthroughs at the intersection of computing, energy systems, mechatronics, and applied physical sciences.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <div className="rounded-2xl border border-border-dark bg-midnight/70 p-5 space-y-2">
                  <span className="text-xs font-mono text-cyan uppercase block">01 // Multidisciplinary</span>
                  <h4 className="font-heading text-base font-bold text-light-text">Cross-Domain Synergy</h4>
                  <p className="text-xs text-secondary-text leading-relaxed">
                    Bridging classical engineering with computational intelligence and sustainable technological paradigms.
                  </p>
                </div>

                <div className="rounded-2xl border border-border-dark bg-midnight/70 p-5 space-y-2">
                  <span className="text-xs font-mono text-cyan uppercase block">02 // Blind Review</span>
                  <h4 className="font-heading text-base font-bold text-light-text">Rigorous Peer Review</h4>
                  <p className="text-xs text-secondary-text leading-relaxed">
                    Double-blind peer evaluation with strict similarity thresholds ensuring genuine academic contributions.
                  </p>
                </div>

                <div className="rounded-2xl border border-border-dark bg-midnight/70 p-5 space-y-2">
                  <span className="text-xs font-mono text-cyan uppercase block">03 // In-Person Sessions</span>
                  <h4 className="font-heading text-base font-bold text-light-text">Interactive Exchange</h4>
                  <p className="text-xs text-secondary-text leading-relaxed">
                    Oral paper presentations, keynote plenary dialogues, and hands-on networking at NSIT Bihta, Patna.
                  </p>
                </div>
              </div>

              {/* Convenor Contact Card */}
              <div className="mt-8 pt-6 border-t border-border-dark flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-cyan uppercase block">Official Convenorship</span>
                  <h4 className="font-heading text-base font-bold text-light-text">
                    {CONVENOR.name} &bull; Assistant Professor, Dept. of EEE
                  </h4>
                  <p className="text-xs text-secondary-text">{CONVENOR.institution}, {CONVENOR.campus}</p>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono">
                  <a
                    href={`mailto:${CONVENOR.email}`}
                    className="flex items-center gap-1.5 rounded-xl border border-cyan/40 bg-midnight px-3.5 py-2 text-cyan hover:bg-cyan/10 transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>{CONVENOR.email}</span>
                  </a>
                  <a
                    href={`tel:${CONVENOR.phoneTel}`}
                    className="flex items-center gap-1.5 rounded-xl border border-border-dark bg-midnight px-3.5 py-2 text-light-text hover:border-cyan hover:text-cyan transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-cyan" />
                    <span>{CONVENOR.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </Container>
    </div>
  );
}

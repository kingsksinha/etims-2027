import { useState } from 'react';
import { motion } from 'framer-motion';
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
  REVIEW_AND_PUBLICATION,
  WHO_SHOULD_ATTEND,
  AWARDS_AND_RECOGNITION,
  SPONSORSHIP,
  STUDENT_VOLUNTEERS,
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

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#1C1917] py-6 sm:py-10 md:py-16 overflow-hidden">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute top-10 left-1/4 h-96 w-96 rounded-full bg-[#BF982E]/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-20 right-10 h-96 w-96 rounded-full bg-[#7B1123]/10 blur-[150px]" />

      <Container className="relative z-10 w-full min-w-0">
        {/* Page Header */}
        <div className="mb-5 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7B1123]/30 bg-[#7B1123]/10 px-3 py-0.5 sm:px-3.5 sm:py-1 text-[11px] sm:text-xs font-mono font-semibold text-[#7B1123] mb-2 sm:mb-3">
            <Building2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>Host Academic Institution Profile</span>
          </div>
          <h1 className="font-heading text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#1C1917] break-words leading-tight">
            Netaji Subhas Institute of Technology{' '}
            <span className="text-[#7B1123]">& ETIMS 2027</span>
          </h1>
          <p className="mt-2 sm:mt-3 max-w-3xl text-xs sm:text-base text-[#57534E] leading-relaxed">
            Discover the premier technical institution hosting the 1st National Conference on Emerging Technologies, Innovation and Multidisciplinary Studies at Bihta, Patna, Bihar.
          </p>

          {/* Sub-Tabs Switcher Bar */}
          <div className="mt-4 sm:mt-6 flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#E7E0D6] w-full min-w-0">
            {SUB_TABS.map((tab) => {
              const isSelected = activeSubTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveSubTab(tab.id)}
                  className={`flex items-center gap-1.5 sm:gap-2 rounded-xl px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-[#7B1123] text-white shadow-sm'
                      : 'bg-white text-[#57534E] hover:text-[#1C1917] hover:bg-[#FAF8F5] border border-[#E7E0D6]'
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
            className="space-y-8 sm:space-y-12"
          >
            {/* Hero Profile Lockup */}
            <div className="grid gap-5 sm:gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-3.5 sm:space-y-5">
                <div className="flex items-start sm:items-center gap-3 sm:gap-3.5">
                  <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-white border border-[#E7E0D6] p-1 shadow-sm mt-0.5 sm:mt-0">
                    <img
                      src="/assets/nsit-seal.png"
                      alt="NSIT Official Seal"
                      className="h-full w-full object-contain drop-shadow-xs"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-heading text-base sm:text-2xl font-bold text-[#1C1917] leading-snug break-words">
                      {HOST_INSTITUTION.name}
                    </h2>
                    <p className="text-xs font-mono text-[#7B1123] flex items-center gap-1.5 mt-0.5 break-words">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      <span>{HOST_INSTITUTION.fullAddress}</span>
                    </p>
                  </div>
                </div>

                <div className="rounded-xl sm:rounded-2xl border border-[#BF982E]/30 bg-white p-3.5 sm:p-4 text-xs font-mono shadow-xs">
                  <span className="text-[10px] uppercase text-[#7B1123] font-bold block mb-1">
                    Statutory Recognitions & University Affiliations:
                  </span>
                  <p className="leading-relaxed text-[#57534E]">
                    {HOST_INSTITUTION.approvals}
                  </p>
                  <p className="mt-1.5 text-[#1C1917] font-semibold">
                    Governed by: {HOST_INSTITUTION.trustName}
                  </p>
                </div>

                <p className="text-xs sm:text-base text-[#57534E] leading-relaxed">
                  Netaji Subhas Institute of Technology (NSIT), Bihta, Patna was established with the steadfast vision to cultivate world-class engineers, computer scientists, and innovative researchers in Bihar. Situated in the emerging national knowledge hub of Bihta, NSIT is positioned adjacent to <strong>IIT Patna</strong> and the national technology corridor, offering a vibrant learning ecosystem for multidisciplinary collaboration.
                </p>

                <p className="text-xs sm:text-base text-[#57534E] leading-relaxed">
                  Spread across a sprawling, pollution-free green multi-acre campus, the institute features state-of-the-art air-conditioned auditoriums, high-capacity computing clusters, an extensive digital central library, and over 30 specialized engineering laboratories.
                </p>
              </div>

              {/* Campus Feature Frame */}
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E7E0D6] bg-white p-1.5 sm:p-2.5 shadow-md">
                  <div className="relative h-52 sm:h-80 md:h-96 w-full overflow-hidden rounded-xl sm:rounded-2xl">
                    <img
                      src="/assets/nsit-building-real.jpg"
                      alt="NSIT Bihta Sprawling Campus"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-3 sm:p-4 pt-8 pointer-events-none">
                      <span className="text-[10px] font-mono text-[#F3D993] font-bold uppercase tracking-wider block">
                        Host Institution Campus
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-white mt-0.5 truncate">
                        Netaji Subhas Institute of Technology, Bihta, Patna
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Bento Telemetry: Institutional Scale & Metrics */}
            <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7B1123] font-bold block">
                    INSTITUTIONAL METRICS // VERIFIED AUDIT
                  </span>
                  <h3 className="font-heading text-lg sm:text-2xl font-bold text-[#1C1917]">
                    Campus Scale, Research Facilities & Academic Scope
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1 font-mono text-[10px] text-emerald-800 font-bold">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>AICTE & BEU Charter Compliant</span>
                </span>
              </div>

              {/* Bento Grid: 2-col on phone for scannable dashboard, 4-col on desktop */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
                {/* 1. Sprawling Campus Scale (Span 2) */}
                <div className="col-span-2 rounded-2xl sm:rounded-3xl border border-[#E7E0D6] bg-white p-4 sm:p-6 relative overflow-hidden group hover:border-[#7B1123]/40 hover:shadow-md transition-all">
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#7B1123] bg-[#7B1123]/10 border border-[#7B1123]/25 px-2.5 py-0.5 rounded-full font-semibold">
                        CAMPUS INFRASTRUCTURE
                      </span>
                      <span className="text-[11px] font-mono text-[#57534E]">Est. 2007 &bull; AICTE Approved</span>
                    </div>
                    <div className="my-3 sm:my-5">
                      <div className="flex items-baseline gap-2 sm:gap-3">
                        <span className="font-heading text-3xl sm:text-5xl font-black text-[#1C1917] tracking-tight">
                          9.2 Acres
                        </span>
                        <span className="font-mono text-xs sm:text-sm text-[#7B1123] font-bold">
                          &bull; Amhara, Bihta
                        </span>
                      </div>
                      <h4 className="font-heading text-sm sm:text-base font-bold text-[#1C1917] mt-1">
                        Integrated Academic & Residential Campus
                      </h4>
                      <p className="text-xs text-[#57534E] mt-1 max-w-lg leading-relaxed">
                        Pollution-free engineering campus situated in the Bihta educational corridor along NH-922, approximately 30 km west of Patna, featuring departmental lecture halls, computer labs, and student residential blocks.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 pt-2 border-t border-[#E7E0D6] text-[10px] sm:text-[11px] font-mono text-[#78716C]">
                      <MapPin className="h-3.5 w-3.5 text-[#7B1123] shrink-0" />
                      <span className="truncate">Bihta Knowledge Hub, Patna (Near IIT Patna)</span>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-[#BF982E]/10 blur-[50px]" />
                </div>

                {/* 2. Academic Departments */}
                <div className="col-span-1 rounded-xl sm:rounded-2xl border border-[#E7E0D6] bg-white p-3 sm:p-5 flex flex-col justify-between hover:border-[#7B1123]/40 shadow-xs transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-[#7B1123]/10 text-[#7B1123] border border-[#7B1123]/25">
                      <Cpu className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#78716C] uppercase font-bold">ACADEMICS</span>
                  </div>
                  <div className="my-2 sm:my-3">
                    <span className="font-heading text-xl sm:text-2xl font-black text-[#1C1917] font-mono block">
                      7 Depts
                    </span>
                    <h4 className="font-heading text-xs sm:text-sm font-bold text-[#1C1917] mt-0.5 leading-snug">
                      Academic Depts
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-[#57534E] mt-0.5 line-clamp-2">
                      Civil, Mechanical, EEE, CSE, Mgmt & Sciences
                    </p>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#7B1123] font-semibold">BEU / SBTE / AKU</span>
                </div>

                {/* 3. Computing Lab */}
                <div className="col-span-1 rounded-xl sm:rounded-2xl border border-[#E7E0D6] bg-white p-3 sm:p-5 flex flex-col justify-between hover:border-[#7B1123]/40 shadow-xs transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-[#7B1123]/10 text-[#7B1123] border border-[#7B1123]/25">
                      <Layers className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#78716C] uppercase font-bold">COMPUTING</span>
                  </div>
                  <div className="my-2 sm:my-3">
                    <span className="font-heading text-xl sm:text-2xl font-black text-[#1C1917] font-mono block">
                      IT Labs
                    </span>
                    <h4 className="font-heading text-xs sm:text-sm font-bold text-[#1C1917] mt-0.5 leading-snug">
                      Computer Center
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-[#57534E] mt-0.5 line-clamp-2">
                      Terminals with high-speed campus LAN network
                    </p>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-emerald-700 font-semibold">Campus LAN</span>
                </div>

                {/* 4. Practical Laboratories */}
                <div className="col-span-1 rounded-xl sm:rounded-2xl border border-[#E7E0D6] bg-white p-3 sm:p-5 flex flex-col justify-between hover:border-[#7B1123]/40 shadow-xs transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-[#7B1123]/10 text-[#7B1123] border border-[#7B1123]/25">
                      <FlaskConical className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#78716C] uppercase font-bold">LABS</span>
                  </div>
                  <div className="my-2 sm:my-3">
                    <span className="font-heading text-xl sm:text-2xl font-black text-[#1C1917] font-mono block">
                      Dept Labs
                    </span>
                    <h4 className="font-heading text-xs sm:text-sm font-bold text-[#1C1917] mt-0.5 leading-snug">
                      Workshops & Labs
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-[#57534E] mt-0.5 line-clamp-2">
                      Circuit testing, mechanical workshops & surveying
                    </p>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#57534E]">Hands-On Practice</span>
                </div>

                {/* 5. College Library */}
                <div className="col-span-1 rounded-xl sm:rounded-2xl border border-[#E7E0D6] bg-white p-3 sm:p-5 flex flex-col justify-between hover:border-[#7B1123]/40 shadow-xs transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-[#7B1123]/10 text-[#7B1123] border border-[#7B1123]/25">
                      <BookOpen className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#78716C] uppercase font-bold">LIBRARY</span>
                  </div>
                  <div className="my-2 sm:my-3">
                    <span className="font-heading text-xl sm:text-2xl font-black text-[#1C1917] font-mono block">
                      Library
                    </span>
                    <h4 className="font-heading text-xs sm:text-sm font-bold text-[#1C1917] mt-0.5 leading-snug">
                      Central Hall
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-[#57534E] mt-0.5 line-clamp-2">
                      Engineering textbooks & reference collection
                    </p>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#7B1123] font-semibold">Reference Center</span>
                </div>

                {/* 6. Conference Hall */}
                <div className="col-span-1 rounded-xl sm:rounded-2xl border border-[#E7E0D6] bg-white p-3 sm:p-5 flex flex-col justify-between hover:border-[#7B1123]/40 shadow-xs transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-[#7B1123]/10 text-[#7B1123] border border-[#7B1123]/25">
                      <Building2 className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#78716C] uppercase font-bold">HALL</span>
                  </div>
                  <div className="my-2 sm:my-3">
                    <span className="font-heading text-xl sm:text-2xl font-black text-[#1C1917] font-mono block">
                      Auditorium
                    </span>
                    <h4 className="font-heading text-xs sm:text-sm font-bold text-[#1C1917] mt-0.5 leading-snug">
                      AC Plenary Hall
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-[#57534E] mt-0.5 line-clamp-2">
                      Tiered seating with AV and laser projection
                    </p>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#BF982E] font-bold">ETIMS 2027 Venue</span>
                </div>

                {/* 7. Student Living */}
                <div className="col-span-1 rounded-xl sm:rounded-2xl border border-[#E7E0D6] bg-white p-3 sm:p-5 flex flex-col justify-between hover:border-[#7B1123]/40 shadow-xs transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-[#7B1123]/10 text-[#7B1123] border border-[#7B1123]/25">
                      <Shield className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#78716C] uppercase font-bold">HOSTEL</span>
                  </div>
                  <div className="my-2 sm:my-3">
                    <span className="font-heading text-xl sm:text-2xl font-black text-[#1C1917] font-mono block">
                      Hostels
                    </span>
                    <h4 className="font-heading text-xs sm:text-sm font-bold text-[#1C1917] mt-0.5 leading-snug">
                      Campus Living
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-[#57534E] mt-0.5 line-clamp-2">
                      Separate residential facilities for boys & girls
                    </p>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-emerald-700 font-semibold">Residential</span>
                </div>
              </div>
            </div>

            {/* Vision, Mission & Strategic Location */}
            <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
              <div className="rounded-2xl sm:rounded-3xl border border-[#E7E0D6] bg-white p-4 sm:p-6 space-y-2.5 shadow-xs">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#7B1123]/10 text-[#7B1123] border border-[#7B1123]/25">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#1C1917]">
                  Institutional Vision
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  To emerge as a center of technical and research excellence recognized nationally for fostering innovation, entrepreneurial vigor, ethical leadership, and sustainable engineering solutions that uplift society.
                </p>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-[#E7E0D6] bg-white p-4 sm:p-6 space-y-2.5 shadow-xs">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#7B1123]/10 text-[#7B1123] border border-[#7B1123]/25">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#1C1917]">
                  Academic Mission
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  To deliver rigorous outcome-based engineering education, provide state-of-the-art laboratory infrastructure, nurture intellectual curiosity, and forge sustained partnerships with industry and global research communities.
                </p>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-[#E7E0D6] bg-white p-4 sm:p-6 space-y-2.5 shadow-xs">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#7B1123]/10 text-[#7B1123] border border-[#7B1123]/25">
                  <Compass className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#1C1917]">
                  Bihta Knowledge Hub
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  Strategically situated in Bihta, directly adjacent to <strong>IIT Patna</strong> and near NIELIT along the 4-lane NH-922 corridor, providing effortless connectivity to Patna Airport (30 km) and Bihta Railway Station (4 km).
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
            className="space-y-6 sm:space-y-10"
          >
            {/* Degree Programs Offered Summary */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#E7E0D6] bg-white p-4 sm:p-6 md:p-8 shadow-sm space-y-4 sm:space-y-6">
              <div>
                <span className="text-[10px] sm:text-xs font-mono text-[#7B1123] font-bold uppercase tracking-wider block">
                  Academic Curriculum & Degrees
                </span>
                <h3 className="font-heading text-lg sm:text-2xl font-bold text-[#1C1917] mt-1">
                  Programs of Study at NSIT Bihta
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] mt-1 leading-relaxed">
                  Comprehensive four-year B.Tech engineering degrees, three-year polytechnic diplomas, and applied management courses approved by AICTE New Delhi and affiliated with BEU / AKU.
                </p>
              </div>

              <div className="grid gap-2.5 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {HOST_INSTITUTION.academicPrograms.undergraduate.map((prog, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl sm:rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-3.5 sm:p-4 space-y-1 sm:space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#7B1123] uppercase font-bold">
                        Undergraduate (B.Tech)
                      </span>
                      <span className="rounded bg-[#7B1123]/10 px-2 py-0.5 text-[10px] font-mono text-[#7B1123] font-bold">
                        {prog.duration}
                      </span>
                    </div>
                    <h4 className="font-heading text-xs sm:text-sm font-bold text-[#1C1917]">
                      {prog.degree}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-[#57534E] leading-snug">
                      Focus: {prog.focus}
                    </p>
                  </div>
                ))}
              </div>

              {/* Polytechnic & Management Snippet */}
              <div className="grid gap-2.5 sm:gap-4 grid-cols-1 sm:grid-cols-2 pt-2 border-t border-[#E7E0D6]">
                <div className="rounded-xl sm:rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-3.5 sm:p-4">
                  <span className="text-xs font-mono text-[#7B1123] uppercase font-bold block mb-1.5">
                    Polytechnic / Diploma in Engineering (3 Years):
                  </span>
                  <ul className="space-y-1 text-xs text-[#57534E]">
                    <li>&bull; Diploma in Mechanical Engineering</li>
                    <li>&bull; Diploma in Civil Engineering</li>
                    <li>&bull; Diploma in Electrical Engineering</li>
                  </ul>
                </div>
                <div className="rounded-xl sm:rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-3.5 sm:p-4">
                  <span className="text-xs font-mono text-[#BF982E] uppercase font-bold block mb-1.5">
                    Applied Applications & Management:
                  </span>
                  <ul className="space-y-1 text-xs text-[#57534E]">
                    <li>&bull; Bachelor of Computer Applications (BCA) &bull; 3 Years</li>
                    <li>&bull; Bachelor of Business Administration (BBA) &bull; 3 Years</li>
                    <li>&bull; Master of Business Administration (MBA) &bull; 2 Years</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Department Selection & Detailed Breakdown */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1C1917]">
                  Departmental Research Thrusts & Laboratories
                </h3>
                <p className="text-xs text-[#57534E] mt-0.5">
                  Select an engineering department to review its academic overview, specialized laboratories, and faculty coordinators.
                </p>
              </div>

              {/* Department Selection Pills */}
              <div className="flex flex-wrap gap-2">
                {COLLEGE_DEPARTMENTS.map((dept) => {
                  const isSelected = dept.code === activeDeptCode;
                  return (
                    <button
                      key={dept.code}
                      type="button"
                      onClick={() => setActiveDeptCode(dept.code)}
                      className={`flex items-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#7B1123] text-white shadow-md'
                          : 'bg-white border border-[#E7E0D6] text-[#57534E] hover:text-[#1C1917] hover:border-[#7B1123]/40'
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
              <div className="rounded-2xl sm:rounded-3xl border border-[#E7E0D6] bg-white p-4 sm:p-6 md:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-[#E7E0D6] pb-4 sm:pb-6">
                  <div>
                    <span className="text-[10px] sm:text-xs font-mono text-[#7B1123] font-bold uppercase tracking-wider">
                      {selectedDepartment.headTitle} &bull; NSIT Bihta
                    </span>
                    <h3 className="font-heading text-xl sm:text-3xl font-extrabold text-[#1C1917] mt-0.5">
                      {selectedDepartment.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#BF982E] font-medium mt-0.5">
                      {selectedDepartment.tagline}
                    </p>
                  </div>

                  <div className="rounded-xl sm:rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] px-3.5 py-2 text-left sm:text-right shrink-0">
                    <span className="text-[10px] font-mono text-[#78716C] uppercase block">Department Code</span>
                    <span className="font-heading text-xl sm:text-2xl font-black text-[#7B1123] font-mono">
                      {selectedDepartment.code}
                    </span>
                  </div>
                </div>

                <p className="mt-4 sm:mt-6 text-xs sm:text-base text-[#57534E] leading-relaxed">
                  {selectedDepartment.overview}
                </p>

                {/* Research Areas & Laboratories Grid */}
                <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6 md:grid-cols-2">
                  {/* Specialized Laboratories */}
                  <div className="rounded-xl sm:rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-3.5 sm:p-5 space-y-2.5 sm:space-y-3">
                    <div className="flex items-center gap-2 text-[#7B1123]">
                      <FlaskConical className="h-4 w-4" />
                      <h4 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider">
                        Advanced Research & Instructional Labs
                      </h4>
                    </div>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-[#57534E]">
                      {selectedDepartment.labs.map((lab, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#7B1123] shrink-0 mt-0.5" />
                          <span className="text-[#1C1917] font-medium">{lab}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Research Focus Thrusts */}
                  <div className="rounded-xl sm:rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-3.5 sm:p-5 space-y-2.5 sm:space-y-3">
                    <div className="flex items-center gap-2 text-[#BF982E]">
                      <GraduationCap className="h-4 w-4" />
                      <h4 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider">
                        Interdisciplinary Research Thrusts
                      </h4>
                    </div>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-[#57534E]">
                      {selectedDepartment.researchAreas.map((area, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#BF982E] shrink-0 mt-1.5" />
                          <span className="text-[#1C1917] font-medium">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Department In-Charge */}
                <div className="mt-5 sm:mt-6 pt-4 border-t border-[#E7E0D6] flex flex-wrap items-center justify-between gap-2 text-xs text-[#57534E]">
                  <span className="font-mono text-[#7B1123] font-bold">Faculty Lead & Coordinator:</span>
                  <span className="font-semibold text-[#1C1917]">{selectedDepartment.keyInCharge}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* SUB-TAB 3: CAMPUS FACILITIES & INFRASTRUCTURE */}
        {activeSubTab === 'facilities' && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-6 sm:space-y-10"
          >
            {/* Real Campus Photography Spotlight (Only Verified Real Photos) */}
            <div className="grid gap-5 sm:gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E7E0D6] bg-white p-2 sm:p-3 shadow-md">
                  <div className="relative h-60 sm:h-80 md:h-[24rem] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-[#1C1917]">
                    <img
                      src={activePhotoIdx === 1 ? "/assets/nsit-auditorium-real.jpg" : "/assets/nsit-building-real.jpg"}
                      alt={activePhotoIdx === 1 ? "NSIT Central Auditorium" : "NSIT Official Campus Building"}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                    <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between rounded-xl bg-white/95 border border-[#E7E0D6] px-3 py-2 sm:px-4 sm:py-2.5 backdrop-blur-md shadow-xs">
                      <div className="min-w-0 pr-2">
                        <span className="text-[10px] font-mono uppercase text-[#7B1123] font-bold block truncate">
                          {activePhotoIdx === 1 ? "Official Conference Venue" : "Official Host Institution"}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-[#1C1917] truncate">
                          {activePhotoIdx === 1 ? "Central Air-Conditioned Auditorium & Plenary Hall" : "NSIT Main Academic Campus (9.2 Acres)"}
                        </h4>
                      </div>
                      <span className="rounded-md bg-[#7B1123]/10 border border-[#7B1123]/30 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-[11px] font-mono text-[#7B1123] font-bold shrink-0">
                        Verified Campus
                      </span>
                    </div>
                  </div>

                  {/* Real Photo Switcher Pills */}
                  <div className="mt-2.5 sm:mt-3 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setActivePhotoIdx(0)}
                      className={`flex items-center gap-2.5 rounded-xl border p-2 text-left transition-all cursor-pointer ${
                        activePhotoIdx === 0
                          ? 'border-[#7B1123] bg-[#7B1123]/5 ring-2 ring-[#7B1123]/30'
                          : 'border-[#E7E0D6] bg-white hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <img
                        src="/assets/nsit-building-real.jpg"
                        alt="NSIT Building"
                        className="h-10 w-14 rounded-lg object-cover shrink-0"
                      />
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono uppercase text-[#7B1123] font-bold block">Photo 1</span>
                        <span className="text-xs font-bold text-[#1C1917] truncate block">Academic Main Campus</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActivePhotoIdx(1)}
                      className={`flex items-center gap-2.5 rounded-xl border p-2 text-left transition-all cursor-pointer ${
                        activePhotoIdx === 1
                          ? 'border-[#7B1123] bg-[#7B1123]/5 ring-2 ring-[#7B1123]/30'
                          : 'border-[#E7E0D6] bg-white hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <img
                        src="/assets/nsit-auditorium-real.jpg"
                        alt="NSIT Auditorium"
                        className="h-10 w-14 rounded-lg object-cover shrink-0"
                      />
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono uppercase text-[#7B1123] font-bold block">Photo 2</span>
                        <span className="text-xs font-bold text-[#1C1917] truncate block">Central Auditorium</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Verified Campus Environment Summary */}
              <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
                <div className="rounded-2xl sm:rounded-3xl border border-[#E7E0D6] bg-white p-5 sm:p-7 shadow-sm space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[#7B1123]/10 border border-[#7B1123]/30 px-3 py-1 text-xs font-mono font-bold text-[#7B1123]">
                      Verified Campus Profile
                    </span>
                    <span className="text-xs font-mono text-[#BF982E] font-bold">Est. 2007</span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-2xl font-bold text-[#1C1917]">
                    9.2-Acre Academic Ecosystem
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                    Netaji Subhas Institute of Technology provides comprehensive infrastructure dedicated to undergraduate engineering education and advanced multidisciplinary research. The campus features air-conditioned lecture theatres, engineering workshops, high-speed digital connectivity, and residential facilities.
                  </p>

                  <div className="pt-2 space-y-2 border-t border-[#E7E0D6]">
                    <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#7B1123] font-bold block">
                      Brochure Infrastructure Inclusions:
                    </span>
                    <div className="grid grid-cols-1 gap-1.5 text-xs text-[#57534E]">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#BF982E] shrink-0" />
                        <span className="text-[#1C1917] font-medium">Air-conditioned auditoriums & tier-seated presentation halls</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#BF982E] shrink-0" />
                        <span className="text-[#1C1917] font-medium">Central digital library and e-learning resource centre</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#BF982E] shrink-0" />
                        <span className="text-[#1C1917] font-medium">Over 30 departmental engineering laboratories & workshops</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#BF982E] shrink-0" />
                        <span className="text-[#1C1917] font-medium">On-campus residential hostels and guest house for visiting delegates</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#BF982E] shrink-0" />
                        <span className="text-[#1C1917] font-medium">Campus-wide high-speed Wi-Fi network & UPS backup power</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Campus Facilities Cards (Clean, Icon-Driven, Zero Misleading Stock Photos) */}
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {CAMPUS_FACILITIES.map((facility) => (
                <div
                  key={facility.id}
                  className="rounded-2xl sm:rounded-3xl border border-[#E7E0D6] bg-white p-5 sm:p-6 flex flex-col justify-between hover:border-[#7B1123]/40 shadow-xs transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase text-[#7B1123] font-bold bg-[#7B1123]/10 px-2.5 py-1 rounded-full">
                        {facility.category}
                      </span>
                      <Building2 className="h-4 w-4 text-[#BF982E]" />
                    </div>
                    <h4 className="font-heading text-base font-bold text-[#1C1917]">
                      {facility.name}
                    </h4>
                    <p className="text-xs text-[#57534E] leading-relaxed">
                      {facility.description}
                    </p>

                    <ul className="space-y-1.5 pt-2 border-t border-[#E7E0D6] text-xs text-[#57534E]">
                      {facility.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3 w-3 text-[#BF982E] shrink-0 mt-0.5" />
                          <span className="text-[#1C1917] text-[11px] leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <span className="text-[11px] font-mono text-[#BF982E] font-bold border-t border-[#E7E0D6] pt-3 mt-4 block">
                    {facility.capacity}
                  </span>
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
            className="space-y-6 sm:space-y-8"
          >
            <div className="rounded-2xl sm:rounded-3xl border border-[#E7E0D6] bg-white p-4 sm:p-6 md:p-8 shadow-sm space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-[#7B1123]/10 text-[#7B1123] border border-[#7B1123]/25">
                  <Rocket className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-mono text-[#7B1123] font-bold uppercase tracking-wider block">
                    Innovation & Startup Ecosystem
                  </span>
                  <h3 className="font-heading text-lg sm:text-2xl font-bold text-[#1C1917]">
                    {HOST_INSTITUTION.innovationAndIncubation.centerName}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-base text-[#57534E] leading-relaxed">
                The Center for Innovation, Incubation and Entrepreneurship (CIIE) at NSIT Bihta serves as a vibrant launchpad for aspiring student founders, research scholars, and faculty inventors. CIIE facilitates idea-to-prototype transitions, offering hardware test suites, seed grants, intellectual property guidance, and investor access.
              </p>

              <div className="grid gap-2.5 sm:gap-4 grid-cols-1 sm:grid-cols-2 pt-2">
                {HOST_INSTITUTION.innovationAndIncubation.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 sm:gap-3 rounded-xl sm:rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-3 sm:p-4 text-xs sm:text-sm text-[#57534E]"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#BF982E] shrink-0 mt-0.5" />
                    <span className="text-[#1C1917] font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* Research Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-[#E7E0D6]">
                <div className="rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] p-2.5 sm:p-3 text-center">
                  <span className="text-base sm:text-lg font-black text-[#7B1123] font-mono block">3D Labs</span>
                  <span className="text-[10px] text-[#57534E]">Rapid Prototyping</span>
                </div>
                <div className="rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] p-2.5 sm:p-3 text-center">
                  <span className="text-base sm:text-lg font-black text-[#BF982E] font-mono block">IPR Cell</span>
                  <span className="text-[10px] text-[#57534E]">Patent Support</span>
                </div>
                <div className="rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] p-2.5 sm:p-3 text-center">
                  <span className="text-base sm:text-lg font-black text-[#7B1123] font-mono block">MoUs</span>
                  <span className="text-[10px] text-[#57534E]">Collaborations</span>
                </div>
                <div className="rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] p-2.5 sm:p-3 text-center">
                  <span className="text-base sm:text-lg font-black text-[#BF982E] font-mono block">ETIMS 2027</span>
                  <span className="text-[10px] text-[#57534E]">Summit Host</span>
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
            className="space-y-6 sm:space-y-8"
          >
            <div className="rounded-2xl sm:rounded-3xl border border-[#E7E0D6] bg-white p-4 sm:p-6 md:p-8 shadow-sm space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-[#7B1123]/10 text-[#7B1123] border border-[#7B1123]/25">
                  <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-mono text-[#7B1123] font-bold uppercase tracking-wider block">
                    Training & Placement Division
                  </span>
                  <h3 className="font-heading text-lg sm:text-2xl font-bold text-[#1C1917]">
                    Industry Engagements & Career Outcomes
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-base text-[#57534E] leading-relaxed">
                The Training and Placement (T&P) Cell at NSIT Bihta actively bridges academia with leading technology conglomerates and engineering enterprises. Through semester-long industrial internships, mock interview panels, GATE coaching, and technical hackathons, students are prepared to excel in competitive global environments.
              </p>

              <div>
                <span className="text-[11px] sm:text-xs font-mono uppercase text-[#7B1123] font-bold block mb-2 sm:mb-3">
                  Prominent Campus Recruiters & Industry Partners:
                </span>
                <div className="flex flex-wrap gap-2">
                  {HOST_INSTITUTION.placementsAndRecruiters.map((recruiter, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg sm:rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold text-[#1C1917] hover:border-[#7B1123]/50 transition-colors"
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
            className="space-y-6 sm:space-y-8"
          >
            <div className="rounded-2xl sm:rounded-3xl border border-[#E7E0D6] bg-white p-4 sm:p-6 md:p-8 shadow-sm space-y-5 sm:space-y-6">
              <div>
                <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#7B1123]">
                  National Academic Convention
                </span>
                <h2 className="font-heading text-xl sm:text-3xl font-black text-[#1C1917] mt-1">
                  {CONFERENCE.name}
                </h2>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-[#57534E] leading-relaxed">
                  ETIMS 2027 is conceptualized as an authoritative scientific gathering uniting engineering scholars, computing specialists, industry researchers, and policy advisors. Hosted at Netaji Subhas Institute of Technology (NSIT), Bihta, Patna on 23–24 July 2027, the conference provides an intellectual forum to debate breakthroughs at the intersection of computing, energy systems, mechatronics, and applied physical sciences.
                </p>
              </div>

              <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
                <div className="rounded-xl sm:rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-3.5 sm:p-4 space-y-1.5">
                  <span className="text-[10px] font-mono text-[#7B1123] uppercase font-bold block">01 // Eight Tracks</span>
                  <h4 className="font-heading text-xs sm:text-sm font-bold text-[#1C1917]">Cross-Domain Synergy</h4>
                  <p className="text-[11px] text-[#57534E] leading-relaxed">
                    Eight technical tracks spanning Computer Science, Civil, Electrical, Mechanical, ECE, Applied Sciences, Management, and Humanities.
                  </p>
                </div>

                <div className="rounded-xl sm:rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-3.5 sm:p-4 space-y-1.5">
                  <span className="text-[10px] font-mono text-[#7B1123] uppercase font-bold block">02 // Peer Review</span>
                  <h4 className="font-heading text-xs sm:text-sm font-bold text-[#1C1917]">Rigorous Screening</h4>
                  <p className="text-[11px] text-[#57534E] leading-relaxed">
                    Preliminary screening for relevance, originality, and similarity followed by independent peer review.
                  </p>
                </div>

                <div className="rounded-xl sm:rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-3.5 sm:p-4 space-y-1.5">
                  <span className="text-[10px] font-mono text-[#7B1123] uppercase font-bold block">03 // Physical Mode</span>
                  <h4 className="font-heading text-xs sm:text-sm font-bold text-[#1C1917]">In-Person Exchange</h4>
                  <p className="text-[11px] text-[#57534E] leading-relaxed">
                    Two-day physical convention at NSIT Bihta campus featuring keynotes, invited lectures, oral and poster sessions, and panel discussions.
                  </p>
                </div>
              </div>

              {/* Review & Publication Policy */}
              <div className="rounded-xl sm:rounded-2xl border border-[#BF982E]/40 bg-[#FAF8F5] p-3.5 sm:p-5 space-y-2">
                <span className="text-[11px] sm:text-xs font-mono text-[#7B1123] uppercase font-bold block">
                  Review and Publication Policy
                </span>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {REVIEW_AND_PUBLICATION.policy}
                </p>
                <p className="text-[11px] font-mono text-[#BF982E] font-bold">
                  * {REVIEW_AND_PUBLICATION.disclaimer}
                </p>
              </div>

              {/* Who Should Attend & Awards */}
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                <div className="rounded-xl sm:rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-4 sm:p-5 space-y-2.5">
                  <span className="text-xs font-mono text-[#7B1123] uppercase font-bold block">
                    Who Should Attend
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#57534E]">
                    {WHO_SHOULD_ATTEND.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#BF982E] shrink-0" />
                        <span className="text-[#1C1917] font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl sm:rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-4 sm:p-5 space-y-2.5">
                  <span className="text-xs font-mono text-[#BF982E] uppercase font-bold block">
                    Awards and Recognition
                  </span>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {AWARDS_AND_RECOGNITION.description}
                  </p>
                  <div className="space-y-1.5 pt-1">
                    {AWARDS_AND_RECOGNITION.awards.map((award, idx) => (
                      <div key={idx} className="rounded-lg border border-[#E7E0D6] bg-white p-2 text-xs">
                        <strong className="text-[#1C1917] block">{award.title}</strong>
                        <span className="text-[11px] text-[#57534E]">{award.criteria}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sponsorship & Student Volunteers */}
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                <div className="rounded-xl sm:rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-4 sm:p-5 space-y-2">
                  <span className="text-xs font-mono text-[#7B1123] uppercase font-bold block">
                    Sponsorship Opportunities
                  </span>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {SPONSORSHIP.description}
                  </p>
                  <ul className="space-y-1 text-xs text-[#57534E] pt-1">
                    {SPONSORSHIP.opportunities.map((opp, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#7B1123] font-bold">&bull;</span>
                        <span>{opp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl sm:rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-4 sm:p-5 space-y-2">
                  <span className="text-xs font-mono text-[#BF982E] uppercase font-bold block">
                    Student Volunteers Corps
                  </span>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {STUDENT_VOLUNTEERS.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {STUDENT_VOLUNTEERS.wings.map((wing, idx) => (
                      <div key={idx} className="rounded-lg border border-[#E7E0D6] bg-white p-2 text-[11px] text-[#1C1917] font-medium text-center">
                        {wing}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Convenor Contact Card */}
              <div className="pt-4 border-t border-[#E7E0D6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <div>
                  <span className="text-[10px] font-mono text-[#7B1123] uppercase font-bold block">Official Convenorship</span>
                  <h4 className="font-heading text-sm sm:text-base font-bold text-[#1C1917]">
                    {CONVENOR.name} &bull; {CONVENOR.title}
                  </h4>
                  <p className="text-xs text-[#57534E]">{CONVENOR.institution}, {CONVENOR.campus}</p>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono w-full sm:w-auto">
                  <a
                    href={`mailto:${CONVENOR.email}`}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#7B1123]/30 bg-[#FAF8F5] px-3.5 py-2 text-[#7B1123] hover:bg-[#7B1123] hover:text-white transition-colors whitespace-nowrap"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    <span className="whitespace-nowrap">{CONVENOR.email}</span>
                  </a>
                  <a
                    href={`tel:${CONVENOR.phoneTel}`}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] px-3.5 py-2 text-[#1C1917] hover:border-[#7B1123] hover:text-[#7B1123] transition-colors whitespace-nowrap"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#7B1123] shrink-0" />
                    <span className="whitespace-nowrap">{CONVENOR.phone}</span>
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

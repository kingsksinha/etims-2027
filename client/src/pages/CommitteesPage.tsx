import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users2,
  Mail,
  Phone,
  Search,
  CheckCircle2,
  Info,
} from 'lucide-react';
import Container from '../components/common/Container';
import {
  FACULTY_TASK_TEAMS,
  CONVENOR,
} from '../utils/constants';

const FILTER_CATEGORIES = [
  'All Committee Members',
  'Leadership & Patrons',
  'Convenorship & Co-Convenors',
  'National Advisory Committee',
];

export default function CommitteesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Committee Members');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTeams = useMemo(() => {
    return FACULTY_TASK_TEAMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All Committee Members' || item.taskCategory === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesQuery =
        item.taskTitle.toLowerCase().includes(q) ||
        item.leadName.toLowerCase().includes(q) ||
        item.leadDesignation.toLowerCase().includes(q) ||
        item.leadDepartment.toLowerCase().includes(q) ||
        item.badge.toLowerCase().includes(q) ||
        item.responsibilities.some((r) => r.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-light-text py-12 sm:py-16 overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-12 right-1/4 h-96 w-96 rounded-full bg-[#BF982E]/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-24 left-10 h-80 w-80 rounded-full bg-[#7B1123]/10 blur-[130px]" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7B1123]/30 bg-[#7B1123]/10 px-4 py-1.5 text-xs font-mono font-semibold text-[#7B1123] mb-4">
            <Users2 className="h-3.5 w-3.5" />
            <span>Official Brochure Governance</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1C1917]">
            Organising Committee &{' '}
            <span className="text-[#7B1123]">Advisory Board</span>
          </h1>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-[#57534E] leading-relaxed">
            The 16 patrons, convenor secretariat members, and national advisory committee members officially listed in the ETIMS 2027 conference brochure at Netaji Subhas Institute of Technology (NSIT), Bihta, Patna.
          </p>

          {/* Featured Convenor Profile Banner */}
          <div className="mt-8 rounded-3xl border border-[#E7E0D6] bg-white p-6 sm:p-8 shadow-md w-full min-w-0">
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 w-full min-w-0">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 flex-1 min-w-0">
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 rounded-2xl border-2 border-[#BF982E] shadow-md overflow-hidden bg-[#FAF8F5]">
                  <img
                    src={CONVENOR.photo || "/assets/committee/atif-hussain.png"}
                    alt={CONVENOR.name}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-1 right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white border border-[#7B1123]">
                    <span className="h-2 w-2 rounded-full bg-[#BF982E]" />
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#7B1123]/10 border border-[#7B1123]/25 px-3 py-0.5 text-[11px] font-mono font-bold text-[#7B1123]">
                      Conference Convenor
                    </span>
                    <span className="text-[10px] font-mono text-[#BF982E] font-bold uppercase">
                      Primary Liaison
                    </span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-extrabold text-[#1C1917] mt-1 truncate">
                    {CONVENOR.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57534E] leading-snug">
                    {CONVENOR.title}
                  </p>
                  <p className="text-xs font-mono text-[#7B1123] mt-0.5 break-words">
                    {CONVENOR.institution}, {CONVENOR.campus}
                  </p>
                </div>
              </div>

              {/* Direct Convenor Contacts (Clean, Spacious, No Letter-by-Letter Wrapping) */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full xl:w-auto shrink-0 text-xs font-mono">
                <a
                  href={`mailto:${CONVENOR.email}`}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl border border-[#7B1123]/30 bg-[#FAF8F5] px-4 py-2.5 text-[#7B1123] hover:bg-[#7B1123] hover:text-white transition-colors shadow-xs whitespace-nowrap"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#7B1123]" />
                  <span className="font-semibold whitespace-nowrap">{CONVENOR.email}</span>
                </a>
                <a
                  href={`tel:${CONVENOR.phoneTel}`}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] px-4 py-2.5 text-[#1C1917] hover:border-[#7B1123] hover:text-[#7B1123] transition-colors shadow-xs whitespace-nowrap"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#7B1123]" />
                  <span className="font-semibold whitespace-nowrap">{CONVENOR.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-[#E7E0D6] pb-6 w-full min-w-0">
            {/* Category Filter Pills (Touch Scroll on Mobile, Wrap on Desktop) */}
            <div className="flex items-center gap-2 overflow-x-auto md:flex-wrap md:overflow-visible pb-2 md:pb-0 scrollbar-none w-full max-w-full -mx-1 px-1">
              {FILTER_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all cursor-pointer shrink-0 whitespace-nowrap ${
                      isSelected
                        ? 'bg-[#7B1123] text-white shadow-sm'
                        : 'bg-white border border-[#E7E0D6] text-[#57534E] hover:text-[#1C1917] hover:border-[#7B1123]/40'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Keyword Search */}
            <div className="relative w-full md:w-auto md:min-w-[280px] shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#78716C]" />
              <input
                type="text"
                placeholder="Search committee member, department, or institute..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-[#E7E0D6] bg-white pl-10 pr-4 py-2 text-xs text-[#1C1917] placeholder:text-[#A8A29E] focus:border-[#7B1123] focus:outline-none focus:ring-1 focus:ring-[#7B1123]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#78716C] hover:text-[#1C1917]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between text-xs text-[#57534E]">
          <span>
            Showing <strong className="text-[#7B1123] font-mono">{filteredTeams.length}</strong> official committee members
          </span>
          <span className="font-mono text-[11px] text-[#BF982E] font-semibold">
            ETIMS 2027 &bull; 23–24 July 2027
          </span>
        </div>

        {/* Faculty In-Charge Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredTeams.map((team, index) => (
              <motion.div
                key={`${team.taskTitle}-${index}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
                className="flex flex-col justify-between rounded-3xl border border-[#E7E0D6] bg-white p-5 sm:p-6 shadow-sm hover:border-[#7B1123]/40 hover:shadow-md transition-all w-full min-w-0 overflow-hidden"
              >
                <div className="w-full min-w-0">
                  {/* Card Header: Badge & Category */}
                  <div className="flex items-center justify-between gap-2 border-b border-[#E7E0D6] pb-3 min-w-0">
                    <span className="rounded-full bg-[#7B1123]/10 border border-[#7B1123]/25 px-2.5 py-0.5 text-[10px] font-mono font-bold text-[#7B1123] shrink-0">
                      {team.badge}
                    </span>
                    <span className="text-[10px] font-mono text-[#78716C] truncate min-w-0 text-right">
                      {team.taskCategory}
                    </span>
                  </div>

                  {/* Task Title */}
                  <h3 className="font-heading text-base font-bold text-[#1C1917] mt-3 break-words">
                    {team.taskTitle}
                  </h3>

                  {/* Faculty Lead Details with Small Photo */}
                  <div className="mt-3 rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-3.5 flex items-center gap-3.5 min-w-0">
                    <div className="relative h-12 w-12 sm:h-13 sm:w-13 shrink-0 rounded-full border-2 border-[#BF982E] overflow-hidden bg-white shadow-xs">
                      {team.photo ? (
                        <img
                          src={team.photo}
                          alt={team.leadName}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/assets/nsit-seal.png';
                          }}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-[#7B1123]/10 text-[#7B1123] font-mono font-bold text-xs">
                          {team.leadName.split(' ').map((n) => n[0]).filter(Boolean).slice(0, 2).join('')}
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1 space-y-0.5">
                      <span className="text-[10px] font-mono uppercase text-[#BF982E] font-bold block">
                        Brochure Committee Member
                      </span>
                      <p className="font-heading text-sm font-bold text-[#1C1917] truncate">
                        {team.leadName}
                      </p>
                      <p className="text-xs text-[#57534E] truncate">
                        {team.leadDesignation}
                      </p>
                      <p className="text-[11px] text-[#78716C] font-mono truncate">
                        {team.leadDepartment}
                      </p>
                    </div>
                  </div>

                  {/* Responsibilities List */}
                  <div className="mt-4 space-y-2 min-w-0">
                    <span className="text-[11px] font-mono uppercase text-[#7B1123] block tracking-wider font-semibold">
                      Designated Role & Responsibilities:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#57534E]">
                      {team.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 min-w-0">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#7B1123] shrink-0 mt-0.5" />
                          <span className="leading-snug break-words">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Institution / Contacts */}
                <div className="mt-5 pt-4 border-t border-[#E7E0D6] flex items-center justify-between gap-2 text-[11px] text-[#57534E] min-w-0">
                  <span className="truncate min-w-0">{team.institution}</span>
                  {team.contactEmail && (
                    <a
                      href={`mailto:${team.contactEmail}`}
                      className="font-mono text-[#7B1123] font-semibold hover:underline shrink-0 text-right"
                    >
                      Email Desk
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 rounded-2xl border border-[#E7E0D6] bg-white p-5 flex items-start gap-3.5 text-xs text-[#57534E] shadow-sm">
          <Info className="h-5 w-5 text-[#7B1123] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#1C1917]">Brochure Official Notice & Student Volunteers:</strong>
            <p className="mt-0.5 leading-relaxed">
              As outlined in the official conference brochure, student volunteers drawn from every academic department will support registration, the help desk, hall management, guest reception, publicity, photography, and audio-visual/IT support. For official committee and conference enquiries, contact Conference Convenor Dr. Atif Hussain at <a href={`mailto:${CONVENOR.email}`} className="text-[#7B1123] underline">{CONVENOR.email}</a>.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

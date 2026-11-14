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
  'All In-Charges',
  'Leadership & Patrons',
  'Secretariat & Convenor',
  'Technical Program & Track Chairs',
  'Operational Desks & In-Charges',
];

export default function CommitteesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All In-Charges');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTeams = useMemo(() => {
    return FACULTY_TASK_TEAMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All In-Charges' || item.taskCategory === selectedCategory;

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
    <div className="relative min-h-screen bg-midnight text-light-text py-12 sm:py-16 overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-12 right-1/4 h-96 w-96 rounded-full bg-cyan/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-24 left-10 h-80 w-80 rounded-full bg-primary-teal/10 blur-[130px]" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-navy/80 px-4 py-1.5 text-xs font-mono font-semibold text-cyan mb-4 glow-cyan-sm">
            <Users2 className="h-3.5 w-3.5" />
            <span>Academic Governance & Task Organization</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-light-text">
            Organizing Committee &{' '}
            <span className="text-cyan text-glow-cyan">Faculty In-Charges</span>
          </h1>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-secondary-text leading-relaxed">
            Faculty team members, track chairs, and administrative coordinators leading specialized academic and operational tasks for ETIMS 2027 at Netaji Subhas Institute of Technology (NSIT), Bihta, Patna.
          </p>

          {/* Featured Convenor Profile Banner */}
          <div className="mt-8 rounded-3xl border border-cyan/40 bg-gradient-to-r from-navy via-midnight to-navy p-4 sm:p-7 md:p-8 shadow-2xl glow-cyan-sm w-full min-w-0">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 w-full min-w-0">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 w-full min-w-0">
                <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan/20 to-primary-teal/30 border border-cyan/40 text-cyan shadow-xl glow-cyan-sm">
                  <span className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-cyan">
                    AH
                  </span>
                  <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-midnight border border-cyan">
                    <span className="h-2 w-2 rounded-full bg-mint animate-pulse" />
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-cyan/15 border border-cyan/30 px-3 py-0.5 text-[11px] font-mono font-bold text-cyan">
                      Conference Convenor
                    </span>
                    <span className="text-[10px] font-mono text-mint uppercase">
                      Primary Liaison
                    </span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-extrabold text-light-text mt-1 truncate">
                    {CONVENOR.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary-text leading-snug">
                    Assistant Professor, Department of Electrical & Electronics Engineering
                  </p>
                  <p className="text-xs font-mono text-cyan/90 mt-0.5 break-words">
                    {CONVENOR.institution}, {CONVENOR.campus}
                  </p>
                </div>
              </div>

              {/* Direct Convenor Contacts */}
              <div className="flex flex-col sm:flex-row gap-2.5 w-full lg:w-auto text-xs font-mono min-w-0">
                <a
                  href={`mailto:${CONVENOR.email}`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-cyan/30 bg-midnight/80 px-3.5 py-2.5 text-light-text hover:border-cyan hover:text-cyan transition-colors min-w-0"
                >
                  <Mail className="h-4 w-4 text-cyan shrink-0" />
                  <span className="break-all">{CONVENOR.email}</span>
                </a>
                <a
                  href={`tel:${CONVENOR.phoneTel}`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-cyan/30 bg-midnight/80 px-3.5 py-2.5 text-light-text hover:border-cyan hover:text-cyan transition-colors shrink-0"
                >
                  <Phone className="h-4 w-4 text-cyan shrink-0" />
                  <span>{CONVENOR.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-border-dark pb-6 w-full min-w-0">
            {/* Category Filter Pills (Smooth Horizontal Touch Scroll on Mobile) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none w-full max-w-full -mx-1 px-1">
              {FILTER_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all cursor-pointer shrink-0 whitespace-nowrap ${
                      isSelected
                        ? 'bg-gradient-to-r from-cyan to-primary-teal text-midnight shadow-md glow-cyan-sm'
                        : 'bg-navy/70 border border-border-dark text-secondary-text hover:text-light-text hover:border-cyan/40'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Keyword Search */}
            <div className="relative w-full md:w-auto md:min-w-[280px] shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary-text" />
              <input
                type="text"
                placeholder="Search faculty, task, or track..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border-dark bg-navy/80 pl-10 pr-4 py-2 text-xs text-light-text placeholder:text-secondary-text/70 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-secondary-text hover:text-light-text"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between text-xs text-secondary-text">
          <span>
            Showing <strong className="text-cyan font-mono">{filteredTeams.length}</strong> task in-charge teams
          </span>
          <span className="font-mono text-[11px] text-mint">
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
                className="flex flex-col justify-between rounded-3xl border border-border-dark bg-navy/70 p-5 sm:p-6 backdrop-blur-md hover:border-cyan/40 hover:shadow-xl transition-all w-full min-w-0 overflow-hidden"
              >
                <div className="w-full min-w-0">
                  {/* Card Header: Badge & Category */}
                  <div className="flex items-center justify-between gap-2 border-b border-border-dark pb-3 min-w-0">
                    <span className="rounded-full bg-cyan/15 border border-cyan/30 px-2.5 py-0.5 text-[10px] font-mono font-bold text-cyan shrink-0">
                      {team.badge}
                    </span>
                    <span className="text-[10px] font-mono text-secondary-text truncate min-w-0 text-right">
                      {team.taskCategory}
                    </span>
                  </div>

                  {/* Task Title */}
                  <h3 className="font-heading text-base font-bold text-light-text mt-3 break-words">
                    {team.taskTitle}
                  </h3>

                  {/* Faculty Lead Details */}
                  <div className="mt-3 rounded-2xl border border-border-dark/80 bg-midnight/80 p-3.5 space-y-1 min-w-0">
                    <span className="text-[10px] font-mono uppercase text-mint block">
                      In-Charge Faculty Lead
                    </span>
                    <p className="font-heading text-sm font-bold text-light-text break-words">
                      {team.leadName}
                    </p>
                    <p className="text-xs text-secondary-text break-words">
                      {team.leadDesignation}
                    </p>
                    <p className="text-[11px] text-secondary-text font-mono truncate">
                      {team.leadDepartment}
                    </p>
                  </div>

                  {/* Responsibilities List */}
                  <div className="mt-4 space-y-2 min-w-0">
                    <span className="text-[11px] font-mono uppercase text-cyan block tracking-wider">
                      Specific Task Responsibilities:
                    </span>
                    <ul className="space-y-1.5 text-xs text-secondary-text">
                      {team.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 min-w-0">
                          <CheckCircle2 className="h-3.5 w-3.5 text-cyan shrink-0 mt-0.5" />
                          <span className="leading-snug break-words">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Institution / Contacts */}
                <div className="mt-5 pt-4 border-t border-border-dark flex items-center justify-between gap-2 text-[11px] text-secondary-text min-w-0">
                  <span className="truncate min-w-0">{team.institution}</span>
                  {team.contactEmail && (
                    <a
                      href={`mailto:${team.contactEmail}`}
                      className="font-mono text-cyan hover:underline shrink-0 text-right"
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
        <div className="mt-12 rounded-2xl border border-border-dark bg-navy/60 p-5 flex items-start gap-3.5 text-xs text-secondary-text">
          <Info className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
          <div>
            <strong className="text-light-text">Continuous Committee Updates:</strong>
            <p className="mt-0.5 leading-relaxed">
              In accordance with conference protocol, additional co-chairs, international technical reviewers, and session moderators are continuously being inducted under the convenorship of Dr. Atif Hussain. For committee participation enquiries, contact <a href={`mailto:${CONVENOR.email}`} className="text-cyan underline">{CONVENOR.email}</a>.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Building2,
  Zap,
  Bot,
  Radio,
  FlaskConical,
  Briefcase,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Search,
  Sparkles,
} from 'lucide-react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import { RESEARCH_TRACKS, type ResearchTrackItem } from '../utils/constants';

const trackIcons: Record<string, typeof Brain> = {
  'track-1': Brain,
  'track-2': Building2,
  'track-3': Zap,
  'track-4': Bot,
  'track-5': Radio,
  'track-6': FlaskConical,
  'track-7': Briefcase,
  'track-8': BookOpen,
};

// Generative thematic palettes for the 8 official tracks
const trackVisualThemes: Record<string, { bg: string; accent: string; label: string }> = {
  'track-1': {
    bg: 'from-cyan/20 via-blue-900/30 to-midnight',
    accent: 'text-cyan border-cyan/40',
    label: 'Computer Science & AI',
  },
  'track-2': {
    bg: 'from-amber-500/20 via-orange-950/30 to-midnight',
    accent: 'text-amber-400 border-amber-500/40',
    label: 'Civil & Infrastructure',
  },
  'track-3': {
    bg: 'from-emerald-500/20 via-teal-950/30 to-midnight',
    accent: 'text-emerald-400 border-emerald-500/40',
    label: 'Electrical Engineering',
  },
  'track-4': {
    bg: 'from-blue-500/20 via-indigo-950/30 to-midnight',
    accent: 'text-blue-400 border-blue-500/40',
    label: 'Mechanical & Manufacturing',
  },
  'track-5': {
    bg: 'from-mint/20 via-teal-900/30 to-midnight',
    accent: 'text-mint border-mint/40',
    label: 'Electronics & Communication',
  },
  'track-6': {
    bg: 'from-purple-500/20 via-violet-950/30 to-midnight',
    accent: 'text-purple-300 border-purple-500/40',
    label: 'Applied Science',
  },
  'track-7': {
    bg: 'from-rose-500/20 via-pink-950/30 to-midnight',
    accent: 'text-rose-400 border-rose-500/40',
    label: 'Management & Innovation',
  },
  'track-8': {
    bg: 'from-teal-500/20 via-cyan-950/30 to-midnight',
    accent: 'text-teal-300 border-teal-500/40',
    label: 'Humanities & Library Science',
  },
};

const filterTabs = [
  { id: 'all', label: 'ALL 8 TRACKS' },
  { id: 'track-1', label: 'T1: CS & AI' },
  { id: 'track-2', label: 'T2: CIVIL & INFRA' },
  { id: 'track-3', label: 'T3: ELECTRICAL' },
  { id: 'track-4', label: 'T4: MECHANICAL' },
  { id: 'track-5', label: 'T5: ECE & IOT' },
  { id: 'track-6', label: 'T6: APPLIED SCIENCE' },
  { id: 'track-7', label: 'T7: MANAGEMENT' },
  { id: 'track-8', label: 'T8: HUMANITIES & LIB' },
];

export default function TracksSection() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTrack, setExpandedTrack] = useState<string | null>(null);

  const filteredTracks = RESEARCH_TRACKS.filter((track) => {
    const matchesCategory = selectedFilter === 'all' || track.id === selectedFilter;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      query === '' ||
      track.title.toLowerCase().includes(query) ||
      track.tagline.toLowerCase().includes(query) ||
      track.code.toLowerCase().includes(query) ||
      track.illustrativeTopics.some((t) => t.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedTrack(expandedTrack === id ? null : id);
  };

  return (
    <section id="tracks" className="relative py-24 md:py-32 bg-[#07131F] border-b border-border-dark overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-1/2 -right-40 h-[36rem] w-[36rem] rounded-full bg-cyan/8 blur-[140px]" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeading
            tag="03 // Call for Papers"
            title="Eight Official Research Tracks"
            subtitle="Original, unpublished research papers across 8 tracks. Related multidisciplinary contributions are also welcome."
            align="left"
            className="mb-0 md:mb-0"
          />

          {/* Academic Scope Pill */}
          <div className="inline-flex items-center gap-2 rounded-xl bg-navy border border-cyan/30 px-4 py-2.5 text-xs text-secondary-text shrink-0 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-cyan shrink-0" />
            <span>
              <strong className="text-cyan font-semibold">Eight Tracks:</strong> Physical Mode · 200–300 Delegates
            </span>
          </div>
        </div>

        {/* Search Bar & Category Filter Bar */}
        <div className="mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-border-dark pb-6">
          {/* Search Input */}
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-cyan/70" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search research topics, AI, civil, VLSI, smart grid, management..."
              className="w-full rounded-xl border border-border-dark bg-navy/90 pl-10 pr-16 py-2.5 text-xs text-light-text placeholder:text-secondary-text/50 focus:border-cyan focus:outline-none transition-colors font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-cyan hover:underline cursor-pointer"
              >
                CLEAR
              </button>
            )}
          </div>

          {/* Quick Domain Status Count */}
          <div className="text-left md:text-right font-mono text-xs text-secondary-text shrink-0">
            SHOWING: <span className="text-cyan font-bold">{filteredTracks.length}</span> OF{' '}
            <span className="text-light-text font-bold">{RESEARCH_TRACKS.length}</span> TRACKS
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mb-10 flex flex-wrap items-center gap-2">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`rounded-lg px-3.5 py-1.5 font-mono text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-cyan text-midnight font-bold shadow-sm glow-cyan-sm'
                    : 'bg-navy/70 border border-border-dark text-secondary-text hover:text-light-text hover:border-cyan/40'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Distinctive Editorial Research Track Matrix */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredTracks.map((track: ResearchTrackItem, index: number) => {
            const IconComponent = trackIcons[track.id] || Brain;
            const theme = trackVisualThemes[track.id] || trackVisualThemes['track-1'];
            const isExpanded = expandedTrack === track.id;

            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-3xl border border-border-dark bg-navy/60 hover:bg-navy/90 hover:border-cyan/40 transition-all p-6 sm:p-7 flex flex-col justify-between backdrop-blur-md relative overflow-hidden group"
              >
                {/* Subtle thematic top highlight */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${theme.bg} opacity-80 group-hover:opacity-100 transition-opacity`}
                />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-midnight border border-border-dark text-cyan shadow-sm group-hover:scale-105 transition-transform">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-bold text-cyan tracking-wider block">
                          {track.code} // {track.number}
                        </span>
                        <span className="text-[11px] font-mono text-secondary-text">
                          {theme.label}
                        </span>
                      </div>
                    </div>

                    <span className="rounded-full bg-cyan/10 border border-cyan/30 px-2.5 py-0.5 text-[10px] font-mono font-bold text-cyan">
                      Official Track
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-light-text leading-snug">
                    {track.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-secondary-text leading-relaxed">
                    {track.tagline}
                  </p>

                  {/* Subtopics Checklist */}
                  <div className="mt-5 space-y-2">
                    <span className="text-[11px] font-mono text-cyan uppercase tracking-wider block">
                      Scope Topics:
                    </span>
                    <ul className="space-y-1.5">
                      {(isExpanded ? track.illustrativeTopics : track.illustrativeTopics.slice(0, 3)).map(
                        (topic, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-secondary-text leading-relaxed"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-mint shrink-0 mt-0.5" />
                            <span className="text-light-text/90">{topic}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="mt-6 pt-4 border-t border-border-dark flex items-center justify-between">
                  {track.illustrativeTopics.length > 3 && (
                    <button
                      type="button"
                      onClick={() => toggleExpand(track.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan hover:underline cursor-pointer"
                    >
                      <span>
                        {isExpanded
                          ? 'Show fewer topics'
                          : `+${track.illustrativeTopics.length - 3} more topics`}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="h-3.5 w-3.5" />
                      ) : (
                        <ChevronDown className="h-3.5 w-3.5" />
                      )}
                    </button>
                  )}

                  <a
                    href="/submission"
                    className="inline-flex items-center gap-1 text-xs font-bold text-light-text hover:text-cyan ml-auto transition-colors"
                  >
                    <span>Submit to {track.code}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Cpu,
  Layers,
  Leaf,
  Bot,
  Info,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Search,
  Sparkles,
} from 'lucide-react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import { PROVISIONAL_TRACKS, type ResearchTrackItem } from '../utils/constants';

const trackIcons: Record<string, typeof Brain> = {
  'track-1': Brain,
  'track-2': Cpu,
  'track-3': Leaf,
  'track-4': Bot,
  'track-5': Layers,
};

// Generative thematic palettes for track domains
const trackVisualThemes: Record<string, { bg: string; accent: string; label: string }> = {
  'track-1': {
    bg: 'from-cyan/20 via-blue-900/30 to-midnight',
    accent: 'text-cyan border-cyan/40',
    label: 'Artificial Intelligence & Computing',
  },
  'track-2': {
    bg: 'from-mint/20 via-teal-900/30 to-midnight',
    accent: 'text-mint border-mint/40',
    label: 'Circuits, VLSI & Communications',
  },
  'track-3': {
    bg: 'from-emerald-500/20 via-teal-950/30 to-midnight',
    accent: 'text-emerald-400 border-emerald-500/40',
    label: 'Clean Energy & Power Systems',
  },
  'track-4': {
    bg: 'from-cyan/25 via-indigo-950/30 to-midnight',
    accent: 'text-cyan border-cyan/40',
    label: 'Robotics & Cyber-Physical Systems',
  },
  'track-5': {
    bg: 'from-purple-500/20 via-blue-950/30 to-midnight',
    accent: 'text-purple-300 border-purple-500/40',
    label: 'Applied Sciences & Functional Materials',
  },
};

const filterTabs = [
  { id: 'all', label: 'ALL DOMAINS' },
  { id: 'track-1', label: 'AI & COGNITIVE' },
  { id: 'track-2', label: 'CIRCUITS & VLSI' },
  { id: 'track-3', label: 'SUSTAINABLE TECH' },
  { id: 'track-4', label: 'ROBOTICS & IOT' },
  { id: 'track-5', label: 'APPLIED SCIENCES' },
];

export default function TracksSection() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTrack, setExpandedTrack] = useState<string | null>(null);

  const filteredTracks = PROVISIONAL_TRACKS.filter((track) => {
    const matchesCategory = selectedFilter === 'all' || track.id === selectedFilter;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      query === '' ||
      track.title.toLowerCase().includes(query) ||
      track.tagline.toLowerCase().includes(query) ||
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
            tag="03 // Thematic Tracks"
            title="Provisional Research Domains"
            subtitle="Illustrative multidisciplinary engineering domains under academic consideration"
            align="left"
            className="mb-0 md:mb-0"
          />

          {/* Academic Advisory Pill */}
          <div className="inline-flex items-center gap-2 rounded-xl bg-navy border border-cyan/30 px-4 py-2.5 text-xs text-secondary-text shrink-0 backdrop-blur-md">
            <Info className="h-4 w-4 text-cyan shrink-0" />
            <span>
              <strong className="text-cyan font-semibold">Provisional:</strong> Official CFP domains confirmed by TPC.
            </span>
          </div>
        </div>

        {/* Search Bar & Category Filter Bar (Directly inspired by Reference Image 4) */}
        <div className="mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-border-dark pb-6">
          {/* Search Input */}
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-cyan/70" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search research topics, keywords, AI, VLSI, smart grid..."
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
            <span className="text-light-text font-bold">{PROVISIONAL_TRACKS.length}</span> DOMAINS
          </div>
        </div>

        {/* Category Filter Pills (Inspired by Reference Image 4) */}
        <div className="mb-10 flex flex-wrap items-center gap-2">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`rounded-lg px-4 py-2 font-mono text-xs font-semibold transition-all cursor-pointer ${
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
          <AnimatePresence mode="popLayout">
            {filteredTracks.map((track: ResearchTrackItem, index: number) => {
              const Icon = trackIcons[track.id] || Layers;
              const theme = trackVisualThemes[track.id] || {
                bg: 'from-cyan/20 to-midnight',
                accent: 'text-cyan border-cyan/40',
                label: 'MULTIDISCIPLINARY',
              };
              const isExpanded = expandedTrack === track.id;

              return (
                <motion.div
                  key={track.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative flex flex-col justify-between rounded-3xl border border-border-dark bg-navy/80 p-6 sm:p-8 backdrop-blur-md hover:border-cyan/50 hover:bg-navy transition-all duration-300"
                >
                  <div>
                    {/* Track Header */}
                    <div className="flex items-center justify-between border-b border-border-dark/80 pb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-bold text-cyan">
                          {track.number}
                        </span>
                        <span className="text-border-dark">•</span>
                        <span className="text-xs font-mono text-secondary-text">
                          {theme.label}
                        </span>
                      </div>
                      <span className="rounded-full bg-cyan/10 border border-cyan/30 px-3 py-1 text-xs font-mono text-cyan uppercase font-semibold">
                        Provisional
                      </span>
                    </div>

                    {/* Left Thumbnail + Right Title Layout */}
                    <div className="mt-6 flex flex-col sm:flex-row items-start gap-5">
                      {/* Generative Visual Art Thumbnail */}
                      <div className={`relative flex h-20 w-20 sm:h-24 sm:w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${theme.bg} border ${theme.accent} shadow-inner overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                        <div className="absolute inset-0 bg-radial from-cyan/10 to-transparent pointer-events-none" />
                        <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-cyan drop-shadow-[0_0_12px_rgba(53,217,232,0.6)]" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-heading text-xl sm:text-2xl font-bold text-light-text group-hover:text-cyan transition-colors leading-snug">
                            {track.title}
                          </h3>
                          <ArrowRight className="h-4 w-4 text-secondary-text group-hover:text-cyan group-hover:translate-x-1 transition-all shrink-0 hidden sm:block" />
                        </div>
                        <p className="mt-2.5 text-sm sm:text-base text-secondary-text leading-relaxed">
                          {track.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Indicative Topics */}
                    <div className="mt-6 pt-5 border-t border-border-dark/80">
                      <button
                        type="button"
                        onClick={() => toggleExpand(track.id)}
                        className="flex w-full items-center justify-between text-xs sm:text-sm font-mono font-semibold text-cyan hover:text-mint transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="h-3.5 w-3.5" />
                          <span>Indicative Topics ({track.illustrativeTopics.length})</span>
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>

                      <div className={`mt-4 space-y-2.5 text-sm text-secondary-text ${isExpanded ? 'block' : 'hidden sm:block'}`}>
                        {track.illustrativeTopics.slice(0, isExpanded ? undefined : 3).map((topic, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <span className="text-cyan font-bold mt-0.5 text-xs">▹</span>
                            <span className="leading-relaxed">{topic}</span>
                          </div>
                        ))}
                        {!isExpanded && track.illustrativeTopics.length > 3 && (
                          <button
                            onClick={() => toggleExpand(track.id)}
                            className="text-xs sm:text-sm text-cyan hover:underline mt-2 inline-flex items-center gap-1 font-mono cursor-pointer"
                          >
                            <span>+ {track.illustrativeTopics.length - 3} more topics</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}

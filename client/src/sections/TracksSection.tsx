import { useState } from 'react';
import { motion } from 'framer-motion';
import {
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
    <section id="tracks" className="relative py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E7E0D6] overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-1/2 -right-40 h-[36rem] w-[36rem] rounded-full bg-[#BF982E]/10 blur-[140px]" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeading
            tag="03 // Call for Papers"
            title="Eight Official Research Tracks"
            subtitle="Original, unpublished research papers across 8 multidisciplinary tracks. Related multidisciplinary contributions are also welcome."
            align="left"
            className="mb-0 md:mb-0"
          />

          {/* Academic Scope Pill */}
          <div className="inline-flex items-center gap-2 rounded-xl bg-white border border-[#BF982E]/40 px-4 py-2.5 text-xs text-[#57534E] shrink-0 shadow-xs">
            <Sparkles className="h-4 w-4 text-[#BF982E] shrink-0" />
            <span>
              <strong className="text-[#7B1123] font-bold">Eight Tracks:</strong> Physical Mode &bull; 200–300 Delegates
            </span>
          </div>
        </div>

        {/* Search Bar & Category Filter Bar */}
        <div className="mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-[#E7E0D6] pb-6">
          {/* Search Input */}
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7B1123]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search research topics, AI, civil, VLSI, smart grid, management..."
              className="w-full rounded-xl border border-[#E7E0D6] bg-white pl-10 pr-16 py-2.5 text-xs text-[#1C1917] placeholder:text-[#57534E]/60 focus:border-[#7B1123] focus:outline-none transition-colors font-mono shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-[#7B1123] hover:underline cursor-pointer font-bold"
              >
                CLEAR
              </button>
            )}
          </div>

          {/* Quick Domain Status Count */}
          <div className="text-left md:text-right font-mono text-xs text-[#57534E] shrink-0">
            SHOWING: <span className="text-[#7B1123] font-bold">{filteredTracks.length}</span> OF{' '}
            <span className="text-[#1C1917] font-bold">{RESEARCH_TRACKS.length}</span> TRACKS
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
                    ? 'bg-[#7B1123] text-white font-bold shadow-xs'
                    : 'bg-white border border-[#E7E0D6] text-[#57534E] hover:text-[#7B1123] hover:border-[#7B1123]/40'
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
            const isExpanded = expandedTrack === track.id;
            const trackNum = parseInt(track.id.replace('track-', ''), 10) || (index + 1);
            const trackImg = `/assets/tracks/track_${trackNum}.png`;

            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-3xl border border-[#E7E0D6] bg-white hover:border-[#7B1123]/40 transition-all p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md relative overflow-hidden group"
              >
                {/* Subtle top gold accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7B1123] via-[#BF982E] to-[#7B1123]" />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      {/* Deep Maroon Circle Badge T1..T8 matching brochure */}
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#7B1123] text-white font-mono font-bold text-sm shadow-xs group-hover:scale-105 transition-transform">
                        {track.code}
                      </div>
                      <div>
                        <span className="font-mono text-xs font-bold text-[#7B1123] tracking-wider block">
                          TRACK 0{trackNum}
                        </span>
                        <span className="text-[11px] font-subheading text-[#57534E] font-medium">
                          Official Scope
                        </span>
                      </div>
                    </div>

                    <div className="h-10 w-16 rounded-lg overflow-hidden border border-[#E7E0D6] shrink-0">
                      <img
                        src={trackImg}
                        alt={track.title}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          // fallback to icon if image fails
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1C1917] leading-snug">
                    {track.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#57534E] leading-relaxed font-subheading">
                    {track.tagline}
                  </p>

                  {/* Subtopics Checklist */}
                  <div className="mt-5 space-y-2">
                    <span className="text-[11px] font-mono text-[#7B1123] uppercase tracking-wider font-bold block">
                      Scope Topics:
                    </span>
                    <ul className="space-y-1.5">
                      {(isExpanded ? track.illustrativeTopics : track.illustrativeTopics.slice(0, 3)).map(
                        (topic, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-[#57534E] leading-relaxed"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#BF982E] shrink-0 mt-0.5" />
                            <span className="text-[#1C1917] font-medium">{topic}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="mt-6 pt-4 border-t border-[#E7E0D6] flex items-center justify-between">
                  {track.illustrativeTopics.length > 3 && (
                    <button
                      type="button"
                      onClick={() => toggleExpand(track.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#7B1123] hover:underline cursor-pointer font-bold"
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
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#7B1123] hover:text-[#5C1324] ml-auto transition-colors"
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

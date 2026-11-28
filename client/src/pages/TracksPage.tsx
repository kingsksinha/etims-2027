import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Layers,
  Sparkles,
  Brain,
  Building2,
  Zap,
  Bot,
  Radio,
  FlaskConical,
  Briefcase,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  FileText,
  Info,
  ChevronDown,
} from 'lucide-react';
import Container from '../components/common/Container';
import { RESEARCH_TRACKS } from '../utils/constants';

const TRACK_ICON_ITEMS = [
  { Icon: Brain, colorClass: 'text-[#7B1123]' },
  { Icon: Building2, colorClass: 'text-[#BF982E]' },
  { Icon: Zap, colorClass: 'text-[#7B1123]' },
  { Icon: Bot, colorClass: 'text-[#BF982E]' },
  { Icon: Radio, colorClass: 'text-[#7B1123]' },
  { Icon: FlaskConical, colorClass: 'text-[#BF982E]' },
  { Icon: Briefcase, colorClass: 'text-[#7B1123]' },
  { Icon: BookOpen, colorClass: 'text-[#BF982E]' },
];

export default function TracksPage() {
  const [selectedTrackIdx, setSelectedTrackIdx] = useState(0);

  const activeTrack = RESEARCH_TRACKS[selectedTrackIdx] || RESEARCH_TRACKS[0];
  const activeIconMeta = TRACK_ICON_ITEMS[selectedTrackIdx] || {
    Icon: Sparkles,
    colorClass: 'text-[#7B1123]',
  };
  const ActiveTrackIcon = activeIconMeta.Icon;

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#1C1917] py-8 sm:py-12 md:py-16 overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-10 left-1/4 h-96 w-96 rounded-full bg-[#BF982E]/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-20 right-10 h-96 w-96 rounded-full bg-[#7B1123]/10 blur-[150px]" />

      <Container className="relative z-10">
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7B1123]/30 bg-[#7B1123]/10 px-3.5 py-1 text-xs font-mono font-semibold text-[#7B1123] mb-3">
            <Layers className="h-3.5 w-3.5" />
            <span>Official Brochure Technical Tracks</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1C1917]">
            Eight Official Tracks & <span className="text-[#7B1123]">Thematic Scope</span>
          </h1>
          <p className="mt-2 sm:mt-3 max-w-3xl text-xs sm:text-base text-[#57534E] leading-relaxed">
            ETIMS 2027 invites original, unpublished research papers across eight tracks. Related multidisciplinary contributions are also welcome.
          </p>
        </div>

        {/* Official Scope Banner */}
        <div className="mb-6 sm:mb-8 rounded-2xl border border-[#E7E0D6] bg-white p-4 flex items-center justify-between gap-4 flex-wrap shadow-xs">
          <div className="flex items-center gap-2.5 text-xs text-[#57534E]">
            <Info className="h-4 w-4 text-[#7B1123] shrink-0" />
            <span>
              All submissions undergo preliminary screening followed by independent peer review. Physical mode · 200–300 Delegates.
            </span>
          </div>
          <Link
            to="/submission"
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#7B1123] hover:bg-[#5C1324] px-4 py-2 text-xs font-bold text-white shadow-xs transition-all shrink-0"
          >
            <span>Submission Guidelines</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Two-Column on Desktop; Interactive Accordion Dropdown on Mobile */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-12 lg:items-start">
          {/* Track Selection List (5 cols on Desktop; Full Accordion on Mobile) */}
          <div className="lg:col-span-5 space-y-2.5">
            {RESEARCH_TRACKS.map((track, idx) => {
              const isSelected = idx === selectedTrackIdx;
              return (
                <div
                  key={track.id}
                  className={`rounded-2xl border transition-all overflow-hidden bg-white ${
                    isSelected
                      ? 'border-[#7B1123] shadow-md ring-1 ring-[#7B1123]/25'
                      : 'border-[#E7E0D6] hover:border-[#7B1123]/40'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedTrackIdx(idx)}
                    className={`w-full text-left p-3.5 sm:p-4 transition-all cursor-pointer flex items-start justify-between gap-3 ${
                      isSelected ? 'bg-[#7B1123]/5' : 'hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-[#7B1123] uppercase font-bold tracking-wider">
                          {track.code} // {track.number}
                        </span>
                        <span className={`h-1.5 w-1.5 rounded-full ${isSelected ? 'bg-[#7B1123]' : 'bg-[#E7E0D6]'}`} />
                      </div>
                      <h3 className="font-heading text-sm sm:text-base font-bold text-[#1C1917] mt-1">
                        {track.title}
                      </h3>
                      <p className="text-xs text-[#57534E] mt-0.5 line-clamp-1">
                        {track.tagline}
                      </p>
                    </div>

                    {/* Mobile indicator icon showing dropdown behavior */}
                    <div className="lg:hidden shrink-0 pt-1 text-[#7B1123]">
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isSelected ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {/* MOBILE INLINE DROP-DOWN EXPANSION:
                      When clicked on phone, displays the image, details, and topics RIGHT BELOW this track! */}
                  {isSelected && (
                    <div className="lg:hidden p-4 bg-[#FAF8F5] border-t border-[#E7E0D6] space-y-3.5">
                      {/* Respective Track Photo */}
                      <div className="relative w-full h-44 sm:h-52 rounded-xl overflow-hidden border border-[#E7E0D6] bg-zinc-950 shadow-xs">
                        <img
                          src={`/assets/tracks/track_${idx + 1}.jpg`}
                          alt={track.title}
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

                        {/* Top Badges */}
                        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#7B1123]/95 text-white text-[10px] font-mono font-bold">
                          <span className="text-[#F3D993]">{track.code}</span>
                          <span className="text-white/60">·</span>
                          <span>{track.number}</span>
                        </div>

                        {/* Bottom Tagline */}
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono text-zinc-200">
                          <span className="text-[#F3D993] font-bold uppercase truncate pr-2">
                            Thematic Scope
                          </span>
                          <span className="bg-black/60 px-2 py-0.5 rounded text-white/90 shrink-0">
                            Peer-Reviewed
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-[#57534E] leading-relaxed">
                        {track.tagline}. Submissions must report original research, novel methodologies, or applied multidisciplinary contributions.
                      </p>

                      {/* Sub-Topics List */}
                      <div className="rounded-xl border border-[#E7E0D6] bg-white p-3.5 space-y-2">
                        <span className="text-[10px] font-mono uppercase text-[#7B1123] font-bold block tracking-wider">
                          Official Research Topics ({track.code}):
                        </span>
                        <ul className="space-y-1.5 text-xs text-[#57534E]">
                          {track.illustrativeTopics.map((topic, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#BF982E] shrink-0 mt-0.5" />
                              <span className="text-[#1C1917] font-medium leading-tight">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Direct Submission CTA for Mobile */}
                      <Link
                        to="/submission"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#7B1123] hover:bg-[#5C1324] py-2.5 text-xs font-bold text-white shadow-xs transition-all"
                      >
                        <FileText className="h-3.5 w-3.5" />
                        <span>Submit Manuscript to {track.code} &rarr;</span>
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Track Detailed View (Desktop Only: hidden on mobile so nothing is pushed to extreme bottom!) */}
          <div className="hidden lg:block lg:col-span-7">
            <motion.div
              key={activeTrack.id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-[#E7E0D6] bg-white p-7 sm:p-9 shadow-lg space-y-6"
            >
              {/* High-Resolution Thematic Track Visual Header */}
              <div className="relative w-full h-52 sm:h-64 md:h-72 rounded-2xl overflow-hidden border border-[#E7E0D6] bg-zinc-950 shadow-md">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeTrack.id}
                    src={`/assets/tracks/track_${selectedTrackIdx + 1}.jpg`}
                    alt={activeTrack.title}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-full object-cover object-center"
                  />
                </AnimatePresence>

                {/* Subtle vignette gradient for crisp badge contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B1123]/95 backdrop-blur-md text-white text-xs font-mono font-bold shadow-md border border-[#BF982E]/40">
                  <span className="text-[#F3D993]">{activeTrack.code}</span>
                  <span className="text-white/60">·</span>
                  <span>{activeTrack.number}</span>
                </div>

                {/* Bottom Tagline on Image */}
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs font-mono text-zinc-200">
                  <span className="text-[11px] text-[#F3D993] font-bold uppercase tracking-wider drop-shadow-sm truncate pr-2">
                    ETIMS 2027 OFFICIAL THEMATIC SCOPE
                  </span>
                  <span className="rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] text-white/90 border border-white/20 shrink-0">
                    Peer-Reviewed Track
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-[#E7E0D6] pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7B1123]/10 border border-[#7B1123]/25">
                    <ActiveTrackIcon className={`h-5 w-5 ${activeIconMeta.colorClass}`} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#7B1123] uppercase tracking-wider block">
                      {activeTrack.code} // {activeTrack.number}
                    </span>
                    <h2 className="font-heading text-xl sm:text-2xl font-black text-[#1C1917]">
                      {activeTrack.title}
                    </h2>
                  </div>
                </div>
                <span className="rounded-full bg-[#BF982E]/15 border border-[#BF982E]/30 px-3 py-1 text-xs font-mono font-bold text-[#8C6D1F] shrink-0">
                  Open for Papers
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                {activeTrack.tagline}. Submissions must report original research, novel methodologies, or applied multidisciplinary contributions.
              </p>

              {/* Sub-Topics List */}
              <div className="rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-5 space-y-3">
                <span className="text-xs font-mono uppercase text-[#7B1123] font-semibold block tracking-wider">
                  Official Research Topics ({activeTrack.code}):
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#57534E]">
                  {activeTrack.illustrativeTopics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#BF982E] shrink-0 mt-0.5" />
                      <span className="text-[#1C1917] font-medium leading-snug">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Track Submission CTA */}
              <div className="pt-4 border-t border-[#E7E0D6] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#57534E]">
                  <span>Oral & Poster Presentations &bull; 23–24 July 2027</span>
                </div>
                <Link
                  to="/submission"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#7B1123] hover:bg-[#5C1324] px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all active:scale-95"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>Submit to {activeTrack.code}</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}

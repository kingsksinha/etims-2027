import { useState } from 'react';
import { motion } from 'framer-motion';
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
} from 'lucide-react';
import Container from '../components/common/Container';
import { RESEARCH_TRACKS } from '../utils/constants';

const TRACK_ICONS = [
  <Brain className="h-5 w-5 text-cyan" />,
  <Building2 className="h-5 w-5 text-amber-400" />,
  <Zap className="h-5 w-5 text-emerald-400" />,
  <Bot className="h-5 w-5 text-blue-400" />,
  <Radio className="h-5 w-5 text-mint" />,
  <FlaskConical className="h-5 w-5 text-purple-300" />,
  <Briefcase className="h-5 w-5 text-rose-400" />,
  <BookOpen className="h-5 w-5 text-teal-300" />,
];

export default function TracksPage() {
  const [selectedTrackIdx, setSelectedTrackIdx] = useState<number>(0);
  const activeTrack = RESEARCH_TRACKS[selectedTrackIdx] || RESEARCH_TRACKS[0];

  return (
    <div className="relative min-h-screen bg-midnight text-light-text py-12 sm:py-16 overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-10 left-1/3 h-96 w-96 rounded-full bg-cyan/10 blur-[140px]" />

      <Container className="relative z-10">
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-navy/80 px-4 py-1.5 text-xs font-mono font-semibold text-cyan mb-4 glow-cyan-sm">
            <Layers className="h-3.5 w-3.5" />
            <span>Call for Papers & Eight Technical Tracks</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-light-text">
            Eight Official Tracks & <span className="text-cyan text-glow-cyan">Thematic Scope</span>
          </h1>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-secondary-text leading-relaxed">
            ETIMS 2027 invites original, unpublished research papers across eight tracks. Related multidisciplinary contributions are also welcome.
          </p>
        </div>

        {/* Official Scope Banner */}
        <div className="mb-8 rounded-2xl border border-cyan/30 bg-navy/60 p-4 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2.5 text-xs text-secondary-text">
            <Info className="h-4 w-4 text-cyan shrink-0" />
            <span>
              All submissions undergo preliminary screening followed by independent peer review. Physical mode · 200–300 Delegates.
            </span>
          </div>
          <Link
            to="/submission"
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary-teal to-cyan px-4 py-2 text-xs font-bold text-midnight shadow-md hover:shadow-cyan/30 transition-all glow-cyan-sm shrink-0"
          >
            <span>Submission Guidelines</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Two-Column Interactive Track Explorer */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Track Selection List (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {RESEARCH_TRACKS.map((track, idx) => {
              const isSelected = idx === selectedTrackIdx;
              return (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => setSelectedTrackIdx(idx)}
                  className={`w-full text-left rounded-2xl p-4 transition-all cursor-pointer border ${
                    isSelected
                      ? 'border-cyan bg-gradient-to-r from-navy via-navy to-midnight shadow-lg glow-cyan-sm'
                      : 'border-border-dark bg-navy/60 hover:bg-navy hover:border-cyan/40 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-cyan uppercase font-bold tracking-wider">
                      {track.code} // {track.number}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-cyan" />
                  </div>
                  <h3 className="font-heading text-sm sm:text-base font-bold text-light-text mt-1">
                    {track.title}
                  </h3>
                  <p className="text-xs text-secondary-text mt-1 line-clamp-1">
                    {track.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Track Detailed View (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeTrack.id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-cyan/40 bg-navy/80 p-7 sm:p-9 shadow-2xl glow-cyan-sm space-y-6"
            >
              <div className="flex items-center justify-between border-b border-border-dark pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/15 border border-cyan/30">
                    {TRACK_ICONS[selectedTrackIdx] || <Sparkles className="h-5 w-5 text-cyan" />}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan uppercase tracking-wider block">
                      {activeTrack.code} // {activeTrack.number}
                    </span>
                    <h2 className="font-heading text-xl sm:text-2xl font-black text-light-text">
                      {activeTrack.title}
                    </h2>
                  </div>
                </div>
                <span className="rounded-full bg-mint/15 border border-mint/30 px-3 py-1 text-xs font-mono font-bold text-mint shrink-0">
                  Open for Papers
                </span>
              </div>

              <p className="text-sm sm:text-base text-secondary-text leading-relaxed">
                {activeTrack.tagline}. Submissions must report original research, novel methodologies, or applied multidisciplinary contributions.
              </p>

              {/* Sub-Topics List */}
              <div className="rounded-2xl border border-border-dark bg-midnight/80 p-5 space-y-3">
                <span className="text-xs font-mono uppercase text-cyan block tracking-wider">
                  Official Research Topics ({activeTrack.code}):
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-secondary-text">
                  {activeTrack.illustrativeTopics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-mint shrink-0 mt-0.5" />
                      <span className="text-light-text font-medium leading-snug">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Track Submission CTA */}
              <div className="pt-4 border-t border-border-dark flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-secondary-text">
                  <span>Oral & Poster Presentations &bull; 23–24 July 2027 (dates tentative)</span>
                </div>
                <Link
                  to="/submission"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-teal to-cyan px-5 py-2.5 text-xs font-bold text-midnight shadow-md transition-all active:scale-95 glow-cyan-sm"
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

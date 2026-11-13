import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  Compass,
  MapPin,
  FileText,
  ShieldCheck,
} from 'lucide-react';
import Container from '../components/common/Container';
import CountdownTimer from '../components/ui/CountdownTimer';
import ScientificNetworkVisual from '../components/ui/ScientificNetworkVisual';
import { CONFERENCE, HOST_INSTITUTION } from '../utils/constants';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-black pt-8 pb-18 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28 border-b border-white/10">
      {/* Deep Space Background Atmosphere with Subtle Radial Accents */}
      <div
        className="pointer-events-none absolute -top-48 right-0 h-[52rem] w-[52rem] rounded-full bg-cyan/10 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -left-48 h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-[150px]"
        aria-hidden="true"
      />

      {/* Architectural Subtle Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

      <Container className="relative z-10 w-full min-w-0">
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-12 lg:items-center w-full min-w-0">
          {/* Left Column: Monumental Headline & Summit Coordinates (7 cols) */}
          <div className="flex w-full min-w-0 flex-col items-start lg:col-span-7">
            {/* Summit Overline Pill */}
            <div className="mb-4 sm:mb-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-zinc-900/90 px-4 py-1.5 shadow-sm backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-cyan animate-pulse shrink-0" />
                <span className="font-mono text-xs font-bold tracking-wider text-cyan uppercase">
                  ETIMS 2027 // NATIONAL RESEARCH SUMMIT
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>NSIT Bihta, Patna</span>
              </span>
            </div>

            {/* Monumental ETIMS 2027 Identity & Title */}
            <div className="w-full min-w-0">
              <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-black leading-[1.08] tracking-tight text-white break-words w-full">
                The Future of{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan via-white to-sky-300 mt-1 break-words">
                  Emerging Technologies
                </span>
                <span className="block text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-300 mt-2 sm:mt-3 tracking-normal break-words">
                  Innovation & Multidisciplinary Studies
                </span>
              </h1>
            </div>

            {/* Editorial Lead Paragraph */}
            <p className="mt-5 sm:mt-6 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-zinc-300 break-words w-full">
              An authoritative scientific convention bringing together leading faculty researchers, scholars, and innovators at{' '}
              <strong className="text-white font-semibold">{HOST_INSTITUTION.name}</strong>, Bihta, Patna to examine computational intelligence, green energy systems, advanced robotics, and applied science frontiers.
            </p>

            {/* Prominent High-Contrast Date & Venue Banner */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-2xl min-w-0">
              {/* Confirmed Dates Block */}
              <div className="flex-1 w-full min-w-0 rounded-2xl border border-cyan/40 bg-zinc-950/90 p-4 sm:p-5 backdrop-blur-md shadow-lg shadow-cyan-950/20">
                <div className="flex items-center gap-2 mb-1.5">
                  <Calendar className="h-4 w-4 text-cyan shrink-0" />
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-cyan">
                    Confirmed Summit Dates
                  </span>
                </div>
                <div className="font-heading text-xl sm:text-2xl font-black text-white">
                  {CONFERENCE.dateDisplay}
                </div>
                <span className="text-xs font-mono text-zinc-400 mt-0.5 block">
                  In-Person Technical Sessions
                </span>
              </div>

              {/* Verified Venue Block */}
              <div className="flex-1 w-full min-w-0 rounded-2xl border border-white/10 bg-zinc-950/80 p-4 sm:p-5 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-1.5">
                  <MapPin className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    Host Institution
                  </span>
                </div>
                <div className="font-heading text-base sm:text-lg font-bold text-white truncate">
                  {HOST_INSTITUTION.name}
                </div>
                <span className="text-xs font-mono text-zinc-400 truncate block mt-0.5">
                  Bihta, Patna, Bihar, India
                </span>
              </div>
            </div>

            {/* Prominent Action CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/submission');
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-blue-500 px-6 py-3.5 text-sm font-bold text-black shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                <FileText className="h-4.5 w-4.5 text-black" />
                <span>Submit Your Paper</span>
                <ArrowRight className="h-4 w-4 text-black" />
              </button>

              <button
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/venue');
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-mono font-semibold text-white hover:border-cyan hover:bg-white/10 transition-all cursor-pointer"
              >
                <Compass className="h-4.5 w-4.5 text-cyan" />
                <span>Explore Campus Radar</span>
              </button>
            </div>
          </div>

          {/* Right Column: Scientific Data Network Topology Visual & Countdown (5 cols) */}
          <div className="flex w-full min-w-0 flex-col items-center justify-center lg:col-span-5 relative mt-6 lg:mt-0 gap-5">
            {/* Scientific Data Network Canvas Frame */}
            <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/90 p-4 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-2 px-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-cyan">
                  MULTIDISCIPLINARY RESEARCH TOPOLOGY
                </span>
                <span className="flex items-center gap-1 font-mono text-[10px] text-zinc-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-ping" />
                  5 CORE TRACKS
                </span>
              </div>

              <ScientificNetworkVisual className="w-full h-auto" />
            </div>

            {/* Countdown Box */}
            <div className="w-full rounded-2xl border border-white/10 bg-zinc-950/80 p-4 text-center backdrop-blur-md">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block mb-2">
                TIME REMAINING UNTIL SUMMIT INAUGURAL
              </span>
              <CountdownTimer />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

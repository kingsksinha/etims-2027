import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  Compass,
  MapPin,
  Clock,
  FileText,
} from 'lucide-react';
import Button from '../components/common/Button';
import Container from '../components/common/Container';
import CountdownTimer from '../components/ui/CountdownTimer';
import ScientificNetworkVisual from '../components/ui/ScientificNetworkVisual';
import { CONFERENCE, HOST_INSTITUTION } from '../utils/constants';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[94vh] flex items-center overflow-hidden bg-midnight pt-8 pb-20 sm:pt-14 sm:pb-28 lg:pt-16 lg:pb-32 border-b border-border-dark">
      {/* Layered Volumetric Lighting & Atmospheric Glow */}
      <div
        className="pointer-events-none absolute -top-48 right-0 h-[56rem] w-[56rem] rounded-full bg-cyan/12 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -left-48 h-[44rem] w-[44rem] rounded-full bg-primary-teal/18 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 right-1/3 h-96 w-96 rounded-full bg-mint/10 blur-[120px]"
        aria-hidden="true"
      />

      {/* Signature Atmospheric Background Grid (Used deliberately on Hero only) */}
      <div className="absolute inset-0 bg-tech-grid opacity-75 pointer-events-none" />

      <Container className="relative z-10 w-full min-w-0">
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-12 lg:items-center w-full min-w-0">
          {/* Left Column: Monumental Headline & Summit Coordinates (7 cols) */}
          <div className="flex w-full min-w-0 flex-col items-start lg:col-span-7">
            {/* Summit Overline */}
            <div className="mb-4 sm:mb-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-navy/90 px-4 py-1.5 shadow-sm backdrop-blur-md glow-cyan-sm">
                <span className="flex h-2 w-2 rounded-full bg-cyan animate-pulse shrink-0" />
                <span className="font-heading text-xs font-bold tracking-wider text-cyan">
                  ETIMS 2027 • National Summit
                </span>
              </div>
              <span className="text-xs font-semibold text-secondary-text hidden sm:inline">
                {HOST_INSTITUTION.name}
              </span>
            </div>

            {/* Monumental ETIMS 2027 Identity & Title */}
            <div className="w-full min-w-0">
              <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.85rem] font-black leading-[1.1] tracking-tight text-light-text break-words w-full">
                The Future of{' '}
                <span className="block bg-gradient-to-r from-cyan via-mint to-light-text bg-clip-text text-transparent text-glow-cyan mt-1 break-words">
                  Emerging Technologies
                </span>
                <span className="block text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-light-text/90 mt-2 sm:mt-3 tracking-normal break-words">
                  Innovation & Multidisciplinary Studies
                </span>
              </h1>
            </div>

            {/* Editorial Lead Paragraph */}
            <p className="mt-5 sm:mt-6 max-w-2xl text-sm sm:text-base lg:text-xl leading-relaxed text-secondary-text break-words w-full">
              An authoritative scientific convention bringing together leading faculty researchers, scholars, and innovators at{' '}
              <strong className="text-light-text font-semibold">{HOST_INSTITUTION.name}</strong>, Bihta, Patna to examine computational intelligence, green energy systems, advanced robotics, and applied science frontiers.
            </p>

            {/* Prominent High-Contrast Date & Venue Banner */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-2xl min-w-0">
              {/* Confirmed Dates Block */}
              <div className="flex-1 w-full min-w-0 rounded-2xl border border-cyan/40 bg-navy/90 p-4 sm:p-4.5 backdrop-blur-md glow-cyan-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="h-4 w-4 text-cyan shrink-0" />
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-cyan">
                    Confirmed Summit Dates
                  </span>
                </div>
                <div className="font-heading text-lg sm:text-2xl font-black text-light-text text-glow-cyan">
                  {CONFERENCE.dateDisplay}
                </div>
                <span className="text-xs font-mono text-secondary-text">
                  In-Person Technical Sessions
                </span>
              </div>

              {/* Verified Venue Block */}
              <div className="flex-1 w-full min-w-0 rounded-2xl border border-border-dark bg-navy/70 p-4 sm:p-4.5 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="h-4 w-4 text-mint shrink-0" />
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-mint">
                    Host Institution
                  </span>
                </div>
                <div className="font-heading text-base sm:text-lg font-bold text-light-text truncate">
                  {HOST_INSTITUTION.name}
                </div>
                <span className="text-xs font-mono text-secondary-text truncate block">
                  Bihta, Patna, Bihar, India
                </span>
              </div>
            </div>

            {/* Prominent Action CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto shadow-xl"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/submission');
                }}
              >
                <FileText className="h-5 w-5" />
                <span>Submit Your Paper</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/about');
                }}
              >
                <Compass className="h-5 w-5 text-cyan" />
                <span>Explore Conference</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Scientific Data Network Topology Visual & Countdown (5 cols) */}
          <div className="flex w-full min-w-0 flex-col items-center justify-center lg:col-span-5 relative mt-6 lg:mt-0 gap-4">
            {/* Scientific Multidisciplinary Network Visual */}
            <div className="relative w-full max-w-[500px] flex items-center justify-center">
              <ScientificNetworkVisual className="w-full" />
            </div>

            {/* Seamless Academic Countdown Bar */}
            <div className="w-full max-w-[500px] rounded-2xl border border-border-dark bg-navy/85 p-4 sm:p-5 backdrop-blur-md shadow-xl">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-heading font-bold text-light-text flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-cyan" />
                  Inauguration Countdown
                </span>
                <span className="font-mono text-[11px] text-cyan/90">
                  {CONFERENCE.timezoneLabel}
                </span>
              </div>
              <CountdownTimer />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

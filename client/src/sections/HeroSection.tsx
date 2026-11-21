import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  MapPin,
  FileText,
  ShieldCheck,
  Sparkles,
  Download,
} from 'lucide-react';
import Container from '../components/common/Container';
import CountdownTimer from '../components/ui/CountdownTimer';
import { CONFERENCE, HOST_INSTITUTION } from '../utils/constants';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#FAF8F5] pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24 border-b border-[#E7E0D6]">
      {/* Warm Ambient Brochure Accents */}
      <div
        className="pointer-events-none absolute -top-48 right-0 h-[48rem] w-[48rem] rounded-full bg-[#BF982E]/8 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -left-48 h-[40rem] w-[40rem] rounded-full bg-[#7B1123]/6 blur-[150px]"
        aria-hidden="true"
      />

      {/* Architectural Subtle Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-70 pointer-events-none" />

      <Container className="relative z-10 w-full min-w-0">
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-12 lg:items-center w-full min-w-0">
          {/* Left Column: Authentic Brochure Identity & Headline (7 cols) */}
          <div className="flex w-full min-w-0 flex-col items-start lg:col-span-7">
            {/* Brochure Overline Ribbon */}
            <div className="mb-4 sm:mb-5 flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#7B1123]/30 bg-white px-3.5 py-1 shadow-xs">
                <span className="flex h-2 w-2 rounded-full bg-[#7B1123] shrink-0" />
                <span className="font-mono text-xs font-bold tracking-widest text-[#7B1123] uppercase">
                  1ST NATIONAL CONFERENCE
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#57534E] bg-[#F5EFEB] border border-[#E7E0D6] px-3 py-1 rounded-full">
                <ShieldCheck className="h-3.5 w-3.5 text-[#BF982E]" />
                <span>NSIT Campus, Bihta, Patna</span>
              </span>
            </div>

            {/* Monumental ETIMS 2027 Headline */}
            <div className="w-full min-w-0">
              <h1 className="font-heading text-3xl sm:text-5xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.12] tracking-tight text-[#1C1917] break-words w-full">
                Emerging Technologies,{' '}
                <span className="block text-[#7B1123] mt-1 break-words">
                  Innovation and
                </span>
                <span className="block text-2xl sm:text-4xl md:text-5xl font-black text-[#1C1917] mt-1 break-words">
                  Multidisciplinary Studies
                </span>
              </h1>

              {/* Acronym & Official Discipline Scope */}
              <div className="mt-3.5 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <span className="font-heading text-2xl sm:text-3xl font-black tracking-wide text-[#7B1123]">
                  ETIMS 2027
                </span>
                <span className="hidden sm:inline-block h-4 w-px bg-[#BF982E]/50" />
                <span className="font-subheading text-xs sm:text-sm font-bold tracking-widest text-[#BF982E] uppercase">
                  SCIENCE &bull; ENGINEERING &bull; MANAGEMENT &bull; HUMANITIES
                </span>
              </div>
            </div>

            {/* Editorial Lead Paragraph */}
            <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-[#57534E] break-words w-full font-subheading">
              A premier national academic gathering hosted at <strong className="text-[#1C1917] font-semibold">{HOST_INSTITUTION.name}</strong>, Amhara, Bihta (~30 km from Patna) uniting researchers, academicians, industry professionals, and students across eight multidisciplinary tracks.
            </p>

            {/* Official Brochure Highlight Cards */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-xl min-w-0">
              {/* Confirmed Dates Block */}
              <div className="rounded-2xl border border-[#7B1123]/30 bg-white p-4 sm:p-4.5 shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-[#7B1123] shrink-0" />
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#7B1123]">
                    Conference Dates
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#7B1123] text-white font-mono font-bold text-xs">
                      23
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#7B1123] text-white font-mono font-bold text-xs">
                      24
                    </span>
                  </div>
                  <span className="font-heading text-lg sm:text-xl font-bold text-[#1C1917]">
                    July 2027
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#57534E] mt-1.5 block">
                  ({CONFERENCE.datesTentativeLabel} &bull; physical mode)
                </span>
              </div>

              {/* Verified Venue Block */}
              <div className="rounded-2xl border border-[#E7E0D6] bg-white p-4 sm:p-4.5 shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-[#BF982E] shrink-0" />
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#BF982E]">
                    Host Campus
                  </span>
                </div>
                <div className="font-heading text-base font-bold text-[#1C1917] truncate">
                  NSIT Campus, Bihta
                </div>
                <span className="text-xs text-[#57534E] truncate block mt-0.5">
                  Patna, Bihar (~30 km from Patna)
                </span>
              </div>
            </div>

            {/* Prominent Action CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/submission');
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7B1123] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#5C1324] active:scale-95 transition-all cursor-pointer"
              >
                <FileText className="h-4 w-4 text-white" />
                <span>Submit Paper</span>
                <ArrowRight className="h-4 w-4 text-white" />
              </button>

              <button
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/tracks');
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#BF982E] bg-white px-5 py-3.5 text-sm font-bold text-[#7B1123] hover:bg-[#FAF8F5] transition-all cursor-pointer shadow-xs"
              >
                <Sparkles className="h-4 w-4 text-[#BF982E]" />
                <span>Explore 08 Tracks</span>
              </button>

              <a
                href="/NSIT_Conference_Brochure_Final.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E7E0D6] bg-white hover:bg-[#FAF8F5] px-4 py-3.5 text-sm font-bold text-[#57534E] hover:text-[#7B1123] hover:border-[#7B1123]/30 transition-all cursor-pointer shadow-xs"
                title="Download Official ETIMS 2027 Brochure PDF"
              >
                <Download className="h-4 w-4 text-[#BF982E]" />
                <span>Brochure (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Campus Showcase & Live Countdown (5 cols) */}
          <div className="flex w-full min-w-0 flex-col items-center justify-center lg:col-span-5 relative mt-8 lg:mt-0 gap-5">
            {/* NSIT Academic Building Showcase Card */}
            <div className="relative w-full overflow-hidden rounded-3xl border-2 border-[#BF982E]/30 bg-white p-2 sm:p-2.5 shadow-xl group">
              <div className="relative h-72 sm:h-80 lg:h-88 w-full overflow-hidden rounded-2xl bg-[#1C1917]">
                <img
                  src="/assets/nsit-building-real.jpg"
                  alt="Netaji Subhas Institute of Technology Academic Building, Bihta, Patna"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle top & bottom shadow gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 pointer-events-none" />

                {/* Top Badge: Physical Summit & Campus Tag */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 font-mono text-[10px] sm:text-[11px] font-bold text-white shadow-md">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>NSIT CAMPUS &bull; BIHTA, PATNA</span>
                  </span>
                  <span className="rounded-full bg-[#7B1123]/90 backdrop-blur-md border border-[#BF982E]/40 px-3 py-1 font-mono text-[10px] sm:text-[11px] font-bold text-[#F3D993] shadow-md">
                    PHYSICAL SUMMIT
                  </span>
                </div>

                {/* Clean Glassmorphism Bottom Title Bar */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 pt-8 pointer-events-none">
                  <div className="flex items-end justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading text-base sm:text-lg font-bold text-white truncate drop-shadow-sm">
                        Netaji Subhas Institute of Technology
                      </h3>
                      <p className="font-subheading text-xs text-white/85 truncate font-medium mt-0.5">
                        Amhara, Bihta, Patna &bull; 9.2-Acre Integrated Campus
                      </p>
                    </div>
                    <span className="rounded-lg bg-[#BF982E]/30 border border-[#BF982E]/60 px-2.5 py-1 text-[10px] font-mono font-bold text-[#F3D993] shrink-0 backdrop-blur-sm">
                      NH-922
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Clean Countdown Box */}
            <div className="w-full rounded-2xl border border-[#E7E0D6] bg-white p-4 sm:p-5 text-center shadow-md">
              <div className="flex items-center justify-between mb-3 border-b border-[#E7E0D6]/80 pb-2.5">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#7B1123] font-bold">
                  Conference Inauguration Countdown
                </span>
                <span className="font-mono text-[10px] text-[#BF982E] font-bold">
                  23 July 2027 &bull; Bihta
                </span>
              </div>
              <CountdownTimer targetDate={CONFERENCE.countdownTarget} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

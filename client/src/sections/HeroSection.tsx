import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  MapPin,
  FileText,
  ShieldCheck,
  Sparkles,
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
              <h1 className="font-heading text-3xl sm:text-5xl md:text-5xl lg:text-[3.75rem] font-black leading-[1.14] tracking-tight text-[#1C1917] break-words w-full">
                Emerging Technologies,{' '}
                <span className="block text-[#7B1123] mt-1 break-words">
                  Innovation and
                </span>
                <span className="block text-2xl sm:text-4xl md:text-5xl font-black text-[#1C1917] mt-1 break-words">
                  Multidisciplinary Studies
                </span>
              </h1>

              {/* Acronym & Official Discipline Scope */}
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="font-heading text-2xl sm:text-3xl font-black tracking-wide text-[#7B1123]">
                  ETIMS 2027
                </span>
                <span className="hidden sm:inline-block h-4 w-px bg-[#BF982E]/50" />
                <span className="font-subheading text-xs sm:text-sm font-bold tracking-widest text-[#BF982E] uppercase">
                  SCIENCE &bull; ENGINEERING &bull; MANAGEMENT &bull; HUMANITIES
                </span>
              </div>

              {/* Brochure Diamond Accent */}
              <div className="text-[#BF982E] text-sm tracking-[0.3em] font-bold mt-2">
                &#9670; &#9670; &#9670;
              </div>
            </div>

            {/* Editorial Lead Paragraph */}
            <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-[#57534E] break-words w-full font-subheading">
              A premier national academic gathering hosted at <strong className="text-[#1C1917] font-semibold">{HOST_INSTITUTION.name}</strong>, Amhara, Bihta (~30 km from Patna) uniting researchers, academicians, industry professionals, and students to present pioneering discoveries across eight multidisciplinary tracks.
            </p>

            {/* Official Brochure Highlight Cards */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-2xl min-w-0">
              {/* Confirmed Dates Block */}
              <div className="flex-1 w-full min-w-0 rounded-2xl border border-[#7B1123]/30 bg-white p-4 sm:p-5 shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-[#7B1123] shrink-0" />
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#7B1123]">
                    Conference Dates
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7B1123] text-white font-mono font-bold text-sm">
                      23
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7B1123] text-white font-mono font-bold text-sm">
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
              <div className="flex-1 w-full min-w-0 rounded-2xl border border-[#E7E0D6] bg-white p-4 sm:p-5 shadow-xs">
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
                  Eight Tracks &bull; 200–300 Delegates
                </span>
              </div>
            </div>

            {/* Prominent Action CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/submission');
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7B1123] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#5C1324] active:scale-95 transition-all cursor-pointer"
              >
                <FileText className="h-4.5 w-4.5 text-white" />
                <span>Submit Your Paper</span>
                <ArrowRight className="h-4 w-4 text-white" />
              </button>

              <button
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/tracks');
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#BF982E] bg-white px-6 py-3.5 text-sm font-bold text-[#7B1123] hover:bg-[#FAF8F5] transition-all cursor-pointer shadow-xs"
              >
                <Sparkles className="h-4.5 w-4.5 text-[#BF982E]" />
                <span>Explore 08 Official Tracks</span>
              </button>
            </div>
          </div>

          {/* Right Column: Official ETIMS Emblem & Campus Card (5 cols) */}
          <div className="flex w-full min-w-0 flex-col items-center justify-center lg:col-span-5 relative mt-6 lg:mt-0 gap-5">
            {/* Official Conference Emblem Showcase Card */}
            <div className="relative w-full overflow-hidden rounded-3xl border-2 border-[#BF982E]/40 bg-white p-6 shadow-xl text-center">
              <div className="flex items-center justify-between mb-3 border-b border-[#E7E0D6] pb-2 px-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#7B1123] font-bold">
                  OFFICIAL CONFERENCE EMBLEM
                </span>
                <span className="flex items-center gap-1 font-mono text-[10px] text-[#BF982E] font-bold">
                  <span className="h-2 w-2 rounded-full bg-[#BF982E]" />
                  8 TRACKS
                </span>
              </div>

              {/* Official Extracted Logo */}
              <div className="mx-auto my-3 flex items-center justify-center">
                <div className="relative h-44 w-44 sm:h-52 sm:w-52 rounded-full p-2 bg-gradient-to-tr from-[#FAF8F5] to-white border border-[#BF982E]/30 shadow-md">
                  <img
                    src="/assets/etims-logo.png"
                    alt="Official ETIMS 2027 Conference Emblem"
                    className="h-full w-full object-contain filter drop-shadow-md"
                  />
                </div>
              </div>

              <div className="mt-2 text-center">
                <h3 className="font-heading text-lg font-bold text-[#7B1123]">
                  ETIMS 2027
                </h3>
                <p className="text-xs text-[#57534E] font-subheading mt-0.5">
                  Netaji Subhas Institute of Technology, Bihta, Patna
                </p>
              </div>
            </div>

            {/* Official Brochure Campus Photo */}
            <div className="w-full rounded-2xl border border-[#E7E0D6] bg-white p-3 shadow-xs overflow-hidden">
              <div className="relative h-32 sm:h-36 w-full rounded-xl overflow-hidden border border-[#E7E0D6]">
                <img
                  src="/assets/nsit-campus-official.png"
                  alt="Netaji Subhas Institute of Technology Campus Building"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-2.5 px-1 flex items-center justify-between text-xs">
                <span className="font-heading font-bold text-[#1C1917]">
                  NSIT Campus Building
                </span>
                <span className="font-mono text-[11px] text-[#7B1123] font-semibold">
                  Spread over 9.2 Acres
                </span>
              </div>
            </div>

            {/* Countdown Box */}
            <div className="w-full rounded-2xl border border-[#BF982E]/30 bg-white p-4 text-center shadow-xs">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#7B1123] font-bold block mb-2">
                COUNTDOWN TO CONFERENCE INAUGURATION
              </span>
              <CountdownTimer targetDate={CONFERENCE.countdownTarget} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { Mail, MapPin, Calendar, Phone, ArrowUp, ExternalLink } from 'lucide-react';
import { CONFERENCE, CONVENOR, HOST_INSTITUTION, TAB_NAV_ITEMS } from '../../utils/constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-light-text border-t border-white/10 overflow-hidden">
      {/* Subtle Bottom Ambient Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-cyan/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Institutional Leadership & Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900/90 border border-white/15 ring-1 ring-cyan/30 p-1 shadow-sm">
                <img
                  src="/assets/nsit-seal.png"
                  alt="NSIT Official Seal"
                  className="h-full w-full object-contain drop-shadow-md"
                />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold tracking-tight text-white">
                  {CONFERENCE.acronym}
                </h3>
                <p className="text-[11px] font-mono text-cyan">
                  {CONFERENCE.edition}
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-zinc-400">
              {CONFERENCE.name}
            </p>

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-4">
              <p className="text-[10px] font-mono uppercase tracking-wider text-cyan">
                Host Academic Institution
              </p>
              <p className="text-xs text-white mt-1 font-semibold">
                {HOST_INSTITUTION.name}
              </p>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                Bihta, Patna, Bihar – 801106, India
              </p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-cyan border-b border-border-dark pb-2.5">
              Summit Tabs
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {TAB_NAV_ITEMS.map((tab) => (
                <li key={tab.id}>
                  <Link
                    to={tab.path}
                    onClick={scrollToTop}
                    className="text-xs text-secondary-text transition-colors hover:text-cyan cursor-pointer flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-cyan/60" />
                    <span>{tab.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Verified Secretariat & Convenor Desk */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-cyan border-b border-border-dark pb-2.5">
              Secretariat Desk
            </h4>
            <ul className="mt-4 flex flex-col gap-3.5 text-xs text-secondary-text">
              <li>
                <span className="text-[10px] font-mono text-cyan block uppercase">
                  Conference Convenor:
                </span>
                <span className="font-semibold text-light-text text-sm">{CONVENOR.name}</span>
                <span className="text-[11px] text-secondary-text block">{CONVENOR.institution}</span>
              </li>
              <li className="flex items-start gap-2.5 font-mono">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                <a
                  href={`mailto:${CONVENOR.email}`}
                  className="transition-colors hover:text-cyan hover:underline break-all"
                >
                  {CONVENOR.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 font-mono">
                <Phone className="h-4 w-4 shrink-0 text-cyan" />
                <a
                  href={`tel:${CONVENOR.phoneTel}`}
                  className="transition-colors hover:text-cyan hover:underline"
                >
                  {CONVENOR.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                <span>{CONFERENCE.fullVenue}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Key Summit Dates & Action */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-cyan border-b border-border-dark pb-2.5">
              Confirmed Dates
            </h4>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-zinc-950 p-4">
                <div className="flex items-center gap-2 text-xs text-cyan">
                  <Calendar className="h-4 w-4" />
                  <span className="font-mono font-semibold uppercase">National Convention</span>
                </div>
                <p className="mt-2 text-base font-bold text-white">
                  {CONFERENCE.dateDisplay}
                </p>
                <p className="mt-0.5 text-[11px] text-zinc-400">
                  In-Person Technical Sessions at NSIT Bihta
                </p>
              </div>

              <Link
                to="/submission"
                onClick={scrollToTop}
                className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan to-blue-500 px-4 py-2.5 text-xs font-bold text-black shadow-md hover:brightness-110 transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Submit Your Manuscript</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row text-xs text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} {CONFERENCE.acronym} &bull; Netaji Subhas Institute of Technology, Bihta, Patna. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-cyan transition-colors cursor-pointer group"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

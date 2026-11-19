import { Link } from 'react-router-dom';
import { Mail, MapPin, Calendar, Phone, ArrowUp, ExternalLink } from 'lucide-react';
import { CONFERENCE, CONVENOR, HOST_INSTITUTION, TAB_NAV_ITEMS } from '../../utils/constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#450F1D] text-[#F5EFEB] border-t-2 border-[#BF982E]/40 overflow-hidden">
      {/* Subtle Top Gold Highlight Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#BF982E]/20 via-[#BF982E] to-[#BF982E]/20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Institutional Leadership & Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-md border border-[#BF982E]/40">
                <img
                  src="/assets/nsit-seal.png"
                  alt="NSIT Official Seal"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white p-0.5 shadow-md border border-[#BF982E]/40">
                <img
                  src="/assets/etims-logo.png"
                  alt="ETIMS 2027 Official Emblem"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-heading text-lg font-black tracking-tight text-white">
                  {CONFERENCE.acronym}
                </h3>
                <p className="text-[11px] font-mono text-[#F3D993] font-bold">
                  {CONFERENCE.edition}
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-[#F5EFEB]/80 font-subheading">
              {CONFERENCE.name}
            </p>

            <div className="rounded-2xl border border-[#BF982E]/30 bg-[#5C1324]/80 p-4">
              <p className="text-[10px] font-mono uppercase tracking-wider text-[#F3D993] font-bold">
                Host Academic Institution
              </p>
              <p className="text-xs text-white mt-1 font-bold">
                {HOST_INSTITUTION.name}
              </p>
              <p className="text-[11px] text-[#F5EFEB]/75 mt-0.5">
                Bihta, Patna, Bihar – 801106, India
              </p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#F3D993] border-b border-[#BF982E]/30 pb-2.5">
              Conference Portals
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {TAB_NAV_ITEMS.map((tab) => (
                <li key={tab.id}>
                  <Link
                    to={tab.path}
                    onClick={scrollToTop}
                    className="text-xs text-[#F5EFEB]/80 transition-colors hover:text-[#F3D993] cursor-pointer flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#BF982E]" />
                    <span>{tab.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Verified Secretariat & Convenor Desk */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#F3D993] border-b border-[#BF982E]/30 pb-2.5">
              Secretariat Desk
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-xs text-[#F5EFEB]/85">
              <li>
                <span className="text-[10px] font-mono text-[#F3D993] block uppercase font-bold">
                  Conference Convenor:
                </span>
                <span className="font-bold text-white text-sm">{CONVENOR.name}</span>
                <span className="text-[11px] text-[#F5EFEB]/75 block">{CONVENOR.title}</span>
                <span className="text-[11px] text-[#F5EFEB]/75 block">{CONVENOR.institution}</span>
              </li>
              <li className="flex items-start gap-2.5 font-mono">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#F3D993]" />
                <a
                  href={`mailto:${CONVENOR.email}`}
                  className="transition-colors hover:text-[#F3D993] hover:underline break-all"
                >
                  {CONVENOR.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 font-mono">
                <Phone className="h-4 w-4 shrink-0 text-[#F3D993]" />
                <a
                  href={`tel:${CONVENOR.phoneTel}`}
                  className="transition-colors hover:text-[#F3D993] hover:underline"
                >
                  {CONVENOR.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#F3D993]" />
                <span className="text-xs leading-snug">{CONFERENCE.fullVenue}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Key Summit Dates & Action */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#F3D993] border-b border-[#BF982E]/30 pb-2.5">
              Conference Dates
            </h4>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border border-[#BF982E]/30 bg-[#5C1324]/80 p-4">
                <div className="flex items-center gap-2 text-xs text-[#F3D993]">
                  <Calendar className="h-4 w-4" />
                  <span className="font-mono font-bold uppercase">National Convention</span>
                </div>
                <p className="mt-2 text-base font-extrabold text-white">
                  {CONFERENCE.dateDisplay}
                </p>
                <p className="mt-0.5 text-[11px] text-[#F5EFEB]/70">
                  {CONFERENCE.datesTentativeNote}
                </p>
              </div>

              <Link
                to="/submission"
                onClick={scrollToTop}
                className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#BF982E] to-[#D4AF37] px-4 py-2.5 text-xs font-extrabold text-[#450F1D] shadow-md hover:brightness-105 transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Submit Your Manuscript</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#BF982E]/20 pt-8 sm:flex-row text-xs text-[#F5EFEB]/60">
          <p>
            &copy; {new Date().getFullYear()} {CONFERENCE.acronym} &bull; Netaji Subhas Institute of Technology, Bihta, Patna. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#F5EFEB]/80 hover:text-[#F3D993] transition-colors cursor-pointer group"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 text-[#F3D993]" />
          </button>
        </div>
      </div>
    </footer>
  );
}

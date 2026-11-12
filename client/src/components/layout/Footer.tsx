import { Mail, MapPin, Calendar, Phone, ArrowUp } from 'lucide-react';
import { CONFERENCE, CONVENOR, HOST_INSTITUTION, NAV_LINKS } from '../../utils/constants';

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.getElementById(href.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-midnight text-light-text border-t border-border-dark overflow-hidden">
      {/* Subtle Bottom Ambient Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-cyan/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Institutional Leadership & Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/nsit-logo.png"
                alt="NSIT Official Logo"
                className="h-11 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(53,217,232,0.3)]"
              />
              <div>
                <h3 className="font-heading text-lg font-bold tracking-tight text-light-text">
                  {CONFERENCE.acronym}
                </h3>
                <p className="text-[11px] font-mono text-cyan">
                  {CONFERENCE.edition}
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-secondary-text">
              {CONFERENCE.name}
            </p>

            <div className="rounded-2xl border border-border-dark bg-navy/60 p-4">
              <p className="text-[10px] font-mono uppercase tracking-wider text-cyan">
                Host Academic Institution
              </p>
              <p className="text-xs text-light-text mt-1 font-semibold">
                {HOST_INSTITUTION.name}
              </p>
              <p className="text-[11px] text-secondary-text mt-0.5">
                Bihta, Patna, Bihar – 801106, India
              </p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-cyan border-b border-border-dark pb-2.5">
              Summit Navigation
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }
                    }}
                    className="text-xs text-secondary-text transition-colors hover:text-cyan cursor-pointer flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-cyan/60" />
                    <span>{link.label}</span>
                  </a>
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
                <div>
                  <span className="text-[10px] text-secondary-text/60 block">Official Email:</span>
                  <a
                    href={`mailto:${CONVENOR.email}`}
                    className="text-cyan hover:underline transition-colors truncate block"
                  >
                    {CONVENOR.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5 font-mono">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                <div>
                  <span className="text-[10px] text-secondary-text/60 block">Direct Telephone:</span>
                  <a
                    href={`tel:${CONVENOR.phoneTel}`}
                    className="text-cyan hover:underline transition-colors block"
                  >
                    {CONVENOR.phone}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Summit Identity */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-cyan border-b border-border-dark pb-2.5">
              Summit Coordinates
            </h4>
            <div className="mt-4 space-y-3 text-xs text-secondary-text">
              <div className="flex items-start gap-2.5">
                <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                <div>
                  <span className="text-[10px] font-mono text-cyan block">Confirmed Dates:</span>
                  <span className="text-light-text font-bold">{CONFERENCE.dateDisplay}</span>
                  <span className="text-[11px] text-secondary-text block">Asia/Kolkata (IST)</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                <div>
                  <span className="text-[10px] font-mono text-cyan block">Summit Venue:</span>
                  <span className="text-light-text">{CONFERENCE.venue}</span>
                  <span className="text-[11px] text-secondary-text block">Patna, Bihar, India</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border-dark bg-navy/80 px-3 py-1.5 text-xs font-mono text-cyan hover:border-cyan hover:bg-navy transition-colors cursor-pointer"
                >
                  <ArrowUp className="h-3.5 w-3.5" />
                  <span>Back to Top</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border-dark pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary-text">
          <p>
            © 2027 ETIMS Secretariat. Organized by Netaji Subhas Institute of Technology (NSIT), Bihta, Patna.
          </p>
          <div className="flex items-center gap-4 text-[11px] font-mono text-cyan">
            <span>ETIMS // 2027</span>
            <span>•</span>
            <span>23–24 JULY 2027</span>
            <span>•</span>
            <span>NSIT BIHTA, PATNA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

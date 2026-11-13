import {
  MapPin,
  Plane,
  Train,
  Car,
  Navigation,
} from 'lucide-react';
import Container from '../components/common/Container';
import { HOST_INSTITUTION } from '../utils/constants';

export default function VenuePage() {
  return (
    <div className="relative min-h-screen bg-midnight text-light-text py-12 sm:py-16 overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-12 left-1/4 h-96 w-96 rounded-full bg-cyan/10 blur-[140px]" />

      <Container className="relative z-10">
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-navy/80 px-4 py-1.5 text-xs font-mono font-semibold text-cyan mb-4 glow-cyan-sm">
            <MapPin className="h-3.5 w-3.5" />
            <span>Host Campus & Travel Guidance</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-light-text">
            Venue & <span className="text-cyan text-glow-cyan">Campus Travel</span>
          </h1>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-secondary-text leading-relaxed">
            Planning your visit to Netaji Subhas Institute of Technology (NSIT) in Bihta, Patna, Bihar. Detailed airport, railway, highway transit access and lodging advice.
          </p>
        </div>

        {/* Campus Location Card */}
        <div className="mb-12 rounded-3xl border border-cyan/40 bg-gradient-to-r from-navy via-midnight to-navy p-7 sm:p-9 shadow-2xl glow-cyan-sm">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono text-cyan uppercase tracking-wider block">
                Official Conference Venue
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-light-text">
                {HOST_INSTITUTION.name}
              </h2>
              <p className="text-xs sm:text-sm text-cyan font-mono flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Bihta, Patna, Bihar – 801106, India</span>
              </p>
              <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                Located in the educational heartland of Bihta, adjacent to IIT Patna, along the 4-lane Patna–Buxar National Highway (NH-922). The campus is fully equipped with air-conditioned auditoriums, research centers, and on-campus guest facilities.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=Netaji+Subhas+Institute+of+Technology+Bihta+Patna"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-teal to-cyan px-4 py-2 text-xs font-bold text-midnight shadow-md glow-cyan-sm"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-border-dark bg-navy/80 p-2 shadow-xl">
                <img
                  src="/assets/nsit-classroom.png"
                  alt="NSIT Bihta Auditorium Venue"
                  className="h-60 sm:h-72 w-full object-cover rounded-xl"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-midnight/90 border border-border-dark p-2.5 backdrop-blur-md">
                  <span className="text-[10px] font-mono text-cyan uppercase block">Plenary Venue</span>
                  <p className="text-xs font-bold text-light-text">Central Air-Conditioned Conference Auditoriums</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transit Routes Grid */}
        <div className="space-y-6">
          <h3 className="font-heading text-xl font-bold text-light-text">
            How to Reach NSIT Bihta Campus
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {HOST_INSTITUTION.transitAccess.map((transit, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-border-dark bg-navy/70 p-6 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/15 text-cyan border border-cyan/30 mb-3">
                    {idx === 0 && <Plane className="h-5 w-5" />}
                    {idx === 1 && <Train className="h-5 w-5" />}
                    {idx === 2 && <Car className="h-5 w-5" />}
                  </div>

                  <span className="text-[10px] font-mono text-cyan uppercase tracking-wider block">
                    {transit.mode}
                  </span>
                  <h4 className="font-heading text-base font-bold text-light-text mt-0.5">
                    {transit.terminal}
                  </h4>
                  <p className="text-xs sm:text-sm text-secondary-text mt-2 leading-relaxed">
                    {transit.detail}
                  </p>
                </div>

                <div className="pt-3 border-t border-border-dark text-[11px] font-mono text-mint">
                  Conference shuttle service available
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

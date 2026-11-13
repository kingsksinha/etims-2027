import {
  MapPin,
  Plane,
  Train,
  Car,
  Navigation,
  Compass,
  Phone,
  ExternalLink,
} from 'lucide-react';
import Container from '../components/common/Container';
import OrbitalVenueRadar from '../components/ui/OrbitalVenueRadar';
import { HOST_INSTITUTION, CONVENOR } from '../utils/constants';

export default function VenuePage() {
  return (
    <div className="relative min-h-screen bg-midnight text-light-text py-12 sm:py-16 overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-12 left-1/4 h-96 w-96 rounded-full bg-cyan/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-20 right-10 h-96 w-96 rounded-full bg-primary/10 blur-[150px]" />

      <Container className="relative z-10">
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-navy/80 px-4 py-1.5 text-xs font-mono font-semibold text-cyan mb-4 glow-cyan-sm">
            <Compass className="h-3.5 w-3.5" />
            <span>Summit Location & Spatial Telemetry</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-light-text">
            Venue & <span className="text-cyan text-glow-cyan">Campus Telemetry</span>
          </h1>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-secondary-text leading-relaxed">
            Planning your visit to Netaji Subhas Institute of Technology (NSIT) in Bihta, Patna, Bihar. Explore the spatial campus radar, transit hubs, and nearby lodging guidance.
          </p>
        </div>

        {/* The Signature Orbital Venue Radar Component */}
        <div className="mb-14">
          <OrbitalVenueRadar />
        </div>

        {/* Campus Location Card */}
        <div className="mb-14 rounded-3xl border border-white/10 bg-gradient-to-r from-navy via-black to-navy p-7 sm:p-9 shadow-2xl backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono text-cyan uppercase tracking-wider block">
                OFFICIAL CONFERENCE HOST CAMPUS
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-light-text">
                {HOST_INSTITUTION.name}
              </h2>
              <p className="text-xs sm:text-sm text-cyan font-mono flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>{HOST_INSTITUTION.fullAddress}</span>
              </p>
              <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                Located in the educational heartland of Bihta, directly adjacent to IIT Patna along the 4-lane Patna–Buxar National Highway (NH-922). The 11-acre campus provides air-conditioned digital lecture auditoriums, high-capacity computing clusters, IEEE research archives, and on-campus residential hostels.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=Netaji+Subhas+Institute+of+Technology+Bihta+Patna"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-blue-500 px-5 py-2.5 text-xs font-bold text-black shadow-md hover:brightness-110 transition-all glow-cyan-sm cursor-pointer"
                >
                  <Navigation className="h-4 w-4 text-black" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="h-3 w-3" />
                </a>

                <a
                  href={`tel:${CONVENOR.phoneTel}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-mono text-light-text hover:border-cyan transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-cyan" />
                  <span>Secretariat: {CONVENOR.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy/80 p-2 shadow-xl">
                <img
                  src="/assets/nsit-classroom.png"
                  alt="NSIT Bihta Auditorium Venue"
                  className="h-60 sm:h-72 w-full object-cover rounded-xl"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/90 border border-white/10 p-3 backdrop-blur-md">
                  <span className="text-[10px] font-mono text-cyan uppercase block">Plenary Venue</span>
                  <p className="text-xs font-bold text-light-text">Central Air-Conditioned Conference Auditoriums</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Transit Routes */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-light-text">
              How to Reach NSIT Bihta Campus
            </h3>
            <span className="font-mono text-xs text-secondary-text hidden sm:inline">
              Transit Matrix & Expressways
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {HOST_INSTITUTION.transitAccess.map((transit, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/10 bg-navy/70 p-6 space-y-3 flex flex-col justify-between backdrop-blur-md hover:border-cyan/40 transition-colors"
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
                  <p className="text-xs text-secondary-text leading-relaxed mt-2">
                    {transit.detail}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-secondary-text">
                  <span>TRANSIT TERMINAL</span>
                  <span className="text-cyan font-semibold">Patna Route</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

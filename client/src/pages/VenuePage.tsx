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
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#1C1917] py-12 sm:py-16 overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-12 left-1/4 h-96 w-96 rounded-full bg-[#BF982E]/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-20 right-10 h-96 w-96 rounded-full bg-[#7B1123]/10 blur-[150px]" />

      <Container className="relative z-10">
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7B1123]/30 bg-[#7B1123]/10 px-4 py-1.5 text-xs font-mono font-semibold text-[#7B1123] mb-4">
            <Compass className="h-3.5 w-3.5" />
            <span>Summit Location & Spatial Telemetry</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1C1917]">
            Venue & <span className="text-[#7B1123]">Campus Telemetry</span>
          </h1>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-[#57534E] leading-relaxed">
            Planning your visit to Netaji Subhas Institute of Technology (NSIT) in Bihta, Patna, Bihar. Explore the spatial campus radar, transit hubs, and nearby lodging guidance.
          </p>
        </div>

        {/* The Signature Orbital Venue Radar Component */}
        <div className="mb-14">
          <OrbitalVenueRadar />
        </div>

        {/* Campus Location Card */}
        <div className="mb-14 rounded-3xl border border-[#E7E0D6] bg-white p-7 sm:p-9 shadow-lg">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono text-[#7B1123] uppercase font-bold tracking-wider block">
                OFFICIAL CONFERENCE HOST CAMPUS
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1C1917]">
                {HOST_INSTITUTION.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#7B1123] font-mono flex items-center gap-2 font-semibold">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>{HOST_INSTITUTION.fullAddress}</span>
              </p>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Located in the educational heartland of Bihta, directly adjacent to IIT Patna along the 4-lane Patna–Buxar National Highway (NH-922). The 9.2-acre campus provides air-conditioned digital lecture auditoriums, high-capacity computing clusters, IEEE research archives, and on-campus residential hostels.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=Netaji+Subhas+Institute+of+Technology+Bihta+Patna"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#7B1123] hover:bg-[#5C1324] px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all cursor-pointer"
                >
                  <Navigation className="h-4 w-4 text-white" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="h-3 w-3" />
                </a>

                <a
                  href={`tel:${CONVENOR.phoneTel}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] px-4 py-2.5 text-xs font-mono text-[#1C1917] hover:border-[#7B1123] transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-[#7B1123]" />
                  <span>Secretariat: {CONVENOR.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-2 shadow-md">
                <img
                  src="/assets/nsit-building-real.jpg"
                  alt="NSIT Bihta Official Campus"
                  className="h-60 sm:h-72 w-full object-cover rounded-xl"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 border border-[#E7E0D6] p-3 shadow-md backdrop-blur-md">
                  <span className="text-[10px] font-mono text-[#7B1123] font-bold uppercase block">Official Campus</span>
                  <p className="text-xs font-bold text-[#1C1917]">Netaji Subhas Institute of Technology, Bihta, Patna</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Transit Routes */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1C1917]">
              How to Reach NSIT Bihta Campus
            </h3>
            <span className="font-mono text-xs text-[#57534E] hidden sm:inline">
              Transit Matrix & Expressways
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {HOST_INSTITUTION.transitAccess.map((transit, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-[#E7E0D6] bg-white p-6 space-y-3 flex flex-col justify-between shadow-sm hover:border-[#7B1123]/40 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7B1123]/10 text-[#7B1123] border border-[#7B1123]/25 mb-3">
                    {idx === 0 && <Plane className="h-5 w-5" />}
                    {idx === 1 && <Train className="h-5 w-5" />}
                    {idx === 2 && <Car className="h-5 w-5" />}
                  </div>

                  <span className="text-[10px] font-mono text-[#7B1123] font-bold uppercase tracking-wider block">
                    {transit.mode}
                  </span>
                  <h4 className="font-heading text-base font-bold text-[#1C1917] mt-0.5">
                    {transit.terminal}
                  </h4>
                  <p className="text-xs text-[#57534E] leading-relaxed mt-2">
                    {transit.detail}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E7E0D6] flex items-center justify-between text-[11px] font-mono text-[#78716C]">
                  <span>TRANSIT TERMINAL</span>
                  <span className="text-[#7B1123] font-semibold">Patna Route</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

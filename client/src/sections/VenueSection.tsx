import { MapPin, Calendar, ShieldCheck } from 'lucide-react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import OrbitalVenueRadar from '../components/ui/OrbitalVenueRadar';
import { CONFERENCE } from '../utils/constants';

export default function VenueSection() {
  return (
    <section id="venue" className="relative py-24 md:py-32 bg-midnight bg-tech-grid border-b border-border-dark overflow-hidden">
      {/* Background Volumetric Lighting */}
      <div className="pointer-events-none absolute -top-40 right-10 h-[36rem] w-[36rem] rounded-full bg-cyan/8 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-40 left-10 h-[36rem] w-[36rem] rounded-full bg-primary/8 blur-[160px]" />

      <Container className="relative z-10 w-full min-w-0">
        <SectionHeading
          tag="08 // Summit Location & Spatial Radar"
          title="Summit Venue & Orbital Telemetry"
          subtitle="Netaji Subhas Institute of Technology (NSIT) • Bihta, Patna, Bihar, India"
          align="left"
        />

        {/* The Signature Orbital Venue Radar Component */}
        <div className="mb-14">
          <OrbitalVenueRadar />
        </div>

        {/* Location & Statutory Credentials Bar */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-navy/80 p-5 space-y-2 backdrop-blur-md">
            <div className="flex items-center gap-2 text-cyan">
              <MapPin className="h-4 w-4" />
              <span className="font-mono text-xs uppercase tracking-wider font-bold">
                Official Campus Coordinates
              </span>
            </div>
            <h4 className="font-heading text-base font-bold text-light-text">
              Amhara, Bihta, Patna – 801106
            </h4>
            <p className="text-xs text-secondary-text leading-relaxed">
              Situated in Bihar's national knowledge corridor adjacent to IIT Patna along the NH-922 highway.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-navy/80 p-5 space-y-2 backdrop-blur-md">
            <div className="flex items-center gap-2 text-mint">
              <ShieldCheck className="h-4 w-4" />
              <span className="font-mono text-xs uppercase tracking-wider font-bold">
                Institutional Accreditations
              </span>
            </div>
            <h4 className="font-heading text-base font-bold text-light-text">
              AICTE Approved & BEU Affiliated
            </h4>
            <p className="text-xs text-secondary-text leading-relaxed">
              Recognized by Dept. of Science & Technology, Govt. of Bihar; affiliated with Bihar Engineering University.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-navy/80 p-5 space-y-2 backdrop-blur-md">
            <div className="flex items-center gap-2 text-amber">
              <Calendar className="h-4 w-4" />
              <span className="font-mono text-xs uppercase tracking-wider font-bold">
                Summit In-Person Dates
              </span>
            </div>
            <h4 className="font-heading text-base font-bold text-light-text">
              {CONFERENCE.dateDisplay}
            </h4>
            <p className="text-xs text-secondary-text leading-relaxed">
              Two days of plenary keynote lectures, paper tracks, poster demonstrations, and networking banquets.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

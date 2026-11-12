import { motion } from 'framer-motion';
import {
  Calendar,
  Compass,
  GraduationCap,
  Lightbulb,
  MapPin,
  Network,
} from 'lucide-react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import { CONFERENCE, HOST_INSTITUTION } from '../utils/constants';

const summitPillars = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Cross-Disciplinary Convergence',
    description:
      'Integrating computational intelligence, electrical engineering, industrial automation, and materials science into unified problem-solving methodologies.',
  },
  {
    number: '02',
    icon: Network,
    title: 'National Scholarly Exchange',
    description:
      'Convening university professors, senior scientists, and doctoral researchers across India to deliberate on empirical discoveries, computational models, and research paradigms.',
  },
  {
    number: '03',
    icon: GraduationCap,
    title: 'Academic Rigor & Peer Review',
    description:
      'Facilitating structured oral research presentations, double-blind peer reviews, and keynote dialogues designed to cultivate enduring collaborative research partnerships.',
  },
  {
    number: '04',
    icon: Compass,
    title: 'Regional Innovation Leadership',
    description:
      'Hosted at the Netaji Subhas Institute of Technology campus in Bihta, Patna, accelerating high-tech academic excellence and digital engineering leadership in Eastern India.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#07131F] border-b border-border-dark overflow-hidden">
      <Container className="relative z-10">
        <SectionHeading
          tag="01 // Conference Overview"
          title="About ETIMS 2027"
          subtitle="Academic philosophy, multidisciplinary mandate & the future of engineering research"
          align="left"
        />

        {/* Large Typography-Led Summit Metrics */}
        <div className="mb-20 grid grid-cols-2 lg:grid-cols-4 gap-8 border-y border-border-dark/80 py-10">
          <div>
            <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-light-text text-glow-cyan">
              02
            </div>
            <div className="mt-2 text-sm font-semibold text-cyan uppercase tracking-wider font-mono">
              Conference Days
            </div>
            <p className="mt-1 text-sm text-secondary-text">
              23–24 July 2027 In-Person
            </p>
          </div>

          <div>
            <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-cyan text-glow-cyan">
              05
            </div>
            <div className="mt-2 text-sm font-semibold text-cyan uppercase tracking-wider font-mono">
              Thematic Domains
            </div>
            <p className="mt-1 text-sm text-secondary-text">
              Provisional Research Tracks
            </p>
          </div>

          <div>
            <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-mint">
              NSIT
            </div>
            <div className="mt-2 text-sm font-semibold text-mint uppercase tracking-wider font-mono">
              Host Institution
            </div>
            <p className="mt-1 text-sm text-secondary-text">
              Bihta, Patna Campus
            </p>
          </div>

          <div>
            <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-light-text">
              01st
            </div>
            <div className="mt-2 text-sm font-semibold text-cyan uppercase tracking-wider font-mono">
              National Edition
            </div>
            <p className="mt-1 text-sm text-secondary-text">
              Inaugural Scientific Summit
            </p>
          </div>
        </div>

        {/* Asymmetric Editorial Narrative Layout */}
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Academic Manifesto & Editorial Storytelling (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 lg:col-span-7"
          >
            <p className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug text-light-text">
              Bridging foundational science, computational intelligence, and applied engineering to address complex 21st-century national frontiers.
            </p>

            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-secondary-text pt-2">
              <p>
                The <strong className="text-light-text font-semibold">{CONFERENCE.edition} on {CONFERENCE.name} ({CONFERENCE.acronym})</strong> is organized by{' '}
                <strong className="text-cyan font-semibold">{HOST_INSTITUTION.name}</strong>, Bihta, Patna on{' '}
                <strong className="text-mint font-semibold">{CONFERENCE.dateDisplay}</strong>.
              </p>

              <p>
                In modern scientific discovery, traditional boundaries separating artificial intelligence, electronic hardware, robotics, and advanced material systems are dissolving. ETIMS 2027 establishes a distinguished scholarly forum to evaluate how cutting-edge multidisciplinary engineering can accelerate sustainable development, clean energy, and cybernetic infrastructure.
              </p>

              <p>
                Through oral research presentations, double-blind peer review sessions, and interactive thematic tracks, the conference seeks to cultivate an environment where seasoned academicians and emerging innovators collaborate on high-impact technologies.
              </p>
            </div>

            {/* Context Coordinate Strip */}
            <div className="mt-4 pt-6 border-t border-border-dark flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-secondary-text">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-cyan shrink-0" />
                <span>
                  <strong className="text-light-text">Venue:</strong> {CONFERENCE.venue}, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar className="h-4.5 w-4.5 text-cyan shrink-0" />
                <span>
                  <strong className="text-light-text">Dates:</strong> {CONFERENCE.dateDisplay}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Editorial Pillars (No nested box cards!) (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col divide-y divide-border-dark/80 lg:col-span-5 lg:border-l lg:border-border-dark/80 lg:pl-10"
          >
            {summitPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.number} className="py-7 first:pt-0 last:pb-0 group">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="font-mono text-sm font-bold text-cyan">
                      {pillar.number}
                    </span>
                    <span className="text-border-dark">•</span>
                    <Icon className="h-4 w-4 text-cyan/70 group-hover:text-cyan transition-colors" />
                    <h3 className="font-heading text-lg font-bold text-light-text group-hover:text-cyan transition-colors">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-secondary-text pl-7">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

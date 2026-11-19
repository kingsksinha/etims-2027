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
    <section id="about" className="relative py-12 sm:py-16 md:py-24 bg-white border-b border-[#E7E0D6] overflow-hidden">
      <Container className="relative z-10">
        <SectionHeading
          tag="01 // Conference Overview"
          title="About ETIMS 2027"
          subtitle="Academic philosophy, multidisciplinary mandate & the future of engineering research"
          align="left"
        />

        {/* Large Typography-Led Summit Metrics */}
        <div className="mb-8 sm:mb-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 border-y border-[#E7E0D6] py-6 sm:py-10 bg-[#FAF8F5]/50 rounded-2xl px-4 sm:px-6">
          <div>
            <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-[#7B1123]">
              02
            </div>
            <div className="mt-2 text-sm font-bold text-[#BF982E] uppercase tracking-wider font-mono">
              Conference Days
            </div>
            <p className="mt-1 text-sm text-[#57534E]">
              23–24 July 2027 In-Person
            </p>
          </div>

          <div>
            <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-[#7B1123]">
              08
            </div>
            <div className="mt-2 text-sm font-bold text-[#BF982E] uppercase tracking-wider font-mono">
              Official Tracks
            </div>
            <p className="mt-1 text-sm text-[#57534E]">
              200–300 Delegates
            </p>
          </div>

          <div>
            <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C1917]">
              NSIT
            </div>
            <div className="mt-2 text-sm font-bold text-[#BF982E] uppercase tracking-wider font-mono">
              Host Institution
            </div>
            <p className="mt-1 text-sm text-[#57534E]">
              Bihta, Patna Campus
            </p>
          </div>

          <div>
            <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-[#7B1123]">
              01st
            </div>
            <div className="mt-2 text-sm font-bold text-[#BF982E] uppercase tracking-wider font-mono">
              National Edition
            </div>
            <p className="mt-1 text-sm text-[#57534E]">
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
            <p className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug text-[#1C1917]">
              Bridging foundational science, computational intelligence, and applied engineering to address complex 21st-century national frontiers.
            </p>

            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-[#57534E] pt-2 font-subheading">
              <p>
                The <strong className="text-[#1C1917] font-semibold">{CONFERENCE.edition} on {CONFERENCE.name} ({CONFERENCE.acronym})</strong> is organized by{' '}
                <strong className="text-[#7B1123] font-semibold">{HOST_INSTITUTION.name}</strong>, Bihta, Patna on{' '}
                <strong className="text-[#BF982E] font-semibold">{CONFERENCE.dateDisplay}</strong>.
              </p>

              <p>
                In modern scientific discovery, traditional boundaries separating artificial intelligence, civil infrastructure, mechanical manufacturing, electrical grids, and humanities are dissolving. ETIMS 2027 establishes a distinguished scholarly forum to evaluate how cutting-edge multidisciplinary engineering can accelerate sustainable development and knowledge sharing.
              </p>

              <p>
                Through oral research presentations, double-blind peer review sessions, and interactive thematic tracks, the conference seeks to cultivate an environment where seasoned academicians and emerging innovators collaborate on high-impact technologies.
              </p>
            </div>

            {/* Context Coordinate Strip */}
            <div className="mt-4 pt-6 border-t border-[#E7E0D6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-[#57534E]">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-[#7B1123] shrink-0" />
                <span>
                  <strong className="text-[#1C1917]">Venue:</strong> {CONFERENCE.venue}, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar className="h-4.5 w-4.5 text-[#7B1123] shrink-0" />
                <span>
                  <strong className="text-[#1C1917]">Dates:</strong> {CONFERENCE.dateDisplay}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Editorial Pillars (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col divide-y divide-[#E7E0D6] lg:col-span-5 lg:border-l lg:border-[#E7E0D6] lg:pl-10"
          >
            {summitPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.number} className="py-7 first:pt-0 last:pb-0 group">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="font-mono text-sm font-bold text-[#7B1123]">
                      {pillar.number}
                    </span>
                    <span className="text-[#E7E0D6]">&bull;</span>
                    <Icon className="h-4 w-4 text-[#BF982E] group-hover:text-[#7B1123] transition-colors" />
                    <h3 className="font-heading text-lg font-bold text-[#1C1917] group-hover:text-[#7B1123] transition-colors">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#57534E] pl-7 font-subheading">
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

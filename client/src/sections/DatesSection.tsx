import { motion } from 'framer-motion';
import {
  CalendarCheck2,
  CalendarClock,
  Info,
} from 'lucide-react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import { CONFERENCE, CONFERENCE_TIMELINE, type TimelineItem } from '../utils/constants';

export default function DatesSection() {
  return (
    <section id="dates" className="relative py-24 md:py-32 bg-gradient-to-b from-[#07131F] via-[#091C2B] to-[#07131F] border-b border-border-dark overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[42rem] w-[42rem] rounded-full bg-cyan/8 blur-[150px]" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            tag="04 // Timeline & Schedule"
            title="Important Dates & Milestones"
            subtitle="Conference inauguration schedule and milestone notification pipeline"
            align="left"
            className="mb-0 md:mb-0"
          />

          <div className="inline-flex items-center gap-2 rounded-xl bg-navy border border-cyan/30 px-4 py-2 text-xs text-secondary-text shrink-0 backdrop-blur-md">
            <Info className="h-4 w-4 text-cyan shrink-0" />
            <span>
              Official CFP circular establishes final manuscript submission deadlines
            </span>
          </div>
        </div>

        {/* Confirmed Milestone Monumental Beacon */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 rounded-3xl border border-cyan/40 bg-gradient-to-r from-navy via-navy-light to-navy p-7 sm:p-10 shadow-2xl glow-cyan-sm relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan via-mint to-cyan animate-pulse" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="flex h-2.5 w-2.5 rounded-full bg-cyan animate-ping" />
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan/15 border border-cyan/40 px-3.5 py-1 text-xs font-mono font-bold text-cyan">
                  <CalendarCheck2 className="h-3.5 w-3.5" />
                  CONFIRMED SUMMIT DATES
                </span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-light-text text-glow-cyan">
                Conference Inauguration & Technical Sessions
              </h3>
              <p className="mt-2 text-sm sm:text-base text-secondary-text">
                Netaji Subhas Institute of Technology (NSIT), Bihta, Patna, Bihar, India
              </p>
            </div>

            <div className="text-left sm:text-right shrink-0 rounded-2xl bg-midnight/90 border border-cyan/40 px-8 py-5 shadow-inner">
              <span className="block font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-cyan text-glow-cyan">
                {CONFERENCE.dateDisplay}
              </span>
              <span className="text-xs font-mono text-secondary-text mt-1 block">
                {CONFERENCE.timezoneLabel} • In-Person
              </span>
            </div>
          </div>
        </motion.div>

        {/* Chronological Laser Pipeline Spine (Clean editorial entries, no bulky boxes!) */}
        <div className="relative border-l-2 border-cyan/35 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {CONFERENCE_TIMELINE.map((item: TimelineItem, index: number) => {
            const isConfirmed = item.isConfirmed;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="relative group"
              >
                {/* Luminous Node Point */}
                <span
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 transition-all ${
                    isConfirmed
                      ? 'border-cyan bg-cyan glow-cyan-sm'
                      : 'border-cyan/40 bg-midnight group-hover:border-cyan group-hover:bg-cyan/40'
                  }`}
                />

                <div className="pb-2 border-b border-border-dark/60">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs font-bold text-cyan">
                          PHASE 0{index + 1}
                        </span>
                        <span className="text-border-dark">•</span>
                        <span className="font-mono text-xs uppercase tracking-wider text-secondary-text">
                          {item.phase}
                        </span>
                      </div>
                      <h4 className="font-heading text-lg sm:text-xl font-bold text-light-text group-hover:text-cyan transition-colors">
                        {item.milestone}
                      </h4>
                      <p className="mt-1.5 text-sm sm:text-base text-secondary-text max-w-2xl leading-relaxed">
                        {item.note}
                      </p>
                    </div>

                    <div className="mt-2 sm:mt-0 shrink-0">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 font-mono text-xs font-semibold ${
                          isConfirmed
                            ? 'bg-cyan text-midnight font-bold shadow-sm glow-cyan-sm'
                            : 'bg-navy/80 border border-border-dark text-secondary-text'
                        }`}
                      >
                        {isConfirmed ? (
                          <>
                            <CalendarCheck2 className="h-3.5 w-3.5" />
                            <span>{item.statusText}</span>
                          </>
                        ) : (
                          <>
                            <CalendarClock className="h-3.5 w-3.5 text-cyan" />
                            <span>TBA (To Be Announced)</span>
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

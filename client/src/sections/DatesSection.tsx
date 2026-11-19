import { motion } from 'framer-motion';
import {
  CalendarCheck2,
  Info,
} from 'lucide-react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import { CONFERENCE, CONFERENCE_TIMELINE, type TimelineItem } from '../utils/constants';

export default function DatesSection() {
  return (
    <section id="dates" className="relative py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E7E0D6] overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[42rem] w-[42rem] rounded-full bg-[#BF982E]/8 blur-[150px]" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            tag="04 // Timeline & Schedule"
            title="Important Dates & Milestones"
            subtitle="Conference inauguration schedule and milestone notification pipeline"
            align="left"
            className="mb-0 md:mb-0"
          />

          <div className="inline-flex items-center gap-2 rounded-xl bg-white border border-[#BF982E]/40 px-4 py-2 text-xs text-[#57534E] shrink-0 shadow-xs">
            <Info className="h-4 w-4 text-[#7B1123] shrink-0" />
            <span>
              Provisional; subject to institutional and publisher approval.
            </span>
          </div>
        </div>

        {/* Confirmed Milestone Monumental Beacon */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 rounded-3xl border-2 border-[#BF982E]/40 bg-white p-7 sm:p-9 shadow-md relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#7B1123] via-[#BF982E] to-[#7B1123]" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#7B1123] shrink-0" />
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7B1123]/10 border border-[#7B1123]/30 px-3.5 py-1 text-xs font-mono font-bold text-[#7B1123]">
                  <CalendarCheck2 className="h-3.5 w-3.5" />
                  CONFIRMED CONFERENCE DATES
                </span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1C1917]">
                Inauguration & Technical Sessions
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#57534E] font-subheading">
                Netaji Subhas Institute of Technology (NSIT), Bihta, Patna, Bihar, India
              </p>
            </div>

            <div className="text-left sm:text-right shrink-0 rounded-2xl bg-[#FAF8F5] border border-[#BF982E]/40 px-8 py-5 shadow-xs">
              <span className="block font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#7B1123]">
                {CONFERENCE.dateDisplay}
              </span>
              <span className="text-xs font-mono text-[#57534E] mt-1 block">
                {CONFERENCE.datesTentativeLabel} &bull; Physical Mode
              </span>
            </div>
          </div>
        </motion.div>

        {/* Chronological Laser Pipeline Spine */}
        <div className="relative border-l-2 border-[#BF982E] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-9">
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
                      ? 'border-[#7B1123] bg-[#7B1123]'
                      : 'border-[#BF982E] bg-white'
                  }`}
                />

                <div className="pb-3 border-b border-[#E7E0D6]">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs font-bold text-[#7B1123]">
                          MILESTONE 0{index + 1}
                        </span>
                        <span className="text-[#E7E0D6]">&bull;</span>
                        <span className="font-mono text-xs uppercase tracking-wider text-[#57534E]">
                          {item.phase}
                        </span>
                      </div>
                      <h4 className="font-heading text-lg sm:text-xl font-bold text-[#1C1917] group-hover:text-[#7B1123] transition-colors">
                        {item.milestone}
                      </h4>
                      <p className="mt-1 text-sm sm:text-base text-[#57534E] max-w-2xl leading-relaxed font-subheading">
                        {item.note}
                      </p>
                    </div>

                    <div className="mt-2 sm:mt-0 shrink-0">
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#7B1123] text-white px-3.5 py-1.5 font-mono text-xs font-bold shadow-xs">
                        <CalendarCheck2 className="h-3.5 w-3.5 text-[#F3D993]" />
                        <span>{item.statusText}</span>
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

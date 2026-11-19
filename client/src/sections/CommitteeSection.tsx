import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Users2,
  GraduationCap,
} from 'lucide-react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import {
  CONVENOR,
  ORGANISING_STRUCTURE,
  ADVISORY_COMMITTEE,
} from '../utils/constants';

export default function CommitteeSection() {
  return (
    <section id="committees" className="relative py-24 md:py-32 bg-midnight border-b border-border-dark overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-1/3 -right-32 h-80 w-80 rounded-full bg-cyan/8 blur-[130px]" />

      <Container className="relative z-10">
        <SectionHeading
          tag="07 // Organising Structure"
          title="Organising Structure & Leadership"
          subtitle="Institutional patrons, convenor secretariat and national advisory committee for ETIMS 2027"
          align="left"
        />

        {/* Patrons Row */}
        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          {/* Chief Patron */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-cyan/40 bg-gradient-to-b from-navy to-midnight p-6 shadow-xl glow-cyan-sm relative overflow-hidden"
          >
            <span className="rounded-full bg-cyan/15 border border-cyan/30 px-3 py-0.5 text-[10px] font-mono font-bold text-cyan uppercase tracking-wider">
              {ORGANISING_STRUCTURE.chiefPatron.role}
            </span>
            <h3 className="mt-3 font-heading text-xl font-black text-light-text text-glow-cyan">
              {ORGANISING_STRUCTURE.chiefPatron.name}
            </h3>
            <p className="text-xs text-mint font-mono mt-0.5">
              {ORGANISING_STRUCTURE.chiefPatron.designation}
            </p>
            <p className="text-xs text-secondary-text mt-2">
              {ORGANISING_STRUCTURE.chiefPatron.affiliation}
            </p>
          </motion.div>

          {/* Patron */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="rounded-3xl border border-border-dark bg-navy/80 p-6 shadow-xl hover:border-cyan/40 transition-colors"
          >
            <span className="rounded-full bg-cyan/15 border border-cyan/30 px-3 py-0.5 text-[10px] font-mono font-bold text-cyan uppercase tracking-wider">
              {ORGANISING_STRUCTURE.patron.role}
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold text-light-text">
              {ORGANISING_STRUCTURE.patron.name}
            </h3>
            <p className="text-xs text-mint font-mono mt-0.5">
              {ORGANISING_STRUCTURE.patron.designation}
            </p>
            <p className="text-xs text-secondary-text mt-2">
              {ORGANISING_STRUCTURE.patron.affiliation}
            </p>
          </motion.div>

          {/* Co-Patron */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="rounded-3xl border border-border-dark bg-navy/80 p-6 shadow-xl hover:border-cyan/40 transition-colors"
          >
            <span className="rounded-full bg-cyan/15 border border-cyan/30 px-3 py-0.5 text-[10px] font-mono font-bold text-cyan uppercase tracking-wider">
              {ORGANISING_STRUCTURE.coPatron.role}
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold text-light-text">
              {ORGANISING_STRUCTURE.coPatron.name}
            </h3>
            <p className="text-xs text-mint font-mono mt-0.5">
              {ORGANISING_STRUCTURE.coPatron.designation}
            </p>
            <p className="text-xs text-secondary-text mt-2">
              {ORGANISING_STRUCTURE.coPatron.affiliation}
            </p>
          </motion.div>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Convenor & Co-Convenors (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-cyan/40 bg-gradient-to-b from-navy to-midnight p-6 sm:p-8 shadow-2xl glow-cyan-sm lg:col-span-6 w-full min-w-0"
          >
            <div className="flex items-center justify-between border-b border-border-dark pb-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan">
                Conference Secretariat
              </span>
              <span className="rounded-full bg-cyan/15 border border-cyan/30 px-3.5 py-1 text-xs font-mono font-bold text-cyan">
                Convenorship
              </span>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full min-w-0">
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan/20 via-navy to-midnight border border-cyan/40 text-cyan shadow-xl glow-cyan-sm">
                <span className="font-heading text-2xl font-black text-cyan tracking-wider">
                  AH
                </span>
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-midnight border border-cyan">
                  <span className="h-2 w-2 rounded-full bg-mint animate-pulse" />
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <span className="text-xs font-mono uppercase tracking-wider text-mint block">
                  Convenor
                </span>
                <h3 className="mt-1 font-heading text-xl sm:text-2xl font-extrabold text-light-text text-glow-cyan truncate">
                  {CONVENOR.name}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-secondary-text">
                  {CONVENOR.title}
                </p>
                <p className="text-xs text-secondary-text mt-0.5 font-mono">
                  {CONVENOR.institution}, {CONVENOR.campus}
                </p>
              </div>
            </div>

            {/* Direct Communication Channels */}
            <div className="mt-6 pt-5 border-t border-border-dark flex flex-col sm:flex-row gap-3 text-xs font-mono w-full min-w-0">
              <a
                href={`mailto:${CONVENOR.email}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-border-dark bg-midnight px-4 py-2 font-medium text-light-text hover:border-cyan hover:text-cyan transition-colors min-w-0"
              >
                <Mail className="h-4 w-4 text-cyan shrink-0" />
                <span className="break-all">{CONVENOR.email}</span>
              </a>
              <a
                href={`tel:${CONVENOR.phoneTel}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-border-dark bg-midnight px-4 py-2 font-medium text-light-text hover:border-cyan hover:text-cyan transition-colors shrink-0"
              >
                <Phone className="h-4 w-4 text-cyan shrink-0" />
                <span>{CONVENOR.phone}</span>
              </a>
            </div>

            {/* Co-Convenors Grid */}
            <div className="mt-8 pt-6 border-t border-border-dark">
              <div className="flex items-center gap-2 mb-4">
                <Users2 className="h-4 w-4 text-cyan" />
                <span className="font-heading text-sm font-bold text-light-text uppercase tracking-wider">
                  Co-Convenors
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ORGANISING_STRUCTURE.coConvenors.map((c, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-border-dark bg-midnight/80 p-3 flex items-center justify-between"
                  >
                    <div>
                      <span className="font-heading text-sm font-semibold text-light-text block">
                        {c.name}
                      </span>
                      <span className="text-[11px] font-mono text-secondary-text">
                        {c.designation}, {c.affiliation}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Advisory Committee (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-6 lg:col-span-6"
          >
            <div className="rounded-3xl border border-border-dark bg-navy/80 p-6 sm:p-8 backdrop-blur-md shadow-xl">
              <div className="flex items-center justify-between border-b border-border-dark pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-cyan" />
                  <h3 className="font-heading text-xl font-bold text-light-text">
                    Advisory Committee
                  </h3>
                </div>
                <span className="rounded-full bg-cyan/15 border border-cyan/30 px-3 py-0.5 text-xs font-mono font-bold text-cyan">
                  IITs & NITs
                </span>
              </div>

              <p className="text-xs sm:text-sm text-secondary-text leading-relaxed mb-6">
                Prominent academic leaders guiding multidisciplinary research track standards, review integrity, and keynote sessions for ETIMS 2027.
              </p>

              <div className="space-y-3">
                {ADVISORY_COMMITTEE.map((member, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-2xl border border-border-dark bg-midnight/70 p-3.5 hover:border-cyan/40 transition-colors"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan/10 border border-cyan/20 text-cyan text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <strong className="text-light-text font-bold text-sm">
                          {member.name}
                        </strong>
                        <span className="text-xs font-mono text-cyan shrink-0 font-semibold">
                          {member.institution}
                        </span>
                      </div>
                      <span className="text-xs text-secondary-text block mt-0.5">
                        {member.designation}, {member.department}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

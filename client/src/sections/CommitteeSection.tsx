import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Building,
  Shield,
  Info,
} from 'lucide-react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import { CONVENOR, COMMITTEE_CATEGORIES } from '../utils/constants';

export default function CommitteeSection() {
  return (
    <section id="committees" className="relative py-24 md:py-32 bg-midnight border-b border-border-dark overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-1/3 -right-32 h-80 w-80 rounded-full bg-cyan/8 blur-[130px]" />

      <Container className="relative z-10">
        <SectionHeading
          tag="07 // Academic Governance"
          title="Organizing Committee & Leadership"
          subtitle="Academic leadership, convenorship and institutional oversight for ETIMS 2027"
          align="left"
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Convenor Faculty Profile (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-cyan/40 bg-gradient-to-b from-navy to-midnight p-5 sm:p-8 shadow-2xl glow-cyan-sm lg:col-span-7 w-full min-w-0"
          >
            <div className="flex items-center justify-between border-b border-border-dark pb-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan">
                Organizing Secretariat Desk
              </span>
              <span className="rounded-full bg-cyan/15 border border-cyan/30 px-3.5 py-1 text-xs font-mono font-bold text-cyan">
                Convenorship
              </span>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full min-w-0">
              <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan/20 via-navy to-midnight border border-cyan/40 text-cyan shadow-xl glow-cyan-sm">
                <span className="font-heading text-2xl sm:text-3xl font-black text-cyan tracking-wider">
                  AH
                </span>
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-midnight border border-cyan">
                  <span className="h-2 w-2 rounded-full bg-mint animate-pulse" />
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <span className="text-xs font-mono uppercase tracking-wider text-mint block">
                  Assistant Professor & Conference Convenor
                </span>
                <h3 className="mt-1 font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-light-text text-glow-cyan truncate">
                  {CONVENOR.name}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm md:text-base text-secondary-text flex items-center gap-2">
                  <Building className="h-4 w-4 text-cyan shrink-0" />
                  <span className="truncate">{CONVENOR.institution}, {CONVENOR.campus}</span>
                </p>
                <p className="text-xs sm:text-sm text-secondary-text mt-1 font-mono truncate">
                  Department of {CONVENOR.department}
                </p>
              </div>
            </div>

            {/* Direct Communication Channels */}
            <div className="mt-8 pt-6 border-t border-border-dark flex flex-col sm:flex-row gap-3 text-xs font-mono w-full min-w-0">
              <a
                href={`mailto:${CONVENOR.email}`}
                className="flex items-center justify-center gap-2.5 rounded-xl border border-border-dark bg-midnight px-4 py-2.5 font-medium text-light-text hover:border-cyan hover:text-cyan transition-colors min-w-0"
              >
                <Mail className="h-4 w-4 text-cyan shrink-0" />
                <span className="break-all">{CONVENOR.email}</span>
              </a>
              <a
                href={`tel:${CONVENOR.phoneTel}`}
                className="flex items-center justify-center gap-2.5 rounded-xl border border-border-dark bg-midnight px-4 py-2.5 font-medium text-light-text hover:border-cyan hover:text-cyan transition-colors shrink-0"
              >
                <Phone className="h-4 w-4 text-cyan shrink-0" />
                <span>{CONVENOR.phone}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Governance Bodies Structure (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-6 lg:col-span-5"
          >
            <div className="rounded-3xl border border-border-dark bg-navy/80 p-7 sm:p-8 backdrop-blur-md">
              <h3 className="font-heading text-xl font-bold text-light-text">
                Committee Bodies & Oversight
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-secondary-text leading-relaxed">
                The institutional advisory council, international review panels, and technical session chairs are actively being finalized by the organizing secretariat.
              </p>

              <div className="mt-6 space-y-3.5">
                {COMMITTEE_CATEGORIES.map((com, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3.5 rounded-2xl border border-border-dark bg-midnight/70 p-4 text-sm text-secondary-text"
                  >
                    <Shield className="h-4.5 w-4.5 text-cyan shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <strong className="text-light-text font-semibold text-sm sm:text-base">{com.title}</strong>
                        <span className="text-xs font-mono text-cyan shrink-0">
                          {com.status}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm text-secondary-text leading-relaxed block">
                        {com.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-border-dark flex items-center gap-2.5 text-xs sm:text-sm text-secondary-text">
                <Info className="h-4 w-4 text-cyan shrink-0" />
                <span>Formal committee gazette will be published with the official CFP circular.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

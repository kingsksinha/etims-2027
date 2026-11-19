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
    <section id="committees" className="relative py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E7E0D6] overflow-hidden">
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
            className="rounded-3xl border-2 border-[#BF982E]/40 bg-white p-6 shadow-md relative overflow-hidden flex flex-col items-center text-center"
          >
            <div className="relative mb-3.5 h-24 w-24 rounded-full p-1 bg-gradient-to-tr from-[#7B1123] to-[#BF982E] shadow-sm">
              <img
                src={ORGANISING_STRUCTURE.chiefPatron.photo}
                alt={ORGANISING_STRUCTURE.chiefPatron.name}
                className="h-full w-full rounded-full object-cover bg-white"
              />
            </div>
            <span className="rounded-full bg-[#7B1123]/10 border border-[#7B1123]/30 px-3 py-0.5 text-[10px] font-mono font-bold text-[#7B1123] uppercase tracking-wider">
              {ORGANISING_STRUCTURE.chiefPatron.role}
            </span>
            <h3 className="mt-2 font-heading text-xl font-bold text-[#1C1917]">
              {ORGANISING_STRUCTURE.chiefPatron.name}
            </h3>
            <p className="text-xs text-[#BF982E] font-subheading font-bold mt-0.5">
              {ORGANISING_STRUCTURE.chiefPatron.designation}
            </p>
            <p className="text-xs text-[#57534E] mt-1">
              {ORGANISING_STRUCTURE.chiefPatron.affiliation}
            </p>
          </motion.div>

          {/* Patron */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="rounded-3xl border border-[#E7E0D6] bg-white p-6 shadow-sm hover:border-[#7B1123]/40 transition-colors flex flex-col items-center text-center"
          >
            <div className="relative mb-3.5 h-24 w-24 rounded-full p-1 bg-gradient-to-tr from-[#7B1123]/60 to-[#BF982E]/60 shadow-sm">
              <img
                src={ORGANISING_STRUCTURE.patron.photo}
                alt={ORGANISING_STRUCTURE.patron.name}
                className="h-full w-full rounded-full object-cover bg-white"
              />
            </div>
            <span className="rounded-full bg-[#7B1123]/10 border border-[#7B1123]/30 px-3 py-0.5 text-[10px] font-mono font-bold text-[#7B1123] uppercase tracking-wider">
              {ORGANISING_STRUCTURE.patron.role}
            </span>
            <h3 className="mt-2 font-heading text-xl font-bold text-[#1C1917]">
              {ORGANISING_STRUCTURE.patron.name}
            </h3>
            <p className="text-xs text-[#BF982E] font-subheading font-bold mt-0.5">
              {ORGANISING_STRUCTURE.patron.designation}
            </p>
            <p className="text-xs text-[#57534E] mt-1">
              {ORGANISING_STRUCTURE.patron.affiliation}
            </p>
          </motion.div>

          {/* Co-Patron */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="rounded-3xl border border-[#E7E0D6] bg-white p-6 shadow-sm hover:border-[#7B1123]/40 transition-colors flex flex-col items-center text-center"
          >
            <div className="relative mb-3.5 h-24 w-24 rounded-full p-1 bg-gradient-to-tr from-[#7B1123]/60 to-[#BF982E]/60 shadow-sm">
              <img
                src={ORGANISING_STRUCTURE.coPatron.photo}
                alt={ORGANISING_STRUCTURE.coPatron.name}
                className="h-full w-full rounded-full object-cover bg-white"
              />
            </div>
            <span className="rounded-full bg-[#7B1123]/10 border border-[#7B1123]/30 px-3 py-0.5 text-[10px] font-mono font-bold text-[#7B1123] uppercase tracking-wider">
              {ORGANISING_STRUCTURE.coPatron.role}
            </span>
            <h3 className="mt-2 font-heading text-xl font-bold text-[#1C1917]">
              {ORGANISING_STRUCTURE.coPatron.name}
            </h3>
            <p className="text-xs text-[#BF982E] font-subheading font-bold mt-0.5">
              {ORGANISING_STRUCTURE.coPatron.designation}
            </p>
            <p className="text-xs text-[#57534E] mt-1">
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
            className="rounded-3xl border border-[#7B1123]/30 bg-white p-6 sm:p-8 shadow-md lg:col-span-6 w-full min-w-0"
          >
            <div className="flex items-center justify-between border-b border-[#E7E0D6] pb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#7B1123]">
                Conference Secretariat
              </span>
              <span className="rounded-full bg-[#7B1123]/10 border border-[#7B1123]/30 px-3.5 py-1 text-xs font-mono font-bold text-[#7B1123]">
                Convenorship
              </span>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full min-w-0">
              <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full p-1 bg-gradient-to-tr from-[#7B1123] to-[#BF982E] shadow-sm">
                <img
                  src={ORGANISING_STRUCTURE.convenor.photo}
                  alt={CONVENOR.name}
                  className="h-full w-full rounded-full object-cover bg-white"
                />
              </div>

              <div className="min-w-0 flex-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#BF982E] font-bold block">
                  Conference Convenor
                </span>
                <h3 className="mt-1 font-heading text-xl sm:text-2xl font-black text-[#1C1917] truncate">
                  {CONVENOR.name}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#7B1123] font-semibold">
                  {CONVENOR.title}
                </p>
                <p className="text-xs text-[#57534E] mt-0.5">
                  {CONVENOR.institution}, {CONVENOR.campus}
                </p>
              </div>
            </div>

            {/* Direct Communication Channels */}
            <div className="mt-6 pt-5 border-t border-[#E7E0D6] flex flex-col sm:flex-row gap-3 text-xs font-mono w-full min-w-0">
              <a
                href={`mailto:${CONVENOR.email}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] px-4 py-2 font-medium text-[#1C1917] hover:border-[#7B1123] hover:text-[#7B1123] transition-colors min-w-0"
              >
                <Mail className="h-4 w-4 text-[#7B1123] shrink-0" />
                <span className="break-all">{CONVENOR.email}</span>
              </a>
              <a
                href={`tel:${CONVENOR.phoneTel}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] px-4 py-2 font-medium text-[#1C1917] hover:border-[#7B1123] hover:text-[#7B1123] transition-colors shrink-0"
              >
                <Phone className="h-4 w-4 text-[#7B1123] shrink-0" />
                <span>{CONVENOR.phone}</span>
              </a>
            </div>

            {/* Co-Convenors Grid */}
            <div className="mt-8 pt-6 border-t border-[#E7E0D6]">
              <div className="flex items-center gap-2 mb-4">
                <Users2 className="h-4 w-4 text-[#7B1123]" />
                <span className="font-heading text-sm font-bold text-[#1C1917] uppercase tracking-wider">
                  Co-Convenors
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ORGANISING_STRUCTURE.coConvenors.map((c, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-3 flex items-center gap-3 hover:border-[#7B1123]/40 transition-colors"
                  >
                    <div className="h-12 w-12 shrink-0 rounded-full p-0.5 bg-gradient-to-tr from-[#7B1123]/40 to-[#BF982E]/40 shadow-xs">
                      <img
                        src={c.photo}
                        alt={c.name}
                        className="h-full w-full rounded-full object-cover bg-white"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="font-heading text-sm font-bold text-[#1C1917] block truncate">
                        {c.name}
                      </span>
                      <span className="text-[11px] text-[#57534E] block">
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
            <div className="rounded-3xl border border-[#E7E0D6] bg-white p-6 sm:p-8 shadow-md">
              <div className="flex items-center justify-between border-b border-[#E7E0D6] pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-[#7B1123]" />
                  <h3 className="font-heading text-xl font-bold text-[#1C1917]">
                    Advisory Committee
                  </h3>
                </div>
                <span className="rounded-full bg-[#BF982E]/15 border border-[#BF982E]/30 px-3 py-0.5 text-xs font-mono font-bold text-[#BF982E]">
                  IITs & NITs
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-6 font-subheading">
                Prominent academic leaders guiding multidisciplinary research track standards, review integrity, and keynote sessions for ETIMS 2027.
              </p>

              <div className="space-y-3">
                {ADVISORY_COMMITTEE.map((member, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3.5 rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-3 hover:border-[#7B1123]/40 transition-colors"
                  >
                    <div className="h-12 w-12 shrink-0 rounded-full p-0.5 bg-gradient-to-tr from-[#7B1123]/40 to-[#BF982E]/40 shadow-xs">
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="h-full w-full rounded-full object-cover bg-white"
                        />
                      ) : (
                        <div className="h-full w-full rounded-full bg-white flex items-center justify-center font-mono text-xs font-bold text-[#7B1123]">
                          {i + 1}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <strong className="text-[#1C1917] font-bold text-sm">
                          {member.name}
                        </strong>
                        <span className="text-xs font-mono text-[#7B1123] shrink-0 font-bold">
                          {member.institution}
                        </span>
                      </div>
                      <span className="text-xs text-[#57534E] block mt-0.5">
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

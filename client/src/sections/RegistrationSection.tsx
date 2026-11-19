import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import { REGISTRATION_CATEGORIES, REGISTRATION_TERMS } from '../utils/constants';

export default function RegistrationSection() {
  return (
    <section id="registration" className="relative py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E7E0D6] overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#BF982E]/8 blur-[140px]" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            tag="06 // Registration Tiers"
            title="Registration Fees & Delegate Categories"
            subtitle="Official early and regular registration fee schedule for ETIMS 2027 (INR)"
            align="left"
            className="mb-0 md:mb-0"
          />

          <div className="inline-flex items-center gap-2 rounded-xl bg-white border border-[#BF982E]/40 px-4 py-2.5 text-xs text-[#57534E] shrink-0 shadow-xs">
            <Calendar className="h-4 w-4 text-[#7B1123] shrink-0" />
            <span>
              Early: <strong className="text-[#7B1123] font-bold">{REGISTRATION_TERMS.earlyDeadline}</strong> &bull; Final: <strong className="text-[#BF982E] font-bold">{REGISTRATION_TERMS.finalDeadline}</strong>
            </span>
          </div>
        </div>

        {/* High-Contrast Category Comparison Rows */}
        <div className="divide-y divide-[#E7E0D6] rounded-3xl border border-[#E7E0D6] bg-white overflow-hidden shadow-sm">
          {/* Table Header Bar matching brochure */}
          <div className="bg-[#7B1123] px-6 sm:px-8 py-3.5 text-white flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider">
            <span>Category & Eligibility Scope</span>
            <span className="hidden sm:inline">Early / Regular (INR)</span>
          </div>

          {REGISTRATION_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-[#FAF8F5] transition-colors"
            >
              <div className="lg:max-w-2xl">
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="rounded-full bg-[#7B1123]/10 border border-[#7B1123]/30 px-3 py-0.5 text-[10px] font-mono font-bold text-[#7B1123] uppercase tracking-wider">
                    {cat.badge}
                  </span>
                  <span className="text-[#E7E0D6]">&bull;</span>
                  <span className="font-mono text-xs text-[#57534E]">
                    CATEGORY 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1C1917]">
                  {cat.category}
                </h3>

                <p className="mt-1.5 text-sm sm:text-base text-[#57534E] leading-relaxed font-subheading">
                  {cat.scope}
                </p>
              </div>

              <div className="shrink-0 flex items-center lg:flex-col lg:items-end justify-between lg:justify-center border-t lg:border-t-0 border-[#E7E0D6] pt-4 lg:pt-0 gap-4">
                <div className="flex items-center gap-3 text-right">
                  <div className="rounded-xl border border-[#7B1123]/30 bg-[#FAF8F5] px-4 py-2 text-center shadow-xs">
                    <span className="text-[10px] font-mono text-[#7B1123] uppercase block font-bold">
                      Early (INR)
                    </span>
                    <span className="font-heading text-lg sm:text-xl font-black text-[#7B1123]">
                      {cat.earlyFormatted}
                    </span>
                  </div>

                  <div className="rounded-xl border border-[#E7E0D6] bg-white px-4 py-2 text-center shadow-xs">
                    <span className="text-[10px] font-mono text-[#57534E] uppercase block font-semibold">
                      Regular (INR)
                    </span>
                    <span className="font-heading text-lg sm:text-xl font-bold text-[#1C1917]">
                      {cat.regularFormatted}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inclusions & Payment Advisory */}
        <div className="mt-8 rounded-2xl border border-[#BF982E]/40 bg-white p-6 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-[#7B1123] font-bold text-sm">
            <CheckCircle2 className="h-4.5 w-4.5 text-[#BF982E]" />
            <span>Registration Entitlements</span>
          </div>
          <p className="text-sm text-[#57534E] leading-relaxed font-subheading">
            {REGISTRATION_TERMS.inclusions}
          </p>
          <div className="pt-2 text-xs font-mono text-[#7B1123] font-semibold flex flex-wrap items-center gap-4 border-t border-[#E7E0D6]">
            <span>&bull; Early Registration: {REGISTRATION_TERMS.earlyDeadline}</span>
            <span>&bull; Final Registration: {REGISTRATION_TERMS.finalDeadline}</span>
            <span className="text-[#57534E]">&bull; {REGISTRATION_TERMS.publicationNote}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

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
    <section id="registration" className="relative py-24 md:py-32 bg-[#07131F] border-b border-border-dark overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan/6 blur-[140px]" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            tag="06 // Registration Tiers"
            title="Registration Fees & Delegate Categories"
            subtitle="Official early and regular registration fee schedule for ETIMS 2027"
            align="left"
            className="mb-0 md:mb-0"
          />

          <div className="inline-flex items-center gap-2 rounded-xl bg-navy border border-cyan/30 px-4 py-2.5 text-xs text-secondary-text shrink-0 backdrop-blur-md">
            <Calendar className="h-4 w-4 text-cyan shrink-0" />
            <span>
              Early: <strong className="text-cyan font-semibold">{REGISTRATION_TERMS.earlyDeadline}</strong> &bull; Final: <strong className="text-mint font-semibold">{REGISTRATION_TERMS.finalDeadline}</strong>
            </span>
          </div>
        </div>

        {/* High-Contrast Category Comparison Rows */}
        <div className="divide-y divide-border-dark/80 rounded-3xl border border-border-dark bg-navy/60 backdrop-blur-md overflow-hidden shadow-2xl">
          {REGISTRATION_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-navy/90 transition-colors"
            >
              <div className="lg:max-w-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs font-bold text-cyan uppercase tracking-wider">
                    {cat.badge}
                  </span>
                  <span className="text-border-dark">•</span>
                  <span className="font-mono text-xs text-secondary-text">
                    CATEGORY 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-light-text">
                  {cat.category}
                </h3>

                <p className="mt-2 text-sm sm:text-base text-secondary-text leading-relaxed">
                  {cat.scope}
                </p>
              </div>

              <div className="shrink-0 flex items-center lg:flex-col lg:items-end justify-between lg:justify-center border-t lg:border-t-0 border-border-dark/60 pt-4 lg:pt-0 gap-4">
                <div className="flex items-center gap-4 text-right">
                  <div className="rounded-xl border border-cyan/40 bg-midnight/90 px-4 py-2 text-center">
                    <span className="text-[10px] font-mono text-cyan uppercase block font-semibold">
                      Early (INR)
                    </span>
                    <span className="font-heading text-lg sm:text-xl font-black text-light-text text-glow-cyan">
                      {cat.earlyFormatted}
                    </span>
                  </div>

                  <div className="rounded-xl border border-border-dark bg-midnight/70 px-4 py-2 text-center">
                    <span className="text-[10px] font-mono text-secondary-text uppercase block font-semibold">
                      Regular (INR)
                    </span>
                    <span className="font-heading text-lg sm:text-xl font-bold text-secondary-text">
                      {cat.regularFormatted}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inclusions & Payment Advisory */}
        <div className="mt-10 rounded-2xl border border-cyan/25 bg-navy/50 p-6 backdrop-blur-xs space-y-3">
          <div className="flex items-center gap-2 text-cyan font-bold text-sm">
            <CheckCircle2 className="h-4.5 w-4.5 text-mint" />
            <span>Registration Entitlements</span>
          </div>
          <p className="text-sm text-secondary-text leading-relaxed">
            {REGISTRATION_TERMS.inclusions}
          </p>
          <div className="pt-2 text-xs font-mono text-cyan/90 flex flex-wrap items-center gap-4 border-t border-border-dark/50">
            <span>&bull; Early Registration: {REGISTRATION_TERMS.earlyDeadline}</span>
            <span>&bull; Final Registration: {REGISTRATION_TERMS.finalDeadline}</span>
            <span>&bull; Currency: {REGISTRATION_TERMS.currency}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { motion } from 'framer-motion';
import {
  ShieldAlert,
  Info,
} from 'lucide-react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import { REGISTRATION_CATEGORIES } from '../utils/constants';

export default function RegistrationSection() {
  return (
    <section id="registration" className="relative py-24 md:py-32 bg-[#07131F] border-b border-border-dark overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan/6 blur-[140px]" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            tag="06 // Registration Tiers"
            title="Registration & Delegate Categories"
            subtitle="Author, scholar, and attendee participation categories for ETIMS 2027"
            align="left"
            className="mb-0 md:mb-0"
          />

          <div className="inline-flex items-center gap-2 rounded-xl bg-navy border border-cyan/30 px-4 py-2.5 text-xs text-secondary-text shrink-0 backdrop-blur-md">
            <Info className="h-4 w-4 text-cyan shrink-0" />
            <span>
              Official registration tariff circular pending Technical Committee release
            </span>
          </div>
        </div>

        {/* Simplified, High-Contrast Category Comparison Rows (No boxy 4-card grid!) */}
        <div className="divide-y divide-border-dark/80 rounded-3xl border border-border-dark bg-navy/60 backdrop-blur-md overflow-hidden">
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
                    TIER 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-light-text">
                  {cat.category}
                </h3>

                <p className="mt-2 text-sm sm:text-base text-secondary-text leading-relaxed">
                  {cat.scope}
                </p>
              </div>

              <div className="shrink-0 flex items-center lg:flex-col lg:items-end justify-between lg:justify-center border-t lg:border-t-0 border-border-dark/60 pt-4 lg:pt-0">
                <span className="font-mono text-xs uppercase tracking-wider text-secondary-text block">
                  Delegate Tariff
                </span>
                <div className="mt-1 flex items-center gap-2">
                  <span className="font-heading font-extrabold text-lg sm:text-xl text-cyan text-glow-cyan">
                    TBA
                  </span>
                  <span className="rounded-md bg-midnight border border-border-dark px-2.5 py-1 text-xs font-mono text-mint">
                    Circular Pending
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Financial Security Advisory */}
        <div className="mt-12 rounded-2xl border border-cyan/25 bg-navy/50 p-5.5 backdrop-blur-xs flex items-start gap-4">
          <ShieldAlert className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
          <div className="text-sm text-secondary-text leading-relaxed">
            <strong className="text-light-text font-semibold">Financial Security Advisory:</strong> Official delegate tariffs, early-bird rates, and authorized institutional bank accounts have <strong className="text-cyan">not been issued</strong>. Official registration will only open after formal notification on this website by the Convenor Secretariat. Do not transfer funds or entertain unverified payment requests.
          </div>
        </div>
      </Container>
    </section>
  );
}

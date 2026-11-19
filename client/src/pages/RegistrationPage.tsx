import { CreditCard, CheckCircle2, ArrowRight, Calendar } from 'lucide-react';
import Container from '../components/common/Container';
import { REGISTRATION_CATEGORIES, REGISTRATION_TERMS, CONVENOR } from '../utils/constants';

const INCLUSIONS = [
  'Access to all Keynote Lectures & Parallel Technical Sessions',
  'Presentation Slot for Accepted Papers (Oral / Poster)',
  'Official ETIMS 2027 Conference Delegate Materials & Welcome Kit',
  'Mid-session Refreshments, High Tea & Working Lunch during both conference days',
  'Applicable Certificate of Paper Presentation / Participation',
  'Interaction with Industry Delegates, Academic Chairs & Panelists',
];

export default function RegistrationPage() {
  return (
    <div className="relative min-h-screen bg-midnight text-light-text py-12 sm:py-16 overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-10 left-1/4 h-96 w-96 rounded-full bg-cyan/10 blur-[140px]" />

      <Container className="relative z-10">
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-navy/80 px-4 py-1.5 text-xs font-mono font-semibold text-cyan mb-4 glow-cyan-sm">
            <CreditCard className="h-3.5 w-3.5" />
            <span>Delegate Registration & Tariff Schedule</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-light-text">
            Registration Fees & <span className="text-cyan text-glow-cyan">Delegate Categories</span>
          </h1>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-secondary-text leading-relaxed">
            ETIMS 2027 welcomes researchers, faculty, industry professionals, and students across eight disciplines. Review the official early-bird and regular fee tariff below.
          </p>
        </div>

        {/* Important Deadlines Callout */}
        <div className="mb-10 rounded-2xl border border-cyan/30 bg-navy/70 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-cyan shrink-0" />
            <div className="text-xs sm:text-sm">
              <span className="text-secondary-text">Early Registration Deadline: </span>
              <strong className="text-cyan font-bold">{REGISTRATION_TERMS.earlyDeadline}</strong>
              <span className="mx-2 text-border-dark">|</span>
              <span className="text-secondary-text">Final Registration Deadline: </span>
              <strong className="text-mint font-bold">{REGISTRATION_TERMS.finalDeadline}</strong>
            </div>
          </div>
          <span className="text-xs font-mono text-cyan bg-cyan/10 border border-cyan/30 rounded-lg px-3 py-1">
            Currency: INR (₹)
          </span>
        </div>

        {/* Categories Table / Cards */}
        <div className="overflow-hidden rounded-3xl border border-border-dark bg-navy/60 backdrop-blur-md shadow-2xl">
          <div className="hidden lg:grid grid-cols-12 gap-4 px-8 py-4 bg-midnight/80 border-b border-border-dark text-xs font-mono font-bold text-cyan uppercase tracking-wider">
            <div className="col-span-5">Category & Scope</div>
            <div className="col-span-3 text-center">Early Fee (by 20 June 2027)</div>
            <div className="col-span-3 text-center">Regular Fee (by 10 July 2027)</div>
            <div className="col-span-1 text-right">Badge</div>
          </div>

          <div className="divide-y divide-border-dark/60">
            {REGISTRATION_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 lg:px-8 lg:py-6 grid lg:grid-cols-12 gap-4 items-center hover:bg-navy/90 transition-colors"
              >
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-2 lg:hidden mb-2">
                    <span className="rounded-full bg-cyan/15 border border-cyan/30 px-2.5 py-0.5 text-[10px] font-mono font-bold text-cyan">
                      {cat.badge}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-light-text">
                    {cat.category}
                  </h3>
                  <p className="mt-1 text-xs text-secondary-text leading-relaxed">
                    {cat.scope}
                  </p>
                </div>

                <div className="lg:col-span-3 flex lg:justify-center items-center justify-between border-t lg:border-t-0 border-border-dark/40 pt-3 lg:pt-0">
                  <span className="lg:hidden text-xs font-mono text-secondary-text">Early Fee:</span>
                  <div className="rounded-xl border border-cyan/40 bg-midnight/90 px-4 py-2 text-center">
                    <span className="font-heading text-lg font-black text-light-text text-glow-cyan">
                      {cat.earlyFormatted}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-3 flex lg:justify-center items-center justify-between border-t lg:border-t-0 border-border-dark/40 pt-3 lg:pt-0">
                  <span className="lg:hidden text-xs font-mono text-secondary-text">Regular Fee:</span>
                  <div className="rounded-xl border border-border-dark bg-midnight/70 px-4 py-2 text-center">
                    <span className="font-heading text-lg font-bold text-secondary-text">
                      {cat.regularFormatted}
                    </span>
                  </div>
                </div>

                <div className="hidden lg:flex col-span-1 justify-end">
                  <span className="rounded-full bg-cyan/15 border border-cyan/30 px-2.5 py-0.5 text-[10px] font-mono font-bold text-cyan text-right">
                    {cat.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delegate Entitlements & Inclusions */}
        <div className="mt-12 rounded-3xl border border-cyan/40 bg-navy/80 p-6 sm:p-8 backdrop-blur-md space-y-6">
          <div className="flex items-center gap-2.5 text-cyan">
            <CheckCircle2 className="h-5 w-5" />
            <h3 className="font-heading text-xl font-bold text-light-text">
              Delegate Registration Inclusions
            </h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUSIONS.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 rounded-2xl border border-border-dark bg-midnight/70 p-3.5 text-xs text-secondary-text"
              >
                <CheckCircle2 className="h-4 w-4 text-mint shrink-0 mt-0.5" />
                <span className="text-light-text font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-border-dark text-xs text-secondary-text leading-relaxed">
            <p>
              <strong className="text-light-text">Official Note:</strong> {REGISTRATION_TERMS.inclusions}
            </p>
          </div>
        </div>

        {/* Registration Support Desk */}
        <div className="mt-8 rounded-2xl border border-border-dark bg-navy/60 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-secondary-text">
            <span>For group registration queries or institutional facilitation, contact the Convenor Secretariat.</span>
          </div>
          <a
            href={`mailto:${CONVENOR.email}?subject=ETIMS%202027%20Registration%20Inquiry`}
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary-teal to-cyan px-5 py-2.5 text-xs font-bold text-midnight shadow-md glow-cyan-sm shrink-0"
          >
            <span>Contact Secretariat</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </Container>
    </div>
  );
}

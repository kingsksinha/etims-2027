import { CreditCard, CheckCircle2, ArrowRight } from 'lucide-react';
import Container from '../components/common/Container';
import { REGISTRATION_CATEGORIES, CONVENOR } from '../utils/constants';

const INCLUSIONS = [
  'Access to all Plenary Keynotes & Technical Paper Sessions',
  'Official ETIMS 2027 Conference Delegate Welcome Kit',
  'Mid-session High Tea, Working Lunch & Banquet Dinner',
  'Presentation Slot & Certificate of Paper Presentation',
  'Publication inclusion in Conference Proceedings',
  'Campus Wi-Fi & Technical Exhibition Access',
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
            <span>Delegate Registration & Participation</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-light-text">
            Registration & <span className="text-cyan text-glow-cyan">Delegate Categories</span>
          </h1>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-secondary-text leading-relaxed">
            Review delegate categories, conference package inclusions, and registration procedures for ETIMS 2027 at Netaji Subhas Institute of Technology, Bihta, Patna.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {REGISTRATION_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-3xl border border-border-dark bg-navy/70 p-6 backdrop-blur-md hover:border-cyan/40 hover:shadow-xl transition-all"
            >
              <div>
                <span className="rounded-full bg-cyan/15 border border-cyan/30 px-2.5 py-0.5 text-[10px] font-mono font-bold text-cyan">
                  {cat.badge}
                </span>

                <h3 className="font-heading text-lg font-bold text-light-text mt-3">
                  {cat.category}
                </h3>

                <p className="mt-2 text-xs text-secondary-text leading-relaxed">
                  {cat.scope}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border-dark">
                <span className="text-[10px] font-mono uppercase text-mint block">Fee Status</span>
                <p className="font-heading text-xs font-semibold text-light-text mt-0.5">
                  {cat.feeStatus}
                </p>
              </div>
            </div>
          ))}
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
        </div>

        {/* Registration Support Desk */}
        <div className="mt-8 rounded-2xl border border-border-dark bg-navy/60 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-secondary-text">
            <span>Official fee notifications and payment bank details will be communicated with the CFP circular.</span>
          </div>
          <a
            href={`mailto:${CONVENOR.email}?subject=ETIMS%202027%20Registration%20Inquiry`}
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary-teal to-cyan px-5 py-2.5 text-xs font-bold text-midnight shadow-md glow-cyan-sm shrink-0"
          >
            <span>Contact Registration Desk</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </Container>
    </div>
  );
}

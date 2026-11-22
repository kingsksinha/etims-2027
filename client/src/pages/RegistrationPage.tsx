import { useState, useEffect } from 'react';
import { CreditCard, CheckCircle2, ArrowRight, Calendar, Sparkles, QrCode } from 'lucide-react';
import Container from '../components/common/Container';
import DelegateRegistrationModal from '../components/modals/DelegateRegistrationModal';
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
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Faculty');
  const [recentPasses, setRecentPasses] = useState<Array<{ delegateId: string; fullName: string; category: string; registeredAt: string }>>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('etims_delegates');
      if (stored) {
        setRecentPasses(JSON.parse(stored));
      }
    } catch {
      // Ignore storage errors
    }
  }, [modalOpen]);

  const handleOpenModal = (catName: string) => {
    setSelectedCategory(catName);
    setModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#1C1917] py-12 sm:py-16 overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-10 left-1/4 h-96 w-96 rounded-full bg-[#BF982E]/10 blur-[140px]" />

      <Container className="relative z-10">
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7B1123]/30 bg-[#7B1123]/10 px-4 py-1.5 text-xs font-mono font-semibold text-[#7B1123] mb-4">
            <CreditCard className="h-3.5 w-3.5" />
            <span>Delegate Registration & Tariff Schedule</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1C1917]">
                Registration Fees & <span className="text-[#7B1123]">Delegate Categories</span>
              </h1>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#57534E] leading-relaxed">
                ETIMS 2027 welcomes researchers, faculty, industry professionals, and students across eight disciplines. Review the official early-bird tariff and register your delegate seat online.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleOpenModal('Faculty / Academicians')}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#7B1123] hover:bg-[#5C1324] px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all shrink-0 cursor-pointer self-start lg:self-center"
            >
              <Sparkles className="h-4 w-4 text-[#F3D993]" />
              <span>Register as Delegate Online</span>
            </button>
          </div>
        </div>

        {/* Important Deadlines Callout */}
        <div className="mb-10 rounded-2xl border border-[#E7E0D6] bg-white p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-[#7B1123] shrink-0" />
            <div className="text-xs sm:text-sm">
              <span className="text-[#57534E]">Early Registration Deadline: </span>
              <strong className="text-[#7B1123] font-bold">{REGISTRATION_TERMS.earlyDeadline}</strong>
              <span className="mx-2 text-[#E7E0D6]">|</span>
              <span className="text-[#57534E]">Final Registration Deadline: </span>
              <strong className="text-[#BF982E] font-bold">{REGISTRATION_TERMS.finalDeadline}</strong>
            </div>
          </div>
          <span className="text-xs font-mono text-[#7B1123] bg-[#7B1123]/10 border border-[#7B1123]/25 rounded-lg px-3 py-1 font-semibold">
            Currency: INR (₹)
          </span>
        </div>

        {/* Categories Table / Cards */}
        <div className="overflow-hidden rounded-3xl border border-[#E7E0D6] bg-white shadow-md">
          <div className="hidden lg:grid grid-cols-12 gap-4 px-8 py-4 bg-[#5C1324] text-white text-xs font-mono font-bold uppercase tracking-wider">
            <div className="col-span-5">Category & Scope</div>
            <div className="col-span-3 text-center">Early Fee (by 20 June 2027)</div>
            <div className="col-span-3 text-center">Regular Fee (by 10 July 2027)</div>
            <div className="col-span-1 text-right">Badge</div>
          </div>

          <div className="divide-y divide-[#E7E0D6]">
            {REGISTRATION_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 lg:px-8 lg:py-6 grid lg:grid-cols-12 gap-4 items-center hover:bg-[#FAF8F5] transition-colors"
              >
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-2 lg:hidden mb-2">
                    <span className="rounded-full bg-[#7B1123]/10 border border-[#7B1123]/25 px-2.5 py-0.5 text-[10px] font-mono font-bold text-[#7B1123]">
                      {cat.badge}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#1C1917]">
                    {cat.category}
                  </h3>
                  <p className="mt-1 text-xs text-[#57534E] leading-relaxed">
                    {cat.scope}
                  </p>
                </div>

                <div className="lg:col-span-3 flex lg:justify-center items-center justify-between border-t lg:border-t-0 border-[#E7E0D6] pt-3 lg:pt-0">
                  <span className="lg:hidden text-xs font-mono text-[#57534E]">Early Fee:</span>
                  <div className="rounded-xl border border-[#7B1123]/30 bg-[#7B1123]/5 px-4 py-2 text-center">
                    <span className="font-heading text-lg font-black text-[#7B1123]">
                      {cat.earlyFormatted}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-3 flex lg:justify-center items-center justify-between border-t lg:border-t-0 border-[#E7E0D6] pt-3 lg:pt-0">
                  <span className="lg:hidden text-xs font-mono text-[#57534E]">Regular Fee:</span>
                  <div className="rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] px-4 py-2 text-center">
                    <span className="font-heading text-lg font-bold text-[#57534E]">
                      {cat.regularFormatted}
                    </span>
                  </div>
                </div>

                <div className="hidden lg:flex col-span-1 justify-end">
                  <button
                    type="button"
                    onClick={() => handleOpenModal(cat.category)}
                    className="rounded-xl bg-[#7B1123] hover:bg-[#5C1324] px-3.5 py-1.5 text-[11px] font-mono font-bold text-white shadow-xs transition-all cursor-pointer whitespace-nowrap"
                  >
                    Register &rarr;
                  </button>
                </div>

                <div className="lg:hidden col-span-12 pt-2">
                  <button
                    type="button"
                    onClick={() => handleOpenModal(cat.category)}
                    className="w-full rounded-xl bg-[#7B1123] hover:bg-[#5C1324] py-2 text-xs font-mono font-bold text-white shadow-xs transition-all cursor-pointer text-center"
                  >
                    Register as {cat.badge} &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Passes Banner (If any) */}
        {recentPasses.length > 0 && (
          <div className="mt-8 rounded-2xl border border-[#BF982E]/40 bg-[#FAF8F5] p-5 shadow-xs">
            <div className="flex items-center justify-between mb-3 border-b border-[#E7E0D6] pb-2">
              <span className="font-mono text-xs font-bold uppercase text-[#7B1123] flex items-center gap-1.5">
                <QrCode className="h-4 w-4 text-[#7B1123]" />
                <span>Recent Delegate Passes Issued on this Device</span>
              </span>
              <span className="text-[10px] font-mono text-[#BF982E] font-bold">
                {recentPasses.length} Confirmed Seat(s)
              </span>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-2 md:grid-cols-3">
              {recentPasses.map((pass, i) => (
                <div key={i} className="rounded-xl border border-[#E7E0D6] bg-white p-3 shadow-2xs">
                  <span className="font-mono text-[10px] text-[#7B1123] font-bold block">
                    {pass.delegateId}
                  </span>
                  <p className="font-heading text-xs font-bold text-[#1C1917] mt-0.5 truncate">
                    {pass.fullName}
                  </p>
                  <span className="text-[10px] text-[#57534E] block">
                    {pass.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Delegate Entitlements & Inclusions */}
        <div className="mt-12 rounded-3xl border border-[#E7E0D6] bg-white p-6 sm:p-8 space-y-6 shadow-md">
          <div className="flex items-center gap-2.5 text-[#7B1123]">
            <CheckCircle2 className="h-5 w-5" />
            <h3 className="font-heading text-xl font-bold text-[#1C1917]">
              Delegate Registration Inclusions
            </h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUSIONS.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-3.5 text-xs text-[#57534E]"
              >
                <CheckCircle2 className="h-4 w-4 text-[#BF982E] shrink-0 mt-0.5" />
                <span className="text-[#1C1917] font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E7E0D6] text-xs text-[#57534E] leading-relaxed">
            <p>
              <strong className="text-[#1C1917]">Official Note:</strong> {REGISTRATION_TERMS.inclusions}
            </p>
          </div>
        </div>

        {/* Registration Support Desk */}
        <div className="mt-8 rounded-2xl border border-[#E7E0D6] bg-white p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-xs text-[#57534E]">
            <span>For group registration queries or institutional facilitation, contact the Convenor Secretariat.</span>
          </div>
          <a
            href={`mailto:${CONVENOR.email}?subject=ETIMS%202027%20Registration%20Inquiry`}
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#7B1123] hover:bg-[#5C1324] px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all shrink-0"
          >
            <span>Contact Secretariat</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </Container>

      {/* Interactive Delegate Pass Generator Modal */}
      <DelegateRegistrationModal
        key={`${selectedCategory}-${modalOpen}`}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCategory={selectedCategory}
      />
    </div>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CreditCard,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Download,
  Copy,
  Check,
  QrCode,
  Sparkles,
  Mail,
} from 'lucide-react';
import {
  REGISTRATION_CATEGORIES,
  CONFERENCE,
  HOST_INSTITUTION,
  CONVENOR,
} from '../../utils/constants';

interface DelegateRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

interface SubmittedDelegateRecord {
  delegateId: string;
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  category: string;
  badge: string;
  feeAmount: string;
  presentationType: string;
  paymentMode: string;
  registeredAt: string;
}

const matchCategoryIndex = (catName?: string): number => {
  if (!catName) return 0;
  const target = catName.toLowerCase().trim();
  const found = REGISTRATION_CATEGORIES.findIndex((c) => {
    const cName = c.category.toLowerCase();
    const bName = c.badge.toLowerCase();
    return (
      cName === target ||
      cName.includes(target) ||
      target.includes(cName) ||
      bName === target ||
      bName.includes(target) ||
      target.includes(bName)
    );
  });
  return found !== -1 ? found : 0;
};

export default function DelegateRegistrationModal({
  isOpen,
  onClose,
  defaultCategory,
}: DelegateRegistrationModalProps) {
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<number>(() =>
    matchCategoryIndex(defaultCategory)
  );

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [institution, setInstitution] = useState('');
  const [presentationType, setPresentationType] = useState<'presenting' | 'attendee'>('presenting');
  const [paymentMode, setPaymentMode] = useState<'upi' | 'neft' | 'desk'>('upi');
  const [termsAgreed, setTermsAgreed] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('Processing registration...');
  const [submittedRecord, setSubmittedRecord] = useState<SubmittedDelegateRecord | null>(null);
  const [copied, setCopied] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Automatically synchronize selected category whenever modal opens or defaultCategory changes
  useEffect(() => {
    if (isOpen) {
      if (defaultCategory) {
        setSelectedCategoryIdx(matchCategoryIndex(defaultCategory));
      }
      setValidationError(null);
    }
  }, [isOpen, defaultCategory]);

  // Lock background body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
      };
    }
  }, [isOpen]);

  const selectedCat = REGISTRATION_CATEGORIES[selectedCategoryIdx] || REGISTRATION_CATEGORIES[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (!fullName.trim() || !email.trim() || !institution.trim()) {
      setValidationError('Please complete all required fields.');
      return;
    }

    if (!termsAgreed) {
      setValidationError('Please confirm acceptance of conference registration terms.');
      return;
    }

    setSubmitting(true);
    setStatusMessage('Validating delegate credentials...');
    await new Promise((r) => setTimeout(r, 600));

    setStatusMessage('Allocating delegate quota & conference seat...');
    await new Promise((r) => setTimeout(r, 600));

    setStatusMessage('Generating official ETIMS 2027 Delegate Pass...');
    await new Promise((r) => setTimeout(r, 700));

    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const categoryCode = selectedCat.badge.replace(/[^A-Z]/g, '').slice(0, 3) || 'DEL';
    const delegateId = `ETIMS27-${categoryCode}-${randomDigits}`;

    const newRecord: SubmittedDelegateRecord = {
      delegateId,
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      institution: institution.trim(),
      category: selectedCat.category,
      badge: selectedCat.badge,
      feeAmount: selectedCat.earlyFormatted,
      presentationType:
        presentationType === 'presenting' ? 'Presenting Author (Oral / Poster)' : 'Attendee Observer',
      paymentMode:
        paymentMode === 'upi'
          ? 'Online Verification (Instant Pass)'
          : paymentMode === 'neft'
          ? 'Institutional NEFT / RTGS'
          : 'Payment at NSIT Registration Desk',
      registeredAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    // Save to localStorage
    try {
      const stored = localStorage.getItem('etims_delegates');
      const list = stored ? JSON.parse(stored) : [];
      list.unshift(newRecord);
      localStorage.setItem('etims_delegates', JSON.stringify(list));
    } catch {
      // Ignore storage errors
    }

    setSubmitting(false);
    setSubmittedRecord(newRecord);
  };

  const copyDelegateId = () => {
    if (submittedRecord) {
      navigator.clipboard.writeText(submittedRecord.delegateId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const downloadPass = () => {
    if (!submittedRecord) return;

    const passContent = [
      '========================================================================',
      '          ETIMS 2027 - OFFICIAL CONFERENCE DELEGATE PASS',
      '    Netaji Subhas Institute of Technology (NSIT), Bihta, Patna, Bihar',
      '========================================================================',
      '',
      `DELEGATE PASS ID      : ${submittedRecord.delegateId}`,
      `DATE OF ISSUE         : ${submittedRecord.registeredAt} (IST)`,
      `CONFERENCE DATES      : ${CONFERENCE.dateDisplay}`,
      `VENUE LOCATION        : ${HOST_INSTITUTION.name}, ${HOST_INSTITUTION.location}`,
      '',
      '------------------------------------------------------------------------',
      'DELEGATE IDENTIFICATION:',
      '------------------------------------------------------------------------',
      `Full Name             : ${submittedRecord.fullName}`,
      `Affiliated Institute  : ${submittedRecord.institution}`,
      `Email Address         : ${submittedRecord.email}`,
      `Contact Phone         : ${submittedRecord.phone || 'Not Provided'}`,
      `Category Tier         : ${submittedRecord.category} (${submittedRecord.badge})`,
      `Registration Tariff   : ${submittedRecord.feeAmount} (Early Bird)`,
      `Role                  : ${submittedRecord.presentationType}`,
      `Payment Verification  : ${submittedRecord.paymentMode}`,
      '',
      '------------------------------------------------------------------------',
      'OFFICIAL DELEGATE ENTITLEMENTS:',
      '------------------------------------------------------------------------',
      '1. Entry to all Keynote Lectures, Plenary Halls & Parallel Paper Sessions.',
      '2. Official Delegate Presentation Slot (if presenting author).',
      '3. Official ETIMS 2027 Conference Kit & Delegate Badge.',
      '4. Working Lunch, Mid-session Refreshments & High Tea (23–24 July 2027).',
      '5. Applicable Certificate of Paper Presentation / Participation.',
      '',
      '------------------------------------------------------------------------',
      'SECRETARIAT DESK CONTACT:',
      `Convenor : ${CONVENOR.name}, Assistant Professor, Dept. of Civil Engineering`,
      `Email    : ${CONVENOR.email}`,
      `Phone    : ${CONVENOR.phone}`,
      '========================================================================',
    ].join('\r\n');

    const blob = new Blob([passContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${submittedRecord.delegateId}_Pass.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    setSubmittedRecord(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setInstitution('');
    setTermsAgreed(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto overscroll-contain"
        role="dialog"
        aria-modal="true"
      >
        {/* Solid Dark Dimming Backdrop with High Blur to prevent background bleed */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          aria-hidden="true"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto overscroll-contain rounded-3xl border border-[#BF982E]/40 bg-white p-5 sm:p-8 shadow-2xl text-[#1C1917] my-auto z-10"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF8F5] text-[#57534E] hover:text-[#7B1123] border border-[#E7E0D6] transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>

          {/* SUCCESS SCREEN: OFFICIAL DELEGATE BADGE / PASS */}
          {submittedRecord ? (
            <div className="space-y-6 pt-2">
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 shadow-xs mb-3">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <span className="font-mono text-xs text-[#7B1123] font-bold uppercase tracking-wider block">
                  OFFICIAL DELEGATE REGISTRATION CONFIRMED
                </span>
                <h2 className="font-heading text-2xl font-black text-[#1C1917] mt-1">
                  Delegate Pass Generated
                </h2>
                <p className="text-xs text-[#57534E] mt-1 max-w-md mx-auto">
                  Your seat has been provisionally reserved for ETIMS 2027 at NSIT Bihta, Patna. Please download your pass or click below to email yourself a copy.
                </p>
              </div>

              {/* Conference Delegate Badge Card */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-[#BF982E] bg-gradient-to-b from-white via-[#FAF8F5] to-white p-5 sm:p-6 shadow-xl">
                {/* Badge Top Header */}
                <div className="flex items-center justify-between border-b border-[#E7E0D6] pb-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/assets/etims-logo.png"
                      alt="ETIMS Logo"
                      className="h-10 w-10 object-contain rounded-full border border-[#BF982E]/40 p-0.5 bg-white"
                    />
                    <div>
                      <h3 className="font-heading text-sm font-black text-[#7B1123]">
                        ETIMS 2027 &bull; DELEGATE PASS
                      </h3>
                      <span className="font-mono text-[10px] text-[#57534E] block">
                        Netaji Subhas Institute of Technology, Bihta, Patna
                      </span>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#7B1123] px-3 py-1 font-mono text-[10px] font-bold text-white shadow-xs">
                    {submittedRecord.badge}
                  </span>
                </div>

                {/* Badge Core Details */}
                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#78716C] block">
                      DELEGATE NAME
                    </span>
                    <h4 className="font-heading text-lg sm:text-xl font-bold text-[#1C1917]">
                      {submittedRecord.fullName}
                    </h4>
                    <p className="text-xs text-[#57534E] font-medium">
                      {submittedRecord.institution}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#E7E0D6]">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#78716C] block">
                        PASS ID
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#7B1123]">
                        {submittedRecord.delegateId}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#78716C] block">
                        TARIFF AMOUNT
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#BF982E]">
                        {submittedRecord.feeAmount}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#E7E0D6] text-xs">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#78716C] block">
                        ROLE
                      </span>
                      <span className="font-medium text-[#1C1917] text-[11px]">
                        {submittedRecord.presentationType}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#78716C] block">
                        DATES & VENUE
                      </span>
                      <span className="font-medium text-[#1C1917] text-[11px]">
                        23–24 July 2027 &bull; NSIT Bihta
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar: Barcode / QR Simulation */}
                <div className="mt-4 pt-3 border-t border-dashed border-[#E7E0D6] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <QrCode className="h-6 w-6 text-[#7B1123]" />
                    <span className="font-mono text-[9px] text-[#78716C]">
                      OFFICIAL PHYSICAL ACCESS PERMIT // AICTE & DST RECOGNIZED
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={copyDelegateId}
                    className="inline-flex items-center gap-1 font-mono text-[10px] text-[#7B1123] hover:underline cursor-pointer font-bold"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-600" />
                        <span className="text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy ID</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={downloadPass}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#7B1123] hover:bg-[#5C1324] px-5 py-3 text-xs font-bold text-white shadow-md transition-all cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Pass (.txt)</span>
                </button>

                <a
                  href={`mailto:${submittedRecord.email}?subject=${encodeURIComponent(`ETIMS 2027 Delegate Pass - ${submittedRecord.delegateId}`)}&body=${encodeURIComponent(
                    `========================================================================\n` +
                    `          ETIMS 2027 - OFFICIAL CONFERENCE DELEGATE PASS\n` +
                    `    Netaji Subhas Institute of Technology (NSIT), Bihta, Patna\n` +
                    `========================================================================\n\n` +
                    `DELEGATE PASS ID      : ${submittedRecord.delegateId}\n` +
                    `DELEGATE NAME         : ${submittedRecord.fullName}\n` +
                    `INSTITUTION           : ${submittedRecord.institution}\n` +
                    `CATEGORY              : ${submittedRecord.category}\n` +
                    `REGISTRATION TARIFF   : ${submittedRecord.feeAmount}\n` +
                    `ROLE / PARTICIPATION  : ${submittedRecord.presentationType}\n` +
                    `CONFERENCE DATES      : 23–24 July 2027 (Provisional)\n` +
                    `VENUE                 : NSIT Campus, Amhara, Bihta, Patna, Bihar\n` +
                    `PAYMENT STATUS        : Provisional Pass (Verification at Desk)\n\n` +
                    `CONFERENCE CONVENOR SECRETARIAT:\n` +
                    `Dr. Atif Hussain (Assistant Professor, Dept of Civil Engineering)\n` +
                    `Email: etims2027@nsiterp.in | Phone: +91 83402 58426\n`
                  )}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-[#7B1123]/30 bg-white hover:bg-[#FAF8F5] px-4 py-3 text-xs font-bold text-[#7B1123] transition-all cursor-pointer shadow-xs"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email Copy to Me</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-[#E7E0D6] bg-white hover:bg-[#FAF8F5] px-4 py-3 text-xs font-bold text-[#57534E] transition-all cursor-pointer"
                >
                  Register Another
                </button>
              </div>
            </div>
          ) : (
            /* REGISTRATION FORM */
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#7B1123]/10 border border-[#7B1123]/25 px-3 py-1 font-mono text-[10px] font-bold text-[#7B1123] mb-2">
                  <CreditCard className="h-3.5 w-3.5" />
                  <span>ETIMS 2027 DELEGATE REGISTRATION DESK</span>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-black text-[#1C1917]">
                  Register for ETIMS 2027 Summit
                </h2>
                <p className="text-xs text-[#57534E] mt-1">
                  Reserve your seat for physical participation on 23–24 July 2027 at NSIT Bihta, Patna.
                </p>
              </div>

              {validationError && (
                <div className="flex items-center gap-2 rounded-xl bg-red-50 border border-red-200 p-3 text-xs text-red-700">
                  <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Step 1: Select Delegate Category */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#78716C] mb-2 font-bold">
                  1. Select Registration Category:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {REGISTRATION_CATEGORIES.map((cat, idx) => {
                    const isSelected = idx === selectedCategoryIdx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedCategoryIdx(idx)}
                        className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#7B1123] bg-[#7B1123]/5 ring-1 ring-[#7B1123]'
                            : 'border-[#E7E0D6] bg-white hover:border-[#7B1123]/40'
                        }`}
                      >
                        <div className="min-w-0 pr-2">
                          <span className="font-heading text-xs font-bold text-[#1C1917] block truncate">
                            {cat.category}
                          </span>
                          <span className="text-[10px] font-mono text-[#57534E]">
                            {cat.badge}
                          </span>
                        </div>
                        <span className="font-heading font-black text-xs text-[#7B1123] shrink-0">
                          {cat.earlyFormatted}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Delegate Personal & Institutional Information */}
              <div className="space-y-3 pt-2 border-t border-[#E7E0D6]">
                <label className="block text-xs font-mono uppercase text-[#78716C] font-bold">
                  2. Delegate Information:
                </label>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] font-mono text-[#78716C] mb-1">
                      Full Name <span className="text-[#7B1123]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Dr. Priya Sharma"
                      className="w-full rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] px-3.5 py-2 text-xs text-[#1C1917] placeholder:text-[#A8A29E] focus:border-[#7B1123] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#78716C] mb-1">
                      Email Address <span className="text-[#7B1123]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. priya.sharma@college.edu.in"
                      className="w-full rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] px-3.5 py-2 text-xs text-[#1C1917] placeholder:text-[#A8A29E] focus:border-[#7B1123] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] font-mono text-[#78716C] mb-1">
                      Contact Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] px-3.5 py-2 text-xs text-[#1C1917] placeholder:text-[#A8A29E] focus:border-[#7B1123] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#78716C] mb-1">
                      Affiliated Institution / University <span className="text-[#7B1123]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      placeholder="e.g. IIT Patna / NIT / NSIT"
                      className="w-full rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] px-3.5 py-2 text-xs text-[#1C1917] placeholder:text-[#A8A29E] focus:border-[#7B1123] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Participation Scope & Payment Mode */}
              <div className="space-y-3 pt-2 border-t border-[#E7E0D6]">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#78716C] mb-1 font-bold">
                      Participation Mode:
                    </label>
                    <select
                      value={presentationType}
                      onChange={(e) => setPresentationType(e.target.value as 'presenting' | 'attendee')}
                      className="w-full rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] px-3 py-2 text-xs text-[#1C1917] focus:border-[#7B1123] focus:bg-white focus:outline-none"
                    >
                      <option value="presenting">Presenting Author (Oral / Poster)</option>
                      <option value="attendee">Non-Presenting Attendee / Co-Author</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#78716C] mb-1 font-bold">
                      Payment Verification:
                    </label>
                    <select
                      value={paymentMode}
                      onChange={(e) => setPaymentMode(e.target.value as 'upi' | 'neft' | 'desk')}
                      className="w-full rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] px-3 py-2 text-xs text-[#1C1917] focus:border-[#7B1123] focus:bg-white focus:outline-none"
                    >
                      <option value="upi">Instant UPI / Digital Verification (Demo)</option>
                      <option value="neft">NEFT / RTGS Institutional Transfer</option>
                      <option value="desk">Pay at NSIT Bihta Registration Desk</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 text-xs text-[#57534E] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={termsAgreed}
                    onChange={(e) => setTermsAgreed(e.target.checked)}
                    className="mt-0.5 rounded border-[#E7E0D6] text-[#7B1123] focus:ring-[#7B1123]"
                  />
                  <span>
                    I confirm my registration for ETIMS 2027 in physical mode and acknowledge that delegate entitlements include conference sessions, kit, and working lunch.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#7B1123] hover:bg-[#5C1324] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all cursor-pointer disabled:opacity-70"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>{statusMessage}</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 text-[#F3D993]" />
                      <span>Confirm & Generate Delegate Pass ({selectedCat.earlyFormatted})</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

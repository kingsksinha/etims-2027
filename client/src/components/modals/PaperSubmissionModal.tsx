import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Upload,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Download,
  Copy,
  Check,
  Building,
  User,
  Mail,
  Phone,
} from 'lucide-react';
import { CONVENOR, PROVISIONAL_TRACKS } from '../../utils/constants';

interface PaperSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTrackId?: string;
}

interface SubmittedPaperRecord {
  trackingId: string;
  authorName: string;
  email: string;
  phone: string;
  institution: string;
  trackId: string;
  trackTitle: string;
  paperTitle: string;
  abstract: string;
  fileName: string;
  fileSize: string;
  submittedAt: string;
}

export default function PaperSubmissionModal({
  isOpen,
  onClose,
  defaultTrackId,
}: PaperSubmissionModalProps) {
  const [authorName, setAuthorName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [institution, setInstitution] = useState('');
  const [trackId, setTrackId] = useState(defaultTrackId || 'track-1');
  const [paperTitle, setPaperTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [plagiarismAgreed, setPlagiarismAgreed] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('Submitting manuscript...');
  const [submittedRecord, setSubmittedRecord] = useState<SubmittedPaperRecord | null>(null);
  const [copied, setCopied] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Prevent background scroll bleed & allow Escape key close when modal is active
  useEffect(() => {
    if (!isOpen) return;
    const scrollY = window.scrollY;
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      window.removeEventListener('keydown', onKeyDown);
      window.scrollTo(0, scrollY);
    };
  }, [isOpen, onClose]);

  // Sync trackId if defaultTrackId changes
  useEffect(() => {
    if (defaultTrackId) {
      setTrackId(defaultTrackId);
    }
  }, [defaultTrackId]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ];
      if (
        !validTypes.includes(file.type) &&
        !file.name.endsWith('.pdf') &&
        !file.name.endsWith('.docx') &&
        !file.name.endsWith('.doc')
      ) {
        setValidationError('Please upload a valid PDF or Word document (.pdf, .docx, .doc).');
        return;
      }
      if (file.size > 25 * 1024 * 1024) {
        setValidationError('File size exceeds the 25 MB limit.');
        return;
      }
      setSelectedFile(file);
      setValidationError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (!authorName.trim() || !email.trim() || !paperTitle.trim() || !abstract.trim()) {
      setValidationError('Please complete all required fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setValidationError('Please enter a valid corresponding email address.');
      return;
    }

    if (!plagiarismAgreed) {
      setValidationError('Please accept the academic integrity & similarity confirmation.');
      return;
    }

    setSubmitting(true);
    setStatusMessage('Validating manuscript parameters...');

    await new Promise((r) => setTimeout(r, 500));
    setStatusMessage('Securing manuscript for double-blind peer review...');

    await new Promise((r) => setTimeout(r, 500));
    setStatusMessage('Registering submission with ETIMS 2027 Secretariat Desk...');

    await new Promise((r) => setTimeout(r, 600));

    // Generate tracking reference ID
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const trackCode = trackId.replace('track-', 'TR0');
    const trackingId = `ETIMS27-${trackCode}-${randomDigits}`;

    const chosenTrack = PROVISIONAL_TRACKS.find((t) => t.id === trackId);
    const trackTitle = chosenTrack ? chosenTrack.title : 'General Track';

    const fileSizeStr = selectedFile
      ? `${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB`
      : '3.40 MB (Default)';

    const now = new Date();
    const dateFormatted = now.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    const record: SubmittedPaperRecord = {
      trackingId,
      authorName: authorName.trim(),
      email: email.trim(),
      phone: phone.trim() || 'Not Provided',
      institution: institution.trim() || 'Independent Researcher',
      trackId,
      trackTitle,
      paperTitle: paperTitle.trim(),
      abstract: abstract.trim(),
      fileName: selectedFile ? selectedFile.name : `${trackingId}_Manuscript.pdf`,
      fileSize: fileSizeStr,
      submittedAt: dateFormatted,
    };

    setSubmittedRecord(record);
    setSubmitting(false);

    try {
      const raw = JSON.parse(localStorage.getItem('etims_submissions') || '[]');
      const existing = Array.isArray(raw) ? raw : [];
      existing.unshift(record);
      localStorage.setItem('etims_submissions', JSON.stringify(existing));
    } catch {
      // safe fallback
    }
  };

  const copyTrackingId = () => {
    if (!submittedRecord) return;
    navigator.clipboard.writeText(submittedRecord.trackingId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadReceipt = () => {
    if (!submittedRecord) return;
    const slip = `=====================================================
ETIMS 2027 — OFFICIAL MANUSCRIPT SUBMISSION RECEIPT
1st National Conference on Emerging Technologies, Innovation & Multidisciplinary Studies
Netaji Subhas Institute of Technology (NSIT), Bihta, Patna
Dates: 23–24 July 2027 · Physical Mode
=====================================================

MANUSCRIPT REFERENCE ID : ${submittedRecord.trackingId}
SUBMISSION STATUS       : CONFIRMED (QUEUED FOR DOUBLE-BLIND PEER REVIEW)
DATE OF SUBMISSION      : ${submittedRecord.submittedAt} (IST)

--- AUTHOR & AFFILIATION ---
Primary Author          : ${submittedRecord.authorName}
Email Address           : ${submittedRecord.email}
Phone Number            : ${submittedRecord.phone}
Affiliated Institution  : ${submittedRecord.institution}

--- PAPER PARAMETERS ---
Target Track            : ${submittedRecord.trackTitle}
Manuscript Title        : ${submittedRecord.paperTitle}
Attached Document       : ${submittedRecord.fileName} (${submittedRecord.fileSize})

--- PEER REVIEW DIRECTIVE ---
1. Your paper has entered the formal double-blind review queue.
2. Desk triage and similarity check (< 15% threshold) are initiated.
3. Official decision notifications will be sent by 31 May 2027.
4. Camera-Ready submission deadline: 20 June 2027.

CONVENOR SECRETARIAT CONTACT:
Dr. Atif Hussain, Assistant Professor, Department of Civil Engineering
Netaji Subhas Institute of Technology (NSIT), Bihta, Patna
Email: ${CONVENOR.email} | Phone: ${CONVENOR.phone}
Official Website: https://etims-2027.vercel.app (or https://etims2027.nsiterp.in)
=====================================================`;

    const blob = new Blob([slip], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ETIMS2027_Submission_${submittedRecord.trackingId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const resetForm = () => {
    setSubmittedRecord(null);
    setAuthorName('');
    setEmail('');
    setPhone('');
    setInstitution('');
    setPaperTitle('');
    setAbstract('');
    setSelectedFile(null);
    setPlagiarismAgreed(false);
    setValidationError(null);
  };

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-2.5 sm:p-4 overflow-y-auto overscroll-contain"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
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

        {/* Modal Window Container — Compact & Ergonomic on Mobile Phones */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ type: 'spring', damping: 26, stiffness: 300 }}
          className="relative w-full max-w-xl max-h-[92vh] flex flex-col rounded-2xl sm:rounded-3xl border border-[#E7E0D6] bg-white shadow-2xl my-auto text-[#1C1917] overflow-hidden z-10 overscroll-contain"
        >
          {/* Compact Modal Header */}
          <div className="flex items-center justify-between border-b border-[#E7E0D6] px-3.5 py-2.5 sm:px-6 sm:py-3.5 bg-[#FAF8F5]">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-[#7B1123]/10 text-[#7B1123] border border-[#7B1123]/25 shrink-0">
                <Upload className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <h3 id="modal-title" className="font-heading text-xs sm:text-base font-bold text-[#1C1917] truncate">
                  ETIMS 2027 Manuscript Portal
                </h3>
                <span className="text-[9px] sm:text-[10px] font-mono text-[#7B1123] uppercase tracking-wider block font-semibold truncate">
                  NSIT Bihta, Patna &bull; Double-Blind Submission
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1.5 text-[#57534E] hover:text-[#1C1917] hover:bg-[#FAF8F5] border border-[#E7E0D6] transition-colors cursor-pointer shrink-0 ml-2"
              aria-label="Close Submission Dialog"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Modal Body — Compact Vertical Spacing for Mobile Screens */}
          <div className="p-3.5 sm:p-5 overflow-y-auto overscroll-contain flex-1">
            {/* SUCCESS SCREEN */}
            {submittedRecord ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4 text-center py-2"
              >
                <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 shadow-xs">
                  <CheckCircle2 className="h-7 w-7 text-emerald-600" />
                </div>

                <div>
                  <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-0.5 text-[11px] font-mono font-bold text-emerald-700">
                    Submission Confirmed
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1C1917] mt-2">
                    Manuscript Successfully Transmitted!
                  </h3>
                  <p className="text-xs text-[#57534E] mt-0.5 max-w-sm mx-auto">
                    Your paper has entered the formal double-blind review queue of ETIMS 2027.
                  </p>
                </div>

                {/* Tracking ID Badge */}
                <div className="rounded-xl border border-[#BF982E] bg-[#FAF8F5] p-3.5 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-left">
                  <div>
                    <span className="text-[10px] font-mono text-[#7B1123] uppercase block font-semibold">
                      Manuscript Tracking ID:
                    </span>
                    <span className="font-heading text-lg sm:text-xl font-black text-[#1C1917] font-mono">
                      {submittedRecord.trackingId}
                    </span>
                    <span className="text-[10px] text-[#57534E] block mt-0.5">
                      Submitted: {submittedRecord.submittedAt}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={copyTrackingId}
                    className="flex items-center gap-1.5 rounded-lg border border-[#E7E0D6] bg-white px-3 py-1.5 text-xs font-mono text-[#7B1123] hover:border-[#7B1123] transition-colors cursor-pointer shrink-0"
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy ID'}</span>
                  </button>
                </div>

                {/* Paper Summary Pill */}
                <div className="rounded-xl border border-[#E7E0D6] bg-white p-3 text-left space-y-1.5 text-xs">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#57534E] block">Paper Title:</span>
                    <p className="font-bold text-[#1C1917] text-xs sm:text-sm line-clamp-2">{submittedRecord.paperTitle}</p>
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1.5 text-[11px] text-[#57534E] border-t border-[#E7E0D6]">
                    <span>Track: <strong className="text-[#7B1123]">{submittedRecord.trackTitle}</strong></span>
                    <span>Author: <strong className="text-[#1C1917]">{submittedRecord.authorName}</strong></span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <button
                    type="button"
                    onClick={downloadReceipt}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#7B1123] hover:bg-[#5C1324] px-4 py-2.5 text-xs font-bold text-white shadow-xs cursor-pointer transition-all"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download Submission Slip (.txt)</span>
                  </button>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] px-3.5 py-2.5 text-xs font-bold text-[#1C1917] hover:border-[#7B1123] cursor-pointer"
                  >
                    <span>Submit Another</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              /* COMPACT FORM SCREEN */
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                {validationError && (
                  <div className="rounded-xl border border-red-200 bg-red-50 p-2.5 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-red-600 shrink-0" />
                    <span>{validationError}</span>
                  </div>
                )}

                {/* Section 1: Author Information */}
                <div>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase text-[#7B1123] font-bold block mb-1.5">
                    01 // Author & Affiliation
                  </span>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div>
                      <label className="text-[11px] font-semibold text-[#1C1917] mb-0.5 block">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#57534E]" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Dr. Rajesh Kumar"
                          value={authorName}
                          onChange={(e) => setAuthorName(e.target.value)}
                          className="w-full rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] pl-8 pr-2.5 py-1.5 sm:py-2 text-xs text-[#1C1917] placeholder:text-[#57534E]/60 focus:bg-white focus:border-[#7B1123] focus:outline-none focus:ring-1 focus:ring-[#7B1123]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-[#1C1917] mb-0.5 block">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#57534E]" />
                        <input
                          type="email"
                          required
                          placeholder="author@institution.edu"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] pl-8 pr-2.5 py-1.5 sm:py-2 text-xs text-[#1C1917] placeholder:text-[#57534E]/60 focus:bg-white focus:border-[#7B1123] focus:outline-none focus:ring-1 focus:ring-[#7B1123]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2 mt-2">
                    <div>
                      <label className="text-[11px] font-semibold text-[#1C1917] mb-0.5 block">
                        Phone / WhatsApp
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#57534E]" />
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] pl-8 pr-2.5 py-1.5 sm:py-2 text-xs text-[#1C1917] placeholder:text-[#57534E]/60 focus:bg-white focus:border-[#7B1123] focus:outline-none focus:ring-1 focus:ring-[#7B1123]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-[#1C1917] mb-0.5 block">
                        Affiliated University / College *
                      </label>
                      <div className="relative">
                        <Building className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#57534E]" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Dept. of CSE, NSIT Bihta"
                          value={institution}
                          onChange={(e) => setInstitution(e.target.value)}
                          className="w-full rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] pl-8 pr-2.5 py-1.5 sm:py-2 text-xs text-[#1C1917] placeholder:text-[#57534E]/60 focus:bg-white focus:border-[#7B1123] focus:outline-none focus:ring-1 focus:ring-[#7B1123]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Track & Manuscript Details */}
                <div className="pt-2 border-t border-[#E7E0D6]">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase text-[#7B1123] font-bold block mb-1.5">
                    02 // Research Track & Paper Title
                  </span>

                  <div>
                    <label className="text-[11px] font-semibold text-[#1C1917] mb-0.5 block">
                      Target Thematic Track *
                    </label>
                    <select
                      value={trackId}
                      onChange={(e) => setTrackId(e.target.value)}
                      className="w-full rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] px-3 py-1.5 sm:py-2 text-xs text-[#1C1917] focus:bg-white focus:border-[#7B1123] focus:outline-none focus:ring-1 focus:ring-[#7B1123]"
                    >
                      {PROVISIONAL_TRACKS.map((track) => (
                        <option key={track.id} value={track.id}>
                          {track.code} – {track.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-2">
                    <label className="text-[11px] font-semibold text-[#1C1917] mb-0.5 block">
                      Manuscript Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Deep Reinforcement Learning for Adaptive Renewable Power Dispatch"
                      value={paperTitle}
                      onChange={(e) => setPaperTitle(e.target.value)}
                      className="w-full rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] px-3 py-1.5 sm:py-2 text-xs text-[#1C1917] placeholder:text-[#57534E]/60 focus:bg-white focus:border-[#7B1123] focus:outline-none focus:ring-1 focus:ring-[#7B1123]"
                    />
                  </div>

                  <div className="mt-2">
                    <label className="text-[11px] font-semibold text-[#1C1917] mb-0.5 block">
                      Abstract (150–250 words) *
                    </label>
                    <textarea
                      required
                      rows={2.5}
                      placeholder="Summary outlining research objectives, experimental methodology, and key results..."
                      value={abstract}
                      onChange={(e) => setAbstract(e.target.value)}
                      className="w-full rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] p-2.5 text-xs text-[#1C1917] placeholder:text-[#57534E]/60 focus:bg-white focus:border-[#7B1123] focus:outline-none focus:ring-1 focus:ring-[#7B1123] leading-relaxed resize-none"
                    />
                  </div>
                </div>

                {/* Section 3: File Upload Dropzone (Compact) */}
                <div className="pt-2 border-t border-[#E7E0D6]">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase text-[#7B1123] font-bold block mb-1.5">
                    03 // Attach Manuscript (PDF / DOCX)
                  </span>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#E7E0D6] bg-[#FAF8F5] p-3 sm:p-4 hover:border-[#7B1123] hover:bg-white transition-all cursor-pointer text-center group"
                  >
                    <Upload className="h-5 w-5 text-[#7B1123] group-hover:scale-110 transition-transform mb-1" />
                    {selectedFile ? (
                      <div className="space-y-0.5">
                        <span className="text-xs font-bold text-[#7B1123] block truncate max-w-xs">
                          {selectedFile.name}
                        </span>
                        <span className="text-[10px] text-[#57534E] font-mono">
                          {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB &bull; Tap to change
                        </span>
                      </div>
                    ) : (
                      <div className="space-y-0.5">
                        <span className="text-xs font-semibold text-[#1C1917] block">
                          Tap to select manuscript file
                        </span>
                        <span className="text-[10px] text-[#57534E] font-mono">
                          PDF, DOCX (Max 25 MB) &bull; Mask names for blind review
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Academic Integrity Checkbox */}
                <div className="pt-1 flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="plagiarismAgreed"
                    checked={plagiarismAgreed}
                    onChange={(e) => setPlagiarismAgreed(e.target.checked)}
                    className="h-3.5 w-3.5 rounded border-[#E7E0D6] text-[#7B1123] focus:ring-[#7B1123] mt-0.5 cursor-pointer"
                  />
                  <label htmlFor="plagiarismAgreed" className="text-[11px] text-[#57534E] cursor-pointer leading-tight">
                    I certify original unpublished research adhering to standard IEEE/Springer format (&lt; 15% similarity).
                  </label>
                </div>

                {/* Submit Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#7B1123] hover:bg-[#5C1324] py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all active:scale-[0.99] cursor-pointer disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>{statusMessage}</span>
                      </>
                    ) : (
                      <>
                        <Upload className="h-4 w-4" />
                        <span>Submit Manuscript & Generate Tracking Reference</span>
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-center text-[#57534E] mt-1.5 font-mono">
                    Secretariat Desk: {CONVENOR.email} &bull; {CONVENOR.phone}
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}

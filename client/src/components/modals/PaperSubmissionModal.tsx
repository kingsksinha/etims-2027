import { useState, useRef } from 'react';
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
import { CONVENOR, CONFERENCE, PROVISIONAL_TRACKS } from '../../utils/constants';

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ];
      if (!validTypes.includes(file.type) && !file.name.endsWith('.pdf') && !file.name.endsWith('.docx') && !file.name.endsWith('.doc')) {
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

    if (!plagiarismAgreed) {
      setValidationError('Please accept the academic integrity & similarity confirmation.');
      return;
    }

    setSubmitting(true);
    setStatusMessage('Validating manuscript parameters...');

    await new Promise((r) => setTimeout(r, 600));
    setStatusMessage('Securing manuscript for double-blind peer review...');

    await new Promise((r) => setTimeout(r, 600));
    setStatusMessage('Registering submission with ETIMS 2027 Secretariat Desk...');

    await new Promise((r) => setTimeout(r, 700));

    // Generate authoritative tracking reference ID
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const trackCode = trackId.replace('track-', 'TR0');
    const trackingId = `ETIMS27-${trackCode}-${randomDigits}`;

    const chosenTrack = PROVISIONAL_TRACKS.find((t) => t.id === trackId);
    const trackTitle = chosenTrack ? chosenTrack.title : 'General Track';

    const fileSizeStr = selectedFile
      ? `${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB`
      : '3.40 MB (Default)';

    const fileNameStr = selectedFile ? selectedFile.name : 'Manuscript_Draft.pdf';

    const newRecord: SubmittedPaperRecord = {
      trackingId,
      authorName,
      email,
      phone,
      institution,
      trackId,
      trackTitle,
      paperTitle,
      abstract,
      fileName: fileNameStr,
      fileSize: fileSizeStr,
      submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    // Store in localStorage for persistence
    try {
      const existingStr = localStorage.getItem('etims_submissions');
      const existing = existingStr ? JSON.parse(existingStr) : [];
      existing.unshift(newRecord);
      localStorage.setItem('etims_submissions', JSON.stringify(existing));
    } catch {
      // Ignore storage errors
    }

    setSubmitting(false);
    setSubmittedRecord(newRecord);
  };

  const copyTrackingId = () => {
    if (submittedRecord) {
      navigator.clipboard.writeText(submittedRecord.trackingId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const downloadReceipt = () => {
    if (!submittedRecord) return;

    const receiptText = [
      '========================================================================',
      '        ETIMS 2027 - 1ST NATIONAL CONFERENCE PAPER SUBMISSION RECEIPT',
      '  Netaji Subhas Institute of Technology (NSIT), Bihta, Patna, Bihar, India',
      '========================================================================',
      '',
      `TRACKING REFERENCE ID : ${submittedRecord.trackingId}`,
      `DATE OF SUBMISSION    : ${submittedRecord.submittedAt} (IST)`,
      `CONFERENCE DATES      : ${CONFERENCE.dateDisplay}`,
      `HOST INSTITUTION      : ${CONFERENCE.hostInstitution}, ${CONFERENCE.venue}`,
      '',
      '------------------------------------------------------------------------',
      '1. MANUSCRIPT DETAILS:',
      '------------------------------------------------------------------------',
      `Paper Title          : ${submittedRecord.paperTitle}`,
      `Thematic Track       : ${submittedRecord.trackTitle}`,
      `Attached Manuscript  : ${submittedRecord.fileName} (${submittedRecord.fileSize})`,
      '',
      'Abstract Preview:',
      submittedRecord.abstract,
      '',
      '------------------------------------------------------------------------',
      '2. PRIMARY AUTHOR DETAILS:',
      '------------------------------------------------------------------------',
      `Author Full Name     : ${submittedRecord.authorName}`,
      `Author Email         : ${submittedRecord.email}`,
      `Contact Phone        : ${submittedRecord.phone || 'Not Provided'}`,
      `Affiliated Institute : ${submittedRecord.institution || 'Not Provided'}`,
      '',
      '------------------------------------------------------------------------',
      '3. PEER REVIEW PROCEDURE & NEXT STEPS:',
      '------------------------------------------------------------------------',
      '1. Your manuscript has entered the double-blind peer review queue.',
      '2. Technical Program Committee (TPC) reviewers evaluate papers on technical novelty,',
      '   methodology, similarity analysis (<15%), and multidisciplinary clarity.',
      '3. Official review decisions and notification of acceptance will be dispatched to your',
      '   registered email address.',
      '4. At least one author must register and present the accepted paper in person at NSIT Bihta.',
      '',
      '------------------------------------------------------------------------',
      'CONVENORSHIP CONTACT:',
      `Convenor : ${CONVENOR.name}, Assistant Professor, Dept. of EEE`,
      `Email    : ${CONVENOR.email}`,
      `Phone    : ${CONVENOR.phone}`,
      '========================================================================',
    ].join('\r\n');

    const blob = new Blob([receiptText], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${submittedRecord.trackingId}-Submission-Receipt.txt`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-midnight/85 backdrop-blur-md cursor-pointer"
          aria-hidden="true"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ type: 'spring', damping: 26, stiffness: 300 }}
          className="relative w-full max-w-2xl rounded-3xl border border-cyan/40 bg-gradient-to-b from-[#0B1E2D] via-midnight to-[#081824] shadow-2xl glow-cyan-sm my-auto text-light-text overflow-hidden z-10"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-border-dark px-6 py-4 bg-navy/60">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/15 text-cyan border border-cyan/30">
                <Upload className="h-5 w-5" />
              </div>
              <div>
                <h3 id="modal-title" className="font-heading text-lg font-bold text-light-text">
                  ETIMS 2027 Manuscript Submission Portal
                </h3>
                <span className="text-[10px] font-mono text-cyan uppercase tracking-wider block">
                  Netaji Subhas Institute of Technology &bull; Bihta, Patna
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl p-2 text-secondary-text hover:text-light-text hover:bg-navy border border-border-dark transition-colors cursor-pointer"
              aria-label="Close Submission Dialog"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-7 max-h-[80vh] overflow-y-auto">
            {/* SUCCESS SCREEN */}
            {submittedRecord ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-mint/20 to-cyan/20 border border-mint/40 text-mint shadow-xl">
                  <CheckCircle2 className="h-9 w-9 text-mint" />
                </div>

                <div>
                  <span className="rounded-full bg-mint/15 border border-mint/30 px-3.5 py-1 text-xs font-mono font-bold text-mint">
                    Submission Confirmed
                  </span>
                  <h3 className="font-heading text-2xl font-black text-light-text mt-3">
                    Manuscript Successfully Transmitted!
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary-text mt-1 max-w-md mx-auto">
                    Your paper has entered the formal double-blind review queue of ETIMS 2027 under the Organizing Secretariat.
                  </p>
                </div>

                {/* Tracking ID Badge */}
                <div className="rounded-2xl border border-cyan/40 bg-midnight p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
                  <div>
                    <span className="text-[10px] font-mono text-cyan uppercase block">
                      Official Manuscript Tracking Reference:
                    </span>
                    <span className="font-heading text-xl sm:text-2xl font-black text-light-text font-mono text-glow-cyan">
                      {submittedRecord.trackingId}
                    </span>
                    <span className="text-[10px] text-secondary-text block mt-0.5">
                      Submitted on: {submittedRecord.submittedAt} (IST)
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={copyTrackingId}
                    className="flex items-center gap-1.5 rounded-xl border border-border-dark bg-navy/80 px-3 py-2 text-xs font-mono text-cyan hover:border-cyan transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="h-4 w-4 text-mint" /> : <Copy className="h-4 w-4" />}
                    <span>{copied ? 'Copied' : 'Copy ID'}</span>
                  </button>
                </div>

                {/* Paper Summary Pill */}
                <div className="rounded-2xl border border-border-dark bg-navy/40 p-4 text-left space-y-2 text-xs">
                  <div>
                    <span className="text-secondary-text">Paper Title:</span>
                    <p className="font-bold text-light-text text-sm">{submittedRecord.paperTitle}</p>
                  </div>
                  <div className="flex flex-wrap gap-4 pt-1 text-[11px] text-secondary-text border-t border-border-dark/60">
                    <span>
                      Track: <strong className="text-cyan">{submittedRecord.trackTitle}</strong>
                    </span>
                    <span>
                      Author: <strong className="text-light-text">{submittedRecord.authorName}</strong>
                    </span>
                    <span>
                      File: <strong className="text-mint">{submittedRecord.fileName}</strong> ({submittedRecord.fileSize})
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    onClick={downloadReceipt}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-teal to-cyan px-5 py-3 text-xs font-bold text-midnight shadow-md glow-cyan-sm cursor-pointer"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Official Submission Slip (.txt)</span>
                  </button>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border-dark bg-navy px-4 py-3 text-xs font-bold text-light-text hover:border-cyan cursor-pointer"
                  >
                    <span>Submit Another Paper</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              /* FORM SCREEN */
              <form onSubmit={handleSubmit} className="space-y-5">
                {validationError && (
                  <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-xs text-red-300 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-red-400 shrink-0" />
                    <span>{validationError}</span>
                  </div>
                )}

                {/* Author Information Grid */}
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase text-cyan block tracking-wider">
                    01 // Primary Author & Affiliation
                  </span>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-medium text-secondary-text mb-1 block">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary-text" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Dr. Rajesh Kumar"
                          value={authorName}
                          onChange={(e) => setAuthorName(e.target.value)}
                          className="w-full rounded-xl border border-border-dark bg-midnight/90 pl-9 pr-3 py-2 text-xs text-light-text placeholder:text-secondary-text/60 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-secondary-text mb-1 block">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary-text" />
                        <input
                          type="email"
                          required
                          placeholder="author@institution.edu"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-xl border border-border-dark bg-midnight/90 pl-9 pr-3 py-2 text-xs text-light-text placeholder:text-secondary-text/60 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-medium text-secondary-text mb-1 block">
                        Phone / WhatsApp
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary-text" />
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full rounded-xl border border-border-dark bg-midnight/90 pl-9 pr-3 py-2 text-xs text-light-text placeholder:text-secondary-text/60 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-secondary-text mb-1 block">
                        Affiliated University / College
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary-text" />
                        <input
                          type="text"
                          placeholder="e.g. Dept. of CSE, NSIT Bihta"
                          value={institution}
                          onChange={(e) => setInstitution(e.target.value)}
                          className="w-full rounded-xl border border-border-dark bg-midnight/90 pl-9 pr-3 py-2 text-xs text-light-text placeholder:text-secondary-text/60 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Track & Manuscript Parameters */}
                <div className="space-y-3 pt-2 border-t border-border-dark">
                  <span className="text-xs font-mono uppercase text-cyan block tracking-wider">
                    02 // Research Track & Paper Title
                  </span>

                  <div>
                    <label className="text-xs font-medium text-secondary-text mb-1 block">
                      Target Thematic Track *
                    </label>
                    <select
                      value={trackId}
                      onChange={(e) => setTrackId(e.target.value)}
                      className="w-full rounded-xl border border-border-dark bg-midnight/90 px-3 py-2 text-xs text-light-text focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
                    >
                      {PROVISIONAL_TRACKS.map((track) => (
                        <option key={track.id} value={track.id} className="bg-midnight text-light-text">
                          {track.number}: {track.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-secondary-text mb-1 block">
                      Manuscript Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Deep Reinforcement Learning for Adaptive Renewable Power Dispatch"
                      value={paperTitle}
                      onChange={(e) => setPaperTitle(e.target.value)}
                      className="w-full rounded-xl border border-border-dark bg-midnight/90 px-3 py-2 text-xs text-light-text placeholder:text-secondary-text/60 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-secondary-text mb-1 block">
                      Abstract (150–250 words) *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Brief summary outlining research objectives, experimental methodology, key results, and multidisciplinary contribution..."
                      value={abstract}
                      onChange={(e) => setAbstract(e.target.value)}
                      className="w-full rounded-xl border border-border-dark bg-midnight/90 p-3 text-xs text-light-text placeholder:text-secondary-text/60 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan leading-relaxed"
                    />
                  </div>
                </div>

                {/* File Upload Box */}
                <div className="space-y-2 pt-2 border-t border-border-dark">
                  <span className="text-xs font-mono uppercase text-cyan block tracking-wider">
                    03 // Attach Manuscript Document (PDF / DOCX)
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
                    className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-cyan/40 bg-navy/40 p-5 hover:border-cyan hover:bg-navy/60 transition-all cursor-pointer text-center group"
                  >
                    <Upload className="h-7 w-7 text-cyan group-hover:scale-110 transition-transform mb-2" />
                    {selectedFile ? (
                      <div className="space-y-0.5">
                        <span className="text-xs font-bold text-mint block">
                          File Ready: {selectedFile.name}
                        </span>
                        <span className="text-[10px] text-secondary-text font-mono">
                          {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB &bull; Click to change
                        </span>
                      </div>
                    ) : (
                      <div className="space-y-0.5">
                        <span className="text-xs font-semibold text-light-text block">
                          Click to select your manuscript file
                        </span>
                        <span className="text-[10px] text-secondary-text font-mono">
                          Supports PDF, DOCX (Max 25 MB) &bull; Mask author names for blind review
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Academic Integrity Checkbox */}
                <div className="pt-2 border-t border-border-dark flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="plagiarismAgreed"
                    checked={plagiarismAgreed}
                    onChange={(e) => setPlagiarismAgreed(e.target.checked)}
                    className="h-4 w-4 rounded border-border-dark text-cyan focus:ring-cyan mt-0.5 cursor-pointer"
                  />
                  <label htmlFor="plagiarismAgreed" className="text-xs text-secondary-text cursor-pointer leading-snug">
                    I certify that this paper contains original, unpublished research, adheres to standard IEEE/Springer format, and satisfies plagiarism thresholds (&lt; 15% similarity).
                  </label>
                </div>

                {/* Submit Action Button */}
                <div className="pt-4 border-t border-border-dark">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-teal to-cyan px-6 py-3.5 text-xs sm:text-sm font-bold text-midnight shadow-lg hover:shadow-cyan/30 transition-all active:scale-[0.99] glow-cyan-sm cursor-pointer disabled:opacity-60"
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
                  <p className="text-[11px] text-center text-secondary-text mt-2 font-mono">
                    Direct Secretariat Desk: {CONVENOR.email} &bull; {CONVENOR.phone}
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

import { useState, useEffect } from 'react';
import {
  FileText,
  Upload,
  CheckCircle2,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import Container from '../components/common/Container';
import PaperSubmissionModal from '../components/modals/PaperSubmissionModal';
import { SUBMISSION_GUIDELINES } from '../utils/constants';

interface SavedSubmission {
  trackingId: string;
  paperTitle: string;
  authorName: string;
  trackTitle: string;
  submittedAt: string;
}

export default function SubmissionPage() {
  const [activeTab, setActiveTab] = useState<'guidelines' | 'templates' | 'plagiarism' | 'faq'>('guidelines');
  const [modalOpen, setModalOpen] = useState(false);
  const [recentSubmissions, setRecentSubmissions] = useState<SavedSubmission[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('etims_submissions');
      if (stored) {
        setRecentSubmissions(JSON.parse(stored));
      }
    } catch {
      // Ignore storage errors
    }
  }, [modalOpen]);

  return (
    <div className="relative min-h-screen bg-midnight text-light-text py-12 sm:py-16 overflow-hidden">
      {/* Ambience */}
      <div className="pointer-events-none absolute top-12 right-1/4 h-96 w-96 rounded-full bg-cyan/10 blur-[140px]" />

      <Container className="relative z-10">
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-navy/80 px-4 py-1.5 text-xs font-mono font-semibold text-cyan mb-4 glow-cyan-sm">
            <FileText className="h-3.5 w-3.5" />
            <span>Author Instructions & Manuscript Intake</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-light-text">
                Paper Submission <span className="text-cyan text-glow-cyan">Guidelines</span>
              </h1>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-secondary-text leading-relaxed">
                Follow the standardized technical guidelines to prepare and submit your original research manuscript for double-blind peer review at ETIMS 2027.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary-teal to-cyan px-7 py-3.5 text-sm font-bold text-midnight shadow-xl hover:shadow-cyan/30 transition-all glow-cyan-sm shrink-0 cursor-pointer self-start lg:self-center"
            >
              <Upload className="h-4 w-4" />
              <span>Submit Manuscript Online</span>
            </button>
          </div>

          {/* Sub-Tabs */}
          <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-border-dark pb-4">
            <button
              type="button"
              onClick={() => setActiveTab('guidelines')}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'guidelines'
                  ? 'bg-gradient-to-r from-primary-teal to-cyan text-midnight shadow-md glow-cyan-sm'
                  : 'bg-navy/70 border border-border-dark text-secondary-text hover:text-light-text hover:border-cyan/40'
              }`}
            >
              Author Guidelines
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('templates')}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'templates'
                  ? 'bg-gradient-to-r from-primary-teal to-cyan text-midnight shadow-md glow-cyan-sm'
                  : 'bg-navy/70 border border-border-dark text-secondary-text hover:text-light-text hover:border-cyan/40'
              }`}
            >
              Formatting & Templates
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('plagiarism')}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'plagiarism'
                  ? 'bg-gradient-to-r from-primary-teal to-cyan text-midnight shadow-md glow-cyan-sm'
                  : 'bg-navy/70 border border-border-dark text-secondary-text hover:text-light-text hover:border-cyan/40'
              }`}
            >
              Plagiarism & Similarity Policy
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('faq')}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'faq'
                  ? 'bg-gradient-to-r from-primary-teal to-cyan text-midnight shadow-md glow-cyan-sm'
                  : 'bg-navy/70 border border-border-dark text-secondary-text hover:text-light-text hover:border-cyan/40'
              }`}
            >
              Author FAQs
            </button>
          </div>
        </div>

        {/* TAB 1: GUIDELINES */}
        {activeTab === 'guidelines' && (
          <div className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              {SUBMISSION_GUIDELINES.map((guide, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-border-dark bg-navy/70 p-6 space-y-3"
                >
                  <div className="flex items-center gap-2.5 text-cyan">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <h3 className="font-heading text-base font-bold text-light-text">
                      {guide.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                    {guide.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Submission Portal Action Card */}
            <div className="rounded-3xl border border-cyan/40 bg-gradient-to-r from-navy via-midnight to-navy p-7 sm:p-9 shadow-2xl glow-cyan-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-mono text-cyan uppercase tracking-wider block">
                    Online Peer Review Submission Portal
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-light-text mt-1">
                    Ready to Submit Your Manuscript?
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary-text mt-1 max-w-xl">
                    Submissions are accepted in PDF format. Ensure all author identities are masked in the manuscript draft for double-blind peer review compliance.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-teal to-cyan px-6 py-3.5 text-xs sm:text-sm font-bold text-midnight shadow-md hover:shadow-cyan/30 transition-all glow-cyan-sm shrink-0 cursor-pointer"
                >
                  <Upload className="h-4 w-4" />
                  <span>Submit Paper via Secretariat</span>
                </button>
              </div>
            </div>

            {/* Previously Submitted Papers Record Tracker */}
            {recentSubmissions.length > 0 && (
              <div className="rounded-3xl border border-mint/40 bg-navy/80 p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-border-dark pb-3">
                  <div className="flex items-center gap-2 text-mint">
                    <Sparkles className="h-4 w-4" />
                    <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-light-text">
                      My Submitted Manuscripts ({recentSubmissions.length})
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-cyan bg-cyan/15 px-2 py-0.5 rounded">
                    Active Submissions
                  </span>
                </div>

                <div className="space-y-3">
                  {recentSubmissions.map((sub, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-border-dark bg-midnight p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-cyan text-sm">
                            {sub.trackingId}
                          </span>
                          <span className="text-[10px] bg-mint/15 text-mint px-2 py-0.5 rounded font-mono">
                            Under Review
                          </span>
                        </div>
                        <p className="font-bold text-light-text mt-1">{sub.paperTitle}</p>
                        <p className="text-secondary-text text-[11px] mt-0.5">
                          Track: {sub.trackTitle} &bull; Author: {sub.authorName} &bull; {sub.submittedAt}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setModalOpen(true)}
                        className="text-xs font-mono text-cyan hover:underline shrink-0"
                      >
                        Submit Additional Draft &rarr;
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: TEMPLATES */}
        {activeTab === 'templates' && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-border-dark bg-navy/80 p-6 sm:p-8 space-y-6">
              <h3 className="font-heading text-xl font-bold text-light-text">
                Standard Manuscript Specifications
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-border-dark bg-midnight p-4">
                  <span className="text-[10px] font-mono text-cyan uppercase block">Page Limit</span>
                  <p className="font-heading text-base font-bold text-light-text mt-1">6 to 8 Pages</p>
                  <p className="text-[11px] text-secondary-text mt-0.5">Including references & figures</p>
                </div>

                <div className="rounded-2xl border border-border-dark bg-midnight p-4">
                  <span className="text-[10px] font-mono text-cyan uppercase block">Page Layout</span>
                  <p className="font-heading text-base font-bold text-light-text mt-1">Two-Column Format</p>
                  <p className="text-[11px] text-secondary-text mt-0.5">Standard A4 page size</p>
                </div>

                <div className="rounded-2xl border border-border-dark bg-midnight p-4">
                  <span className="text-[10px] font-mono text-cyan uppercase block">Primary Font</span>
                  <p className="font-heading text-base font-bold text-light-text mt-1">Times New Roman 10pt</p>
                  <p className="text-[11px] text-secondary-text mt-0.5">Single-spaced line height</p>
                </div>

                <div className="rounded-2xl border border-border-dark bg-midnight p-4">
                  <span className="text-[10px] font-mono text-cyan uppercase block">File Format</span>
                  <p className="font-heading text-base font-bold text-light-text mt-1">PDF (.pdf)</p>
                  <p className="text-[11px] text-secondary-text mt-0.5">Font-embedded without passwords</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border-dark">
                <p className="text-xs text-secondary-text">
                  Official MS Word and LaTeX templates will be provided with the formal Call for Papers circular release. Authors may format drafts according to standard IEEE/Springer two-column conference formats.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PLAGIARISM */}
        {activeTab === 'plagiarism' && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-border-dark bg-navy/80 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 text-cyan">
                <ShieldAlert className="h-6 w-6 text-mint" />
                <h3 className="font-heading text-xl font-bold text-light-text">
                  Zero Tolerance on Academic Plagiarism
                </h3>
              </div>

              <p className="text-sm text-secondary-text leading-relaxed">
                All submitted manuscripts are subjected to automated similarity analysis using industry-standard screening engines. Papers exhibiting plagiarism, self-plagiarism, or excessive conceptual overlap without proper attribution will be summarily rejected without technical review.
              </p>

              <div className="grid gap-4 sm:grid-cols-3 pt-2">
                <div className="rounded-2xl border border-border-dark bg-midnight p-4">
                  <span className="text-2xl font-black text-cyan font-mono block">&lt; 15%</span>
                  <p className="text-xs font-semibold text-light-text mt-1">Overall Similarity Index</p>
                  <p className="text-[11px] text-secondary-text mt-0.5">Maximum permissible total similarity</p>
                </div>

                <div className="rounded-2xl border border-border-dark bg-midnight p-4">
                  <span className="text-2xl font-black text-mint font-mono block">&lt; 3%</span>
                  <p className="text-xs font-semibold text-light-text mt-1">Single Source Overlap</p>
                  <p className="text-[11px] text-secondary-text mt-0.5">Max allowable from any single publication</p>
                </div>

                <div className="rounded-2xl border border-border-dark bg-midnight p-4">
                  <span className="text-2xl font-black text-cyan font-mono block">100%</span>
                  <p className="text-xs font-semibold text-light-text mt-1">Double-Blind Review</p>
                  <p className="text-[11px] text-secondary-text mt-0.5">Author names masked during evaluation</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: FAQS */}
        {activeTab === 'faq' && (
          <div className="space-y-4">
            <div className="rounded-3xl border border-border-dark bg-navy/70 p-6 space-y-2">
              <h4 className="font-heading text-sm font-bold text-light-text">
                Can I submit a paper with co-authors from multiple institutions?
              </h4>
              <p className="text-xs text-secondary-text leading-relaxed">
                Yes. Multidisciplinary and inter-institutional collaborative research is strongly encouraged for ETIMS 2027.
              </p>
            </div>

            <div className="rounded-3xl border border-border-dark bg-navy/70 p-6 space-y-2">
              <h4 className="font-heading text-sm font-bold text-light-text">
                Is in-person attendance mandatory for accepted authors?
              </h4>
              <p className="text-xs text-secondary-text leading-relaxed">
                At least one author must register and present the paper in person during the conference technical sessions at NSIT Bihta, Patna on 23–24 July 2027.
              </p>
            </div>

            <div className="rounded-3xl border border-border-dark bg-navy/70 p-6 space-y-2">
              <h4 className="font-heading text-sm font-bold text-light-text">
                Will papers be published in conference proceedings?
              </h4>
              <p className="text-xs text-secondary-text leading-relaxed">
                All registered and presented papers meeting academic standards will be included in the official conference proceedings with ISBN / DOI attribution.
              </p>
            </div>
          </div>
        )}

        {/* Paper Submission Modal */}
        <PaperSubmissionModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </Container>
    </div>
  );
}

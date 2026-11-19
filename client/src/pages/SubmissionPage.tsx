import { useState, useEffect } from 'react';
import {
  FileText,
  Upload,
  CheckCircle2,
  ShieldAlert,
  Sparkles,
  BookOpen,
  AlertTriangle,
} from 'lucide-react';
import Container from '../components/common/Container';
import PaperSubmissionModal from '../components/modals/PaperSubmissionModal';
import {
  SUBMISSION_GUIDELINES,
  REVIEW_AND_PUBLICATION,
  SUBMISSION_INSTRUCTIONS,
} from '../utils/constants';

interface SavedSubmission {
  trackingId: string;
  paperTitle: string;
  authorName: string;
  trackTitle: string;
  submittedAt: string;
}

export default function SubmissionPage() {
  const [activeTab, setActiveTab] = useState<'guidelines' | 'publication' | 'templates' | 'plagiarism' | 'faq'>('guidelines');
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
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#1C1917] py-12 sm:py-16 overflow-hidden">
      {/* Ambience */}
      <div className="pointer-events-none absolute top-12 right-1/4 h-96 w-96 rounded-full bg-[#BF982E]/10 blur-[140px]" />

      <Container className="relative z-10">
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7B1123]/30 bg-[#7B1123]/10 px-4 py-1.5 text-xs font-mono font-semibold text-[#7B1123] mb-4">
            <FileText className="h-3.5 w-3.5" />
            <span>Author Instructions & Manuscript Intake</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1C1917]">
                Paper Submission <span className="text-[#7B1123]">Guidelines</span>
              </h1>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#57534E] leading-relaxed">
                Follow the standardized technical guidelines to prepare and submit your original research manuscript across 8 official multidisciplinary tracks for double-blind peer review at ETIMS 2027.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#7B1123] hover:bg-[#5C1324] px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all shrink-0 cursor-pointer self-start lg:self-center"
            >
              <Upload className="h-4 w-4" />
              <span>Submit Manuscript Online</span>
            </button>
          </div>

          {/* Sub-Tabs */}
          <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-[#E7E0D6] pb-4">
            <button
              type="button"
              onClick={() => setActiveTab('guidelines')}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'guidelines'
                  ? 'bg-[#7B1123] text-white shadow-sm'
                  : 'bg-white border border-[#E7E0D6] text-[#57534E] hover:text-[#1C1917] hover:border-[#7B1123]/40'
              }`}
            >
              Author Guidelines
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('publication')}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'publication'
                  ? 'bg-[#7B1123] text-white shadow-sm'
                  : 'bg-white border border-[#E7E0D6] text-[#57534E] hover:text-[#1C1917] hover:border-[#7B1123]/40'
              }`}
            >
              Review & Publication Policy
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('templates')}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'templates'
                  ? 'bg-[#7B1123] text-white shadow-sm'
                  : 'bg-white border border-[#E7E0D6] text-[#57534E] hover:text-[#1C1917] hover:border-[#7B1123]/40'
              }`}
            >
              Formatting & Templates
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('plagiarism')}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'plagiarism'
                  ? 'bg-[#7B1123] text-white shadow-sm'
                  : 'bg-white border border-[#E7E0D6] text-[#57534E] hover:text-[#1C1917] hover:border-[#7B1123]/40'
              }`}
            >
              Plagiarism & Similarity Policy
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('faq')}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'faq'
                  ? 'bg-[#7B1123] text-white shadow-sm'
                  : 'bg-white border border-[#E7E0D6] text-[#57534E] hover:text-[#1C1917] hover:border-[#7B1123]/40'
              }`}
            >
              Author FAQs
            </button>
          </div>
        </div>

        {/* TAB 1: GUIDELINES */}
        {activeTab === 'guidelines' && (
          <div className="space-y-8">
            <div className="grid gap-5 md:grid-cols-2">
              {SUBMISSION_GUIDELINES.map((guide, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-[#E7E0D6] bg-white p-6 sm:p-7 space-y-3.5 shadow-sm hover:border-[#7B1123]/40 hover:shadow-md transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#7B1123]/10 text-[#7B1123] border border-[#7B1123]/25 font-mono text-xs font-bold">
                        0{idx + 1}
                      </div>
                      <h3 className="font-heading text-base sm:text-lg font-bold text-[#1C1917] group-hover:text-[#7B1123] transition-colors">
                        {guide.title}
                      </h3>
                    </div>
                    <CheckCircle2 className="h-4 w-4 text-[#BF982E] shrink-0 opacity-80" />
                  </div>
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed pl-1">
                    {guide.detail}
                  </p>
                  <div className="pt-2 border-t border-[#E7E0D6] flex items-center justify-between font-mono text-[10px] text-[#78716C]">
                    <span>STANDARD SPECIFICATION</span>
                    <span className="text-[#7B1123] font-semibold">ETIMS-2027-STD</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Academic Submission Console HUD */}
            <div className="rounded-3xl border border-[#E7E0D6] bg-white p-7 sm:p-10 shadow-lg relative overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#7B1123] font-bold block">
                      ONLINE PEER REVIEW INTAKE PORTAL
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 font-mono text-[9px] font-semibold text-emerald-700 border border-emerald-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      ACTIVE
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-black text-[#1C1917]">
                    Ready to Submit Your Research Manuscript?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57534E] max-w-2xl leading-relaxed">
                    Submissions are accepted in PDF format. Ensure all author names, affiliations, and acknowledgments are masked in the initial manuscript draft to comply with strict double-blind peer review protocols.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#7B1123] hover:bg-[#5C1324] px-7 py-3.5 text-sm font-bold text-white shadow-md active:scale-95 transition-all cursor-pointer"
                  >
                    <Upload className="h-4.5 w-4.5 text-white" />
                    <span>Submit Manuscript Online</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Previously Submitted Papers Record Tracker */}
            {recentSubmissions.length > 0 && (
              <div className="rounded-3xl border border-[#BF982E]/40 bg-white p-6 space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-[#E7E0D6] pb-3">
                  <div className="flex items-center gap-2 text-[#BF982E]">
                    <Sparkles className="h-4 w-4" />
                    <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#1C1917]">
                      My Submitted Manuscripts ({recentSubmissions.length})
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-[#7B1123] bg-[#7B1123]/10 px-2 py-0.5 rounded font-semibold">
                    Active Submissions
                  </span>
                </div>

                <div className="space-y-3">
                  {recentSubmissions.map((sub, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-[#7B1123] text-sm">
                            {sub.trackingId}
                          </span>
                          <span className="text-[10px] bg-[#BF982E]/15 text-[#BF982E] font-bold px-2 py-0.5 rounded font-mono">
                            Under Review
                          </span>
                        </div>
                        <p className="font-bold text-[#1C1917] mt-1">{sub.paperTitle}</p>
                        <p className="text-[#57534E] text-[11px] mt-0.5">
                          Track: {sub.trackTitle} &bull; Author: {sub.authorName} &bull; {sub.submittedAt}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setModalOpen(true)}
                        className="text-xs font-mono text-[#7B1123] font-semibold hover:underline shrink-0"
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

        {/* TAB 2: PUBLICATION & REVIEW POLICY */}
        {activeTab === 'publication' && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#E7E0D6] bg-white p-6 sm:p-8 space-y-6 shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7B1123]/10 text-[#7B1123] border border-[#7B1123]/25">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#1C1917]">
                    Review & Publication Framework
                  </h3>
                  <p className="text-xs text-[#57534E]">
                    Official policy from the ETIMS 2027 Conference Secretariat
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-5 space-y-3">
                <span className="text-xs font-mono text-[#7B1123] uppercase font-bold tracking-wider block">
                  Peer Review & Proceedings Outlet
                </span>
                <p className="text-sm text-[#1C1917] leading-relaxed">
                  {REVIEW_AND_PUBLICATION.policy}
                </p>
              </div>

              {/* Publisher & Indexing Disclaimer */}
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 flex items-start gap-3.5">
                <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-heading text-sm font-bold text-amber-900">
                    Official Publisher & Indexing Notice
                  </h4>
                  <p className="text-xs text-amber-800 leading-relaxed font-mono">
                    {REVIEW_AND_PUBLICATION.disclaimer}
                  </p>
                </div>
              </div>

              {/* Author Requirement Checklist */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-4 space-y-2">
                  <span className="text-[10px] font-mono text-[#7B1123] font-semibold uppercase block">Mandatory Presentation</span>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {SUBMISSION_INSTRUCTIONS.authorRequirement}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-4 space-y-2">
                  <span className="text-[10px] font-mono text-[#7B1123] font-semibold uppercase block">Abstract Length</span>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    Abstract submissions must contain {SUBMISSION_INSTRUCTIONS.abstractRequirement}, accompanied by full papers in standard format.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: TEMPLATES */}
        {activeTab === 'templates' && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#E7E0D6] bg-white p-6 sm:p-8 space-y-6 shadow-md">
              <h3 className="font-heading text-xl font-bold text-[#1C1917]">
                Standard Manuscript Specifications
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-4">
                  <span className="text-[10px] font-mono text-[#7B1123] font-semibold uppercase block">Abstract Scope</span>
                  <p className="font-heading text-base font-bold text-[#1C1917] mt-1">250–300 Words</p>
                  <p className="text-[11px] text-[#57534E] mt-0.5">Problem, methodology, outcomes</p>
                </div>

                <div className="rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-4">
                  <span className="text-[10px] font-mono text-[#7B1123] font-semibold uppercase block">Page Limit</span>
                  <p className="font-heading text-base font-bold text-[#1C1917] mt-1">6 to 8 Pages</p>
                  <p className="text-[11px] text-[#57534E] mt-0.5">Including references & figures</p>
                </div>

                <div className="rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-4">
                  <span className="text-[10px] font-mono text-[#7B1123] font-semibold uppercase block">Page Layout</span>
                  <p className="font-heading text-base font-bold text-[#1C1917] mt-1">Two-Column Format</p>
                  <p className="text-[11px] text-[#57534E] mt-0.5">Standard A4 page size</p>
                </div>

                <div className="rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-4">
                  <span className="text-[10px] font-mono text-[#7B1123] font-semibold uppercase block">File Format</span>
                  <p className="font-heading text-base font-bold text-[#1C1917] mt-1">PDF (.pdf)</p>
                  <p className="text-[11px] text-[#57534E] mt-0.5">Font-embedded without passwords</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E7E0D6]">
                <p className="text-xs text-[#57534E]">
                  Official MS Word and LaTeX templates will be provided with the formal Call for Papers circular release. Authors may format drafts according to standard conference formats.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: PLAGIARISM */}
        {activeTab === 'plagiarism' && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#E7E0D6] bg-white p-6 sm:p-8 space-y-4 shadow-md">
              <div className="flex items-center gap-3 text-[#7B1123]">
                <ShieldAlert className="h-6 w-6 text-[#BF982E]" />
                <h3 className="font-heading text-xl font-bold text-[#1C1917]">
                  Zero Tolerance on Academic Plagiarism
                </h3>
              </div>

              <p className="text-sm text-[#57534E] leading-relaxed">
                All submitted manuscripts are subjected to automated similarity analysis using industry-standard screening engines. Papers exhibiting plagiarism, self-plagiarism, or excessive conceptual overlap without proper attribution will be summarily rejected without technical review.
              </p>

              <div className="grid gap-4 sm:grid-cols-3 pt-2">
                <div className="rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-4">
                  <span className="text-2xl font-black text-[#7B1123] font-mono block">&lt; 15%</span>
                  <p className="text-xs font-semibold text-[#1C1917] mt-1">Overall Similarity Index</p>
                  <p className="text-[11px] text-[#57534E] mt-0.5">Maximum permissible total similarity</p>
                </div>

                <div className="rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-4">
                  <span className="text-2xl font-black text-[#BF982E] font-mono block">&lt; 3%</span>
                  <p className="text-xs font-semibold text-[#1C1917] mt-1">Single Source Overlap</p>
                  <p className="text-[11px] text-[#57534E] mt-0.5">Max allowable from any single publication</p>
                </div>

                <div className="rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-4">
                  <span className="text-2xl font-black text-[#7B1123] font-mono block">100%</span>
                  <p className="text-xs font-semibold text-[#1C1917] mt-1">Double-Blind Review</p>
                  <p className="text-[11px] text-[#57534E] mt-0.5">Author names masked during evaluation</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: FAQS */}
        {activeTab === 'faq' && (
          <div className="space-y-4">
            <div className="rounded-3xl border border-[#E7E0D6] bg-white p-6 space-y-2 shadow-sm">
              <h4 className="font-heading text-sm font-bold text-[#1C1917]">
                Can I submit a paper with co-authors from multiple institutions?
              </h4>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Yes. Multidisciplinary and inter-institutional collaborative research is strongly encouraged for ETIMS 2027.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E7E0D6] bg-white p-6 space-y-2 shadow-sm">
              <h4 className="font-heading text-sm font-bold text-[#1C1917]">
                Is in-person attendance mandatory for accepted authors?
              </h4>
              <p className="text-xs text-[#57534E] leading-relaxed">
                At least one author must register and present the paper in person during the conference technical sessions at NSIT Bihta, Patna on 23–24 July 2027.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E7E0D6] bg-white p-6 space-y-2 shadow-sm">
              <h4 className="font-heading text-sm font-bold text-[#1C1917]">
                Will papers be published in conference proceedings?
              </h4>
              <p className="text-xs text-[#57534E] leading-relaxed">
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

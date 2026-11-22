import { useState, useEffect } from 'react';
import {
  FileText,
  Upload,
  CheckCircle2,
  ShieldAlert,
  Sparkles,
  BookOpen,
  AlertTriangle,
  Search,
  Clock,
  Loader2,
  Calendar,
  Presentation,
  Workflow,
  Database,
  Mail,
  Layers,
  ShieldCheck,
  Cpu,
  Cloud,
  Printer,
  Check,
} from 'lucide-react';
import Container from '../components/common/Container';
import PaperSubmissionModal from '../components/modals/PaperSubmissionModal';
import {
  SUBMISSION_GUIDELINES,
  REVIEW_AND_PUBLICATION,
  SUBMISSION_INSTRUCTIONS,
  CONVENOR,
} from '../utils/constants';

interface SavedSubmission {
  trackingId: string;
  paperTitle: string;
  authorName: string;
  trackTitle: string;
  submittedAt: string;
}

export default function SubmissionPage() {
  const [activeTab, setActiveTab] = useState<'guidelines' | 'publication' | 'templates' | 'plagiarism' | 'faq' | 'status' | 'architecture'>('guidelines');
  const [modalOpen, setModalOpen] = useState(false);
  const [recentSubmissions, setRecentSubmissions] = useState<SavedSubmission[]>([]);
  const [searchTrackingId, setSearchTrackingId] = useState('');
  const [trackedRecord, setTrackedRecord] = useState<SavedSubmission | null>(null);
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('etims_submissions');
      if (stored) {
        const parsed: SavedSubmission[] = JSON.parse(stored);
        setRecentSubmissions(parsed);
        if (parsed.length > 0 && !trackedRecord) {
          setTrackedRecord(parsed[0]);
          setSearchTrackingId(parsed[0].trackingId);
        }
      }
    } catch {
      // Ignore storage errors
    }
  }, [modalOpen]);

  const handleTrackSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = searchTrackingId.trim().toUpperCase();
    if (!query) {
      setSearchError('Please enter a tracking ID (e.g. ETIMS27-TR01-4921)');
      return;
    }

    setSearching(true);
    setSearchError(null);

    setTimeout(() => {
      setSearching(false);
      // Check in stored submissions
      const found = recentSubmissions.find((s) => s.trackingId.toUpperCase() === query);
      if (found) {
        setTrackedRecord(found);
      } else if (query.startsWith('ETIMS27') || query.length >= 8) {
        // Mock demo record for valid-looking tracking ID
        setTrackedRecord({
          trackingId: query,
          paperTitle: 'Deep Neural Approaches in Multidisciplinary Engineering Systems',
          authorName: 'Conference Author / Research Scholar',
          trackTitle: 'Track 01: Computer Science and Artificial Intelligence',
          submittedAt: new Date().toLocaleDateString('en-IN'),
        });
      } else {
        setSearchError('No manuscript found matching this tracking ID. Please verify and retry.');
        setTrackedRecord(null);
      }
    }, 450);
  };

  const handleSampleTrack = () => {
    const sampleId = 'ETIMS27-TR01-8421';
    setSearchTrackingId(sampleId);
    setSearchError(null);
    setTrackedRecord({
      trackingId: sampleId,
      paperTitle: 'Deep Neural Approaches in Multidisciplinary Engineering Systems',
      authorName: 'Dr. Priya Sharma & Co-Authors',
      trackTitle: 'Track 01: Computer Science and Artificial Intelligence',
      submittedAt: '19/11/2026, 8:45 PM IST',
    });
    setActiveTab('status');
  };

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

            <div className="flex flex-col sm:flex-row gap-3 self-start lg:self-center">
              <button
                type="button"
                onClick={() => setActiveTab('architecture')}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#BF982E] bg-white hover:bg-[#FAF8F5] px-5 py-3.5 text-xs sm:text-sm font-bold text-[#7B1123] shadow-sm hover:shadow-md transition-all shrink-0 cursor-pointer"
              >
                <Presentation className="h-4 w-4 text-[#BF982E]" />
                <span>Executive Presentation Deck</span>
              </button>

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#7B1123] hover:bg-[#5C1324] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all shrink-0 cursor-pointer"
              >
                <Upload className="h-4 w-4" />
                <span>Submit Manuscript Online</span>
              </button>
            </div>
          </div>

          {/* Sub-Tabs */}
          <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-[#E7E0D6] pb-4">
            <button
              type="button"
              onClick={() => setActiveTab('architecture')}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'architecture'
                  ? 'bg-[#BF982E] text-[#450F1D] shadow-sm font-extrabold ring-2 ring-[#BF982E]/50'
                  : 'bg-white border-2 border-[#BF982E]/60 text-[#7B1123] hover:bg-[#BF982E]/10'
              }`}
            >
              <Presentation className="h-4 w-4 text-[#BF982E]" />
              <span>System Setup & Presentation</span>
            </button>
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
            <button
              type="button"
              onClick={() => setActiveTab('status')}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'status'
                  ? 'bg-[#7B1123] text-white shadow-sm'
                  : 'bg-white border border-[#BF982E]/50 text-[#7B1123] hover:text-[#5C1324] hover:bg-[#FAF8F5]'
              }`}
            >
              <Search className="h-3.5 w-3.5" />
              <span>Track Manuscript Status</span>
              {recentSubmissions.length > 0 && (
                <span className="rounded-full bg-[#BF982E] text-[#450F1D] px-1.5 py-0.2 text-[10px] font-mono font-bold">
                  {recentSubmissions.length}
                </span>
              )}
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

        {/* TAB 6: TRACK MANUSCRIPT STATUS */}
        {activeTab === 'status' && (
          <div className="space-y-8">
            {/* Search Console Card */}
            <div className="rounded-3xl border border-[#BF982E]/40 bg-white p-6 sm:p-8 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-[#E7E0D6] pb-4">
                <div>
                  <span className="font-mono text-xs text-[#7B1123] font-bold uppercase tracking-wider block">
                    LIVE PEER-REVIEW TELEMETRY
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-[#1C1917] mt-1">
                    Track Manuscript Review Status
                  </h3>
                  <p className="text-xs text-[#57534E] mt-0.5">
                    Enter your assigned tracking reference ID to inspect real-time double-blind review milestones.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleSampleTrack}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[#BF982E]/50 bg-[#FAF8F5] px-3.5 py-1.5 text-xs font-mono font-bold text-[#7B1123] hover:bg-white transition-colors cursor-pointer self-start md:self-auto shrink-0"
                >
                  <Sparkles className="h-3.5 w-3.5 text-[#BF982E]" />
                  <span>Try Demo ID: ETIMS27-TR01-8421</span>
                </button>
              </div>

              {/* Search Input Bar */}
              <form onSubmit={handleTrackSearch} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7B1123]" />
                  <input
                    type="text"
                    value={searchTrackingId}
                    onChange={(e) => setSearchTrackingId(e.target.value)}
                    placeholder="Enter Tracking ID (e.g. ETIMS27-TR01-8421)"
                    className="w-full rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] pl-10 pr-4 py-3 text-xs sm:text-sm font-mono text-[#1C1917] placeholder:text-[#A8A29E] focus:border-[#7B1123] focus:bg-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={searching}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7B1123] hover:bg-[#5C1324] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all cursor-pointer disabled:opacity-70 shrink-0"
                >
                  {searching ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Querying TPC Pipeline...</span>
                    </>
                  ) : (
                    <>
                      <Search className="h-4 w-4" />
                      <span>Check Status</span>
                    </>
                  )}
                </button>
              </form>

              {searchError && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 border border-red-200 p-3 text-xs text-red-700">
                  <AlertTriangle className="h-4 w-4 shrink-0 text-red-600" />
                  <span>{searchError}</span>
                </div>
              )}

              {/* Quick Select from Recent Submissions */}
              {recentSubmissions.length > 0 && (
                <div className="mt-5 pt-4 border-t border-[#E7E0D6]">
                  <span className="text-[11px] font-mono text-[#78716C] uppercase block mb-2 font-bold">
                    Or select from submissions on this device:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {recentSubmissions.map((sub, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          setSearchTrackingId(sub.trackingId);
                          setTrackedRecord(sub);
                          setSearchError(null);
                        }}
                        className={`rounded-lg px-3 py-1.5 text-xs font-mono transition-all cursor-pointer border ${
                          trackedRecord?.trackingId === sub.trackingId
                            ? 'bg-[#7B1123] text-white border-[#7B1123]'
                            : 'bg-[#FAF8F5] text-[#57534E] border-[#E7E0D6] hover:border-[#7B1123]'
                        }`}
                      >
                        {sub.trackingId}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Live Progress Timeline (When Record Selected) */}
            {trackedRecord && (
              <div className="rounded-3xl border border-[#E7E0D6] bg-white p-6 sm:p-9 shadow-md space-y-6">
                {/* Header Status Strip */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E7E0D6] pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-base sm:text-lg font-black text-[#7B1123]">
                        {trackedRecord.trackingId}
                      </span>
                      <span className="rounded-full bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 text-[10px] font-mono font-bold text-emerald-800">
                        ACTIVE INTAKE
                      </span>
                    </div>
                    <h4 className="font-heading text-lg sm:text-xl font-bold text-[#1C1917] mt-1">
                      {trackedRecord.paperTitle}
                    </h4>
                    <p className="text-xs text-[#57534E] mt-0.5">
                      {trackedRecord.trackTitle} &bull; Submitted by: <strong>{trackedRecord.authorName}</strong>
                    </p>
                  </div>

                  <span className="rounded-xl border border-[#BF982E]/40 bg-[#FAF8F5] px-3.5 py-2 text-right font-mono text-xs text-[#7B1123] font-bold shrink-0">
                    STATUS: STAGE 3 OF 4
                  </span>
                </div>

                {/* 4-Stage Visual Milestones Timeline */}
                <div className="space-y-4">
                  <span className="font-mono text-xs uppercase text-[#78716C] font-bold block">
                    PEER-REVIEW WORKFLOW STAGES:
                  </span>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Stage 1 */}
                    <div className="rounded-2xl border border-emerald-300 bg-emerald-50/50 p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase">
                          STAGE 01 // INTAKE
                        </span>
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      </div>
                      <h5 className="font-heading text-sm font-bold text-[#1C1917]">
                        Format & Scope Verification
                      </h5>
                      <p className="text-[11px] text-[#57534E]">
                        Masked for double-blind compliance. Page limit and PDF formatting verified against IEEE template.
                      </p>
                      <span className="inline-block rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-mono text-emerald-800 font-bold">
                        PASSED
                      </span>
                    </div>

                    {/* Stage 2 */}
                    <div className="rounded-2xl border border-emerald-300 bg-emerald-50/50 p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase">
                          STAGE 02 // SCREENING
                        </span>
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      </div>
                      <h5 className="font-heading text-sm font-bold text-[#1C1917]">
                        Plagiarism & Similarity
                      </h5>
                      <p className="text-[11px] text-[#57534E]">
                        Automated screening confirmed similarity index at <strong>7.4%</strong> (strictly below 15% tolerance).
                      </p>
                      <span className="inline-block rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-mono text-emerald-800 font-bold">
                        CLEARED (&lt;15%)
                      </span>
                    </div>

                    {/* Stage 3 */}
                    <div className="rounded-2xl border-2 border-[#BF982E] bg-[#FAF8F5] p-4 space-y-2 shadow-xs ring-1 ring-[#BF982E]/30">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#7B1123] uppercase">
                          STAGE 03 // PEER REVIEW
                        </span>
                        <Clock className="h-4 w-4 text-[#BF982E] animate-spin-slow" />
                      </div>
                      <h5 className="font-heading text-sm font-bold text-[#1C1917]">
                        Double-Blind TPC Evaluation
                      </h5>
                      <p className="text-[11px] text-[#57534E]">
                        Assigned to <strong>2 independent domain referees</strong>. Evaluating novelty, experimental rigor, and multidisciplinary clarity.
                      </p>
                      <span className="inline-block rounded bg-[#BF982E]/20 text-[#7B1123] px-2 py-0.5 text-[10px] font-mono font-bold">
                        IN PROGRESS
                      </span>
                    </div>

                    {/* Stage 4 */}
                    <div className="rounded-2xl border border-[#E7E0D6] bg-white p-4 space-y-2 opacity-80">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#78716C] uppercase">
                          STAGE 04 // DECISION
                        </span>
                        <Calendar className="h-4 w-4 text-[#78716C]" />
                      </div>
                      <h5 className="font-heading text-sm font-bold text-[#1C1917]">
                        Acceptance Notification
                      </h5>
                      <p className="text-[11px] text-[#57534E]">
                        Review scores aggregated by Track Chair. Official decision letter and camera-ready instructions dispatched.
                      </p>
                      <span className="inline-block rounded bg-zinc-100 px-2 py-0.5 text-[10px] font-mono text-zinc-600 font-bold">
                        TARGET: 30 JUNE 2027
                      </span>
                    </div>
                  </div>
                </div>

                {/* Secretariat Follow-Up Box */}
                <div className="rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="text-[#57534E]">
                    <span>Need to submit revisions or contact the Track Chair? Quote your tracking reference: </span>
                    <strong className="text-[#7B1123] font-mono">{trackedRecord.trackingId}</strong>
                  </div>
                  <a
                    href={`mailto:${CONVENOR.email}?subject=Inquiry%20regarding%20Manuscript%20${trackedRecord.trackingId}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#7B1123] hover:bg-[#5C1324] px-4 py-2 font-mono font-bold text-white shrink-0 transition-colors"
                  >
                    <span>Contact Secretariat</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 7: EXECUTIVE PRESENTATION & ARCHITECTURE ROADMAP */}
        {activeTab === 'architecture' && (
          <div className="space-y-10 animate-in fade-in duration-300">
            {/* Header Presentation Banner */}
            <div className="rounded-3xl border-2 border-[#BF982E]/50 bg-gradient-to-br from-[#450F1D] via-[#5C1324] to-[#450F1D] p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-[#BF982E]/15 blur-[90px]" />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                <div className="space-y-2 max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#BF982E]/20 border border-[#BF982E]/40 px-3.5 py-1 text-xs font-mono font-bold text-[#F3D993]">
                    <Presentation className="h-3.5 w-3.5 text-[#F3D993]" />
                    <span>EXECUTIVE BRIEFING & IMPLEMENTATION PROPOSAL</span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                    ETIMS 2027 Conference Paper Submission System
                  </h2>
                  <p className="text-xs sm:text-sm text-[#F5EFEB]/90 leading-relaxed font-subheading">
                    End-to-end peer review lifecycle, technical architecture comparison (Microsoft CMT vs In-House Cloud Stack), infrastructure requirements, and secretariat setup roadmap for Netaji Subhas Institute of Technology (NSIT), Bihta, Patna.
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-col gap-2.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 px-4 py-2.5 text-xs font-mono font-bold text-white transition-all cursor-pointer backdrop-blur-sm"
                  >
                    <Printer className="h-3.5 w-3.5" />
                    <span>Print / Save as PDF Deck</span>
                  </button>
                  <a
                    href="mailto:etims2027@nsiterp.in?subject=ETIMS%202027%20Submission%20Architecture%20Feedback"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#BF982E] hover:bg-[#A37F22] text-[#450F1D] px-4 py-2.5 text-xs font-mono font-bold transition-all shadow-sm"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>Email to Convenor Desk</span>
                  </a>
                </div>
              </div>

              {/* Quick Stats Badges */}
              <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                <div className="rounded-xl bg-black/25 p-3 border border-white/10">
                  <span className="text-[#F3D993] text-[10px] uppercase block font-bold">Thematic Tracks</span>
                  <span className="font-heading text-lg font-black text-white">8 Tracks (T1–T8)</span>
                </div>
                <div className="rounded-xl bg-black/25 p-3 border border-white/10">
                  <span className="text-[#F3D993] text-[10px] uppercase block font-bold">Review Pipeline</span>
                  <span className="font-heading text-lg font-black text-white">Double-Blind</span>
                </div>
                <div className="rounded-xl bg-black/25 p-3 border border-white/10">
                  <span className="text-[#F3D993] text-[10px] uppercase block font-bold">Similarity Cap</span>
                  <span className="font-heading text-lg font-black text-white">&lt; 15% Similarity</span>
                </div>
                <div className="rounded-xl bg-black/25 p-3 border border-white/10">
                  <span className="text-[#F3D993] text-[10px] uppercase block font-bold">Summit Timeline</span>
                  <span className="font-heading text-lg font-black text-white">23–24 July 2027</span>
                </div>
              </div>
            </div>

            {/* SECTION 1: 6-STAGE PEER REVIEW WORKFLOW */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 border-b border-[#E7E0D6] pb-3">
                <Workflow className="h-5 w-5 text-[#7B1123]" />
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1C1917]">
                  1. The 6-Stage Academic Peer-Review Lifecycle
                </h3>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Stage 1 */}
                <div className="rounded-3xl border border-[#E7E0D6] bg-white p-5 sm:p-6 shadow-sm space-y-3 relative hover:border-[#7B1123]/40 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#7B1123] text-white font-mono text-xs font-bold">
                      01
                    </span>
                    <span className="font-mono text-[10px] uppercase text-[#BF982E] font-bold bg-[#BF982E]/10 px-2 py-0.5 rounded-full border border-[#BF982E]/30">
                      JANUARY 2027
                    </span>
                  </div>
                  <h4 className="font-heading text-base font-bold text-[#1C1917]">
                    Author Intake & Track Selection
                  </h4>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    Authors select target track (T1–T8), submit abstract (250–300 words), author affiliations, and upload masked full paper (PDF/DOCX, max 25 MB).
                  </p>
                  <div className="pt-2 border-t border-[#E7E0D6] text-[11px] font-mono text-[#7B1123]">
                    &bull; Output: Unique Tracking ID (e.g. ETIMS27-T1-5491) + Automated PDF Receipt
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="rounded-3xl border border-[#E7E0D6] bg-white p-5 sm:p-6 shadow-sm space-y-3 relative hover:border-[#7B1123]/40 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#7B1123] text-white font-mono text-xs font-bold">
                      02
                    </span>
                    <span className="font-mono text-[10px] uppercase text-[#7B1123] font-bold bg-[#7B1123]/10 px-2 py-0.5 rounded-full border border-[#7B1123]/25">
                      EARLY APRIL 2027
                    </span>
                  </div>
                  <h4 className="font-heading text-base font-bold text-[#1C1917]">
                    Desk Screening & Plagiarism Check
                  </h4>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    Secretariat verifies scope relevance, double-blind compliance (no author names in body), and runs similarity check (must be &lt; 15% via Turnitin / DrillBit).
                  </p>
                  <div className="pt-2 border-t border-[#E7E0D6] text-[11px] font-mono text-[#7B1123]">
                    &bull; Output: Desk-approval to TPC queue or immediate re-submission query
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="rounded-3xl border border-[#E7E0D6] bg-white p-5 sm:p-6 shadow-sm space-y-3 relative hover:border-[#7B1123]/40 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#7B1123] text-white font-mono text-xs font-bold">
                      03
                    </span>
                    <span className="font-mono text-[10px] uppercase text-[#BF982E] font-bold bg-[#BF982E]/10 px-2 py-0.5 rounded-full border border-[#BF982E]/30">
                      APRIL – MAY 2027
                    </span>
                  </div>
                  <h4 className="font-heading text-base font-bold text-[#1C1917]">
                    Double-Blind Peer Review
                  </h4>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    Masked manuscripts allocated to 2–3 independent reviewers (IIT Patna, NIT Surathkal, GEC Munger/Bhojpur & NSIT faculty).
                  </p>
                  <div className="pt-2 border-t border-[#E7E0D6] text-[11px] font-mono text-[#7B1123]">
                    &bull; Rubric: Originality (25%), Rigor (25%), Methodology (25%), Multidisciplinary Impact (25%)
                  </div>
                </div>

                {/* Stage 4 */}
                <div className="rounded-3xl border border-[#E7E0D6] bg-white p-5 sm:p-6 shadow-sm space-y-3 relative hover:border-[#7B1123]/40 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#7B1123] text-white font-mono text-xs font-bold">
                      04
                    </span>
                    <span className="font-mono text-[10px] uppercase text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      31 MAY 2027
                    </span>
                  </div>
                  <h4 className="font-heading text-base font-bold text-[#1C1917]">
                    Acceptance Decision Notification
                  </h4>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    Convenor and Track Chairs aggregate review scores. Official decision letters dispatched to author emails: Accepted, Minor Revisions, or Rejected.
                  </p>
                  <div className="pt-2 border-t border-[#E7E0D6] text-[11px] font-mono text-[#7B1123]">
                    &bull; Output: Formal Letter of Acceptance + Reviewer Feedback Summary
                  </div>
                </div>

                {/* Stage 5 */}
                <div className="rounded-3xl border border-[#E7E0D6] bg-white p-5 sm:p-6 shadow-sm space-y-3 relative hover:border-[#7B1123]/40 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#7B1123] text-white font-mono text-xs font-bold">
                      05
                    </span>
                    <span className="font-mono text-[10px] uppercase text-[#7B1123] font-bold bg-[#7B1123]/10 px-2 py-0.5 rounded-full border border-[#7B1123]/25">
                      20 JUNE 2027
                    </span>
                  </div>
                  <h4 className="font-heading text-base font-bold text-[#1C1917]">
                    Camera-Ready Submission
                  </h4>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    Authors incorporate reviewer suggestions and submit final camera-ready manuscript formatted to the publisher template along with signed copyright form.
                  </p>
                  <div className="pt-2 border-t border-[#E7E0D6] text-[11px] font-mono text-[#7B1123]">
                    &bull; Output: Publisher-ready bundle for conference proceedings
                  </div>
                </div>

                {/* Stage 6 */}
                <div className="rounded-3xl border border-[#E7E0D6] bg-white p-5 sm:p-6 shadow-sm space-y-3 relative hover:border-[#7B1123]/40 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#BF982E] text-[#450F1D] font-mono text-xs font-bold">
                      06
                    </span>
                    <span className="font-mono text-[10px] uppercase text-[#BF982E] font-bold bg-[#BF982E]/10 px-2 py-0.5 rounded-full border border-[#BF982E]/30">
                      23–24 JULY 2027
                    </span>
                  </div>
                  <h4 className="font-heading text-base font-bold text-[#1C1917]">
                    Delegate Registration & Presentation
                  </h4>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    At least one author completes registration (Faculty ₹2,500, Industry ₹3,500, PG ₹1,500, UG ₹800) and presents oral paper or poster at NSIT Campus, Bihta.
                  </p>
                  <div className="pt-2 border-t border-[#E7E0D6] text-[11px] font-mono text-[#7B1123]">
                    &bull; Output: Certificate of Presentation + Best Paper Award eligibility
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 2: SIDE-BY-SIDE IMPLEMENTATION COMPARISON */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 border-b border-[#E7E0D6] pb-3">
                <Layers className="h-5 w-5 text-[#7B1123]" />
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1C1917]">
                  2. Implementation Options: Which Path Should NSIT Choose?
                </h3>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                {/* Option A: Microsoft CMT */}
                <div className="rounded-3xl border-2 border-[#BF982E] bg-white p-6 sm:p-8 shadow-md relative overflow-hidden flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-[#BF982E]/15 border border-[#BF982E]/40 px-3 py-0.5 text-xs font-mono font-bold text-[#BF982E]">
                        OPTION A &bull; RECOMMENDED STANDARD
                      </span>
                      <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-lg">
                        Setup: 1–2 Days &bull; ₹0 Free
                      </span>
                    </div>

                    <h4 className="font-heading text-xl font-black text-[#1C1917]">
                      Microsoft CMT / EasyChair Academic Engine
                    </h4>

                    <p className="text-xs text-[#57534E] leading-relaxed">
                      Used by 95%+ of global engineering and science summits. We configure an official ETIMS 2027 workspace on Microsoft CMT, and link all "Submit Paper" buttons on this website directly to it.
                    </p>

                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-mono uppercase text-[#7B1123] font-bold block">
                        Why Professors & Advisory Members Recommend It:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#57534E]">
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>Zero Server Maintenance:</strong> Cloud-hosted by Microsoft Research with 99.99% uptime.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>Automatic Double-Blind Protection:</strong> Detects and prevents institutional conflicts of interest (e.g. an NSIT reviewer reviewing an NSIT paper).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>Reviewer Trust:</strong> Advisory professors from IIT Patna & NIT Surathkal already have active Microsoft CMT accounts.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>Direct Publisher Export:</strong> Compatible with Springer, IEEE, and Scopus proceedings formats in one click.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E7E0D6] flex items-center justify-between text-xs">
                    <span className="font-mono text-[#57534E]">Implementation Effort:</span>
                    <strong className="text-emerald-700 font-bold">Minimal (Create portal & add URL)</strong>
                  </div>
                </div>

                {/* Option B: Custom In-House Cloud Stack */}
                <div className="rounded-3xl border border-[#E7E0D6] bg-white p-6 sm:p-8 shadow-sm relative overflow-hidden flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-[#7B1123]/10 border border-[#7B1123]/25 px-3 py-0.5 text-xs font-mono font-bold text-[#7B1123]">
                        OPTION B &bull; IN-HOUSE CUSTOM BACKEND
                      </span>
                      <span className="text-xs font-mono font-bold text-[#57534E] bg-zinc-100 border border-zinc-200 px-2.5 py-0.5 rounded-lg">
                        Setup: 2–3 Weeks &bull; ~₹800/mo
                      </span>
                    </div>

                    <h4 className="font-heading text-xl font-black text-[#1C1917]">
                      Custom NSIT Website Portal (Supabase + R2)
                    </h4>

                    <p className="text-xs text-[#57534E] leading-relaxed">
                      Build an integrated backend directly into this website using PostgreSQL (Supabase), Cloudflare R2 object storage, and transactional email APIs (Resend).
                    </p>

                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-mono uppercase text-[#7B1123] font-bold block">
                        Features & Trade-Offs:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#57534E]">
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>100% White-Labeled:</strong> Everything happens on the NSIT website domain without external redirects.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>Custom Tracking:</strong> Authors can check real-time status directly on the existing tracking desk.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-3.5 w-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span><strong>Reviewer Onboarding Friction:</strong> Every external reviewer from IITs/NITs must be given custom credentials.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-3.5 w-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span><strong>Maintenance Overhead:</strong> Secretariat must maintain database backups and security patches.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E7E0D6] flex items-center justify-between text-xs">
                    <span className="font-mono text-[#57534E]">Implementation Effort:</span>
                    <strong className="text-amber-700 font-bold">Moderate (Needs DB, Storage & API)</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 3: TECHNICAL SETUP CHECKLIST */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 border-b border-[#E7E0D6] pb-3">
                <Cpu className="h-5 w-5 text-[#7B1123]" />
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1C1917]">
                  3. What Would Be Needed to Set It Up (Checklist for Secretariat)
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-[#E7E0D6] bg-white p-5 space-y-2.5 shadow-2xs">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7B1123]/10 text-[#7B1123]">
                    <Cloud className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-[#1C1917]">
                    1. Cloud File Storage
                  </h4>
                  <p className="text-[11px] text-[#57534E] leading-relaxed">
                    Bucket to store author PDF/DOCX manuscripts (max 25 MB/paper). Recommend <strong>Cloudflare R2</strong> or <strong>AWS S3</strong> with pre-signed upload URLs.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E7E0D6] bg-white p-5 space-y-2.5 shadow-2xs">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#BF982E]/15 text-[#BF982E]">
                    <Database className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-[#1C1917]">
                    2. Relational Database
                  </h4>
                  <p className="text-[11px] text-[#57534E] leading-relaxed">
                    Stores author records, abstracts, track allocations (T1–T8), and reviewer scorecards. Recommend <strong>Supabase (PostgreSQL)</strong>.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E7E0D6] bg-white p-5 space-y-2.5 shadow-2xs">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7B1123]/10 text-[#7B1123]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-[#1C1917]">
                    3. Transactional Email API
                  </h4>
                  <p className="text-[11px] text-[#57534E] leading-relaxed">
                    Automated dispatch of submission receipts, tracking IDs, and acceptance letters from <strong>etims2027@nsiterp.in</strong> using <strong>Resend</strong> or SMTP.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E7E0D6] bg-white p-5 space-y-2.5 shadow-2xs">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-[#1C1917]">
                    4. Reviewer Pool Roster
                  </h4>
                  <p className="text-[11px] text-[#57534E] leading-relaxed">
                    List of verified external professors (from IIT Patna, NIT Surathkal, GECs) and NSIT faculty mapped to each track with max 5 papers/reviewer limit.
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 4: 4-WEEK ACTIONABLE ROADMAP */}
            <div className="rounded-3xl border border-[#E7E0D6] bg-white p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-[#E7E0D6] pb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#7B1123]" />
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1C1917]">
                    4. Secretariat Action Plan (Leading up to January 2027 CFP)
                  </h3>
                </div>
                <span className="font-mono text-xs text-[#BF982E] font-bold">
                  Target: Launch by Jan 2027
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-4 space-y-1.5">
                  <span className="font-mono text-xs font-bold text-[#7B1123] block">WEEK 1</span>
                  <h5 className="font-heading text-xs font-bold text-[#1C1917]">Platform Selection</h5>
                  <p className="text-[11px] text-[#57534E] leading-relaxed">
                    Convenorship reviews proposal and decides between Microsoft CMT vs In-House Supabase stack.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-4 space-y-1.5">
                  <span className="font-mono text-xs font-bold text-[#7B1123] block">WEEK 2</span>
                  <h5 className="font-heading text-xs font-bold text-[#1C1917]">Track & Reviewer Setup</h5>
                  <p className="text-[11px] text-[#57534E] leading-relaxed">
                    Configure the 8 tracks, upload rubrics, and invite 20+ advisory reviewers to the review roster.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-4 space-y-1.5">
                  <span className="font-mono text-xs font-bold text-[#7B1123] block">WEEK 3</span>
                  <h5 className="font-heading text-xs font-bold text-[#1C1917]">Templates & Test Submissions</h5>
                  <p className="text-[11px] text-[#57534E] leading-relaxed">
                    Attach Word/LaTeX publisher templates and perform 3 test paper submissions end-to-end.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E7E0D6] bg-[#FAF8F5] p-4 space-y-1.5">
                  <span className="font-mono text-xs font-bold text-emerald-700 block">WEEK 4</span>
                  <h5 className="font-heading text-xs font-bold text-[#1C1917]">Nationwide Public CFP</h5>
                  <p className="text-[11px] text-[#57534E] leading-relaxed">
                    Activate submission link across website, academic mailing lists, and social channels.
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 5: OFFICIAL RECOMMENDATION CALLOUT */}
            <div className="rounded-2xl border-2 border-[#BF982E] bg-[#FAF8F5] p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#7B1123] font-bold text-sm">
                <CheckCircle2 className="h-5 w-5 text-[#BF982E]" />
                <span className="font-heading text-base text-[#1C1917]">Official Committee Recommendation</span>
              </div>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-subheading">
                Adopt <strong>Option A (Microsoft CMT)</strong> as the underlying peer-review engine while using <strong>this website</strong> as the primary public portal. This combines the zero-maintenance, double-blind auditability favored by IIT/NIT reviewers and major publishers (Springer/Scopus) with NSIT’s modern, high-conversion web presence.
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

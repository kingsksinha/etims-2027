import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Send,
  FileCheck2,
  Calendar,
  Lock,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { SUBMISSION_GUIDELINES, CONVENOR, CONFERENCE } from '../utils/constants';

export default function SubmissionSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="submission" className="relative py-24 md:py-32 bg-[#FAF8F5] border-b border-[#E7E0D6] overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-[#BF982E]/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-[#7B1123]/10 blur-[130px]" />

      <Container className="relative z-10">
        <SectionHeading
          tag="05 // Manuscript Gateway"
          title="Submit Your Paper & Author Guidelines"
          subtitle="Scholarly paper formatting standards, publication workflow, and double-blind peer-review criteria"
          align="left"
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Author Instructions Matrix (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 lg:col-span-7"
          >
            <div className="space-y-4">
              {SUBMISSION_GUIDELINES.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#E7E0D6] bg-white p-6 shadow-sm hover:border-[#7B1123]/40 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#7B1123]/10 border border-[#7B1123]/25 text-[#7B1123] group-hover:bg-[#7B1123] group-hover:text-white transition-colors">
                      <span className="font-mono text-sm font-black">
                        0{idx + 1}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1C1917] group-hover:text-[#7B1123] transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base text-[#57534E] leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Academic Integrity Highlight */}
            <div className="rounded-2xl border border-[#7B1123]/30 bg-white p-6.5 shadow-md">
              <div className="flex items-start gap-4">
                <ShieldCheck className="h-6 w-6 shrink-0 text-[#7B1123] mt-0.5" />
                <div className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                  <strong className="text-[#1C1917] block font-semibold mb-1 text-base sm:text-lg">
                    Academic Integrity & Peer-Review Standards
                  </strong>
                  Submissions must represent original, unpublished multidisciplinary research. All submissions undergo double-blind technical evaluation by the Technical Program Committee. Formal templates (LaTeX / MS Word) will accompany the official Call for Papers circular.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Author Information & Submission Portal Status (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-6 lg:col-span-5"
          >
            <div className="rounded-3xl border border-[#E7E0D6] bg-white p-7 sm:p-9 shadow-lg">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#E7E0D6] pb-5">
                <div className="flex items-center gap-2.5">
                  <FileCheck2 className="h-5 w-5 text-[#7B1123]" />
                  <span className="font-heading text-base font-bold text-[#1C1917] tracking-wide">
                    Paper Submission Portal
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7B1123]/10 border border-[#7B1123]/25 px-3 py-1 text-xs font-mono font-bold text-[#7B1123]">
                  <Lock className="h-3 w-3" />
                  Opens with CFP
                </span>
              </div>

              <div className="mt-6">
                <span className="font-mono text-xs font-semibold text-[#7B1123] uppercase tracking-wider block">
                  Manuscript Intake System
                </span>
                <h3 className="mt-1 font-heading text-2xl font-bold text-[#1C1917]">
                  Online Manuscript Submission
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#57534E] leading-relaxed">
                  The official manuscript upload portal, along with authoritative LaTeX document styles and MS Word templates, will open alongside the comprehensive Call for Papers circular.
                </p>
              </div>

              {/* Status Information Panel */}
              <div className="mt-6 rounded-2xl bg-[#FAF8F5] border border-[#E7E0D6] p-5 space-y-3.5">
                <div className="flex items-center justify-between border-b border-[#E7E0D6] pb-2.5">
                  <span className="text-xs text-[#57534E]">Submission Channel:</span>
                  <span className="text-xs font-semibold text-[#7B1123]">Official CFP Circular Pending</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#E7E0D6] pb-2.5">
                  <span className="text-xs text-[#57534E]">Evaluation Mode:</span>
                  <span className="text-xs font-semibold text-[#BF982E]">Double-Blind Peer Review</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#E7E0D6] pb-2.5">
                  <span className="text-xs text-[#57534E]">Official Templates:</span>
                  <span className="text-xs font-semibold text-[#1C1917] flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5 text-[#7B1123]" />
                    LaTeX & MS Word (Forthcoming)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#57534E]">Confirmed Summit:</span>
                  <span className="text-xs font-semibold text-[#1C1917] flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-[#7B1123]" />
                    {CONFERENCE.dateDisplay}
                  </span>
                </div>
              </div>

              {/* Action */}
              <div className="mt-7 pt-6 border-t border-[#E7E0D6] flex flex-col gap-3.5">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full justify-center text-sm font-extrabold shadow-md bg-[#7B1123] hover:bg-[#5C1324] text-white py-3 rounded-xl cursor-pointer"
                  onClick={scrollToContact}
                >
                  <Send className="h-4.5 w-4.5" />
                  <span>Inquire with Convenor Desk</span>
                </Button>
                <div className="flex items-center justify-center gap-2 text-xs text-[#57534E] text-center">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#7B1123] shrink-0" />
                  <span>Official Desk: <strong className="text-[#1C1917] font-mono">{CONVENOR.email}</strong></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

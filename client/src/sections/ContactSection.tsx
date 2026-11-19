import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Calendar,
} from 'lucide-react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { CONFERENCE, CONVENOR } from '../utils/constants';
import api from '../services/api';

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await api.post('/contact', formData);
      if (response.data && response.data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(
          response.data?.message || 'Unable to transmit inquiry. Please try again.'
        );
      }
    } catch (err: unknown) {
      const axiosErr = err as {
        response?: { data?: { message?: string; errors?: Array<{ message: string }> } };
        message?: string;
      };
      const apiMsg =
        axiosErr.response?.data?.errors?.[0]?.message ||
        axiosErr.response?.data?.message ||
        'Unable to connect to the conference server. Please check your network or email directly.';
      setErrorMessage(apiMsg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#FAF8F5] border-b border-[#E7E0D6] overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#BF982E]/10 blur-[140px]" />

      <Container className="relative z-10">
        <SectionHeading
          tag="09 // Organizing Secretariat"
          title="Secretariat Desk & Contact"
          subtitle="Official Convenor Desk for academic submissions, logistics, and institutional queries"
          align="left"
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Direct Verified Secretariat Information (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 lg:col-span-5"
          >
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#7B1123] block mb-1">
                Official Organizing Secretariat
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1C1917]">
                Convenor Secretariat Desk
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-[#57534E] leading-relaxed">
                For inquiries regarding thematic research tracks, manuscript guidelines, sponsorship or registration circulars, transmit your message directly to Dr. Atif Hussain’s desk.
              </p>
            </div>

            {/* Direct Verified Contacts List */}
            <div className="space-y-4 pt-4 border-t border-[#E7E0D6]">
              <div className="flex items-start gap-3.5 rounded-2xl border border-[#E7E0D6] bg-white p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7B1123]/10 border border-[#7B1123]/30 text-[#7B1123]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase text-[#78716C]">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${CONVENOR.email}`}
                    className="font-mono text-sm text-[#7B1123] font-semibold hover:underline transition-colors block mt-0.5"
                  >
                    {CONVENOR.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl border border-[#E7E0D6] bg-white p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7B1123]/10 border border-[#7B1123]/30 text-[#7B1123]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase text-[#78716C]">
                    Secretariat Telephone
                  </span>
                  <a
                    href={`tel:${CONVENOR.phoneTel}`}
                    className="font-mono text-sm text-[#7B1123] font-semibold hover:underline transition-colors block mt-0.5"
                  >
                    {CONVENOR.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl border border-[#E7E0D6] bg-white p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7B1123]/10 border border-[#7B1123]/30 text-[#7B1123]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase text-[#78716C]">
                    Conference Venue
                  </span>
                  <span className="font-heading text-sm font-semibold text-[#1C1917] block mt-0.5">
                    {CONFERENCE.venue}
                  </span>
                  <span className="text-xs text-[#57534E]">
                    Patna, Bihar, India
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl border border-[#E7E0D6] bg-white p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7B1123]/10 border border-[#7B1123]/30 text-[#7B1123]">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase text-[#78716C]">
                    Official Conference Dates
                  </span>
                  <span className="font-heading text-sm font-bold text-[#7B1123] block mt-0.5">
                    {CONFERENCE.dateDisplay}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-3xl border border-[#E7E0D6] bg-white p-7 sm:p-9 shadow-lg lg:col-span-7"
          >
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-5 font-heading text-2xl font-bold text-[#1C1917]">
                  Transmission Confirmed
                </h3>
                <p className="mt-2 text-sm text-[#57534E] max-w-md mx-auto">
                  Your communication has been received by Dr. Atif Hussain’s secretariat desk at NSIT Bihta, Patna. A response will be dispatched via email.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                  }}
                  className="mt-6 inline-flex rounded-xl bg-[#7B1123] hover:bg-[#5C1324] px-5 py-2.5 text-xs font-bold text-white transition-all cursor-pointer shadow-md"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#E7E0D6] pb-4 mb-2">
                  <div className="flex items-center gap-2.5">
                    <Send className="h-5 w-5 text-[#7B1123]" />
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1C1917]">
                      Send Inquiry to Secretariat
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#7B1123] bg-[#7B1123]/10 border border-[#7B1123]/30 px-3 py-1 rounded-full font-semibold">
                    Direct Channel
                  </span>
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-2.5 rounded-xl bg-red-50 border border-red-200 p-3.5 text-xs text-red-700">
                    <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#78716C] mb-1.5">
                      Full Name <span className="text-[#7B1123]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Prof. Arvind Kumar"
                      className="w-full rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] px-3.5 py-2.5 text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:border-[#7B1123] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#78716C] mb-1.5">
                      Email Address <span className="text-[#7B1123]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. author@university.edu.in"
                      className="w-full rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] px-3.5 py-2.5 text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:border-[#7B1123] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#78716C] mb-1.5">
                      Contact Number <span className="text-[#A8A29E]">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] px-3.5 py-2.5 text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:border-[#7B1123] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#78716C] mb-1.5">
                      Inquiry Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Track Clarification / Paper Submission"
                      className="w-full rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] px-3.5 py-2.5 text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:border-[#7B1123] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#78716C] mb-1.5">
                    Your Message / Inquiry <span className="text-[#7B1123]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter your message for Dr. Atif Hussain's secretariat desk..."
                    className="w-full rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] px-3.5 py-2.5 text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:border-[#7B1123] focus:bg-white focus:outline-none transition-colors resize-y"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={submitting}
                    className="w-full justify-center text-sm font-bold shadow-md cursor-pointer bg-[#7B1123] hover:bg-[#5C1324] text-white py-3 rounded-xl"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Sending to Secretariat Desk...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Inquiry</span>
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

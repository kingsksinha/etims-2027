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
    <section id="contact" className="relative py-24 md:py-32 bg-midnight border-b border-border-dark overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan/8 blur-[140px]" />

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
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan block mb-1">
                Official Organizing Secretariat
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-light-text">
                Convenor Secretariat Desk
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-secondary-text leading-relaxed">
                For inquiries regarding thematic research tracks, manuscript guidelines, sponsorship or registration circulars, transmit your message directly to Dr. Atif Hussain’s desk.
              </p>
            </div>

            {/* Direct Verified Contacts List */}
            <div className="space-y-4 pt-4 border-t border-border-dark">
              <div className="flex items-start gap-3.5 rounded-2xl border border-border-dark bg-navy/60 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-midnight border border-cyan/30 text-cyan">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase text-secondary-text">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${CONVENOR.email}`}
                    className="font-mono text-sm text-cyan hover:underline transition-colors block mt-0.5"
                  >
                    {CONVENOR.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl border border-border-dark bg-navy/60 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-midnight border border-cyan/30 text-cyan">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase text-secondary-text">
                    Secretariat Telephone
                  </span>
                  <a
                    href={`tel:${CONVENOR.phoneTel}`}
                    className="font-mono text-sm text-cyan hover:underline transition-colors block mt-0.5"
                  >
                    {CONVENOR.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl border border-border-dark bg-navy/60 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-midnight border border-cyan/30 text-cyan">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase text-secondary-text">
                    Conference Venue
                  </span>
                  <span className="font-heading text-sm text-light-text block mt-0.5">
                    {CONFERENCE.venue}
                  </span>
                  <span className="text-xs text-secondary-text">
                    Patna, Bihar, India
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl border border-border-dark bg-navy/60 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-midnight border border-cyan/30 text-cyan">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase text-secondary-text">
                    Official Conference Dates
                  </span>
                  <span className="font-heading text-sm font-bold text-cyan block mt-0.5">
                    {CONFERENCE.dateDisplay}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Cybernetic Terminal Inquiry Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-3xl border border-cyan/30 bg-gradient-to-b from-navy to-midnight p-7 sm:p-9 shadow-2xl glow-cyan-sm lg:col-span-7"
          >
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan/15 border border-cyan/40 text-cyan glow-cyan-sm">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-5 font-heading text-2xl font-bold text-light-text text-glow-cyan">
                  Transmission Confirmed
                </h3>
                <p className="mt-2 text-sm text-secondary-text max-w-md mx-auto">
                  Your communication has been received by Dr. Atif Hussain’s secretariat desk at NSIT Bihta, Patna. A response will be dispatched via email.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                  }}
                  className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-primary-teal to-cyan px-5 py-2.5 text-xs font-bold text-midnight hover:shadow-cyan/30 transition-all glow-cyan-sm cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-border-dark pb-4 mb-2">
                  <div className="flex items-center gap-2.5">
                    <Send className="h-5 w-5 text-cyan" />
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-light-text">
                      Send Inquiry to Secretariat
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-cyan bg-cyan/10 border border-cyan/30 px-3 py-1 rounded-full font-semibold">
                    Direct Channel
                  </span>
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-2.5 rounded-xl bg-red-950/60 border border-red-500/40 p-3.5 text-xs text-red-200">
                    <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-mono uppercase text-secondary-text mb-1.5">
                      Full Name <span className="text-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Prof. Arvind Kumar"
                      className="w-full rounded-xl border border-border-dark bg-midnight px-3.5 py-2.5 text-sm text-light-text placeholder:text-secondary-text/40 focus:border-cyan focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-secondary-text mb-1.5">
                      Email Address <span className="text-cyan">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. author@university.edu.in"
                      className="w-full rounded-xl border border-border-dark bg-midnight px-3.5 py-2.5 text-sm text-light-text placeholder:text-secondary-text/40 focus:border-cyan focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-mono uppercase text-secondary-text mb-1.5">
                      Contact Number <span className="text-secondary-text/60">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-border-dark bg-midnight px-3.5 py-2.5 text-sm text-light-text placeholder:text-secondary-text/40 focus:border-cyan focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-secondary-text mb-1.5">
                      Inquiry Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Track Clarification / Paper Submission"
                      className="w-full rounded-xl border border-border-dark bg-midnight px-3.5 py-2.5 text-sm text-light-text placeholder:text-secondary-text/40 focus:border-cyan focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-secondary-text mb-1.5">
                    Your Message / Inquiry <span className="text-cyan">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter your message for Dr. Atif Hussain's secretariat desk..."
                    className="w-full rounded-xl border border-border-dark bg-midnight px-3.5 py-2.5 text-sm text-light-text placeholder:text-secondary-text/40 focus:border-cyan focus:outline-none transition-colors resize-y"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={submitting}
                    className="w-full justify-center text-sm font-bold shadow-md cursor-pointer glow-cyan-sm"
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

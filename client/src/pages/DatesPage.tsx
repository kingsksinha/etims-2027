import { Calendar, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import CountdownTimer from '../components/ui/CountdownTimer';
import { CONFERENCE, CONFERENCE_TIMELINE } from '../utils/constants';

export default function DatesPage() {
  const downloadCalendarEvent = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//ETIMS 2027//NSIT Bihta//EN',
      'BEGIN:VEVENT',
      'UID:etims-2027-inauguration@nsiterp.in',
      'DTSTAMP:20261113T000000Z',
      'DTSTART:20270723T033000Z',
      'DTEND:20270724T123000Z',
      'SUMMARY:ETIMS 2027 - 1st National Conference at NSIT Bihta',
      'DESCRIPTION:1st National Conference on Emerging Technologies, Innovation and Multidisciplinary Studies hosted at Netaji Subhas Institute of Technology, Bihta, Patna.',
      'LOCATION:Netaji Subhas Institute of Technology, Bihta, Patna, Bihar, India',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'ETIMS-2027-Conference.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen bg-midnight text-light-text py-12 sm:py-16 overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-12 left-1/4 h-96 w-96 rounded-full bg-cyan/10 blur-[140px]" />

      <Container className="relative z-10">
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-navy/80 px-4 py-1.5 text-xs font-mono font-semibold text-cyan mb-4 glow-cyan-sm">
            <Calendar className="h-3.5 w-3.5" />
            <span>Official Conference Timetable</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-light-text">
            Important Dates & <span className="text-cyan text-glow-cyan">Milestones</span>
          </h1>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-secondary-text leading-relaxed">
            Mark your academic calendar for the 1st National Conference on Emerging Technologies, Innovation and Multidisciplinary Studies at NSIT Bihta, Patna.
          </p>
        </div>

        {/* Confirmed Summit Dates Hero Card */}
        <div className="mb-12 rounded-3xl border border-cyan/40 bg-gradient-to-r from-navy via-midnight to-navy p-7 sm:p-9 shadow-2xl glow-cyan-sm">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-cyan/15 border border-cyan/30 px-3 py-0.5 text-xs font-mono font-bold text-cyan">
                  Confirmed Conference Dates
                </span>
                <span className="text-xs font-mono text-mint font-semibold uppercase">
                  Official In-Person Summit
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-light-text text-glow-cyan">
                {CONFERENCE.dateDisplay}
              </h2>
              <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                Technical oral paper sessions, plenary keynotes, and academic exhibitions hosted on campus at Netaji Subhas Institute of Technology, Bihta, Patna, Bihar.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={downloadCalendarEvent}
                  className="inline-flex items-center gap-2 rounded-xl border border-cyan/40 bg-navy px-4 py-2.5 text-xs font-bold text-cyan hover:bg-cyan/10 transition-colors cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download .ICS Calendar Event</span>
                </button>
              </div>
            </div>

            {/* Live Ticker */}
            <div className="lg:col-span-5 rounded-2xl border border-border-dark bg-midnight/90 p-5 backdrop-blur-md">
              <span className="text-xs font-mono text-cyan uppercase tracking-wider block mb-3 text-center">
                Countdown to ETIMS 2027 Inauguration
              </span>
              <CountdownTimer targetDate={CONFERENCE.countdownTarget} />
            </div>
          </div>
        </div>

        {/* Milestone Timeline Grid */}
        <div className="space-y-4">
          <h3 className="font-heading text-xl font-bold text-light-text mb-4">
            Submission & Review Timeline
          </h3>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CONFERENCE_TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-6 border transition-all ${
                  item.isConfirmed
                    ? 'border-cyan/50 bg-navy/80 shadow-lg glow-cyan-sm'
                    : 'border-border-dark bg-navy/60'
                }`}
              >
                <div className="flex items-center justify-between border-b border-border-dark pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan">
                    {item.phase}
                  </span>
                  {item.isConfirmed ? (
                    <span className="rounded-full bg-cyan/15 border border-cyan/30 px-2 py-0.5 text-[10px] font-mono font-bold text-cyan">
                      Confirmed
                    </span>
                  ) : (
                    <span className="rounded-full bg-border-dark/80 px-2 py-0.5 text-[10px] font-mono text-secondary-text">
                      To Be Announced
                    </span>
                  )}
                </div>

                <h4 className="font-heading text-base font-bold text-light-text mt-3">
                  {item.milestone}
                </h4>

                <div className="mt-3 rounded-xl border border-border-dark bg-midnight/80 p-3">
                  <span className="text-[10px] font-mono text-mint uppercase block">Schedule Status</span>
                  <p className="font-heading text-sm font-bold text-light-text mt-0.5">
                    {item.statusText}
                  </p>
                </div>

                <p className="mt-3 text-xs text-secondary-text leading-snug">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Link */}
        <div className="mt-12 rounded-2xl border border-border-dark bg-navy/60 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-secondary-text">
            <span>Manuscript submission instructions and formatting templates are ready.</span>
          </div>
          <Link
            to="/submission"
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary-teal to-cyan px-5 py-2.5 text-xs font-bold text-midnight shadow-md glow-cyan-sm shrink-0"
          >
            <span>Proceed to Paper Submission</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Container>
    </div>
  );
}

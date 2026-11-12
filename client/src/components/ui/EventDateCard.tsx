import { Calendar, MapPin } from 'lucide-react';
import { CONFERENCE } from '../../utils/constants';

interface EventDateCardProps {
  className?: string;
}

export default function EventDateCard({ className = '' }: EventDateCardProps) {
  return (
    <div
      className={`inline-flex flex-col gap-3.5 rounded-2xl border-2 border-secondary/25 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:gap-6 sm:px-6 sm:py-4.5 ${className}`}
    >
      {/* Event Date Block */}
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
          <Calendar className="h-6 w-6 text-secondary" />
        </div>
        <div>
          <span className="block text-[11px] font-bold uppercase tracking-wider text-secondary">
            Conference Dates
          </span>
          <span className="font-heading text-base font-bold text-primary sm:text-lg">
            {CONFERENCE.dateDisplay}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden h-10 w-px bg-border sm:block" />

      {/* Event Venue Block */}
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-primary">
          <MapPin className="h-6 w-6 text-primary" />
        </div>
        <div>
          <span className="block text-[11px] font-bold uppercase tracking-wider text-text-muted">
            Official Venue
          </span>
          <span className="font-heading text-sm font-semibold text-text-dark sm:text-base">
            {CONFERENCE.venue}
          </span>
          <span className="block text-[11px] text-text-muted">
            Patna, Bihar, India
          </span>
        </div>
      </div>
    </div>
  );
}

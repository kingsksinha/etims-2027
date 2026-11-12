import { motion, AnimatePresence } from 'framer-motion';
import { useCountdown } from '../../hooks/useCountdown';
import { CONFERENCE } from '../../utils/constants';
import { padZero } from '../../utils/formatters';

interface CountdownTimerProps {
  targetDate?: string;
}

interface TimeBoxProps {
  value: number;
  label: string;
}

function TimeBox({ value, label }: TimeBoxProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-13 w-13 sm:h-16 sm:w-16 md:h-18 md:w-18 items-center justify-center rounded-xl bg-navy/90 border border-cyan/40 text-cyan shadow-sm backdrop-blur-xs glow-cyan-sm">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: -6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 6, opacity: 1 }}
            transition={{ duration: 0.18 }}
            className="font-heading text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight text-light-text text-glow-cyan"
          >
            {padZero(value)}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-secondary-text">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer({
  targetDate = CONFERENCE.countdownTarget,
}: CountdownTimerProps) {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(targetDate);

  if (isExpired) {
    return (
      <div className="rounded-xl border border-cyan/30 bg-navy/60 px-5 py-3.5 text-center">
        <p className="font-heading text-sm sm:text-base font-bold text-cyan text-glow-cyan">
          The ETIMS 2027 Conference is Now Live!
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
      <TimeBox value={days} label="Days" />
      <span className="mb-4 font-heading text-lg sm:text-2xl font-bold text-cyan/60 animate-pulse">
        :
      </span>
      <TimeBox value={hours} label="Hours" />
      <span className="mb-4 font-heading text-lg sm:text-2xl font-bold text-cyan/60 animate-pulse">
        :
      </span>
      <TimeBox value={minutes} label="Mins" />
      <span className="mb-4 font-heading text-lg sm:text-2xl font-bold text-cyan/60 animate-pulse">
        :
      </span>
      <TimeBox value={seconds} label="Secs" />
    </div>
  );
}

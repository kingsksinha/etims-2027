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
      <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-xl bg-[#FAF8F5] border border-[#BF982E]/40 text-[#7B1123] shadow-xs">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: -6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 6, opacity: 1 }}
            transition={{ duration: 0.18 }}
            className="font-heading text-lg sm:text-2xl md:text-3xl font-black tracking-tight text-[#7B1123]"
          >
            {padZero(value)}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#57534E]">
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
      <div className="rounded-xl border border-[#7B1123]/30 bg-[#FAF8F5] px-5 py-3.5 text-center">
        <p className="font-heading text-sm sm:text-base font-bold text-[#7B1123]">
          The ETIMS 2027 Conference is Now Live!
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-3.5">
      <TimeBox value={days} label="Days" />
      <span className="mb-4 font-heading text-lg sm:text-2xl font-bold text-[#BF982E]/80">
        :
      </span>
      <TimeBox value={hours} label="Hours" />
      <span className="mb-4 font-heading text-lg sm:text-2xl font-bold text-[#BF982E]/80">
        :
      </span>
      <TimeBox value={minutes} label="Mins" />
      <span className="mb-4 font-heading text-lg sm:text-2xl font-bold text-[#BF982E]/80">
        :
      </span>
      <TimeBox value={seconds} label="Secs" />
    </div>
  );
}

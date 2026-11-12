import { useEffect, useState } from 'react';

interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

/**
 * Countdown hook that calculates time remaining until a target date.
 * @param targetDate  ISO-8601 date string (e.g. "2027-07-23T03:30:00Z" for 09:00 IST)
 */
export function useCountdown(targetDate: string): CountdownResult {
  const computeRemaining = (): CountdownResult => {
    const diff = new Date(targetDate).getTime() - Date.now();

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      isExpired: false,
    };
  };

  const [remaining, setRemaining] = useState<CountdownResult>(computeRemaining);

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(computeRemaining());
    }, 1_000);

    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  return remaining;
}

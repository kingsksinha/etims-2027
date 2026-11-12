/**
 * Format a Date (or ISO string) into a human-readable date.
 * e.g. "23 July 2027"
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Format a number as INR currency.
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Pad a number to two digits.
 */
export function padZero(n: number): string {
  return String(n).padStart(2, '0');
}

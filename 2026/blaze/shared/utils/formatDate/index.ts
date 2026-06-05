/** Locale for date display — fixed so formatting is stable across browsers and CI. */
const DISPLAY_LOCALE = 'en-GB';

const DATE_TIME_FORMAT: Intl.DateTimeFormatOptions = {
  dateStyle: 'medium',
  timeStyle: 'short',
};

export type DateFormat = 'short' | 'medium' | 'long';

export function formatIsoDateTime(
  value: string | null | undefined,
  format: DateFormat = 'medium',
): string {
  if (!value) {
    return '';
  }
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) {
    return value;
  }
  switch (format) {
    case 'short': // DD MMM: for birthdays
      return d.toLocaleDateString(DISPLAY_LOCALE, { day: 'numeric', month: 'short' });
    case 'long': // DD MMM YYYY, HH:mm: for tickets and orders
      return d.toLocaleString(DISPLAY_LOCALE, DATE_TIME_FORMAT);
    case 'medium': // DD MMM YYYY
    default:
      return d.toLocaleDateString(DISPLAY_LOCALE, { dateStyle: 'medium' });
  }
}

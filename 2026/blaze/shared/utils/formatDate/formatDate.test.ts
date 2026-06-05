import { formatIsoDateTime } from './index';

describe('formatIsoDateTime', () => {
  it('formats ISO datetimes with date and time (long)', () => {
    expect(formatIsoDateTime('2024-06-10T15:30:00.000Z', 'long')).toBe('10 Jun 2024, 15:30');
    expect(formatIsoDateTime('2024-03-20T09:00:00.000Z', 'long')).toBe('20 Mar 2024, 09:00');
  });

  it('formats ISO dates without time (medium)', () => {
    expect(formatIsoDateTime('2024-06-10T15:30:00.000Z')).toBe('10 Jun 2024');
    expect(formatIsoDateTime('2024-03-20T09:00:00.000Z', 'medium')).toBe('20 Mar 2024');
  });

  it('formats day and month only (short)', () => {
    expect(formatIsoDateTime('1990-05-15', 'short')).toBe('15 May');
  });

  it('returns empty string for missing values', () => {
    expect(formatIsoDateTime(undefined)).toBe('');
    expect(formatIsoDateTime(null)).toBe('');
  });

  it('returns the original value when not parseable', () => {
    expect(formatIsoDateTime('not-a-real-date')).toBe('not-a-real-date');
  });
});

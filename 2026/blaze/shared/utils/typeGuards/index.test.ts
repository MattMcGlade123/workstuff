import { SEARCH_TYPE_OPTIONS } from '../../constants';
import type { SearchTypeValue } from '../../types/customTypes';
import { isValidSearchType } from '.';

describe('isValidSearchType', () => {
  it.each(SEARCH_TYPE_OPTIONS.map((option) => option.value))(
    'returns true for valid search type %s',
    (value) => {
      expect(isValidSearchType(value)).toBe(true);
    },
  );

  it('returns false for strings that are not a defined search type value', () => {
    expect(isValidSearchType('')).toBe(false);
    expect(isValidSearchType('invalid')).toBe(false);
    expect(isValidSearchType('Name')).toBe(false);
    expect(isValidSearchType('phone')).toBe(false);
    expect(isValidSearchType('order')).toBe(false);
  });

  it('narrows string to SearchTypeValue when true', () => {
    const value: string = 'email';
    if (isValidSearchType(value)) {
      const narrowed: SearchTypeValue = value;
      expect(narrowed).toBe('email');
    } else {
      throw new Error('expected guard to pass for "email"');
    }
  });
});

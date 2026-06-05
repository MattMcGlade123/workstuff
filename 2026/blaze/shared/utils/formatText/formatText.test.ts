import { formatText } from './index';

describe('formatText', () => {
  it('should capitalize first letter and replace underscores with spaces', () => {
    expect(formatText('credit_card')).toBe('Credit card');
    expect(formatText('debit_card')).toBe('Debit card');
    expect(formatText('bank_transfer')).toBe('Bank transfer');
  });

  it('should capitalize first letter of single words', () => {
    expect(formatText('klarna')).toBe('Klarna');
    expect(formatText('visa')).toBe('Visa');
    expect(formatText('mastercard')).toBe('Mastercard');
  });

  it('should handle edge cases', () => {
    expect(formatText('')).toBe('');
    expect(formatText('a')).toBe('A');
    expect(formatText('_')).toBe(' ');
  });
});

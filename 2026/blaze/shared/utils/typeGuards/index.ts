import { SEARCH_TYPE_OPTIONS } from '../../constants';
import { SearchTypeValue } from '../../types/customTypes';

export function isValidSearchType(value: string): value is SearchTypeValue {
  return SEARCH_TYPE_OPTIONS.some((option) => option.value === value);
}

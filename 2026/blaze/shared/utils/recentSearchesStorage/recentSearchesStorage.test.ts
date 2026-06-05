import type { RecentSearchEntry } from '../../types/customTypes';
import {
  appendRecentSearch,
  clearRecentSearches,
  getRecentSearches,
  RECENT_SEARCHES_STORAGE_KEY,
  removeRecentSearch,
} from '.';

describe('recentSearchesStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('getRecentSearches', () => {
    it('returns an empty list when the key is missing from storage', () => {
      expect(getRecentSearches()).toEqual([]);
    });

    it('returns an empty list when stored value is empty', () => {
      localStorage.setItem(RECENT_SEARCHES_STORAGE_KEY, '');
      expect(getRecentSearches()).toEqual([]);
    });

    it('returns an empty list when stored value is invalid JSON', () => {
      localStorage.setItem(RECENT_SEARCHES_STORAGE_KEY, 'not-json');
      expect(getRecentSearches()).toEqual([]);
    });

    it('returns an empty list when stored value is not a JSON array', () => {
      localStorage.setItem(RECENT_SEARCHES_STORAGE_KEY, '{"foo":1}');
      expect(getRecentSearches()).toEqual([]);
    });

    it('returns parsed entries when storage holds a JSON array', () => {
      const entries: RecentSearchEntry[] = [
        { searchType: 'name', query: 'Ada' },
        { searchType: 'email', query: 'ada@example.com' },
      ];
      localStorage.setItem(RECENT_SEARCHES_STORAGE_KEY, JSON.stringify(entries));
      expect(getRecentSearches()).toEqual(entries);
    });
  });

  describe('appendRecentSearch', () => {
    it('stores a new entry when storage is empty', () => {
      const entry: RecentSearchEntry = { searchType: 'name', query: 'Test' };

      appendRecentSearch(entry);

      expect(JSON.parse(localStorage.getItem(RECENT_SEARCHES_STORAGE_KEY) ?? '[]')).toEqual([
        entry,
      ]);
    });

    it('prepends newer entries', () => {
      const first: RecentSearchEntry = { searchType: 'name', query: 'A' };
      const second: RecentSearchEntry = { searchType: 'name', query: 'B' };

      appendRecentSearch(first);
      appendRecentSearch(second);

      expect(getRecentSearches()).toEqual([second, first]);
    });

    it('removes an existing duplicate (same type and query) and places the entry at the front', () => {
      const entry: RecentSearchEntry = { searchType: 'email', query: 'x@y.com' };

      appendRecentSearch({ searchType: 'name', query: 'Other' });
      appendRecentSearch(entry);
      appendRecentSearch({ searchType: 'phoneNumber', query: '07123' });
      appendRecentSearch(entry);

      expect(getRecentSearches()).toEqual([
        entry,
        { searchType: 'phoneNumber', query: '07123' },
        { searchType: 'name', query: 'Other' },
      ]);
    });

    it('keeps distinct entries that share a query but differ by search type', () => {
      const a: RecentSearchEntry = { searchType: 'name', query: 'Acme' };
      const b: RecentSearchEntry = { searchType: 'email', query: 'Acme' };

      appendRecentSearch(a);
      appendRecentSearch(b);

      expect(getRecentSearches()).toEqual([b, a]);
    });
  });

  describe('removeRecentSearch', () => {
    it('removes the matching entry only', () => {
      const keep: RecentSearchEntry = { searchType: 'name', query: 'Keep' };
      const drop: RecentSearchEntry = { searchType: 'email', query: 'drop@example.com' };

      appendRecentSearch(keep);
      appendRecentSearch(drop);

      removeRecentSearch(drop);

      expect(getRecentSearches()).toEqual([keep]);
    });

    it('does nothing when the entry is not present', () => {
      const entries: RecentSearchEntry[] = [{ searchType: 'orderNumber', query: 'ORDER-1' }];
      localStorage.setItem(RECENT_SEARCHES_STORAGE_KEY, JSON.stringify(entries));

      removeRecentSearch({ searchType: 'orderNumber', query: 'OTHER' });

      expect(getRecentSearches()).toEqual(entries);
    });

    it('writes an empty array when the last entry is removed', () => {
      const entry: RecentSearchEntry = { searchType: 'postalCode', query: 'N1 1AA' };
      appendRecentSearch(entry);

      removeRecentSearch(entry);

      expect(localStorage.getItem(RECENT_SEARCHES_STORAGE_KEY)).toBe('[]');
    });
  });

  describe('clearRecentSearches', () => {
    it('removes the recent searches key', () => {
      appendRecentSearch({ searchType: 'name', query: 'X' });

      clearRecentSearches();

      expect(localStorage.getItem(RECENT_SEARCHES_STORAGE_KEY)).toBeNull();
    });
  });
});

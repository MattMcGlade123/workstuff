import { RecentSearchEntry } from '../../types/customTypes';

export const RECENT_SEARCHES_STORAGE_KEY = 'recentSearches';

export function getRecentSearches() {
  try {
    const stored = localStorage.getItem(RECENT_SEARCHES_STORAGE_KEY);

    if (!stored) {
      return [];
    }

    const parsed = JSON.parse(stored);

    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function appendRecentSearch(entry: RecentSearchEntry): void {
  const prev = getRecentSearches();
  // remove duplicates from list, and add new entry as normal.
  const withoutDuplicateEntries = prev.filter((existingEntry) => {
    const isSameSearchType = existingEntry.searchType === entry.searchType;
    const isSameQuery = existingEntry.query === entry.query;
    return !(isSameSearchType && isSameQuery);
  });
  localStorage.setItem(
    RECENT_SEARCHES_STORAGE_KEY,
    JSON.stringify([entry, ...withoutDuplicateEntries]),
  );
}

export function removeRecentSearch(entryToRemove: RecentSearchEntry): void {
  const prev = getRecentSearches();
  const next = prev.filter(
    (e) => e.searchType !== entryToRemove.searchType || e.query !== entryToRemove.query,
  );
  localStorage.setItem(RECENT_SEARCHES_STORAGE_KEY, JSON.stringify(next));
}

export function clearRecentSearches(): void {
  localStorage.removeItem(RECENT_SEARCHES_STORAGE_KEY);
}

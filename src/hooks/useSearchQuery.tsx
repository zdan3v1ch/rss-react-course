import { useEffect, useState } from 'react';

export function useSearchQuery() {
  const [searchQuery, setSearchQueryState] = useState<string>('');

  function setSearchQuery(value: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('searchQuery', value);
      setSearchQueryState(value);
    }
  }

  function getSearchQuery(): string {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('searchQuery') || '';
    }
    return '';
  }

  useEffect(() => {
    const localStorageData = getSearchQuery();
    if (localStorageData) {
      setSearchQueryState(localStorageData);
    }
  }, []);

  return { searchQuery, setSearchQuery, getSearchQuery };
}

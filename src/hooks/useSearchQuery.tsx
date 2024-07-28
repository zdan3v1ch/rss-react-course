import { useEffect } from 'react';

export function useSearchQuery() {
  function setSearchQuery(value: string): void {
    localStorage.setItem('searchQuery', value);
  }

  function getSearchQuery(): string {
    return localStorage.getItem('searchQuery') || '';
  }

  useEffect(() => {
    return () => {
      const localStorageData = getSearchQuery();
      if (localStorageData) {
        setSearchQuery(localStorageData);
      }
    };
  }, []);

  return { setSearchQuery, getSearchQuery };
}

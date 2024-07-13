import { useEffect, useState } from 'react';
import { IResponse } from '../interfaces/MainPageInterface';
import styles from './MainPage.module.css';
import { ClickComponentFunc } from '../components/errorBoundary/ErrorButton';
import SearchButton from '../components/searchButton/SearchButton';
import SearchInput from '../components/searchInput/SearchInput';
import { useSearchQuery } from '../hooks/useSearchQuery';
import { handleSearch } from '../components/handleSearch/handleSearch';

export function MainPageFunc() {
  const { setSearchQuery, getSearchQuery } = useSearchQuery();
  const [dataResult, setDataResult] = useState<IResponse[]>([]);
  const [inputData, setInputData] = useState(getSearchQuery());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleSearch({ inputData, setDataResult, setLoading, setSearchQuery });
  }, []);

  return (
    <div>
      <div className={styles.searchBlock}>
        <SearchInput inputData={inputData} setInputData={setInputData} />
        <SearchButton inputData={inputData} setDataResult={setDataResult} setLoading={setLoading} />
        <ClickComponentFunc />
      </div>
      <main className={styles.mainBlock}>
        {loading && <p>Loading...</p>}
        {dataResult.map((res) => (
          <div className={styles.block} key={res.id}>
            <p>Repository name: {res.full_name}</p>
            <p>Owner: {res.owner.login}</p>
            {res.description && <p>Description: {res.description}</p>}
          </div>
        ))}
        {dataResult.length === 0 && !loading && <p>No results</p>}
      </main>
    </div>
  );
}

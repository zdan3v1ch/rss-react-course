import { useEffect, useState } from 'react';
import { IResponse } from '../../interfaces/MainPageInterface';
import styles from './MainPage.module.css';
import { useSearchQuery } from '../../hooks/useSearchQuery';
import { handleSearch } from '../../features/handleSearch/handleSearch';
import SearchComponent from '../../components/searchComponent/SearchComponent';

export function MainPageFunc() {
  const { getSearchQuery } = useSearchQuery();
  const [dataResult, setDataResult] = useState<IResponse[]>([]);
  const [inputData, setInputData] = useState(getSearchQuery());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleSearch({ inputData, setDataResult, setLoading });
  }, [inputData]);

  return (
    <div>
      <div className={styles.searchBlock}>
        <SearchComponent setDataResult={setDataResult} setLoading={setLoading} setInputData={setInputData} />
      </div>
      <main className={styles.mainBlock}>
        {loading && <p>Loading...</p>}
        {!loading &&
          dataResult.map((res) => (
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

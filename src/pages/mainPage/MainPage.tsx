import { useEffect, useState } from 'react';
import { IResponse } from '../../interfaces/MainPageInterface';
import styles from './MainPage.module.css';
import { useSearchQuery } from '../../hooks/useSearchQuery';
import { handleSearch } from '../../features/handleSearch/handleSearch';
import SearchComponent from '../../components/searchComponent/SearchComponent';
import { useParams, useSearchParams } from 'react-router-dom';
import Pagination from '../../components/pagination/Pagination';
import { RepoDetails } from '../../components/repoDetails/RepoDetails';

export function MainPageFunc() {
  const { getSearchQuery } = useSearchQuery();
  const [dataResult, setDataResult] = useState<IResponse[]>([]);
  const [inputData, setInputData] = useState(getSearchQuery());
  const [loading, setLoading] = useState(false);
  const { page } = useParams<{ page: string }>();
  const [selectedItem, setSelectedItem] = useState(false);
  const [, setSearchParams] = useSearchParams();
  const [limit, setLimit] = useState(1);
  const [clickId, setClickId] = useState(0);
  const currentPage = page ? parseInt(page) : 1;

  useEffect(() => {
    handleSearch({ inputData, setDataResult, setLoading, currentPage, setLimit, setInputData });
  }, [inputData, currentPage]);

  const handleItemClick = (item: IResponse) => {
    setSelectedItem(true);
    setSearchParams({ details: item.id.toString() });
    setClickId(item.id);
  };

  const closeDetails = () => {
    if (selectedItem) {
      setSelectedItem(false);
      setSearchParams({});
    }
  };

  return (
    <div>
      <div className={styles.searchBlock}>
        <SearchComponent
          setDataResult={setDataResult}
          setLoading={setLoading}
          setInputData={setInputData}
          currentPage={currentPage}
          setLimit={setLimit}
          setSearchParams={setSearchParams}
        />
      </div>
      <main className={styles.mainBlock}>
        <div className={selectedItem ? styles.leftSection : styles.fullSection} onClick={closeDetails}>
          {loading && <p>Loading...</p>}
          {!loading &&
            dataResult.map((res) => (
              <div className={styles.block} key={res.id} onClick={() => handleItemClick(res)}>
                <p>Repository name: {res.full_name}</p>
                <p>Owner: {res.owner.login}</p>
              </div>
            ))}
          {dataResult.length === 0 && !loading && <p>No results</p>}
        </div>
        {selectedItem && (
          <div className={styles.rightSection}>
            <RepoDetails onClose={closeDetails} repoId={clickId} currentPage={currentPage} />
          </div>
        )}
      </main>
      <Pagination currentPage={currentPage} limit={limit} onClose={closeDetails} />
    </div>
  );
}

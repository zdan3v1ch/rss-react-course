import { useEffect, useState } from 'react';
import { IResponse } from '../../interfaces/MainPageInterface';
import styles from './MainPage.module.css';
import { useSearchQuery } from '../../hooks/useSearchQuery';
import { handleSearch } from '../../features/handleSearch/handleSearch';
import SearchComponent from '../../components/searchComponent/SearchComponent';
import { useParams, useSearchParams } from 'react-router-dom';
import Pagination from '../../components/pagination/Pagination';
import { RepoDetails } from '../../components/repoDetails/RepoDetails';
import { MainBlock } from '../../components/mainBlock/MainBlock';

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
      <MainBlock
        dataResult={dataResult}
        loading={loading}
        onItemClick={handleItemClick}
        selectedItem={selectedItem}
        onCloseDetails={closeDetails}
        repoDetailsComponent={<RepoDetails onClose={closeDetails} repoId={clickId} currentPage={currentPage} />}
      />
      {!loading && <Pagination currentPage={currentPage} limit={limit} onClose={closeDetails} />}
    </div>
  );
}

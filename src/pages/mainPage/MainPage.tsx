import { useEffect, useState } from 'react';
import { IResponse } from '../../interfaces/MainPageInterface';
import styles from './MainPage.module.css';
import { useSearchQuery } from '../../hooks/useSearchQuery';
// import { handleSearch } from '../../features/handleSearch/handleSearch';
import SearchComponent from '../../components/searchComponent/SearchComponent';
import { useParams, useSearchParams } from 'react-router-dom';
import Pagination from '../../components/pagination/Pagination';
import { RepoDetails } from '../../components/repoDetails/RepoDetails';
import { MainBlock } from '../../components/mainBlock/MainBlock';
import { getUrlId } from '../../utils/getUrlId';
import { useGetPeopleQuery } from '../../features/rtkQuery/apiSlice';

export function MainPageFunc() {
  const { getSearchQuery } = useSearchQuery();
  const [dataResult, setDataResult] = useState<IResponse[]>([]);
  const [inputData, setInputData] = useState(getSearchQuery());
  const { page } = useParams<{ page: string }>();
  const [selectedItem, setSelectedItem] = useState(false);
  const [, setSearchParams] = useSearchParams();
  const [limit, setLimit] = useState(1);
  const [clickId, setClickId] = useState('');
  const currentPage = page ? page : '1';

  const { data, isLoading } = useGetPeopleQuery({ searchParam: inputData, page: currentPage });
  useEffect(() => {
    if (data) {
      setDataResult(data.results);
      setLimit(Math.ceil(data.count / 10));
      console.log(data);
    }
  }, [data]);

  const handleItemClick = (item: IResponse) => {
    setSelectedItem(true);
    setClickId(item.url);
    console.log(getUrlId(item.url), 'this is urlID');
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
        <SearchComponent setInputData={setInputData} currentPage={currentPage} />
      </div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <MainBlock
          dataResult={dataResult}
          loading={isLoading}
          onItemClick={handleItemClick}
          selectedItem={selectedItem}
          onCloseDetails={closeDetails}
          repoDetailsComponent={<RepoDetails onClose={closeDetails} repoId={clickId} currentPage={currentPage} />}
        />
      )}
      {!isLoading && <Pagination currentPage={currentPage} limit={limit} onClose={closeDetails} />}
    </div>
  );
}

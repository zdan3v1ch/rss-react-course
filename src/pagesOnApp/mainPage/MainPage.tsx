import { useContext, useEffect, useState } from 'react';
import { IResponse } from '../../interfaces/MainPageInterface';
import styles from './MainPage.module.css';
import { useSearchQuery } from '../../hooks/useSearchQuery';
import SearchComponent from '../../components/searchComponent/SearchComponent';
import Pagination from '../../components/pagination/Pagination';
import { RepoDetails } from '../../components/repoDetails/RepoDetails';
import { MainBlock } from '../../components/mainBlock/MainBlock';
import { useGetPeopleQuery } from '../../redux/slices/rtkQuery/apiSlice';
import { ThemeContext } from '../../contextApi/Context';
import { FlyoutBlock } from '../../components/flyoutBlock/FlyoutBlock';
import { useRouter } from 'next/router';
import { ISSG } from '../../interfaces/ServerSideGener';
import { getUrlId } from '../../utils/getUrlId';

export default function MainPage({ initialData, initialPage }: ISSG) {
  const { getSearchQuery } = useSearchQuery();
  const [dataResult, setDataResult] = useState<IResponse[]>(initialData);
  const [inputData, setInputData] = useState(getSearchQuery());
  const navigate = useRouter();
  const { page } = navigate.query;
  const [selectedItem, setSelectedItem] = useState(false);
  const [limit, setLimit] = useState(1);
  const [clickId, setClickId] = useState('');
  const { theme } = useContext(ThemeContext);
  const currentPage = Array.isArray(page) ? page[0] : page || initialPage;

  const { data, isLoading } = useGetPeopleQuery({ searchParam: inputData, page: currentPage });

  useEffect(() => {
    if (data) {
      setDataResult(data.results);
      setLimit(Math.ceil(data.count / 10));
    }
  }, [data]);

  const handleItemClick = (item: IResponse) => {
    setSelectedItem(true);
    setClickId(item.url);
    navigate.push(
      {
        pathname: '/page/[page]',
        query: { page: currentPage, details: getUrlId(item.url) }
      },
      undefined,
      { shallow: true }
    );
  };

  const closeDetails = () => {
    if (selectedItem) {
      setSelectedItem(false);
      navigate.push(
        {
          pathname: '/page/[page]',
          query: { page: currentPage }
        },
        undefined,
        { shallow: true }
      );
    }
  };

  return (
    <div className={`${theme} ${styles.mainComponent}`}>
      <div className={styles.searchBlock}>
        <SearchComponent setInputData={setInputData} currentPage={currentPage} />
      </div>
      {isLoading && <p className={styles.loadingBlock}>Loading...</p>}
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
      <FlyoutBlock />
    </div>
  );
}

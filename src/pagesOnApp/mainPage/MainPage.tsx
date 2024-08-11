'use client';

import { useContext, useEffect, useState } from 'react';
import { IData, IResponse } from '../../interfaces/MainPageInterface';
import styles from './MainPage.module.css';
import { useSearchQuery } from '../../hooks/useSearchQuery';
import SearchComponent from '../../components/searchComponent/SearchComponent';
import Pagination from '../../components/pagination/Pagination';
import { RepoDetails } from '../../components/repoDetails/RepoDetails';
import { MainBlock } from '../../components/mainBlock/MainBlock';
import { ThemeContext } from '../../contextApi/Context';
import { FlyoutBlock } from '../../components/flyoutBlock/FlyoutBlock';
import { useRouter } from 'next/navigation';
import { getUrlId } from '../../utils/getUrlId';

export default function MainPageFunc({
  people,
  page,
  detail
}: {
  people: IData;
  page: string;
  detail?: IResponse | null;
}) {
  const { getSearchQuery } = useSearchQuery();
  const [dataResult, setDataResult] = useState<IResponse[]>([]);
  const [inputData, setInputData] = useState(getSearchQuery());
  const [selectedItem, setSelectedItem] = useState(false);
  const [limit, setLimit] = useState(1);
  const [, setClickId] = useState('');
  const { theme } = useContext(ThemeContext);
  const currentPage = page ? page : '1';
  const [loading, setLoading] = useState(true);
  const navigate = useRouter();

  useEffect(() => {
    setDataResult(people.results);
    setLimit(Math.ceil(people.count / 10));
    setLoading(false);
  }, [people]);

  const handleItemClick = (item: IResponse) => {
    setSelectedItem(true);
    setClickId(item.url);
    const peopleID = getUrlId(item.url);
    const query = `/page/${page}?search=${inputData}&detailId=${peopleID}`;

    navigate.push(query);
  };

  const closeDetails = () => {
    if (selectedItem) {
      setSelectedItem(false);
      navigate.push(`/page/${currentPage}?search=${inputData}`);
    }
  };

  return (
    <div className={`${theme} ${styles.mainComponent}`}>
      <div className={styles.searchBlock}>
        <SearchComponent setInputData={setInputData} currentPage={currentPage} />
      </div>
      {loading && <p className={styles.loadingBlock}>Loading...</p>}

      {!loading && (
        <MainBlock
          dataResult={dataResult}
          loading={loading}
          onItemClick={handleItemClick}
          selectedItem={selectedItem}
          onCloseDetails={closeDetails}
          repoDetailsComponent={
            detail ? (
              <RepoDetails data={detail} onClose={closeDetails} />
            ) : (
              <p className={styles.loadingBlock}>Loading...</p>
            )
          }
        />
      )}

      {!loading && (
        <Pagination currentPage={currentPage} limit={limit} onClose={closeDetails} searchQuery={inputData} />
      )}
      <FlyoutBlock />
    </div>
  );
}

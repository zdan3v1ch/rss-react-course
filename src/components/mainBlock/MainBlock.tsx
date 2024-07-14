import React from 'react';
import styles from '../../pages/mainPage/MainPage.module.css';
import { IMainBlockProps } from '../../interfaces/MainBlockInterface';
import { Block } from '../block/Block';

export const MainBlock: React.FC<IMainBlockProps> = ({
  dataResult,
  loading,
  onItemClick,
  selectedItem,
  onCloseDetails,
  repoDetailsComponent
}) => {
  return (
    <main className={styles.mainBlock}>
      <div className={selectedItem ? styles.leftSection : styles.fullSection} onClick={onCloseDetails}>
        {loading && <p>Loading...</p>}
        {!loading && dataResult.map((res) => <Block key={res.id} data={res} onClick={() => onItemClick(res)} />)}
        {dataResult.length === 0 && !loading && <p>No results</p>}
      </div>
      {selectedItem && <div className={styles.rightSection}>{repoDetailsComponent}</div>}
    </main>
  );
};

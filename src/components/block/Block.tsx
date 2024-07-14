import React from 'react';
import { IBlockProps } from '../../interfaces/BlockInterface';
import styles from '../../pages/mainPage/MainPage.module.css';

export const Block: React.FC<IBlockProps> = ({ data, onClick }) => {
  return (
    <div onClick={() => onClick(data.id)} className={styles.block}>
      <p>Repository name: {data.full_name}</p>
      <p>Owner: {data.owner.login}</p>
    </div>
  );
};

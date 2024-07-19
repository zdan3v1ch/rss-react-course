import React from 'react';
import { IBlockProps } from '../../interfaces/BlockInterface';
import styles from '../../pages/mainPage/MainPage.module.css';

export const Block: React.FC<IBlockProps> = ({ data, onClick }) => {
  return (
    <div onClick={() => onClick()} className={styles.block}>
      <p>Character name: {data.name}</p>
      <p>Gender: {data.gender}</p>
      <p>Height: {data.height}</p>
      <p>Mass: {data.mass}</p>
    </div>
  );
};

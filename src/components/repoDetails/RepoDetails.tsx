import React from 'react';
import styles from '../../pagesOnApp/mainPage/MainPage.module.css';
import { IRepoDetailsProps } from '../../interfaces/RepoDetailsInterface';

export const RepoDetails: React.FC<IRepoDetailsProps> = ({ onClose, data }) => {
  if (!data) {
    return <p>No details available</p>;
  }

  return (
    <div className={styles.block}>
      <button onClick={onClose}>Close</button>
      <p>Name: {data.name}</p>
      <p>Eye color: {data.eye_color}</p>
      <p>Gender: {data.gender}</p>
      <p>Height: {data.height}</p>
      <p>Skin color: {data.skin_color}</p>
    </div>
  );
};

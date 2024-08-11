import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { IResponse } from '../../interfaces/MainPageInterface';
import styles from '../../pagesOnApp/mainPage/MainPage.module.css';
import { IRepoDetailsProps } from '../../interfaces/RepoDetailsInterface';
import { useGetPeopleByIDQuery } from '../../redux/slices/rtkQuery/apiSlice';

export const RepoDetails: React.FC<IRepoDetailsProps> = ({ onClose, repoId, currentPage }) => {
  const [repo, setRepo] = useState<IResponse | null>(null);
  const navigate = useRouter();
  const { data, isLoading } = useGetPeopleByIDQuery(repoId);

  useEffect(() => {
    if (data) {
      setRepo(data);
    }
  }, [data]);

  const handleClose = () => {
    onClose();
    navigate.push(
      {
        pathname: '/page/[page]',
        query: { page: currentPage }
      },
      undefined,
      { shallow: true }
    );
  };

  if (isLoading) {
    return <p className={styles.loadingBlock}>Loading...</p>;
  }

  if (!repo) {
    return <p>No details available</p>;
  }

  return (
    <div className={styles.block}>
      <button onClick={handleClose}>Close</button>
      <p>Name: {repo.name}</p>
      <p>Eye color: {repo.eye_color}</p>
      <p>Gender: {repo.gender}</p>
      <p>Height: {repo.height}</p>
      <p>Skin color: {repo.skin_color}</p>
    </div>
  );
};

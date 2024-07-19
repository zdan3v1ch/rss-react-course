import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IResponse } from '../../interfaces/MainPageInterface';
import styles from '../../pages/mainPage/MainPage.module.css';
import { IRepoDetailsProps } from '../../interfaces/RepoDetailsInterface';
import { useGetPeopleByIDQuery } from '../../features/rtkQuery/apiSlice';

export const RepoDetails: React.FC<IRepoDetailsProps> = ({ onClose, repoId, currentPage }) => {
  const [repo, setRepo] = useState<IResponse | null>(null);
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetPeopleByIDQuery(repoId);

  console.log(data, error, isLoading);
  useEffect(() => {
    if (data) {
      setRepo(data);
    }
  }, [data]);

  const handleClose = () => {
    onClose();
    navigate(`/page/${currentPage}`);
  };

  if (isLoading) {
    return <p>Loading...</p>;
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

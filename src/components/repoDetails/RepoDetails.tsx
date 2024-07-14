import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IResponse } from '../../interfaces/MainPageInterface';
import styles from '../../pages/mainPage/MainPage.module.css';
import { IRepoDetailsProps } from '../../interfaces/RepoDetailsInterface';

export const RepoDetails: React.FC<IRepoDetailsProps> = ({ onClose, repoId, currentPage }) => {
  const [repo, setRepo] = useState<IResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRepoDetails = async () => {
      try {
        const response = await fetch(`https://api.github.com/repositories/${repoId}`);
        const data = await response.json();
        setRepo(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch repo details', error);
        setLoading(false);
      }
    };
    fetchRepoDetails();
  }, [repoId]);

  const handleClose = () => {
    onClose();
    navigate(`/search/${currentPage}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!repo) {
    return <p>No details available</p>;
  }

  return (
    <div className={styles.block}>
      <button onClick={handleClose}>Close</button>
      <p>Repository name: {repo.full_name}</p>
      <p>Owner: {repo.owner.login}</p>
      {repo.description && <p>Description: {repo.description}</p>}
    </div>
  );
};

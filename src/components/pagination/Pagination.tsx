import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Pagination.module.css';
import { IPagination } from '../../interfaces/PaginationInterface';

const Pagination: React.FC<IPagination> = ({ currentPage, limit, onClose }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handlePageChange = (page: number) => {
    searchParams.set('page', page.toString());
    navigate(`/search/${page}`);
    onClose();
  };

  return (
    <div className={styles.pagination}>
      <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button disabled={currentPage === limit} onClick={() => handlePageChange(currentPage + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

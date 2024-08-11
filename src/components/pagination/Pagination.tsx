import React from 'react';
import styles from './Pagination.module.css';
import { IPagination } from '../../interfaces/PaginationInterface';
import { useRouter } from 'next/navigation';

const Pagination: React.FC<IPagination> = ({ currentPage, limit, onClose, searchQuery }) => {
  const navigate = useRouter();
  const pageToNumber = Number(currentPage);

  const handlePageChange = (page: number) => {
    const query = `/page/${page}?search=${searchQuery}`;

    navigate.push(query);
    onClose();
  };

  return (
    <div className={styles.pagination}>
      <button disabled={pageToNumber === 1} onClick={() => handlePageChange(pageToNumber - 1)}>
        Previous
      </button>
      <span>Page {pageToNumber}</span>
      <button disabled={pageToNumber === limit || limit === 0} onClick={() => handlePageChange(pageToNumber + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

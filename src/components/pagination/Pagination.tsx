import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Pagination.module.css';
import { IPagination } from '../../interfaces/PaginationInterface';

const Pagination: React.FC<IPagination> = ({ currentPage, limit, onClose }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pageToNumber = Number(currentPage);

  const handlePageChange = (page: number) => {
    searchParams.set('page', page.toString());
    navigate(`/page/${page}`);
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

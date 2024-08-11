import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { unselectAll } from '../../redux/slices/selectSlice';
import styles from './FlyoutBlock.module.css';
import { getCsvFile } from '../../utils/getCsvFile';

export const FlyoutBlock: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedItems = useSelector((state: RootState) => state.selectedItems.selectedElements);
  console.log(selectedItems);
  if (selectedItems.length === 0) {
    return null;
  }

  return (
    <div className={styles.flyoutBlock}>
      <p>{selectedItems.length} items are selected</p>
      <button onClick={() => dispatch(unselectAll())}>Unselect all</button>
      <a
        className={styles.flyoutButton}
        href={getCsvFile(selectedItems)}
        download={`StartWars_People_${selectedItems.length}.csv`}
      >
        Download
      </a>
    </div>
  );
};

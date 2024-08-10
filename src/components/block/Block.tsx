import React from 'react';
import { IBlockProps } from '../../interfaces/BlockInterface';
import styles from '../../pagesOnApp/mainPage/MainPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { selectItem, unselectedItem } from '../../redux/slices/selectSlice';

export const Block: React.FC<IBlockProps> = ({ data, onClick }) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedItems = useSelector((state: RootState) => state.selectedItems.selectedElements);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    if (selectedItems.some((selected) => selected.url === data.url)) {
      dispatch(unselectedItem(data.url));
    } else {
      dispatch(selectItem(data));
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
  };

  const isChecked = selectedItems.some((selected) => selected.url === data.url);

  return (
    <div onClick={onClick} className={styles.block}>
      <input type="checkbox" onChange={handleChange} checked={isChecked} onClick={handleClick} />
      <p>Character name: {data.name}</p>
      <p>Gender: {data.gender}</p>
      <p>Height: {data.height}</p>
      <p>Mass: {data.mass}</p>
    </div>
  );
};

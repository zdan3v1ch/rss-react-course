import React from 'react';
import { useContext, useState } from 'react';
import { ClickComponentFunc } from '../errorBoundary/ErrorButton';
import SearchButton from '../searchButton/SearchButton';
import { useSearchQuery } from '../../hooks/useSearchQuery';
import { ISearchComponent } from '../../interfaces/SearchComponent';
import { ThemeContext } from '../../contextApi/Context';

const SearchComponent: React.FC<ISearchComponent> = ({ setInputData, currentPage }) => {
  const { getSearchQuery } = useSearchQuery();
  const [inputValue, setInputValue] = useState(getSearchQuery());
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <input type="text" placeholder="Search..." value={inputValue} onChange={handleInputChange} />
      <SearchButton inputData={inputValue} currentPage={currentPage} setInputData={setInputData} />
      <ClickComponentFunc />
      <button onClick={toggleTheme}>Change theme</button>
    </>
  );
};

export default SearchComponent;

import { useState } from 'react';
import { ClickComponentFunc } from '../errorBoundary/ErrorButton';
import SearchButton from '../searchButton/SearchButton';
import { useSearchQuery } from '../../hooks/useSearchQuery';
import { ISearchComponent } from '../../interfaces/SearchComponent';

const SearchComponent: React.FC<ISearchComponent> = ({ setInputData, currentPage }) => {
  const { getSearchQuery } = useSearchQuery();
  const [inputValue, setInputValue] = useState(getSearchQuery());
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <SearchButton inputData={inputValue} currentPage={currentPage} setInputData={setInputData} />
      <ClickComponentFunc />
    </>
  );
};

export default SearchComponent;

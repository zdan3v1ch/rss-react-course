import { useState } from 'react';
import { ClickComponentFunc } from '../errorBoundary/ErrorButton';
import SearchButton from '../searchButton/SearchButton';
import { useSearchQuery } from '../../hooks/useSearchQuery';
import { ISearchComponent } from '../../interfaces/SearchComponent';

const SearchComponent: React.FC<ISearchComponent> = ({
  setDataResult,
  setLoading,
  setInputData,
  currentPage,
  setLimit
}) => {
  const { getSearchQuery } = useSearchQuery();
  const [inputValue, setInputValue] = useState(getSearchQuery());
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <SearchButton
        inputData={inputValue}
        setDataResult={setDataResult}
        setLoading={setLoading}
        currentPage={currentPage}
        setLimit={setLimit}
        setInputData={setInputData}
      />
      <ClickComponentFunc />
    </>
  );
};

export default SearchComponent;

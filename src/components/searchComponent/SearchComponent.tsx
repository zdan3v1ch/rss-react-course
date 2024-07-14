import { useState } from 'react';
import { ClickComponentFunc } from '../errorBoundary/ErrorButton';
import SearchButton from '../searchButton/SearchButton';
import { IResponse } from '../../interfaces/MainPageInterface';

interface ISearchComponent {
  setDataResult: React.Dispatch<React.SetStateAction<IResponse[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setInputData: React.Dispatch<React.SetStateAction<string>>;
}

const SearchComponent: React.FC<ISearchComponent> = ({ setDataResult, setLoading }) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <SearchButton inputData={inputValue} setDataResult={setDataResult} setLoading={setLoading} />
      <ClickComponentFunc />
    </>
  );
};

export default SearchComponent;

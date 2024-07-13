import React from 'react';
import { ISearchInput } from '../../interfaces/SearchInputInterface';

const SearchInput: React.FC<ISearchInput> = ({ inputData, setInputData }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
  };
  return <input type="text" value={inputData} onChange={handleInputChange} />;
};

export default SearchInput;

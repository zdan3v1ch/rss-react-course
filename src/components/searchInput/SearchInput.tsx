import React, { useState } from 'react';
import { ISearchInput } from '../../interfaces/SearchInputInterface';

const SearchInput: React.FC<ISearchInput> = () => {
  const [inputData, setInputData ] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
  };
  return <input type="text" value={inputData} onChange={handleInputChange} />;
};

export default SearchInput;

import React from 'react';
import { ISearchButton } from '../../interfaces/SearchButtonInterface';
import { handleSearch } from '../../features/handleSearch/handleSearch';
import { useSearchQuery } from '../../hooks/useSearchQuery';

const SearchButton: React.FC<ISearchButton> = ({ inputData, setDataResult, setLoading }) => {
  const { setSearchQuery } = useSearchQuery();
  const handleClick = () => {
    handleSearch({ inputData, setDataResult, setLoading });
    setSearchQuery(inputData);
  };

  return <button onClick={handleClick}>Search</button>;
};

export default SearchButton;

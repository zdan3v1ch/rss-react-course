import React from 'react';
import { ISearchButton } from '../../interfaces/SearchButtonInterface';
import { useSearchQuery } from '../../hooks/useSearchQuery';
import { handleSearch } from '../handleSearch/handleSearch';

const SearchButton: React.FC<ISearchButton> = ({ inputData, setDataResult, setLoading }) => {
  const { setSearchQuery } = useSearchQuery();

  const handleClick = () => {
    handleSearch({ inputData, setDataResult, setLoading, setSearchQuery });
  };

  return <button onClick={handleClick}>Search</button>;
};

export default SearchButton;

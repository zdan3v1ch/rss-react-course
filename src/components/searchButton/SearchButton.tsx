import React from 'react';
import { ISearchButton } from '../../interfaces/SearchButtonInterface';
import { handleSearch } from '../../features/handleSearch/handleSearch';
import { useSearchQuery } from '../../hooks/useSearchQuery';
import { useNavigate } from 'react-router-dom';

const SearchButton: React.FC<ISearchButton> = ({
  inputData,
  setDataResult,
  setLoading,
  setInputData,
  currentPage,
  setLimit
}) => {
  const { setSearchQuery } = useSearchQuery();
  const navigate = useNavigate();
  const handleClick = () => {
    handleSearch({ inputData, setDataResult, setLoading, currentPage, setLimit, setInputData });
    setSearchQuery(inputData);
    setInputData(inputData);
    currentPage = 1;
    navigate(`/search/${currentPage}`);
  };

  return <button onClick={handleClick}>Search</button>;
};

export default SearchButton;

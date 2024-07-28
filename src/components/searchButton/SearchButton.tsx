import React from 'react';
import { ISearchFunction } from '../../interfaces/SearchButtonInterface';
import { useSearchQuery } from '../../hooks/useSearchQuery';
import { useNavigate } from 'react-router-dom';

const SearchButton: React.FC<ISearchFunction> = ({ inputData, setInputData, currentPage }) => {
  const { setSearchQuery } = useSearchQuery();
  const navigate = useNavigate();
  const handleClick = () => {
    setSearchQuery(inputData);
    setInputData(inputData);
    currentPage = '1';
    navigate(`/page/${currentPage}`);
  };

  return <button onClick={handleClick}>Search</button>;
};

export default SearchButton;

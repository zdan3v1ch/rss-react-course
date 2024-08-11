'use client';

import React from 'react';
import { ISearchFunction } from '../../interfaces/SearchButtonInterface';
import { useSearchQuery } from '../../hooks/useSearchQuery';
import { useRouter } from 'next/navigation';

const SearchButton: React.FC<ISearchFunction> = ({ inputData, setInputData, currentPage }) => {
  const { setSearchQuery } = useSearchQuery();
  const navigate = useRouter();
  const handleClick = () => {
    setSearchQuery(inputData);
    setInputData(inputData);
    currentPage = '1';
    navigate.push(`/page/${currentPage}?search=${inputData}`);
  };

  return <button onClick={handleClick}>Search</button>;
};

export default SearchButton;

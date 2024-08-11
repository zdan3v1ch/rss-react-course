import React from 'react';
import { ISearchFunction } from '../../interfaces/SearchButtonInterface';
import { useSearchQuery } from '../../hooks/useSearchQuery';
import { useRouter } from 'next/router';

const SearchButton: React.FC<ISearchFunction> = ({ inputData, setInputData, currentPage }) => {
  const { setSearchQuery } = useSearchQuery();
  const navigate = useRouter();
  const handleClick = () => {
    setSearchQuery(inputData);
    setInputData(inputData);
    currentPage = '1';
    navigate.push(
      {
        pathname: '/page/[page]',
        query: { page: currentPage }
      },
      undefined,
      { shallow: true }
    );
  };

  return <button onClick={handleClick}>Search</button>;
};

export default SearchButton;

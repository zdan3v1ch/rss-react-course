import React from 'react';
export interface ISearchComponent {
  setInputData: React.Dispatch<React.SetStateAction<string>>;
  currentPage: string;
}

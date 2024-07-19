import React from 'react';

// export interface ISearchButton extends ISearchFunction {
//   // setSearchParams: SetURLSearchParams;
// }

export interface ISearchFunction {
  inputData: string;
  currentPage: string;
  setInputData: React.Dispatch<React.SetStateAction<string>>;
}

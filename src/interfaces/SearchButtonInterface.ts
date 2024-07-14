import { SetStateAction } from 'react';
import { IResponse } from './MainPageInterface';
// import { SetURLSearchParams } from 'react-router-dom';

export interface ISearchButton extends ISearchFunction {
  // setSearchParams: SetURLSearchParams;
}

export interface ISearchFunction {
  inputData: string;
  setDataResult: React.Dispatch<SetStateAction<IResponse[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  currentPage: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  setInputData: React.Dispatch<React.SetStateAction<string>>;
}

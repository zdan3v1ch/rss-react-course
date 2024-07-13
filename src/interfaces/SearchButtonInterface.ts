import { SetStateAction } from 'react';
import { IResponse } from './MainPageInterface';

export interface ISearchButton {
  inputData: string;
  setDataResult: React.Dispatch<SetStateAction<IResponse[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ISearchFunction extends ISearchButton {
  setSearchQuery: (query: string) => void;
}

import { SetURLSearchParams } from "react-router-dom";
import { IResponse } from "./MainPageInterface";

export interface ISearchComponent {
  setDataResult: React.Dispatch<React.SetStateAction<IResponse[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setInputData: React.Dispatch<React.SetStateAction<string>>;
  currentPage: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  setSearchParams: SetURLSearchParams;
}

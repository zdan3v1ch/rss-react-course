import { IResponse } from "./MainPageInterface";

export interface IBlockProps {
  data: IResponse;
  onClick: (id: number) => void;
}

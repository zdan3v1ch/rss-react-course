import { IResponse } from "./MainPageInterface";

export interface IRepoDetailsProps {
  onClose: () => void;
  data: IResponse;
}

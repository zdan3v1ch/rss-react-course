import { IResponse } from "./MainPageInterface";

export interface IMainBlockProps {
  dataResult: IResponse[];
  loading: boolean;
  onItemClick: (item: IResponse) => void;
  selectedItem: boolean;
  onCloseDetails: () => void;
  repoDetailsComponent: React.ReactNode;
}

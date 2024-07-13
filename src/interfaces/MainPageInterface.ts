export interface IMainPage {
  query: string;
  data: IResponse[];
  isLoading: boolean;
  error: string | null;
}

export interface IResponse {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
  };
  description: string;
}

export interface IProps {
  children?: React.ReactNode;
}

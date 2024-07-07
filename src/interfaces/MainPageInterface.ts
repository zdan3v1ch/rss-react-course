export interface IMainPage {
  query: string;
  data: IResponce[];
  isLoading: boolean;
  error: string | null;
}

interface IResponce {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
  };
}

export interface IProps {
  children?: React.ReactNode;
}

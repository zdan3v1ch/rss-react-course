export interface IMainPage {
  query: string;
  data: IResponse[];
  isLoading: boolean;
  error: string | null;
}

export interface IResponse {
  name: string;
  eye_color: string;
  height: string;
  mass: string;
  skin_color: string;
  birth_year: string;
  url: string;
  gender: string;
}

export interface IData {
  count: number;
  results: IResponse[]
}

export interface IProps {
  children: React.ReactNode;
}

import { IData, IResponse } from '../../../interfaces/MainPageInterface';
import MainPageFunc from '../../../pagesOnApp/mainPage/MainPage';

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    search: string;
    detailId?: string;
  };
};
async function getDataPage(page: string, search: string): Promise<IData> {
  const response = await fetch(`https://swapi.dev/api/people/?search=${search}&page=${page}`);
  return response.json();
}

async function getPeople(id: string): Promise<IResponse> {
  const response = await fetch(`https://swapi.dev/api/people/${id}`);
  return response.json();
}

export default async function Page({ params: { id }, searchParams: { search, detailId } }: Props) {
  const posts = await getDataPage(id, search);
  let detail: IResponse | null = null;
  if (detailId) {
    detail = await getPeople(detailId);
  }
  return <MainPageFunc people={posts} page={id} detail={detail} />;
}

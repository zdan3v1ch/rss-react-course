import { GetServerSideProps } from 'next';
import MainPage from '../pagesOnApp/mainPage/MainPage';
import { ISSG } from '../interfaces/ServerSideGener';

export default function Index({ initialData, initialPage }: ISSG) {
  return <MainPage initialData={initialData} initialPage={initialPage} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const page = query.page || '1';

  const res = await fetch(`https://swapi.dev/api/people?page=${page}`);
  const data = await res.json();

  return {
    props: {
      initialData: data.results,
      initialPage: page
    }
  };
};

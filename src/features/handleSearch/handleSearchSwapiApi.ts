import { ISearchFunction } from '../../interfaces/SearchButtonInterface';

export async function handleSearchSwapiApi({
  inputData,
  setDataResult,
  setLoading,
  currentPage,
  setLimit
}: ISearchFunction) {
  setLoading(true);
  try {
    let queryString = '';

    if (inputData) {
      queryString += `?search=${inputData}`;
    }

    if (currentPage) {
      queryString += queryString ? `&page=${currentPage}` : `?page=${currentPage}`;
    }

    const response = await fetch(`https://swapi.dev/api/people/${queryString}`);
    const data = await response.json();
    console.log(data);
    setDataResult(data.results);
    setLimit(Math.ceil(data.count / 10));
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}

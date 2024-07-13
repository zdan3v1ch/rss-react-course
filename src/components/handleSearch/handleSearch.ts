import { ISearchFunction } from '../../interfaces/SearchButtonInterface';

export async function handleSearch({ inputData, setDataResult, setLoading, setSearchQuery }: ISearchFunction) {
  setLoading(true);
  setDataResult([]);
  try {
    if (inputData !== '') {
      const response = await fetch(`https://api.github.com/search/repositories?q=${inputData}&per_page=10&page=2`);
      const data = await response.json();
      setDataResult(data.items);
      setSearchQuery(inputData);
      setLoading(false);
      console.log(data.items, 'this is data.items');
    } else {
      const response = await fetch('https://api.github.com/repositories');
      const data = await response.json();
      const limitedData = data.slice(0, 10);
      setDataResult(limitedData);
      console.log(data, 'this is limitedData');
      setLoading(false);
    }
  } catch (error) {
    console.error(error);
    setLoading(false);
  }
}

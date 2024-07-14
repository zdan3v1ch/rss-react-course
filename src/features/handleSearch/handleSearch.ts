import { ISearchFunction } from '../../interfaces/SearchButtonInterface';

export async function handleSearch({ inputData, setDataResult, setLoading }: ISearchFunction) {
  setLoading(true);
  try {
    if (inputData !== '') {
      const response = await fetch(`https://api.github.com/search/repositories?q=${inputData}&per_page=10&page=2`);
      const data = await response.json();
      setDataResult(data.items);
      console.log(data.items, 'this is data.items');
    } else {
      const response = await fetch('https://api.github.com/repositories');
      const data = await response.json();
      const limitedData = data.slice(0, 10);
      setDataResult(limitedData);
      console.log(data, 'this is limitedData');
    }
  } catch (error) {
    console.error(error);
  }
  finally {
    setLoading(false);
  }
}

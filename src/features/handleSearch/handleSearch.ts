import { ISearchFunction } from "../../interfaces/SearchButtonInterface";

export async function handleSearch({
  inputData,
  setDataResult,
  setLoading,
  currentPage,
  setLimit
}: ISearchFunction) {
  const COUNT_PER_PAGE = 9;
  setLoading(true);
  console.log(inputData, 'this is inp');
  try {
    if (inputData !== '') {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${inputData}&per_page=${COUNT_PER_PAGE}&page=${currentPage}`
      );
      const data = await response.json();
      setDataResult(data.items);
      console.log(data, 'this is data.items');
      setLimit(Math.ceil(data.total_count / COUNT_PER_PAGE));
    } else {
      const response = await fetch('https://api.github.com/repositories');
      const data = await response.json();
      const limitedData = data.slice((currentPage - 1) * COUNT_PER_PAGE, COUNT_PER_PAGE * currentPage);
      setDataResult(limitedData);
      console.log(data);
      setLimit(data.length / COUNT_PER_PAGE);
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}

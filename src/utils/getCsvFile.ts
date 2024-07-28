import { IResponse } from '../interfaces/MainPageInterface';

export function getCsvFile(arr: IResponse[]): string {
  const contentHeaders = 'Name;Height;Mass;Url';
  const contentMainArray = arr.map((el) => [el.name, el.height, el.mass, el.url].join(';'));
  const contentMain = contentMainArray.join('\n');
  const resultContent = contentHeaders + '\n' + contentMain;
  const blob = new Blob([resultContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  return url;
}

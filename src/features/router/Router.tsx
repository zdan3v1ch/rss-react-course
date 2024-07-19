import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPageFunc } from '../../pages/mainPage/MainPage';
import ErrorPage from '../../pages/errorPage/ErrorPage';

export const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageFunc />} />
        <Route path="/page/:page" element={<MainPageFunc />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

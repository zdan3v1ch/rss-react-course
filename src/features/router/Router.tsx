import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPageFunc } from '../../pages/mainPage/MainPage';
import ErrorPage from '../../pages/errorPage/ErrorPage';
// import { RepoDetails } from '../../components/repoDetails/RepoDetails';

export const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageFunc />} />
        <Route path="/search/:page" element={<MainPageFunc />}>
          {/* <Route path="/search/:page/details/:id" element={<RepoDetails />} /> */}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

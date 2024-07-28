import { Route, Routes } from 'react-router-dom';
import { MainPageFunc } from '../../pages/mainPage/MainPage';
import ErrorPage from '../../pages/errorPage/ErrorPage';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

export const MyRoutes = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainPageFunc />} />
        <Route path="/page/:page" element={<MainPageFunc />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Provider>
  );
};

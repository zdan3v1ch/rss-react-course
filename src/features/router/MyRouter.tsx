import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/mainPage/MainPage';
import FirstForm from '../../pages/firstForm/FirstForm';
import SecondForm from '../../pages/secondForm/SecondForm';
import ErrorPage from '../../pages/errorPage/ErrorPage';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export const MyRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/uncF" element={<FirstForm />}></Route>
          <Route path="/conF" element={<SecondForm />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

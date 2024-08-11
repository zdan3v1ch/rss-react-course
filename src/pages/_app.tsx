import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { ThemeProvider } from '../contextApi/Context';
import '../App.css';
import '../index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import MyApp from './_app';
import { ThemeProvider } from '../contextApi/Context';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import { mockRouter } from '../__tests__/mockRouter';

const mockAppProps: AppProps = {
  Component: () => <div>Test Component</div>,
  pageProps: {},
  router: mockRouter as Router
};

describe('MyApp Component', () => {
  it('renders the child component', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Provider store={store}>
          <MyApp {...mockAppProps} />
        </Provider>
      </ThemeProvider>
    );
    expect(getByText('Test Component')).toBeInTheDocument();
  });
});

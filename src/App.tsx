import React from 'react';
import { ErrorBoundary } from './components/errorBoundary/ErrorBoundary';
import { MyRouter } from './features/router/Router';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export function App(): React.ReactNode {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <MyRouter />
      </Provider>
    </ErrorBoundary>
  );
}

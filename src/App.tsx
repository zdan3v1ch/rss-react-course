import React from 'react';
import { ErrorBoundary } from './components/errorBoundary/ErrorBoundary';
import { MyRouter } from './features/router/Router';

export function App(): React.ReactNode {
  return (
    <ErrorBoundary>
      <MyRouter />
    </ErrorBoundary>
  );
}

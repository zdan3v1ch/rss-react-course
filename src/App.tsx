import React from 'react';
import { MainPageFunc } from './pages/MainPage';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

export function App(): React.ReactNode {
  return (
    <ErrorBoundary>
      <MainPageFunc />
    </ErrorBoundary>
  );
}

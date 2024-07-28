import React from 'react';
import { ErrorBoundary } from './components/errorBoundary/ErrorBoundary';
import { MyRoutes } from './features/router/Router';
import { ThemeProvider } from './contextApi/Context';
import { BrowserRouter } from 'react-router-dom';

export function App(): React.ReactNode {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <MyRoutes />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

'use client';

import React from 'react';
import { store } from '../redux/store';
import { ThemeProvider } from '../contextApi/Context';
import { Provider } from 'react-redux';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider>{children}</ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
}

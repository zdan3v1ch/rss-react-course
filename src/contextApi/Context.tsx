'use client';

import React from 'react';
import { createContext, ReactNode, useState } from 'react';
import { IThemeContext } from '../interfaces/ThemeContextInterface';

export const ThemeContext = createContext<IThemeContext>({ theme: 'light', toggleTheme: () => {} });

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

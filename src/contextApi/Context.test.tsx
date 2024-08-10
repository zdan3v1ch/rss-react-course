import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, ThemeContext } from './Context';
import { useContext } from 'react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

const TestComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <p data-testid="theme">{theme}</p>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

describe('ThemeProvider', () => {
  it('provides the correct initial theme', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme')).toHaveTextContent('light');
  });

  it('toggles the theme', async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const button = screen.getByText('Change Theme');
    await userEvent.click(button);
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');

    await userEvent.click(button);
    expect(screen.getByTestId('theme')).toHaveTextContent('light');
  });
});

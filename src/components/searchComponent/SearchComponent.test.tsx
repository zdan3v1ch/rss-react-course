import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchComponent from './SearchComponent';
import { MemoryRouter } from 'react-router-dom';
import { ThemeContext } from '../../contextApi/Context';

describe('Search Component', () => {
  const setup = () => {
    const setInputData = vi.fn();
    const toggleTheme = vi.fn();
    const theme = 'light';
    render(
      <MemoryRouter>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <SearchComponent setInputData={setInputData} currentPage="1" />
        </ThemeContext.Provider>
      </MemoryRouter>
    );
    const input = screen.getByPlaceholderText('Search...') as HTMLInputElement;
    const searchButton = screen.getByText('Search');
    const themeButton = screen.getByText('Change theme');
    return { input, searchButton, themeButton, setInputData, toggleTheme };
  };

  it('inputValue is changed correctly', async () => {
    const { input } = setup();
    await userEvent.type(input, 'Luke');
    expect(input.value).toBe('Luke');
  });

  it('calls setInputData when the search button is clicked', async () => {
    const { searchButton, setInputData } = setup();
    await userEvent.click(searchButton);
    expect(setInputData).toHaveBeenCalledTimes(1);
  });

  it('toggles theme when the Change theme button is clicked', async () => {
    const { themeButton, toggleTheme } = setup();
    await userEvent.click(themeButton);
    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });
});

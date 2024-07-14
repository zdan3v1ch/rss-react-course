import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import SearchButton from './SearchButton';
import { useNavigate } from 'react-router-dom';
import { useSearchQuery } from '../../hooks/useSearchQuery';

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn()
}));

vi.mock('../../hooks/useSearchQuery', () => ({
  useSearchQuery: vi.fn()
}));

vi.mock('../../features/handleSearch/handleSearch', () => ({
  handleSearch: vi.fn()
}));

describe('SearchButton', () => {
  let mockSetSearchQuery: Mock;
  let mockNavigate: Mock;
  let mockSetDataResult: Mock;
  let mockSetLoading: Mock;
  let mockSetInputData: Mock;
  let mockSetLimit: Mock;

  beforeEach(() => {
    mockSetSearchQuery = vi.fn();
    mockNavigate = vi.fn();
    mockSetDataResult = vi.fn();
    mockSetLoading = vi.fn();
    mockSetInputData = vi.fn();
    mockSetLimit = vi.fn();

    (useNavigate as Mock).mockReturnValue(mockNavigate);
    (useSearchQuery as Mock).mockReturnValue({ setSearchQuery: mockSetSearchQuery });
  });

  it('saves the input value to local storage on button click', () => {
    render(
      <SearchButton
        inputData="test search"
        setDataResult={mockSetDataResult}
        setLoading={mockSetLoading}
        setInputData={mockSetInputData}
        currentPage={1}
        setLimit={mockSetLimit}
      />
    );

    const button = screen.getByRole('button', { name: /search/i });
    fireEvent.click(button);

    expect(mockSetSearchQuery).toHaveBeenCalledWith('test search');
    expect(mockSetInputData).toHaveBeenCalledWith('test search');
    expect(mockNavigate).toHaveBeenCalledWith('/search/1');
  });
});

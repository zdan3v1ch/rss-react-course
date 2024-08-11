import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Pagination from './Pagination';

vi.mock('next/router', () => ({
  useRouter: () => ({
    push: vi.fn()
  })
}));

describe('Pagination Component', () => {
  const setup = (page: string, limit: number) => {
    const handleOnClose = vi.fn();
    render(<Pagination currentPage={page} limit={limit} onClose={handleOnClose} />);

    const nextButton = screen.getByText(/Next/);
    const prevButton = screen.getByText(/Previous/);
    const pageContainer = screen.getByText(`Page ${page}`);
    return { nextButton, prevButton, pageContainer };
  };
  it('buttons will be disabled', () => {
    const { prevButton, nextButton } = setup('1', 1);
    expect(prevButton).toBeDisabled();
    expect(nextButton).toBeDisabled();
  });

  it('disables Previous button when on the first page', () => {
    const { prevButton } = setup('1', 5);
    expect(prevButton).toBeDisabled();
  });

  it('disables Next button when on the last page', () => {
    const { nextButton } = setup('5', 5);
    expect(nextButton).toBeDisabled();
  });
});

import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Pagination from './Pagination';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useSearchParams: () => [new URLSearchParams()]
}));

describe('Pagination Component', () => {
  it('updates the URL query parameter when changing pages', async () => {
    render(<Pagination currentPage={1} limit={5} onClose={vi.fn()} />);

    await act(async () => {
      fireEvent.click(screen.getByText('Next'));
    });

    expect(mockNavigate).toHaveBeenCalledWith('/search/2');
  });

  it('disables Previous button when on the first page', () => {
    render(<Pagination currentPage={1} limit={5} onClose={vi.fn()} />);

    const previousButton = screen.getByText('Previous');
    expect(previousButton).toBeDisabled();
  });

  it('disables Next button when on the last page', () => {
    render(<Pagination currentPage={5} limit={5} onClose={vi.fn()} />);

    const nextButton = screen.getByText('Next');
    expect(nextButton).toBeDisabled();
  });
});

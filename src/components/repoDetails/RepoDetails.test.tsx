import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, Mock } from 'vitest';
import { RepoDetails } from './RepoDetails';
import { IResponse } from '../../interfaces/MainPageInterface';

const mockOnClose = vi.fn();

const mockRepoData: IResponse = {
  id: 1,
  full_name: 'mock-repo',
  owner: { login: 'mock-owner' },
  description: 'This is a mock repository description',
  name: ''
};

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockRepoData)
  })
) as Mock;

const mockNavigate = vi.fn();
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('RepoDetails Component', () => {
  it('displays a loading indicator while fetching data', () => {
    render(<RepoDetails repoId={1} onClose={mockOnClose} currentPage={1} />);

    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
  });

  it('displays the repo details when data is fetched', async () => {
    render(<RepoDetails repoId={1} onClose={mockOnClose} currentPage={1} />);

    await waitFor(() => {
      expect(screen.getByText(/mock-repo/)).toBeInTheDocument();
      expect(screen.getByText(/mock-owner/)).toBeInTheDocument();
      expect(screen.getByText(/This is a mock repository description/)).toBeInTheDocument();
    });
  });

  it('calls onClose and navigates to the correct page when the Close button is clicked', async () => {
    render(<RepoDetails repoId={1} onClose={mockOnClose} currentPage={1} />);

    await waitFor(() => {
      fireEvent.click(screen.getByText(/Close/));
      expect(mockOnClose).toHaveBeenCalled();
      expect(mockNavigate).toHaveBeenCalledWith('/search/1');
    });
  });
});

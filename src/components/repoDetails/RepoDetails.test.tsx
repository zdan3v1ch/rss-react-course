import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { RepoDetails } from './RepoDetails';
import { apiSlice } from '../../redux/slices/rtkQuery/apiSlice';
import userEvent from '@testing-library/user-event';


const mockApiSlice = {
  useGetPeopleByIDQuery: vi.fn()
};

interface IRepoDetailsProps {
  onClose: () => void;
  repoId: string;
  currentPage: string;
}

describe('RepoDetails Component', () => {
  const renderComponent = (props: IRepoDetailsProps) => {
    const store = configureStore({
      reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
    });

    return render(
      <MemoryRouter>
        <Provider store={store}>
          <RepoDetails {...props} />
        </Provider>
      </MemoryRouter>
    );
  };

  it('renders loading state initially', () => {
    mockApiSlice.useGetPeopleByIDQuery.mockReturnValue({
      data: null,
      error: null,
      isLoading: true
    });

    renderComponent({ onClose: vi.fn(), repoId: '1', currentPage: '1' });

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders repo details when data is available', async () => {
    const mockData = {
      name: 'Luke Skywalker',
      eye_color: 'blue',
      gender: 'male',
      height: '172',
      skin_color: 'fair'
    };

    mockApiSlice.useGetPeopleByIDQuery.mockReturnValue({
      data: mockData,
      error: null,
      isLoading: false
    });

    renderComponent({ onClose: vi.fn(), repoId: '1', currentPage: '1' });

    await waitFor(() => {
      expect(screen.getByText('Name: Luke Skywalker')).toBeInTheDocument();
    });

    expect(screen.getByText('Eye color: blue')).toBeInTheDocument();
    expect(screen.getByText('Gender: male')).toBeInTheDocument();
    expect(screen.getByText('Height: 172')).toBeInTheDocument();
    expect(screen.getByText('Skin color: fair')).toBeInTheDocument();
  });

  it('renders error state when no data is available', async () => {
    mockApiSlice.useGetPeopleByIDQuery.mockReturnValue({
      data: null,
      error: true,
      isLoading: false
    });

    renderComponent({ onClose: vi.fn(), repoId: '1', currentPage: '1' });

    await waitFor(() => {
      expect(screen.getByText('No details available')).toBeInTheDocument();
    });
  });

  it('calls onClose and navigates to the correct page when close button is clicked', async () => {
    const mockData = {
      name: 'Luke Skywalker',
      eye_color: 'blue',
      gender: 'male',
      height: '172',
      skin_color: 'fair'
    };

    mockApiSlice.useGetPeopleByIDQuery.mockReturnValue({
      data: mockData,
      error: null,
      isLoading: false
    });

    const mockOnClose = vi.fn();
    renderComponent({ onClose: mockOnClose, repoId: '1', currentPage: '1' });

    const closeButton = await waitFor(() => screen.getByText('Close'));
    await userEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});

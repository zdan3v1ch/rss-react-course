import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import MainPage from './MainPage';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { mockResponse } from '../../__tests__/mockData';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    query: { page: '1' }
  })
}));

describe('render MainPage component', () => {
  it('MainPage render correctly', async () => {
    render(
      <Provider store={store}>
        <MainPage people={mockResponse} page={'1'} />
      </Provider>
    );
    expect(await screen.findByText(/Search/i)).toBeInTheDocument();
    expect(await screen.findByText(/Crash me/i)).toBeInTheDocument();
    expect(await screen.findByText(/Change theme/i)).toBeInTheDocument();
  });
});

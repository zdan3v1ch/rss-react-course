import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Index from '.';
import { store } from '../redux/store';

vi.mock('next/router', () => ({
  useRouter: () => ({
    push: vi.fn(),
    query: { page: '1' }
  })
}));

describe('render indexPage component', () => {
  it('indexPage render correctly', async () => {
    render(
      <Provider store={store}>
        <Index initialData={[]} initialPage={''} />
      </Provider>
    );
    expect(await screen.findByText(/Search/i)).toBeInTheDocument();
    expect(await screen.findByText(/Crash me/i)).toBeInTheDocument();
    expect(await screen.findByText(/Change theme/i)).toBeInTheDocument();
  });
});

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MyRoutes } from './Router';

describe('Router test', () => {
  it('redirect to "/"', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <MyRoutes />
      </MemoryRouter>
    );
    expect(await screen.findByText(/crash me/i)).toBeInTheDocument();
  });

  it('redirect to "/page"', async () => {
    render(
      <MemoryRouter initialEntries={['/page/1']}>
        <MyRoutes />
      </MemoryRouter>
    );
    expect(await screen.findByText(/search/i)).toBeInTheDocument();
  });

  it('render ErrorPage ', async () => {
    render(
      <MemoryRouter initialEntries={['/123']}>
        <MyRoutes />
      </MemoryRouter>
    );
    expect(await screen.findByText(/error page/i)).toBeInTheDocument();
  });
});

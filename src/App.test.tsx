import { App } from './App';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('render App component', () => {
  it('App render correctly', async () => {
    render(<App />);
    expect(await screen.findByText(/Search/i)).toBeInTheDocument();
    expect(await screen.findByText(/Crash me/i)).toBeInTheDocument();
    expect(await screen.findByText(/Change theme/i)).toBeInTheDocument();
  });
});

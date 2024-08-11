import React from 'react';
import ErrorPage from './ErrorPage';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Error page test', () => {
  it('Render Error page', () => {
    render(<ErrorPage />);
    expect(screen.getByText(/Error page/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});

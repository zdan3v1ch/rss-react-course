import React from 'react';
import NotFound from './not-found';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Error page test', () => {
  it('Render Error page', () => {
    render(<NotFound />);
    expect(screen.getByText(/Error page/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});

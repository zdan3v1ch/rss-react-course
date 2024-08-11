import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CustomErrorPage from './404';

describe('Error page test', () => {
  it('Render Error page', async () => {
    render(<CustomErrorPage />);
    expect(screen.getByText(/Error page/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});

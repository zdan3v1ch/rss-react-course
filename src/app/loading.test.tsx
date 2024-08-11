import React from 'react';
import LoadingPeople from './loading';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Loading page test', () => {
  it('Render Loading page', async () => {
    render(<LoadingPeople />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});

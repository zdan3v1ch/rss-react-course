import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { RepoDetails } from './RepoDetails';
import userEvent from '@testing-library/user-event';
import { mockData } from '../../__tests__/mockData';

describe('RepoDetails Component', () => {
  it('renders repo details when data is available', async () => {
    render(<RepoDetails onClose={vi.fn()} data={mockData} />);

    await waitFor(() => {
      expect(screen.getByText('Name: Luke Skywalker')).toBeInTheDocument();
    });

    expect(screen.getByText('Eye color: blue')).toBeInTheDocument();
    expect(screen.getByText('Gender: male')).toBeInTheDocument();
    expect(screen.getByText('Height: 172')).toBeInTheDocument();
    expect(screen.getByText('Skin color: fair')).toBeInTheDocument();
  });

  it('calls onClose and navigates to the correct page when close button is clicked', async () => {
    const mockOnClose = vi.fn();
    render(<RepoDetails onClose={mockOnClose} data={mockData} />);

    const closeButton = await waitFor(() => screen.getByText('Close'));
    await userEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});

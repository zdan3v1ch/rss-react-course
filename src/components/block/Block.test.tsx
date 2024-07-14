import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Block } from './Block';
import { IResponse } from '../../interfaces/MainPageInterface';

const mockData: IResponse = {
  id: 1,
  full_name: 'repo1',
  owner: { login: 'owner1' },
  description: 'desc1',
  name: ''
};

const mockOnClick = vi.fn();

describe('Block Component', () => {
  it('renders the block with correct data', () => {
    render(<Block data={mockData} onClick={mockOnClick} />);

    expect(screen.getByText(/Repository name: repo1/)).toBeInTheDocument();
    expect(screen.getByText(/Owner: owner1/)).toBeInTheDocument();
  });

  it('calls onClick with correct ID when clicked', () => {
    render(<Block data={mockData} onClick={mockOnClick} />);

    fireEvent.click(screen.getByText(/Repository name: repo1/));

    expect(mockOnClick).toHaveBeenCalledWith(mockData.id);
  });
});

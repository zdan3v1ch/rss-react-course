import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Block } from './Block';
import { IResponse } from '../../interfaces/MainPageInterface';
import { MemoryRouter } from 'react-router-dom';

const mockData: IResponse = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  url: 'https://swapi.dev/api/people/1/'
};

const mockOnClick = vi.fn();

describe('Block Component', () => {
  it('renders the block with correct data', () => {
    render(<Block data={mockData} onClick={mockOnClick} />);
    expect(screen.getByText(/Character name: Luke Skywalker/)).toBeInTheDocument();
    expect(screen.getByText(/Gender: male/)).toBeInTheDocument();
    expect(screen.getByText(/Height: 172/)).toBeInTheDocument();
    expect(screen.getByText(/Mass: 77/)).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    render(
      <MemoryRouter>
        <Block data={mockData} onClick={mockOnClick} />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText(/Character name: Luke Skywalker/));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});

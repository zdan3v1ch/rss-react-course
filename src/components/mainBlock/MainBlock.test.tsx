import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { IResponse } from '../../interfaces/MainPageInterface';
import { MainBlock } from './MainBlock';

const mockData: IResponse[] = [
  {
    id: 1,
    full_name: 'repo1',
    owner: { login: 'owner1' },
    description: 'desc1',
    name: ''
  },
  {
    id: 2,
    full_name: 'repo2',
    owner: { login: 'owner2' },
    description: 'desc2',
    name: ''
  }
];

describe('MainBlock Component', () => {
  it('renders the specified number of components', () => {
    const mockOnItemClick = vi.fn();
    const mockOnCloseDetails = vi.fn();

    render(
      <MainBlock
        dataResult={mockData}
        loading={false}
        onItemClick={mockOnItemClick}
        selectedItem={false}
        onCloseDetails={mockOnCloseDetails}
        repoDetailsComponent={null}
      />
    );

    const repositoryItems = screen.getAllByText(/Repository name:/);
    expect(repositoryItems).toHaveLength(mockData.length);
  });

  it('displays a message when no components are present', () => {
    const mockOnItemClick = vi.fn();
    const mockOnCloseDetails = vi.fn();

    render(
      <MainBlock
        dataResult={[]}
        loading={false}
        onItemClick={mockOnItemClick}
        selectedItem={false}
        onCloseDetails={mockOnCloseDetails}
        repoDetailsComponent={null}
      />
    );

    const noResultsMessage = screen.getByText(/No results/);
    expect(noResultsMessage).toBeInTheDocument();
  });
});

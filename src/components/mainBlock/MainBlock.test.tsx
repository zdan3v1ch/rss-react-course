import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { IResponse } from '../../interfaces/MainPageInterface';
import { MainBlock } from './MainBlock';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

const mockData: IResponse[] = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    url: 'https://swapi.dev/api/people/1/'
  },
  {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
    url: 'https://swapi.dev/api/people/2/'
  }
];

describe('MainBlock Component', () => {
  it('renders the specified number of components', () => {
    const mockOnItemClick = vi.fn();
    const mockOnCloseDetails = vi.fn();

    render(
      <Provider store={store}>
        <MainBlock
          dataResult={mockData}
          loading={false}
          onItemClick={mockOnItemClick}
          selectedItem={false}
          onCloseDetails={mockOnCloseDetails}
          repoDetailsComponent={null}
        />
      </Provider>
    );

    const repositoryItems = screen.getAllByText(/Character name: /);
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

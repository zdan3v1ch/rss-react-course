import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { FlyoutBlock } from './FlyoutBlock';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../../redux/slices/rtkQuery/apiSlice';
import selectedItemsSlice, { selectItem, unselectAll } from '../../redux/slices/selectSlice';
import { mockCards } from '../../__tests__/mockData';

URL['createObjectURL'] = vi.fn();

describe('Flyout Component', () => {
  const rootReducer = combineReducers({
    selectedItems: selectedItemsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  });

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
  });

  it('render Flyout component with mock data', () => {
    store.dispatch(selectItem(mockCards[0]));
    render(
      <Provider store={store}>
        <FlyoutBlock />
      </Provider>
    );
    const check = screen.getByText(/items are selected/i);
    expect(check).toBeInTheDocument();
  });

  it('no render Flyout component', () => {
    store.dispatch(unselectAll());
    const { container } = render(
      <Provider store={store}>
        <FlyoutBlock />
      </Provider>
    );
    expect(container).toBeEmptyDOMElement();
  });
});

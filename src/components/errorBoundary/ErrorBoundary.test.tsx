import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary';

const Child = () => {
  throw new Error();
};

describe('ErrorBoundary', () => {
  it('should display the no error child component', () => {
    render(
      <ErrorBoundary>
        <div>No error</div>
      </ErrorBoundary>
    );
    expect(screen.getByText('No error')).toBeInTheDocument();
  });

  it('should display an error message', () => {
    render(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    );
    expect(screen.getByText(/Something went wrong./i)).toBeInTheDocument();
  });
});

import { describe, expect, it } from 'vitest';
import { Providers } from './provider';
import { render, screen } from '@testing-library/react';

const TestComponent: React.FC = () => {
  return <div>Test Component</div>;
};

describe('Providers Component', () => {
  it('renders children correctly', () => {
    render(
      <Providers>
        <TestComponent />
      </Providers>
    );

    expect(screen.getByText(/Test Component/i)).toBeInTheDocument();
  });
});

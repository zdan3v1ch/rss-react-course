import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import RootLayout from './layout';

const TestComponent: React.FC = () => {
  return <div>Test Component</div>;
};

describe('Providers Component', () => {
  it('renders children correctly', () => {
    render(
      <RootLayout>
        <TestComponent />
      </RootLayout>
    );

    expect(screen.getByText(/Test Component/i)).toBeInTheDocument();
  });
});

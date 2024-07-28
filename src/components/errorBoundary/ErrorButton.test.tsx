import { ClickComponentFunc } from './ErrorButton';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ErrorBoundary } from './ErrorBoundary';

describe('Error button test', () => {
  it('Crashes on click', async () => {
    render(
      <ErrorBoundary>
        <ClickComponentFunc />
      </ErrorBoundary>
    );

    const button = screen.getByText('Crash me');

    await userEvent.click(button);

    const errorMessage = screen.getByText(/Something went wrong/i);
    expect(errorMessage).toBeInTheDocument();
  });
});

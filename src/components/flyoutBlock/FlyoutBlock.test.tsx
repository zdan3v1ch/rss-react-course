import { render } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { FlyoutBlock } from './FlyoutBlock';

const mockDispatch = vi.fn();
const mockSelector = vi.fn();

describe('Flyout Component', () => {
  vi.mock('react-redux', () => ({
    ...vi.importActual('react-redux'),
    useDispatch: () => mockDispatch,
    useSelector: () => mockSelector
  }));

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should render null', () => {
    mockSelector.mockReturnValue([]);
    const { container } = render(<FlyoutBlock />);
    expect(container).toBeEmptyDOMElement();
  });
});

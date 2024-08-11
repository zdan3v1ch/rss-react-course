import { NextRouter } from "next/router";
import { vi } from 'vitest';

export const mockRouter: NextRouter = {
  pathname: '/',
  route: '/',
  query: {},
  asPath: '/',
  push: vi.fn(),
  replace: vi.fn(),
  reload: vi.fn(),
  back: vi.fn(),
  prefetch: vi.fn(),
  beforePopState: vi.fn(),
  events: {
    on: vi.fn(),
    off: vi.fn(),
    emit: vi.fn(),
  },
  isFallback: false,
  isReady: true,
  isLocaleDomain: false,
  isPreview: false,
  locale: undefined,
  defaultLocale: 'en',
  locales: undefined,
  basePath: '',
  forward: vi.fn(),
};

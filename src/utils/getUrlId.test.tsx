import { getUrlId } from './getUrlId';
import { describe, it, expect } from 'vitest';

describe('Test getUrlId function', () => {
  it('expect the correct answer', () => {
    expect(getUrlId('https://swapi.dev/api/people/72/')).toBe('72');
  });

  it('expect null', () => {
    expect(getUrlId('')).toBeNull();
  });
});

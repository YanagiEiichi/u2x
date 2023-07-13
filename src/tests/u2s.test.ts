import { u2s } from '..';
import { AssertTrue, IsEquals } from './libs';

const fn = u2s;
const type = 'string' as const;
const defaultValue = 'default' as const;
const regularValue = 'regular' as string;
const strictValue = 'strict' as const;

describe('No default value', () => {
  test('Type matched', () => {
    const r = fn(regularValue);
    expect(r).toBe(regularValue);
    true as AssertTrue<IsEquals<typeof regularValue, typeof r>>;
  });

  test('Type strict matched', () => {
    const r = fn(strictValue);
    expect(r).toBe(strictValue);
    true as AssertTrue<IsEquals<typeof strictValue, typeof r>>;
  });

  test('Type partial matched', () => {
    for (const value of [123, 'str', 456, 'abc', true, false, null]) {
      const r = fn(value);
      expect(r).toBe(typeof value === type ? value : undefined);
      true as AssertTrue<IsEquals<typeof regularValue | undefined, typeof r>>;
    }
  });

  test('Type not matched', () => {
    const r = fn(null);
    expect(r).toBeUndefined();
    true as AssertTrue<IsEquals<undefined, typeof r>>;
  });
});

describe('With default value', () => {
  test('Type matched', () => {
    const r = fn(regularValue, defaultValue);
    expect(r).toBe(regularValue);
    true as AssertTrue<IsEquals<typeof regularValue, typeof r>>;
  });

  test('Type strict matched', () => {
    const r = fn(strictValue, defaultValue);
    expect(r).toBe(strictValue);
    true as AssertTrue<IsEquals<typeof strictValue, typeof r>>;
  });

  test('Type partial matched', () => {
    for (const value of [123, 'str', 456, 'abc', true, false, null]) {
      const r = fn(value, defaultValue);
      expect(r).toBe(typeof value === type ? value : defaultValue);
      true as AssertTrue<IsEquals<typeof regularValue | typeof defaultValue, typeof r>>;
    }
  });

  test('Type not matched', () => {
    const r = fn(null, defaultValue);
    expect(r).toBe(defaultValue);
    true as AssertTrue<IsEquals<typeof defaultValue, typeof r>>;
  });
});

describe('With converter', () => {
  const converter = () => defaultValue;
  test('Type matched', () => {
    const r = fn(regularValue, converter);
    expect(r).toBe(regularValue);
    true as AssertTrue<IsEquals<typeof regularValue, typeof r>>;
  });

  test('Type strict matched', () => {
    const r = fn(strictValue, converter);
    expect(r).toBe(strictValue);
    true as AssertTrue<IsEquals<typeof strictValue, typeof r>>;
  });

  test('Type partial matched', () => {
    for (const value of [123, 'str', 456, 'abc', true, false, null]) {
      const r = fn(value, converter);
      expect(r).toBe(typeof value === type ? value : defaultValue);
      true as AssertTrue<IsEquals<typeof regularValue | typeof defaultValue, typeof r>>;
    }
  });

  test('Type not matched', () => {
    const r = fn(null, converter);
    expect(r).toBe(defaultValue);
    true as AssertTrue<IsEquals<typeof defaultValue, typeof r>>;
  });
});
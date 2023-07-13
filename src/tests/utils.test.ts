import { u2x } from '../utils';
import { AssertTrue, IsEquals } from './libs';

test('Strict number type should be preserved', () => {
  const r = u2x('number', 1 as 1 | 2);
  expect(r).toBe(1);
  true as AssertTrue<IsEquals<1 | 2, typeof r>>;
});

test('Strict string type should be preserved', () => {
  const r = u2x('string', 'a' as 'a' | 'b');
  expect(r).toBe('a');
  true as AssertTrue<IsEquals<'a' | 'b', typeof r>>;
});

test('Filter number types, and convert other types to undefined', () => {
  const r = u2x('number', 1 as 1 | 'a' | true | 2 | 'b' | false | null | { a: 1 });
  expect(r).toBe(1);
  true as AssertTrue<IsEquals<1 | 2 | undefined, typeof r>>;
});

test('Filter string types, and convert other types to undefined', () => {
  const r = u2x('string', 1 as 1 | 'a' | true | 2 | 'b' | false | null | { a: 1 });
  expect(r).toBe(1);
  true as AssertTrue<IsEquals<'a' | 'b' | undefined, typeof r>>;
});

test('A `unknown` type convert to `string`', () => {
  const r1 = u2x('string', 'a' as unknown);
  expect(r1).toBe('a');
  true as AssertTrue<IsEquals<string | undefined, typeof r1>>;

  const r2 = u2x('string', 1 as unknown);
  expect(r2).toBe(undefined);
  true as AssertTrue<IsEquals<string | undefined, typeof r2>>;

  const r3 = u2x('string', 1 as unknown, () => null);
  expect(r3).toBe(null);
  true as AssertTrue<IsEquals<string | null, typeof r3>>;
});

test('A `unknown` type convert to `number`', () => {
  const r1 = u2x('number', 'a' as unknown);
  expect(r1).toBe('a');
  true as AssertTrue<IsEquals<number | undefined, typeof r1>>;

  const r2 = u2x('number', 1 as unknown);
  expect(r2).toBe(undefined);
  true as AssertTrue<IsEquals<number | undefined, typeof r2>>;

  const r3 = u2x('number', 1 as unknown, () => null);
  expect(r3).toBe(null);
  true as AssertTrue<IsEquals<number | null, typeof r3>>;
});

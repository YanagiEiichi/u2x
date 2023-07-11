import { u2b, u2n, u2s } from '..';
import { AssertTrue, IsEquals } from './libs';

test('The u2s function', () => {
  const r1 = u2s(1);
  expect(r1).toBeUndefined();
  true as AssertTrue<IsEquals<undefined, typeof r1>>;

  const r2 = u2s(1, String);
  expect(r2).toBe('1');
  true as AssertTrue<IsEquals<string, typeof r2>>;

  const r3 = u2s('aa' as const);
  expect(r3).toBe('aa');
  true as AssertTrue<IsEquals<'aa', typeof r3>>;
});

test('The u2n function', () => {
  const r1 = u2n('1');
  expect(r1).toBeUndefined();
  true as AssertTrue<IsEquals<undefined, typeof r1>>;

  const r2 = u2n('1', Number);
  expect(r2).toBe(1);
  true as AssertTrue<IsEquals<number, typeof r2>>;

  const r3 = u2n(1 as const);
  expect(r3).toBe(1);
  true as AssertTrue<IsEquals<1, typeof r3>>;

  const r4 = u2n(1 as 1 | '1');
  expect(r4).toBe(1);
  true as AssertTrue<IsEquals<1 | undefined, typeof r4>>;
});

test('The u2b function', () => {
  const r1 = u2b(1);
  expect(r1).toBeUndefined();
  true as AssertTrue<IsEquals<undefined, typeof r1>>;

  const r2 = u2b(1, Boolean);
  expect(r2).toBe(true);
  true as AssertTrue<IsEquals<boolean, typeof r2>>;

  const r3 = u2b(true as const);
  expect(r3).toBe(true);
  true as AssertTrue<IsEquals<true, typeof r3>>;
});

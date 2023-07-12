import { u2a, u2n } from '..';
import { AssertTrue, IsEquals } from './libs';

test('Basic u2a', () => {
  const r1 = u2a(1);
  expect(r1).toMatchObject([]);
  true as AssertTrue<IsEquals<unknown[], typeof r1>>;

  const r2 = u2a([1]);
  expect(r2).toMatchObject([1]);
  true as AssertTrue<IsEquals<number[], typeof r2>>;

  const r3 = u2a([1, '1']);
  expect(r3).toMatchObject([1, '1']);
  true as AssertTrue<IsEquals<(number | string)[], typeof r3>>;
});

test('Keep the original type', () => {
  const a = Object.assign([1, 2, 3], { name: 'hehe' });
  const r1 = u2a(a);
  expect(r1).toBe(a);
  expect(r1.name).toBe(a.name);
  true as AssertTrue<IsEquals<typeof a, typeof r1>>;
});

test('Maps with u2n', () => {
  const r1 = u2a([1, 2] as const, u2n);
  expect(r1).toMatchObject([1, 2]);
  true as AssertTrue<IsEquals<(1 | 2)[], typeof r1>>;

  const r2 = u2a([1, 2, '1'] as const, u2n);
  expect(r2).toMatchObject([1, 2, undefined]);
  true as AssertTrue<IsEquals<(1 | 2 | undefined)[], typeof r2>>;
});

test('Maps with u2a', () => {
  const data = [
    [1, 2],
    [3, 4],
  ] as const;
  const r1 = u2a(data, u2a);
  expect(r1).toMatchObject(data);
  true as AssertTrue<IsEquals<(typeof data)[number][], typeof r1>>;
});

test('Disable map method', () => {
  const data = [1, 2, 3];
  Object.defineProperty(data, 'map', { value: null });
  const r1 = u2a(data, u2n);
  expect(r1).toMatchObject(data);
  true as AssertTrue<IsEquals<number[], typeof r1>>;
});

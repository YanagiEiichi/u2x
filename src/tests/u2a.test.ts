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

test('Maps with u2n', () => {
  const r1 = u2a([1, 2] as const, u2n);
  expect(r1).toMatchObject([1, 2]);
  true as AssertTrue<IsEquals<(1 | 2)[], typeof r1>>;

  const r2 = u2a([1, 2, '1'] as const, u2n);
  expect(r2).toMatchObject([1, 2, '1']);
  true as AssertTrue<IsEquals<(1 | 2 | undefined)[], typeof r2>>;
});

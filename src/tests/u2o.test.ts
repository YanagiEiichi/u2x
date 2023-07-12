import { u2o } from '..';
import { DirtyObject } from '../utils';
import { AssertTrue, IsEquals } from './libs';

test('Basic u2o', () => {
  const r1 = u2o(undefined);
  expect(r1).toMatchObject({});
  true as AssertTrue<IsEquals<Record<PropertyKey, unknown>, typeof r1>>;

  const r2 = u2o(null);
  expect(r2).toMatchObject({});
  true as AssertTrue<IsEquals<Record<PropertyKey, unknown>, typeof r1>>;
});

test('u2o(number)', () => {
  const r1 = u2o(1 as const);
  expect(r1).toMatchObject({});
  expect(r1).toBeInstanceOf(Number);
  expect(r1.valueOf()).toBe(1);
  true as AssertTrue<IsEquals<Number & DirtyObject, typeof r1>>;
});

test('u2o(string)', () => {
  const r1 = u2o('hehe' as const);
  expect(r1).toMatchObject({});
  expect(r1).toBeInstanceOf(String);
  expect(r1.valueOf()).toBe('hehe');
  true as AssertTrue<IsEquals<String & DirtyObject, typeof r1>>;
});

test('u2o(boolean)', () => {
  const r1 = u2o(true as const);
  expect(r1).toMatchObject({});
  expect(r1).toBeInstanceOf(Boolean);
  expect(r1.valueOf()).toBe(true);
  true as AssertTrue<IsEquals<Boolean & DirtyObject, typeof r1>>;
});

test('Keep the original type', () => {
  const a = Object.assign([1, 2, 3] as const, { name: 'hehe' } as const);
  const r1 = u2o(a);
  expect(r1).toBe(a);
  true as AssertTrue<IsEquals<typeof a & DirtyObject, typeof r1>>;
  expect(r1.name).toBe(a.name);
  true as AssertTrue<IsEquals<'hehe', (typeof r1)['name']>>;
});

test('Keep the original function', () => {
  const a = () => 123;
  const r1 = u2o(a);
  expect(r1).toBe(a);
  true as AssertTrue<IsEquals<typeof a & DirtyObject, typeof r1>>;
  expect(r1()).toBe(123);
  true as AssertTrue<IsEquals<number, ReturnType<typeof r1>>>;
});

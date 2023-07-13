import { ToArray } from '../u2a';
import { AssertTrue, IsEquals } from './libs';

true as AssertTrue<IsEquals<1[], ToArray<1[]>>>;

true as AssertTrue<IsEquals<number[], ToArray<number[]>>>;

// Both `1[]` and `2[]` are array, and are kept.
true as AssertTrue<IsEquals<1[] | 2[], ToArray<1[] | 2[]>>>;

// A `undefined` is not an array, so it wil be ignored, and only `number[]` will be kept.
true as AssertTrue<IsEquals<number[], ToArray<undefined | number[]>>>;

// A `unknown` can be any type, including of course `unknown[]`, so an `unknown[]` should be returend.
true as AssertTrue<IsEquals<unknown[], ToArray<unknown | number[]>>>;

// A `1` is never an array, a `never` array should be returned.
true as AssertTrue<IsEquals<never[], ToArray<1>>>;

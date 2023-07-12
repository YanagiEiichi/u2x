import { u2x } from './utils';

/**
 * Do not declare this function with overloading.
 * Because, this function is usually used as a callback,
 * overloaded functions cannot merge all declared types when used as a callback.
 */

/**
 * Converts `u` to a number, and if `u` is not a number, calls the conversion function or returns an undefined.
 */
export function u2n<U, R = undefined>(u: U, converter?: (u: U) => R) {
  return u2x('number', u, converter);
}

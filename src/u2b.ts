import { u2x } from './utils';

/**
 * Do not declare this function with overloading.
 * Because, this function is usually used as a callback,
 * overloaded functions cannot merge all declared types when used as a callback.
 */

/**
 * Converts `u` to a boolean, and if `u` is not a boolean, calls the conversion function or returns an undefined.
 */
export function u2b<U, R = undefined>(u: U, converter?: (u: U) => R) {
  return u2x('boolean', u, converter);
}

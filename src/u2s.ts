import { u2x } from './utils';

/**
 * Do not declare this function with overloading.
 * Because, this function is usually used as a callback,
 * overloaded functions cannot merge all declared types when used as a callback.
 */

/**
 * Converts `u` to a string, and if `u` is not a string, calls the conversion function or returns an undefined.
 */
export function u2s<U, R = undefined>(u: U, converter?: (u: U) => R) {
  return u2x('string', u, converter);
}

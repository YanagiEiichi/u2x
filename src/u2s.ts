import { Converter, u2x } from './utils';

/**
 * Do not declare this function with overloading.
 * Because, this function is usually used as a callback,
 * overloaded functions cannot merge all declared types when used as a callback.
 */

/**
 * Convert `what` to a string, you can provide a custom conversion function.
 * By default, if `what` is not a string, a `undefined` will be returned.
 *
 * @param what Input value.
 * @param converter A converter function.
 */
export function u2s<U, R = undefined>(what: U, converter?: Converter<U, R>) {
  return u2x('string', what, converter);
}

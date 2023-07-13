import { Converter, u2x } from './utils';

/**
 * Do not declare this function with overloading.
 * Because, this function is usually used as a callback,
 * overloaded functions cannot merge all declared types when used as a callback.
 */

/**
 * Convert `what` to a number, you can provide a custom conversion function or a default value.
 * By default, if `what` is not a number, a `undefined` will be returned.
 *
 * @param what Input value.
 * @param defaultValueOrConverter A default value or a converter function.
 */
export function u2n<U, R = undefined>(what: U, defaultValueOrConverter?: R | Converter<U, R>) {
  return u2x('number', what, defaultValueOrConverter);
}

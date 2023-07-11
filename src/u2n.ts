import { U2x } from './utils';

/**
 * Converts unknown to a number.
 */
export function u2n<T>(u: T): U2x<number, T, undefined>;

/**
 * Converts unknown to a number.
 */
export function u2n<T, R = undefined>(u: T, converter: (u: T) => R): U2x<number, T, R>;

export function u2n<T, R = undefined>(u: T, converter?: (u: T) => R): U2x<number, T, R> {
  return (typeof u === 'number' ? u : converter?.(u)) as U2x<number, T, R>;
}

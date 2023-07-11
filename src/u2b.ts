import { U2x } from './utils';

/**
 * Converts unknown to a boolean.
 */
export function u2b<T>(u: T): U2x<boolean, T, undefined>;

/**
 * Converts unknown to a boolean.
 */
export function u2b<T, R = undefined>(u: T, converter?: (u: T) => R): U2x<boolean, T, R>;

export function u2b<T, R = undefined>(u: T, converter?: (u: T) => R): U2x<boolean, T, R> {
  return (typeof u === 'boolean' ? u : converter?.(u)) as U2x<boolean, T, R>;
}

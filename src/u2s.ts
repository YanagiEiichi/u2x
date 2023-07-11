import { U2x } from './utils';

/**
 * Converts unknown to a string.
 */
export function u2s<T>(u: T): U2x<string, T, undefined>;

/**
 * Converts unknown to a string.
 */
export function u2s<T, R = undefined>(u: T, fallback: (u: T) => R): U2x<string, T, R>;

export function u2s<T, R = undefined>(u: T, converter?: (u: T) => R): U2x<string, T, R> {
  return (typeof u === 'string' ? u : converter?.(u)) as U2x<string, T, R>;
}

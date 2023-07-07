import { IfType } from './utils';

/**
 * Convert unknown to string.
 */
export function u2s<T, R = undefined>(u: T, fallback?: (u: T) => R): IfType<string, T, R> {
  return (typeof u === 'string' ? u : fallback?.(u)) as IfType<string, T, R>;
}

/**
 * Convert unknown to number.
 */
export function u2n<T, R = undefined>(u: T, fallback?: (u: T) => R): IfType<number, T, R> {
  return (typeof u === 'number' ? u : fallback?.(u)) as IfType<number, T, R>;
}

/**
 * Convert unknown to boolean.
 */
export function u2b<T, R = undefined>(u: T, fallback?: (u: T) => R): IfType<boolean, T, R> {
  return (typeof u === 'boolean' ? u : fallback?.(u)) as IfType<boolean, T, R>;
}

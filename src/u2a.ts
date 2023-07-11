import { IfAnyOrUnknown } from './utils';

type ArrayItem<T> = T extends (infer U)[] ? U : unknown;

/**
 * Converts unknown to an array.
 * NOTE: If `u` is not an array, an empty array will be returned.
 */
export function u2a<T>(u: T): IfAnyOrUnknown<T, unknown[], T extends unknown[] ? T : unknown[]>;

/**
 * Converts unknown to an array, and each item will be mapped using a callback function.
 * NOTE: If `u` is not an array, an empty array will be returned.
 */
export function u2a<T, R>(u: T, callbackfn: (item: ArrayItem<T>) => R): R[];

export function u2a<T, R>(u: T, callbackfn?: (item: ArrayItem<T>) => R) {
  const a = u instanceof Array ? u : [];
  return callbackfn ? a.map((v) => callbackfn(v)) : a;
}

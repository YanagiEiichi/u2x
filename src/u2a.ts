import { IfAnyOrUnknown } from './utils';

type ArrayItem<T> = T extends (infer U)[] ? U : unknown;

/**
 * Convert unknown to array.
 */
export function u2a<T>(u: T): IfAnyOrUnknown<T, unknown[], T extends unknown[] ? T : unknown[]>;

/**
 * Convert unknown to array.
 */
export function u2a<T, R>(u: T, callbackfn: (item: ArrayItem<T>) => R): R[];

export function u2a<T, R>(u: T, callbackfn?: (item: ArrayItem<T>) => R) {
  const a = u instanceof Array ? u : [];
  return callbackfn ? a.map((v) => callbackfn(v)) : a;
}

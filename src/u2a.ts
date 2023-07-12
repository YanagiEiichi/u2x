import { IfAnyOrUnknown } from './utils';

type ArrayItem<T> = T extends readonly (infer U)[] ? U : unknown;

type U2a<U, R> =
  // Check `F` is `never` or not.
  [R] extends [never]
    ? // Yes `F` is a `never`, no callback function provided.
      IfAnyOrUnknown<U, unknown, U extends readonly unknown[] ? U : unknown[]>
    : // No, `F` is not a `never`.
      IfAnyOrUnknown<R, unknown>[];

/**
 * Converts unknown to an array.
 * If `callbackfn` is provided, each item will be mapped using it.
 * NOTE: If `u` is not an array, an empty array will be returned.
 */
export function u2a<U, R = never>(u: U, callbackfn?: (item: ArrayItem<U>) => R): U2a<U, R> {
  const a = u instanceof Array ? u : [];
  if (!callbackfn) return a as U2a<U, R>;
  // Do not use `a.map(...)`, because `a.map` may be dirty.
  return Array.prototype.map.call(a, (v) => callbackfn(v)) as U2a<U, R>;
}

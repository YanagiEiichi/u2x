import { IfAnyOrUnknown, IfNever } from './utils';

/**
 * Convert any type to array.
 * Try to extract all explicit array types from `U`, if `never` fallback to an `unknown[]`.
 */
export type ToArray<U> = IfAnyOrUnknown<
  // Is the `U` a unsafe type? (`any` or `unknown`)
  U,
  // Yes, `U` is a unsafe type, return a unsafe array as the result[]
  unknown[],
  // No, `U` is a safe type, extract array types, and fallback to unknown array.
  IfNever<Extract<U, readonly unknown[]>, never[]>
>;

/**
 * Converts unknown to an array.
 * If `callbackfn` is provided, each item will be mapped using it.
 * NOTE: If `u` is not an array, an empty array will be returned.
 */
export function u2a<U, R = never>(u: U, callbackfn?: (item: ToArray<U>[number]) => R) {
  const a = u instanceof Array ? u : [];
  return (
    callbackfn
      ? // Do not use `a.map(...)`, because `a.map` may be dirty.
        Array.prototype.map.call(a, (v) => callbackfn(v))
      : a
  ) as IfNever<
    // Is the `R` `never`?
    R,
    // Yes `R` is a `never`, that means no callback function provided.
    ToArray<U>,
    // No, `U` is not a `never`, use an array of callback return type as the result.
    IfAnyOrUnknown<R, unknown>[]
  >;
}

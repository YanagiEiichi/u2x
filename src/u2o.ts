import { IfAnyOrUnknown, DirtyObject } from './utils';

/**
 * Convert any type to object by folloing steps:
 *
 * - If `U` is a `string`, returns a `String` object.
 * - If `U` is a `number`, returns a `Number` object.
 * - If `U` is a `boolean`, returns a `Boolean` object.
 * - If `U` is an `object`, * returns `U` itself.
 * - Otherwise returns an `unknown`.
 */
export type ToObject<U> = U extends object
  ? U
  : U extends string
  ? String
  : U extends number
  ? Number
  : U extends boolean
  ? Boolean
  : unknown;

/**
 * Convert unknown to object.
 *
 * There are several different definitions of what an "object" is.
 * The value of `typeof null` is also an "object", so the `null` is also an "object"?
 * The `Object.create(null) instanceof Object` is false, so the Object.create(null) is not an "object"?
 * :joy:, JavaScript is the best programing language in the world.
 */
export function u2o<U>(u: U) {
  return Object(u) as IfAnyOrUnknown<U, unknown, ToObject<U>> & DirtyObject;
}

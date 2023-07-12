import { IfAnyOrUnknown } from './utils';

export type DirtyObject = Record<PropertyKey, unknown>;

type ToObject<U> = U extends object
  ? U
  : U extends string
  ? String
  : U extends number
  ? Number
  : U extends boolean
  ? Boolean
  : U extends bigint
  ? BigInt
  : unknown;

type U2o<U> = IfAnyOrUnknown<U, unknown, ToObject<U>> & DirtyObject;

/**
 * Convert unknown to object.
 *
 * There are several different definitions of what an "object" is.
 * The value of `typeof null` is also an "object", so the `null` is also an "object"?
 * The `Object.create(null) instanceof Object` is false, so the Object.create(null) is not an "object"?
 * :joy:, JavaScript is the best programing language in the world.
 */
export function u2o<U>(u: U): U2o<U> {
  return Object(u);
}

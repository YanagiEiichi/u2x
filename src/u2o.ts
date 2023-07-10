import { IfType } from './utils';

type DirtyObject = Record<PropertyKey, unknown>;

/**
 * Convert unknown to object.
 *
 * There are several different definitions of what an "object" is.
 * The value of `typeof null` is also an "object", so the `null` is also an "object"?
 * The `Object.create(null) instanceof Object` is false, so the Object.create(null) is not an "object"?
 * :joy:, JavaScript is the best programing language in the world.
 */
export function u2o<T>(u: T): IfType<object, T> & DirtyObject {
  return Object(u);
}

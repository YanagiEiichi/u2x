/**
 * If `U` is `any` or `unknown`, returns `Y` else returns `N`.
 */
export type IfAnyOrUnknown<U, Y, N = U> = unknown extends U ? Y : N;

/**
 * If `U` is `never`, returns `Y` else returns `N`.
 */
export type IfNever<U, Y, N = U> = [U] extends [never] ? Y : N;

/**
 * Maps a JavaScript typeof string to a real TypeScript type.
 */
export type JTypes = {
  string: string;
  number: number;
  boolean: boolean;
};

/**
 * A dirty object, any propertis can be access and got an unknow value.
 */
export type DirtyObject = Record<PropertyKey, unknown>;

/**
 * If `u` is a `t` type, return `u` directly, otherwise call a conversion function and return the result.
 * If no conversion function is even provided, a `undefined` value will be returned.
 */
export function u2x<T extends keyof JTypes, U, R = undefined>(t: T, u: U, converter?: (u: U) => R) {
  return (typeof u === t ? u : converter?.(u)) as IfAnyOrUnknown<U, JTypes[T] | R, U extends JTypes[T] ? U : R>;
}

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
 * A conversion function that converts `value` to any you want.
 */
export type Converter<V, R> = (value: V) => R;

/**
 * If `what` matching `type`, return `what` directly, otherwise try to call a conversion function and return.
 * If the conversion function is also not provided, an `undefined` will be returned.
 *
 * @param type Expected type.
 * @param what Input value.
 * @param converter A default value or a converter function.
 */
export function u2x<T extends keyof JTypes, U, R = undefined>(type: T, what: U, converter?: Converter<U, R>) {
  return (typeof what === type ? what : converter?.(what)) as IfAnyOrUnknown<
    U,
    JTypes[T] | R,
    U extends JTypes[T] ? U : R
  >;
}

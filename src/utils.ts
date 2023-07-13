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
 * Convert something, whether it is a value or already a conversion function, to a converter.
 *
 * NOTE: In fact, even if value type is a 'function', we still cannot assert that it is a `Converter`,
 * as it may also be a `() => void` that cannot receiving any parameters.
 * Anyway, we force it to be treated as a `Convert`, if it is a function.
 * TypeScript does not support type exclusion, otherwise defining `R` as `Exclude<any, Function>` would be better.
 *
 * @param defaultValueOrConverter A default value or a converter function.
 * @returns A converter function.
 */
const toConverter = <R, V>(defaultValueOrConverter: R | Converter<V, R>) => {
  return (
    typeof defaultValueOrConverter === 'function' ? defaultValueOrConverter : () => defaultValueOrConverter
  ) as Converter<V, R>;
};

/**
 * If `what` matching `type`, return `what` directly, otherwise try to call a conversion function and return.
 * If the conversion function is also not provided, the default value (may be undefined) will be returned.
 *
 * @param type Expected type.
 * @param what Input value.
 * @param defaultValueOrConverter A default value or a converter function.
 */
export function u2x<T extends keyof JTypes, U, R = undefined>(
  type: T,
  what: U,
  defaultValueOrConverter?: R | ((u: U) => R),
) {
  return (typeof what === type ? what : toConverter(defaultValueOrConverter)(what)) as IfAnyOrUnknown<
    U,
    JTypes[T] | R,
    U extends JTypes[T] ? U : R
  >;
}

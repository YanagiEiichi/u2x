export type IfAnyOrUnknown<T, Y, N = T> = unknown extends T ? Y : N;

/**
 * For each type of a union `U`, if it is extended from `E`, it is kept, otherwise it is converted to `R`,
 * and finally each mapped type is merged into a new union.
 *
 * For example:
 *
 * - `U2x<number, 1 | 2, null>` results `1 | 2`
 * - `U2x<number, 'a', null>` results `null`
 * - `U2x<number, 1 | 2 | 'a', null>` results `1 | 2 | null`
 * - `U2x<number, unknown, null>` results `number | null`
 *
 * NOTE: If `U` is `any` or `unknown`, return the `P | R` directly.
 */
export type U2x<E, U, R = unknown> = IfAnyOrUnknown<U, E | R, U extends E ? U : R>;

type TypeMap = {
  string: string;
  number: number;
  boolean: boolean;
};

/**
 * Converts `u` to a the `t` type, calls the conversion function or returns an undefined.
 */
export function u2x<T extends keyof TypeMap, U, R = undefined>(t: T, u: U, converter?: (u: U) => R) {
  return (typeof u === t ? u : converter?.(u)) as U2x<TypeMap[T], U, R>;
}

export type DirtyObject = Record<PropertyKey, unknown>;

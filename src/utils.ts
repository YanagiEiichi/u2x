export type IfAnyOrUnknown<T, Y, N> = unknown extends T ? Y : N;

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

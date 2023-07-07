export type IfAnyOrUnknown<T, Y, N> = unknown extends T ? Y : N;

/**
 * If U extends P return U else return R.
 * NOTE: if U is any or unknown return P | R.
 */
export type IfType<P, U, R = unknown> = IfAnyOrUnknown<U, P | R, U extends P ? U : R>;

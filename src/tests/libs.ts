export type IsEquals<A, B> = (<G>() => G extends A ? 1 : 2) extends <G>() => G extends B ? 1 : 2 ? true : false;

export type AssertTrue<T extends true> = T;

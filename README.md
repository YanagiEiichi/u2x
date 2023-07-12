# u2x

A suite of utilities for converting unknown data to desired type.

## Install

```bash
yarn add u2x
```

or

```bash
npm install u2x --save
```

## Background

When you receive data from remote.

```ts
const result = await request('...');
```

You cannot trust that type of data. If you access its property directly, such as:

```ts
console.log(result.aaa); // May be thrown.
```

That may be thrown, if the result is null or undefined.

Therefore, you can wrap `u2o` with this result, such as

```ts
const safeResult = u2o(result);

console.log(safeResult.aaa);
```

The `u2o` function convert any value to an object.

Wait! Is not that too simple? So why do not I wrap it with `Object`?

```ts
const safeResult = Object(result);

console.log(safeResult.aaa);
```

This code works just as well.

Yes, you are right.
The `u2o` function is also implemented using `Object`, you can see the code [src/u2o.ts](src/u2o.ts) here.

But, in TypeScript, `Object` always returns an `any`, it is a bad practis.

For example

```ts
const safeResult = Object(result);

console.log(safeResult.aaa.bbb); // May be throw
```

On an `any`, all properties are `any` (The contagiousness of `any`),
you can not guarantee that every property is an object.

In fact, if `Object(...)` returns `Record<PropertyKey, unknown>`, that is a better definition.
When you attempt to access a property from an `unknown`, TypeScript compiler warns you that this is an error.

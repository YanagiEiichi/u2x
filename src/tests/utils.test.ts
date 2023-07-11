import { U2x } from '../utils';
import { AssertTrue, IsEquals } from './libs';

test('The type definition of U2x', () => {
  true as
    | AssertTrue<IsEquals<1 | 2, U2x<number, 1 | 2, null>>>
    | AssertTrue<IsEquals<null, U2x<number, 'a', null>>>
    | AssertTrue<IsEquals<1 | 2 | null, U2x<number, 1 | 2 | 'a', null>>>
    | AssertTrue<IsEquals<number | null, U2x<number, unknown, null>>>;
});

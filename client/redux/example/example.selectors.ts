import memoize from 'fast-memoize';

import { State } from '../redux.types';
import { ExampleEnum } from './example.types';

// eslint-disable-next-line import/prefer-default-export
export const getExampleData = memoize(
  (state: State) => state[ExampleEnum.Example][ExampleEnum.Data]
);

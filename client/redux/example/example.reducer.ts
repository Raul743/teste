import { createReducer } from '@reduxjs/toolkit';

import { ExampleState } from '../redux.types';
import ExampleActionTypes from './example.enum';
import { exampleFailure, exampleStart, exampleSuccess } from './example.reducers-helper';
import { ExampleEnum } from './example.types';

export const INITIAL_STATE = {
  [ExampleEnum.Loading]: false,
  [ExampleEnum.Data]: null,
  [ExampleEnum.Error]: false,
};

const exampleReducer = createReducer<ExampleState>(INITIAL_STATE, {
  [ExampleActionTypes.EXAMPLE_START]: exampleStart,
  [ExampleActionTypes.EXAMPLE_SUCCESS]: exampleSuccess,
  [ExampleActionTypes.EXAMPLE_FAILURE]: exampleFailure,
});

export default exampleReducer;

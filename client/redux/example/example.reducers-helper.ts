import { AnyAction } from 'redux';

import { ExampleState, Reducer } from '../redux.types';
import { ExampleEnum } from './example.types';

export const exampleStart: Reducer<ExampleState, AnyAction> = state => ({
  ...state,
  [ExampleEnum.Loading]: true,
});

export const exampleSuccess: Reducer<ExampleState, AnyAction> = (state, action) => ({
  ...state,
  [ExampleEnum.Loading]: false,
  [ExampleEnum.Data]: action.payload,
});

export const exampleFailure: Reducer<ExampleState, AnyAction> = state => ({
  ...state,
  [ExampleEnum.Error]: true,
});

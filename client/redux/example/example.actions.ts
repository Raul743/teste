import ExampleActionTypes from './example.enum';
import { IExampleFailureReturn, IExampleStartReturn, IExampleSuccessReturn } from './example.types';

export const exampleActionStart: IExampleStartReturn = payload => ({
  type: ExampleActionTypes.EXAMPLE_START,
  payload,
});

export const exampleActionSuccess: IExampleSuccessReturn = payload => ({
  type: ExampleActionTypes.EXAMPLE_SUCCESS,
  payload,
});

export const exampleActionFailure: IExampleFailureReturn = payload => ({
  type: ExampleActionTypes.EXAMPLE_FAILURE,
  payload,
});

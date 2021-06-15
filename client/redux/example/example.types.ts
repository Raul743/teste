import ExampleActionTypes from './example.enum';

export enum ExampleEnum {
  Error = 'error',
  Loading = 'loading',
  Data = 'data',
  Example = 'example',
}

/* Action Interfaces */
export interface ExampleStartReturn {
  type: typeof ExampleActionTypes.EXAMPLE_START;
  payload: Object;
}

export interface IExampleStartReturn {
  (payload: Object): ExampleStartReturn;
}

export interface ExampleSuccessReturn {
  type: typeof ExampleActionTypes.EXAMPLE_SUCCESS;
  payload: Object;
}

export interface IExampleSuccessReturn {
  (payload: Object): ExampleSuccessReturn;
}

export interface ExampleFailureReturn {
  type: typeof ExampleActionTypes.EXAMPLE_FAILURE;
  payload: Error;
}

export interface IExampleFailureReturn {
  (payload: Error): ExampleFailureReturn;
}

export type ExampleActions = ExampleStartReturn | ExampleSuccessReturn | ExampleFailureReturn;

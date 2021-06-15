import { INITIAL_STATE as state } from '../example.reducer';
import * as helpers from '../example.reducers-helper';
import { ExampleEnum } from '../example.types';

const newState = (data: Object) => ({ ...state, ...data });

describe('testing example reducer helpers', () => {
  const store = { name: 'met-care' };
  const error = new Error('something went wrong');
  const mockAction = { payload: store } as any;
  const mockErrorAction = { payload: error } as any;

  it(helpers.exampleStart.name, () => {
    expect(helpers.exampleStart(state, mockAction)).toEqual(
      newState({
        [ExampleEnum.Loading]: true,
      })
    );
  });

  it(helpers.exampleSuccess.name, () => {
    expect(helpers.exampleSuccess(state, mockAction)).toEqual(
      newState({
        [ExampleEnum.Data]: store,
      })
    );
  });

  it(helpers.exampleFailure.name, () => {
    expect(helpers.exampleFailure(state, mockErrorAction)).toEqual(
      newState({
        [ExampleEnum.Error]: true,
      })
    );
  });
});

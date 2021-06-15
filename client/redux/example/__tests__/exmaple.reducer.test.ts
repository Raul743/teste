import { AnyAction } from 'redux';

import * as actions from '../example.actions';
import exampleReducer, { INITIAL_STATE as state } from '../example.reducer';
import { ExampleEnum } from '../example.types';

const reducer = (action: AnyAction) => exampleReducer(state, action);
const newState = (data: Object) => ({ ...state, ...data });

describe('testing example reducers', () => {
  const data = { name: 'kero' };
  const error = new Error("couldn't create store kero");

  it('loading should be true on example start', () => {
    expect(reducer(actions.exampleActionStart(data))).toEqual(
      newState({
        [ExampleEnum.Loading]: true,
      })
    );
  });

  it('data should be set on example success', () => {
    expect(reducer(actions.exampleActionSuccess(data))).toEqual(
      newState({
        [ExampleEnum.Data]: data,
      })
    );
  });

  it('error should be true on example failure', () => {
    expect(reducer(actions.exampleActionFailure(error))).toEqual(
      newState({
        [ExampleEnum.Error]: true,
      })
    );
  });
});

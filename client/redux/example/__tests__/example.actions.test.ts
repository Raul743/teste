import * as actions from '../example.actions';
import ExampleActionTypes from '../example.enum';

describe('testing example actions', () => {
  const data = { name: 'met-care' };
  const error = new Error("couldn't create met-care store");

  it(actions.exampleActionStart.name, () => {
    expect(actions.exampleActionStart(data)).toEqual({
      type: ExampleActionTypes.EXAMPLE_START,
      payload: data,
    });
  });

  it(actions.exampleActionSuccess.name, () => {
    expect(actions.exampleActionSuccess(data)).toEqual({
      type: ExampleActionTypes.EXAMPLE_SUCCESS,
      payload: data,
    });
  });

  it(actions.exampleActionFailure.name, () => {
    expect(actions.exampleActionFailure(error)).toEqual({
      type: ExampleActionTypes.EXAMPLE_FAILURE,
      payload: error,
    });
  });
});

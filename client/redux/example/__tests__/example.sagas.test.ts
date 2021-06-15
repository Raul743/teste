import { makeSagaArgument, recordSaga } from '@test-suite';

import * as actions from '../example.actions';
import { INITIAL_STATE as state } from '../example.reducer';
import * as exampleSagas from '../example.sagas';

describe('testing example sagas', () => {
  it(exampleSagas.createExample.name, async () => {
    const data = { name: 'met-care' };
    const argument = makeSagaArgument(data);

    const dispatched = await recordSaga(state, exampleSagas.createExample, argument);

    expect(dispatched).toContainEqual(actions.exampleActionSuccess(data));
  });
});

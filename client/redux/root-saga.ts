import { all, fork } from 'redux-saga/effects';

import exampleSagas from './example/example.sagas';

function* rootSaga() {
  yield all([fork(exampleSagas)]);
}

export default rootSaga;

import { all, call, put, takeLatest } from 'redux-saga/effects';

import { exampleActionSuccess } from './example.actions';
import ExampleActionTypes from './example.enum';
import { ExampleStartReturn } from './example.types';

export function* createExample(action: ExampleStartReturn) {
  // this is the place where you perform side effects like api calls or any async code
  // after you done you can perform a success action or an error one depending on what happened
  yield console.log(`example saga catched the action: ${action.payload.toString()}`);
  yield put(exampleActionSuccess(action.payload));
}

function* watchExampleStart() {
  yield takeLatest(ExampleActionTypes.EXAMPLE_START, createExample);
}

function* exampleSagas() {
  yield all([call(watchExampleStart)]);
}

export default exampleSagas;

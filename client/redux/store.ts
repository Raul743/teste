import { applyMiddleware, createStore, Middleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { isDevelopment } from '../../utils';
import rootReducer from './root-reducer';

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const middleware: Middleware[] = [sagaMiddleware];

  if (isDevelopment) {
    middleware.push(logger);
  }

  return createStore(rootReducer, applyMiddleware(...middleware));
};

export const store = makeStore();

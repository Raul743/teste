/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';

import { State } from '../redux/redux.types';
import rootReducer from '../redux/root-reducer';
import { CustomRender } from './test-suite.types';
import { mockStoreState } from './utils';

const makeProviders = (store: Store<State>): FC => ({ children }) => (
  // Add in any providers here if necessary:
  // (ReduxProvider, ThemeProvider, etc)
  <Provider store={store}>{children}</Provider>
);
export const customRender: CustomRender = (ui, options = {}) => {
  const state = options.state || mockStoreState();
  const store = createStore(rootReducer, state);

  return render(ui, { wrapper: makeProviders(store), ...options });
};

export * from '@testing-library/react';
export * as testHooks from '@testing-library/react-hooks';
export * from './utils';
export { customRender as render };

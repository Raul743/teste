import { runSaga } from 'redux-saga';

import { INITIAL_STATE as exampleState } from '../redux/example/example.reducer';
import { ExampleEnum } from '../redux/example/example.types';
import { State } from '../redux/redux.types';
import { INITIAL_STATE as sideMenuState } from '../redux/side-menu/side-menu.reducer';
import { SideMenuStateEnum } from '../redux/side-menu/side-menu.types';
import { Saga } from './test-suite.types';

export const recordSaga = async (
  state = {},
  saga: Saga,
  initialAction: Record<string, any> | any = {}
) => {
  const dispatched: Array<Record<string, any>> = [];

  await runSaga(
    {
      dispatch: (action: Record<string, any>) => dispatched.push(action),
      getState: () => state,
    },
    saga,
    initialAction
  ).toPromise();

  return dispatched;
};

export const makeSagaArgument = (payload: any) => ({ payload });

export const mockStoreState = (obj?: Object): State => ({
  [ExampleEnum.Example]: exampleState,
  [SideMenuStateEnum.SideMenu]: sideMenuState,
  ...obj,
});

import { INITIAL_STATE as state } from '../side-menu.reducer';
import * as helpers from '../side-menu.reducers-helper';
import { SideMenuStateEnum } from '../side-menu.types';

const newState = (data: Object) => ({ ...state, ...data });

describe('testing side menu reducer helpers', () => {
  const store = 'dashboard';
  const mockAction = { payload: true } as any;
  const mockActionSelectedView = { payload: store } as any;

  it(helpers.sideMenuOpen.name, () => {
    expect(helpers.sideMenuOpen(state, mockAction)).toEqual(
      newState({
        [SideMenuStateEnum.SideMenuOpen]: true,
      })
    );
  });

  it(helpers.selectViewItem.name, () => {
    expect(helpers.selectViewItem(state, mockActionSelectedView)).toEqual(
      newState({
        [SideMenuStateEnum.SideMenuSelectViewItem]: store,
      })
    );
  });
});

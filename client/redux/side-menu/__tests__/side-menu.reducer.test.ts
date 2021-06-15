import { AnyAction } from 'redux';

import * as actions from '../side-menu.actions';
import sideMenuReducer, { INITIAL_STATE as state } from '../side-menu.reducer';
import { SideMenuStateEnum } from '../side-menu.types';

const reducer = (action: AnyAction) => sideMenuReducer(state, action);
const newState = (data: Object) => ({ ...state, ...data });

describe('testing example reducers', () => {
  const view = 'dashboard';
  const isSideMenuOpen = true;

  it('SideMenuOpen should be true', () => {
    expect(reducer(actions.setOpenDrawer(isSideMenuOpen))).toEqual(
      newState({
        [SideMenuStateEnum.SideMenuOpen]: isSideMenuOpen,
      })
    );
  });

  it('SideMenuSelectViewItem should be set', () => {
    expect(reducer(actions.setSelectedViewItem(view))).toEqual(
      newState({
        [SideMenuStateEnum.SideMenuSelectViewItem]: view,
      })
    );
  });
});

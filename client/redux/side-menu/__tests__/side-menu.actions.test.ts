import * as actions from '../side-menu.actions';
import SideMenuActionTypes from '../side-menu.enum';

describe('testing side menu actions', () => {
  const open = true;
  const view = 'dashboard';

  it(actions.setOpenDrawer.name, () => {
    expect(actions.setOpenDrawer(open)).toEqual({
      type: SideMenuActionTypes.OPEN_DRAWER,
      payload: open,
    });
  });

  it(actions.setSelectedViewItem.name, () => {
    expect(actions.setSelectedViewItem(view)).toEqual({
      type: SideMenuActionTypes.SELECT_VIEW,
      payload: view,
    });
  });
});

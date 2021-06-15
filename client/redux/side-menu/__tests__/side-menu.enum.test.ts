import SideMenuActionTypes from '../side-menu.enum';

describe('testing side menu enums', () => {
  it(SideMenuActionTypes.OPEN_DRAWER, () => {
    expect(SideMenuActionTypes.OPEN_DRAWER).toBe('OPEN_DRAWER');
  });

  it(SideMenuActionTypes.SELECT_VIEW, () => {
    expect(SideMenuActionTypes.SELECT_VIEW).toBe('SELECT_VIEW');
  });
});

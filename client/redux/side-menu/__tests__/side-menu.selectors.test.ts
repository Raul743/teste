import { INITIAL_STATE as exmpleState } from '@redux/example/example.reducer';
import { ExampleEnum } from '@redux/example/example.types';
import { mockStoreState } from '@test-suite';

import { INITIAL_STATE as state } from '../side-menu.reducer';
import * as selectors from '../side-menu.selectors';
import { SideMenuStateEnum } from '../side-menu.types';

describe('testing example selectors', () => {
  it(selectors.getMenuOpen.name, () => {
    const data = true;
    const mockState = {
      [SideMenuStateEnum.SideMenu]: { ...state, [SideMenuStateEnum.SideMenuOpen]: data },
      [ExampleEnum.Example]: { ...exmpleState, [ExampleEnum.Data]: null },
    };

    expect(selectors.getMenuOpen(mockState)).toEqual(data);
  });

  it(selectors.getMenuItemSelected.name, () => {
    const data = 'dashboard';
    const mockState = mockStoreState({
      [SideMenuStateEnum.SideMenu]: { ...state, [SideMenuStateEnum.SideMenuSelectViewItem]: data },
    });

    expect(selectors.getMenuItemSelected(mockState)).toEqual(data);
  });
});

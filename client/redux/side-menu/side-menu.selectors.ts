import memoize from 'fast-memoize';

import { State } from '../redux.types';
import { SideMenuStateEnum } from './side-menu.types';

export const getMenuOpen = memoize(
  (state: State) => state[SideMenuStateEnum.SideMenu][SideMenuStateEnum.SideMenuOpen]
);

export const getMenuItemSelected = memoize(
  (state: State) => state[SideMenuStateEnum.SideMenu][SideMenuStateEnum.SideMenuSelectViewItem]
);

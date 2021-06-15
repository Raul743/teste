import { createReducer } from '@reduxjs/toolkit';

import { SideMenuState } from '../redux.types';
import SideMenuEnum from './side-menu.enum';
import { selectViewItem, sideMenuOpen } from './side-menu.reducers-helper';
import { SideMenuStateEnum } from './side-menu.types';

export const INITIAL_STATE = {
  [SideMenuStateEnum.SideMenuOpen]: false,
  [SideMenuStateEnum.SideMenuSelectViewItem]: 'dashboard',
};

const SideMenuReducer = createReducer<SideMenuState>(INITIAL_STATE, {
  [SideMenuEnum.OPEN_DRAWER]: sideMenuOpen,
  [SideMenuEnum.SELECT_VIEW]: selectViewItem,
});

export default SideMenuReducer;

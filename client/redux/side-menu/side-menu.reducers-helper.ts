import { AnyAction } from 'redux';

import { Reducer, SideMenuState } from '../redux.types';
import { SideMenuStateEnum } from './side-menu.types';

// eslint-disable-next-line import/prefer-default-export
export const sideMenuOpen: Reducer<SideMenuState, AnyAction> = (state, action) => ({
  ...state,
  [SideMenuStateEnum.SideMenuOpen]: action.payload,
});

export const selectViewItem: Reducer<SideMenuState, AnyAction> = (state, action) => ({
  ...state,
  [SideMenuStateEnum.SideMenuSelectViewItem]: action.payload,
});

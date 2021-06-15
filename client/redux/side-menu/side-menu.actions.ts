import SideMenuActionTypes from './side-menu.enum';
import { IOpenSideMenuReturnReturn, ISelectedViewItemReturn } from './side-menu.types';

// eslint-disable-next-line import/prefer-default-export
export const setOpenDrawer: IOpenSideMenuReturnReturn = payload => ({
  type: SideMenuActionTypes.OPEN_DRAWER,
  payload,
});

export const setSelectedViewItem: ISelectedViewItemReturn = payload => ({
  type: SideMenuActionTypes.SELECT_VIEW,
  payload,
});

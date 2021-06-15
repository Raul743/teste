import SideMenuActionTypes from './side-menu.enum';

export enum SideMenuStateEnum {
  SideMenuOpen = 'SideMenuOpen',
  SideMenuSelectViewItem = 'SideMenuSelectViewItem',
  SideMenu = 'SideMenu',
}

/* Action Interfaces */
export interface OpenSideMenuReturn {
  type: typeof SideMenuActionTypes.OPEN_DRAWER;
  payload: boolean;
}

export interface SelectedViewItemReturn {
  type: typeof SideMenuActionTypes.SELECT_VIEW;
  payload: string;
}

export interface IOpenSideMenuReturnReturn {
  (payload: boolean): OpenSideMenuReturn;
}

export interface ISelectedViewItemReturn {
  (payload: string): SelectedViewItemReturn;
}

export type SideMenuActions = OpenSideMenuReturn | SelectedViewItemReturn;

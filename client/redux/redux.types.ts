import { ExampleEnum } from './example/example.types';
import { SideMenuStateEnum } from './side-menu/side-menu.types';

export interface ExampleState {
  [ExampleEnum.Loading]: boolean;
  [ExampleEnum.Error]: boolean;
  [ExampleEnum.Data]: Object | null;
}

export interface SideMenuState {
  [SideMenuStateEnum.SideMenuOpen]: boolean;
  [SideMenuStateEnum.SideMenuSelectViewItem]: string;
}

export interface State {
  [ExampleEnum.Example]: ExampleState;
  [SideMenuStateEnum.SideMenu]: SideMenuState;
}

export type Reducer<S, A> = (state: S, action: A) => S;

import { combineReducers } from 'redux';

import exampleReducer from './example/example.reducer';
import { ExampleEnum } from './example/example.types';
import sideMenuReducer from './side-menu/side-menu.reducer';
import { SideMenuStateEnum } from './side-menu/side-menu.types';

export default combineReducers({
  [ExampleEnum.Example]: exampleReducer,
  [SideMenuStateEnum.SideMenu]: sideMenuReducer,
});

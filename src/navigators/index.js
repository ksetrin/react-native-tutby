import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import InitStackNavigator from './Init/InitStackNavigator';
import AppDrawerNavigator from './App/AppDrawerNavigator';

const RootNavigator = createSwitchNavigator(
  {
    Init: InitStackNavigator,
    App: AppDrawerNavigator,
  },
  {
    initialRouteName: 'Init',
  },
);

export default createAppContainer(RootNavigator);

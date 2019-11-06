import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AppDrawerNavigator from './lib/AppDrawerNavigator';
import LoginStackNavigator from './lib/LoginStackNavigator';

const RootNavigator = createSwitchNavigator(
  {
    Login: LoginStackNavigator,
    App: AppDrawerNavigator,
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(RootNavigator);

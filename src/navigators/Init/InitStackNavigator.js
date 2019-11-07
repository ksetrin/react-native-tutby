import {createStackNavigator} from 'react-navigation-stack';
import {StartScreen} from '../../screens';

const InitStackNavigator = createStackNavigator(
  {
    Start: {
      screen: StartScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Start',
  },
);

export default InitStackNavigator;

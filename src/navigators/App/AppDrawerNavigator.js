import {createDrawerNavigator} from 'react-navigation-drawer';
import AboutStackNavigator from './AboutStackNavigator';
import FeedStackNavigator from './FeedStackNavigator';

const AppDrawerNavigator = createDrawerNavigator(
  {
    FeedStack: {
      screen: FeedStackNavigator,
      navigationOptions: {
        title: 'Новости',
      },
    },
    AboutStack: {
      screen: AboutStackNavigator,
      navigationOptions: {
        title: 'Об авторе',
      },
    },
  },
  {
    drawerWidth: 200,
    drawerPosition: 'right',
    contentOptions: {
      activeTintColor: '#e91e63',
      itemsContainerStyle: {
        marginVertical: 0,
      },
      iconContainerStyle: {
        opacity: 1,
      },
    },
  },
);

export default AppDrawerNavigator;

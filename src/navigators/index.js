import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import FeedStackNavigator from './FeedStackNavigator';

const RootNavigator = createDrawerNavigator(
  {
    FeedStack: {
      screen: FeedStackNavigator,
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

export default createAppContainer(RootNavigator);

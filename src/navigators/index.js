import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {FeedScreen} from '../screens';

const RootNavigator = createStackNavigator({
  Feed: {
    screen: FeedScreen,
  },
});

export default createAppContainer(RootNavigator);

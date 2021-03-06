import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {FeedScreen, FeedDetailsScreen} from '../../screens';
import {defaultNavigationOptions} from '../../utils/navigation';

const FeedStackNavigator = createStackNavigator(
  {
    Feed: {
      screen: FeedScreen,
    },
    FeedDetails: {
      screen: FeedDetailsScreen,
    },
  },
  {
    initialRouteName: 'Feed',
    defaultNavigationOptions: ({navigation}) =>
      defaultNavigationOptions(navigation),
  },
);

export default FeedStackNavigator;

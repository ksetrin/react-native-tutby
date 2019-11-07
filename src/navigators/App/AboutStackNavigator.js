import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {AboutScreen} from '../../screens';
import {defaultNavigationOptions} from '../../utils/navigation';

const FeedStackNavigator = createStackNavigator(
  {
    About: {
      screen: AboutScreen,
    },
  },
  {
    initialRouteName: 'About',
    defaultNavigationOptions: ({navigation}) =>
      defaultNavigationOptions(navigation),
  },
);

export default FeedStackNavigator;

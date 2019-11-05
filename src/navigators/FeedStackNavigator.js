import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {FeedScreen} from '../screens';
import Header from '../components/Header';

const FeedStackNavigator = createStackNavigator(
  {
    Feed: {
      screen: FeedScreen,
    },
  },
  {
    initialRouteName: 'Feed',
    defaultNavigationOptions: ({ navigation }) => ({
      //todo move default opt
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        // backgroundColor: '#57B8B6',
      },
      // todo component
      headerRight: <Header navigation={navigation} />,
      cardOverlayEnabled: true,
      headerMode: 'screen',
    }),
  },
);

export default FeedStackNavigator;

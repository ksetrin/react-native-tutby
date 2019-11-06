import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {FeedScreen} from '../../screens';
import Logo from '../../components/Logo';
import Header from '../../components/Header';

const FeedStackNavigator = createStackNavigator(
  {
    Feed: {
      screen: FeedScreen,
    },
  },
  {
    initialRouteName: 'Feed',
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTitle: <Logo />,
      headerRight: <Header navigation={navigation} />,
      cardOverlayEnabled: true,
      headerMode: 'screen',
    }),
  },
);

export default FeedStackNavigator;

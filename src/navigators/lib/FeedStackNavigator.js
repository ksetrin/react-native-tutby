import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {FeedScreen} from '../../screens';
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
      // todo component
      headerRight: <Header navigation={navigation} />,
      headerRightContainerStyle: {
        // backgroundColor: 'yellow',
        // flex: 1,
      },
      cardOverlayEnabled: true,
      headerMode: 'screen',
    }),
  },
);

export default FeedStackNavigator;

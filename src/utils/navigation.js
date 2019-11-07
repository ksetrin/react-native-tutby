import Logo from '../components/Logo';
import Header from '../components/Header';
import React from 'react';

export const defaultNavigationOptions = navigation => ({
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTitle: <Logo />,
  headerRight: <Header navigation={navigation} />,
  cardOverlayEnabled: true,
  headerMode: 'screen',
});

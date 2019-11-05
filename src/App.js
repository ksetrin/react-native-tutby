import React, {Component} from 'react';
import store from './store';
import {Provider} from 'react-redux';
import RootNavigator from './navigators';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Remote debugger']);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

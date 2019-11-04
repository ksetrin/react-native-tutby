import React, {Component} from 'react';
import store from './store';
import {Provider} from 'react-redux';
import RootNavigator from './navigators';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

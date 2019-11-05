import React from 'react';
import {Text, View} from 'react-native';
import styles from './HeaderStyles';
import {DrawerActions} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
          style={styles.titleText}>
          HEADER
        </Text>
        <Icon name="rocket" size={30} color="#900" />
      </View>
    );
  }
}

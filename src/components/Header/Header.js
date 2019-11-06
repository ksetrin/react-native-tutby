import React from 'react';
import {View} from 'react-native';
import styles from './HeaderStyles';
import {DrawerActions} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/EvilIcons';

const Header = ({navigation}) => {
  const toggleDrawer = () => navigation.dispatch(DrawerActions.toggleDrawer());

  return (
    <View style={styles.container}>
      <Icon
        name="navicon"
        size={25}
        color="#999"
        style={styles.navicon}
        onPress={toggleDrawer}
      />
    </View>
  );
};

export default Header;

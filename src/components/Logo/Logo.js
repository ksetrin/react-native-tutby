import React from 'react';
import {View, Text} from 'react-native';
import styles from './LogoStyles';
import FastImage from 'react-native-fast-image';
import {rssImageSelector, rssTitleSelector} from '../../store/rss/selectors';
import {connect} from 'react-redux';

const Logo = ({image, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoTitle}>
        <Text style={styles.logoText}>
          {title && title.substring(8).toUpperCase()}
        </Text>
      </View>
      <View style={styles.logoImageContainer}>
        <FastImage
          style={styles.logoImage}
          resizeMode={FastImage.resizeMode.center}
          source={{uri: image, priority: FastImage.priority.high}}
        />
      </View>
    </View>
  );
};

function mapStateToProps(state, props) {
  return {
    image: rssImageSelector()(state),
    title: rssTitleSelector()(state),
  };
}

// Yes, this component has connect to store,  but it's not typically. In most case it's just a component with static asset
export default connect(mapStateToProps)(Logo);

import React from 'react';
import {View, Text} from 'react-native';
import styles from './LogoStyles';
import FastImage from 'react-native-fast-image';
import {rssImageSelector, rssTitleSelector} from '../../store/rss/selectors';
import {connect} from 'react-redux';

const Logo = ({image, title}) => {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#ce1b17', padding: 3}}>
        <Text style={{color: '#fff', fontWeight: '600'}}>
          {title && title.substring(8).toUpperCase()}
        </Text>
      </View>
      <View style={{flex: 1, height: 25}}>
        <FastImage
          style={{height: '100%'}}
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

import React from 'react';
import {View, Text} from 'react-native';
import styles from './LogoStyles';
import FastImage from 'react-native-fast-image';
import {rssImageSelector, rssTitleSelector} from '../../store/rss/selectors';
import {connect} from 'react-redux';

const Logo = ({image, title}) => {
  console.log('+kse---image', image);
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#ce1b17', padding: 3}}>
        <Text style={{color: '#fff', fontWeight: '600'}}>
          {title.toUpperCase()}
        </Text>
      </View>
      <View style={{flex: 1}}>
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

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Logo);

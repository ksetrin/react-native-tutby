import React from 'react';
import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './FeedDetailsScreenStyles';
import moment from 'moment';
import 'moment/locale/ru';

import ImagesModal from '../../../components/ImagesModal';

class FeedDetailsScreen extends React.Component {
  state = {
    showImage: false,
    index: 0,
  };

  toggleModalVisible = () => {
    this.setState(({showImage}) => {
      return {showImage: !showImage};
    });
  };

  showImagesModal = index => () => {
    this.setState(() => {
      return {showImage: true, index};
    });
  };

  renderHeaderContent = () => {
    const {rssNewsListItem} = this.props;
    const {title, description, enclosure, pubDate} = rssNewsListItem;

    const clearDescription = description[0].replace(/<\/?[^>]+(>|$)/g, '');
    const img = enclosure[0].$.url;
    const pubDateReadable = moment(new Date(pubDate)).format('D MMMM HH:mm');
    return (
      <>
        <View style={{marginBottom: 16}}>
          <Text style={{fontSize: 23, fontWeight: '700'}}>{title}</Text>
        </View>
        <View style={{marginBottom: 16}}>
          <Text style={{fontSize: 11, color: '#808080'}}>
            {pubDateReadable}
          </Text>
        </View>
        <View style={{marginBottom: 16}}>
          <FastImage style={{width: '100%', height: 200}} source={{uri: img}} />
        </View>
        <View style={{marginBottom: 16}}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>
            {clearDescription}
          </Text>
        </View>
      </>
    );
  };

  render() {
    const {rssNewsListItem} = this.props;
    const media = rssNewsListItem['media:content'].map(item => ({
      url: item.$.url,
    }));
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          ListHeaderComponent={this.renderHeaderContent}
          nestedScrollEnabled={true}
          data={media}
          renderItem={({item, index}) => (
            <View style={{flex: 1, flexDirection: 'column', margin: 1}}>
              <TouchableOpacity
                onPress={this.showImagesModal(index)}
                style={{flex: 1}}>
                <FastImage
                  style={{height: 120, width: '100%'}}
                  source={{uri: item.url}}
                />
              </TouchableOpacity>
            </View>
          )}
          numColumns={2}
          keyExtractor={item => item.url}
        />
        <ImagesModal
          showImage={this.state.showImage}
          index={this.state.index}
          images={media}
          actionClose={this.toggleModalVisible}
        />
      </SafeAreaView>
    );
  }
}

export default FeedDetailsScreen;

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
        <View style={styles.headerLineContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.headerLineContainer}>
          <Text style={styles.dateText}>{pubDateReadable}</Text>
        </View>
        <View style={styles.headerLineContainer}>
          <FastImage style={styles.headerImage} source={{uri: img}} />
        </View>
        <View style={styles.headerLineContainer}>
          <Text style={styles.headerDescription}>{clearDescription}</Text>
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
          contentContainerStyle={styles.contentContainer}
          ListHeaderComponent={this.renderHeaderContent}
          nestedScrollEnabled={true}
          data={media}
          renderItem={({item, index}) => (
            <View style={styles.itemImageContainer}>
              <TouchableOpacity
                onPress={this.showImagesModal(index)}
                style={styles.itemImageTouchable}>
                <FastImage style={styles.image} source={{uri: item.url}} />
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

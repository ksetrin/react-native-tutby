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
  };

  actionImage = () => {
    this.setState(({showImage}) => {
      return {showImage: !showImage};
    });
  };

  render() {
    const {rssNewsListItem, onNewsPress} = this.props;
    const {title, description, enclosure, pubDate, link} = rssNewsListItem;

    const clearDescription = description[0].replace(/<\/?[^>]+(>|$)/g, '');
    const img = enclosure[0].$.url;
    const pubDateReadable = moment(new Date(pubDate)).format('D MMMM HH:mm');
    const media = rssNewsListItem['media:content'].map(item => ({
      url: item.$.url,
    }));

    console.log('+kse-media:content', media);
    console.log('+kse-link', link);

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          style={styles.scrollContainer}>
          <View style={{marginBottom: 16}}>
            <Text style={{fontSize: 23, fontWeight: '700'}}>{title}</Text>
          </View>
          <View style={{marginBottom: 16}}>
            <Text style={{fontSize: 11, color: '#808080'}}>
              {pubDateReadable}
            </Text>
          </View>
          <View style={{marginBottom: 16}}>
            <FastImage
              style={{width: '100%', height: 200}}
              source={{uri: img}}
            />
          </View>
          <View style={{marginBottom: 16}}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>
              {clearDescription}
            </Text>
          </View>
          <View style={{marginBottom: 16,}}>
            <FlatList
              data={media}
              renderItem={({ item }) => (
                <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                  <TouchableOpacity
                    onPress={this.actionImage}
                    style={{ flex: 1 }}>
                    <FastImage
                      style={{height: 120, width: '100%',}}
                      source={{uri: item.url}}
                    />
                  </TouchableOpacity>
                </View>
              )}
              numColumns={2}
              keyExtractor={(item) => item.url}
            />
          </View>
        </ScrollView>
        <ImagesModal
          showImage={this.state.showImage}
          images={media}
          actionClose={this.actionImage}
        />
      </SafeAreaView>
    );
  }
}

export default FeedDetailsScreen;

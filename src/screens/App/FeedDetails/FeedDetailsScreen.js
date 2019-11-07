import React from 'react';
import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './FeedDetailsScreenStyles';
import moment from 'moment';
import 'moment/locale/ru';

const FeedDetailsScreen = ({rssNewsListItem, onNewsPress}) => {
  console.log('+kse-rssNewsListItem', rssNewsListItem);

  const {title, description, enclosure, pubDate, link} = rssNewsListItem;

  // console.log('+kse-media:content', rssNewsListItem['media:content']);
  // console.log('+kse-description', description);
  const clearDescription = description[0].replace(/<\/?[^>]+(>|$)/g, '');
  const img = enclosure[0].$.url;
  const pubDateReadable = moment(new Date(pubDate)).format('D MMMM HH:mm');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={styles.scrollContainer}>
        <View style={{marginBottom: 16}}>
          <Text style={{fontSize: 23, fontWeight: '700'}}>{title}</Text>
        </View>
        <View style={{marginBottom: 16}}>
          <Text style={{fontSize: 11, color: '#808080'}}>{pubDateReadable}</Text>
        </View>
        <View style={{marginBottom: 16}}>
          <FastImage style={{width: '100%', height: 200}} source={{uri: img}} />
        </View>
        <View style={{marginBottom: 16}}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>{clearDescription}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeedDetailsScreen;

import React from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import 'moment/locale/ru';
import styles from './FeedScreenStyles';

const FeedScreen = ({title, rssNewsSectionList, onNewsPress}) => {
  const renderItem = ({item}) => {
    const pubDate = moment(new Date(item.pubDate));
    const time = pubDate.format('HH:mm');
    const newsTitle = item.title[0];
    const img = item.enclosure[0].$.url;
    const guid = item.guid[0]._;

    return (
      <TouchableOpacity onPress={onNewsPress(guid)}>
        <View style={styles.row}>
          <View>
            <FastImage style={styles.itemImage} source={{uri: img}} />
          </View>
          <View style={styles.titleContainer}>
            <View style={styles.titleTimeMargin}>
              <Text style={styles.timeText}>{time}</Text>
            </View>
            <Text style={styles.titletText}>{newsTitle}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderSectionHeader = ({section: {title}}) => (
    <View style={styles.newsSection}>
      <Text style={styles.newsSectionText}>{title}</Text>
    </View>
  );

  const renderSeparatorComponent = () => <View style={styles.newsSeparator} />;

  const renderHeaderComponent = () => (
    <View style={styles.newsSection}>
      <Text style={styles.newsSectionText}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        contentContainerStyle={styles.contentContainer}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        sections={rssNewsSectionList}
        keyExtractor={item => item.guid[0]._}
        ItemSeparatorComponent={renderSeparatorComponent}
        ListHeaderComponent={renderHeaderComponent}
        // onRefresh not implemented
      />
    </SafeAreaView>
  );
};

export default FeedScreen;

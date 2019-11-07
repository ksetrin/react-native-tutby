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

const FeedScreen = ({
  title,
  rssNewsSectionList,
  rssFetchRequestState,
  onNewsPress,
}) => {
  const renderItem = ({item}) => {
    const pubDate = moment(new Date(item.pubDate));
    const time = pubDate.format('HH:mm');
    const newsTitle = item.title[0];
    const img = item.enclosure[0].$.url;
    const guid = item.guid[0]._;

    return (
      <TouchableOpacity onPress={onNewsPress(guid)}>
        <View style={{flexDirection: 'row'}}>
          <View style={{}}>
            <FastImage style={{width: 150, height: 100}} source={{uri: img}} />
          </View>
          <View style={{flex: 1, marginLeft: 8}}>
            <View style={{marginBottom: 8}}>
              <Text style={styles.timeText}>{time}</Text>
            </View>
            <Text style={styles.paymentText}>{newsTitle}</Text>
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

  const renderError = () => (
    <View style={styles.centerContainer}>
      <Text style={styles.red}>{rssFetchRequestState.errorMessage}</Text>
    </View>
  );

  const renderSeparatorComponent = () => <View style={styles.newsSeparator} />;

  const renderHeaderComponent = () => (
    <View style={styles.newsSection}>
      <Text style={styles.newsSectionText}>{title}</Text>
    </View>
  );

  const renderContent = () => (
    <React.Fragment>
      <SectionList
        contentContainerStyle={{backgroundColor: '#fff', padding: 8}}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        sections={rssNewsSectionList}
        keyExtractor={item => item.guid[0]._}
        ItemSeparatorComponent={renderSeparatorComponent}
        ListHeaderComponent={renderHeaderComponent}
        // onRefresh
      />
    </React.Fragment>
  );

  return (
    <SafeAreaView style={styles.container}>
      {rssFetchRequestState.isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : rssFetchRequestState.isSuccess &&
        !rssFetchRequestState.errorMessage ? (
        renderContent()
      ) : (
        renderError()
      )}
    </SafeAreaView>
  );
};

export default FeedScreen;

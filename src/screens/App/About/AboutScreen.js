import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './AboutScreenStyles';

const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.centerContainer}>
      <Text>Об авторе</Text>
      <Text>Петр Евсиков</Text>
      <View style={styles.imageContainer}>
        <FastImage
          source={{
            uri: 'https://avatars2.githubusercontent.com/u/675318?s=460&v=4',
          }}
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  );
};

export default AboutScreen;

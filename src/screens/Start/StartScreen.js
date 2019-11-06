import React from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import 'moment/locale/ru';
import styles from './StartScreenStyles';

const StartScreen = () => {
  return (
    <SafeAreaView style={styles.centerContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
    </SafeAreaView>
  );
};

export default StartScreen;

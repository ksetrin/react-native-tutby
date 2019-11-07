import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import 'moment/locale/ru';
import styles from './StartScreenStyles';

const StartScreen = ({isLoading, error, onTryAgainPress}) => {
  const renderError = () => (
    <View style={styles.centerContainer}>
      <View style={styles.centerContainer}>
        <Text style={styles.red}>{error}</Text>
      </View>
      <View style={styles.centerContainer}>
        <TouchableOpacity
          onPress={onTryAgainPress}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Повторить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.centerContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        renderError()
      ) : null}
    </SafeAreaView>
  );
};

export default StartScreen;

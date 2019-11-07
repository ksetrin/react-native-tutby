import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    color: 'red',
    fontSize: 18,
  },
  newsSection: {
    paddingVertical: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  newsSectionText: {
    fontSize: 19,
    fontWeight: '500',
    color: '#000',
  },
  timeText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#aaa',
  },
  newsSeparator: {
    paddingVertical: 5,
  },
});

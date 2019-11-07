import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  contentContainer: {
    backgroundColor: '#fff',
    padding: 8,
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
  headerLineContainer: {
    marginBottom: 16,
  },
  titleText: {
    fontSize: 25,
    fontWeight: '700',
  },
  dateText: {
    fontSize: 11,
    color: '#808080',
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  headerDescription: {
    fontSize: 16,
    fontWeight: '500',
  },
  itemImageContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
  },
  itemImageTouchable: {
    flex: 1,
  },
  image: {
    height: 120,
    width: '100%',
  },
});

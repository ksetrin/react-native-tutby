export const NEWS_FETCH_REQUEST_PENDING = 'news/fetch/request/pending';
export const NEWS_FETCH_REQUEST_SUCCESS = 'news/fetch/request/success';
export const NEWS_FETCH_REQUEST_FAILURE = 'news/fetch/request/failure';

export const newsFetchRequest = () => async dispatch => { // rssFetchRequest
  console.log('newsFetchRequest');
  dispatch({type: NEWS_FETCH_REQUEST_PENDING});
  try {
    const response = await fetch('https://news.tut.by/rss/all.rss');
    const text = await response.text();

    const parseString = require('react-native-xml2js').parseString;
    let data = null;
    parseString(text, (err, {rss: {channel}}) => (data = channel[0])); // todo handle error

    console.log('+kse-channel', data);

    dispatch({type: NEWS_FETCH_REQUEST_SUCCESS, list: data.item});
  } catch (error) {
    console.log('error', error.message);
    dispatch({type: NEWS_FETCH_REQUEST_FAILURE, errorMessage: error.message});
  }
};

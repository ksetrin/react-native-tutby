// import config from 'config'
// import { REMOTES } from 'src/remotes'
import { newsLoadAction } from '../news/actions'
export const RSS_FETCH_REQUEST_PENDING = 'rss/fetch/request/pending';
export const RSS_FETCH_REQUEST_SUCCESS = 'rss/fetch/request/success';
export const RSS_FETCH_REQUEST_FAILURE = 'rss/fetch/request/failure';

export const rssFetchRequest = () => async dispatch => {

  dispatch({type: RSS_FETCH_REQUEST_PENDING});
  try {
    const response = await fetch('https://news.tut.by/rss/sport/football.rss');
    // const response = await fetch('https://news.tut.by/rss/all.rss');
    const text = await response.text();

    const parseString = require('react-native-xml2js').parseString;
    let data = null;
    parseString(text, (err, {rss: {channel}}) => (data = channel[0])); // todo handle error

    console.log('+kse-channel', data);



    // dispatch({type: RSS_FETCH_REQUEST_SUCCESS, list: data.item});

    // dispatch(newsLoadAction(data.item));

  } catch (error) {
    console.log('error', error.message);
    dispatch({type: RSS_FETCH_REQUEST_FAILURE, errorMessage: error.message});
  }
};

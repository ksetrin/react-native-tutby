import parser from 'fast-xml-parser';

export const NEWS_FETCH_REQUEST_PENDING = 'news/fetch/request/pending';
export const NEWS_FETCH_REQUEST_SUCCESS = 'news/fetch/request/success';
export const NEWS_FETCH_REQUEST_FAILURE = 'news/fetch/request/failure';

export const newsFetchRequest = () => async dispatch => {
  console.log('newsFetchRequest');
  dispatch({type: NEWS_FETCH_REQUEST_PENDING});
  try {
    const response = await fetch('https://news.tut.by/rss/all.rss');
    const text = await response.text();
    const {
      rss: {channel},
    } = parser.parse(text);

    console.log('+kse-channel', channel);

    dispatch({type: NEWS_FETCH_REQUEST_SUCCESS, list: channel.item});
  } catch (error) {
    console.log('error', error.message);
    dispatch({type: NEWS_FETCH_REQUEST_FAILURE, errorMessage: error.message});
  }
};

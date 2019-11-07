import {xmlToJson} from '../../utils/parseHelper';
import {rssRemote} from '../../remotes';
export const RSS_FETCH_REQUEST_PENDING = 'rss/fetch/request/pending';
export const RSS_FETCH_REQUEST_SUCCESS = 'rss/fetch/request/success';
export const RSS_FETCH_REQUEST_FAILURE = 'rss/fetch/request/failure';

export const rssFetchRequest = () => async dispatch => {
  dispatch({type: RSS_FETCH_REQUEST_PENDING});
  try {
    const response = await fetch(rssRemote);
    const text = await response.text();
    const json = xmlToJson(text);
    dispatch({
      type: RSS_FETCH_REQUEST_SUCCESS,
      title: json.title,
      image: json.image,
      newsList: json.item,
    });
  } catch (error) {
    dispatch({type: RSS_FETCH_REQUEST_FAILURE, errorMessage: error.message});
  }
};

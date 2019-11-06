import {createSelector} from 'reselect';
import 'moment/locale/ru';

export const rssSelector = () => state => {
  return state.rss;
};

export const rssTitleSelector = () =>
  createSelector(
    rssSelector(),
    rss => rss.title && rss.title.length && rss.title[0],
  );

export const rssImageSelector = () =>
  createSelector(
    rssSelector(),
    rss => rss.image && rss.image.length && rss.image[0] && rss.image[0].url && rss.image[0].url[0],
  );

export const rssRequestStateSelector = () =>
  createSelector(
    rssSelector(),
    rss => rss.rssFetchRequestState || {},
  );

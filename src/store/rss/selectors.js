import {createSelector} from 'reselect';
import moment from 'moment';
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
    rss =>
      rss.image &&
      rss.image.length &&
      rss.image[0] &&
      rss.image[0].url &&
      rss.image[0].url[0],
  );

export const rssNewsListSelector = () =>
  createSelector(
    rssSelector(),
    rss => rss.newsList || [],
  );

export const rssNewsSectionListSelector = () =>
  createSelector(
    rssNewsListSelector(),
    newsList => {
      const sectionNews = [];
      const section = {
        title: null,
        data: [],
      };
      for (let i = 0; i < newsList.length; i++) {
        const pubDate = moment(new Date(newsList[i].pubDate)).format('D MMMM');
        if (section.title !== pubDate) {
          section.data.length && sectionNews.push({...section});
          section.title = pubDate;
          section.data = [newsList[i]];
        } else {
          section.data.push(newsList[i]);
        }
      }
      sectionNews.push({...section});
      return sectionNews;
    },
  );

export const rssRequestStateSelector = () =>
  createSelector(
    rssSelector(),
    rss => rss.rssFetchRequestState || {},
  );

import {createSelector} from 'reselect';
import moment from 'moment';
import 'moment/locale/ru';

export const newsSelector = () => state => {
  return state.news;
};

export const newsListSelector = () =>
  createSelector(
    newsSelector(),
    news => news.list || [],
  );

export const newsSectionListSelector = () =>
  createSelector(
    newsListSelector(),
    news => {
      // console.log('+kse-newsSectionListSelector', news);
      const sectionNews = [];
      const section = {
        title: null,
        data: [],
      };
      for (let i = 0; i < news.length; i++) {
        const pubDate = moment(new Date(news[i].pubDate)).format('D MMMM');
        if (section.title !== pubDate) {
          section.data.length && sectionNews.push({...section});
          section.title = pubDate;
          section.data = [news[i]];
        } else {
          section.data.push(news[i]);
        }
      }
      sectionNews.push({...section});
      return sectionNews;
    },
  );

export const newsRequestStateSelector = () =>
  createSelector(
    newsSelector(),
    news => news.newsFetchRequestState || {},
  );

import {createSelector} from 'reselect';

export const newsSelector = () => state => {
  return state.news;
};

export const newsListSelector = () =>
  createSelector(
    newsSelector(),
    news => news.list || [],
  );

export const newsRequestStateSelector = () =>
  createSelector(
    newsSelector(),
    news => news.newsFetchRequestState || {},
  );

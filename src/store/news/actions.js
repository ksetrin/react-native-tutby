export const NEWS_LOAD_ACTION = 'news/load/action';

export const newsLoadAction = () => async dispatch => {
  dispatch({type: NEWS_LOAD_ACTION});
};

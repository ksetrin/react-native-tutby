export const NEWS_LOAD_ACTION = 'news/load/action';

export const newsLoadAction = list => async dispatch => {
  dispatch({type: NEWS_LOAD_ACTION, list});
};

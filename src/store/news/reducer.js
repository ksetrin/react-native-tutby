import {NEWS_LOAD_ACTION} from './actions';

export const initialState = {
  list: [],
};

const mutations = {
  [NEWS_LOAD_ACTION](state, {list}) {
    return {
      ...state,
      list,
    };
  },
};

export default (state = initialState, {type, ...other}) => {
  return type in mutations ? mutations[type](state, other) : state;
};

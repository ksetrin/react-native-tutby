import {
  REQUEST_STATE_PENDING,
  REQUEST_STATE_FAILURE,
  REQUEST_STATE_SUCCESS,
} from '../constants';
import {
  NEWS_FETCH_REQUEST_PENDING,
  NEWS_FETCH_REQUEST_FAILURE,
  NEWS_FETCH_REQUEST_SUCCESS,
} from './actions';

export const initialState = {
  list: [],
  newsFetchRequestState: {},
};

const mutations = {
  [NEWS_FETCH_REQUEST_PENDING](state) {
    return {
      ...state,
      newsFetchRequestState: {
        ...REQUEST_STATE_PENDING,
      },
    };
  },
  [NEWS_FETCH_REQUEST_SUCCESS](state, {list}) {
    return {
      ...state,
      newsFetchRequestState: {
        ...REQUEST_STATE_SUCCESS,
      },
      list,
    };
  },
  [NEWS_FETCH_REQUEST_FAILURE](state, {errorMessage}) {
    return {
      ...state,
      newsFetchRequestState: {
        ...REQUEST_STATE_FAILURE,
        errorMessage,
      },
    };
  },
};

export default (state = initialState, {type, ...other}) => {
  return type in mutations ? mutations[type](state, other) : state;
};

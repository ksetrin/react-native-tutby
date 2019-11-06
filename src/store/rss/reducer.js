import {
  REQUEST_STATE_PENDING,
  REQUEST_STATE_FAILURE,
  REQUEST_STATE_SUCCESS,
} from '../constants';
import {
  RSS_FETCH_REQUEST_PENDING,
  RSS_FETCH_REQUEST_SUCCESS,
  RSS_FETCH_REQUEST_FAILURE,
} from './actions';

export const initialState = {
  title: '',
  image: null,
  rssFetchRequestState: {},
};

const mutations = {
  [RSS_FETCH_REQUEST_PENDING](state) {
    return {
      ...state,
      rssFetchRequestState: {
        ...REQUEST_STATE_PENDING,
      },
    };
  },
  [RSS_FETCH_REQUEST_SUCCESS](state, {title, image}) {
    return {
      ...state,
      rssFetchRequestState: {
        ...REQUEST_STATE_SUCCESS,
      },
      title,
      image,
    };
  },
  [RSS_FETCH_REQUEST_FAILURE](state, {errorMessage}) {
    return {
      ...state,
      rssFetchRequestState: {
        ...REQUEST_STATE_FAILURE,
        errorMessage,
      },
    };
  },
};

export default (state = initialState, {type, ...other}) => {
  return type in mutations ? mutations[type](state, other) : state;
};

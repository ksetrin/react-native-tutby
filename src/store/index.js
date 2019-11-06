import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {rss, news} from './reducers';

const initialState = {};
const reducer = combineReducers({
  rss,
  news,
});

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunkMiddleware)),
);

export default store;

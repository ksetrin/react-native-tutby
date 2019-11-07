import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {rss} from './reducers';

const initialState = {};
const reducer = combineReducers({
  rss,
});

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunkMiddleware)),
);

export default store;

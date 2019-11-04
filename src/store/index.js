import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {news} from './reducers';

const initialState = {};
const reducer = combineReducers({
  news,
});

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunkMiddleware)),
);

export default store;

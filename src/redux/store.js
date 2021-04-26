import { combineReducers, createStore } from 'redux';
import { postReducer } from './reducers/postReducer';

const reducer = combineReducers({
  post: postReducer
})

const store = createStore(reducer);

export default store;
import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

import { reducer as boardReducer } from '../Board/reducer';
import { reducer as postReducer } from '../PostList/reducer';

const reducer = combineReducers({
  board: boardReducer,
  post: postReducer
})
const store = createStore(reducer, applyMiddleware(thunk));

export default store;

import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import thunk from 'react-redux';

import { reducer as boardReducer } from '../Board/reducer';

const reducer = combineReducers({
  board: boardReducer
})
const store = createStore(reducer, applyMiddleware(thunk));

export default store;

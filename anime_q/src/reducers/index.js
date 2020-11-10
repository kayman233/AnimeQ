import { combineReducers } from 'redux';

import userReducer from './user';
import pageReducer from './page';

const rootReducer = combineReducers({
  user: userReducer,
  animes: pageReducer
});

export default rootReducer

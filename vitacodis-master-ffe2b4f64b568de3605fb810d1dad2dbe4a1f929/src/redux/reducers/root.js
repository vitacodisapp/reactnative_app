import {combineReducers} from 'redux';

import courses from './courses';
import auth from './auth';

const rootReducer = combineReducers({
  auth,
  courses,
});

export default rootReducer;

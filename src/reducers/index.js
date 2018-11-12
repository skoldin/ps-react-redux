// A traditional name for root reducer file is index.js

import { combineReducers } from 'redux';

// courses reads better than courseReducer so we use it as an alias
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses, // Shorthand property name courses: courses
  authors
});

export default rootReducer;
import { combineReducers } from 'redux';

import blogReducer from './blog/blog.reducers';

const rootReducers = combineReducers({
  blogs: blogReducer,
});

export default rootReducers;

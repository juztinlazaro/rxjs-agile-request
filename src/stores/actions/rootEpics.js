import { combineEpics } from 'redux-observable';
import * as BLOG from './queries/blog/blog.epic';

const rootEpic = combineEpics(
  BLOG.getBlogEpic,
  BLOG.postBlogEpic,
  BLOG.patchBlogEpic,
  BLOG.putBlogEpic,
  BLOG.deleteBlogEpic,
);

export default rootEpic;

import { handleActions } from 'redux-actions';
import * as ACTION from 'Actions/queries/blog/blog.action';
import Model from './model';

export default handleActions(
  {
    [ACTION.getBlogSuccess]: (state, action) => ({
      ...state,
      blogs: action.payload,
      loading: false,
    }),
    [ACTION.getBlogLoading]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [ACTION.getBlogError]: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
    [ACTION.getBlogCancel]: (state, action) => ({
      ...state,
      loading: false,
    }),
    [ACTION.postBlogSuccess]: (state, action) => ({
      ...state,
      blogs: action.payload,
      loading: false,
    }),
    [ACTION.postBlogLoading]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [ACTION.postBlogError]: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
    [ACTION.postBlogCancel]: (state, action) => ({
      ...state,
      loading: false,
    }),
    [ACTION.patchBlogSuccess]: (state, action) => ({
      ...state,
      blogs: action.payload,
      loading: false,
    }),
    [ACTION.patchBlogLoading]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [ACTION.patchBlogError]: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
    [ACTION.patchBlogCancel]: (state, action) => ({
      ...state,
      loading: false,
    }),
    [ACTION.putBlogSuccess]: (state, action) => ({
      ...state,
      blogs: action.payload,
      loading: false,
    }),
    [ACTION.putBlogLoading]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [ACTION.putBlogError]: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
    [ACTION.putBlogCancel]: (state, action) => ({
      ...state,
      loading: false,
    }),
    [ACTION.deleteBlogSuccess]: (state, action) => ({
      ...state,
      blogs: action.payload,
      loading: false,
    }),
    [ACTION.deleteBlogLoading]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [ACTION.deleteBlogError]: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
    [ACTION.deleteBlogCancel]: (state, action) => ({
      ...state,
      loading: false,
    }),
  },
  Model,
);

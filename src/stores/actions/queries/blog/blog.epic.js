import * as TYPES from './types';
import { jsonplacehoder } from 'Common/constants/api';
import { headers } from 'Common/constants/headers';
import * as ACTION from './blog.action';
import {
  getRequest,
  postRequest,
  patchRequest,
  putRequest,
  deleteRequest,
} from 'agileRequest';

const getBlogUrl = `${jsonplacehoder}/post321s/1`;
export const getBlogEpic = action$ =>
  action$.ofType(TYPES.GET_BLOG_EPIC).switchMap(() => {
    const loading = ACTION.getBlogLoading();
    const success = ACTION.getBlogSuccess;
    const cancel = action$.ofType(TYPES.GET_BLOG_CANCEL);
    const error = ACTION.getBlogError;

    const ObjectActions = {
      url: getBlogUrl,
      headers,
      loading,
      success,
      cancel,
      error,
      retry: error => {
        return 404 === error.status;
      },
    };

    return getRequest(ObjectActions);
  });

const postBlogUrl = 'https://jsonplaceholder.typicode.com/posts';
export const postBlogEpic = action$ =>
  action$.ofType(TYPES.POST_BLOG_EPIC).switchMap(action => {
    const loading = ACTION.postBlogLoading();
    const success = ACTION.postBlogSuccess;
    const cancel = action$.ofType(TYPES.POST_BLOG_CANCEL);
    const error = ACTION.postBlogError;
    const formBody = action.payload;

    const ObjectActions = {
      url: postBlogUrl,
      headers,
      loading,
      success,
      cancel,
      error,
      formBody,
    };

    return postRequest(ObjectActions);
  });

const patchBlogUrl = 'https://jsonplaceholder.typicode.com/posts/1';
export const patchBlogEpic = action$ =>
  action$.ofType(TYPES.PATCH_BLOG_EPIC).switchMap(action => {
    const loading = ACTION.patchBlogLoading();
    const success = ACTION.patchBlogSuccess;
    const cancel = action$.ofType(TYPES.PATCH_BLOG_CANCEL);
    const error = ACTION.patchBlogError;
    const formBody = action.payload;

    const ObjectActions = {
      url: patchBlogUrl,
      headers,
      loading,
      success,
      cancel,
      error,
      formBody,
    };

    return patchRequest(ObjectActions);
  });

const putBlogUrl = 'https://jsonplaceholder.typicode.com/posts/1';
export const putBlogEpic = action$ =>
  action$.ofType(TYPES.PUT_BLOG_EPIC).switchMap(action => {
    const loading = ACTION.putBlogLoading();
    const success = ACTION.putBlogSuccess;
    const cancel = action$.ofType(TYPES.PUT_BLOG_CANCEL);
    const error = ACTION.putBlogError;
    const formBody = action.payload;

    const ObjectActions = {
      url: putBlogUrl,
      headers,
      loading,
      success,
      cancel,
      error,
      formBody,
    };

    return putRequest(ObjectActions);
  });

const deleteBlogUrl = 'https://jsonplaceholder.typicode.com/posts';
export const deleteBlogEpic = action$ =>
  action$.ofType(TYPES.DELETE_BLOG_EPIC).switchMap(action => {
    const loading = ACTION.deleteBlogLoading();
    const success = ACTION.deleteBlogSuccess;
    const cancel = action$.ofType(TYPES.DELETE_BLOG_CANCEL);
    const error = ACTION.deleteBlogError;
    const url = `${deleteBlogUrl}/${action.payload}`;

    const ObjectActions = {
      url,
      headers,
      loading,
      success,
      cancel,
      error,
    };

    return deleteRequest(ObjectActions);
  });

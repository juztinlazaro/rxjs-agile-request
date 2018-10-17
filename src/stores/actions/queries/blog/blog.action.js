import { createAction } from 'redux-actions';
import * as TYPES from './types';

export const getBlogEpic = createAction(TYPES.GET_BLOG_EPIC);
export const getBlogSuccess = createAction(TYPES.GET_BLOG_SUCCESS);
export const getBlogError = createAction(TYPES.GET_BLOG_ERROR);
export const getBlogCancel = createAction(TYPES.GET_BLOG_CANCEL);

export const postBlogEpic = createAction(TYPES.POST_BLOG_EPIC);
export const postBlogLoading = createAction(TYPES.POST_BLOG_LOADING);
export const postBlogSuccess = createAction(TYPES.POST_BLOG_SUCCESS);
export const postBlogError = createAction(TYPES.POST_BLOG_ERROR);
export const postBlogCancel = createAction(TYPES.POST_BLOG_CANCEL);

export const patchBlogEpic = createAction(TYPES.PATCH_BLOG_EPIC);
export const patchBlogLoading = createAction(TYPES.PATCH_BLOG_LOADING);
export const patchBlogSuccess = createAction(TYPES.PATCH_BLOG_SUCCESS);
export const patchBlogError = createAction(TYPES.PATCH_BLOG_ERROR);
export const patchBlogCancel = createAction(TYPES.PATCH_BLOG_CANCEL);

export const putBlogEpic = createAction(TYPES.PUT_BLOG_EPIC);
export const putBlogLoading = createAction(TYPES.PUT_BLOG_LOADING);
export const putBlogSuccess = createAction(TYPES.PUT_BLOG_SUCCESS);
export const putBlogError = createAction(TYPES.PUT_BLOG_ERROR);
export const putBlogCancel = createAction(TYPES.PUT_BLOG_CANCEL);

export const deleteBlogEpic = createAction(TYPES.DELETE_BLOG_EPIC);
export const deleteBlogLoading = createAction(TYPES.DELETE_BLOG_LOADING);
export const deleteBlogSuccess = createAction(TYPES.DELETE_BLOG_SUCCESS);
export const deleteBlogError = createAction(TYPES.DELETE_BLOG_ERROR);
export const deleteBlogCancel = createAction(TYPES.DELETE_BLOG_CANCEL);

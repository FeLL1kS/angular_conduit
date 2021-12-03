import { createReducer, on } from '@ngrx/store';
import { Article, Comment } from 'src/app/aricles-mock';
import { Errors } from '../auth/auth.reducer';
import {
  addCommentSuccess,
  favoriteSuccess,
  getComments,
  getCommentsSuccess,
  loadArticleSuccess,
  unfavoriteSuccess,
} from './article.actions';

export interface ArticleState {
  article?: Article;
  comments: Comment[];
  errors: Errors;
  loading: boolean;
}

export const articleInitialState: ArticleState = {
  article: undefined,
  comments: [],
  errors: {},
  loading: true,
};

export const articleReducer = createReducer(
  articleInitialState,
  on(loadArticleSuccess, (state, action) => ({
    ...state,
    article: action.article,
    loading: false,
  })),
  on(favoriteSuccess, (state, payload) => ({
    ...state,
    article: payload.article,
  })),
  on(unfavoriteSuccess, (state, payload) => ({
    ...state,
    article: payload.article,
  })),
  on(getCommentsSuccess, (state, payload) => ({
    ...state,
    comments: payload.comments,
  })),
  on(addCommentSuccess, (state, payload) => ({
    ...state,
    comments: [payload.comment, ...state.comments],
  }))
);

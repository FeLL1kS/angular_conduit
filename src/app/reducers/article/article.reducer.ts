import { createReducer, on } from '@ngrx/store';
import { Article } from 'src/app/aricles-mock';
import { Errors } from '../auth/auth.reducer';
import {
  favoriteSuccess,
  loadArticleSuccess,
  unfavoriteSuccess,
} from './article.actions';

export interface ArticleState {
  article?: Article;
  errors: Errors;
  loading: boolean;
}

export const initialState: ArticleState = {
  article: undefined,
  errors: {},
  loading: true,
};

export const articleReducer = createReducer(
  initialState,
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
  }))
);

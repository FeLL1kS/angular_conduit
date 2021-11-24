import { createReducer, on } from '@ngrx/store';
import { Article } from 'src/app/aricles-mock';
import { Errors } from '../auth/auth.reducer';
import { loadArticleSuccess, markAsFavorite } from './article.actions';

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
  on(markAsFavorite, (state) => ({
    ...state,
    article: {
      ...state.article!,
      favoritesCount: state.article!.favorited
        ? state.article!.favoritesCount - 1
        : state.article!.favoritesCount + 1,
      favorited: !state.article!.favorited,
    },
  }))
);

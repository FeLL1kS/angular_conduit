import { createAction, props } from '@ngrx/store';
import { Article } from 'src/app/aricles-mock';
import { Errors } from '../auth/auth.reducer';

export enum ArticleActions {
  LoadArticle = '[ARTICLE] LoadArticle',
  LoadArticleSuccess = '[ARTICLE] LoadArticleSuccess',
  LoadArticleUnsuccess = '[ARTICLE] LoadArticleUnsuccess',
  Favorite = '[ARTICLES-LIST] Favorite',
  FavoriteSuccess = '[ARTICLES-LIST] FavoriteSuccess',
  Unfavorite = '[ARTICLES-LIST] Unfavorite',
  UnfavoriteSuccess = '[ARTICLES-LIST] UnfavoriteSuccess',
}

export const loadArticle = createAction(
  ArticleActions.LoadArticle,
  props<{ slug: string }>()
);

export const loadArticleSuccess = createAction(
  ArticleActions.LoadArticleSuccess,
  props<{ article: Article }>()
);

export const loadArticleUnsuccess = createAction(
  ArticleActions.LoadArticleSuccess,
  props<{ errors: Errors }>()
);

export const favorite = createAction(
  ArticleActions.Favorite,
  props<{ slug: string }>()
);

export const favoriteSuccess = createAction(
  ArticleActions.FavoriteSuccess,
  props<{ article: Article }>()
);

export const unfavorite = createAction(
  ArticleActions.Unfavorite,
  props<{ slug: string }>()
);

export const unfavoriteSuccess = createAction(
  ArticleActions.UnfavoriteSuccess,
  props<{ article: Article }>()
);

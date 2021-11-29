import { createAction, props } from '@ngrx/store';
import { Article } from 'src/app/aricles-mock';
import { ArticlesList, ArticlesListConfig } from './articles-list.reducer';

export enum ArticlesListActions {
  LoadArticles = '[ARTICLES-LIST] LoadArticles',
  LoadArticlesSuccess = '[ARTICLES-LIST] LoadArticlesSuccess',
  LoadArticlesUnsuccess = '[ARTICLES-LIST] LoadArticlesUnsuccess',
  UpdateConfig = '[ARTICLES-LIST] UpdateConfig',
  Favorite = '[ARTICLES-LIST] Favorite',
  FavoriteSuccess = '[ARTICLES-LIST] FavoriteSuccess',
  Unfavorite = '[ARTICLES-LIST] Unfavorite',
  UnfavoriteSuccess = '[ARTICLES-LIST] UnfavoriteSuccess',
}

export const loadArticles = createAction(ArticlesListActions.LoadArticles);

export const loadArticlesSuccess = createAction(
  ArticlesListActions.LoadArticlesSuccess,
  props<{ articles: ArticlesList }>()
);

export const loadArticlesUnsuccess = createAction(
  ArticlesListActions.LoadArticlesUnsuccess
);

export const updateConfig = createAction(
  ArticlesListActions.UpdateConfig,
  props<{ config: ArticlesListConfig }>()
);

export const favorite = createAction(
  ArticlesListActions.Favorite,
  props<{ slug: string }>()
);

export const favoriteSuccess = createAction(
  ArticlesListActions.FavoriteSuccess,
  props<{ article: Article }>()
);

export const unfavorite = createAction(
  ArticlesListActions.Unfavorite,
  props<{ slug: string }>()
);

export const unfavoriteSuccess = createAction(
  ArticlesListActions.UnfavoriteSuccess,
  props<{ article: Article }>()
);

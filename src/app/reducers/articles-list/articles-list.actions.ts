import { createAction, props } from '@ngrx/store';
import { ArticlesList, ArticlesListConfig } from './articles-list.reducer';

export enum ArticlesListActions {
  LoadArticles = '[ARTICLES-LIST] LoadArticles',
  LoadArticlesSuccess = '[ARTICLES-LIST] LoadArticlesSuccess',
  LoadArticlesUnsuccess = '[ARTICLES-LIST] LoadArticlesUnsuccess',
  UpdateConfig = '[ARTICLES-LIST] UpdateConfig',
  MarkAsFavorite = '[ARTICLES-LIST] MarkAsFavorite',
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

export const markAsFavorite = createAction(
  ArticlesListActions.MarkAsFavorite,
  props<{ slug: string }>()
);

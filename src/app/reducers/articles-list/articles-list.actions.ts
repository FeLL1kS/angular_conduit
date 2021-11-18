import { createAction, props } from '@ngrx/store';

export enum ArticlesListActions {
  LoadArticles = '[ARTICLES-LIST] LoadArticles',
  MarkAsFavorite = '[ARTICLES-LIST] MarkAsFavorite',
}

export const loadArticles = createAction(ArticlesListActions.LoadArticles);

export const markAsFavorite = createAction(
  ArticlesListActions.MarkAsFavorite,
  props<{ slug: string }>()
);

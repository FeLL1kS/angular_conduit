import { createAction, props } from '@ngrx/store';

export enum ArticleActions {
  LoadArticle = '[ARTICLE] LoadArticle',
  MarkAsFavorite = '[ARTICLE] MarkAsFavorite',
}

export const loadArticle = createAction(
  ArticleActions.LoadArticle,
  props<{ slug: string }>()
);

export const markAsFavorite = createAction(ArticleActions.MarkAsFavorite);

import { createAction, props } from '@ngrx/store';
import { Article } from 'src/app/aricles-mock';
import { Errors } from '../auth/auth.reducer';

export enum ArticleActions {
  LoadArticle = '[ARTICLE] LoadArticle',
  LoadArticleSuccess = '[ARTICLE] LoadArticleSuccess',
  LoadArticleUnsuccess = '[ARTICLE] LoadArticleUnsuccess',
  MarkAsFavorite = '[ARTICLE] MarkAsFavorite',
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

export const markAsFavorite = createAction(ArticleActions.MarkAsFavorite);

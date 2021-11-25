import { createAction, props } from '@ngrx/store';
import { Article } from 'src/app/aricles-mock';

export enum ArticleEditorActions {
  LoadArticle = '[ARTICLE-EDITOR] LoadArticle',
  LoadArticleSuccess = '[ARTICLE-EDITOR] LoadArticleSuccess',
  CreateOrUpdateArticle = '[ARTICLE-EDITOR] CreateOrUpdateArticle',
  CreateOrUpdateArticleSuccess = '[ARTICLE-EDITOR] CreateOrUpdateArticleSuccess',
}

export const loadArticle = createAction(
  ArticleEditorActions.LoadArticle,
  props<{ slug: string }>()
);

export const loadArticleSuccess = createAction(
  ArticleEditorActions.LoadArticleSuccess,
  props<{ article: Article }>()
);

export const createOrUpdateArticle = createAction(
  ArticleEditorActions.CreateOrUpdateArticle
);

export const createOrUpdateArticleSuccess = createAction(
  ArticleEditorActions.CreateOrUpdateArticleSuccess,
  props<{ article: Article }>()
);

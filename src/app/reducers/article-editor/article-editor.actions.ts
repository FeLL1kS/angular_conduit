import { createAction, props } from '@ngrx/store';
import { Article } from 'src/app/aricles-mock';
import {
  ArticleForm,
} from 'src/app/article-editor/article-editor.interface';

export enum ArticleEditorActions {
  LoadArticle = '[ARTICLE-EDITOR] LoadArticle',
  LoadArticleSuccess = '[ARTICLE-EDITOR] LoadArticleSuccess',
  CreateArticle = '[ARTICLE-EDITOR] CreateArticle',
  CreateArticleSuccess = '[ARTICLE-EDITOR] CreateArticleSuccess',
  UpdateArticle = '[ARTICLE-EDITOR] UpdateArticle',
  UpdateArticleSuccess = '[ARTICLE-EDITOR] UpdateArticleSuccess',
  ClearForm = '[ARTICLE-EDITOR] ClearForm'
}

export const loadArticle = createAction(
  ArticleEditorActions.LoadArticle,
  props<{ slug: string }>()
);

export const loadArticleSuccess = createAction(
  ArticleEditorActions.LoadArticleSuccess,
  props<{ article: Article }>()
);

export const createArticle = createAction(
  ArticleEditorActions.CreateArticle,
  props<{ article: ArticleForm }>()
);

export const createArticleSuccess = createAction(
  ArticleEditorActions.CreateArticleSuccess,
  props<{ article: Article }>()
);

export const updateArticle = createAction(
  ArticleEditorActions.UpdateArticle,
  props<{ article: ArticleForm }>()
);

export const updateArticleSuccess = createAction(
  ArticleEditorActions.UpdateArticleSuccess,
  props<{ article: Article }>()
);

export const clearForm = createAction(
  ArticleEditorActions.ClearForm,
)

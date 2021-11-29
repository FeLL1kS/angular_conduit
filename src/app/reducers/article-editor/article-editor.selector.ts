import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticleEditorState } from './article-editor.reducer';

const featureSelector =
  createFeatureSelector<ArticleEditorState>('articleEditor');

export const articleSelector = createSelector(
  featureSelector,
  (state) => state.article
);

export const slugSelector = createSelector(
  featureSelector,
  (state) => state.article.slug
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticleState } from './article.reducer';

const featureSelector = createFeatureSelector<ArticleState>('article');

export const articleSelector = createSelector(
  featureSelector,
  (state) => state.article
);

export const commentsSelector = createSelector(
  featureSelector,
  (state) => state.comments
);

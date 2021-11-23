import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticlesListState } from './articles-list.reducer';

const featureSelector =
  createFeatureSelector<ArticlesListState>('articlesList');

export const articlesListSelector = createSelector(
  featureSelector,
  (state) => state.articles.articles
);

export const articlesListConfigSelector = createSelector(
  featureSelector,
  (state) => state.config
);

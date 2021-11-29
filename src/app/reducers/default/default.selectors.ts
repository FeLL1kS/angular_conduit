import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DefaultState } from './default.reducer';

const featureSelector = createFeatureSelector<DefaultState>('default');

export const tagsSelector = createSelector(
  featureSelector,
  (state) => state.tags
);

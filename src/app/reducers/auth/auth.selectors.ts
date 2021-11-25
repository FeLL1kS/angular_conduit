import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

const featureSelector = createFeatureSelector<AuthState>('auth');

export const userSelector = createSelector(
  featureSelector,
  (state) => state.user
);

export const errorMessagesSelector = createSelector(
  featureSelector,
  (state) => state.errorMessages
);

export const isLoggedInSelector = createSelector(
  featureSelector,
  (state) => state.isLoggenIn
);

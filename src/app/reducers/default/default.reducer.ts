import { createReducer, on } from '@ngrx/store';
import { Errors } from '../auth/auth.reducer';
import { loadTagsSuccess, loadTagsUnsuccess } from './default.actions';

export interface DefaultState {
  tags: string[];
  errors: Errors;
}

export const defaultInitialState: DefaultState = {
  tags: [],
  errors: {},
};

export const defaultReducer = createReducer(
  defaultInitialState,
  on(loadTagsSuccess, (state, payload) => ({
    ...state,
    tags: payload.tags,
  })),
  on(loadTagsUnsuccess, (state, payload) => ({
    ...state,
    errors: payload.errors,
  }))
);

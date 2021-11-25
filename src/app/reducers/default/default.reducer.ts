import { createReducer, on } from '@ngrx/store';
import { Errors } from '../auth/auth.reducer';
import { loadTagsSuccess, loadTagsUnsuccess } from './default.actions';

export interface DefaultState {
  tags: string[];
  errors: Errors;
}

const initialState: DefaultState = {
  tags: [],
  errors: {},
};

export const defaultReducer = createReducer(
  initialState,
  on(loadTagsSuccess, (state, payload) => ({
    ...state,
    tags: payload.tags,
  })),
  on(loadTagsUnsuccess, (state, payload) => ({
    ...state,
    errors: payload.errors,
  }))
);

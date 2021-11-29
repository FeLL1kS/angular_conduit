import { createAction, props } from '@ngrx/store';
import { Errors } from '../auth/auth.reducer';

export enum DefaultActions {
  LoadTags = '[DEFAULT] LoadTags',
  LoadTagsSuccess = '[DEFAULT] LoadTagsSuccess',
  LoadTagsUnsuccess = '[DEFAULT] LoadTagsSuccess',
}

export const loadTags = createAction(DefaultActions.LoadTags);

export const loadTagsSuccess = createAction(
  DefaultActions.LoadTagsSuccess,
  props<{ tags: string[] }>()
);

export const loadTagsUnsuccess = createAction(
  DefaultActions.LoadTagsUnsuccess,
  props<{ errors: Errors }>()
);

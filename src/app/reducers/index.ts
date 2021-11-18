import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { articlesReducer, ArticlesState } from './articles';

export interface State {
  articles: ArticlesState;
}

export const reducers: ActionReducerMap<State> = {
  articles: articlesReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

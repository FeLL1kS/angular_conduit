import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { articleReducer, ArticleState } from './article/article.reducer';
import {
  articlesListReducer,
  ArticlesListState,
} from './articles-list/articles-list.reducer';
import { authReducer, AuthState } from './auth/auth.reducer';

export interface State {
  articlesList: ArticlesListState;
  article: ArticleState;
  auth: AuthState;
}

export const reducers: ActionReducerMap<State> = {
  articlesList: articlesListReducer,
  article: articleReducer,
  auth: authReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

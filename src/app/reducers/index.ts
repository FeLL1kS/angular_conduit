import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import {
  articleEditorReduce,
  ArticleEditorState,
} from './article-editor/article-editor.reducer';
import { articleReducer, ArticleState } from './article/article.reducer';
import {
  articlesListReducer,
  ArticlesListState,
} from './articles-list/articles-list.reducer';
import { authReducer, AuthState } from './auth/auth.reducer';
import { defaultReducer, DefaultState } from './default/default.reducer';

export interface State {
  articlesList: ArticlesListState;
  article: ArticleState;
  articleEditor: ArticleEditorState;
  auth: AuthState;
  default: DefaultState;
}

export const reducers: ActionReducerMap<State> = {
  articlesList: articlesListReducer,
  article: articleReducer,
  articleEditor: articleEditorReduce,
  auth: authReducer,
  default: defaultReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

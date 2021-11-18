import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { articleReducer, ArticleState } from './article/article.reducer';
import {
  articlesListReducer,
  ArticlesListState,
} from './articles-list/articles-list.reducer';

export interface State {
  articlesList: ArticlesListState;
  article: ArticleState;
}

export const reducers: ActionReducerMap<State> = {
  articlesList: articlesListReducer,
  article: articleReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

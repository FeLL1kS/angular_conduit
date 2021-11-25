import { createReducer, on } from '@ngrx/store';
import { Article } from 'src/app/aricles-mock';
import * as ArticleEditorActions from './article-editor.actions';

export interface ArticleEditorState {
  article: Article;
}

export const emptyArticle: Article = {
  author: {
    username: '',
    bio: '',
    image: '',
  },
  body: '',
  comments: [],
  createdAt: new Date(),
  description: '',
  favorited: false,
  favoritesCount: 0,
  slug: '',
  tagList: [],
  title: '',
  updatedAt: new Date(),
};

export const initialState: ArticleEditorState = {
  article: emptyArticle,
};

export const articleEditorReduce = createReducer(
  initialState,
  on(ArticleEditorActions.loadArticleSuccess, (state, payload) => ({
    ...state,
    article: payload.article,
  })),
  on(ArticleEditorActions.createOrUpdateArticleSuccess, (state, payload) => ({
    ...state,
    article: payload.article,
  }))
);

import { createReducer, on } from '@ngrx/store';
import { ArticleForm } from 'src/app/article-editor/article-editor.interface';
import * as ArticleEditorActions from './article-editor.actions';

export interface ArticleEditorState {
  article: ArticleForm;
}

export const emptyArticle: ArticleForm = {
  title: '',
  body: '',
  description: '',
  slug: '',
  tagList: '',
};

export const initialState: ArticleEditorState = {
  article: {
    ...emptyArticle,
  },
};

export const articleEditorReduce = createReducer(
  initialState,
  on(
    ArticleEditorActions.loadArticleSuccess,
    ArticleEditorActions.createArticleSuccess,
    ArticleEditorActions.updateArticleSuccess,
    (state, payload) => {
      console.log(payload.article.slug);
      return {
        ...state,
        article: {
          slug: payload.article.slug,
          title: payload.article.title,
          body: payload.article.body,
          description: payload.article.description,
          tagList: payload.article.tagList.join('; '),
        },
      };
    }
  ),
  on(ArticleEditorActions.clearForm, (_) => ({
    article: {
      ...emptyArticle,
    },
  }))
);

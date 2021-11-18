import { createReducer, on } from '@ngrx/store';
import { Article, MockArticles } from 'src/app/aricles-mock';
import { loadArticle, markAsFavorite } from './article.actions';

export interface ArticleState {
  article?: Article;
}

export const initialState: ArticleState = {
  article: undefined,
};

export const articleReducer = createReducer(
  initialState,
  on(loadArticle, (state, payload) => ({
    ...state,
    article: MockArticles.find((article) => article.slug === payload.slug),
  })),
  on(markAsFavorite, (state) => ({
    article: {
      ...state.article!,
      favoritesCount: state.article!.favorited
        ? state.article!.favoritesCount - 1
        : state.article!.favoritesCount + 1,
      favorited: !state.article!.favorited,
    },
  }))
);

import { createReducer, on } from '@ngrx/store';
import { Article, MockArticles } from 'src/app/aricles-mock';
import {
  loadArticles,
  markAsFavorite,
} from './articles-list.actions';

export interface ArticlesListState {
  articles: Article[];
}

export const initialState: ArticlesListState = {
  articles: [],
};

export const articlesListReducer = createReducer(
  initialState,
  on(loadArticles, (state) => ({
    ...state,
    articles: MockArticles,
  })),
  on(markAsFavorite, (state, payload) => {
    const articleIndex = state.articles.findIndex(
      (a) => a.slug === payload.slug
    );

    const article = state.articles[articleIndex];
    const updatedArticle = {
      ...article,
      favoritesCount: article.favorited
        ? article.favoritesCount - 1
        : article.favoritesCount + 1,
      favorited: !article.favorited,
    };

    const articles = [
      ...state.articles.slice(0, articleIndex),
      updatedArticle,
      ...state.articles.slice(articleIndex + 1),
    ];

    return {
      ...state,
      articles,
    };
  })
);

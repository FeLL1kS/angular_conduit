import { createReducer, on } from '@ngrx/store';
import { Article } from 'src/app/aricles-mock';
import {
  loadArticles,
  loadArticlesSuccess,
  loadArticlesUnsuccess,
  markAsFavorite,
  updateConfig,
} from './articles-list.actions';

export type ArticlesListFeedType = 'GLOBAL' | 'FEED';

export interface ArticlesListConfig {
  type: ArticlesListFeedType;
}

export interface ArticlesList {
  articles: Article[];
  articlesCount: number;
}

export interface ArticlesListState {
  articles: ArticlesList;
  config: ArticlesListConfig;
}

export const initialState: ArticlesListState = {
  articles: {
    articles: [],
    articlesCount: 0,
  },
  config: {
    type: 'GLOBAL',
  },
};

export const articlesListReducer = createReducer(
  initialState,
  on(loadArticles, (state) => ({
    ...state,
  })),
  on(loadArticlesSuccess, (state, payload) => ({
    ...state,
    articles: payload.articles,
  })),
  on(loadArticlesUnsuccess, (_) => ({
    ...initialState,
  })),
  on(updateConfig, (state, payload) => ({
    ...state,
    config: payload.config,
  })),
  on(markAsFavorite, (state, payload) => {
    const articleIndex = state.articles.articles.findIndex(
      (a) => a.slug === payload.slug
    );

    const article = state.articles.articles[articleIndex];
    const updatedArticle = {
      ...article,
      favoritesCount: article.favorited
        ? article.favoritesCount - 1
        : article.favoritesCount + 1,
      favorited: !article.favorited,
    };

    const articles = [
      ...state.articles.articles.slice(0, articleIndex),
      updatedArticle,
      ...state.articles.articles.slice(articleIndex + 1),
    ];

    return {
      ...state,
      articles: {
        articles,
        articlesCount: articles.length,
      },
    };
  })
);

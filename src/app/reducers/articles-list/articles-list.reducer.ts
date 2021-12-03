import { createReducer, on } from '@ngrx/store';
import { Article } from 'src/app/aricles-mock';
import {
  favoriteSuccess,
  loadArticlesSuccess,
  loadArticlesUnsuccess,
  unfavoriteSuccess,
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

export const articlesListInitialState: ArticlesListState = {
  articles: {
    articles: [],
    articlesCount: 0,
  },
  config: {
    type: 'GLOBAL',
  },
};

export const articlesListReducer = createReducer(
  articlesListInitialState,
  on(loadArticlesSuccess, (state, payload) => ({
    ...state,
    articles: payload.articles,
  })),
  on(loadArticlesUnsuccess, (_) => ({
    ...articlesListInitialState,
  })),
  on(updateConfig, (state, payload) => ({
    ...state,
    config: payload.config,
  })),
  on(favoriteSuccess, (state, payload) => {
    const updatedArticles = replaceArticleBySlug(
      state.articles.articles,
      payload.article
    );

    return {
      ...state,
      articles: {
        articles: updatedArticles,
        articlesCount: updatedArticles.length,
      },
    };
  }),
  on(unfavoriteSuccess, (state, payload) => {
    const updatedArticles = replaceArticleBySlug(
      state.articles.articles,
      payload.article
    );

    return {
      ...state,
      articles: {
        articles: updatedArticles,
        articlesCount: updatedArticles.length,
      },
    };
  })
);

const replaceArticleBySlug = (articles: Article[], article: Article) => {
  const articleIndex = articles.findIndex((a) => a.slug === article.slug);

  const updatedArticles = [
    ...articles.slice(0, articleIndex),
    article,
    ...articles.slice(articleIndex + 1),
  ];

  return updatedArticles;
};

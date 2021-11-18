import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { Article, MockArticles } from '../aricles-mock';

export enum ArticlesActions {
  GetArticles = '[ARTICLE] GetArticless',
  GetArticleBySlug = '[ARTICLE] GetArticleBySlug',
  MarkAsFavorite = '[ARTICLE] MarkAsFavorite',
}

export const getArticles = createAction(ArticlesActions.GetArticles);
export const getArticleBySlug = createAction(
  ArticlesActions.GetArticleBySlug,
  props<{ slug: string }>()
);
export const markAsFavorite = createAction(
  ArticlesActions.MarkAsFavorite,
  props<{ slug: string }>()
);

export interface ArticlesState {
  articles: Article[];
  currentArticle?: Article;
}

export const initialState: ArticlesState = {
  articles: [],
  currentArticle: undefined,
};

export const articlesReducer = createReducer(
  initialState,
  on(getArticles, (state) => ({
    ...state,
    articles: MockArticles,
  })),
  on(getArticleBySlug, (state, payload) => ({
    ...state,
    currentArticle: state.articles.find(
      (article) => article.slug === payload.slug
    ),
  })),
  on(markAsFavorite, (state, payload) => {
    const articleIndex = state.articles.findIndex(
      (a) => a.slug === payload.slug
    );

    const article = JSON.parse(
      JSON.stringify(state.articles[articleIndex])
    ) as Article;
    article.favoritesCount += article.favorited ? -1 : 1;
    article.favorited = !article.favorited;

    const articles = [
      ...state.articles.slice(0, articleIndex),
      article,
      ...state.articles.slice(articleIndex + 1),
    ];

    return {
      ...state,
      articles,
      currentArticle: state.currentArticle ? article : undefined,
    };
  })
);

export const featureSelector = createFeatureSelector<ArticlesState>('articles');

export const articlesSelector = createSelector(
  featureSelector,
  (state) => state.articles
);

export const currentArticleSelector = createSelector(
  featureSelector,
  (state) => state.currentArticle
);

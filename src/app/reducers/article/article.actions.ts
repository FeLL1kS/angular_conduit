import { createAction, props } from '@ngrx/store';
import { Article, Comment } from 'src/app/aricles-mock';
import { Errors } from '../auth/auth.reducer';

export enum ArticleActions {
  LoadArticle = '[ARTICLE] LoadArticle',
  LoadArticleSuccess = '[ARTICLE] LoadArticleSuccess',
  LoadArticleUnsuccess = '[ARTICLE] LoadArticleUnsuccess',
  Favorite = '[ARTICLE] Favorite',
  FavoriteSuccess = '[ARTICLE] FavoriteSuccess',
  Unfavorite = '[ARTICLE] Unfavorite',
  UnfavoriteSuccess = '[ARTICLE] UnfavoriteSuccess',
  GetComments = '[ARTICLE] GetComments',
  GetCommentsSuccess = '[ARTICLE] GetCommentsSuccess',
  AddComment = '[ARTICLE] AddComment',
  AddCommentSuccess = '[ARTICLE] AddCommentSuccess',
}

export const loadArticle = createAction(
  ArticleActions.LoadArticle,
  props<{ slug: string }>()
);

export const loadArticleSuccess = createAction(
  ArticleActions.LoadArticleSuccess,
  props<{ article: Article }>()
);

export const loadArticleUnsuccess = createAction(
  ArticleActions.LoadArticleSuccess,
  props<{ errors: Errors }>()
);

export const favorite = createAction(
  ArticleActions.Favorite,
  props<{ slug: string }>()
);

export const favoriteSuccess = createAction(
  ArticleActions.FavoriteSuccess,
  props<{ article: Article }>()
);

export const unfavorite = createAction(
  ArticleActions.Unfavorite,
  props<{ slug: string }>()
);

export const unfavoriteSuccess = createAction(
  ArticleActions.UnfavoriteSuccess,
  props<{ article: Article }>()
);

export const getComments = createAction(
  ArticleActions.GetComments,
  props<{ slug: string }>()
);

export const getCommentsSuccess = createAction(
  ArticleActions.GetCommentsSuccess,
  props<{ comments: Comment[] }>()
);

export const addComment = createAction(
  ArticleActions.AddComment,
  props<{ slug: string; body: string }>()
);

export const addCommentSuccess = createAction(
  ArticleActions.AddCommentSuccess,
  props<{ comment: Comment }>()
);

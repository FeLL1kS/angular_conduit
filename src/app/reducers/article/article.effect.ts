import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of } from 'rxjs';
import { ArticleService } from 'src/app/article/article.service';
import * as ArticleActions from './article.actions';

@Injectable()
export class ArticleEffect {
  loadArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.loadArticle),
      concatMap((action) =>
        this.articleService.articleQuery(action.slug).pipe(
          map((response) =>
            ArticleActions.loadArticleSuccess({ article: response.article })
          ),
          catchError((errors) =>
            of(ArticleActions.loadArticleUnsuccess({ errors }))
          )
        )
      )
    )
  );

  getComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.getComments),
      concatMap((action) =>
        this.articleService.getCommentsQuery(action.slug).pipe(
          map((response) =>
            ArticleActions.getCommentsSuccess({ comments: response.comments })
          ),
          catchError(() => of())
        )
      )
    )
  );

  addComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.addComment),
      concatMap((action) =>
        this.articleService.addCommentQuery(action.slug, action.body).pipe(
          map((response) =>
            ArticleActions.addCommentSuccess({ comment: response.comment })
          ),
          catchError(() => of())
        )
      )
    )
  );

  favorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.favorite),
      concatMap((action) =>
        this.articleService
          .favoriteQuery(action.slug)
          .pipe(
            map((response) =>
              ArticleActions.favoriteSuccess({ article: response.article })
            )
          )
      )
    )
  );

  unfavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.unfavorite),
      concatMap((action) =>
        this.articleService
          .unfavoriteQuery(action.slug)
          .pipe(
            map((response) =>
              ArticleActions.unfavoriteSuccess({ article: response.article })
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) {}
}

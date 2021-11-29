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

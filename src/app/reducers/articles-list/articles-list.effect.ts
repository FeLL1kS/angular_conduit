import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of, withLatestFrom } from 'rxjs';
import { ArticlesListService } from 'src/app/articles-list/articles-list.service';
import * as ArticlesListActions from './articles-list.actions';

@Injectable()
export class ArticlesListEffect {
  updateConfig$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesListActions.updateConfig),
      map(() => ArticlesListActions.loadArticles())
    )
  );

  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesListActions.loadArticles),
      withLatestFrom(this.articlesListService.articlesConfig$),
      concatMap(([_, config]) =>
        this.articlesListService.getArticles(config).pipe(
          map((articles) =>
            ArticlesListActions.loadArticlesSuccess({ articles })
          ),
          catchError(() => of(ArticlesListActions.loadArticlesUnsuccess()))
        )
      )
    )
  );

  favorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesListActions.favorite),
      concatMap((action) =>
        this.articlesListService
          .favoriteQuery(action.slug)
          .pipe(
            map((response) =>
              ArticlesListActions.favoriteSuccess({ article: response.article })
            )
          )
      )
    )
  );

  unfavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesListActions.unfavorite),
      concatMap((action) =>
        this.articlesListService.unfavoriteQuery(action.slug).pipe(
          map((response) =>
            ArticlesListActions.unfavoriteSuccess({
              article: response.article,
            })
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private articlesListService: ArticlesListService
  ) {}
}

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
          map((articles) => ArticlesListActions.loadArticlesSuccess({ articles })),
          catchError(() => of(ArticlesListActions.loadArticlesUnsuccess()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private articlesListService: ArticlesListService
  ) {}
}

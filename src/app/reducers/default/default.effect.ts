import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of } from 'rxjs';
import { ArticlesListService } from 'src/app/articles-list/articles-list.service';
import {
  loadTags,
  loadTagsSuccess,
  loadTagsUnsuccess,
} from './default.actions';

@Injectable()
export class DefaultEffect {
  loadTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTags),
      concatMap(() =>
        this.articlesListService.getTags().pipe(
          map((response) => loadTagsSuccess({ tags: response.tags })),
          catchError((errors) => of(loadTagsUnsuccess({ errors })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private articlesListService: ArticlesListService
  ) {}
}

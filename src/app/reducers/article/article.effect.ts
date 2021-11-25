import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of } from 'rxjs';
import { ArticleService } from 'src/app/article/article.service';
import {
  loadArticle,
  loadArticleSuccess,
  loadArticleUnsuccess,
} from './article.actions';

@Injectable()
export class ArticleEffect {
  loadArticle = createEffect(() =>
    this.actions$.pipe(
      ofType(loadArticle),
      concatMap((action) =>
        this.articleService.articleQuery(action.slug).pipe(
          map((response) => loadArticleSuccess({ article: response.article })),
          catchError((errors) => of(loadArticleUnsuccess({ errors })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) {}
}

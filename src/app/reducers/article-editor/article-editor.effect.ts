import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, tap, withLatestFrom } from 'rxjs';
import { ArticleEditorService } from 'src/app/article-editor/article-editor.service';
import * as ArticleEditorActions from './article-editor.actions';
import { emptyArticle } from './article-editor.reducer';

@Injectable()
export class ArticleEditorEffect {
  loadArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleEditorActions.loadArticle),
      concatMap((action) =>
        this.articleEditorService.getArticleQuery(action.slug).pipe(
          map((response) =>
            ArticleEditorActions.loadArticleSuccess({
              article: response.article,
            })
          )
        )
      )
    )
  );

  createOrUpdateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleEditorActions.createOrUpdateArticle),
      withLatestFrom(this.articleEditorService.form.valueChanges),
      concatMap(([_, values]) =>
        this.articleEditorService
          .createOrUpdateArticleQuery({
            article: {
              title: values['title'],
              body: values['body'],
              description: values['description'],
              tagList: values['tags'].split(';'),
            },
          })
          .pipe(
            map((response) => {
              this.articleEditorService.form.reset();
              this.router.navigateByUrl(`/article/${response.article.slug}`);

              return ArticleEditorActions.createOrUpdateArticleSuccess({
                article: emptyArticle,
              });
            })
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private articleEditorService: ArticleEditorService,
    private router: Router
  ) {}
}

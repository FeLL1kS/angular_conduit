import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, mergeMap, tap, withLatestFrom } from 'rxjs';
import { ArticleEditorService } from 'src/app/article-editor/article-editor.service';
import * as ArticleEditorActions from './article-editor.actions';

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

  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleEditorActions.createArticle),
      concatMap((article) =>
        this.articleEditorService
          .createArticleQuery({
            article: {
              slug: '',
              title: article.article.title,
              body: article.article.body,
              description: article.article.description,
              tagList: article.article.tagList.split(';'),
            },
          })
          .pipe(
            mergeMap((response) => {
              this.router.navigateByUrl(`/article/${response.article.slug}`);

              return [
                ArticleEditorActions.createArticleSuccess({
                  article: response.article,
                }),
                ArticleEditorActions.clearForm(),
              ];
            })
          )
      )
    )
  );

  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleEditorActions.updateArticle),
      concatMap((article) =>
        this.articleEditorService
          .updateArticleQuery({
            article: {
              slug: article.article.slug,
              title: article.article.title,
              body: article.article.body,
              description: article.article.description,
              tagList: article.article.tagList.split(';'),
            },
          })
          .pipe(
            mergeMap((response) => {
              this.router.navigateByUrl(`/article/${response.article.slug}`);

              return [
                ArticleEditorActions.updateArticleSuccess({
                  article: response.article,
                }),
                ArticleEditorActions.clearForm(),
              ];
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

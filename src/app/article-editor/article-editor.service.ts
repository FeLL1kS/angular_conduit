import { Injectable, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, Observable, Subscription } from 'rxjs';
import { ApiService } from '../api/api.service';
import { ArticleResponse } from '../article/article.interface';
import {
  createOrUpdateArticle,
  loadArticle,
} from '../reducers/article-editor/article-editor.actions';
import {
  articleSelector,
  slugSelector,
} from '../reducers/article-editor/article-editor.selector';
import { ArticleCreateRequest } from './article-editor.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticleEditorService implements OnDestroy {
  unsubscribe$: Subscription = new Subscription();

  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    body: new FormControl(''),
    tags: new FormControl(''),
  });

  constructor(private apiService: ApiService, private store: Store) {
    this.unsubscribe$.add(
      this.store
        .select(articleSelector)
        .pipe(map((data) => this.form.patchValue(data)))
        .subscribe()
    );
  }

  createOrUpdateArticle(): void {
    this.store.dispatch(createOrUpdateArticle());
  }

  loadArticle(slug: string): void {
    this.store.dispatch(loadArticle({ slug }));
  }

  createOrUpdateArticleQuery(
    article: ArticleCreateRequest
  ): Observable<ArticleResponse> {
    let slug = '';

    this.unsubscribe$.add(
      this.store.select(slugSelector).subscribe((s) => (slug = s))
    );

    if (slug !== '') {
      return this.apiService.put<ArticleResponse, ArticleCreateRequest>(
        `articles/${slug}`,
        article
      );
    } else {
      return this.apiService.post<ArticleResponse, ArticleCreateRequest>(
        `articles`,
        article
      );
    }
  }

  getArticleQuery(slug: string): Observable<ArticleResponse> {
    return this.apiService.get(`articles/${slug}`);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.unsubscribe();
  }
}

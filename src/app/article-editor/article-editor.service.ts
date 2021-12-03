import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { ArticleResponse } from '../article/article.interface';
import {
  createArticle,
  loadArticle,
  updateArticle,
} from '../reducers/article-editor/article-editor.actions';
import { articleSelector } from '../reducers/article-editor/article-editor.selector';
import { ArticleCreateRequest, ArticleForm } from './article-editor.interface';

@Injectable()
export class ArticleEditorService {
  data$ = this.store.select(articleSelector);

  constructor(private apiService: ApiService, private store: Store) {}

  createArticle(article: ArticleForm): void {
    this.store.dispatch(createArticle({ article }));
  }

  updateArticle(article: ArticleForm): void {
    this.store.dispatch(updateArticle({ article }));
  }

  loadArticle(slug: string): void {
    this.store.dispatch(loadArticle({ slug }));
  }

  createArticleQuery(
    article: ArticleCreateRequest
  ): Observable<ArticleResponse> {
    return this.apiService.post<ArticleResponse, ArticleCreateRequest>(
      `articles`,
      article
    );
  }

  updateArticleQuery(
    article: ArticleCreateRequest
  ): Observable<ArticleResponse> {
    return this.apiService.put<ArticleResponse, ArticleCreateRequest>(
      `articles/${article.article.slug}`,
      article
    );
  }

  getArticleQuery(slug: string): Observable<ArticleResponse> {
    return this.apiService.get(`articles/${slug}`);
  }
}

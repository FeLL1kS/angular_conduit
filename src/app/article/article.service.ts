import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import {
  favorite,
  loadArticle,
  unfavorite,
} from '../reducers/article/article.actions';
import { articleSelector } from '../reducers/article/article.selector';
import { ArticleResponse } from './article.interface';

@Injectable()
export class ArticleService {
  article$ = this.store.select(articleSelector);

  constructor(private store: Store, private apiService: ApiService) {}

  loadArticle(slug: string): void {
    this.store.dispatch(loadArticle({ slug }));
  }

  articleQuery(slug: string): Observable<ArticleResponse> {
    return this.apiService.get(`articles/${slug}`);
  }

  favoriteQuery(slug: string): Observable<ArticleResponse> {
    return this.apiService.post<ArticleResponse, null>(
      `articles/${slug}/favorite`
    );
  }

  unfavoriteQuery(slug: string): Observable<ArticleResponse> {
    return this.apiService.delete<ArticleResponse>(
      `articles/${slug}/unfavorite`
    );
  }

  favorite(slug: string): void {
    this.store.dispatch(favorite({ slug }));
  }

  unfavorite(slug: string): void {
    this.store.dispatch(unfavorite({ slug }));
  }
}

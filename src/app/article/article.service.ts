import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { Article } from '../aricles-mock';
import { loadArticle } from '../reducers/article/article.actions';
import { articleSelector } from '../reducers/article/article.selector';
import { markAsFavorite } from '../reducers/articles-list/articles-list.actions';
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

  markAsFavorite(slug: string): void {
    this.store.dispatch(markAsFavorite({ slug }));
  }
}

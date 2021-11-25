import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { ApiService } from '../api/api.service';

import {
  favorite,
  unfavorite,
  updateConfig,
} from '../reducers/articles-list/articles-list.actions';
import {
  ArticlesList,
  ArticlesListConfig,
  ArticlesListFeedType,
} from '../reducers/articles-list/articles-list.reducer';
import {
  articlesListConfigSelector,
  articlesListSelector,
} from '../reducers/articles-list/articles-list.selectors';
import { Article } from '../aricles-mock';
import { ArticleResponse } from '../article/article.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticlesListService {
  articles$ = this.store.select(articlesListSelector);
  articlesConfig$ = this.store.select(articlesListConfigSelector);

  constructor(private store: Store, private apiService: ApiService) {}

  getArticles(config: ArticlesListConfig): Observable<ArticlesList> {
    return this.apiService.get(
      `articles/${config.type === 'GLOBAL' ? '' : 'feed'}`
    );
  }

  favoriteQuery(slug: string): Observable<ArticleResponse> {
    return this.apiService.post<ArticleResponse, null>(
      `articles/${slug}/favorite`
    );
  }

  unfavoriteQuery(slug: string): Observable<ArticleResponse> {
    return this.apiService.delete<ArticleResponse>(`articles/${slug}/favorite`);
  }

  updateArticlesFeedType(type: ArticlesListFeedType = 'GLOBAL') {
    this.store.dispatch(updateConfig({ config: { type } }));
  }

  favorite(slug: string): void {
    this.store.dispatch(favorite({ slug }));
  }

  unfavorite(slug: string): void {
    this.store.dispatch(unfavorite({ slug }));
  }
}

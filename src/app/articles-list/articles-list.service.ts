import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { ApiService } from '../api/api.service';

import {
  markAsFavorite,
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

  updateArticlesFeedType(type: ArticlesListFeedType = 'GLOBAL') {
    this.store.dispatch(updateConfig({ config: { type } }));
  }

  markAsFavorite(slug: string): void {
    this.store.dispatch(markAsFavorite({ slug }));
  }
}

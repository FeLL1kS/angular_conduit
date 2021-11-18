import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  articlesSelector,
  currentArticleSelector,
  getArticleBySlug,
  getArticles,
  markAsFavorite,
} from './reducers/articles';

@Injectable()
export class ArticleService {
  articles$ = this.store.select(articlesSelector);

  constructor(private store: Store) {
    this.store.dispatch(getArticles());
  }

  getArticleBySlug(slug: string) {
    this.store.dispatch(getArticleBySlug({ slug }));
    return this.store.select(currentArticleSelector);
  }

  markAsFavorite(slug: string): void {
    this.store.dispatch(markAsFavorite({ slug }));
  }
}

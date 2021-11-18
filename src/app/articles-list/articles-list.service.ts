import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  loadArticles,
  markAsFavorite,
} from '../reducers/articles-list/articles-list.actions';
import { articlesListSelector } from '../reducers/articles-list/articles-list.selectors';

@Injectable({
  providedIn: 'root',
})
export class ArticlesListService {
  articles$ = this.store.select(articlesListSelector);

  constructor(private store: Store) {
    this.loadArticles();
  }

  loadArticles(): void {
    this.store.dispatch(loadArticles());
  }

  markAsFavorite(slug: string): void {
    this.store.dispatch(markAsFavorite({ slug }));
  }
}

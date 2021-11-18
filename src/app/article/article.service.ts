import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article } from '../aricles-mock';
import { loadArticle } from '../reducers/article/article.actions';
import { articleSelector } from '../reducers/article/article.selector';
import { markAsFavorite } from '../reducers/articles-list/articles-list.actions';

@Injectable()
export class ArticleService {
  article$ = this.store.select(articleSelector);

  constructor(private store: Store) {}
  
  loadArticle(slug: string): void {
    this.store.dispatch(loadArticle({ slug }));
  }

  markAsFavorite(slug: string): void {
    this.store.dispatch(markAsFavorite({ slug }));
  }
}

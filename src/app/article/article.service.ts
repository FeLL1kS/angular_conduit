import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article } from '../aricles-mock';
import { loadArticle } from '../reducers/article/article.actions';
import { articleSelector } from '../reducers/article/article.selector';
import { markAsFavorite } from '../reducers/articles-list/articles-list.actions';

@Injectable()
export class ArticleService {
  article$?: Observable<Article | undefined>;

  constructor(private store: Store) {}

  loadArticle(slug: string): void {
    this.store.dispatch(loadArticle({ slug }));
    this.article$ = this.store.select(articleSelector);
  }

  markAsFavorite(slug: string): void {
    this.store.dispatch(markAsFavorite({ slug }));
  }
}

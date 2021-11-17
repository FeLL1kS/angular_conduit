import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article, MockArticles } from './aricles-mock';

@Injectable()
export class ArticleService {
  articles$ = new BehaviorSubject<Article[]>([]);

  constructor() {
    setTimeout(() => this.articles$.next(MockArticles), 1000);
  }

  getArticleBySlug(slug: string): BehaviorSubject<Article | undefined> {
    const article = MockArticles.find((article) => article.slug === slug);
    return new BehaviorSubject(article);
  }
}

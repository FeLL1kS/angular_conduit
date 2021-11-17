import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article, MockArticles } from './aricles-mock';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor() {}

  getArticles(): Observable<Article[]> {
    const articles = of(MockArticles);
    return articles;
  }

  getArticleBySlug(slug: string): Observable<Article | undefined> {
    const article = of(MockArticles.find((article) => article.slug === slug));
    return article;
  }
}

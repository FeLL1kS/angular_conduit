import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article, MockArticles } from './aricles-mock';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): Observable<Article[]> {
    const articles = of(MockArticles);
    return articles;
  }
}

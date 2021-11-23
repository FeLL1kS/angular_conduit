import { Component, OnInit } from '@angular/core';
import { ArticlesListService } from '../articles-list.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
  articles$ = this.articlesListService.articles$;

  constructor(private articlesListService: ArticlesListService) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.articlesListService.updateArticlesFeedType();
  }
}

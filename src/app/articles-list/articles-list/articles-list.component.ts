import { Component, OnInit } from '@angular/core';
import { ArticlesListFeedType } from 'src/app/reducers/articles-list/articles-list.reducer';
import { ArticlesListService } from '../articles-list.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
  articles$ = this.articlesListService.articles$;
  articlesConfig$ = this.articlesListService.articlesConfig$;
  tags$ = this.articlesListService.tags$;

  constructor(private articlesListService: ArticlesListService) {}

  ngOnInit(): void {
    this.loadArticles();
    this.loadTags();
  }

  loadArticles(): void {
    this.articlesListService.updateArticlesFeedType();
  }

  loadTags(): void {
    this.articlesListService.loadTags();
  }

  updateArticlesFeedType(type: ArticlesListFeedType): void {
    this.articlesListService.updateArticlesFeedType(type);
  }
}

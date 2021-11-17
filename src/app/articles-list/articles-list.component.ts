import { Component } from '@angular/core';
import { Article } from '../aricles-mock';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent {

  constructor(private articleService: ArticleService) {}
  
  articles$ = this.articleService.articles$;
}

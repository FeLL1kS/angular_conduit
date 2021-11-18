import { Component } from '@angular/core';
import { ArticlesListService } from '../articles-list.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent {
  articles$ = this.articlesListService.articles$;

  constructor(private articlesListService: ArticlesListService) {}
}

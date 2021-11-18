import { Component, Input } from '@angular/core';
import { Article } from '../../aricles-mock';
import { ArticlesListService } from '../articles-list.service';

@Component({
  selector: 'app-articles-list-item',
  templateUrl: './articles-list-item.component.html',
  styleUrls: ['./articles-list-item.component.scss'],
})
export class ArticlesListItemComponent {
  @Input() article!: Article;

  constructor(private articlesListService: ArticlesListService) {}

  markAsFavorite(slug: string) {
    this.articlesListService.markAsFavorite(slug);
  }
}

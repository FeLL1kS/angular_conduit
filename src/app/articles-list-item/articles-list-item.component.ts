import { Component, Input } from '@angular/core';
import { Article } from '../aricles-mock';

@Component({
  selector: 'app-articles-list-item',
  templateUrl: './articles-list-item.component.html',
  styleUrls: ['./articles-list-item.component.scss'],
})
export class ArticlesListItemComponent {
  @Input() article!: Article;

  constructor() {}

  onLike() {
    this.article.favoritesCount += this.article.favorited ? -1 : 1;
    this.article.favorited = !this.article.favorited;
  }
}

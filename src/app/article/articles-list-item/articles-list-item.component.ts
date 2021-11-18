import { Component, Input } from '@angular/core';
import { Article } from '../../aricles-mock';
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-articles-list-item',
  templateUrl: './articles-list-item.component.html',
  styleUrls: ['./articles-list-item.component.scss'],
})
export class ArticlesListItemComponent {
  @Input() article!: Article;

  constructor(private articleService: ArticleService) {}

  markAsFavorite(slug: string) {
    this.articleService.markAsFavorite(slug);
  }
}

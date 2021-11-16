import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../aricles-mock';

@Component({
  selector: 'app-articles-list-item',
  templateUrl: './articles-list-item.component.html',
  styleUrls: ['./articles-list-item.component.scss']
})
export class ArticlesListItemComponent implements OnInit {

  @Input() article?: Article;

  constructor() { }

  ngOnInit(): void {
  }

  onLike() {
    if (this.article) {
      this.article.favoritesCount += this.article.favorited ? -1 : 1;
      this.article.favorited = !this.article.favorited;
    }
  }

}

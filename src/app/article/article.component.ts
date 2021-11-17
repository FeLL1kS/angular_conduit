import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from '../aricles-mock';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  subscribe?: Subscription;

  article?: Article;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getArticle();
  }

  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }

  getArticle(): void {
    const slug: string | null = this.route.snapshot.paramMap.get('slug');

    if (slug) {
      this.subscribe = this.articleService
        .getArticleBySlug(slug)
        .subscribe((article) => (this.article = article));
    }
  }

  onLike() {
    if (this.article) {
      this.article.favoritesCount += this.article.favorited ? -1 : 1;
      this.article.favorited = !this.article.favorited;
    }
  }
}

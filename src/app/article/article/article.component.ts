import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Article } from 'src/app/aricles-mock';
import { ArticleService } from 'src/app/article.service';
import { markAsFavorite } from 'src/app/reducers/articles';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  article$?: Observable<Article | undefined>;
  favoritedArticle$?: Observable<boolean | undefined>;

  slug: string | null = this.route.snapshot.paramMap.get('slug');

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit(): void {
    if (this.slug) {
      this.article$ = this.articleService.getArticleBySlug(this.slug);
      this.favoritedArticle$ = this.article$?.pipe(
        map((article) => article?.favorited)
      );
    }
  }

  markAsFavorite(): void {
    if (this.slug) {
      this.store.dispatch(markAsFavorite({ slug: this.slug }));
    }
  }
}

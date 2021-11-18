import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Article } from 'src/app/aricles-mock';
import { ArticleService } from 'src/app/article/article.service';
import { markAsFavorite } from 'src/app/reducers/article/article.actions';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  article$ = this.articleService.article$;
  favoritedArticle$ = this.article$.pipe(map((article) => article?.favorited));

  slug: string | null = this.route.snapshot.paramMap.get('slug');

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.loadArticle();
  }

  loadArticle(): void {
    if (this.slug) {
      this.articleService.loadArticle(this.slug);
    }
  }

  markAsFavorite(): void {
    if (this.slug) {
      this.store.dispatch(markAsFavorite());
    }
  }
}

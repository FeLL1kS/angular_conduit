import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { ArticleService } from 'src/app/article/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  article$ = this.articleService.article$;
  comments$ = this.articleService.comments$;
  user$ = this.articleService.user$;
  favoritedArticle$ = this.article$.pipe(map((article) => article?.favorited));

  isCreatedByCurrentUser$ = this.user$.pipe(
    map((user) =>
      this.article$.pipe(
        map((article) => user.username === article?.author.username)
      )
    )
  );

  form: FormGroup = new FormGroup({
    body: new FormControl(''),
  })

  slug: string | null = this.route.snapshot.paramMap.get('slug');

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadArticle();
    this.getComments();
  }

  submit(): void {
    if (this.slug) {
      this.articleService.addComment(this.slug, this.form.value.body);
      this.form.reset();
    }
  }

  loadArticle(): void {
    if (this.slug) {
      this.articleService.loadArticle(this.slug);
    }
  }

  getComments(): void {
    if (this.slug) {
      this.articleService.getComments(this.slug);
    }
  }

  favorite(slug: string) {
    this.articleService.favorite(slug);
  }

  unfavorite(slug: string) {
    this.articleService.unfavorite(slug);
  }
}

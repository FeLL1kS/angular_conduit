import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { articleSelector } from 'src/app/reducers/article-editor/article-editor.selector';
import { ArticleEditorService } from '../article-editor.service';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.scss'],
})
export class ArticleEditorComponent implements OnDestroy {
  unsubscribe$: Subscription = new Subscription();

  data$ = this.articleEditorService.data$;

  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    body: new FormControl(''),
    tagList: new FormControl(''),
  });

  constructor(private articleEditorService: ArticleEditorService) {
    this.unsubscribe$.add(
      this.data$.subscribe((data) =>
        this.form.patchValue(data)
      )
    );
  }

  createArticle(): void {
    this.articleEditorService.createArticle(this.form.value);
  }

  updateArticle(slug: string): void {
    this.articleEditorService.updateArticle({
      ...this.form.value,
      slug
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.unsubscribe();
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { articleSelector } from 'src/app/reducers/article-editor/article-editor.selector';
import { ArticleEditorService } from '../article-editor.service';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.scss'],
})
export class ArticleEditorComponent {
  form: FormGroup = this.articleEditorService.form;

  constructor(private articleEditorService: ArticleEditorService) {}

  createOrUpdateArticle(): void {
    this.articleEditorService.createOrUpdateArticle();
  }
}

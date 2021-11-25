import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
import { ArticleEditorService } from './article-editor.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEditorEffect } from '../reducers/article-editor/article-editor.effect';
import { ArticleEditorResolver } from './article-editor.resolver';

@NgModule({
  declarations: [ArticleEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ArticleEditorComponent,
        resolve: { ArticleEditorResolver },
      },
      {
        path: ':slug',
        component: ArticleEditorComponent,
        resolve: { ArticleEditorResolver },
      },
    ]),
    EffectsModule.forFeature([ArticleEditorEffect]),
  ],
  providers: [ArticleEditorService],
})
export class ArticleEditorModule {}

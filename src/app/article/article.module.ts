import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from './article.service';
import { ArticleComponent } from './article/article.component';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffect } from '../reducers/article/article.effect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const articleRoutes: Routes = [
  { path: '', component: ArticleComponent },
];

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(articleRoutes),
    EffectsModule.forFeature([ArticleEffect]),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ArticleService],
})
export class ArticleModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from './article.service';
import { ArticleComponent } from './article/article.component';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffect } from '../reducers/article/article.effect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ArticleComponent }]),
    EffectsModule.forFeature([ArticleEffect]),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ArticleService],
})
export class ArticleModule {}

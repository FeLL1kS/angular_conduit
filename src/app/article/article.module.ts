import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from './article.service';
import { ArticleComponent } from './article/article.component';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffect } from '../reducers/article/article.effect';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ArticleComponent }]),
    EffectsModule.forFeature([ArticleEffect]),
  ],
  providers: [ArticleService],
})
export class ArticleModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from './article.service';
import { ArticleComponent } from './article/article.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ArticleComponent }]),
  ],
  providers: [{ provide: ArticleService }],
})
export class ArticleModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ArticleService } from './article.service';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [ArticleComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [AppRoutingModule],
  providers: [{ provide: ArticleService }],
})
export class ArticleModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ArticleService } from '../article.service';
import { ArticleComponent } from './article/article.component';
import { ArticlesListItemComponent } from './articles-list-item/articles-list-item.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';

@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticlesListItemComponent,
    ArticleComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [AppRoutingModule],
  providers: [{ provide: ArticleService }],
})
export class ArticleModule {}

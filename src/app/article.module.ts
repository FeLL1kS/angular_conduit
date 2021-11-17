import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from './article.service';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesListItemComponent } from './articles-list-item/articles-list-item.component';
import { ArticleComponent } from './article/article.component';
import { AppRoutingModule } from './app-routing.module';

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

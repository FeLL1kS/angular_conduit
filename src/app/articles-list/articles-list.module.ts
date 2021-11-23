import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesListItemComponent } from './articles-list-item/articles-list-item.component';
import { AppRoutingModule } from '../app-routing.module';
import { ArticlesListService } from './articles-list.service';
import { EffectsModule } from '@ngrx/effects';
import { ArticlesListEffect } from '../reducers/articles-list/articles-list.effect';

@NgModule({
  declarations: [ArticlesListComponent, ArticlesListItemComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    EffectsModule.forFeature([ArticlesListEffect]),
  ],
  exports: [AppRoutingModule],
  providers: [{ provide: ArticlesListService }],
})
export class ArticleListModule {}

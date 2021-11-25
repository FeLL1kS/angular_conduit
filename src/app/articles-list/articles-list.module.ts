import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesListItemComponent } from './articles-list-item/articles-list-item.component';
import { ArticlesListService } from './articles-list.service';
import { EffectsModule } from '@ngrx/effects';
import { ArticlesListEffect } from '../reducers/articles-list/articles-list.effect';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ArticlesListComponent, ArticlesListItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ArticlesListComponent }]),
    EffectsModule.forFeature([ArticlesListEffect]),
  ],
  providers: [{ provide: ArticlesListService }],
})
export class ArticleListModule {}

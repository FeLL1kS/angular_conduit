import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article/article.component';
import { ArticlesListComponent } from './articles-list/articles-list/articles-list.component';

const routes: Routes = [
  { path: '', component: ArticlesListComponent },
  { path: 'article/:slug', component: ArticleComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

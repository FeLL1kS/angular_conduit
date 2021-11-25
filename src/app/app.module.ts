import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ApiModule } from './api/api.module';
import { EffectsModule } from '@ngrx/effects';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ApiModule,
    AuthModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('./articles-list/articles-list.module').then(
            (m) => m.ArticleListModule
          ),
      },
      {
        path: 'article/:slug',
        loadChildren: () =>
          import('./article/article.module').then((m) => m.ArticleModule),
      },
    ]),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    HomeModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

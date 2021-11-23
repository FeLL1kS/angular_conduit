import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ArticleListModule } from './articles-list/articles-list.module';
import { ApiModule } from './api/api.module';
import { EffectsModule } from '@ngrx/effects';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ApiModule,
    BrowserModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    HomeModule,
    ArticleListModule,
    ArticleModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

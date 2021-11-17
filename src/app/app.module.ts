import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleModule } from './article.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [BrowserModule, ArticleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

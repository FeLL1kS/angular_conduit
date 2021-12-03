import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ArticleEditorService } from './article-editor.service';

@Injectable()
export class ArticleEditorResolver implements Resolve<boolean> {
  constructor(private articleEditorService: ArticleEditorService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const slug = route.params['slug'];

    if (slug) {
      this.articleEditorService.loadArticle(slug);
    }

    return of(true);
  }
}

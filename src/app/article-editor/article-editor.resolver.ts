import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ArticleEditorService } from './article-editor.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleEditorResolver implements Resolve<boolean> {
  constructor(private articleEditorService: ArticleEditorService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const slug = route.params['slug'];

    if (slug) {
      this.articleEditorService.loadArticle(slug);
    }

    return of(true);
  }
}

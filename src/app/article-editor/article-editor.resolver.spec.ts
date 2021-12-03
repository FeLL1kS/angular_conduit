import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';

import { ArticleEditorResolver } from './article-editor.resolver';
import { ArticleEditorService } from './article-editor.service';

describe('ArticleEditorResolver', () => {
  let resolver: ArticleEditorResolver;
  let route: ActivatedRouteSnapshot;
  let articleEditorServiceSpy: jasmine.SpyObj<ArticleEditorService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ArticleEditorService', ['loadArticle']);
    TestBed.configureTestingModule({
      providers: [
        ArticleEditorResolver,
        { provide: ArticleEditorService, useValue: spy },
      ],
    });
    resolver = TestBed.inject(ArticleEditorResolver);
    articleEditorServiceSpy = TestBed.inject(ArticleEditorService) as jasmine.SpyObj<ArticleEditorService>;
    route = new ActivatedRouteSnapshot();
    route.params = {
      slug: 'slug'
    }
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('articleEditorResolver should resolve', () => {
    resolver.resolve(route).subscribe(res => {
      expect(res).toBe(true);
    });
  })

  it('loadArticles from ArticleEditorService should be called once', () => {
    resolver.resolve(route).subscribe(res => {
      expect(articleEditorServiceSpy.loadArticle.calls.count()).toBe(1);
    });
  })
});

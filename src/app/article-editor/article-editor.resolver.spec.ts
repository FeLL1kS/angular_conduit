import { TestBed } from '@angular/core/testing';

import { ArticleEditorResolver } from './article-editor.resolver';
import { ArticleEditorService } from './article-editor.service';

describe('ArticleEditorResolver', () => {
  let resolver: ArticleEditorResolver;
  const articleEditorServiceStub = {
    loadArticle: () => {},
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ArticleEditorResolver,
        { provide: ArticleEditorService, useValue: articleEditorServiceStub },
      ],
    });
    resolver = TestBed.inject(ArticleEditorResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ArticleEditorResolver } from './article-editor.resolver';

describe('ArticleEditorResolver', () => {
  let resolver: ArticleEditorResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ArticleEditorResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

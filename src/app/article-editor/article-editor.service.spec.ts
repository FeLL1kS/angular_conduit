import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ApiService } from '../api/api.service';

import { ArticleEditorService } from './article-editor.service';

describe('ArticleEditorService', () => {
  let service: ArticleEditorService;
  const apiServiceStub = {
    get: () => {},
    post: () => {},
    put: () => {},
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ArticleEditorService,
        { provide: ApiService, useValue: apiServiceStub },
        provideMockStore(),
      ],
    });
    service = TestBed.inject(ArticleEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

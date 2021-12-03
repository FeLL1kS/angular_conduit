import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ApiService } from '../api/api.service';

import { ArticleEditorService } from './article-editor.service';

describe('ArticleEditorService', () => {
  let service: ArticleEditorService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ArticleEditorService,
        ApiService,
        { provide: HttpClient, useValue: jasmine.createSpyObj('HttpClient', ['get', 'post', 'put']) },
        provideMockStore(),
      ],
    });
    service = TestBed.inject(ArticleEditorService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

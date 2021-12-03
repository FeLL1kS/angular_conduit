import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ApiService } from '../api/api.service';
import { ArticleService } from './article.service';

describe('ArticleService', () => {
  let service: ArticleService;
  const apiServiceStub = {
    get: () => {},
    post: () => {},
    put: () => {},
    delete: () => {},
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore(),
        ArticleService,
        { provide: ApiService, useValue: apiServiceStub },
      ],
    });
    service = TestBed.inject(ArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

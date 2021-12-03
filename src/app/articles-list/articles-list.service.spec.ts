import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ApiService } from '../api/api.service';

import { ArticlesListService } from './articles-list.service';

describe('ArticlesListService', () => {
  let service: ArticlesListService;
  const apiServiceStub = {
    get: () => {},
    post: () => {},
    delete: () => {},
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ArticlesListService,
        provideMockStore(),
        { provide: ApiService, useValue: apiServiceStub },
      ],
    });
    service = TestBed.inject(ArticlesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

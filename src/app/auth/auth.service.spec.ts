import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ApiService } from '../api/api.service';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  const apiServiceStub = {
    get: () => {},
    post: () => {},
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        provideMockStore(),
        { provide: ApiService, useValue: apiServiceStub },
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

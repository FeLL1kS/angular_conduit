import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { ApiService } from '../api/api.service';
import { AddCommentResponse, ArticleResponse } from './article.interface';
import { ArticleService } from './article.service';

const articleStub: ArticleResponse = {
  article: {
    slug: 'slug',
    author: {
      bio: '',
      image: '',
      username: '',
    },
    body: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    description: '',
    favorited: false,
    favoritesCount: 0,
    tagList: [],
    title: '',
  },
};

const addCommentResponseStub: AddCommentResponse = {
  comment: {
    author: {
      bio: '',
      image: '',
      username: '',
    },
    body: 'body',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
};

describe('ArticleService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore(),
        ArticleService,
        ApiService,
        {
          provide: HttpClient,
          useValue: jasmine.createSpyObj('HttpClient', [
            'get',
            'post',
            'put',
            'delete',
          ]),
        },
      ],
    });
    service = TestBed.inject(ArticleService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('articleQuery should returns article', () => {
    httpClientSpy.get.and.returnValue(of(articleStub));

    service.articleQuery('slug').subscribe((article) => {
      expect(article).toEqual(articleStub);
    });
  });

  it('addCommentQuery should returns new comment', () => {
    httpClientSpy.post.and.returnValue(of(addCommentResponseStub));

    service.addCommentQuery('slug', 'body').subscribe((comment) => {
      expect(comment).toEqual(addCommentResponseStub);
    });
  });
});

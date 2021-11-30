import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import {
  addComment,
  favorite,
  getComments,
  loadArticle,
  unfavorite,
} from '../reducers/article/article.actions';
import {
  articleSelector,
  commentsSelector,
} from '../reducers/article/article.selector';
import { userSelector } from '../reducers/auth/auth.selectors';
import {
  AddCommentRequest,
  AddCommentResponse,
  ArticleResponse,
  CommentsResponse,
} from './article.interface';

@Injectable()
export class ArticleService {
  article$ = this.store.select(articleSelector);
  comments$ = this.store.select(commentsSelector);
  user$ = this.store.select(userSelector);

  constructor(private store: Store, private apiService: ApiService) {}

  loadArticle(slug: string): void {
    this.store.dispatch(loadArticle({ slug }));
  }

  addComment(slug: string, body: string): void {
    this.store.dispatch(addComment({ slug, body }));
  }

  getComments(slug: string): void {
    this.store.dispatch(getComments({ slug }));
  }

  articleQuery(slug: string): Observable<ArticleResponse> {
    return this.apiService.get(`articles/${slug}`);
  }

  addCommentQuery(slug: string, body: string): Observable<AddCommentResponse> {
    return this.apiService.post<AddCommentResponse, AddCommentRequest>(
      `articles/${slug}/comments`,
      { comment: { body } }
    );
  }

  getCommentsQuery(slug: string): Observable<CommentsResponse> {
    return this.apiService.get(`articles/${slug}/comments`);
  }

  favoriteQuery(slug: string): Observable<ArticleResponse> {
    return this.apiService.post<ArticleResponse, null>(
      `articles/${slug}/favorite`
    );
  }

  unfavoriteQuery(slug: string): Observable<ArticleResponse> {
    return this.apiService.delete<ArticleResponse>(
      `articles/${slug}/favorite`
    );
  }

  favorite(slug: string): void {
    this.store.dispatch(favorite({ slug }));
  }

  unfavorite(slug: string): void {
    this.store.dispatch(unfavorite({ slug }));
  }
}

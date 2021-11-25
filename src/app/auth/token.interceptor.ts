import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageJwtService } from './local-storage-jwt.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private localStorage: LocalStorageJwtService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let token: string | null = null;
    this.localStorage.getItem().subscribe((t) => (token = t));
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Token ${token}`,
        },
      });
    }
    return next.handle(request);
  }
}

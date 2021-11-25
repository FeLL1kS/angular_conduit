import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { login, register } from '../reducers/auth/auth.actions';
import {
  errorMessagesSelector,
  isLoggedInSelector,
} from '../reducers/auth/auth.selectors';
import {
  NewUser,
  NewUserRequest,
  UserCredentials,
  UserLoginRequest,
  UserResponse,
} from './auth.interfaces';

@Injectable()
export class AuthService {
  isLoggedIn$ = this.store.select(isLoggedInSelector);
  errorMessages$ = this.store.select(errorMessagesSelector);

  constructor(private store: Store, private apiService: ApiService) {}

  getUser(): Observable<UserResponse> {
    return this.apiService.get<UserResponse>('user');
  }

  register(user: NewUser): void {
    this.store.dispatch(register({ user }));
  }

  login(user: UserCredentials): void {
    this.store.dispatch(login({ user }));
  }

  loginQuery(credentials: UserCredentials): Observable<UserResponse> {
    return this.apiService.post<UserResponse, UserLoginRequest>('users/login', {
      user: credentials,
    });
  }

  registerQuery(newUserData: NewUser): Observable<UserResponse> {
    return this.apiService.post<UserResponse, NewUserRequest>('users', {
      user: newUserData,
    });
  }
}

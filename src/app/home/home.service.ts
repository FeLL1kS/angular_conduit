import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from '../reducers/auth/auth.actions';

@Injectable()
export class HomeService {
  constructor(private store: Store) {}

  logout(): void {
    this.store.dispatch(logout());
  }
}

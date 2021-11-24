import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, take } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { LocalStorageJwtService } from './auth/local-storage-jwt.service';
import { getUser } from './reducers/auth/auth.actions';
import {
  isLoggedInSelector,
  userSelector,
} from './reducers/auth/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user$ = this.store.select(userSelector);
  isLoggedIn$ = this.store.select(isLoggedInSelector);

  constructor(
    private store: Store,
    private localStorageJwtService: LocalStorageJwtService
  ) {
    this.localStorageJwtService
      .getItem()
      .pipe(
        take(1),
        filter((token) => !!token)
      )
      .subscribe(() => this.store.dispatch(getUser()));
  }
}

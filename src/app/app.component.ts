import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, ReplaySubject, take, takeUntil } from 'rxjs';
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
export class AppComponent implements OnDestroy {
  user$ = this.store.select(userSelector);
  isLoggedIn$ = this.store.select(isLoggedInSelector);

  destroy$: ReplaySubject<any> = new ReplaySubject<any>(1);

  constructor(
    private store: Store,
    private localStorageJwtService: LocalStorageJwtService
  ) {
    this.localStorageJwtService
      .getItem()
      .pipe(
        filter((token) => !!token),
        takeUntil(this.destroy$)
      )
      .subscribe(() => this.store.dispatch(getUser()));
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}

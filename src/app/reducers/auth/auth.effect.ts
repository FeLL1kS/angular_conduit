import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { LocalStorageJwtService } from 'src/app/auth/local-storage-jwt.service';
import {
  getUser,
  getUserSuccess,
  getUserUnsuccess,
  login,
  loginSuccess,
  loginUnsuccess,
  logout,
  register,
  registerSuccess,
  registerUnsuccess,
} from './auth.actions';

@Injectable()
export class AuthEffect {
  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUser),
      switchMap(() =>
        this.authService.getUser().pipe(
          map((response) => getUserSuccess({ user: response.user })),
          catchError((errors) =>
            of(getUserUnsuccess({ errorMessages: errors.error.errors }))
          )
        )
      )
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap((action) =>
        this.authService.loginQuery(action.user).pipe(
          map((respose) => {
            this.router.navigateByUrl('/');
            return loginSuccess({ user: respose.user });
          }),
          catchError((errors) =>
            of(loginUnsuccess({ errorMessages: errors.error.errors }))
          )
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      exhaustMap((action) =>
        this.authService.registerQuery(action.user).pipe(
          map((response) => {
            this.router.navigateByUrl('/');
            return registerSuccess({ user: response.user });
          }),
          catchError((errors) =>
            of(registerUnsuccess({ errorMessages: errors.error.errors }))
          )
        )
      )
    )
  );

  loginOrRegisterSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess, registerSuccess),
        tap((action) => {
          this.localStorageJwtService.setItem(action.user.token);
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => {
          this.localStorageJwtService.removeItem();
          this.router.navigateByUrl('/login');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private localStorageJwtService: LocalStorageJwtService,
    private router: Router
  ) {}
}

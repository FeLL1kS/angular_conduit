import { createAction, props } from '@ngrx/store';
import { NewUser } from 'src/app/auth/auth.interfaces';
import { Errors, User } from './auth.reducer';

export enum AuthActions {
  GetUser = '[AUTH] GetUser',
  GetUserSuccess = '[AUTH] GetUserSuccess',
  GetUserUnsuccess = '[AUTH] GetUserUnsuccess',
  Login = '[AUTH] Login',
  LoginSuccess = '[AUTH] LoginSuccess',
  LoginUnsuccess = '[AUTH] LoginUnsuccess',
  Register = '[AUTH] Register',
  RegisterSuccess = '[AUTH] RegisterSuccess',
  RegisterUnsuccess = '[AUTH] RegisterUnsuccess',
  AddErrorMessage = '[AUTH] AddErrorMessage',
}

export const getUser = createAction(AuthActions.GetUser);

export const getUserSuccess = createAction(
  AuthActions.GetUserSuccess,
  props<{ user: User }>()
);

export const getUserUnsuccess = createAction(
  AuthActions.GetUserUnsuccess,
  props<{ errorMessages: Errors }>()
);

export const login = createAction(AuthActions.Login);

export const loginSuccess = createAction(
  AuthActions.LoginSuccess,
  props<{ user: User }>()
);

export const loginUnsuccess = createAction(
  AuthActions.LoginUnsuccess,
  props<{ errorMessages: Errors }>()
);

export const register = createAction(
  AuthActions.Register,
  props<{ user: NewUser }>()
);

export const registerSuccess = createAction(
  AuthActions.RegisterSuccess,
  props<{ user: User }>()
);

export const registerUnsuccess = createAction(
  AuthActions.RegisterUnsuccess,
  props<{ errorMessages: Errors }>()
);

export const addErorrMessage = createAction(
  AuthActions.AddErrorMessage,
  props<{ errorMessages: Errors }>()
);

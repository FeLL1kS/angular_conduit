import { createReducer, on } from '@ngrx/store';
import {
  addErorrMessage,
  getUserSuccess,
  getUserUnsuccess,
  loginSuccess,
  loginUnsuccess,
  logout,
  registerSuccess,
  registerUnsuccess,
} from './auth.actions';

export interface User {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}

export interface Errors {
  [key: string]: string;
}

export interface AuthState {
  isLoggenIn: boolean;
  user: User;
  errorMessages: Errors;
}

const initialState: AuthState = {
  isLoggenIn: false,
  user: {
    email: '',
    token: '',
    username: '',
    bio: '',
    image: '',
  },
  errorMessages: {},
};

export const authReducer = createReducer(
  initialState,
  on(getUserSuccess, (state, payload) => ({
    ...state,
    isLoggenIn: true,
    user: payload.user,
    errorMessages: {},
  })),
  on(getUserUnsuccess, (state, payload) => ({
    ...state,
    errorMessages: payload.errorMessages,
  })),
  on(loginSuccess, (state, payload) => ({
    ...state,
    isLoggenIn: true,
    user: payload.user,
    errorMessages: {},
  })),
  on(loginUnsuccess, (state, payload) => ({
    ...state,
    errorMessages: payload.errorMessages,
  })),
  on(registerSuccess, (state, payload) => ({
    ...state,
    isLoggenIn: true,
    user: payload.user,
    errorMessages: {},
  })),
  on(registerUnsuccess, (state, payload) => ({
    ...state,
    errorMessages: payload.errorMessages,
  })),
  on(logout, () => ({
    ...initialState,
  })),
  on(addErorrMessage, (state, payload) => ({
    ...state,
    errorMessages: {
      ...state.errorMessages,
      ...payload.errorMessages,
    },
  }))
);

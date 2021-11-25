import { User } from '../reducers/auth/auth.reducer';

export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserLoginRequest {
  user: UserCredentials;
}

export interface NewUser {
  username: string;
  email: string;
  password: string;
}

export interface NewUserRequest {
  user: NewUser;
}

export interface UserResponse {
  user: User;
}

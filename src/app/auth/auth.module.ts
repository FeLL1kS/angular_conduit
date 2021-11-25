import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from '../reducers/auth/auth.effect';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalStorageJwtService } from './local-storage-jwt.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffect]),
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]),
  ],
  providers: [
    AuthService,
    LocalStorageJwtService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class AuthModule {}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLoggedIn$
      .pipe(map((isLoggedIn) => isLoggedIn))
      .subscribe((isLoggedIn) => isLoggedIn && this.router.navigateByUrl('/'));
  }
}

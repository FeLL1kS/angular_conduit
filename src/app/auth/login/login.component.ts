import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  unsubscribe$: Subscription = new Subscription();
  errors: string[] = [];

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService, private router: Router) {
    this.unsubscribe$.add(
      this.authService.isLoggedIn$
        .pipe(map((isLoggedIn) => isLoggedIn))
        .subscribe((isLoggedIn) => isLoggedIn && this.router.navigateByUrl('/'))
    );

    this.unsubscribe$.add(
      this.authService.errorMessages$.subscribe((errors) => {
        this.errors = Object.keys(errors || {}).map(
          (key) => `${key} ${errors[key]}`
        );
      })
    );
  }

  submit(): void {
    this.authService.login(this.form.value);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.unsubscribe();
  }
}

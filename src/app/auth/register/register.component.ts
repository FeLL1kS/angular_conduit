import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnDestroy {
  unsubscribe$!: Subscription;
  errors: string[] = [];

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLoggedIn$
      .pipe(map((isLoggedIn) => isLoggedIn))
      .subscribe((isLoggedIn) => isLoggedIn && this.router.navigateByUrl('/'));
    this.unsubscribe$ = this.authService.errorMessages$.subscribe((errors) => {
      this.errors = Object.keys(errors || {}).map(
        (key) => `${key} ${errors[key]}`
      );
    });
  }

  submit(): void {
    this.authService.register(this.form.value);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.unsubscribe();
  }
}

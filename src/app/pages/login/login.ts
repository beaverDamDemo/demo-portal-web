import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthInterface } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { LoginAndRegisterForm } from "../../components/login-and-register-form/login-and-register-form";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  imports: [LoginAndRegisterForm],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);
  isSubmitted: boolean = false;

  constructor(
    public authService: AuthService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {

  };

  onFormSubmit(credentials: any) {
    this.authService
      .login(credentials)
      .subscribe({
        next: (res: UserAuthInterface) => {
          // Save token
          localStorage.setItem('token', res.access_token);

          // Decode token to extract email
          const payloadBase64 = res.access_token.split('.')[1];
          const payloadJson = atob(payloadBase64);
          const payload = JSON.parse(payloadJson);

          const email = payload.email;

          // Update auth state
          this.authService.currentUserSig.set(email);
          this.authService.SetState(email);

          console.log('✅ Login successful:', res, '- Navigating to profile');

          this._snackBar.open("Logged in successfully", 'Close', {
            panelClass: ['snackbar-success'],
            duration: 3000
          });

          this.router.navigate(['/profile']);
        },
        error: (err) => {
          console.error('Logged failed', err);
          const errorMessage =
            err?.error?.message
              ? err.error.message
              : typeof err.error === 'string'
                ? err.error
                : err.error?.errors?.title || 'An error occurred';
          this._snackBar.open(errorMessage, 'Close', {
            panelClass: ['snackbar-error'],
            duration: 5000
          });
        },
      });
    this.isSubmitted = true;
  }
}

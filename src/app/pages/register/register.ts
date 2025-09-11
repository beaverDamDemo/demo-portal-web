import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthInterface } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { LoginAndRegisterForm } from "../../components/login-and-register-form/login-and-register-form";
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  imports: [LoginAndRegisterForm],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
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
      .register(credentials)
      .subscribe({
        next: (res: UserAuthInterface) => {
          // localStorage.setItem('token', res.token);
          // this.authService.currentUserSig.set(res.username);
          // this.authService.SetState(res.username);
          console.log('✅ Register successful:', res, '- Navigating to login');
          this._snackBar.open("Registered successfully", 'Close', {
            panelClass: ['snackbar-success'],
            duration: 3000
          });
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Register failed', err);
          const errorMessage =
            err?.error?.message
              ? err.error.message
              : typeof err.error === 'string'
                ? err.error
                : err.error?.errors?.title || 'An error occurred';
          this._snackBar.open(errorMessage, 'Close', {
            panelClass: ['snackbar-error'],
            duration: 10000
          });
        },
      });
    this.isSubmitted = true;
  }
}

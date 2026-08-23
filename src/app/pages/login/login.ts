import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {

  };

  onFormSubmit(credentials: any) {
    this.authService
      .login(credentials)
      .subscribe({
        next: (res: UserAuthInterface) => {
          this.authService.saveToken(res.access_token);

          this._snackBar.open("Logged in successfully", 'Close', {
            panelClass: ['snackbar-success'],
            duration: 3000
          });

          const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigateByUrl(this.isInternalReturnUrl(returnUrl) ? returnUrl : '/');
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

  private isInternalReturnUrl(url: string | null): url is string {
    return !!url && url.startsWith('/') && !url.startsWith('//');
  }
}

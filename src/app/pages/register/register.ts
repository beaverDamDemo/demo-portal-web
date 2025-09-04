import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthInterface } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth';
import { LoginAndRegisterForm } from "../../components/login-and-register-form/login-and-register-form";

@Component({
  selector: 'app-register',
  imports: [LoginAndRegisterForm],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  isSubmitted: boolean = false;

  constructor(
    public authService: AuthService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {

  };

  onFormSubmit(credentials: any) {
    console.log("Form submitted:", credentials);
    this.authService
      .register(credentials)
      .subscribe({
        next: (res: UserAuthInterface) => {
          localStorage.setItem('token', res.token);
          this.authService.currentUserSig.set(res.username);
          this.authService.SetState(res.username);
          console.log('Register successful', res);
          console.log("RegisterComponent Navigating to profile");
          this.router.navigate(['/profile']);
        },
        error: (err) => {
          console.error('Register failed', err);
        },
      });
    this.isSubmitted = true;
  }
}

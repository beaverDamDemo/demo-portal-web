import { Component, effect, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthInterface } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  // optionalRoles = [
  //   { id: 1, name: 'Admin', value: 'admin' },
  //   { id: 2, name: 'User', value: 'user' },
  //   { id: 3, name: 'Guest', value: 'guest' },
  // ];

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      // optionalRoleId: [1, Validators.required],
    });

    effect(() => {
      const now = new Date().toLocaleTimeString();
      console.log(
        `%c🕒 ${now} → currentUserSig:`,
        'color: dodgerblue; font-style: italic;',
        this.authService.currentUserSig()
      );
      if (this.authService.currentUserSig()) {
        console.log("Navigating to profile");
        this.loginForm.disable();
        this.router.navigate(['/profile']);
      } else if (this.authService.currentUserSig() === null) {
        console.log('Now we should enable it');
        this.loginForm.enable();
      }
    });

    const loginButton = document.getElementById('login-button');
    if (loginButton) {
      loginButton.addEventListener('click', function (event) {
        event.preventDefault();

        const form = document.querySelector('form');
        if (form) {
          form.style.transition = 'opacity 0.5s ease';
          form.style.opacity = '0';
          setTimeout(() => {
            form.style.display = 'none';
          }, 500);
        }

        const wrapper = document.querySelector('.wrapper');
        if (wrapper) {
          wrapper.classList.add('form-success');
        }
      });
    }
  }

  ngOnInit(): void {
    // this.loginForm.get('optionalRoleId')?.valueChanges.subscribe((optionalRoleId) => {
    //   const selectedRole = this.optionalRoles.find(
    //     (role) => role.id === optionalRoleId
    //   );
    //   if (selectedRole) {
    //     console.log(
    //       `Role selected: [ID: ${selectedRole.id}, Name: ${selectedRole.name}, Value: ${selectedRole.value}]`
    //     );
    //   }
    // });
  };

  onSubmit() {
    this.authService
      .login(this.loginForm.value, this.loginForm.invalid)
      .subscribe({
        next: (res: UserAuthInterface) => {
          localStorage.setItem('token', res.token);
          this.authService.currentUserSig.set(res.username);
          this.authService.SetState(res.username);
          console.log('Login successful', res);
          console.log("LoginComponent Navigating to profile");
          this.router.navigate(['/profile']);
        },
        error: (err) => {
          console.error('Login failed', err);
        },
      });
    this.isSubmitted = true;
  }
}

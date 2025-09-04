import { Component, effect, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login-and-register-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-and-register-form.html',
  styleUrl: './login-and-register-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginAndRegisterForm implements OnInit {
  authForm!: FormGroup;
  isSubmitted = false;
  // optionalRoles = [
  //   { id: 1, name: 'Admin', value: 'admin' },
  //   { id: 2, name: 'User', value: 'user' },
  //   { id: 3, name: 'Guest', value: 'guest' },
  // ];
  @Input() mode: 'login' | 'register' = 'login';
  @Output() formSubmit = new EventEmitter<any>();

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    effect(() => {
      const now = new Date().toLocaleTimeString();
      console.log(
        `%c🕒 ${now} → currentUserSig:`,
        'color: dodgerblue; font-style: italic;',
        this.authService.currentUserSig()
      );
      if (this.authService.currentUserSig()) {
        console.log("Navigating to profile");
        this.authForm.disable();
        this.router.navigate(['/profile']);
      } else if (this.authService.currentUserSig() === null) {
        console.log('Now we should enable it');
        this.authForm.enable();
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
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      ...(this.mode === 'register' && {
        confirmPassword: ['', Validators.required],
      }),
      // optionalRoleId: [1, Validators.required],
    });
    // this.authForm.get('optionalRoleId')?.valueChanges.subscribe((optionalRoleId) => {
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
    this.formSubmit.emit(this.authForm.value);
    this.isSubmitted = true;
  }
}

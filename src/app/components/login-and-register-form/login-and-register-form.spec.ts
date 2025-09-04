import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAndRegisterForm } from './login-and-register-form';

describe('LoginAndRegisterForm', () => {
  let component: LoginAndRegisterForm;
  let fixture: ComponentFixture<LoginAndRegisterForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginAndRegisterForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAndRegisterForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

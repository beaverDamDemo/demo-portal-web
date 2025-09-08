import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthInterface, UserInterface } from '../interfaces/user.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthFormValue } from '../interfaces/authFormValue.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUserSig = signal<any | null>(undefined);
  private stateItem: BehaviorSubject<any | null> = new BehaviorSubject(null);
  stateItem$: Observable<any | null> = this.stateItem.asObservable();

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient, private router: Router) { }

  private authRequest(path: string, authFormValue: any) {
    const { email, username, password, confirmPassword } = authFormValue;
    return this.http.post<UserAuthInterface>(
      `${this.API_URL}/auth/${path}`,
      { email, username, password, confirmPassword }
    );
  }

  login(authFormValue: AuthFormValue) {
    return this.authRequest('login', authFormValue);
  }

  register(authFormValue: AuthFormValue) {
    return this.authRequest('register', authFormValue);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.currentUserSig.set(null);
    this.router.navigate(['/login']);
  }

  get(): Observable<UserInterface | null> {
    return this.http.get<UserInterface>(`${this.API_URL}/auth/profile`);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  SetState(item: any) {
    this.stateItem.next(item);
  }

  RemoveState() {
    this.stateItem.next(null);
  }
}

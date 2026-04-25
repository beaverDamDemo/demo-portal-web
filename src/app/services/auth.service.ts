import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthFormValue } from '../interfaces/authFormValue.interface';
import { UserAuthInterface, UserInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUserSig = signal<string | null>(null);
  private stateItem = new BehaviorSubject<any | null>(null);
  stateItem$ = this.stateItem.asObservable();

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient, private router: Router) {
    this.loadUserFromToken();
  }

  private loadUserFromToken() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.currentUserSig.set(null);
      return;
    }

    try {
      const payloadBase64 = token.split('.')[1];
      if (!payloadBase64) throw new Error('Invalid token format');

      const payloadJson = atob(payloadBase64);
      const payload = JSON.parse(payloadJson);

      // NestJS JWT payload: { sub, email }
      const email = payload.email;

      this.currentUserSig.set(email ?? null);
    } catch (err) {
      console.warn('Invalid token, clearing...', err);
      localStorage.removeItem('token');
      this.currentUserSig.set(null);
    }
  }

  private authRequest(path: string, authFormValue: any) {
    const { email, password } = authFormValue;

    return this.http.post<UserAuthInterface>(
      `${this.API_URL}/auth/${path}`,
      { email, password }
    );
  }

  login(authFormValue: AuthFormValue) {
    return this.authRequest('login', authFormValue);
  }

  register(authFormValue: AuthFormValue) {
    return this.authRequest('register', authFormValue);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
    this.loadUserFromToken();
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSig.set(null);
    this.router.navigate(['/login']);
  }

  get(): Observable<UserInterface | null> {
    return this.http.get<UserInterface>(`${this.API_URL}/auth/profile`);
  }

  SetState(item: any) {
    this.stateItem.next(item);
  }
}

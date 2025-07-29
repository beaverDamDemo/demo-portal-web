import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthInterface, UserInterface } from '../interfaces/user.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUserSig = signal<any | null>(undefined);
  private stateItem: BehaviorSubject<any | null> = new BehaviorSubject(null);
  stateItem$: Observable<any | null> = this.stateItem.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  login(loginFormValue: any, invalid: boolean) {
    const { username, password } = loginFormValue;
    return this.http.post<UserAuthInterface>(
      'http://localhost:3000/auth/login',
      { username, password }
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.currentUserSig.set(null);
    this.router.navigate(['/login']);
  }

  get(): Observable<UserInterface | null> {
    return this.http.get<UserInterface>('http://localhost:3000/auth/user');
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

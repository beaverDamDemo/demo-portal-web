import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'cars',
    loadComponent: () => import('./pages/cars/cars').then((m) => m.Cars),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'pilot-tower-sockets',
    loadComponent: () => import('./pages/pilot-tower-sockets/pilot-tower-sockets').then((m) => m.PilotTowerSockets),
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile').then((m) => m.Profile),
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register').then((m) => m.RegisterComponent),
  },
  {
    path: 'todos',
    loadComponent: () => import('./pages/todos-component/todos-component').then((m) => m.TodosComponent),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];

import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Theme, ThemeService } from './services/theme-service';
import { AuthService } from './services/auth.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MatToolbarModule, MatDividerModule, MatButtonModule, MatIconModule, MatProgressBarModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('Demo Portal');
  currentTheme: Theme = 'light';
  private readonly themeService = inject(ThemeService);
  private readonly http = inject(HttpClient);
  public readonly authService = inject(AuthService);
  currentYear = new Date().getFullYear();
  loading = false;
  isProduction = environment.production;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loading = false;
      }
    });
  }

  ngOnInit() {
    console.log(`Built at ${environment.buildDate}`);

    this.http.get(`${environment.API_URL}/health`).subscribe({
      next: response => console.log('%cBackend health response:', 'color: green; font-weight: bold;', response),
      error: error => console.error('%cBackend health check failed:', 'color: red; font-weight: bold;', error),
    });

    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  isActive(url: string): boolean {
    return this.router.url === url;
  }
}

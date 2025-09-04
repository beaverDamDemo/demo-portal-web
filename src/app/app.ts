import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Theme, ThemeService } from './services/theme-service';
import { AuthService } from './services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MatToolbarModule, MatDividerModule, MatButtonModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('web-demo-portal');
  currentTheme: Theme = 'light';
  private readonly themeService = inject(ThemeService);
  public readonly authService = inject(AuthService);
  currentYear = new Date().getFullYear();

  constructor(private router: Router) { }

  ngOnInit() {
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });

    this.authService.get().subscribe({
      next: (res) => {
        this.authService.currentUserSig.set(res);
        console.log("🎉 ~ AppComponent ~ this.authService.get ~ res:", res);
      },
      error: (e: Error) => {
        console.log("🎉 ~ AppComponent ~ this.authService.get ~ e:", e);
        this.authService.currentUserSig.set(null);
      }
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  isActive(url: string): boolean {
    return this.router.url === url;
  }
}

import { AuthService } from '../../services/auth';
import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile implements AfterViewInit {
  constructor(public authService: AuthService,
    private el: ElementRef,
    private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const buttons = this.el.nativeElement.querySelectorAll(
      '.card-buttons button'
    );
    const sections = this.el.nativeElement.querySelectorAll('.card-section');
    const card = this.el.nativeElement.querySelector('.card');

    buttons.forEach((button: HTMLButtonElement) => {
      this.renderer.listen(button, 'click', (e: Event) => {
        const target = e.target as HTMLElement;
        const targetSection = target.getAttribute('data-section');
        const section = this.el.nativeElement.querySelector(targetSection);

        if (!card || !section) return;

        targetSection !== '#about'
          ? card.classList.add('is-active')
          : card.classList.remove('is-active');

        card.setAttribute('data-state', targetSection!);

        sections.forEach((s: HTMLElement) => s.classList.remove('is-active'));
        buttons.forEach((b: HTMLButtonElement) =>
          b.classList.remove('is-active')
        );

        target.classList.add('is-active');
        section.classList.add('is-active');
      });
    });
  }
}

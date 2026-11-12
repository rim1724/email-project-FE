import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footerauth',
  styleUrl: './footer-auth.component.css',
  templateUrl: './footer-auth.component.html',
})
export class Footerauth {
  readonly selectedLanguage = signal('vi');

  changeLanguage(event: Event): void {
    const target = event.target;

    if (target instanceof HTMLSelectElement) {
      this.selectedLanguage.set(target.value);
    }
  }
}

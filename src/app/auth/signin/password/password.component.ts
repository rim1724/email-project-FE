import { Component, inject, output, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Footerauth } from '../../footer-auth/footer-auth.component';

@Component({
  imports: [ReactiveFormsModule, Footerauth],
  selector: 'app-password',
  styleUrl: './password.component.css',
  templateUrl: './password.component.html',
})
export class Password {
  private readonly router = inject(Router);
  readonly accountEmail = signal(this.getAccountEmail());
  readonly passwordSubmitted = output<string>();
  readonly forgotPasswordRequested = output<void>();
  readonly accountChangeRequested = output<void>();
  readonly showPassword = signal(false);

  readonly password = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  private getAccountEmail(): string {
    const accountEmail = this.router.getCurrentNavigation()?.extras.state?.['accountEmail'];
    return typeof accountEmail === 'string' ? accountEmail : '';
  }

  togglePassword(event: Event): void {
    const target = event.target;

    if (target instanceof HTMLInputElement) {
      this.showPassword.set(target.checked);
    }
  }

  submit(event: SubmitEvent): void {
    event.preventDefault();
    this.password.markAsTouched();

    if (this.password.invalid) {
      return;
    }
  }
}

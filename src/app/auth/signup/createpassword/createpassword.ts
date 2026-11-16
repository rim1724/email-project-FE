import { NgOptimizedImage } from '@angular/common';
import { Component, output, signal } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Footerauth } from '../../footer-auth/footer-auth.component';

function passwordsMatch(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmation = control.get('confirmation')?.value;

  if (!password || !confirmation) {
    return null;
  }

  return password === confirmation ? null : { passwordMismatch: true };
}

@Component({
  imports: [Footerauth, NgOptimizedImage, ReactiveFormsModule, RouterLink],
  selector: 'app-createpassword',
  styleUrl: './createpassword.css',
  templateUrl: './createpassword.html',
})
export class Createpassword {
  readonly passwordSubmitted = output<string>();
  readonly showPassword = signal(false);

  readonly password = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(8)],
  });
  readonly confirmation = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });
  readonly form = new FormGroup(
    {
      password: this.password,
      confirmation: this.confirmation,
    },
    { validators: passwordsMatch },
  );

  submit(event: Event): void {
    event.preventDefault();
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    this.passwordSubmitted.emit(this.password.value);
  }

  togglePassword(event: Event): void {
    const target = event.target;

    if (target instanceof HTMLInputElement) {
      this.showPassword.set(target.checked);
    }
  }
}

import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Footerauth } from '../../footer-auth/footer-auth.component';

const emailOrPhoneValidator: ValidatorFn = (control): ValidationErrors | null => {
  const value = String(control.value ?? '').trim();

  if (!value) {
    return null;
  }

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isPhone = /^\+?[\d\s().-]{7,20}$/.test(value) && /\d/.test(value);

  return isEmail || isPhone ? null : { invalidIdentifier: true };
};

@Component({
  imports: [ReactiveFormsModule, RouterLink, Footerauth],
  selector: 'app-identifier',
  styleUrl: './identifier.component.css',
  templateUrl: './identifier.component.html',
})
export class Identifier {
  readonly forgotIdentifierRequested = output<void>();
  readonly guestModeHelpRequested = output<void>();

  readonly identifier = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, emailOrPhoneValidator],
  });

}

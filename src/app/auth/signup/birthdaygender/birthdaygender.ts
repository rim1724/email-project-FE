import { Location, NgOptimizedImage } from '@angular/common';
import { Component, inject, output, signal } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Footerauth } from '../../footer-auth/footer-auth.component';

function validBirthday(control: AbstractControl): ValidationErrors | null {
  const dayValue = control.get('day')?.value;
  const monthValue = control.get('month')?.value;
  const yearValue = control.get('year')?.value;

  if (!dayValue || !monthValue || !yearValue) {
    return null;
  }

  const day = Number(dayValue);
  const month = Number(monthValue);
  const year = Number(yearValue);

  return day <= new Date(year, month, 0).getDate() ? null : { invalidDate: true };
}

@Component({
  imports: [Footerauth, NgOptimizedImage, ReactiveFormsModule],
  selector: 'app-birthdaygender',
  styleUrl: './birthdaygender.css',
  templateUrl: './birthdaygender.html',
})
export class Birthdaygender {
  private readonly router = inject(Router);
  private readonly location = inject(Location);

  readonly thisYear = new Date().getFullYear();
  readonly birthdayGenderSubmitted = output<{
    day: number;
    month: number;
    year: number;
    gender: string;
  }>();
  readonly reasonExpanded = signal(false);

  readonly day = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.pattern(/^\d{1,2}$/),
      Validators.min(1),
      Validators.max(31),
    ],
  });
  readonly month = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });
  readonly year = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.pattern(/^\d{4}$/),
      Validators.min(1900),
      Validators.max(this.thisYear),
    ],
  });
  readonly gender = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });
  readonly form = new FormGroup(
    {
      day: this.day,
      month: this.month,
      year: this.year,
      gender: this.gender,
    },
    { validators: validBirthday },
  );

  readonly months = [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ];

  submit(event: Event): void {
    event.preventDefault();
    this.continue();

    if (this.form.valid) {
      const state = this.location.getState();
      const signupName =
        typeof state === 'object' && state !== null && 'signupName' in state
          ? state.signupName
          : null;
      void this.router.navigateByUrl('/username', {
        state: signupName ? { signupName } : {},
      });
    }
  }

  continue(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    this.birthdayGenderSubmitted.emit({
      day: Number(this.day.value),
      month: Number(this.month.value),
      year: Number(this.year.value),
      gender: this.gender.value,
    });
  }
}

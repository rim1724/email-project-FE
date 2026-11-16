import { Location, NgOptimizedImage } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject, output, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Footerauth } from '../../footer-auth/footer-auth.component';

type UsernameChoice = 'suggestion-1' | 'suggestion-2' | 'custom';

function normalizeNamePart(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd')
    .replace(/[^a-zA-Z0-9]/g, '')
    .toLowerCase();
}

function randomSuffix(usedSuffixes: Set<number>): string {
  const digitCount = Math.floor(Math.random() * 4) + 2;
  const minimum = 10 ** (digitCount - 1);
  let suffix = minimum + Math.floor(Math.random() * (9 * minimum));

  while (usedSuffixes.has(suffix)) {
    suffix = minimum + Math.floor(Math.random() * (9 * minimum));
  }

  usedSuffixes.add(suffix);
  return String(suffix);
}

function getSignupName(state: unknown): { firstName: string; lastName: string } | null {
  if (typeof state !== 'object' || state === null || !('signupName' in state)) {
    return null;
  }

  const signupName = state.signupName;

  if (
    typeof signupName !== 'object' ||
    signupName === null ||
    !('firstName' in signupName) ||
    !('lastName' in signupName)
  ) {
    return null;
  }

  const { firstName, lastName } = signupName;
  return typeof firstName === 'string' && typeof lastName === 'string'
    ? { firstName, lastName }
    : null;
}

@Component({
  imports: [Footerauth, NgOptimizedImage, ReactiveFormsModule],
  selector: 'app-username',
  styleUrl: './username.css',
  templateUrl: './username.html',
})
export class Username {
  private readonly router = inject(Router);
  private readonly location = inject(Location);

  readonly usernameSubmitted = output<string>();
  readonly suggestions = this.createSuggestions();
  readonly selectedChoice = signal<UsernameChoice>('suggestion-2');

  readonly username = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30),
      Validators.pattern(/^[a-zA-Z0-9.]+$/),
    ],
  });

  submit(event: Event): void {
    event.preventDefault();

    if (this.continue()) {
      void this.router.navigateByUrl('/createpassword');
    }
  }

  selectChoice(choice: UsernameChoice): void {
    this.selectedChoice.set(choice);
    this.username.markAsUntouched();
  }

  continue(): boolean {
    const selectedSuggestion = this.suggestions.find(
      (suggestion) => suggestion.id === this.selectedChoice(),
    );

    if (selectedSuggestion) {
      this.usernameSubmitted.emit(selectedSuggestion.username);
      return true;
    }

    this.username.markAsTouched();

    if (this.username.invalid) {
      return false;
    }

    this.usernameSubmitted.emit(this.username.value.trim());
    return true;
  }

  private createSuggestions() {
    const signupName = getSignupName(this.location.getState());
    const firstName = normalizeNamePart(signupName?.firstName ?? '');
    const lastName = normalizeNamePart(signupName?.lastName ?? '');
    const firstBase = `${lastName}${firstName}` || 'user';
    const secondBase = `${firstName}${lastName}` || 'user';
    const usedSuffixes = new Set<number>();

    return [
      {
        id: 'suggestion-1',
        username: `${firstBase}${randomSuffix(usedSuffixes)}`,
      },
      {
        id: 'suggestion-2',
        username: `${secondBase}${randomSuffix(usedSuffixes)}`,
      },
    ] as const;
  }
}

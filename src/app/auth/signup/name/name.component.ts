import { Component, inject, output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Footerauth } from '../../footer-auth/footer-auth.component';

@Component({
  imports: [ReactiveFormsModule, Footerauth],
  selector: 'app-name',
  styleUrl: './name.component.css',
  templateUrl: './name.component.html',
})
export class Name {
  private readonly router = inject(Router);

  readonly nameSubmitted = output<{ firstName: string; lastName: string }>();

  readonly firstName = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });
  readonly lastName = new FormControl('', { nonNullable: true });

  submit(event: Event): void {
    event.preventDefault();
    const signupName = this.continue();

    if (signupName) {
      void this.router.navigateByUrl('/birthdaygender', { state: { signupName } });
    }
  }

  continue(): { firstName: string; lastName: string } | null {
    this.firstName.markAsTouched();

    if (this.firstName.invalid) {
      return null;
    }

    const signupName = {
      firstName: this.firstName.value.trim(),
      lastName: this.lastName.value.trim(),
    };
    this.nameSubmitted.emit(signupName);

    return signupName;
  }
}

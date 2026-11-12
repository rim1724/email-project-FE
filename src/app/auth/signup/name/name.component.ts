import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Footerauth } from '../../footer-auth/footer-auth.component';

@Component({
  imports: [ReactiveFormsModule, Footerauth],
  selector: 'app-name',
  styleUrl: './name.component.css',
  templateUrl: './name.component.html',
})
export class Name {
  readonly nameSubmitted = output<{ firstName: string; lastName: string }>();

  readonly firstName = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });
  readonly lastName = new FormControl('', { nonNullable: true });

  submit(event: Event): void {
    event.preventDefault();
    this.firstName.markAsTouched();

    if (this.firstName.invalid) {
      return;
    }

    this.nameSubmitted.emit({
      firstName: this.firstName.value.trim(),
      lastName: this.lastName.value.trim(),
    });
  }
}

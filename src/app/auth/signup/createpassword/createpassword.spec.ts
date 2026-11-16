import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { Createpassword } from './createpassword';

describe('Createpassword', () => {
  let component: Createpassword;
  let fixture: ComponentFixture<Createpassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createpassword],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Createpassword);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reveal and submit a matching password', () => {
    let submitted: string | undefined;
    component.passwordSubmitted.subscribe((value) => {
      submitted = value;
    });

    component.password.setValue('StrongPass123!');
    component.confirmation.setValue('StrongPass123!');
    component.showPassword.set(true);
    component.submit(new Event('submit'));

    expect(component.showPassword()).toBe(true);
    expect(submitted).toBe('StrongPass123!');
  });

  it('should reject confirmation that does not match', () => {
    const navigate = vi
      .spyOn(TestBed.inject(Router), 'navigateByUrl')
      .mockResolvedValue(true);
    component.password.setValue('StrongPass123!');
    component.confirmation.setValue('DifferentPass123!');
    component.submit(new Event('submit'));

    expect(component.form.hasError('passwordMismatch')).toBe(true);
    expect(navigate).not.toHaveBeenCalled();
  });

  it('navigates to the mail page when a valid password is submitted', async () => {
    const navigate = vi
      .spyOn(TestBed.inject(Router), 'navigateByUrl')
      .mockResolvedValue(true);
    component.password.setValue('StrongPass123!');
    component.confirmation.setValue('StrongPass123!');
    fixture.detectChanges();

    fixture.nativeElement.querySelector('.next-button').click();
    await fixture.whenStable();

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate.mock.calls[0][0].toString()).toBe('/mail');
  });

  it('does not navigate when the password form is invalid', async () => {
    const navigate = vi
      .spyOn(TestBed.inject(Router), 'navigateByUrl')
      .mockResolvedValue(true);

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('.next-button');
    button.click();
    await fixture.whenStable();

    expect(button.disabled).toBe(true);
    expect(navigate).not.toHaveBeenCalled();
  });
});

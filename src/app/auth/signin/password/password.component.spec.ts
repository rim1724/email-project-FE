import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { Password } from './password.component';

describe('Password', () => {
  let component: Password;
  let fixture: ComponentFixture<Password>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Password],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Password);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('navigates to the mail page after a valid password', async () => {
    const navigate = vi
      .spyOn(TestBed.inject(Router), 'navigateByUrl')
      .mockResolvedValue(true);
    let submitted: string | undefined;
    component.passwordSubmitted.subscribe((value) => {
      submitted = value;
    });
    component.password.setValue('password123');
    fixture.detectChanges();

    fixture.nativeElement.querySelector('.next-button').click();
    await fixture.whenStable();

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate.mock.calls[0][0].toString()).toBe('/mail');
    expect(submitted).toBe('password123');
  });

  it('does not navigate when the password is empty', async () => {
    const navigate = vi
      .spyOn(TestBed.inject(Router), 'navigateByUrl')
      .mockResolvedValue(true);
    fixture.detectChanges();

    const nextButton: HTMLButtonElement = fixture.nativeElement.querySelector('.next-button');
    nextButton.click();
    await fixture.whenStable();

    expect(nextButton.disabled).toBe(true);
    expect(navigate).not.toHaveBeenCalled();
  });

  it('does not navigate when another sign-in method is requested', async () => {
    const navigate = vi
      .spyOn(TestBed.inject(Router), 'navigateByUrl')
      .mockResolvedValue(true);

    fixture.nativeElement.querySelector('.forgot-password').click();
    await fixture.whenStable();

    expect(navigate).not.toHaveBeenCalled();
  });
});

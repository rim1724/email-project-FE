import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { provideRouter } from '@angular/router';
import { Router } from '@angular/router';
import { vi } from 'vitest';
import { Username } from '../username/username';
import { Birthdaygender } from './birthdaygender';

describe('Birthdaygender', () => {
  let component: Birthdaygender;
  let fixture: ComponentFixture<Birthdaygender>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Birthdaygender],
      providers: [
        provideRouter([{ path: 'username', component: Username }]),
        {
          provide: Location,
          useValue: {
            getState: () => ({
              signupName: { firstName: 'rim', lastName: 'hung' },
            }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Birthdaygender);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should limit the year field to four characters', () => {
    const yearInput =
      fixture.nativeElement.querySelector('#birthday-year') as HTMLInputElement | null;

    expect(yearInput?.maxLength).toBe(4);
  });

  it('should pass the entered name to the username step', () => {
    const router = TestBed.inject(Router);
    const navigate = vi.spyOn(router, 'navigateByUrl').mockResolvedValue(true);
    component.day.setValue('1');
    component.month.setValue('1');
    component.year.setValue('2000');
    component.gender.setValue('female');

    component.submit(new Event('submit'));

    expect(navigate).toHaveBeenCalledWith('/username', {
      state: { signupName: { firstName: 'rim', lastName: 'hung' } },
    });
  });

  it('should emit valid birthday and gender details', () => {
    let submitted:
      | {
          day: number;
          month: number;
          year: number;
          gender: string;
        }
      | undefined;
    component.birthdayGenderSubmitted.subscribe((value) => {
      submitted = value;
    });

    component.day.setValue('29');
    component.month.setValue('2');
    component.year.setValue('2000');
    component.gender.setValue('female');
    component.submit(new Event('submit'));

    expect(submitted).toEqual({
      day: 29,
      month: 2,
      year: 2000,
      gender: 'female',
    });
  });

  it('should reject a birthday that does not exist on the calendar', () => {
    component.day.setValue('29');
    component.month.setValue('2');
    component.year.setValue('2025');
    component.gender.setValue('female');

    component.submit(new Event('submit'));

    expect(component.form.hasError('invalidDate')).toBe(true);
  });
});

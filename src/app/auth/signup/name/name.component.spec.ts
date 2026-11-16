import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { vi } from 'vitest';
import { Name } from './name.component';

describe('Name', () => {
  let component: Name;
  let fixture: ComponentFixture<Name>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Name],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Name);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass the entered name to the birthday step', () => {
    const router = TestBed.inject(Router);
    const navigate = vi.spyOn(router, 'navigateByUrl').mockResolvedValue(true);
    component.lastName.setValue('hung');
    component.firstName.setValue('rim');

    component.submit(new Event('submit'));

    expect(navigate).toHaveBeenCalledWith('/birthdaygender', {
      state: { signupName: { firstName: 'rim', lastName: 'hung' } },
    });
  });
});

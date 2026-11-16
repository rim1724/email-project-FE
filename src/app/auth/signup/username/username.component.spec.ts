import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { provideRouter } from '@angular/router';
import { Username } from './username.component';

describe('Username', () => {
  let component: Username;
  let fixture: ComponentFixture<Username>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Username],
      providers: [
        provideRouter([{ path: 'createpassword', component: Username }]),
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

    fixture = TestBed.createComponent(Username);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit the selected suggested username', () => {
    let submitted: string | undefined;
    component.usernameSubmitted.subscribe((value) => {
      submitted = value;
    });

    expect(component.continue()).toBe(true);
    expect(component.suggestions[0].username).toMatch(/^hungrim\d{2,5}$/);
    expect(component.suggestions[1].username).toMatch(/^rimhung\d{2,5}$/);
    expect(submitted).toBe(component.suggestions[1].username);
  });

  it('should emit a valid username', () => {
    let submitted: string | undefined;
    component.usernameSubmitted.subscribe((value) => {
      submitted = value;
    });

    component.selectChoice('custom');
    component.username.setValue('hung.ng2026');

    expect(component.continue()).toBe(true);
    expect(submitted).toBe('hung.ng2026');
  });

  it('should reject unsupported username characters', () => {
    component.selectChoice('custom');
    component.username.setValue('hung_user');

    expect(component.continue()).toBe(false);
    expect(component.username.invalid).toBe(true);
  });
});

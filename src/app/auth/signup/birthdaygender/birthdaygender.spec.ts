import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Birthdaygender } from './birthdaygender';

describe('Birthdaygender', () => {
  let component: Birthdaygender;
  let fixture: ComponentFixture<Birthdaygender>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Birthdaygender],
    }).compileComponents();

    fixture = TestBed.createComponent(Birthdaygender);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

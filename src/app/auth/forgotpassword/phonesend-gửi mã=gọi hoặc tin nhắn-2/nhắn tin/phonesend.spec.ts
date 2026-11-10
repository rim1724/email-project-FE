import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Phonesend } from './phonesend';

describe('Phonesend', () => {
  let component: Phonesend;
  let fixture: ComponentFixture<Phonesend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Phonesend],
    }).compileComponents();

    fixture = TestBed.createComponent(Phonesend);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

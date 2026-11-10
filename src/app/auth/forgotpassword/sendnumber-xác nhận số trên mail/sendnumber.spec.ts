import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sendnumber } from './sendnumber';

describe('Sendnumber', () => {
  let component: Sendnumber;
  let fixture: ComponentFixture<Sendnumber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sendnumber],
    }).compileComponents();

    fixture = TestBed.createComponent(Sendnumber);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

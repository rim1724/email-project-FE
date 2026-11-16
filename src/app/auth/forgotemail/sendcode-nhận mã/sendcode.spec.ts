import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sendcode } from './sendcode';

describe('Sendcode', () => {
  let component: Sendcode;
  let fixture: ComponentFixture<Sendcode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sendcode],
    }).compileComponents();

    fixture = TestBed.createComponent(Sendcode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

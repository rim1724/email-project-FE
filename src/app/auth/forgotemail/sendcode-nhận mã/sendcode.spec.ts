import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sendphone } from './sendphone';

describe('Sendphone', () => {
  let component: Sendphone;
  let fixture: ComponentFixture<Sendphone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sendphone],
    }).compileComponents();

    fixture = TestBed.createComponent(Sendphone);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

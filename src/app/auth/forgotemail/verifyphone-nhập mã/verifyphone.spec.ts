import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Verifyphone } from './verifyphone';

describe('Verifyphone', () => {
  let component: Verifyphone;
  let fixture: ComponentFixture<Verifyphone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Verifyphone],
    }).compileComponents();

    fixture = TestBed.createComponent(Verifyphone);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

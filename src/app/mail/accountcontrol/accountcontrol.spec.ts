import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Accountcontrol } from './accountcontrol';

describe('Accountcontrol', () => {
  let component: Accountcontrol;
  let fixture: ComponentFixture<Accountcontrol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accountcontrol],
    }).compileComponents();

    fixture = TestBed.createComponent(Accountcontrol);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

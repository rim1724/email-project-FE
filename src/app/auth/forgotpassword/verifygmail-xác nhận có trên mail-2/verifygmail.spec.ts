import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Verifygmail } from './verifygmail';

describe('Verifygmail', () => {
  let component: Verifygmail;
  let fixture: ComponentFixture<Verifygmail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Verifygmail],
    }).compileComponents();

    fixture = TestBed.createComponent(Verifygmail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

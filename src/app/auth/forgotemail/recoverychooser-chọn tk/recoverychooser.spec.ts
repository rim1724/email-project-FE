import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Recoverychooser } from './recoverychooser';

describe('Recoverychooser', () => {
  let component: Recoverychooser;
  let fixture: ComponentFixture<Recoverychooser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recoverychooser],
    }).compileComponents();

    fixture = TestBed.createComponent(Recoverychooser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

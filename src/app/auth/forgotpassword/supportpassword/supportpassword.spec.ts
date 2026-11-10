import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Supportpassword } from './supportpassword';

describe('Supportpassword', () => {
  let component: Supportpassword;
  let fixture: ComponentFixture<Supportpassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Supportpassword],
    }).compileComponents();

    fixture = TestBed.createComponent(Supportpassword);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

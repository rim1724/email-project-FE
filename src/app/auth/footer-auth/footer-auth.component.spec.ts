import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Footerauth } from './footer-auth.component';

describe('Footerauth', () => {
  let component: Footerauth;
  let fixture: ComponentFixture<Footerauth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footerauth],
    }).compileComponents();

    fixture = TestBed.createComponent(Footerauth);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

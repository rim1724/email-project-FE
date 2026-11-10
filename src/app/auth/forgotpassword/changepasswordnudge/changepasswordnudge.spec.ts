import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Changepasswordnudge } from './changepasswordnudge';

describe('Changepasswordnudge', () => {
  let component: Changepasswordnudge;
  let fixture: ComponentFixture<Changepasswordnudge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Changepasswordnudge],
    }).compileComponents();

    fixture = TestBed.createComponent(Changepasswordnudge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Addrecoveryemail } from './addrecoveryemail';

describe('Addrecoveryemail', () => {
  let component: Addrecoveryemail;
  let fixture: ComponentFixture<Addrecoveryemail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addrecoveryemail],
    }).compileComponents();

    fixture = TestBed.createComponent(Addrecoveryemail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

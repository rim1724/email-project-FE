import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Usernamerecovery } from './usernamerecovery';

describe('Usernamerecovery', () => {
  let component: Usernamerecovery;
  let fixture: ComponentFixture<Usernamerecovery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usernamerecovery],
    }).compileComponents();

    fixture = TestBed.createComponent(Usernamerecovery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

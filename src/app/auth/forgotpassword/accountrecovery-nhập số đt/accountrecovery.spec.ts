import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Accountrecovery } from './accountrecovery';

describe('Accountrecovery', () => {
  let component: Accountrecovery;
  let fixture: ComponentFixture<Accountrecovery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accountrecovery],
    }).compileComponents();

    fixture = TestBed.createComponent(Accountrecovery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

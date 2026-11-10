import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mailsent } from './mailsent';

describe('Mailsent', () => {
  let component: Mailsent;
  let fixture: ComponentFixture<Mailsent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mailsent],
    }).compileComponents();

    fixture = TestBed.createComponent(Mailsent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

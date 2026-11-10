import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mailnavigation } from './mailnavigation';

describe('Mailnavigation', () => {
  let component: Mailnavigation;
  let fixture: ComponentFixture<Mailnavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mailnavigation],
    }).compileComponents();

    fixture = TestBed.createComponent(Mailnavigation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

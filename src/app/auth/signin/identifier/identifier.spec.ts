import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Identifier } from './identifier';

describe('Identifier', () => {
  let component: Identifier;
  let fixture: ComponentFixture<Identifier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Identifier],
    }).compileComponents();

    fixture = TestBed.createComponent(Identifier);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

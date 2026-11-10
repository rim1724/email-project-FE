import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Crossflowverification } from './crossflowverification';

describe('Crossflowverification', () => {
  let component: Crossflowverification;
  let fixture: ComponentFixture<Crossflowverification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Crossflowverification],
    }).compileComponents();

    fixture = TestBed.createComponent(Crossflowverification);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

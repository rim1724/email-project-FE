import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reviewstorage } from './reviewstorage';

describe('Reviewstorage', () => {
  let component: Reviewstorage;
  let fixture: ComponentFixture<Reviewstorage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reviewstorage],
    }).compileComponents();

    fixture = TestBed.createComponent(Reviewstorage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

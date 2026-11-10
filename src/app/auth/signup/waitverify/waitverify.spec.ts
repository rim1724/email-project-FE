import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Waitverify } from './waitverify';

describe('Waitverify', () => {
  let component: Waitverify;
  let fixture: ComponentFixture<Waitverify>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Waitverify],
    }).compileComponents();

    fixture = TestBed.createComponent(Waitverify);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

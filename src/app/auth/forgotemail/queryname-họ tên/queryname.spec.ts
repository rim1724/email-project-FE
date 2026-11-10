import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Queryname } from './queryname';

describe('Queryname', () => {
  let component: Queryname;
  let fixture: ComponentFixture<Queryname>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Queryname],
    }).compileComponents();

    fixture = TestBed.createComponent(Queryname);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

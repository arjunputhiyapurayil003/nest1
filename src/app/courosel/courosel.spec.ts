import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Courosel } from './courosel';

describe('Courosel', () => {
  let component: Courosel;
  let fixture: ComponentFixture<Courosel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Courosel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Courosel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

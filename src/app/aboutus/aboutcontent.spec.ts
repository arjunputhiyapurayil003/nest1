import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutcontent } from './aboutcontent';

describe('Aboutcontent', () => {
  let component: Aboutcontent;
  let fixture: ComponentFixture<Aboutcontent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutcontent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutcontent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

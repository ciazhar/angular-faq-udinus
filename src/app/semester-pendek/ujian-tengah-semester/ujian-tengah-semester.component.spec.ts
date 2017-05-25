import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UjianTengahSemesterComponent } from './ujian-tengah-semester.component';

describe('UjianTengahSemesterComponent', () => {
  let component: UjianTengahSemesterComponent;
  let fixture: ComponentFixture<UjianTengahSemesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UjianTengahSemesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UjianTengahSemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
